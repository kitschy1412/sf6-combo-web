// ルートの並び ↔ 分岐ツリー（ComboNode）の相互変換。
// エディタは「ルートを1本ずつ書く」入力にして、保存時にツリーへまとめる（ROADMAP「決まったこと（2026-10-23）」）。
// tests/scenarios.mjs（Node）から直接読むので、値の import をするときは拡張子まで書く
import { parseTokens } from './gauges.ts';
import type { ComboNode } from '../mock-data/rashid';

// 葉に載せる内容（ルート名・ダメージ・〆分類・タグ・メモ・投票など）。segment と children 以外ぜんぶ
export type RouteLeaf = Omit<ComboNode, 'segment' | 'children'>;

// ルート1本: 始動から〆までのフルコマンドと、葉の内容
export type ComboRoute = { inputs: string; leaf: RouteLeaf };

const SEP = ' > ';
const joinTokens = (tokens: string[]) => tokens.join(SEP);

function leafOf(node: ComboNode): RouteLeaf {
  const { segment: _segment, children: _children, ...leaf } = node;
  return leaf;
}

// ツリー → ルートの並び（getComboRoutes 相当。順番はツリーの左から）。
// 空の segment（あるルートが別のルートの途中で終わるときの葉）は結合で飛ばす
export function treeToRoutes(root: ComboNode): ComboRoute[] {
  const walk = (node: ComboNode, path: string[]): ComboRoute[] => {
    const here = node.segment.trim() ? [...path, node.segment] : path;
    if (!node.children || node.children.length === 0) {
      return [{ inputs: joinTokens(here.flatMap(parseTokens)), leaf: leafOf(node) }];
    }
    return node.children.flatMap((c) => walk(c, here));
  };
  return walk(root, []);
}

type Draft = { tokens: string[]; leaf: RouteLeaf };

function commonPrefixLength(drafts: Draft[]): number {
  const [first, ...rest] = drafts;
  let n = 0;
  while (n < first.tokens.length && rest.every((d) => d.tokens[n] === first.tokens[n])) n++;
  return n;
}

// ルートの並び → ツリー。フルコマンドを先頭からトークン（'>' 区切り）単位で比べ、
// 共通部分を親ノードにまとめる。子の順番は、その枝のルートが最初に出てくる順。
// - ルートが1本なら、ルートそのものが葉（id は葉の id）。データの1本道コンボと同じ形
// - 根の id は rootId、途中の分岐点は `${rootId}_1_2` のように子の位置から振る
// - segment はトークンを ' > ' でつなぎ直すので、'214LP>4K' のような詰めた書き方は '214LP > 4K' になる
// - 同じコマンドのルート（ヒット時 / ガード時のように条件だけ違う。c_031）はまとめず、同じ segment の葉を兄弟に並べる
// - あるルートが別のルートの途中で終わる（「2MK > 236LP」と「2MK > 236LP > 214LK」）ときは、短い方を segment が空の葉にする。
//   ツリーとしては表せるが、一覧では親と同じコマンドの行になるので、エディタは findPrefixRoutes で警告を出す
export function routesToTree(routes: ComboRoute[], rootId: string): ComboNode {
  const sameTokens = (a: Draft, b: Draft) => a.tokens.length === b.tokens.length && a.tokens.every((t, k) => t === b.tokens[k]);
  const build = (drafts: Draft[], id: string): ComboNode => {
    if (drafts.length === 1) {
      return { ...drafts[0].leaf, segment: joinTokens(drafts[0].tokens) };
    }
    // 全部同じコマンドになるのは根だけ（途中では下の「同じコマンドの組」で葉に分ける）。根の segment を空にして葉を並べる
    const n = drafts.every((d) => sameTokens(d, drafts[0])) ? 0 : commonPrefixLength(drafts);
    const rests = drafts.map((d) => ({ tokens: d.tokens.slice(n), leaf: d.leaf }));
    const byToken = new Map<string, Draft[]>();
    for (const r of rests) {
      const next = r.tokens[0];
      if (next !== undefined) byToken.set(next, [...(byToken.get(next) ?? []), r]);
    }
    // 子はルートの順に、その枝が最初に出てきたところへ置く。ここで終わるルートと、同じコマンドの組の各ルートは単独の葉
    const children: ComboNode[] = [];
    const placed = new Set<Draft[]>();
    for (const r of rests) {
      const g = r.tokens[0] === undefined ? undefined : byToken.get(r.tokens[0]);
      if (!g || g.every((d) => sameTokens(d, g[0]))) { children.push({ ...r.leaf, segment: joinTokens(r.tokens) }); continue; }
      if (placed.has(g)) continue;
      placed.add(g);
      children.push(build(g, `${id}_${children.length + 1}`));
    }
    return { id, segment: joinTokens(drafts[0].tokens.slice(0, n)), children };
  };
  if (routes.length === 0) return { id: rootId, segment: '' };
  return build(routes.map((r) => ({ tokens: parseTokens(r.inputs), leaf: r.leaf })), rootId);
}

// 別のルートの途中で終わるルートの組。short のコマンドが long の先頭と一致する（添字は routes の位置）。
// 同じコマンド同士は条件違いのルートとして認めるので含めない
export function findPrefixRoutes(routes: ComboRoute[]): { short: number; long: number }[] {
  const tokens = routes.map((r) => parseTokens(r.inputs));
  const pairs: { short: number; long: number }[] = [];
  tokens.forEach((s, i) => tokens.forEach((l, j) => {
    if (s.length < l.length && s.every((t, k) => t === l[k])) pairs.push({ short: i, long: j });
  }));
  return pairs;
}
