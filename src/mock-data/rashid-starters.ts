// 始動技・ヒット状態・位置の値（Rashid）
// scripts/import-archiver.ts からも読むので、このファイルは他のファイルを import しない。

export type HitState = '通常' | 'CH' | 'PC';
export type Position = '中央' | '端' | 'どこでも';

export const HIT_STATES: HitState[] = ['通常', 'CH', 'PC'];
export const POSITIONS: Position[] = ['中央', '端', 'どこでも'];

// 一覧の見出しの並び順。小技 → 中技 → 大技 → ジャンプ → DR → 必殺技・SA → 技でない始動
// 技はコマンド、必殺技・SA と技でない始動は名前で持つ
export const STARTERS = [
  '5LP', '5LK', '2LK', '2MP', '5MP', '2MK', '5MK', '5HP', '5HK', 'j.HK',
  'DR', 'ODワール', 'SA2',
  'インパクト', 'スタン', 'イウサール', 'その他',
] as const;
export type Starter = (typeof STARTERS)[number];

// コマンドの先頭トークン → 始動技（名前で持つもの）
const STARTER_BY_TOKEN: Record<string, Starter> = { '236KK': 'ODワール', '214214K': 'SA2' };

// コマンドの先頭トークンから始動技とヒット状態を推定する。リストに無ければ starter は null
export function inferStarter(segment: string): { starter: Starter | null; hitState: HitState } {
  const first = (segment.split('>')[0] ?? '').split(' or ')[0].trim();
  const hitState: HitState = first.includes('(CH)') ? 'CH' : first.includes('(PC)') ? 'PC' : '通常';
  const token = first.replace(/\((CH|PC)\)/, '');
  const starter = STARTER_BY_TOKEN[token] ?? (STARTERS.find((s) => s === token) ?? null);
  return { starter, hitState };
}
