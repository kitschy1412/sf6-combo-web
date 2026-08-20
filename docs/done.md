# Done — 完了タスク履歴

[backlog.md](./backlog.md) で完了したタスクをここに移す。新しいものを上に追記。
コードの変更内容は git log が正本なので、ここには **何を・いつ・なぜ** を一行で残す程度でよい。

## 書き方

```
## YYYY-MM-DD

- 元タスクのタイトル
  - 成果メモ（実装ファイル、判断のポイントなど。git log で追える内容は省略）
```

---

<!-- 完了タスクをここから追記していく -->

## 2026-08-20

- シナリオテストの導入と、そこで見つかった不整合の修正
  - `tests/scenarios.mjs` を追加（`npm run test:scenarios`）。依存ゼロの Node スクリプトで、dev サーバに対して S1〜S8 の動線（公開閲覧 / Wiki型キャラページ / コンボ詳細 / マイノート / 起き攻め / 管理 / 投票APIのバリデーション / src/lib のロジック）を検証する。`/api/vote` は 400 になる不正リクエストのみ送り、DB へは書き込まない
  - `mock/character/[name].astro`: モックデータは Rashid のみなので、未知のキャラ名は 200 で Rashid の中身を返すのをやめて `/mock/` へリダイレクト（他のモック詳細ページと同じ挙動に統一）
  - `mock/combo/[id].astro`: `▶ YouTube` が `href="#"` のダミーだったのを実URLに変更し、`youtubeId` を持つコンボには開始秒つきの埋め込み iframe を追加（URL仕様は DATA.md 準拠）
  - SSR（`output: 'server'`）では無視される `getStaticPaths` を `mock/combo/[id]` `mock/situation/[id]` `mock/me/notes/combos/[id]` `mock/me/notes/okizeme/[id]` の4ページから削除。ビルド時の router 警告が解消（併せて未使用になった import も削除）

## 2026-07-20

- コンボ単位の削除UIをモックに追加
  - `character/[name].astro`: 各コンボ行アクション列に `.btn-delete` を追加。confirm 後に対象 `tbody.combo-group` を除去し `updateDropZones()`/`applyFilters()` で再同期。削除対象が編集中の場合は `closeEditor()` で編集状態も解除
  - `combo/[id].astro`: 詳細ページ単体では対象行を持たないため、confirm 後に一覧ページへ `location.href` でリダイレクト（モック挙動）

- 小分類・大分類の削除UIをモックに追加
  - `character/[name].astro`: 小分類ヘッダに `.btn-minor-delete`、大分類ヘッダに `.btn-major-delete` を追加
  - 配下に実コンボが1件でも残っていれば alert で保護し削除不可。空の場合のみ confirm 後に該当ヘッダ（＋大分類は配下の全小分類ヘッダ）とドロップゾーンを除去
  - 動的に追加された小分類（`createSectionHead`）にも同じ削除ボタン・ハンドラを付与

- 新規コンボ「保存」でモック上に行を挿入する
  - `ComboEditor.astro`: 保存先ラジオに `#dest-personal`/`#dest-upload` の id を追加。submit 時、アップロード選択時は従来通り dup-modal、「自分のメモとして保存」選択時は `collectLeaves()`（新規ヘルパ、ツリーの全葉を収集）でダメージ最大の葉を代表ルートとして選び、`combo-editor:save` カスタムイベント（tree のディープコピーを含む）を発火
  - `character/[name].astro`: `.btn-upload`/`.btn-edit`/`.btn-delete` のハンドラを再利用可能な関数に切り出し、新規行にも同じハンドラを付け直す `bindRowActions()` を追加。`combo-editor:save` を受け取り `COMBOS` 配列へ push（実行中のみ有効、リロードで消える）した上で `buildNewComboRow()` でエディタの挿入位置に行を生成・挿入し、エディタを閉じて `updateDropZones()`/`applyFilters()` で再同期
  - 判断: 分岐ツリーで保存した場合も、行表示は「ダメージ最大の葉」を代表ルートとする簡易表示に留めた（分岐UIをテーブル行として動的複製するのは過剰と判断）。編集時は保存した完全なツリーが復元されるため情報は失われない

- Combo 型に並び順（sortOrder）フィールドを追加
  - `src/mock-data/rashid.ts`: `Combo.sortOrder?: number` を追加（同一 categoryMajor/categoryMinor 内の相対順、未設定は末尾扱い）
  - `docs/DATA.md`: 「並び順（sortOrder）」節を新設。`combos.sort_order` カラム追加案と、D&D drop 確定時に小分類内を再採番する永続化方針を明記

- コンボ編集フローをモックに実装（ComboEditor を編集対応に一般化）
  - `ComboEditor.astro`: Props に `initialTree?: ComboNode` / `comboId?: string` を追加。`tree` を default 工場化（`makeDefaultTree`）し、`INITIAL_TREE` があれば `normalizeDataNode`（データ形状 ComboNode → エディタ形状。gauge/driveGauge は葉メタ描画時に自動再計算されるため落とす）で初期化
  - 共有インラインエディタ用に `window.comboEditorAPI.{loadCombo, reset}` を公開。既存コンボのツリー・葉メタ・タイトル/分類/始動種別を実データで埋める
  - `character/[name].astro`: 各コンボ行アクション列に「編集」ボタン（`.btn-edit`）を追加し `comboEditorAPI.loadCombo` へ接続。新規追加系導線は `reset()` で初期化。`?edit=<id>` クエリで対象を自動オープン
  - `combo/[id].astro`: 死にボタンだった「編集」を `/mock/character/rashid?edit=<id>` リンクへ接続

- `/mock/character/[name]` を「自分用ページ」として再定義
  - `src/pages/mock/character/[name].astro` に `.personal-page-notice` バナー（info-bg/info-fg）を追加
  - 非公開コンボ行に「アップロード」ボタンを追加（最終列、クリックで visibility を 🌐 公開バッジに切替・UIのみ）
  - 既存の追加・編集・D&D はそのまま維持

- `/mock/explore/[character]` を新設（世界全体の公開コンボ一覧・読み取り専用）
  - `src/pages/mock/explore/[character].astro` を新規作成
  - private コンボを除外し、public/unlisted のみ表示（`visibility !== 'private'` フィルタ）
  - 追加・編集・D&D（SortableJS）・インラインエディタをすべて除去
  - 並び順トグル（投票スコア順 / ダメージ降順 / 新着順）をフィルタバーに追加。sortMeta を frontmatter でサーバー側計算 → data 属性として埋め込み、クライアント側で tbody を DOM 並び替え
  - 「⑂ fork」ボタンを各コンボ行のタイトルセルにホバー表示（モック: alert）
  - 最終列にウィルソンスコアバッジを表示（分岐コンボはルート別スコアも表示）
  - `src/pages/mock/index.astro` の全画面リストに追加

## 2026-05-25

- ユーザー過去ノート（ラシード）をモックデータに取り込み
  - `src/mock-data/rashid.ts` の `COMBOS` に c_010〜c_100 を追加（中央/端/中足ラッシュ/飛び/ラッシュ中下段/CH/インパクト後/投げシケ狩り/大サイクロン攻め/仕掛け）
  - 不足していた〆分類（中イーグル/SA3イウサール/SA1）を `ENDER_CLASSES` に追加
  - ダメージ値は手書きノートに記載があったぶんのみ転記、それ以外は undefined
  - 表記は既存パレットのトークン体系（5LP/2MP/214LK/236PP/CR/DR）に統一

## 2026-05-23

- UI規約を `docs/UI.md` に整備する
  - 旧暗テーマ(zinc/amber)の内容を現行のライトテーマ・CSS変数ベースに全面刷新
  - デザイントークン一覧（CSS変数表）、タイポグラフィ表、グローバルCSSクラス一覧（レイアウト・カード・テーブル・ボタン・タグ・フォーム等）を追記
  - visibility/sourceType バッジ規約、コンボテーブルのDOM構造、レイアウト構造を追記
  - 既存の「コマンド入力UI採用案」「自動計算フィールド」セクションを保持・整合

- ノートのスキーマ案を `docs/DATA.md` に追記
  - `notes` / `note_combo_items` / `note_okizeme_items` の3テーブル構成
  - 異種混在禁止は方式A（テーブル分割）で構造的に保証。トリガー不要
  - `notes.kind` でアプリ側が操作テーブルを切り替えるルールを明記

## 2026-05-23

- サイトマップ確定版を `docs/SITEMAP.md` に明文化
  - 現状 Phase 0 の 4 URL と、Phase 3 目標の全 URL を一覧化
  - visibility（public/unlisted/private）による出し分けルールを表形式で整理
  - モックページと正式 URL の対応表を追記

## 2026-05-23

- visibility（private/unlisted/public）のバッジ表示をモックに追加
  - `src/mock-data/rashid.ts` に `Visibility` 型と `visibility` フィールドを追加。各コンボにモック値を設定（c_001: private、c_004: unlisted、shared 系: public）
  - `src/styles/global.css` に `.tag-private` / `.tag-unlisted` / `.tag-public` を追加
  - コンボ詳細（`combo/[id].astro`）: カテゴリ/sourceType バッジ列に visibility バッジを追加。shared は冗長なので公開バッジを非表示
  - コンボ一覧（`character/[name].astro`）: 投稿者列に private/unlisted のアイコンバッジ（🔒/🔗）を追加



- ノート機能のモック画面を追加
  - `src/mock-data/notes.ts`（ComboNote / OkizemeNote 型、NOTES モックデータ）
  - `src/pages/mock/me/notes/index.astro`（一覧: visibility バッジ、コンボ/起き攻め別セクション）
  - `src/pages/mock/me/notes/combos/[id].astro`・`okizeme/[id].astro`（詳細: ↑↓並び替え、✕除去、JS inline）
  - 案B（種類ごとに別ノート、異種混在なし）で実装。`/mock/index.astro` に画面リンクを追加

- コンボ一覧の各行に「起き攻め」展開トグルを追加（モック）
  - `src/pages/mock/character/[name].astro` の〆分類列に `◇N` トグルボタンを追加
  - クリックで `okizeme-panel-row` をインライン展開。分岐ツリー折り畳み時はパネルも閉じる
  - `ec_strong_eagle` / `ec_arabian` 等、起き攻めデータが未登録の〆分類にはボタン非表示

- ルート個別の「〆分類オーバーライド」設計を docs/DATA.md に追記
  - `ComboNode` に `frameAdvantageOverride` / `excludedOkizemeIds` を追加する案を文書化
  - null/undefined の区別、除外リスト方式（許可リストより運用コスト低い）の理由を記載

- 〆分類のマスタ設計を docs/DATA.md に追記
  - モック現状（EnderClass マスタ＋FK）を前提として確認し、方式A/B/C を比較
  - 方式B（マスタテーブル）を維持。起き攻めリンクが崩れるため他方式は不採用
  - frame_advantage_override はルートオーバーライドタスクで別途対応

- コンボ分岐ツリーの DB 表現案を docs/DATA.md に追記
  - 候補A（combo_nodes + parent_id）/ B（JSONB）/ C（combo_branches 平坦化）を比較表で整理
  - 暫定方針: 正規化のため A を基本方針、archiver 実装が先行する間は B で仮実装して後で移行

## 2026-05-23

- 入力UI A/B/C の採用案を決めて docs/UI.md に記録
  - C（ハイブリッド: テキスト入力 + パレットボタン）を正式採用。現在の ComboEditor.astro がこれ
  - A（チップ式）: 入力速度が遅い、B（フリーテキスト）: 初心者敷居が高い、として不採用理由を記載

## 2026-05-23

- コンボ詳細ページに大分類・小分類のバッジ表示
  - src/pages/mock/combo/[id].astro の page-head メタ行に追加。背景 #e8f0fe / 文字 #1a56db のタグ2個

- モックトップに Phase 2 への TODO セクションを追加
  - src/pages/mock/index.astro に「未決の論点」「次のステップ」2カラムのセクションを追加

- コンボ一覧で分岐のあるコンボを折り畳めるようにする
  - src/pages/mock/character/[name].astro の combo-child-row を `display:none` で初期非表示
  - ▶トグルボタン (.branch-toggle) クリックで展開/折り畳み。`data-branch-of` 属性で親子を紐付け

- コンボ一覧を大分類・小分類ごとにグループ表示
  - 同ファイル。comboGroups でグループ化し `<tbody class="combo-section-head">` を挿入
  - フィルタ適用時にグループヘッダも連動して表示/非表示

- 起き攻めページ（okizeme/new）に SA / D ゲージ自動計算を適用
  - src/lib/gauges.ts を新規作成（calcGaugesFromSegs, parseTokens）
  - src/pages/mock/okizeme/new.astro の「重ね技」入力に自動計算フィールドを追加

- docs/UI.md に「自動計算フィールド」のスタイル規約を追記
  - 「自動」バッジ・readonly ボックスの HTML/スタイルパターンを記載

- docs/ROADMAP.md の Phase 表記を実態に合わせて更新
  - Phase 1「これまで」に今回追加した機能を列挙、Phase 2 に「進行中: 仕様詰め」を付記

- コンボ一覧ページに大分類・小分類フィルタを追加
  - src/pages/mock/character/[name].astro に `<select>` 2つを追加（既存の状況タグchipの右）
  - 大分類を選ぶと小分類候補が `option[hidden]` で連動絞り込み
  - source / 大分類 / 小分類 を AND 結合する applyFilters() に統一
