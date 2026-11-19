// ── 方向入力: ナンパッド数字 → 矢印記号 ──────────────────────
const NUMPAD_TO_ARROW: Record<string, string> = {
  '1': '↙', '2': '↓', '3': '↘',
  '4': '←', '5': '',   // ニュートラルは省略
  '6': '→', '7': '↖', '8': '↑', '9': '↗',
};

/**
 * コンボ入力文字列の方向数字を矢印に変換する
 * 例: "2MK > 623HP > 214214P" → "↓MK > →↓↘HP > ←↓↙←↓↙P"
 *
 * 対象: ボタン表記（LP/MP/HP/LK/MK/HK/PP/KK/P/K）の直前にある数字列
 */
export function numpadToArrows(input: string): string {
  return input.replace(
    /[1-9]+(?=LP|MP|HP|LK|MK|HK|PP|KK|P|K)/g,
    (digits) => [...digits].map((d) => NUMPAD_TO_ARROW[d] ?? d).join(''),
  );
}

// ── 表記設定（表示: 文字/チップ・方向: 数字/矢印・必殺技: コマンド/技名） ─────────
// localStorage に保存し、コマンドを出す全ページで同じ表記にする（ページへの反映は Layout.astro）
// 方向と必殺技はチップのときの設定。文字表記は動画の字幕の書き方で固定
export type StyleMode = 'text' | 'chip';
export type DirMode = 'numpad' | 'arrows';
export type NameMode = 'command' | 'name';
export type NotationPrefs = { style: StyleMode; dir: DirMode; name: NameMode };

export const NOTATION_STORAGE_KEYS = { style: 'sf6-style', dir: 'sf6-dir', name: 'sf6-name' } as const;

/** 表記を切り替えたら document に流すイベント。ページのチップと各トグルの表示がこれで揃う */
export const NOTATION_CHANGE_EVENT = 'notation:change';

/** 保存済みの表記設定を読む（未設定・想定外の値は 文字 / 数字 / コマンド） */
export function readNotationPrefs(storage: Pick<Storage, 'getItem'>): NotationPrefs {
  return {
    style: storage.getItem(NOTATION_STORAGE_KEYS.style) === 'chip' ? 'chip' : 'text',
    dir: storage.getItem(NOTATION_STORAGE_KEYS.dir) === 'arrows' ? 'arrows' : 'numpad',
    name: storage.getItem(NOTATION_STORAGE_KEYS.name) === 'name' ? 'name' : 'command',
  };
}

// トークンの中のコマンド部分（236LP, j.214KK など）
const MOVE_COMMAND = /(?:j\.)?[1-9]+(?:PP|KK|[LMH][PK]|P|K)/g;

/**
 * コマンド1トークンを表記設定に合わせて変換する
 * 技名モードでは技名テーブルにあるコマンドを技名に置き換える。「236LP or 236MP」「236K(最大溜め)」のように
 * 語が付いたトークンはコマンドの部分だけ置き換える。残ったコマンドは方向だけ変換する
 */
export function formatToken(token: string, prefs: NotationPrefs, moveTable: Record<string, string>): string {
  const named = prefs.name === 'name'
    ? moveTable[token] ?? token.replace(MOVE_COMMAND, (cmd) => moveTable[cmd] ?? cmd)
    : token;
  return prefs.dir === 'arrows' ? numpadToArrows(named) : named;
}

// ── 文字表記 ─────────────────────────────────────────
const recipePatterns = new WeakMap<object, RegExp>();

// 表のコマンドを長いものから拾う正規表現（236K が 236236K の一部に当たらないよう前後も見る）
function recipePattern(table: Record<string, string>): RegExp {
  let pattern = recipePatterns.get(table);
  if (!pattern) {
    const keys = Object.keys(table)
      .sort((a, b) => b.length - a.length)
      .map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    pattern = new RegExp(`(?<![0-9A-Za-z.])(?:${keys.join('|')})(?![0-9A-Za-z])`, 'g');
    recipePatterns.set(table, pattern);
  }
  return pattern;
}

/**
 * コンボの入力を、doskonnbu の動画の字幕と同じ書き方の手順に分ける
 * 例: "2MP > 5LK > 214LK" → ["2中P", "弱K", "弱スパイク"]、"DR > 5LP > 214LP > 4K" → ["ラッシュ弱P", "弱サイクロンストローク"]
 * table は movenames.ts の getRecipeTable。表に無い語はそのまま残す
 */
export function recipeSteps(inputs: string, table: Record<string, string>): string[] {
  const compact = inputs.split('>').map((t) => t.trim()).filter(Boolean).join('>');
  if (!compact) return [];
  const words = compact.replace(recipePattern(table), (cmd) => table[cmd] ?? cmd).replaceAll('(持続当て)', '持続当て');

  const steps: string[] = [];
  for (const step of words.split('>')) {
    const prev = steps.at(-1);
    // ラッシュは次の技と続けて書く（ラッシュ弱P）
    if (prev && (prev === table.DR || prev === table.CR)) steps[steps.length - 1] = prev + step;
    else steps.push(step);
  }
  return steps;
}

/**
 * チップ表記の1トークン分のクラス（Notation.astro と、キャラハブで保存して足す行で共通）。
 * DR / DI / CA / OD / (CH) は特別チップ（黒背景）。それ以外は末尾のボタンで強度の色
 * （LP/LK=l, MP/MK=m, HP/HK=h, PP/KK=od。SA のように K/P だけで終わるものは色なし）
 */
export function chipClassOf(tok: string, ghost = false): string {
  const cls = ['cmd-chip'];
  if (ghost) cls.push('cmd-ghost');
  if (/^(DR|DI|CA|OD)\b/i.test(tok) || /\(CH\)$/i.test(tok)) cls.push('cmd-chip-special');
  else if (/(PP|KK)$/.test(tok)) cls.push('cmd-chip-od');
  else if (/(LP|LK)$/.test(tok)) cls.push('cmd-chip-l');
  else if (/(MP|MK)$/.test(tok)) cls.push('cmd-chip-m');
  else if (/(HP|HK)$/.test(tok)) cls.push('cmd-chip-h');
  return cls.join(' ');
}
