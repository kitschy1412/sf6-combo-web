// モック用ハードコードデータ（Rashid）
// Phase 1: 入力UIの設計確認用。バックエンド未接続。

import { ARCHIVER_COMBOS, ARCHIVER_OKIZEME_SETUPS } from './rashid-archiver';

export type SourceType = 'personal' | 'shared' | 'forked';
export type Visibility = 'private' | 'unlisted' | 'public';

// コンボ数・起き攻め数は持たない（getEnderClassCounts で実データから数える）
export type EnderClass = {
  id: string;
  key: string;
  displayName: string;
  frameAdvantage?: string;
};

// ─── パレット表示: コマンド ↔ 技名 変換マップ ───
// RASHID_PALETTE より後に定義するため、このブロックはファイル末尾近くに移動済み。
// ここではコメントのみ（実体は RASHID_PALETTE 定義後に記述）。

// ─── コンボツリーノード ───
// children無し = 葉(終端) → ダメージ・〆分類等を持つ
// children有り = 分岐点 → segment は共通プレフィックス断片
export type ComboNode = {
  id: string;                      // 葉の投票・選択用に必要
  segment: string;                 // "2MK > 236LP" 等のコマンド断片
  routeLabel?: string;             // 葉の別名（例: "214LKルート"）
  damage?: number;                 // 葉のみ
  gauge?: number;                  // 葉のみ
  driveGauge?: number;             // 葉のみ
  enderClassId?: string | null;    // 葉のみ
  situationTags?: string[];        // 葉のみ
  notes?: string;
  votes?: { good: number; bad: number; brokenInCurrentVer: number }; // 葉のみ (共有時)
  children?: ComboNode[];
};

export type Combo = {
  id: string;
  title: string;
  categoryMajor?: string;          // 大分類: "ヒット時コンボ" / "セットプレイ" など
  categoryMinor?: string;          // 小分類: "2MK始動" / "5HK(CH)始動" など
  starterType: string;             // ツリー全体に共通
  sourceType: SourceType;
  visibility: Visibility;
  ownerLabel?: string;
  forkedFrom?: string | null;
  youtubeId?: string;
  startSec?: number;
  patchVersion: string;
  sortOrder?: number;              // 同一 (categoryMajor, categoryMinor) 内の並び順（昇順）。未設定分は配列順を初期順として扱う
  root: ComboNode;                 // ⭐ ツリーのルート
};

export type KnockdownSituation = {
  id: string;
  label: string;
  enderClassId: string;
  sourceComboId: string | null;
  notes?: string;
};

export type OkizemeSetup = {
  id: string;
  enderClassId: string;
  title: string;
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
  startSec?: number;
  sourceType: SourceType;
  ownerLabel?: string;
  votes: { good: number; bad: number; brokenInCurrentVer: number };
};

// ─── コマンド入力パレット ───
// archiver 取り込みで、対応表で変換できなかった語がある or 〆技から enderClassId を推定できなかったもの
export type ArchiverUnresolved = {
  id: string;
  kind: 'combo' | 'okizeme';
  title: string;
  recipeJa: string;                // 取り込み元の日本語レシピ
  unresolvedTerms: string[];       // 日本語のまま残った語
  enderUnknown: boolean;
};

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
      m('236LP', '弱ミキサー'), m('236MP', '中ミキサー'), m('236HP', '強ミキサー'), m('236PP', 'ODミキサー'),
      m('236LK', '弱ワール'), m('236MK', '中ワール'), m('236HK', '強ワール'), m('236KK', 'ODワール'),
      m('214LK', '弱イーグル'), m('214MK', '中イーグル'), m('214HK', '強イーグル'), m('214KK', 'ODイーグル'),
      m('214LP', '弱サイクロン'), m('214MP', '中サイクロン'), m('214HP', '強サイクロン'), m('214PP', 'ODサイクロン'),
      m('j.214LK', '弱スカイハイ'), m('j.214MK', '中スカイハイ'), m('j.214HK', '強スカイハイ'), m('j.214KK', 'ODスカイハイ'),
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
  { id: 'ec_od_mixer', key: 'od_mixer_ender', displayName: 'ODスピニングミキサー〆', frameAdvantage: '+22F' },
  { id: 'ec_od_whip', key: 'od_whip_ender', displayName: 'ODウィップオブザワインド〆', frameAdvantage: '+24F' },
  { id: 'ec_throw', key: 'throw_after', displayName: '投げ後', frameAdvantage: '+30F' },
  { id: 'ec_arabian', key: 'arabian_cyclone_ender', displayName: 'アラビアンサイクロン〆', frameAdvantage: '+40F' },
  { id: 'ec_mid_eagle', key: 'mid_eagle_spike_ender', displayName: '中イーグルスパイク〆', frameAdvantage: '+30F' },
  { id: 'ec_sa3_iusal', key: 'sa3_iusal_ender', displayName: 'SA3 イウサール〆', frameAdvantage: '—' },
  { id: 'ec_sa1', key: 'sa1_ender', displayName: 'SA1〆', frameAdvantage: '—' },
];

export const COMBOS: Combo[] = [
  // ── 1本道コンボ ──
  {
    id: 'c_001',
    title: '画面中央 2MK始動 基本コンボ',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '2MK始動',
    starterType: '下段',
    sourceType: 'personal',
    visibility: 'private',
    youtubeId: 'dQw4w9WgXcQ', startSec: 12,
    patchVersion: '1.25',
    root: {
      id: 'n_c001_r',
      segment: '2MK > 236LP > 214LK',
      damage: 1820, gauge: 0, driveGauge: 1,
      enderClassId: 'ec_weak_eagle',
      situationTags: ['画面中央'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  // ── 1本道コンボ（共有） ──
  {
    id: 'c_002',
    title: '画面端 DR始動 高火力',
    categoryMajor: 'ヒット時コンボ', categoryMinor: 'DR始動',
    starterType: '中段',
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
      situationTags: ['画面端', 'ドライブラッシュ'],
      votes: { good: 12, bad: 1, brokenInCurrentVer: 0 },
    },
  },
  // ── 1本道コンボ（共有・現ver不可票あり） ──
  {
    id: 'c_003',
    title: 'SA2始動 確反コンボ',
    categoryMajor: 'ヒット時コンボ', categoryMinor: 'SA2確反',
    starterType: '確定反撃',
    sourceType: 'shared',
    visibility: 'public',
    ownerLabel: 'mido_sf',
    patchVersion: '1.25',
    root: {
      id: 'n_c003_r',
      segment: '214214K > 2HP > 214LK',
      damage: 2980, gauge: 2, driveGauge: 0,
      enderClassId: 'ec_weak_eagle',
      situationTags: ['画面中央', '確反'],
      votes: { good: 28, bad: 0, brokenInCurrentVer: 5 },
    },
  },
  // ── fork済コンボ ──
  {
    id: 'c_004',
    title: 'CH 5HK始動 ノーゲージ',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '5HK(CH)始動',
    starterType: 'カウンター',
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
      situationTags: ['カウンター', 'ドライブラッシュ'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  // ── ⭐ 分岐コンボ（2葉） ──
  {
    id: 'c_005',
    title: '2MK始動 〆分岐コンボ群',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '2MK始動',
    starterType: '下段',
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
          situationTags: ['画面中央'],
          notes: '安定ルート。起き攻めは弱イーグル〆の重ねを参照。',
          votes: { good: 15, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c005_b',
          segment: '236PP > 5HP > 214HK',
          routeLabel: 'OD強化ルート',
          damage: 3120, gauge: 0, driveGauge: 2,
          enderClassId: 'ec_strong_eagle',
          situationTags: ['画面中央', 'Dゲージあり'],
          notes: 'Dゲージ2本以上ある場合の高火力ルート。',
          votes: { good: 8, bad: 1, brokenInCurrentVer: 0 },
        },
      ],
    },
  },
  // ── ⭐ 分岐コンボ（3葉 + 再帰分岐） ──
  {
    id: 'c_006',
    title: 'カウンター5HK始動 ルート選択コンボ',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '5HK(CH)始動',
    starterType: 'カウンター',
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
          routeLabel: 'ノーゲージ',
          damage: 2580, gauge: 0, driveGauge: 1,
          enderClassId: 'ec_weak_eagle',
          situationTags: ['カウンター'],
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
              damage: 3340, gauge: 0, driveGauge: 2,
              enderClassId: 'ec_strong_eagle',
              situationTags: ['カウンター', '画面端'],
              votes: { good: 4, bad: 0, brokenInCurrentVer: 0 },
            },
            {
              id: 'n_c006_b2',
              segment: '214214K',
              routeLabel: 'SA2締め',
              damage: 4280, gauge: 2, driveGauge: 2,
              enderClassId: 'ec_arabian',
              situationTags: ['カウンター', 'キル確'],
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
    title: '中央 5LP始動 暴れ潰し (ヒット/ガード分岐)',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '5LP始動',
    starterType: '暴れ潰し',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c010_r',
      segment: '5LP > 2LP > 5LP',
      children: [
        {
          id: 'n_c010_a',
          segment: '236MP',
          routeLabel: 'ヒット時 (中ミキサー)',
          enderClassId: 'ec_od_mixer',
          situationTags: ['画面中央', 'ヒット時'],
          notes: '中ミキサー後、ラッシュ中段(6HP) or 下段(2LK)で択。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c010_b',
          segment: '214HP',
          routeLabel: 'ガード時 (大サイクロン)',
          enderClassId: 'ec_arabian',
          situationTags: ['画面中央', 'ガード時'],
          notes: 'ガード時は大サイクロンで継続。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },
  {
    id: 'c_011',
    title: '中央 2MK始動 弱スパイク〆',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '2MK始動',
    starterType: '下段',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c011_r',
      segment: '2MP > 5LK > 214LK',
      enderClassId: 'ec_weak_eagle',
      situationTags: ['画面中央'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_012',
    title: '中央 2MP始動 CR経由 中スパイク〆',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '2MP始動',
    starterType: '中段確認',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c012_r',
      segment: '2MP > 5LK > CR > 5LP > 5MK > 5MP > 214MK',
      enderClassId: 'ec_mid_eagle',
      situationTags: ['画面中央', 'キャンセルラッシュ'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_013',
    title: '中央 中P始動 ODサイクロン経由 (起き攻め分岐)',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '5MP始動',
    starterType: '対空/拾い',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c013_r',
      segment: '5MP > 214PP > 6MP > 214LK',
      notes: '〆後 +41F。ジャンプ中Kなどから拾った時の基本。',
      children: [
        {
          id: 'n_c013_a',
          segment: '前ステ > 前ステ',
          routeLabel: '前ステ×2 (+5F)',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['画面中央', '起き攻め'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c013_b',
          segment: '前ステ > 6HP',
          routeLabel: '持続中段重ね',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['画面中央', '起き攻め', '中段'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },
  {
    id: 'c_014',
    title: '中央 生ラッシュ始動 中スパイク〆 (始動別分岐)',
    categoryMajor: 'ラッシュ始動', categoryMinor: '生ラッシュ',
    starterType: '生ラッシュ',
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
          situationTags: ['画面中央'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c014_b',
          segment: '2LK > 2MK > 214LK',
          routeLabel: 'ラッシュ2弱K始動',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['画面中央'],
          notes: 'めり込んでいれば中Pも可。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c014_c',
          segment: '6HP > 5MP > 214MK',
          routeLabel: 'ラッシュ中段(6HP)始動',
          enderClassId: 'ec_mid_eagle',
          situationTags: ['画面中央', '中段'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c014_d',
          segment: '6HK > 5MP > 214MK',
          routeLabel: 'ラッシュ6HK始動 (対JP/距離取る相手)',
          enderClassId: 'ec_mid_eagle',
          situationTags: ['画面中央'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },

  // === 画面端 ===
  {
    id: 'c_020',
    title: '画面端 2MP始動 弱スパイク〆',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '画面端',
    starterType: '下段',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c020_r',
      segment: '2MP > 5MP > 214MP > 5LK > 214LK',
      enderClassId: 'ec_weak_eagle',
      situationTags: ['画面端'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_021',
    title: '画面端 弱K始動 大スパイク〆',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '画面端',
    starterType: '弱K',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c021_r',
      segment: '5LK > CR > 5LP > 5MK > 5MP > 5HK > 214HK',
      enderClassId: 'ec_strong_eagle',
      situationTags: ['画面端', 'キャンセルラッシュ'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_022',
    title: '画面端 5MP 5HK始動 弱サイクロン〆 (詐欺飛び)',
    categoryMajor: 'セットプレイ', categoryMinor: '画面端',
    starterType: '中P大K',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c022_r',
      segment: '5MP > 5HK > 236LP > 6MP > 214LP',
      enderClassId: 'ec_arabian',
      situationTags: ['画面端', '詐欺飛び'],
      notes: '弱サイクロン派生から詐欺飛びへ。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_023',
    title: '画面端 SA3 イウサール〆',
    categoryMajor: 'ヒット時コンボ', categoryMinor: '画面端',
    starterType: '弱P',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c023_r',
      segment: '5LP > CR > 5LP > 5MK > 5MP > 214MP > 5LK > 214LK > 236236P',
      enderClassId: 'ec_sa3_iusal',
      situationTags: ['画面端', 'SA3'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },

  // === 中足ラッシュ ===
  {
    id: 'c_030',
    title: '中足ラッシュ ヒット時ルート分岐',
    categoryMajor: 'ラッシュ始動', categoryMinor: '2MK > DR',
    starterType: '下段確認',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c030_r',
      segment: '2MK > DR',
      children: [
        {
          id: 'n_c030_a',
          segment: '5MK > 5HP > 214MK',
          routeLabel: '基本: 中スパイク〆',
          enderClassId: 'ec_mid_eagle',
          situationTags: ['中足ラッシュ'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c030_b',
          segment: '5MK > 5HP > CR > 2HP > 5HP > 236236K',
          routeLabel: 'リーサル: SA1〆',
          enderClassId: 'ec_sa1',
          situationTags: ['中足ラッシュ', 'リーサル'],
          notes: 'リーサル確認時用。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c030_c',
          segment: '5MK > 5MP > 5HK > 214HP > j.214LK',
          routeLabel: '大サイクロン上派生 → 弱スカイハイ',
          enderClassId: 'ec_arabian',
          situationTags: ['中足ラッシュ', 'セットプレイ'],
          notes: '大サイクロン上派生後 → 前HP / 前ステ投げ / 前ステ下段で択。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c030_d',
          segment: '5MK > 5MP > 214MP > 5LK > 214LK',
          routeLabel: '画面端 弱スパイク〆',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['中足ラッシュ', '画面端'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },
  {
    id: 'c_031',
    title: '中足ラッシュ ガード時の択 (5LP始動)',
    categoryMajor: 'セットプレイ', categoryMinor: '中足ラッシュ ガード',
    starterType: '中足ラッシュ',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c031_r',
      segment: '5LP > 2MP > 5LK',
      children: [
        {
          id: 'n_c031_a',
          segment: '214HP',
          routeLabel: 'ガード時: 大サイクロン',
          enderClassId: 'ec_arabian',
          situationTags: ['中足ラッシュ', 'ガード時'],
          notes: 'ガード時は大サイクロン → 投げ or 5LP・2LP・弱サイクロンで揺さぶる。',
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c031_b',
          segment: '214LK',
          routeLabel: 'ヒット時: 弱イーグル',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['中足ラッシュ', 'ヒット時'],
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
    title: 'J.HK始動 中スパイク〆 (シンプル)',
    categoryMajor: 'ヒット時コンボ', categoryMinor: 'ジャンプ攻撃',
    starterType: '飛び込み',
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
    title: 'J.HK始動 中Kつなぎ 中スパイク〆',
    categoryMajor: 'ヒット時コンボ', categoryMinor: 'ジャンプ攻撃',
    starterType: '飛び込み',
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
    title: 'J.HK始動 ODサイクロン経由 (起き攻め分岐)',
    categoryMajor: 'ヒット時コンボ', categoryMinor: 'ジャンプ攻撃',
    starterType: '飛び込み',
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
    title: 'ラッシュ中段(6HP) → 中スパイク',
    categoryMajor: 'ヒット時コンボ', categoryMinor: 'ラッシュ中段',
    starterType: 'ラッシュ中段',
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
    title: '画面端 ラッシュ中段始動 弱スパイク〆',
    categoryMajor: 'ヒット時コンボ', categoryMinor: 'ラッシュ中段',
    starterType: 'ラッシュ中段',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c051_r',
      segment: 'DR > 6HP > 5MP > 214MP > 5LK > 214LK',
      damage: 2990,
      enderClassId: 'ec_weak_eagle',
      situationTags: ['ラッシュ中段', '画面端'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_052',
    title: '画面端 ラッシュ中段 → 弱ミキサー → 弱サイクロン重ね',
    categoryMajor: 'セットプレイ', categoryMinor: 'ラッシュ中段',
    starterType: 'ラッシュ中段',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c052_r',
      segment: 'DR > 6HP > 5MP > 5HK > 236LP > 6MP > 214LP',
      enderClassId: 'ec_arabian',
      situationTags: ['ラッシュ中段', '画面端', '中下択'],
      notes: '弱サイクロン上派生で中下択。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_053',
    title: '画面端 ラッシュ中段 パニカン時 弱スパイク〆',
    categoryMajor: 'ヒット時コンボ', categoryMinor: 'ラッシュ中段',
    starterType: 'パニカン',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c053_r',
      segment: 'DR > 6HP > 5HP > 214MP > 5LK > 214LK',
      damage: 3080,
      enderClassId: 'ec_weak_eagle',
      situationTags: ['ラッシュ中段', '画面端', 'パニカン'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },

  // === ラッシュ下段 ===
  {
    id: 'c_055',
    title: 'ラッシュ下段(2LK) ヒット/ガード分岐',
    categoryMajor: 'ラッシュ始動', categoryMinor: 'ラッシュ下段',
    starterType: 'ラッシュ下段',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c055_r',
      segment: 'DR > 2LK > 2MK',
      children: [
        {
          id: 'n_c055_a',
          segment: '214LK',
          routeLabel: 'ヒット時: 弱スパイク',
          enderClassId: 'ec_weak_eagle',
          situationTags: ['ラッシュ下段', 'ヒット時'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c055_b',
          segment: '214HP',
          routeLabel: 'ガード時: 大サイクロン',
          enderClassId: 'ec_arabian',
          situationTags: ['ラッシュ下段', 'ガード時'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },

  // === カウンターヒット ===
  {
    id: 'c_060',
    title: '5LP(CH)始動 中スパイク〆',
    categoryMajor: 'カウンターヒット', categoryMinor: '5LP(CH)',
    starterType: 'カウンター',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c060_r',
      segment: '5LP(CH) > 5MP > 214MK',
      enderClassId: 'ec_mid_eagle',
      situationTags: ['カウンター'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_061',
    title: '5MK(CH)始動 距離別ルート分岐',
    categoryMajor: 'カウンターヒット', categoryMinor: '5MK(CH)',
    starterType: 'カウンター',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c061_r',
      segment: '5MK(CH)',
      children: [
        {
          id: 'n_c061_a',
          segment: '2HK',
          routeLabel: '遠距離: 2HK',
          situationTags: ['カウンター', '遠距離'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c061_b',
          segment: '5HP > 214HK',
          routeLabel: '近距離: 大スパイク',
          enderClassId: 'ec_strong_eagle',
          situationTags: ['カウンター', '近距離'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
        {
          id: 'n_c061_c',
          segment: '6MP > 214MK',
          routeLabel: '前中P > 中イーグル',
          enderClassId: 'ec_mid_eagle',
          situationTags: ['カウンター'],
          votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
        },
      ],
    },
  },

  // === インパクト後 ===
  {
    id: 'c_070',
    title: '画面中央 インパクト返し 大スパイク〆',
    categoryMajor: 'インパクト後', categoryMinor: '画面中央',
    starterType: 'インパクト返し',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c070_r',
      segment: '垂直J > j.HK > 214HK',
      enderClassId: 'ec_strong_eagle',
      situationTags: ['画面中央', 'インパクト後'],
      notes: '〆後 2LP > 前J で詐欺飛び。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_071',
    title: '画面中央 インパクト → 起き攻め 大スパイク〆',
    categoryMajor: 'インパクト後', categoryMinor: '画面中央',
    starterType: 'インパクト後 起き攻め',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c071_r',
      segment: 'j.HK > 6MP > 214HK',
      enderClassId: 'ec_strong_eagle',
      situationTags: ['画面中央', 'インパクト後', '起き攻め'],
      notes: '前ステ > 2MP で +8F。',
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_072',
    title: '画面中央 インパクト(ダメージ重視) 弱スパイク〆',
    categoryMajor: 'インパクト後', categoryMinor: '画面中央',
    starterType: 'インパクト ダメージ取り',
    sourceType: 'personal', visibility: 'private',
    patchVersion: '1.25',
    root: {
      id: 'n_c072_r',
      segment: 'j.HK > 5HK > 6MP > 214LK',
      enderClassId: 'ec_weak_eagle',
      situationTags: ['画面中央', 'インパクト後'],
      votes: { good: 0, bad: 0, brokenInCurrentVer: 0 },
    },
  },
  {
    id: 'c_073',
    title: '画面中央 インパクト → SA2 → ODミキサーループ',
    categoryMajor: 'インパクト後', categoryMinor: 'SA2ルート',
    starterType: 'インパクト SA2',
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
    title: 'インパクトでスタン時 高ダメージルート',
    categoryMajor: 'インパクト後', categoryMinor: 'スタン時',
    starterType: 'スタン',
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
    title: '投げシケ 5HP始動 大スパイク → 詐欺飛び',
    categoryMajor: '投げシケ狩り', categoryMinor: '5HP始動',
    starterType: '投げシケ狩り',
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
    title: '投げシケ 5HP始動 ODスパイク → 弱スパイク',
    categoryMajor: '投げシケ狩り', categoryMinor: '5HP始動',
    starterType: '投げシケ狩り',
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
    title: '中足ラッシュ → 大サイクロンで固める',
    categoryMajor: 'セットプレイ', categoryMinor: '大サイクロン攻め',
    starterType: '中足ラッシュ',
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
    title: '生ラッシュ 2LK始動 → 大サイクロン',
    categoryMajor: 'セットプレイ', categoryMinor: '大サイクロン攻め',
    starterType: '生ラッシュ',
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
    title: '5LP > 大サイクロン > 5LK > 大サイクロン ループ',
    categoryMajor: 'セットプレイ', categoryMinor: '大サイクロン攻め',
    starterType: '5LP',
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
    title: 'ODワール仕掛け 大ルート',
    categoryMajor: 'セットプレイ', categoryMinor: '仕掛け',
    starterType: 'ODワール',
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

// ─── ツリー走査ヘルパ ───
export type RouteSummary = {
  leaf: ComboNode;
  pathSegments: string[];          // ルート→葉までのsegment列
  fullInputs: string;              // 結合した完全コマンド文字列
};

export function getAllLeaves(node: ComboNode, pathSegments: string[] = []): RouteSummary[] {
  const here = [...pathSegments, node.segment];
  if (!node.children || node.children.length === 0) {
    return [{ leaf: node, pathSegments: here, fullInputs: here.join(' > ') }];
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

// ─── トークン ↔ 技名 変換マップ ───
// ボタン入力（方向+ボタン）は方向プレフィックスルールで変換。
// 必殺技等は RASHID_PALETTE の name を使用。

const _DIR_MAP: Record<string, string> = {
  '5': '立ち', '2': 'しゃがみ', '8': 'ジャンプ',
  '6': '前',   '4': '後ろ',    '9': '前ジャンプ', '7': '後ジャンプ',
};
const _BTN_MAP: Record<string, string> = {
  'LP': '弱P', 'MP': '中P', 'HP': '強P',
  'LK': '弱K', 'MK': '中K', 'HK': '強K',
  'PP': 'ODパンチ', 'KK': 'ODキック',
};

function _tokenToButtonName(token: string): string | undefined {
  if (token.startsWith('j.')) {
    const suf = _BTN_MAP[token.slice(2)];
    return suf ? 'ジャンプ' + suf : undefined;
  }
  const dir = _DIR_MAP[token[0]];
  if (dir) {
    const suf = _BTN_MAP[token.slice(1)];
    return suf ? dir + suf : undefined;
  }
  return undefined;
}

export const TOKEN_TO_NAME: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const group of RASHID_PALETTE) {
    for (const mv of group.moves) {
      const btnName = _tokenToButtonName(mv.token);
      if (btnName) {
        // ボタン入力は方向名を優先（コマンド技名より上書き）
        map[mv.token] = btnName;
      } else if (mv.name) {
        // 必殺技等はパレットの name をそのまま使用
        map[mv.token] = mv.name;
      }
    }
  }
  return map;
})();
