// コンボ一覧（キャラハブ・公開一覧）のフリーテキスト検索。
// 行（tbody.combo-group）と分岐のルートの行（tr.combo-child-row）の data-search に検索用の文字列を載せ、
// 入力を空白で区切った語がどれも入っているルートを探す（絞り込みは src/lib/combo-list-view.ts）。
// tests/scenarios.mjs（Node）から直接読むので、import に拡張子まで書く
import { recipeSteps } from './notation.ts';
import type { Combo, RouteSummary } from '../mock-data/rashid';

// 全角/半角・大文字/小文字・ひらがな/カタカナの違いを無視する（「すぱいく」「２３６ＨＫ」でも当たる）
export function normalizeSearch(s: string): string {
  return s.normalize('NFKC').toLowerCase().replace(/[ぁ-ゖ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) + 0x60));
}

// 入力を検索語に分ける。空なら絞り込まない
export const searchTermsOf = (query: string) => normalizeSearch(query).split(/\s+/).filter(Boolean);

// どの検索語も含むか（部分一致）。text は comboSearchTexts の文字列
export const matchesSearch = (text: string, terms: string[]) => terms.every((t) => text.includes(t));

// ルートで引ける語: コマンド・文字表記の呼び方（弱スパイク。エディタの技名も同じ表）・ルート名・条件・状況タグ。
// 手順は > でつなぐので「2MK>236LP」と続けて打っても当たる。語どうしは空白で区切るので、語をまたいでは当たらない
function routeWords(r: RouteSummary, recipeTable: Record<string, string>) {
  const tokens = r.fullInputs.split('>').map((t) => t.trim()).filter(Boolean);
  return [
    tokens.join('>'),
    recipeSteps(r.fullInputs, recipeTable).join('>'),
    r.leaf.routeLabel,
    r.leaf.condition,
    ...(r.leaf.situationTags ?? []),
  ];
}

/**
 * 一覧の行に載せる検索用の文字列（正規化済み）。
 * group は行（tbody）用でコンボ名・出典と全ルートの語、routes はルートの行用でコンボ名・出典とそのルートの語。
 * recipeTable は movenames.ts の getRecipeTable
 */
export function comboSearchTexts(
  c: Pick<Combo, 'title' | 'sourceType' | 'ownerLabel'>,
  routes: RouteSummary[],
  recipeTable: Record<string, string>,
): { group: string; routes: string[] } {
  // 出典（投稿者）は一覧に出しているものだけ（自分のコンボには出さない）
  const comboWords = [c.title, c.sourceType !== 'personal' ? c.ownerLabel : undefined];
  const text = (words: (string | undefined)[]) => normalizeSearch(words.filter(Boolean).join(' '));
  const perRoute = routes.map((r) => routeWords(r, recipeTable));
  return {
    group: text([...comboWords, ...perRoute.flat()]),
    routes: perRoute.map((words) => text([...comboWords, ...words])),
  };
}
