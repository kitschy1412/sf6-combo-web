// 始動技・ヒット状態・位置・優先度の値と、一覧の見出しの決め方（Rashid）
// scripts/import-archiver.ts からも読むので、このファイルは他のファイルを import しない。

export type HitState = '通常' | 'CH' | 'PC';
export type Position = '中央' | '端' | 'どこでも';
export type Priority = 'よく使う' | 'ときどき' | 'あまり使わない';

export const HIT_STATES: HitState[] = ['通常', 'CH', 'PC'];
export const POSITIONS: Position[] = ['中央', '端', 'どこでも'];

// ヒット状態のバッジのクラス（global.css）。通常はバッジを出さない
export const hitTagClass = (h: HitState) => (h === '通常' ? null : `tag tag-hit tag-hit-${h.toLowerCase()}`);

// 優先度は実戦で使う頻度。高い順に並べる。一覧では FOLDED_PRIORITY の行を最初は畳む
export const PRIORITIES: Priority[] = ['よく使う', 'ときどき', 'あまり使わない'];
export const DEFAULT_PRIORITY: Priority = 'ときどき';
export const FOLDED_PRIORITY: Priority = 'あまり使わない';

// 優先度のバッジのクラス（global.css）
export const priorityTagClass = (p: Priority) => `tag tag-priority-${PRIORITIES.indexOf(p) + 1}`;

// 始動技の絞り込みの並び順。小技 → 中技 → 大技 → ジャンプ → DR → 必殺技・SA → 技でない始動
// 技はコマンド、必殺技・SA と技でない始動は名前で持つ
export const STARTERS = [
  '5LP', '5LK', '2LK', '2MP', '5MP', '2MK', '5MK', '5HP', '5HK', 'j.HK',
  'DR', 'ODワール', 'SA2',
  'インパクト', 'スタン', 'イウサール', 'その他',
] as const;
export type Starter = (typeof STARTERS)[number];

// コマンドの先頭トークン → 始動技（名前で持つもの）
export const STARTER_BY_TOKEN: Record<string, Starter> = { '236KK': 'ODワール', '214214K': 'SA2', '中大TC': '5MP' };

// コマンドの先頭トークンから始動技とヒット状態を推定する。リストに無ければ starter は null
export function inferStarter(segment: string): { starter: Starter | null; hitState: HitState } {
  const first = (segment.split('>')[0] ?? '').split(' or ')[0].trim();
  const hitState: HitState = first.includes('(CH)') ? 'CH' : first.includes('(PC)') ? 'PC' : '通常';
  const token = first.replace(/\((CH|PC)\)/, '');
  const starter = STARTER_BY_TOKEN[token] ?? (STARTERS.find((s) => s === token) ?? null);
  return { starter, hitState };
}

// ── 一覧の見出し ──
// 大見出しは LIST_SECTIONS。中央・端の下は場面の小見出し（SCENES）で分ける。
// インパクト・スタン・イウサールは位置を問わないので、大見出しだけで小見出しを持たない
const SPECIAL_STARTERS = ['インパクト', 'スタン', 'イウサール'] as const;
export type SpecialStarter = (typeof SPECIAL_STARTERS)[number];
export const LIST_SECTIONS = ['中央', '端', ...SPECIAL_STARTERS] as const;
export const SCENES = ['通常', 'ラッシュ', '飛び', 'カウンター・確反'] as const;
export type ListSection = (typeof LIST_SECTIONS)[number];
export type Scene = (typeof SCENES)[number];

type ListAttrs = { starter: Starter; hitState: HitState; position: Position };

export const isSpecialStarter = (s: string): s is SpecialStarter => (SPECIAL_STARTERS as readonly string[]).includes(s);

// 通常のコンボに「どこでも」が付いていたら中央に入れる（エディタでは選べる）
export function sectionOf({ starter, position }: ListAttrs): ListSection {
  if (isSpecialStarter(starter)) return starter;
  return position === '端' ? '端' : '中央';
}

export function sceneOf({ starter, hitState }: ListAttrs): Scene | null {
  if (isSpecialStarter(starter)) return null;
  if (hitState !== '通常') return 'カウンター・確反';
  if (starter === 'DR') return 'ラッシュ';
  if (starter === 'j.HK') return '飛び';
  return '通常';
}

// 行と見出しを結びつけるキー（中央/通常、インパクト など）
export const bucketKey = (section: ListSection, scene: Scene | null) => (scene ? `${section}/${scene}` : section);
export const bucketOf = (c: ListAttrs) => bucketKey(sectionOf(c), sceneOf(c));

export type BucketPreset = { position: Position; starter?: Starter; hitState?: HitState; priority?: Priority };

// 見出しの「＋」と行間の挿入で開くエディタに、その見出しに入る値を入れておく（行間の挿入は priority も足す）
export function bucketPreset(bucket: string): BucketPreset {
  const [section, scene] = bucket.split('/');
  if (isSpecialStarter(section)) return { position: 'どこでも', starter: section };
  const position = section as Position;
  if (scene === 'ラッシュ') return { position, starter: 'DR' };
  if (scene === '飛び') return { position, starter: 'j.HK' };
  if (scene === 'カウンター・確反') return { position, hitState: 'CH' };
  return { position };
}

// インパクト・スタン・イウサールの行は見出しで位置が分からないので、決まっているものだけ行にタグで出す
export const positionTagOf = (c: ListAttrs) => (isSpecialStarter(c.starter) && c.position !== 'どこでも' ? c.position : null);
