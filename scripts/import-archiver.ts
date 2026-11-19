// archiver が書き出した JSON を、モック用の Combo / OkizemeSetup / MatchupEntry に変換する。
// 使い方:
//   node scripts/import-archiver.ts            → src/mock-data/rashid-archiver.ts を書き出す
//   node scripts/import-archiver.ts --preview  → 書き出さずに先頭数件を表示
//   node scripts/import-archiver.ts --dups     → 書き出さずに、起き攻めの重複の候補（まとめるか決めていない組）を一覧
// 入力は archiver の data/rashid/*.json（doskonnbu ほか。ラシード目線）と data/matchup/*.json（ACQUA さんなど。どのキャラでも使える対策）。
// 同じコンボ（コマンドが同じ）は新しい動画の分だけ残す。同じ起き攻めは1件にまとめ、ほかの出典を alsoIn に添える
// （同じかどうかの決め方は scripts/okizeme-dedupe.ts、手で決めた分は scripts/okizeme-merge.json）。
// 技名 → コマンドの対応は docs/rashid-terms.md を読む（確定行のみ使用。変換できない語は日本語のまま残す）。

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type {
  ArchiverUnresolved, Combo, MatchupEntry, MatchupPerspective, MatchupTopic, OkizemeSetup,
} from '../src/mock-data/rashid.ts';
import { DEFAULT_PRIORITY, inferStarter, isSpecialStarter, type Position, type Priority, type Starter } from '../src/mock-data/rashid-starters.ts';
import { characterByEn, characterOrder } from '../src/lib/characters.ts';
import { dedupeOkizeme } from './okizeme-dedupe.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const INPUT_DIR = join(ROOT, '..', 'sf6-combo-archiver', 'data', 'rashid');
const MATCHUP_DIR = join(ROOT, '..', 'sf6-combo-archiver', 'data', 'matchup');
const TERMS_PATH = join(ROOT, 'docs', 'rashid-terms.md');
const OUTPUT_PATH = join(ROOT, 'src', 'mock-data', 'rashid-archiver.ts');
const HAND_DATA_PATH = join(ROOT, 'src', 'mock-data', 'rashid.ts');
const MERGE_PATH = join(ROOT, 'scripts', 'okizeme-merge.json');

const SUSTAIN = '持続当て';
// 直前の技に付く語（「2中P持続当て」「弱P空振り」）
const SUFFIXES = [SUSTAIN, '空振り'];
const DUP_TOLERANCE_SEC = 3;

// ── 入力 JSON の形 ──
type ArchiverCombo = {
  no: number; section: string; start_sec: number; recipe_ja: string;
  damage: number | null; damage_confidence: string; notes?: string; position?: Position;
};
type ArchiverSetplay = {
  no: number; ender: string; route?: string; pattern?: string; section: string; start_sec?: number; recipe_ja: string; notes?: string;
};
type ArchiverMatchupPoint = {
  no: number; topic: string; title: string; start_sec: number; scenes?: number[]; text: string;
  threat?: string | string[];                          // どの強い技・連携への対策か。無ければ立ち回り全般
  recipe_ja?: string;                                  // レシピが1つのとき
  recipes?: { label?: string; recipe_ja: string }[];   // 位置（中央 / 端）などで変わるとき
  caution?: string;                                    // 動画の後の調整で変わったことなど
};
type ArchiverMatchup = {
  opponent: string; summary?: string; threats?: { name: string; about?: string }[]; points: ArchiverMatchupPoint[];
};
// 出典は YouTube の動画（youtube_id）か、記事（source_id と url。note など。2026-11-14〜。記事はセットプレイだけ）
type ArchiverFile = {
  youtube_id: string; source_id?: string; url?: string; title: string; short_title?: string; channel: string; published_at: string;
  kind: 'combo' | 'setplay' | 'matchup'; blog?: string[]; perspective?: string;
  combos?: ArchiverCombo[]; setplays?: ArchiverSetplay[]; matchups?: ArchiverMatchup[];
};

// MATCHUP_TOPICS / MATCHUP_PERSPECTIVES（rashid.ts）と同じ。rashid.ts は生成ファイルを取り込んでいるので値は import しない
const MATCHUP_TOPICS: readonly string[] = ['立ち回り', '攻め', '守り', '対空', '反撃'];
const MATCHUP_PERSPECTIVES: readonly string[] = ['共通', 'ラシード'];

// ── 対応表の読み込み ──
// 列: 動画での表記 | コマンド | 公式技名 | 確度 | 確認 | 出現数 | メモ
// 確定 = 確度 ◎ か 確認 ✓。コマンドが「—」の行は変換しない語（日本語のまま残す）
function loadTerms(): Map<string, string | null> {
  const terms = new Map<string, string | null>();
  for (const line of readFileSync(TERMS_PATH, 'utf8').split(/\r?\n/)) {
    if (!line.startsWith('|') || line.startsWith('|---')) continue;
    const cols = line.split('|').slice(1, -1).map((c) => c.trim());
    if (cols.length < 5 || cols[0] === '動画での表記') continue;
    const [names, command, , confidence, check] = cols;
    if (confidence !== '◎' && check !== '✓') continue;
    for (const name of names.split('/').map((n) => n.trim()).filter(Boolean)) {
      terms.set(name, command === '—' ? null : command);
    }
  }
  return terms;
}

// 対応表のメモ欄にある表記ゆれ（「立弱P」も同じ、「大ミキ」とも）
const ALIASES: Record<string, string> = { '立弱P': '弱P', '立中K': '中K', '大ミキ': '大ミキサー', 'サイドフリップ': 'フリップ', '前ジャンプ': '前飛び' };

// ── レシピの変換 ──
type Converted = { text: string; unresolved: string[] };

function convertRecipe(recipe: string, terms: Map<string, string | null>): Converted {
  const dict = new Map(terms);
  for (const [alias, target] of Object.entries(ALIASES)) {
    if (dict.has(target)) dict.set(alias, dict.get(target)!);
  }
  const keys = [...dict.keys()].sort((a, b) => b.length - a.length);
  const unresolved: string[] = [];

  // 1ステップ内を最長一致で技列に分解する（「前ステ投げ」→ [66, LPLK]）
  const convertStep = (step: string): string => {
    const out: string[] = [];
    let rest = step;
    let unknown = '';
    const flushUnknown = () => {
      if (!unknown) return;
      out.push(unknown);
      unresolved.push(unknown);
      unknown = '';
    };
    while (rest) {
      const repeat = rest.match(/^(\d+)回/);
      if (repeat && out.length) {
        const last = out[out.length - 1];
        for (let i = 1; i < Number(repeat[1]); i++) out.push(last);
        rest = rest.slice(repeat[0].length);
        continue;
      }
      const key = keys.find((k) => rest.startsWith(k));
      if (!key) {
        unknown += rest[0];
        rest = rest.slice(1);
        continue;
      }
      flushUnknown();
      const command = dict.get(key);
      if (SUFFIXES.includes(key)) {
        // 直前の技への補足。付ける技が無ければ付けない
        if (out.length) out[out.length - 1] += command;
      } else {
        out.push(command ?? key);
      }
      rest = rest.slice(key.length);
    }
    flushUnknown();
    return out.join(' > ');
  };

  // 「A or B」「AかB」は択として残す。複数技からなる択は括弧で囲む（「(66 > LPLK) or 6HP」）
  const text = recipe
    .split('>')
    .map((step) => {
      const alts = step.split(/OR|or|(?<=[^\d])か(?=[^\d])/).map((alt) => convertStep(alt.trim()));
      return alts.length > 1 ? alts.map((a) => (a.includes(' > ') ? `(${a})` : a)).join(' or ') : alts[0];
    })
    .join(' > ');
  return { text, unresolved };
}

// ── 〆技 → ENDER_CLASSES ──
const ENDER_BY_COMMAND: Record<string, string> = {
  '214LK': 'ec_weak_eagle',
  '214MK': 'ec_mid_eagle',
  '214HK': 'ec_strong_eagle',
  'LPLK': 'ec_throw',
  '4LPLK': 'ec_back_throw',
  '236PP': 'ec_od_mixer',
  '214PP': 'ec_od_cyclone',
  '236236K': 'ec_sa1',
  '236HP': 'ec_strong_mixer',
  'j.214LK': 'ec_weak_skyhigh',
  'j.214HK': 'ec_strong_skyhigh',
  'j.214MK': 'ec_mid_skyhigh',
  '214HP>4K': 'ec_strong_stroke',
  '236MP': 'ec_mid_mixer',
  '214LP>4K': 'ec_weak_stroke',
  '214LP>6K>K': 'ec_weak_nail',
  '214MP>6K>K': 'ec_mid_nail',
  '214KK': 'ec_od_eagle',
  '2HK': 'ec_sweep_pc',
  '236236P': 'ec_sa3_iusal',
};
// 〆の後に起き攻めの最初の技までレシピに入っているコンボ。キーはコンボの id
const ENDER_BY_ID: Record<string, string> = {
  'ax_eXUug9kjcVQ_09': 'ec_weak_stroke',  // もにょもにょ。「J大Kは起き攻めとして」
  'ax_-p3ajb0VlQY_13': 'ec_weak_stroke',  // 上と同じルート
  // 弱ミキサーは相手がダウンしないので〆分類が無い（起き攻めも無い）。択のもう片方の中ミキサー〆に寄せる
  'ax_eXUug9kjcVQ_02': 'ec_mid_mixer',
};

// 同じ〆技でも、当たり方や前のルートで起き上がりまでのフレームが変わるもの（2026-11-14）。
// セットプレイは archiver の route（連携名）で、コンボは〆の1つ前の技で分ける。どちらも無ければ ENDER_BY_COMMAND
const ENDER_BY_ROUTE: Record<string, Record<string, string>> = {
  '236HP': { '空中ヒット': 'ec_strong_mixer', '地上ヒット': 'ec_strong_mixer_ground', '気流': 'ec_strong_mixer_whirl' },
  'j.214HK': { 'TC大サイクロン': 'ec_strong_skyhigh', '拾い': 'ec_strong_skyhigh_pickup' },
  // 気流に触れて当てたスパイク（doskonnbu の「強化大スパイク」など。溜めODワールや ODサイクロンの後）。2026-11-15
  '214LK': { '気流': 'ec_weak_eagle_whirl' },
  '214MK': { '気流': 'ec_mid_eagle_whirl' },
  '214HK': { '気流': 'ec_strong_eagle_whirl' },
};
// 〆の1つ前が地上の通常技なら地上ヒット（小足>コパン>大ミキサー）。前中P（6MP）は浮かせた後の拾いに使うので空中扱い
const isGroundNormal = (t: string) => /^[25][LMH][PK]$/.test(t);
function routeOfCombo(last: string, prev: string): string | undefined {
  if (last === '236HP') return isGroundNormal(prev) ? '地上ヒット' : '空中ヒット';
  if (last === 'j.214HK') return prev === 'j.MP' ? 'TC大サイクロン' : '拾い';
  return undefined;
}

// 最後が「A or B」の択なら先の技で決める
function inferEnder(converted: string, id: string): string | null {
  const tokens = converted.split(' > ');
  const last = tokens.at(-1)?.split(' or ')[0] ?? '';
  const route = routeOfCombo(last, tokens.at(-2) ?? '');
  return ENDER_BY_ID[id] ?? (route && ENDER_BY_ROUTE[last]?.[route]) ?? ENDER_BY_COMMAND[last] ?? null;
}

// ── 始動技・位置の推定 ──
// section から決まるもの。始動技が決まらない section はコマンドの先頭トークンから推定する
const SECTION_RULES: Record<string, { starter?: Starter; position?: Position }> = {
  '中央': { position: '中央' },
  '端': { position: '端' },
  'インパクト': { starter: 'インパクト' },
  'スタン': { starter: 'スタン' },
  'イウサール': { starter: 'イウサール' },
};
// section からは決まらないが、動画の補足（notes）から分かるもの。キーはコンボの id
const OVERRIDES: Record<string, { starter?: Starter; position?: Position }> = {
  'ax_eXUug9kjcVQ_09': { starter: '2LK' },      // 「ダメージは小足始動」
  'ax_eXUug9kjcVQ_13': { position: '端' },      // 「端付近限定」
  'ax_eXUug9kjcVQ_14': { position: 'どこでも' }, // 「画面どこからでも端へ運べる」
  'ax_eXUug9kjcVQ_17': { position: '中央' },    // 「端が少し遠ければ」
  'ax_eXUug9kjcVQ_18': { position: '中央' },
  'ax_eXUug9kjcVQ_19': { position: '中央' },    // 「端が遠くても狙え」
  'ax_eXUug9kjcVQ_20': { position: '中央' },    // 「端も遠い時」
  'ax_-p3ajb0VlQY_03': { starter: 'j.HK' },     // 「飛び>中P>…」。始動はジャンプ攻撃
};
// 位置の語は position で表すので situationTags には入れない
const POSITION_SECTIONS = ['中央', '端'];

// ── 優先度（実戦で使う頻度）の初期値 ──
// 動画の補足から決めたものだけ書く。書いていないものは DEFAULT_PRIORITY（根拠なし）。
// 同じレシピの別の動画の補足も根拠にする（新しい動画だけ取り込むので、補足はその動画のものしか残らない）
const PRIORITY_BY_ID: Record<string, Priority> = {
  'ax_eXUug9kjcVQ_01': 'よく使う',       // 「使用頻度が最も高い基本コンボ」（実用コンボ18選 #1）
  'ax_eXUug9kjcVQ_04': 'よく使う',       // 「ゲージがあれば伸ばすルート。運び量が大きい」
  'ax_-p3ajb0VlQY_02': 'よく使う',       // 上と同じルートの2中P始動
  'ax_eXUug9kjcVQ_05': 'よく使う',       // 「中足ラッシュの定番」
  'ax_eXUug9kjcVQ_06': 'よく使う',       // 「黄金3段コンボ」「一生使うコンボ」（実用コンボ18選 #4）
  'ax_eXUug9kjcVQ_09': 'よく使う',       // 「通称もにょもにょ」
  'ax_-p3ajb0VlQY_13': 'よく使う',       // 上と同じルート
  'ax_i4vx0nMzQqw_01': 'よく使う',       // 「定番中の定番」
  'ax_-p3ajb0VlQY_11': 'よく使う',       // 「端コンボを締めた後の持続2中Pから使う」
  'ax_eXUug9kjcVQ_11': 'よく使う',       // 「簡単で超運ぶ。起き攻めも優秀」
  'ax_eXUug9kjcVQ_13': 'よく使う',       // 「端付近限定の超優秀なノーゲージコンボ」
  'ax_eXUug9kjcVQ_15': 'よく使う',       // 「いつもの」＝端コンボと同じルート
  'ax_eXUug9kjcVQ_17': 'よく使う',       // 「個人的イチオシ」（イウサールコンボ8選 #1）
  'ax_eXUug9kjcVQ_19': 'よく使う',       // 「入れ替えの鉄板ルート」（イウサールコンボ8選 #6）
  'ax_eXUug9kjcVQ_20': 'あまり使わない', // 「最低限の妥協コンボ」
  'ax_kDldjC2G2QE_04': 'あまり使わない', // 「受け身方向で見づらいが、位置が入れ替わるリスクもある」
  'ax_kDldjC2G2QE_05': 'あまり使わない', // 「火力は控えめで手が忙しい」
  'ax_i4vx0nMzQqw_04': 'あまり使わない', // 「難度が極めて高く、実戦で狙わなくてよい」
  'ax_-p3ajb0VlQY_09': 'あまり使わない', // 「Dゲージ6本以外ではあまり使わない」
};

// ── 重複検出（youtubeId + startSec ±3秒） ──
// 比較対象は rashid.ts の手書きデータ。rashid.ts は生成ファイルを取り込んでいるので import せず文字列から拾う
const seen: { youtubeId: string; startSec: number }[] = [
  ...readFileSync(HAND_DATA_PATH, 'utf8').matchAll(/youtubeId: '([^']+)',\s*startSec: (\d+)/g),
].map((m) => ({ youtubeId: m[1], startSec: Number(m[2]) }));

function isDuplicate(youtubeId: string, startSec: number): boolean {
  if (seen.some((s) => s.youtubeId === youtubeId && Math.abs(s.startSec - startSec) <= DUP_TOLERANCE_SEC)) return true;
  seen.push({ youtubeId, startSec });
  return false;
}

// ── 変換本体 ──
const pad = (n: number) => String(n).padStart(2, '0');

// 「…厳選コンボ20選【スト6】」→「コンボ20選」。取れなければ動画タイトルそのまま
const shortTitle = (title: string) => title.match(/厳選(.+?)【/)?.[1] ?? title;

// 動画の公開日からバージョンの時期を決める（Y3 以降の境界は ../sf6-combo-archiver/data/doskonnbu/catalog.md と同じ）。
// Y2 / Y1 は対策動画の古いものだけに付く。境界はベガの配信月（2024-06）で、おおよそ
const patchEra = (publishedAt: string) => (
  publishedAt >= '2026-08-05' ? 'Y4'
    : publishedAt >= '2026-03-17' ? 'Y3後期'
      : publishedAt >= '2025-06-05' ? 'Y3'
        : publishedAt >= '2024-06-01' ? 'Y2' : 'Y1'
);

function main() {
  const preview = process.argv.includes('--preview');
  const terms = loadTerms();
  const combos: Combo[] = [];
  const okizeme: OkizemeSetup[] = [];
  const unresolved: ArchiverUnresolved[] = [];
  const skipped: string[] = [];
  const matchups: MatchupEntry[] = [];
  const errors: string[] = [];

  // キャラ対策: 重複は見ない（同じ相手の動画が複数あれば、どれも出典ごとに並べる）
  const pushMatchups = (data: ArchiverFile, perspective: string) => {
    if (!MATCHUP_PERSPECTIVES.includes(perspective)) {
      errors.push(`${data.youtube_id}: perspective "${perspective}" は ${MATCHUP_PERSPECTIVES.join(' / ')} のどれでもない`);
      return;
    }
    for (const m of data.matchups ?? []) {
      const opponent = characterByEn(m.opponent);
      if (!opponent) { errors.push(`${data.youtube_id}: 相手 "${m.opponent}" が src/lib/characters.ts に無い`); continue; }
      matchups.push({
        opponent: m.opponent,
        perspective: perspective as MatchupPerspective,
        ...(m.summary ? { summary: m.summary } : {}),
        threats: (m.threats ?? []).map((t) => ({ name: t.name, ...(t.about ? { about: t.about } : {}) })),
        youtubeId: data.youtube_id,
        sourceTitle: data.short_title ?? data.title,
        publishedAt: data.published_at,
        patchVersion: patchEra(data.published_at),
        ownerLabel: data.channel,
        ...(data.blog?.[0] ? { blog: data.blog[0] } : {}),
        points: m.points.map((p) => {
          if (!MATCHUP_TOPICS.includes(p.topic)) errors.push(`${data.youtube_id} #${p.no}: topic "${p.topic}" は ${MATCHUP_TOPICS.join(' / ')} のどれでもない`);
          const id = `mu_${data.youtube_id}_${opponent.slug}_${pad(p.no)}`;
          const href = `/mock/vs/${opponent.slug}#${id}`;
          const sources = p.recipes ?? (p.recipe_ja ? [{ recipe_ja: p.recipe_ja }] : []);
          const recipes = sources.map((r) => {
            const { text, unresolved: terms_ } = convertRecipe(r.recipe_ja, terms);
            if (terms_.length) {
              unresolved.push({ id, kind: 'matchup', title: `vs ${opponent.ja} ${p.title}`, href, recipeJa: r.recipe_ja, unresolvedTerms: terms_, enderUnknown: false });
            }
            return { ...(r.label ? { label: r.label } : {}), inputs: text, recipeJa: r.recipe_ja };
          });
          const threats = p.threat === undefined ? [] : Array.isArray(p.threat) ? p.threat : [p.threat];
          return {
            id,
            threats,
            topic: p.topic as MatchupTopic,
            title: p.title,
            text: p.text,
            recipes,
            startSec: p.start_sec,
            scenes: p.scenes ?? [],
            ...(p.caution ? { caution: p.caution } : {}),
          };
        }),
      });
    }
  };

  const files = readdirSync(INPUT_DIR).filter((f) => f.endsWith('.json')).sort();
  // 同じレシピが複数の動画に出たら新しい動画の方を残すので、公開日の新しい順に処理する
  const sources = files
    .map((file) => JSON.parse(readFileSync(join(INPUT_DIR, file), 'utf8')) as ArchiverFile)
    .sort((a, b) => b.published_at.localeCompare(a.published_at));
  const seenSegments = new Set<string>();
  // 起き攻めは全部入れてから、同じものを1件にまとめる（scripts/okizeme-dedupe.ts）。ほかの出典に出す区分をここに取っておく
  const okizemeSection = new Map<string, string>();
  for (const data of sources) {
    const isVideo = !data.source_id;
    const sourceKey = data.source_id ?? data.youtube_id;
    if (!isVideo && !data.url) errors.push(`${sourceKey}: 記事の出典には url が要る`);
    const source = isVideo
      ? { youtubeId: data.youtube_id, sourceType: 'shared' as const, ownerLabel: data.channel }
      : { sourceUrl: data.url, sourceType: 'shared' as const, ownerLabel: data.channel };
    const sourceTitle = data.short_title ?? shortTitle(data.title);

    for (const c of data.combos ?? []) {
      const id = `ax_${data.youtube_id}_${pad(c.no)}`;
      if (isDuplicate(data.youtube_id, c.start_sec)) { skipped.push(id); continue; }
      const { text, unresolved: terms_ } = convertRecipe(c.recipe_ja, terms);
      if (seenSegments.has(text)) { skipped.push(id); continue; }
      seenSegments.add(text);
      const enderClassId = inferEnder(text, id);
      const inferred = inferStarter(text);
      const rule = { ...SECTION_RULES[c.section], ...(c.position ? { position: c.position } : {}), ...OVERRIDES[id] };
      const starter = rule.starter ?? inferred.starter;
      // インパクト・スタン・イウサールは位置を問わない。通常のコンボで位置が分からなければ中央に寄せて、未解決に出す
      const anywhere = !!starter && isSpecialStarter(starter);
      const positionUnknown = !rule.position && !anywhere;
      combos.push({
        id,
        title: `${data.short_title ?? shortTitle(data.title)} #${c.no}`,
        starter: starter ?? 'その他',
        hitState: inferred.hitState,
        position: rule.position ?? (anywhere ? 'どこでも' : '中央'),
        priority: PRIORITY_BY_ID[id] ?? DEFAULT_PRIORITY,
        ...source,
        visibility: 'public',
        startSec: c.start_sec,
        patchVersion: patchEra(data.published_at),
        root: {
          id: `n_${id}_r`,
          segment: text,
          ...(c.damage !== null ? { damage: c.damage } : {}),
          enderClassId,
          situationTags: POSITION_SECTIONS.includes(c.section) ? [] : [c.section],
          notes: [`元レシピ: ${c.recipe_ja}`, c.notes].filter(Boolean).join('\n'),
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      });
      if (terms_.length || !enderClassId || !starter || positionUnknown) {
        unresolved.push({
          id, kind: 'combo', title: combos.at(-1)!.title, recipeJa: c.recipe_ja, unresolvedTerms: terms_, enderUnknown: !enderClassId,
          starterUnknown: !starter, positionUnknown,
        });
      }
    }

    for (const s of data.setplays ?? []) {
      const id = `ax_${sourceKey}_${pad(s.no)}`;
      if (isVideo && isDuplicate(data.youtube_id, s.start_sec ?? 0)) { skipped.push(id); continue; }
      // 先頭の〆技は enderClassId で表すので inputs からは外す
      const afterEnder = s.recipe_ja.startsWith(`${s.ender}>`) ? s.recipe_ja.slice(s.ender.length + 1) : s.recipe_ja;
      const { text, unresolved: terms_ } = convertRecipe(afterEnder, terms);
      const enderCommand = convertRecipe(s.ender, terms).text;
      const byRoute = s.route ? ENDER_BY_ROUTE[enderCommand]?.[s.route] : undefined;
      if (s.route && !byRoute) errors.push(`${id}: route「${s.route}」が ENDER_BY_ROUTE['${enderCommand}'] に無い`);
      const enderClassId = byRoute ?? ENDER_BY_COMMAND[enderCommand] ?? '';
      const tokens = text.replace(/[()]/g, '').split(/ > | or /);
      const notes = [`元レシピ: ${s.recipe_ja}`, s.notes].filter(Boolean).join('\n');
      const safeJump = !!s.notes?.includes('詐欺飛び');
      okizemeSection.set(id, s.section);
      okizeme.push({
        id,
        enderClassId,
        title: `${s.section} ${s.ender}後 #${s.no}`,
        ...(s.pattern ? { pattern: s.pattern } : {}),
        ...(['中央', '端', 'どこでも'].includes(s.section) ? { position: s.section as '中央' | '端' | 'どこでも' } : {}),
        inputs: text,
        vsWakeup: {},
        flags: {
          // 6HP持続当て（括弧は外してある）も中段。空振り（6HP空）はフレーム消費なので数えない
          ...(tokens.some((t) => t.startsWith('6HP') && !t.endsWith('空')) ? { mid: true } : {}),
          ...(tokens.some((t) => t === '2LK' || t === '2MK') ? { low: true } : {}),
          ...(tokens.includes('LPLK') ? { throw: true } : {}),
          ...(safeJump ? { safeJump: true } : {}),
        },
        notes,
        ...source,
        ...(isVideo ? { startSec: s.start_sec ?? 0 } : {}),
        sourceTitle,
        votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
      });
      if (terms_.length || !enderClassId) {
        unresolved.push({ id, kind: 'okizeme', title: okizeme.at(-1)!.title, recipeJa: s.recipe_ja, unresolvedTerms: terms_, enderUnknown: !enderClassId });
      }
    }

    // doskonnbu の対策はラシードの技を使うので、ラシード目線
    pushMatchups(data, 'ラシード');
  }

  // どのキャラでも使える対策（ACQUA さんなど）。ファイルに perspective があればそれ
  const matchupFiles = existsSync(MATCHUP_DIR) ? readdirSync(MATCHUP_DIR).filter((f) => f.endsWith('.json')).sort() : [];
  for (const file of matchupFiles) {
    const data = JSON.parse(readFileSync(join(MATCHUP_DIR, file), 'utf8')) as ArchiverFile;
    pushMatchups(data, data.perspective ?? '共通');
  }

  // 同じ起き攻めを1件にまとめ、ほかの出典を添える。まだ決めていない「途中まで同じ」の組は候補として数える
  const { rows, merged, candidates } = dedupeOkizeme(okizeme, okizemeSection, MERGE_PATH, errors);
  okizeme.splice(0, okizeme.length, ...rows);

  if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
  }
  // 相手キャラの並び（キャラ一覧の順）→ 共通 → ラシード目線 → 新しい動画から
  const perspectiveOrder = (p: string) => MATCHUP_PERSPECTIVES.indexOf(p);
  matchups.sort((a, b) => characterOrder(a.opponent) - characterOrder(b.opponent)
    || perspectiveOrder(a.perspective) - perspectiveOrder(b.perspective)
    || b.publishedAt.localeCompare(a.publishedAt));

  if (process.argv.includes('--dups')) {
    // 1組ずつ見て、同じなら okizeme-merge.json の same、別なら distinct に書く
    console.log(`途中まで同じで、まとめるか決めていない起き攻め: ${candidates.length}組`);
    const line = (o: OkizemeSetup) => `${o.id}（${o.ownerLabel}）${o.inputs}\n      ${(o.notes ?? '').split('\n').slice(1).join(' ').slice(0, 120)}`;
    for (const [a, b] of candidates) console.log(`\n■ ${a.enderClassId}${a.pattern ? ` / ${a.pattern}` : ''}\n  短 ${line(a)}\n  長 ${line(b)}`);
    return;
  }

  if (preview) {
    console.log(JSON.stringify({ combos: combos.slice(0, 2), okizeme: okizeme.slice(0, 1), unresolved, skipped }, null, 2));
    for (const c of combos) console.log(`${c.id}\t${c.starter}\t${c.hitState}\t${c.position}\t${c.root.enderClassId ?? '-'}\t${c.root.segment}`);
    for (const o of okizeme) console.log(`${o.id}\t${o.enderClassId || '-'}\t${o.inputs}\t${JSON.stringify(o.flags)}`);
    for (const m of matchups) console.log(`${m.opponent}\t${m.youtubeId}\t${m.points.length}点\t${m.sourceTitle}`);
    return;
  }

  const body = [
    '// このファイルは scripts/import-archiver.ts が生成する。手で編集しないこと。',
    `// 入力: ../sf6-combo-archiver/data/rashid/*.json（${files.length}本）、data/matchup/*.json（${matchupFiles.length}本）`,
    '',
    "import type { ArchiverUnresolved, Combo, MatchupEntry, OkizemeSetup } from './rashid';",
    '',
    `export const ARCHIVER_COMBOS: Combo[] = ${JSON.stringify(combos, null, 2)};`,
    '',
    `export const ARCHIVER_OKIZEME_SETUPS: OkizemeSetup[] = ${JSON.stringify(okizeme, null, 2)};`,
    '',
    '// キャラ対策（相手キャラの並び → 新しい動画から）',
    `export const ARCHIVER_MATCHUPS: MatchupEntry[] = ${JSON.stringify(matchups, null, 2)};`,
    '',
    '// 対応表で変換できなかった語、または〆技・始動技・位置を推定できなかったもの',
    `export const ARCHIVER_UNRESOLVED: ArchiverUnresolved[] = ${JSON.stringify(unresolved, null, 2)};`,
    '',
  ].join('\n');
  writeFileSync(OUTPUT_PATH, body);
  const points = matchups.reduce((n, m) => n + m.points.length, 0);
  console.log(`combos ${combos.length} / okizeme ${okizeme.length}（まとめた ${merged.length}件） / matchups ${matchups.length}（${points}点） / unresolved ${unresolved.length} / skipped ${skipped.length}`);
  if (candidates.length) console.log(`起き攻めの重複の候補（途中まで同じで、まとめるか決めていない組）: ${candidates.length}組 → node scripts/import-archiver.ts --dups`);
  console.log(`→ ${OUTPUT_PATH}`);
}

main();
