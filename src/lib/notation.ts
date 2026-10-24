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

// ── 表記設定（方向: 数字/矢印・必殺技: コマンド/技名） ─────────
// localStorage に保存し、コマンドを出す全ページで同じ表記にする（ページへの反映は Layout.astro）
export type DirMode = 'numpad' | 'arrows';
export type NameMode = 'command' | 'name';
export type NotationPrefs = { dir: DirMode; name: NameMode };

export const NOTATION_STORAGE_KEYS = { dir: 'sf6-dir', name: 'sf6-name' } as const;

/** 表記を切り替えたら document に流すイベント。ページのチップと各トグルの表示がこれで揃う */
export const NOTATION_CHANGE_EVENT = 'notation:change';

/** 保存済みの表記設定を読む（未設定・想定外の値は 数字 / コマンド） */
export function readNotationPrefs(storage: Pick<Storage, 'getItem'>): NotationPrefs {
  return {
    dir: storage.getItem(NOTATION_STORAGE_KEYS.dir) === 'arrows' ? 'arrows' : 'numpad',
    name: storage.getItem(NOTATION_STORAGE_KEYS.name) === 'name' ? 'name' : 'command',
  };
}

/**
 * コマンド1トークンを表記設定に合わせて変換する
 * 技名モードで技名テーブルにあるトークンは技名に（方向の変換はしない）、それ以外は方向だけ変換する
 */
export function formatToken(token: string, prefs: NotationPrefs, moveTable: Record<string, string>): string {
  const moveName = prefs.name === 'name' ? moveTable[token] : undefined;
  if (moveName) return moveName;
  return prefs.dir === 'arrows' ? numpadToArrows(token) : token;
}
