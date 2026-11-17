// モック用ハードコードデータ（Rashid）
// Phase 1: 入力UIの設計確認用。バックエンド未接続。

import { ARCHIVER_COMBOS, ARCHIVER_MATCHUPS, ARCHIVER_OKIZEME_SETUPS } from './rashid-archiver.ts';
import { LIST_SECTIONS, PRIORITIES, SCENES, bucketKey, bucketOf, isSpecialStarter } from './rashid-starters.ts';
import type { HitState, ListSection, Position, Priority, Scene, Starter } from './rashid-starters.ts';

export {
  DEFAULT_PRIORITY, FOLDED_PRIORITY, HIT_STATES, POSITIONS, PRIORITIES, STARTERS, STARTER_BY_TOKEN,
  hitTagClass, inferStarter, positionTagOf, priorityTagClass,
} from './rashid-starters.ts';
export type { HitState, Position, Priority, Starter } from './rashid-starters.ts';

export type SourceType = 'personal' | 'shared' | 'forked';
export type Visibility = 'private' | 'unlisted' | 'public';

// コンボ数・起き攻め数は持たない（getEnderClassCounts で実データから数える）
export type EnderClass = {
  id: string;
  key: string;
  displayName: string;
  frameAdvantage?: string;
  // 連携で分けた分類の中身（「前中P＞弱サイクロンストローク」など）。同じ〆技でも当たり方やルートで
  // 起き上がりまでのフレームが変わるものは、技ではなく連携ごとに分類を作る（2026-11-14）
  route?: string;
};

// ─── コンボツリーノード ───
// children無し = 葉(終端) → ダメージ・〆分類等を持つ
// children有り = 分岐点 → segment は共通プレフィックス断片
export type ComboNode = {
  id: string;                      // 葉の投票・選択用に必要
  segment: string;                 // "2MK > 236LP" 等のコマンド断片
  routeLabel?: string;             // 葉の別名（例: "214LKルート"）
  condition?: string;              // 葉のみ。このルートを選ぶ条件（例: "画面端が近い場合"）
  damage?: number;                 // 葉のみ
  gauge?: number;                  // 葉のみ
  driveGauge?: number;             // 葉のみ
  enderClassId?: string | null;    // 葉のみ
  situationTags?: string[];        // 葉のみ
  startSec?: number;               // 葉のみ。このルートの動画の開始秒（未設定ならコンボの startSec）
  notes?: string;                  // 葉のみ（分岐点のメモはどこにも出ず、ルートの並びに直すと落ちる）
  votes?: { good: number; bad: number; brokenInCurrentVer: number }; // 葉のみ (共有時)
  children?: ComboNode[];
};

export type Combo = {
  id: string;
  title: string;
  starter: Starter;                // 始動技（絞り込みと一覧の見出し。見出しの決め方は rashid-starters.ts）
  hitState: HitState;              // ヒット状態: 通常 / CH / PC（確反・シケ狩りは PC）
  position: Position;              // 始動時の位置: 中央 / 端。どこでもはインパクト・スタン・イウサールだけ
  priority: Priority;              // 実戦で使う頻度: よく使う / ときどき / あまり使わない
  sourceType: SourceType;
  visibility: Visibility;
  ownerLabel?: string;
  forkedFrom?: string | null;
  youtubeId?: string;
  startSec?: number;
  patchVersion: string;
  sortOrder?: number;              // 同じ見出し・同じ優先度の中の並び順（昇順）。未設定分は配列順を初期順として扱う
  root: ComboNode;                 // ⭐ ツリーのルート
};

export type KnockdownSituation = {
  id: string;
  label: string;
  enderClassId: string;
  sourceComboId: string | null;
  notes?: string;                  // 葉のみ（分岐点のメモはどこにも出ず、ルートの並びに直すと落ちる）
};

export type OkizemeSetup = {
  id: string;
  enderClassId: string;
  title: string;
  // 同じ連携でもタイミングでフレームが変わるときの区別（「+24F（J中P最速）」など）。起き攻めの一覧はこれで小見出しを分ける
  pattern?: string;
  position?: '中央' | '端' | 'どこでも';  // archiver 取り込み分のみ（動画の区分）
  inputs: string;
  vsWakeup: {
    guard?: string;
    mash?: string;
    invincible?: string;
    delayedWakeup?: string;
  };
  flags: { mid?: boolean; low?: boolean; throw?: boolean; safeJump?: boolean };
  notes?: string;                  // archiver 取り込み分の解説字幕など
  youtubeId?: string;
  sourceUrl?: string;              // 出典が記事（note など）のとき。youtubeId とどちらか
  startSec?: number;
  sourceType: SourceType;
  ownerLabel?: string;
  sourceTitle?: string;            // archiver 取り込み分のみ。動画・記事の短い題
  // 同じ〆・同じコマンド・同じ小見出し（pattern）の起き攻めを紹介している、ほかの動画・記事（新しい順）。
  // 取り込みで一番新しい出典の1件にまとめ、残りをここに並べる（2026-11-15 ユーザー「1件にまとめ出典を並べる」）
  alsoIn?: OkizemeSource[];
  votes: { good: number; bad: number; brokenInCurrentVer: number };
};

// 1件にまとめた起き攻めの、ほかの出典（OkizemeSetup.alsoIn）。位置はその出典の区分（section）で見せる
export type OkizemeSource = {
  id: string;                      // まとめる前の ID（ax_動画ID_番号）
  section: string;                 // その出典での区分（「端」「TC始動」など）
  youtubeId?: string;
  sourceUrl?: string;              // 記事のとき
  startSec?: number;
  ownerLabel?: string;
  sourceTitle?: string;
  notes?: string;                  // 本体の notes と同じ形（先頭行が「元レシピ: …」）
};

// 起き攻めの出典の名前。取り込み分は動画・記事の題も付ける（同じチャンネルのどの動画かを見分けるため）
export const okizemeSourceName = (s: { ownerLabel?: string; sourceTitle?: string }) =>
  s.sourceTitle ? `${s.ownerLabel}「${s.sourceTitle}」` : s.ownerLabel ?? '';

// ─── コマンド入力パレット ───
// archiver 取り込みで、対応表で変換できなかった語がある or 〆技・始動技・位置を推定できなかったもの
export type ArchiverUnresolved = {
  id: string;
  kind: 'combo' | 'okizeme' | 'matchup';
  title: string;
  href?: string;                   // キャラ対策のみ。そのポイントのページ
  recipeJa: string;                // 取り込み元の日本語レシピ
  unresolvedTerms: string[];       // 日本語のまま残った語
  enderUnknown: boolean;
  starterUnknown?: boolean;        // コンボのみ。始動技を「その他」にした
  positionUnknown?: boolean;       // コンボのみ。位置が分からず中央にした
};

// ─── キャラ対策（2026-11-13。archiver で動画・ブログから取り込む） ───
// 相手キャラごとに、動画1本ぶんのポイントを1つの MatchupEntry にまとめる。
// 一覧では「相手キャラ → 強い技・連携（threat）→ 対策（ポイント）」に並べ直す（src/lib/matchups.ts）
export const MATCHUP_TOPICS = ['立ち回り', '攻め', '守り', '対空', '反撃'] as const;
export type MatchupTopic = (typeof MATCHUP_TOPICS)[number];

// 誰の目線の対策か。共通 = どのキャラでも使える（ACQUA さんの対策動画）、ラシード = ラシードの技を使う（doskonnbu）
export const MATCHUP_PERSPECTIVES = ['共通', 'ラシード'] as const;
export type MatchupPerspective = (typeof MATCHUP_PERSPECTIVES)[number];

// 相手キャラの強い技・連携。about はどんな技か（どの動画の説明でもよいので、最初に見つかったもの）
export type MatchupThreat = { name: string; about?: string };

// 反撃のレシピなど。位置で変わるものは label（中央 / 端）を付けて複数並べる
export type MatchupRecipe = {
  label?: string;
  inputs: string;                  // コマンド表記（Notation で出す）
  recipeJa: string;                // 取り込み元の日本語レシピ
};

export type MatchupPoint = {
  id: string;                      // mu_<動画ID>_<相手slug>_<no>
  threats: string[];               // どの強い技・連携への対策か（MatchupThreat.name）。空なら立ち回り全般
  topic: MatchupTopic;
  title: string;                   // 結論をひとことで（「タイガーニーは立ちガードで受ける」）
  text: string;                    // 字幕・ブログの説明
  recipes: MatchupRecipe[];        // コマンドがあるときだけ（無ければ空）
  startSec: number;                // 説明している場面
  scenes: number[];                // 同じ動画の中で、このポイントが出てくる別の場面
  caution?: string;                // 動画の後の調整で変わったことなど
};

export type MatchupEntry = {
  opponent: string;                // 相手の英語名（表示名は src/lib/characters.ts）
  perspective: MatchupPerspective;
  summary?: string;
  threats: MatchupThreat[];        // この動画が説明している強い技・連携（about があるものだけ）
  youtubeId: string;
  sourceTitle: string;             // 動画の短い題
  publishedAt: string;
  patchVersion: string;            // 動画の時期（Y4 / Y3後期 / Y3）
  ownerLabel: string;              // チャンネル名
  blog?: string;
  points: MatchupPoint[];
};

// 今は取り込み分だけ（手書きの対策は無い）。並びは相手キャラの順 → 新しい動画から
export const MATCHUPS: MatchupEntry[] = ARCHIVER_MATCHUPS;

export type PaletteMove = {
  token: string;   // コマンド表記: "214LK"
  name?: string;   // 日本語名: "イーグルスパイク 弱" (なければ token を表示)
};
export type PaletteGroup = { label: string; moves: PaletteMove[] };

const m = (token: string, name?: string): PaletteMove => ({ token, name });

export const RASHID_PALETTE: PaletteGroup[] = [
  {
    label: '通常技',
    moves: [
      m('5LP'), m('5MP'), m('5HP'), m('5LK'), m('5MK'), m('5HK'),
      m('2LP'), m('2MP'), m('2HP'), m('2LK'), m('2MK'), m('2HK'),
      m('6MP'), m('6HP'), m('6HK'),
    ],
  },
  {
    label: 'ジャンプ技',
    moves: [
      m('j.LP'), m('j.MP'), m('j.HP'), m('j.LK'), m('j.MK'), m('j.HK'),
    ],
  },
  {
    label: '必殺技',
    moves: [
      m('236LP', '弱ミキサー'), m('236MP', '中ミキサー'), m('236HP', '大ミキサー'), m('236PP', 'ODミキサー'),
      m('236LK', '弱ワール'), m('236MK', '中ワール'), m('236HK', '大ワール'), m('236KK', 'ODワール'),
      m('214LK', '弱スパイク'), m('214MK', '中スパイク'), m('214HK', '大スパイク'), m('214KK', 'ODスパイク'),
      m('214LP', '弱サイクロン'), m('214MP', '中サイクロン'), m('214HP', '大サイクロン'), m('214PP', 'ODサイクロン'),
      m('j.214LK', '弱スカイハイ'), m('j.214MK', '中スカイハイ'), m('j.214HK', '大スカイハイ'), m('j.214KK', 'ODスカイハイ'),
    ],
  },
  {
    label: 'SA',
    moves: [
      m('236236K', 'SA1'),
      m('214214K', 'SA2'),
      m('236236P', 'SA3'),
    ],
  },
  {
    label: '共通行動',
    moves: [
      m('DR', '生ラッシュ'), m('CR', 'キャンセルラッシュ'), m('DI'),
      m('前ステ'), m('バクステ'), m('投げ'),
      m('垂直J'), m('前J'), m('後J'),
      m('(CH)'), m('(PC)'),
    ],
  },
];

export const ENDER_CLASSES: EnderClass[] = [
  { id: 'ec_weak_eagle', key: 'weak_eagle_spike_ender', displayName: '弱イーグルスパイク〆', frameAdvantage: '+34F' },
  { id: 'ec_strong_eagle', key: 'strong_eagle_spike_ender', displayName: '強イーグルスパイク〆', frameAdvantage: '+28F' },
  // 有利Fは doskonnbu ひとくち攻略#40（2025-11-20）のタイトル帯「+9Fを活かせ！」。以前より約15F減った（弱体化）
  { id: 'ec_od_mixer', key: 'od_mixer_ender', displayName: 'ODスピニングミキサー〆', frameAdvantage: '+9F' },
  { id: 'ec_od_whip', key: 'od_whip_ender', displayName: 'ODウィップオブザワインド〆', frameAdvantage: '+24F' },
  { id: 'ec_throw', key: 'throw_after', displayName: '投げ後', frameAdvantage: '+30F' },
  { id: 'ec_arabian', key: 'arabian_cyclone_ender', displayName: 'アラビアンサイクロン〆', frameAdvantage: '+40F' },
  { id: 'ec_mid_eagle', key: 'mid_eagle_spike_ender', displayName: '中イーグルスパイク〆', frameAdvantage: '+30F' },
  { id: 'ec_sa3_iusal', key: 'sa3_iusal_ender', displayName: 'SA3 アルタイル〆', frameAdvantage: '—' },  // id は旧名のまま。SA3 はアルタイル（イウサールは SA2）
  { id: 'ec_sa1', key: 'sa1_ender', displayName: 'SA1〆', frameAdvantage: '+1F' },  // doskonnbu「SA1を当てた後の展開」（2025-07-23）。受け身を取られる
  // 2026-11-07 取り込んだセットプレイ（doskonnbu）の〆。有利Fは動画・ブログで分かった値（ルートで変わるものは代表値）
  // 大ミキサーは空中ヒットと地上ヒットで有利Fが違うので分ける（2026-11-14。地上ヒットは強いセットプレイがほぼ無い）
  { id: 'ec_strong_mixer', key: 'strong_mixer_ender', displayName: '強スピニングミキサー〆（空中ヒット）', frameAdvantage: '—', route: '大P＞大サイクロン＞大ミキサー など、浮かせて当てる' },
  { id: 'ec_strong_mixer_ground', key: 'strong_mixer_ground_ender', displayName: '強スピニングミキサー〆（地上ヒット）', frameAdvantage: '—', route: '小足＞コパン＞大ミキサー など、地上の相手に当てる' },
  // 有利Fは つのちゃんねる（2025-07-03）の字幕「5中P→5強K→強サイクロン上派生→弱スカイハイ（+23F）」。前ステで +5F（doskonnbu も同じ）
  { id: 'ec_weak_skyhigh', key: 'weak_skyhigh_ender', displayName: '弱アラビアンスカイハイ〆', frameAdvantage: '+23F', route: 'TC＞大サイクロンストローク＞弱スカイハイ など' },
  // 2026-11-15 イウサール(本人)さんの持続中段5選で出た〆。受け身で表裏が変わる
  { id: 'ec_mid_skyhigh', key: 'mid_skyhigh_ender', displayName: '中アラビアンスカイハイ〆', frameAdvantage: '—', route: 'TC＞ODサイクロン＞ストローク＞中スカイハイ など' },
  // 大スカイハイは前のルートで有利Fが違うので連携で分ける（2026-11-14）
  { id: 'ec_strong_skyhigh', key: 'strong_skyhigh_ender', displayName: 'J中P＞強アラビアンスカイハイ〆', frameAdvantage: '+24F', route: 'TC＞大サイクロン＞J中P＞大スカイハイ。J中Pを遅らせると +23F' },
  { id: 'ec_strong_skyhigh_pickup', key: 'strong_skyhigh_pickup_ender', displayName: '拾い強アラビアンスカイハイ〆', frameAdvantage: '—', route: 'イウサールや ODミキサーで拾った後の大スカイハイ' },
  { id: 'ec_strong_stroke', key: 'strong_cyclone_stroke_ender', displayName: '強サイクロンストローク〆', frameAdvantage: '+25F', route: 'TC＞大サイクロン＞ストローク。J中P＞前ステまでで +25F（汚インパクト）' },
  // 2026-11-14 取り込みのコンボで〆に使われていたのに分類が無かったもの。弱ミキサーは相手がダウンしないので作らない
  { id: 'ec_mid_mixer', key: 'mid_mixer_ender', displayName: '中スピニングミキサー〆', frameAdvantage: '—' },
  { id: 'ec_weak_stroke', key: 'weak_cyclone_stroke_ender', displayName: 'もにょもにょ〆', frameAdvantage: '—', route: '前中P＞弱サイクロンストローク' },
  { id: 'ec_weak_nail', key: 'weak_cyclone_nail_ender', displayName: 'もにゅもにゅ〆', frameAdvantage: '—', route: '前中P＞弱サイクロンネイル' },
  // 2026-11-15 doskonnbu ひとくち攻略#24。端攻めの遅らせ投げが後ろ投げになると位置が入れ替わり、前投げとは状況が違う
  { id: 'ec_back_throw', key: 'back_throw_after', displayName: '後ろ投げ後', frameAdvantage: '—', route: '位置が入れ替わる。端攻めの遅らせ投げが後ろ投げになったときなど' },
  // 2026-11-15 doskonnbu ひとくち攻略#29 など。TC＞ODサイクロンの後にイウサールを発動して持続中段を重ねる
  { id: 'ec_od_cyclone', key: 'od_cyclone_ender', displayName: 'ODアラビアンサイクロン〆', frameAdvantage: '—', route: 'TC＞ODサイクロン など' },
  // 気流に触れて当てたスパイク（doskonnbu の「強化大スパイク」など）。普通のスパイクと有利Fが違うので分ける（2026-11-15）
  { id: 'ec_weak_eagle_whirl', key: 'weak_eagle_spike_whirl_ender', displayName: '気流弱イーグルスパイク〆', frameAdvantage: '—', route: 'TC＞ODサイクロン＞弱スパイク など、気流の中で当てる' },
  { id: 'ec_mid_eagle_whirl', key: 'mid_eagle_spike_whirl_ender', displayName: '気流中イーグルスパイク〆', frameAdvantage: '—', route: '溜めODワール＞2中P＞中スパイク など、気流の中で当てる' },
  // 2026-11-15 doskonnbu アプデ後14選（大Kパニッシュカウンター始動）で出た〆
  { id: 'ec_mid_nail', key: 'mid_cyclone_nail_ender', displayName: '中サイクロンネイル〆', frameAdvantage: '—', route: '大K＞前中P＞中サイクロンネイル など。低めで当てる' },
  { id: 'ec_od_eagle', key: 'od_eagle_spike_ender', displayName: 'ODイーグルスパイク〆', frameAdvantage: '—', route: '大K＞前中P＞ODスパイク など。入れ替わる' },
  // 2026-11-15 doskonnbu「大足パニカン時のセットプレイ」。パニッシュカウンターの大足はハードダウン
  { id: 'ec_sweep_pc', key: 'sweep_punish_counter_after', displayName: '大足パニッシュカウンター後', frameAdvantage: '—', route: '差し返しの大足がパニッシュカウンターでヒットしたとき（ハードダウン）' },
  // 有利Fは 4shika さん（2025-06-20、2026-03-17 の調整より前）の「最速 +63F、弱Pを挟むと +60F」
  { id: 'ec_strong_eagle_whirl', key: 'strong_eagle_spike_whirl_ender', displayName: '気流強イーグルスパイク〆', frameAdvantage: '+63F', route: 'TC＞溜めODワール＞大スパイク など、気流の中で当てる。弱Pを挟むと +60F' },
  // 4shika さん（2025-06-18）の「コパコパ気流強ミキサー」。空中ヒットの大ミキサー（+35F）より有利Fが少ない
  { id: 'ec_strong_mixer_whirl', key: 'strong_mixer_whirl_ender', displayName: '気流強スピニングミキサー〆', frameAdvantage: '+29F', route: 'TC＞溜めODワール＞コパ×2空振り＞大ミキサー など、気流の中で当てる' },
];

export const COMBOS: Combo[] = [
  // ── 1本道コンボ ──
  {
    id: 'c_001',
    title: '基本コンボ',
    starter: '2MK', hitState: '通常', position: '中央', priority: 'よく使う',
    sourceType: 'personal',
    visibility: 'private',
    youtubeId: 'dQw4w9WgXcQ', startSec: 12,
    patchVersion: '1.25',
    root: {
      id: 'n_c001_r',
      segment: '2MK > 236LP > 214LK',
      damage: 1820, gauge: 0, driveGauge: 1,
      enderClassId: 'ec_weak_eagle',
      situationTags: [],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  // ── 1本道コンボ（共有） ──
  {
    id: 'c_002',
    title: '高火力',
    starter: 'DR', hitState: '通常', position: '端', priority: 'ときどき',
    sourceType: 'shared',
    visibility: 'public',
    ownerLabel: 'cobra_player',
    youtubeId: 'dQw4w9WgXcQ', startSec: 45,
    patchVersion: '1.25',
    root: {
      id: 'n_c002_r',
      segment: 'DR > 5HP > 2MK > 214MK > 5HP > 214HK',
      damage: 3540, gauge: 0, driveGauge: 4,
      enderClassId: 'ec_strong_eagle',
      situationTags: ['ドライブラッシュ'],
      votes: { good: 12, bad: 1, brokenInCurrentVer: 0 },
    },
  },
  // ── 1本道コンボ（共有・現ver不可票あり） ──
  {
    id: 'c_003',
    title: '確反コンボ',
    starter: 'SA2', hitState: 'PC', position: '中央', priority: 'ときどき',
    sourceType: 'shared',
    visibility: 'public',
    ownerLabel: 'mido_sf',
    patchVersion: '1.25',
    root: {
      id: 'n_c003_r',
      segment: '214214K > 2HP > 214LK',
      damage: 2980, gauge: 2, driveGauge: 0,
      enderClassId: 'ec_weak_eagle',
      situationTags: ['確反'],
      votes: { good: 28, bad: 0, brokenInCurrentVer: 5 },
    },
  },
  // ── fork済コンボ ──
  {
    id: 'c_004',
    title: 'ゲージ節約',
    starter: '5HK', hitState: 'CH', position: '中央', priority: 'ときどき',
    sourceType: 'forked',
    visibility: 'unlisted',
    forkedFrom: 'c_002',
    ownerLabel: '（あなた）',
    patchVersion: '1.25',
    root: {
      id: 'n_c004_r',
      segment: '5HK(CH) > DR > 5MP > 5HP > 214LK',
      damage: 2410, gauge: 0, driveGauge: 3,
      enderClassId: 'ec_weak_eagle',
      situationTags: ['ドライブラッシュ'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  // ── ⭐ 分岐コンボ（2葉） ──
  {
    id: 'c_005',
    title: '〆分岐コンボ群',
    starter: '2MK', hitState: '通常', position: '中央', priority: 'よく使う',
    sourceType: 'shared',
    visibility: 'public',
    ownerLabel: 'cobra_player',
    patchVersion: '1.25',
    root: {
      id: 'n_c005_r',
      segment: '2MK > 236LP',
      children: [
        {
          id: 'n_c005_a',
          segment: '214LK',
          routeLabel: '弱イーグル〆ルート',
          damage: 2200, gauge: 0, driveGauge: 1,
          enderClassId: 'ec_weak_eagle',
          situationTags: [],
          notes: '安定ルート。起き攻めは弱イーグル〆の重ねを参照。',
          votes: { good: 15, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c005_b',
          segment: '236PP > 5HP > 214HK',
          routeLabel: 'OD強化ルート',
          damage: 3120, gauge: 0, driveGauge: 2,
          enderClassId: 'ec_strong_eagle',
          situationTags: ['Dゲージあり'],
          notes: 'Dゲージ2本以上ある場合の高火力ルート。',
          votes: { good: 8, bad: 1, brokenInCurrentVer: 0 },
        },
      ],
    },
  },
  // ── ⭐ 分岐コンボ（3葉 + 再帰分岐） ──
  {
    id: 'c_006',
    title: 'ルート選択コンボ',
    starter: '5HK', hitState: 'CH', position: '中央', priority: 'ときどき',
    sourceType: 'shared',
    visibility: 'public',
    ownerLabel: 'mido_sf',
    patchVersion: '1.25',
    root: {
      id: 'n_c006_r',
      segment: '5HK(CH) > DR > 5HP',
      children: [
        {
          id: 'n_c006_a',
          segment: '2MK > 214LK',
          routeLabel: '弱スパイク〆',
          damage: 2580, gauge: 0, driveGauge: 1,
          enderClassId: 'ec_weak_eagle',
          situationTags: [],
          votes: { good: 6, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c006_b',
          segment: '236PP',
          children: [
            {
              id: 'n_c006_b1',
              segment: '5HP > 214HK',
              routeLabel: 'OD始動 強イーグル〆',
              condition: '画面端が近い場合',
              damage: 3340, gauge: 0, driveGauge: 2,
              enderClassId: 'ec_strong_eagle',
              situationTags: [],
              votes: { good: 4, bad: 0, brokenInCurrentVer: 0 },
            },
            {
              id: 'n_c006_b2',
              segment: '214214K',
              routeLabel: 'SA2締め',
              damage: 4280, gauge: 2, driveGauge: 2,
              enderClassId: 'ec_arabian',
              situationTags: ['キル確'],
              notes: 'キル確認用。SA2ゲージ前提。',
              votes: { good: 11, bad: 0, brokenInCurrentVer: 0 },
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // ↓ ユーザー過去メモ（ラシード）からの取り込み
  // 出典: 手書きの個人コンボ整理ノート。ダメージ値はメモに記載があった分のみ。
  // ─────────────────────────────────────────────────────────────

  // === 画面中央 ===
  {
    id: 'c_010',
    title: '暴れ潰し (ヒット/ガード分岐)',
    starter: '5LP', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c010_r',
      segment: '5LP > 2LP > 5LP',
      children: [
        {
          id: 'n_c010_a',
          segment: '236MP',
          routeLabel: '中ミキサー',
          condition: 'ヒット時',
          enderClassId: 'ec_od_mixer',
          situationTags: [],
          notes: '中ミキサー後、ラッシュ中段(6HP) or 下段(2LK)で択。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c010_b',
          segment: '214HP',
          routeLabel: '大サイクロン',
          condition: 'ガード時',
          enderClassId: 'ec_arabian',
          situationTags: [],
          notes: 'ガード時は大サイクロンで継続。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },
  {
    id: 'c_011',
    title: '基本コンボ',
    starter: '2MP', hitState: '通常', position: '中央', priority: 'よく使う',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c011_r',
      segment: '2MP > 5LK > 214LK',
      enderClassId: 'ec_weak_eagle',
      situationTags: [],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_012',
    title: 'CR経由',
    starter: '2MP', hitState: '通常', position: '中央', priority: 'よく使う',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c012_r',
      segment: '2MP > 5LK > CR > 5LP > 5MK > 5MP > 214MK',
      enderClassId: 'ec_mid_eagle',
      situationTags: ['キャンセルラッシュ'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_013',
    title: 'ODサイクロン経由 (起き攻め分岐)',
    starter: '5MP', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c013_r',
      segment: '5MP > 214PP > 6MP > 214LK > 前ステ',
      children: [
        {
          id: 'n_c013_a',
          segment: '前ステ',
          routeLabel: '前ステ×2 (+5F)',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['起き攻め'],
          notes: '〆後 +41F。ジャンプ中Kなどから拾った時の基本。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c013_b',
          segment: '6HP',
          routeLabel: '持続中段重ね',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['起き攻め', '中段'],
          notes: '〆後 +41F。ジャンプ中Kなどから拾った時の基本。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },
  {
    id: 'c_014',
    title: 'ラッシュ後の技で分岐',
    starter: 'DR', hitState: '通常', position: '中央', priority: 'よく使う',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c014_r',
      segment: 'DR',
      children: [
        {
          id: 'n_c014_a',
          segment: '5LK > 5MP > 214MK',
          routeLabel: 'ラッシュ弱K始動',
          enderClassId: 'ec_mid_eagle',
          situationTags: [],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c014_b',
          segment: '2LK > 2MK > 214LK',
          routeLabel: 'ラッシュ2弱K始動',
          enderClassId: 'ec_weak_eagle',
          situationTags: [],
          notes: 'めり込んでいれば中Pも可。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c014_c',
          segment: '6HP > 5MP > 214MK',
          routeLabel: 'ラッシュ中段(6HP)始動',
          enderClassId: 'ec_mid_eagle',
          situationTags: ['中段'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c014_d',
          segment: '6HK > 5MP > 214MK',
          routeLabel: 'ラッシュ6HK始動 (対JP/距離取る相手)',
          enderClassId: 'ec_mid_eagle',
          situationTags: [],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },

  // === 画面端 ===
  {
    id: 'c_020',
    title: '基本コンボ',
    starter: '2MP', hitState: '通常', position: '端', priority: 'よく使う',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c020_r',
      segment: '2MP > 5MP > 214MP > 5LK > 214LK',
      enderClassId: 'ec_weak_eagle',
      situationTags: [],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_021',
    title: 'CR経由',
    starter: '5LK', hitState: '通常', position: '端', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c021_r',
      segment: '5LK > CR > 5LP > 5MK > 5MP > 5HK > 214HK',
      enderClassId: 'ec_strong_eagle',
      situationTags: ['キャンセルラッシュ'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_022',
    title: '詐欺飛び',
    starter: '5MP', hitState: '通常', position: '端', priority: 'よく使う',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c022_r',
      segment: '5MP > 5HK > 236LP > 6MP > 214LP',
      enderClassId: 'ec_arabian',
      situationTags: ['詐欺飛び'],
      notes: '弱サイクロン派生から詐欺飛びへ。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_023',
    title: 'SA3込み',
    starter: '5LP', hitState: '通常', position: '端', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c023_r',
      segment: '5LP > CR > 5LP > 5MK > 5MP > 214MP > 5LK > 214LK > 236236P',
      enderClassId: 'ec_sa3_iusal',
      situationTags: ['SA3'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },

  // === 中足ラッシュ ===
  {
    id: 'c_030',
    title: 'ラッシュ ヒット時ルート分岐',
    starter: '2MK', hitState: '通常', position: '中央', priority: 'よく使う',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c030_r',
      segment: '2MK > DR > 5MK',
      children: [
        {
          id: 'n_c030_hp',
          segment: '5HP',
          children: [
            {
              id: 'n_c030_a',
              segment: '214MK',
              routeLabel: '基本: 中スパイク〆',
              enderClassId: 'ec_mid_eagle',
              situationTags: ['中足ラッシュ'],
              votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
            },
            {
              id: 'n_c030_b',
              segment: 'CR > 2HP > 5HP > 236236K',
              routeLabel: 'リーサル: SA1〆',
              enderClassId: 'ec_sa1',
              situationTags: ['中足ラッシュ', 'リーサル'],
              notes: 'リーサル確認時用。',
              votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
            },
          ],
        },
        {
          id: 'n_c030_mp',
          segment: '5MP',
          children: [
            {
              id: 'n_c030_c',
              segment: '5HK > 214HP > j.214LK',
              routeLabel: '大サイクロン上派生 → 弱スカイハイ',
              enderClassId: 'ec_arabian',
              situationTags: ['中足ラッシュ', 'セットプレイ'],
              notes: '大サイクロン上派生後 → 前HP / 前ステ投げ / 前ステ下段で択。',
              votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
            },
            {
              id: 'n_c030_d',
              segment: '214MP > 5LK > 214LK',
              routeLabel: '弱スパイク〆',
              condition: '画面端が近い場合',
              enderClassId: 'ec_weak_eagle',
              situationTags: ['中足ラッシュ'],
              votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
            },
          ],
        },
      ],
    },
  },
  {
    id: 'c_031',
    title: '中足ラッシュ ガード後の択',
    starter: '2MK', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c031_r',
      segment: '5LP > 2MP > 5LK',
      children: [
        {
          id: 'n_c031_a',
          segment: '214HP',
          routeLabel: '大サイクロン',
          condition: 'ガード時',
          enderClassId: 'ec_arabian',
          situationTags: ['中足ラッシュ'],
          notes: 'ガード時は大サイクロン → 投げ or 5LP・2LP・弱サイクロンで揺さぶる。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c031_b',
          segment: '214LK',
          routeLabel: '弱イーグル',
          condition: 'ヒット時',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['中足ラッシュ'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c031_c',
          segment: '214HP',
          routeLabel: '大サイクロン入れ込み',
          enderClassId: 'ec_arabian',
          situationTags: ['中足ラッシュ', '入れ込み'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },

  // === 飛びが通った場合 ===
  {
    id: 'c_040',
    title: 'シンプル',
    starter: 'j.HK', hitState: '通常', position: '中央', priority: 'よく使う',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c040_r',
      segment: 'j.HK > 5HP > 214MK',
      damage: 2800,
      enderClassId: 'ec_mid_eagle',
      situationTags: ['ジャンプ攻撃'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_041',
    title: '中Kつなぎ',
    starter: 'j.HK', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c041_r',
      segment: 'j.HK > 5MK > 5MP > 214MK',
      damage: 2950,
      enderClassId: 'ec_mid_eagle',
      situationTags: ['ジャンプ攻撃'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_042',
    title: 'ODサイクロン経由 (起き攻め分岐)',
    starter: 'j.HK', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c042_r',
      segment: 'j.HK > 5MK > 5MP > 214PP > 6MP > 214LK',
      children: [
        {
          id: 'n_c042_a',
          segment: '前ステ > 6HP',
          routeLabel: '中段重ね',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['ジャンプ攻撃', '起き攻め', '中段'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c042_b',
          segment: '前J > j.HK',
          routeLabel: '詐欺飛び',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['ジャンプ攻撃', '起き攻め', '詐欺飛び'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },

  // === ラッシュ中段(6HP) ===
  {
    id: 'c_050',
    title: 'ラッシュ中段(6HP)',
    starter: 'DR', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c050_r',
      segment: 'DR > 6HP > 5MP > 214MK',
      damage: 2440,
      enderClassId: 'ec_mid_eagle',
      situationTags: ['ラッシュ中段'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_051',
    title: 'ラッシュ中段',
    starter: 'DR', hitState: '通常', position: '端', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c051_r',
      segment: 'DR > 6HP > 5MP > 214MP > 5LK > 214LK',
      damage: 2990,
      enderClassId: 'ec_weak_eagle',
      situationTags: ['ラッシュ中段'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_052',
    title: 'ラッシュ中段 → 弱サイクロン重ね',
    starter: 'DR', hitState: '通常', position: '端', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c052_r',
      segment: 'DR > 6HP > 5MP > 5HK > 236LP > 6MP > 214LP',
      enderClassId: 'ec_arabian',
      situationTags: ['ラッシュ中段', '中下択'],
      notes: '弱サイクロン上派生で中下択。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_053',
    title: 'ラッシュ中段',
    starter: 'DR', hitState: 'PC', position: '端', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c053_r',
      segment: 'DR > 6HP > 5HP > 214MP > 5LK > 214LK',
      damage: 3080,
      enderClassId: 'ec_weak_eagle',
      situationTags: ['ラッシュ中段'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },

  // === ラッシュ下段 ===
  {
    id: 'c_055',
    title: 'ラッシュ下段(2LK) ヒット/ガード分岐',
    starter: 'DR', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c055_r',
      segment: 'DR > 2LK > 2MK',
      children: [
        {
          id: 'n_c055_a',
          segment: '214LK',
          routeLabel: '弱スパイク',
          condition: 'ヒット時',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['ラッシュ下段'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c055_b',
          segment: '214HP',
          routeLabel: '大サイクロン',
          condition: 'ガード時',
          enderClassId: 'ec_arabian',
          situationTags: ['ラッシュ下段'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },

  // === カウンターヒット ===
  {
    id: 'c_060',
    title: '基本コンボ',
    starter: '5LP', hitState: 'CH', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c060_r',
      segment: '5LP(CH) > 5MP > 214MK',
      enderClassId: 'ec_mid_eagle',
      situationTags: [],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_061',
    title: '距離別ルート分岐',
    starter: '5MK', hitState: 'CH', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c061_r',
      segment: '5MK(CH)',
      children: [
        {
          id: 'n_c061_a',
          segment: '2HK',
          routeLabel: '2HK',
          condition: '遠距離',
          situationTags: [],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c061_b',
          segment: '5HP > 214HK',
          routeLabel: '大スパイク',
          condition: '近距離',
          enderClassId: 'ec_strong_eagle',
          situationTags: [],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c061_c',
          segment: '6MP > 214MK',
          routeLabel: '前中P > 中イーグル',
          enderClassId: 'ec_mid_eagle',
          situationTags: [],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },

  // === インパクト後 ===
  {
    id: 'c_070',
    title: 'インパクト返し',
    starter: 'インパクト', hitState: '通常', position: '中央', priority: 'よく使う',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c070_r',
      segment: '垂直J > j.HK > 214HK',
      enderClassId: 'ec_strong_eagle',
      situationTags: ['インパクト後'],
      notes: '〆後 2LP > 前J で詐欺飛び。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_071',
    title: '起き攻め重視',
    starter: 'インパクト', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c071_r',
      segment: 'j.HK > 6MP > 214HK',
      enderClassId: 'ec_strong_eagle',
      situationTags: ['インパクト後', '起き攻め'],
      notes: '前ステ > 2MP で +8F。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_072',
    title: 'ダメージ重視',
    starter: 'インパクト', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c072_r',
      segment: 'j.HK > 5HK > 6MP > 214LK',
      enderClassId: 'ec_weak_eagle',
      situationTags: ['インパクト後'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_073',
    title: 'SA2 → ODミキサーループ',
    starter: 'インパクト', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c073_r',
      segment: '2HP > 214214K > 空J > 236PP > 214KK > 6MP > 214MP > 派生',
      enderClassId: 'ec_arabian',
      situationTags: ['インパクト後', 'SA2'],
      notes: 'SA2発動後、空ジャンプ＆ちょい歩きから ODミキサー → ODスパイク。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_074',
    title: '高ダメージルート',
    starter: 'スタン', hitState: '通常', position: 'どこでも', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c074_r',
      segment: '溜め236HK > 236PP > j.214MK > 236HP',
      enderClassId: 'ec_od_mixer',
      situationTags: ['インパクト後', 'スタン'],
      notes: '溜めワール(大) → ODミキサー → 中スカイハイ → 大ミキサー。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },

  // === 投げシケ狩り ===
  {
    id: 'c_080',
    title: '投げシケ 詐欺飛び',
    starter: '5HP', hitState: 'PC', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c080_r',
      segment: '5HP > 214HK',
      enderClassId: 'ec_strong_eagle',
      situationTags: ['投げシケ狩り', '詐欺飛び'],
      notes: '〆後 5LK空振り > j.HK で詐欺飛び。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_081',
    title: '投げシケ ODスパイク経由',
    starter: '5HP', hitState: 'PC', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c081_r',
      segment: '5HP > 214KK > 214LK',
      enderClassId: 'ec_weak_eagle',
      situationTags: ['投げシケ狩り'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },

  // === 大サイクロン攻め（セットプレイ） ===
  {
    id: 'c_090',
    title: 'ラッシュ → 大サイクロンで固める',
    starter: '2MK', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c090_r',
      segment: '2MK > DR > 5LP > 2MP > 5LK > 214HP',
      enderClassId: 'ec_arabian',
      situationTags: ['セットプレイ', '大サイクロン'],
      notes: '2MP が通っていたら 5LK > 214LK で弱イーグルへ。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_091',
    title: '下段 → 大サイクロン',
    starter: 'DR', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c091_r',
      segment: 'DR > 2LK > 2MK > 214HP',
      enderClassId: 'ec_arabian',
      situationTags: ['セットプレイ', '大サイクロン'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_092',
    title: '大サイクロン ループ',
    starter: '5LP', hitState: '通常', position: '中央', priority: 'ときどき',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c092_r',
      segment: '5LP > 214HP > 5LK > 214HP',
      enderClassId: 'ec_arabian',
      situationTags: ['セットプレイ', '大サイクロン', '固め'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },

  // === 仕掛け（コンセプトルート） ===
  {
    id: 'c_100',
    title: '仕掛け 大ルート',
    starter: 'ODワール', hitState: '通常', position: '端', priority: 'あまり使わない',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c100_r',
      segment: '236KK > DR > 6HK > 5MP > 5HK > 214HP > 5MP > 214HP > 2HP > 6HP > 5LP > 5LK > CR > 5MP > 5HK > 236LP > 6MP > 214LP > すかし投げ',
      enderClassId: 'ec_throw',
      situationTags: ['セットプレイ', '仕掛け', 'すかし投げ'],
      notes: 'ODワールガードさせ → ラッシュ前大Kから長いセットプレイ。最後はすかし投げ択。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  // archiver 取り込み（scripts/import-archiver.ts が生成）
  ...ARCHIVER_COMBOS,
];

export const KNOCKDOWN_SITUATIONS: KnockdownSituation[] = [
  { id: 's_001', label: '2MK > 弱イーグルスパイク〆 (画面中央)', enderClassId: 'ec_weak_eagle', sourceComboId: 'c_001' },
  { id: 's_002', label: '画面端 DRコンボ〆 (強イーグル)', enderClassId: 'ec_strong_eagle', sourceComboId: 'c_002' },
  { id: 's_003', label: '投げ後', enderClassId: 'ec_throw', sourceComboId: null, notes: '前投げ後の状況。距離が遠いため一部の重ねは不可。' },
  { id: 's_004', label: 'SA2〆', enderClassId: 'ec_arabian', sourceComboId: null },
];

export const OKIZEME_SETUPS: OkizemeSetup[] = [
  {
    id: 'o_001',
    enderClassId: 'ec_weak_eagle',
    title: '詐欺重ね 2LK 中段崩し',
    inputs: '前ジャンプ > J.HK > 2LK > 5MP > 214LK',
    vsWakeup: {
      guard: 'ガード後 -2F 五分',
      mash: '暴れ潰し可（5HKに繋ぐ）',
      invincible: 'バクステで透かして確反',
      delayedWakeup: '受身ずらしには 5HK 重ね直し',
    },
    flags: { low: true, safeJump: true },
    sourceType: 'shared',
    ownerLabel: 'cobra_player',
    votes: { good: 18, bad: 2, brokenInCurrentVer: 0 },
  },
  {
    id: 'o_002',
    enderClassId: 'ec_weak_eagle',
    title: '中段 5MK 重ね',
    inputs: '微歩き > 5MK > 5HP > 214LK',
    vsWakeup: {
      guard: 'ガード後 +1F',
      mash: '5MK が中段、暴れ潰し兼用',
    },
    flags: { mid: true },
    sourceType: 'personal',
    votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
  },
  {
    id: 'o_003',
    enderClassId: 'ec_weak_eagle',
    title: '投げ重ね',
    inputs: '微歩き > LPLK',
    vsWakeup: {
      mash: '通常投げで吸う',
      invincible: '無敵技に注意',
    },
    flags: { throw: true },
    sourceType: 'shared',
    ownerLabel: 'mido_sf',
    votes: { good: 9, bad: 0, brokenInCurrentVer: 3 },
  },
  {
    id: 'o_004',
    enderClassId: 'ec_throw',
    title: '前投げ後 J.HK 詐欺',
    inputs: '前ジャンプ > J.HK',
    vsWakeup: {
      guard: 'ガード後 +2F',
      invincible: '無敵技を着地ガード可',
    },
    flags: { safeJump: true },
    sourceType: 'shared',
    ownerLabel: 'cobra_player',
    votes: { good: 24, bad: 1, brokenInCurrentVer: 0 },
  },
  ...ARCHIVER_OKIZEME_SETUPS,
];

export function getComboById(id: string): Combo | undefined {
  return COMBOS.find(c => c.id === id);
}

export function getSituationById(id: string): KnockdownSituation | undefined {
  return KNOCKDOWN_SITUATIONS.find(s => s.id === id);
}

export function getEnderClassById(id: string): EnderClass | undefined {
  return ENDER_CLASSES.find(e => e.id === id);
}

// ─── 起き攻めの紐付け ───
// 〆分類が同じ起き攻めを主に出し、〆は違うが有利フレームが同じものは「参考」として分けて返す。
// 有利フレームだけで紐付けると、距離の違う〆の択まで混ざるため（ROADMAP「決まったこと（2026-10-23）」）。
export type OkizemeLinks = {
  main: OkizemeSetup[];
  reference: OkizemeSetup[];
  frameAdvantage?: string;         // 参考を選んだ基準（"+30F" など）。有利フレームが数値で分からない〆は undefined
};

export function getOkizemeLinks(enderClassId: string | null | undefined): OkizemeLinks {
  if (!enderClassId) return { main: [], reference: [] };
  const fa = getEnderClassById(enderClassId)?.frameAdvantage;
  // SA〆などの「—」どうしは同じ有利フレームとみなさない
  const frameAdvantage = fa && /\d/.test(fa) ? fa : undefined;
  const sameFrameIds = new Set(
    ENDER_CLASSES
      .filter(e => frameAdvantage && e.id !== enderClassId && e.frameAdvantage === frameAdvantage)
      .map(e => e.id)
  );
  return {
    main: OKIZEME_SETUPS.filter(o => o.enderClassId === enderClassId),
    reference: OKIZEME_SETUPS.filter(o => sameFrameIds.has(o.enderClassId)),
    frameAdvantage,
  };
}

// 〆分類の件数。コンボはその〆で終わるルートを1本以上持つものを数える（分岐コンボも1件）
export function getEnderClassCounts(enderClassId: string, combos: Combo[] = COMBOS) {
  return {
    combos: combos.filter(c => getComboRoutes(c).some(r => r.leaf.enderClassId === enderClassId)).length,
    okizeme: OKIZEME_SETUPS.filter(o => o.enderClassId === enderClassId).length,
  };
}

// ─── 一覧の見出し ───
export type ComboBucket = { key: string; scene: Scene | null; items: Combo[] };
export type ComboSection = { section: ListSection; buckets: ComboBucket[]; count: number };

// 見出しの順にコンボをまとめる。見出しの中は優先度の高い順（同じ優先度の中は配列の順）。
// コンボの無い見出しも items: [] で返す（キャラハブでは新規保存の受け皿にする）
export function groupCombosForList(combos: Combo[]): ComboSection[] {
  const byPriority = (a: Combo, b: Combo) => PRIORITIES.indexOf(a.priority) - PRIORITIES.indexOf(b.priority);
  return LIST_SECTIONS.map(section => {
    const scenes = isSpecialStarter(section) ? [null] : SCENES;
    const buckets = scenes.map(scene => {
      const key = bucketKey(section, scene);
      return { key, scene, items: combos.filter(c => bucketOf(c) === key).sort(byPriority) };
    });
    return { section, buckets, count: buckets.reduce((n, b) => n + b.items.length, 0) };
  });
}

// ─── ツリー走査ヘルパ ───
export type RouteSummary = {
  leaf: ComboNode;
  pathSegments: string[];          // ルート→葉までのsegment列
  fullInputs: string;              // 結合した完全コマンド文字列
};

export function getAllLeaves(node: ComboNode, pathSegments: string[] = []): RouteSummary[] {
  const here = [...pathSegments, node.segment];
  if (!node.children || node.children.length === 0) {
    return [{ leaf: node, pathSegments: here, fullInputs: here.filter(s => s.trim()).join(' > ') }];  // 空の segment（別のルートの途中で終わる葉）は飛ばす
  }
  return node.children.flatMap(c => getAllLeaves(c, here));
}

export function getComboRoutes(combo: Combo): RouteSummary[] {
  return getAllLeaves(combo.root);
}

export function hasBranches(combo: Combo): boolean {
  return getComboRoutes(combo).length > 1;
}

// コンボの代表ダメージ（最大値）
export function getComboMaxDamage(combo: Combo): number {
  return Math.max(...getComboRoutes(combo).map(r => r.leaf.damage ?? 0));
}

// コンボ全葉の不可票合計
export function getComboBrokenCount(combo: Combo): number {
  return getComboRoutes(combo).reduce((sum, r) => sum + (r.leaf.votes?.brokenInCurrentVer ?? 0), 0);
}

// 「現verでは不可」一覧用：投票0以外を並べる
export function getBrokenList() {
  type Row = {
    kind: 'combo' | 'okizeme';
    id: string;
    routeId?: string;              // 分岐の場合の葉ID
    title: string;
    routeLabel?: string;
    owner: string;
    votes: number;
  };
  const rows: Row[] = [];
  for (const c of COMBOS) {
    for (const r of getComboRoutes(c)) {
      const broken = r.leaf.votes?.brokenInCurrentVer ?? 0;
      if (broken > 0) {
        rows.push({
          kind: 'combo',
          id: c.id,
          routeId: r.leaf.id,
          title: c.title,
          routeLabel: r.leaf.routeLabel,
          owner: c.ownerLabel ?? '—',
          votes: broken,
        });
      }
    }
  }
  for (const o of OKIZEME_SETUPS) {
    if (o.votes.brokenInCurrentVer > 0)
      rows.push({ kind: 'okizeme', id: o.id, title: o.title, owner: o.ownerLabel ?? '—', votes: o.votes.brokenInCurrentVer });
  }
  return rows.sort((a, b) => b.votes - a.votes);
}

