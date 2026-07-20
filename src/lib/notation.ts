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
