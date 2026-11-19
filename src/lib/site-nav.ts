// 全ページ共通のナビ（ヘッダー）の行き先と、今どのタブにいるか・どのキャラを選んでいるかの決め方（2026-11-16 ユーザー要望）。
// - キャラ選択とキャラ対策はいつでも開ける。コンボ・起き攻めは選んだキャラのページへ飛ぶ
// - キャラ対策は全キャラ共通の対策が既定で、キャラを選んでいればそのキャラ固有の対策を足して出す（matchups.ts の visibleMatchups）
// - 選んだキャラは Cookie に持つ（SSR でナビを出し分けるため）。コンボ・起き攻めのページを開くとそのキャラになる
// tests/scenarios.mjs（Node）から直接読むので、値の import をするときは拡張子まで書く
import { characterByEn, characterBySlug, type CharacterInfo } from './characters.ts';

export type NavSection = 'combos' | 'okizeme' | 'vs';

export const NAV_CHARACTER_COOKIE = 'sf6-char';

// データがあるキャラ（モックは Rashid のみ）。ほかのキャラはキャラ選択で「準備中」として出す
const READY_SLUGS = new Set(['rashid']);
export const hasCharacterData = (slug: string) => READY_SLUGS.has(slug);

export const combosUrl = (slug: string) => `/mock/character/${slug}`;
// 起き攻めの一覧は今 Rashid の1ページだけ。キャラごとの URL は未確定（docs/SITEMAP.md）なので、決まったらここだけ直す
export const okizemeUrl = (_slug: string) => '/mock/okizeme/';
export const VS_URL = '/mock/vs/';

export function sectionUrl(section: 'combos' | 'okizeme', slug: string): string {
  return section === 'combos' ? combosUrl(slug) : okizemeUrl(slug);
}

// URL からタブを決める（各ページで指定しなくて済むように）。ダウン状況は起き攻めの入口なので起き攻めに入れる
export function navSectionOf(pathname: string): NavSection | undefined {
  if (/^\/mock\/(character|combo|explore)(\/|$)/.test(pathname)) return 'combos';
  if (/^\/mock\/(okizeme|situation)(\/|$)/.test(pathname)) return 'okizeme';
  if (/^\/mock\/vs(\/|$)/.test(pathname)) return 'vs';
  return undefined;
}

// 選んでいるキャラ。コンボ・起き攻めのページならそのページのキャラ（pageCharacter は Layout の character＝英語名）、
// ほかのページ（キャラ対策など）は Cookie。データの無いキャラは選べないので、どちらも無視する
export function selectedCharacterOf(
  section: NavSection | undefined,
  pageCharacter: string | undefined,
  cookie: string | undefined,
): CharacterInfo | undefined {
  if ((section === 'combos' || section === 'okizeme') && pageCharacter) {
    const c = characterByEn(pageCharacter);
    if (c && hasCharacterData(c.slug)) return c;
  }
  const c = cookie ? characterBySlug(cookie) : undefined;
  return c && hasCharacterData(c.slug) ? c : undefined;
}

// キャラ対策など、ページにキャラの無いページで選んでいるキャラ（Cookie だけで決まる）
export const selectedCharacterFromCookie = (cookie: string | undefined) => selectedCharacterOf(undefined, undefined, cookie);

// キャラ選択の行き先。今いるタブを保つ: コンボ / 起き攻めはそのキャラのページへ、キャラ対策は今のページのまま
// （選んだキャラ固有の対策が足される。Cookie は押したときにスクリプトが書く）。ほかのページからはコンボへ
export function characterPickUrl(section: NavSection | undefined, slug: string, pathname: string): string {
  if (section === 'vs') return pathname;
  return sectionUrl(section === 'okizeme' ? 'okizeme' : 'combos', slug);
}
