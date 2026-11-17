// 取り込んだ起き攻めの重複をまとめる（scripts/import-archiver.ts から呼ぶ）。
// 同じ起き攻めを紹介している動画・記事が複数あれば1件にまとめ、残りを alsoIn（ほかの出典）に並べる（2026-11-15 ユーザー判断）。
//
// 同じかどうかは2段で決める。
//   1. 自動: 〆分類・pattern が同じで、コマンドを「経路の集合」にならすと同じもの。
//      ならし方: 「(空)」「(持続当て)」の有無を見ない、or の並びとくくり方を見ない
//      （「5MK > (66 > LPLK) or 6HP」と「5MK(空) > 6HP or (66 > LPLK)」は同じ）
//   2. 手で決めたもの: scripts/okizeme-merge.json の same（まとめる）と distinct（別のまま）。
//      片方がもう片方の途中まで（「5MK(空) > 66」と「5MK(空) > 66 > 2LK」）のような組は、同じ起き攻めの書きかけのことも、
//      続きの違う別の連携のこともあるので自動ではまとめない。どちらとも決めていない組は「候補」として数を出す
//      （node scripts/import-archiver.ts --dups で一覧）。
// 本体は same の main、無ければ一番新しい出典。印（中段・下段・投げ・詐欺）はまとめた全部の分を付ける。

import { readFileSync } from 'node:fs';
import type { OkizemeSetup, OkizemeSource } from '../src/mock-data/rashid.ts';

type MergeFile = {
  same: { main?: string; ids: string[]; why: string }[];
  distinct: { ids: [string, string]; why: string }[];
};

// 一番外の sep で切る（括弧の中は切らない）
function splitTop(s: string, sep: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') depth++;
    else if (c === ')') depth--;
    if (depth === 0 && s.startsWith(sep, i)) { out.push(cur.trim()); cur = ''; i += sep.length - 1; continue; }
    cur += c;
  }
  out.push(cur.trim());
  return out;
}

// 「(66 > LPLK)」のように全体が1つの括弧でくくられているか（「6HP(持続当て)」は技なので違う）
function isWrapped(s: string): boolean {
  if (!s.startsWith('(') || !s.endsWith(')')) return false;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') depth++;
    else if (s[i] === ')') depth--;
    if (depth === 0 && i < s.length - 1) return false;
  }
  return true;
}

// コマンドを、or を開いた経路の一覧にする（「A > B or (C > D)」→ [A,B] と [A,C,D]）
export function okizemePaths(inputs: string): string[][] {
  let acc: string[][] = [[]];
  for (const step of splitTop(inputs, ' > ')) {
    const alts = splitTop(step, ' or ').flatMap((a) => (isWrapped(a) ? okizemePaths(a.slice(1, -1)) : [[a]]));
    acc = acc.flatMap((p) => alts.map((a) => [...p, ...a]));
  }
  return acc.map((p) => p.map((t) => t.replace(/\((空|持続当て)\)$/, '')));
}

const sameKey = (o: OkizemeSetup) =>
  `${o.enderClassId}\t${o.pattern ?? ''}\t${[...new Set(okizemePaths(o.inputs).map((p) => p.join(' > ')))].sort().join(' | ')}`;

// pa のどれかの経路（2手以上）が、pb のどれかの経路の途中まで
const isPrefixOf = (pa: string[][], pb: string[][]) =>
  pa.some((x) => x.length >= 2 && pb.some((y) => y.length > x.length && x.every((t, i) => t === y[i])));

export type DedupeResult = {
  rows: OkizemeSetup[];
  merged: string[];                                  // alsoIn に入れた起き攻めの ID
  candidates: [OkizemeSetup, OkizemeSetup][];        // まだ決めていない「途中まで同じ」の組（[短い方, 長い方]）
};

/** all は新しい出典から順。section は ID → その出典での区分 */
export function dedupeOkizeme(all: OkizemeSetup[], section: Map<string, string>, mergePath: string, errors: string[]): DedupeResult {
  const decisions = JSON.parse(readFileSync(mergePath, 'utf8')) as MergeFile;
  const index = new Map(all.map((o, i) => [o.id, i]));
  const parent = all.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const union = (a: number, b: number) => { parent[find(b)] = find(a); };
  const lookup = (id: string, where: string) => {
    const i = index.get(id);
    if (i === undefined) errors.push(`okizeme-merge.json の ${where}: ${id} が無い（動画の番号が変わった？）`);
    return i;
  };

  // 1. 自動（〆が分からないものはまとめない）
  const byKey = new Map<string, number>();
  all.forEach((o, i) => {
    if (!o.enderClassId) return;
    const k = sameKey(o);
    const j = byKey.get(k);
    if (j === undefined) byKey.set(k, i);
    else union(j, i);
  });

  // 2. 手で決めた same
  const wantMain: number[] = [];
  for (const g of decisions.same) {
    const ids = [...(g.main ? [g.main] : []), ...g.ids];
    const idx = ids.map((id) => lookup(id, 'same'));
    if (idx.some((i) => i === undefined)) continue;
    const first = all[idx[0]!];
    const odd = idx.map((i) => all[i!]).filter((o) => o.enderClassId !== first.enderClassId || (o.pattern ?? '') !== (first.pattern ?? ''));
    if (odd.length) errors.push(`okizeme-merge.json の same: ${odd.map((o) => o.id).join(', ')} は ${first.id} と〆か pattern が違う`);
    for (const i of idx.slice(1)) union(idx[0]!, i!);
    if (g.main) wantMain.push(idx[0]!);
  }
  const mainOf = new Map<number, number>();
  for (const m of wantMain) {
    const r = find(m);
    if (mainOf.has(r) && mainOf.get(r) !== m) errors.push(`okizeme-merge.json の same: ${all[mainOf.get(r)!].id} と ${all[m].id} が同じ組の main になっている`);
    mainOf.set(r, m);
  }

  // 組ごとに本体を決め、残りを alsoIn に（all の順 = 新しい順）
  const members = new Map<number, number[]>();
  all.forEach((_, i) => members.set(find(i), [...(members.get(find(i)) ?? []), i]));
  const mainIdx: number[] = [];
  const merged: string[] = [];
  for (const [root, list] of members) {
    const m = mainOf.get(root) ?? list[0];
    mainIdx.push(m);
    const main = all[m];
    const others = list.filter((i) => i !== m).map((i) => all[i]);
    if (!others.length) continue;
    main.alsoIn = others.map((o): OkizemeSource => ({
      id: o.id,
      section: section.get(o.id) ?? '',
      ...(o.youtubeId ? { youtubeId: o.youtubeId, startSec: o.startSec ?? 0 } : { sourceUrl: o.sourceUrl }),
      ownerLabel: o.ownerLabel,
      sourceTitle: o.sourceTitle,
      notes: o.notes,
    }));
    // 選択肢を1つだけ書いた出典もあるので、印はまとめた全部の分を付ける
    for (const o of others) {
      for (const f of ['mid', 'low', 'throw', 'safeJump'] as const) if (o.flags[f]) main.flags[f] = true;
    }
    merged.push(...others.map((o) => o.id));
  }
  const rows = mainIdx.sort((a, b) => a - b).map((i) => all[i]);

  // 3. まだ決めていない「途中まで同じ」の組
  const distinct = new Set<string>();
  for (const d of decisions.distinct) {
    const [a, b] = d.ids.map((id) => lookup(id, 'distinct'));
    if (a === undefined || b === undefined) continue;
    distinct.add(`${find(a)}|${find(b)}`).add(`${find(b)}|${find(a)}`);
  }
  // まとめた出典のコマンドも含めて比べる（本体は長い書き方でも、短い書き方の出典が別の組と重なることがある）
  const pathsOf = new Map<OkizemeSetup, string[][]>();
  for (const [root, list] of members) pathsOf.set(all[mainOf.get(root) ?? list[0]], list.flatMap((i) => okizemePaths(all[i].inputs)));
  const candidates: [OkizemeSetup, OkizemeSetup][] = [];
  for (const a of rows) for (const b of rows) {
    if (a === b || a.enderClassId !== b.enderClassId || (a.pattern ?? '') !== (b.pattern ?? '')) continue;
    if (distinct.has(`${find(index.get(a.id)!)}|${find(index.get(b.id)!)}`)) continue;
    if (isPrefixOf(pathsOf.get(a)!, pathsOf.get(b)!)) candidates.push([a, b]);
  }
  return { rows, merged, candidates };
}
