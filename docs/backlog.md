# Backlog

実装可能な単位のタスクリスト。`/sy-next-task` は上から順に拾って実装する。
全体方針・Phase 区切りは [ROADMAP.md](./ROADMAP.md) を参照。

## 書き方

- `## 見出し` で大きなグループ分け
- `- [ ] タイトル` でタスク
- インデントしてメモ・参考ファイル・受け入れ条件などを補足

例:
```
- [ ] コンボ詳細ページにダメージ推移グラフを表示
  - 対象: src/pages/mock/combo/[id].astro
  - 各ルートの damage を棒グラフで比較
  - グラフはCSSのみ（外部ライブラリ禁止）
```

注意: ここに書くのは「**今すぐ着手できる粒度**」のタスク。
「Phase 2 のスキーマ全体を決める」みたいな企画文は ROADMAP.md 側に書く。

## 完了タスクの扱い

タスクが完了したら **このファイルからは削除し、[done.md](./done.md) の先頭に移す**。
`- [x]` で残さない理由は、`/sy-next-task` がスキャンする対象を未着手タスクだけに保ち、
ファイル肥大化を防ぐため。done.md には完了日と簡単な成果メモを添える。

**注意: セクション見出し（`## モック / UI` など）は、配下のタスクが全部消えても残す。**
カテゴリ自体は次に同種のタスクが来たときの受け皿として保持する。

---

## モック / UI

当面は Rashid 限定（ROADMAP「当面の方針（2026-10-21）」参照）。

- [ ] コンボ一覧の状況チップ（画面端 / 画面中央 / DR始動 / 確反）を実際に絞り込みとして動かす
  - 対象: src/pages/mock/character/[name].astro（チップは現在見た目だけでハンドラが無い）、src/pages/mock/explore/[character].astro にも同じ絞り込みを置く
  - 葉ノードの situationTags で判定。分岐ツリーは「どれか1つの葉が該当すれば親を表示」
  - 既存の大分類・小分類 `<select>` と AND 結合
  - 受け入れ: チップ ON/OFF で行が絞られ、件数表示も追従する

- [ ] コンボ一覧にフリーテキスト検索を追加
  - 対象: src/pages/mock/character/[name].astro、src/pages/mock/explore/[character].astro
  - タイトル・コマンド（segment）・技名（TOKEN_TO_NAME で変換した名前）を部分一致で検索
  - 例: 「スパイク」「236HK」「ミキサー」でヒットする
  - 受け入れ: チップ・`<select>` と AND で併用でき、入力のたびに即時絞り込みされる

- [ ] ComboEditor の YouTube URL 欄で動画IDと開始秒を自動抽出する
  - 対象: src/components/ComboEditor.astro（現在は placeholder だけの素の input）
  - `youtu.be/ID?t=83` / `watch?v=ID&t=1m23s` / `&t=83s` / 秒数なし の各形式に対応
  - 抽出結果（ID と mm:ss）を欄の下にプレビュー表示、開始秒は手で微調整できる
  - URL 解析ロジックは src/lib/ に置く（archiver 取り込みでも使い回す）

- [ ] コンボ詳細の動画を「該当シーンからリピート」できるようにする（練習用）
  - 対象: src/pages/mock/combo/[id].astro
  - 埋め込みURLに `start` に加え `end`（開始+N秒、既定10秒）と `loop` を付けるトグル
  - 分岐コンボはルートごとにタイムスタンプが違いうるので、ルート選択で再生位置を切り替えられると良い（葉ノードに startSec を持たせるかは要検討）

## データ / ロジック

- [ ] Supabase の接続先を復旧する（`.env` の PUBLIC_SUPABASE_URL が名前解決できない）
  - 現状: `yxzdpworzhhkgxsfoxjn.supabase.co` が DNS で NXDOMAIN。プロジェクト削除もしくは URL が古い
  - 影響: Phase 0 の `/`・`/[character]`・`/combo/[id]` が「0件」表示になる（500 にはならず空で描画される）
  - 受け入れ: `npm run test:scenarios` の S1 が skip されず、キャラ一覧→コンボ詳細まで通ること

- [ ] 小分類リネーム時のデータ乖離を解消する設計を DATA.md に確定
  - 対象: docs/DATA.md
  - 現状: 分類は各コンボの自由文字列（categoryMajor/Minor）。小分類リネームは DOM の data-minor を書き換えるだけで元データと乖離し、空の小分類は実体を持てない。DATA.md の方式B（マスタテーブル）とモックがズレている
  - 分類をマスタテーブル化するか、コンボ属性のまま一括更新にするかを決めて DATA.md に記録
  - 受け入れ: リネーム・空分類・削除がデータ上どう表現されるか DATA.md に明記される

## Phase 2 準備（仕様詰め）

ここに並ぶタスクは「議論をドキュメントに落とす」系。実装ではなく `docs/` 配下を更新する。

## ドキュメント

