// SF6 のキャラ一覧（キャラ対策の相手の表示名・並び順・URL に使う）。
// en は archiver と同じ英語名（../sf6-combo-archiver/src/scraper/youtube_scraper.py の SF6_CHARACTERS に、
// 対策動画で出てきたキャラを足したもの）。Year 4 以降のキャラは、動画のゲーム画面の名前表示（HUD）を見て足す。
// acqua は あくあ総研（https://acqua-souken.com/char/<acqua>/）のキャラページの名前（2026-11-14 に一覧から確認）。
// scripts/import-archiver.ts（Node）から直接読むので、値の import をするときは拡張子まで書く

export type CharacterInfo = { en: string; ja: string; slug: string; acqua?: string };

export const CHARACTERS: CharacterInfo[] = [
  // ベースロスター
  { en: 'Ryu', ja: 'リュウ', slug: 'ryu', acqua: 'ryu' },
  { en: 'Luke', ja: 'ルーク', slug: 'luke', acqua: 'luke' },
  { en: 'Jamie', ja: 'ジェイミー', slug: 'jamie', acqua: 'jamie' },
  { en: 'Chun-Li', ja: '春麗', slug: 'chunli', acqua: 'chunli' },
  { en: 'Guile', ja: 'ガイル', slug: 'guile', acqua: 'guile' },
  { en: 'Kimberly', ja: 'キンバリー', slug: 'kimberly', acqua: 'kimberly' },
  { en: 'Juri', ja: 'ジュリ', slug: 'juri', acqua: 'juri' },
  { en: 'Ken', ja: 'ケン', slug: 'ken', acqua: 'ken' },
  { en: 'Blanka', ja: 'ブランカ', slug: 'blanka', acqua: 'blanka' },
  { en: 'Dhalsim', ja: 'ダルシム', slug: 'dhalsim', acqua: 'dhalsim' },
  { en: 'E. Honda', ja: 'E.本田', slug: 'honda', acqua: 'ehonda' },
  { en: 'Dee Jay', ja: 'ディージェイ', slug: 'deejay', acqua: 'deejay' },
  { en: 'Manon', ja: 'マノン', slug: 'manon', acqua: 'manon' },
  { en: 'Marisa', ja: 'マリーザ', slug: 'marisa', acqua: 'marisa' },
  { en: 'JP', ja: 'JP', slug: 'jp', acqua: 'jp' },
  { en: 'Zangief', ja: 'ザンギエフ', slug: 'zangief', acqua: 'zangief' },
  { en: 'Lily', ja: 'リリー', slug: 'lily', acqua: 'lily' },
  { en: 'Cammy', ja: 'キャミィ', slug: 'cammy', acqua: 'cammy' },
  // Year 1
  { en: 'Rashid', ja: 'ラシード', slug: 'rashid', acqua: 'rashid' },
  { en: 'Aki', ja: 'A.K.I.', slug: 'aki', acqua: 'aki' },
  { en: 'Ed', ja: 'エド', slug: 'ed', acqua: 'ed' },
  { en: 'Akuma', ja: '豪鬼', slug: 'akuma', acqua: 'gouki-akuma' },
  // Year 2
  { en: 'M. Bison', ja: 'ベガ', slug: 'bison', acqua: 'vega-mbison' },
  { en: 'Terry', ja: 'テリー', slug: 'terry', acqua: 'terry' },
  { en: 'Mai', ja: '舞', slug: 'mai', acqua: 'mai' },
  { en: 'Elena', ja: 'エレナ', slug: 'elena', acqua: 'elena' },
  // Year 3
  { en: 'Sagat', ja: 'サガット', slug: 'sagat', acqua: 'sagat' },
  { en: 'C. Viper', ja: 'C.ヴァイパー', slug: 'viper', acqua: 'cviper' },
  { en: 'Alex', ja: 'アレックス', slug: 'alex', acqua: 'alex' },
  { en: 'Ingrid', ja: 'イングリッド', slug: 'ingrid', acqua: 'ingrid' },
  // Year 4（動画の HUD の表記から）
  { en: 'Arjun', ja: 'アルジュン', slug: 'arjun', acqua: 'arjun' },
  { en: 'Yasmine', ja: 'ヤスミン', slug: 'yasmine', acqua: 'yasmine' },
];

// ゲームのキャラ選択画面の並び（slug。4列で、1段目と最後の段は2人を真ん中に寄せる）。
// ランクマッチで相手キャラが出たらすぐ押せるよう、キャラ対策のトップはこの形で並べる（2026-11-16 ユーザー要望。
// ユーザーが貼ったキャラ選択画面のスクショから読み取った。Year 4 の2人は 女性＝ヤスミン、髭の男性＝アルジュン と見た）
export const SELECT_SCREEN_ROWS: string[][] = [
  ['luke', 'jamie'],
  ['manon', 'kimberly', 'marisa', 'lily'],
  ['jp', 'juri', 'deejay', 'cammy'],
  ['ryu', 'honda', 'blanka', 'guile'],
  ['ken', 'chunli', 'zangief', 'dhalsim'],
  ['rashid', 'aki', 'ed', 'akuma'],
  ['bison', 'terry', 'mai', 'elena'],
  ['sagat', 'viper', 'alex', 'ingrid'],
  ['yasmine', 'arjun'],
];
export const SELECT_SCREEN_COLUMNS = 4;

const BY_EN = new Map(CHARACTERS.map((c) => [c.en, c]));
const BY_SLUG = new Map(CHARACTERS.map((c) => [c.slug, c]));

export function characterByEn(en: string): CharacterInfo | undefined {
  return BY_EN.get(en);
}

export function characterBySlug(slug: string): CharacterInfo | undefined {
  return BY_SLUG.get(slug);
}

// 並び順（CHARACTERS の順）。一覧に無いキャラは最後
export function characterOrder(en: string): number {
  const i = CHARACTERS.findIndex((c) => c.en === en);
  return i === -1 ? CHARACTERS.length : i;
}

export const acquaSoukenUrl = (c: CharacterInfo) => (c.acqua ? `https://acqua-souken.com/char/${c.acqua}/` : null);
