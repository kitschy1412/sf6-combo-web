// archiver が書き出した Rashid の JSON を、モック用の Combo / OkizemeSetup に変換する。
// 使い方:
//   node scripts/import-archiver.ts            → src/mock-data/rashid-archiver.ts を書き出す
//   node scripts/import-archiver.ts --preview  → 書き出さずに先頭数件を表示
// 技名 → コマンドの対応は docs/rashid-terms.md を読む（確定行のみ使用。変換できない語は日本語のまま残す）。

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ArchiverUnresolved, Combo, OkizemeSetup } from '../src/mock-data/rashid.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const INPUT_DIR = join(ROOT, '..', 'sf6-combo-archiver', 'data', 'rashid');
const TERMS_PATH = join(ROOT, 'docs', 'rashid-terms.md');
const OUTPUT_PATH = join(ROOT, 'src', 'mock-data', 'rashid-archiver.ts');
const HAND_DATA_PATH = join(ROOT, 'src', 'mock-data', 'rashid.ts');

const CATEGORY_MAJOR = 'archiver取り込み';
const SUSTAIN = '持続当て';
const DUP_TOLERANCE_SEC = 3;

// ── 入力 JSON の形 ──
type ArchiverCombo = {
  no: number; section: string; start_sec: number; recipe_ja: string;
  damage: number | null; damage_confidence: string; notes?: string;
};
type ArchiverSetplay = {
  no: number; ender: string; section: string; start_sec: number; recipe_ja: string; notes?: string;
};
type ArchiverFile = {
  youtube_id: string; title: string; channel: string; published_at: string; kind: 'combo' | 'setplay';
  combos?: ArchiverCombo[]; setplays?: ArchiverSetplay[];
};

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
const ALIASES: Record<string, string> = { '立弱P': '弱P', '立中K': '中K', '大ミキ': '大ミキサー' };

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
      if (key === SUSTAIN) {
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
  '236PP': 'ec_od_mixer',
  '236236K': 'ec_sa1',
};

function inferEnder(converted: string): string | null {
  const last = converted.split(' > ').at(-1) ?? '';
  return ENDER_BY_COMMAND[last] ?? null;
}

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

function main() {
  const preview = process.argv.includes('--preview');
  const terms = loadTerms();
  const combos: Combo[] = [];
  const okizeme: OkizemeSetup[] = [];
  const unresolved: ArchiverUnresolved[] = [];
  const skipped: string[] = [];

  const files = readdirSync(INPUT_DIR).filter((f) => f.endsWith('.json')).sort();
  for (const file of files) {
    const data = JSON.parse(readFileSync(join(INPUT_DIR, file), 'utf8')) as ArchiverFile;
    const source = { youtubeId: data.youtube_id, sourceType: 'shared' as const, ownerLabel: data.channel };

    for (const c of data.combos ?? []) {
      const id = `ax_${data.youtube_id}_${pad(c.no)}`;
      if (isDuplicate(data.youtube_id, c.start_sec)) { skipped.push(id); continue; }
      const { text, unresolved: terms_ } = convertRecipe(c.recipe_ja, terms);
      const enderClassId = inferEnder(text);
      combos.push({
        id,
        title: `${shortTitle(data.title)} #${c.no}`,
        categoryMajor: CATEGORY_MAJOR,
        categoryMinor: c.section,
        starterType: '',
        ...source,
        visibility: 'public',
        startSec: c.start_sec,
        patchVersion: '',
        root: {
          id: `n_${id}_r`,
          segment: text,
          ...(c.damage !== null ? { damage: c.damage } : {}),
          enderClassId,
          situationTags: [c.section],
          notes: [`元レシピ: ${c.recipe_ja}`, c.notes].filter(Boolean).join('\n'),
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      });
      if (terms_.length || !enderClassId) {
        unresolved.push({ id, kind: 'combo', title: combos.at(-1)!.title, recipeJa: c.recipe_ja, unresolvedTerms: terms_, enderUnknown: !enderClassId });
      }
    }

    for (const s of data.setplays ?? []) {
      const id = `ax_${data.youtube_id}_${pad(s.no)}`;
      if (isDuplicate(data.youtube_id, s.start_sec)) { skipped.push(id); continue; }
      // 先頭の〆技は enderClassId で表すので inputs からは外す
      const afterEnder = s.recipe_ja.startsWith(`${s.ender}>`) ? s.recipe_ja.slice(s.ender.length + 1) : s.recipe_ja;
      const { text, unresolved: terms_ } = convertRecipe(afterEnder, terms);
      const enderCommand = convertRecipe(s.ender, terms).text;
      const enderClassId = ENDER_BY_COMMAND[enderCommand] ?? '';
      const tokens = text.replace(/[()]/g, '').split(/ > | or /);
      okizeme.push({
        id,
        enderClassId,
        title: `${s.section} ${s.ender}後 #${s.no}`,
        inputs: text,
        vsWakeup: {},
        flags: {
          ...(tokens.includes('6HP') ? { mid: true } : {}),
          ...(tokens.some((t) => t === '2LK' || t === '2MK') ? { low: true } : {}),
          ...(tokens.includes('LPLK') ? { throw: true } : {}),
          ...(s.notes?.includes('詐欺飛び') ? { safeJump: true } : {}),
        },
        notes: [`元レシピ: ${s.recipe_ja}`, s.notes].filter(Boolean).join('\n'),
        ...source,
        startSec: s.start_sec,
        votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
      });
      if (terms_.length || !enderClassId) {
        unresolved.push({ id, kind: 'okizeme', title: okizeme.at(-1)!.title, recipeJa: s.recipe_ja, unresolvedTerms: terms_, enderUnknown: !enderClassId });
      }
    }
  }

  if (preview) {
    console.log(JSON.stringify({ combos: combos.slice(0, 2), okizeme: okizeme.slice(0, 1), unresolved, skipped }, null, 2));
    for (const c of combos) console.log(`${c.id}\t${c.root.enderClassId ?? '-'}\t${c.root.segment}`);
    for (const o of okizeme) console.log(`${o.id}\t${o.enderClassId || '-'}\t${o.inputs}\t${JSON.stringify(o.flags)}`);
    return;
  }

  const body = [
    '// このファイルは scripts/import-archiver.ts が生成する。手で編集しないこと。',
    `// 入力: ../sf6-combo-archiver/data/rashid/*.json（${files.join(', ')}）`,
    '',
    "import type { ArchiverUnresolved, Combo, OkizemeSetup } from './rashid';",
    '',
    `export const ARCHIVER_COMBOS: Combo[] = ${JSON.stringify(combos, null, 2)};`,
    '',
    `export const ARCHIVER_OKIZEME_SETUPS: OkizemeSetup[] = ${JSON.stringify(okizeme, null, 2)};`,
    '',
    '// 対応表で変換できなかった語、または〆技から enderClassId を推定できなかったもの',
    `export const ARCHIVER_UNRESOLVED: ArchiverUnresolved[] = ${JSON.stringify(unresolved, null, 2)};`,
    '',
  ].join('\n');
  writeFileSync(OUTPUT_PATH, body);
  console.log(`combos ${combos.length} / okizeme ${okizeme.length} / unresolved ${unresolved.length} / skipped ${skipped.length}`);
  console.log(`→ ${OUTPUT_PATH}`);
}

main();
