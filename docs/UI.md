# UI規約

## スタイリング方針
- グローバルCSSクラスは `src/styles/global.css` で定義。Tailwindユーティリティより優先して使う
- Tailwindはグローバルクラスで賄えないレイアウト（`display:flex; gap:...`）には使用可
- インラインstyleは許容（ページ固有のone-off調整）
- キャラページ等の複雑な要素はページ内 `<style>` スコープに書く
- `src/layouts/Layout.astro` を全ページで使う

---

## デザイントークン（CSS変数）

`src/styles/global.css` の `:root` で定義。ライトテーマ固定。

| 変数 | 値 | 用途 |
|---|---|---|
| `--bg` | `#ffffff` | ページ背景 |
| `--surface` | `#fafafa` | カード・テーブルヘッダ等の1段目サーフェス |
| `--surface2` | `#f5f5f5` | 2段目サーフェス（小分類ヘッダ等） |
| `--surface3` | `#ececec` | 3段目（タグ背景等） |
| `--border` | `#ececec` | 標準ボーダー |
| `--border-strong` | `#d4d4d4` | 強調ボーダー・入力フォーム枠 |
| `--text` | `#111111` | 主テキスト |
| `--text-soft` | `#333333` | やや薄めテキスト |
| `--muted` | `#777777` | 補足テキスト・ラベル |
| `--muted-strong` | `#555555` | 補足テキスト（やや濃い） |
| `--accent` | `#111111` | アクセント（主ボタン背景等） |
| `--accent-soft` | `rgba(17,17,17,0.06)` | アクセントの薄い背景 |
| `--warn-bg` | `#fde6e6` | 警告背景 |
| `--warn-fg` | `#b32c2c` | 警告テキスト |
| `--warn-border` | `#f4caca` | 警告ボーダー |
| `--info-bg` | `#e6f0fd` | 情報背景（自分のメモバッジ等） |
| `--info-fg` | `#1d4ed8` | 情報テキスト |
| `--good-bg` | `#e6f4ea` | 成功背景 |
| `--good-fg` | `#137333` | 成功テキスト |

---

## タイポグラフィ

| 用途 | フォント | 設定 |
|---|---|---|
| **本文** | Meiryo UI → Meiryo → system-ui | `body` に自動適用 |
| **見出し h1/h2/h3** | 同上（`font-display`） | `letter-spacing:0` |
| **コマンド表示** | JetBrains Mono | Google Fonts 経由。`.notation` / `.cmd-chip` / `.dmg` に自動適用 |

フォントサイズの目安：

| 用途 | サイズ |
|---|---|
| ページタイトル h1 | `1.05rem`〜`1.5rem`（用途による） |
| セクション h2 | `1.1rem` |
| カード内 h3 | `1rem` |
| 本文 | `0.88rem`〜`0.92rem` |
| ラベル・補足 | `0.72rem`〜`0.78rem` |
| 極小（タグ内等） | `0.65rem`〜`0.7rem` |

---

## グローバルCSSクラス一覧

`src/styles/global.css` で定義されている再利用クラス。

### レイアウト系

| クラス | 概要 |
|---|---|
| `.page-head` | ページ上部の黒スラブ見出し。`background:#111; color:#fff` 。`border-radius:6px 6px 0 0` でfilter-barと連結するのが標準パターン |
| `.section-head` | ページ内セクションのh2+アクション行。下に`border-bottom: 2px solid #111` |
| `.filter-bar` | フィルタエリア。`background:var(--surface); border-radius:0 0 6px 6px` でpage-headと連結するのが標準パターン |
| `.breadcrumb` | パンくずナビ。`a.sep` でスラッシュ区切り |

### カード

| クラス | 概要 |
|---|---|
| `.card` | 白背景・1pxボーダー・radius 6px |
| `.card-emph` | cardに加えて上ボーダー3px黒（強調カード。分岐ルート詳細等） |

### テーブル

| クラス | 概要 |
|---|---|
| `.data-table` | 標準データテーブル。`th` は大文字・小さめ・グレー。`td` はhover背景あり |
| `.col-num` | 数値列（右寄せ・tabular-nums・太字） |
| `.col-title` | タイトル列（太字・リンク色inherit） |
| `.row-link` | テーブル行リンク（`display:block; color:inherit; text-decoration:none`） |

### ボタン

| クラス | 概要 |
|---|---|
| `.btn` | 標準ボタン。白背景・グレーボーダー |
| `.btn-primary` | 黒背景・白文字 |
| `.btn-ghost` | 背景なし・ボーダーなし |
| `.btn-warn` | 赤系テキスト・ボーダー（削除等の危険操作） |
| `.btn-sm` | `.btn` の小サイズ variant（`0.76rem / padding 4px 10px`） |

### タグ・バッジ

| クラス | 概要 |
|---|---|
| `.tag` | 基本タグ。`background:var(--surface3); color:var(--muted-strong)` |
| `.tag-warn` | 赤系（警告・不可票等） |
| `.tag-personal` | 青系（自分のメモ） |
| `.tag-shared` | 黄系（共有コンテンツ） |
| `.tag-good` | 緑系（正常・成功） |
| `.tag-private` | 黒背景（🔒 非公開） |
| `.tag-unlisted` | グレー（🔗 限定公開） |
| `.tag-public` | 薄緑（🌐 公開） |

### フィルタ・チップ

| クラス | 概要 |
|---|---|
| `.chip` | フィルタ選択用チップ。非選択状態 |
| `.chip-on` | 選択中（黒背景・白文字） |

### フォーム入力

| クラス | 概要 |
|---|---|
| `.input` | テキスト入力（`width:100%`） |
| `.select` | セレクトボックス |
| `.textarea` | テキストエリア（`resize:vertical`） |
| `.field-label` | フォームラベル（小さめ・太字） |
| `.field-help` | フォームヘルプテキスト（ミュート） |

### 表記系

| クラス | 概要 |
|---|---|
| `.notation` | コマンド表示コンテナ。`display:inline-flex; flex-wrap:wrap; gap:6px` |
| `.notation-sm` | `.notation` の小サイズ（テーブル内等） |
| `.cmd-chip` | コマンドトークンの小箱（白背景・グレーボーダー） |
| `.cmd-chip-special` | 特殊技（黒背景・白文字） |
| `.cmd-sep` | `>` などのセパレータ文字 |
| `.dmg` | ダメージ値表示（JetBrains Mono・tabular-nums・太字） |
| `.section-label` | セクション上部の小ラベル（大文字・グレー） |

### 投票

| クラス | 概要 |
|---|---|
| `.vote-bar` | 投票ボタンエリア（薄グレー背景） |
| `.vote-label` | 投票エリアのラベル |

### 表記切替トグル

| クラス | 概要 |
|---|---|
| `.ntoggle-label` | トグルのラベル |
| `.ntoggle-btn` | トグルボタン（非選択） |
| `.ntoggle-btn.ntoggle-active` | 選択中（黒背景） |

表記の設定（方向: 数字/矢印・必殺技: コマンド/技名）は全ページで共有する（2026-10-24）。

- 設定は localStorage（`sf6-dir` / `sf6-name`）に保存。読み込みと1トークンの変換は `src/lib/notation.ts`（`readNotationPrefs` / `formatToken`）
- ページへの反映は `Layout.astro` のスクリプトが行う（`.cmd-chip[data-token]` と Phase 0 の `.notation[data-original]`）。トグルの無いページでも保存済みの表記で出る
- 技名は Layout の `character`（`<body data-character>`）のキャラの表（`src/lib/movenames.ts`）で引く。**コマンドを出すページでは Layout に `character` を渡す**（モックは `"Rashid"`）
- トグル（`NotationToggle.astro` と ComboEditor 内のトグル）は、保存して `notation:change` を流すだけ。ページのチップ・各トグル・エディタがそれを受けて表示を合わせる（別タブでの切り替えも storage イベントで追従）
- 一覧のトグルは `data-group`、エディタ内は `data-editor-toggle` で区別する（同じ `.ntoggle-btn` でも互いのハンドラを付けない）
- 置き場所: キャラハブ・公開一覧は表の上、コンボ詳細はパンくずの下

### アニメーション

| クラス | 概要 |
|---|---|
| `.animate-fade-up` | フェードアップ入場（`0.25s ease`） |

---

## レイアウト構造

### ページ全体（`src/layouts/Layout.astro`）

```
<header>           sticky top:0; height:52px; background:#111; z-index:100
  <a href="/">     SF6 Combo Archive ロゴ + BETAバッジ
  <a href="/mock/"> モックリンク（開発中のみ）
<main>             max-width:1200px; margin:0 auto; padding:28px 24px 60px
  <slot />
<footer>           border-top:1px solid var(--border); text-align:center; color:var(--muted)
```

### ページ内の典型パターン

```
.breadcrumb          ← パンくず（任意）
.page-head           ← ページタイトルスラブ（黒）
.filter-bar          ← フィルタ（page-headに連結する場合 border-top:none）
.section-head > h2   ← セクション区切り
.data-table          ← テーブル一覧
  または
.card グリッド       ← カード一覧（grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))）
```

---

## バッジ規約

### ソースタイプ（sourceType）

| 値 | 表示 | クラス |
|---|---|---|
| `personal` | 自分のメモ | `.tag-personal` |
| `shared` | `ownerLabel` の名前 | `.tag-shared` |
| `forked` | fork + `ownerLabel` | `.tag`（デフォルト） |

### 公開範囲（visibility）

| 値 | 表示 | クラス |
|---|---|---|
| `private` | 🔒 非公開 | `.tag-private` |
| `unlisted` | 🔗 限定公開 | `.tag-unlisted` |
| `public` | 🌐 公開 | `.tag-public` |

### 状態バッジ

| 用途 | クラス | 例 |
|---|---|---|
| 現verで不可 | `.tag-warn` | `⚠ 不可{n}` |
| 分岐ルート | `.tag`（黒背景） | `{n}ルート分岐` |
| 大分類・小分類 | インライン（`background:#e8f0fe; color:#1a56db`） | カテゴリ |

---

## コンボテーブルの構造（キャラページ）

`src/pages/mock/character/[name].astro` の `#combo-table` を参照。

```
table.data-table#combo-table
  tbody.combo-major-head     ← 大分類ヘッダー（背景:var(--surface)、左ボーダー:4px amber）
  tbody.combo-section-head   ← 小分類サブヘッダー（背景:var(--surface2)）
  tbody.combo-group          ← コンボ1件分のtbody（分岐ありは複数tr）
    tr.insert-here-row       ← ホバー時のみ見える挿入ボタン行
    tr                       ← コンボ本体行
    tr.okizeme-panel-row     ← 起き攻めパネル（初期:display:none）
  tbody.combo-tail           ← 末尾の挿入ポイント
  tbody#inline-editor-host   ← インラインエディタ（初期:display:none）
```

分岐コンボ（branched）の場合：
```
tr.combo-parent-row          ← 共通プレフィックス行（background:var(--surface)）
tr.combo-child-row           ← 各ルート行（初期:display:none、ツリートグルで展開）
```

---

## コマンド入力 UI — 採用方式

### 採用: C（ハイブリッド）

テキストボックス直接入力 + パレットボタン補助の組み合わせ。

**実装**: `src/components/ComboEditor.astro`

#### 構造
- **テキスト入力（主）**: `"2MK > 236LP > 214LK"` 形式で直打ち。慣れたプレイヤーが速く入力できる
- **パレット（補助）**: キャラ固有の技をグループ別ボタンで選択。入力欄末尾に追記される
- **トークンチップ行**: 入力内容をリアルタイムで表示。チップクリックで「ここで分岐」UI が起動
- **コマンド表示モード**: パレットを「コマンド表記」「技名表記」で切り替え可能（エディタ内のトグル。設定は一覧の `NotationToggle.astro` と共通）

#### 捨てた案と理由

| 案 | 方式 | 不採用理由 |
|----|------|-----------|
| **A: チップ式** | パレットのみ | 入力が遅い。1手技が多いSF6コンボでは1クリック/トークンのコストが大きい |
| **B: フリーテキスト** | テキストのみ | パレットなしだとキャラ技名の綴りを全て覚える必要があり、初心者の敷居が高い |

#### 留意点
- パレットはキャラ固有データ（`RASHID_PALETTE`）に依存するため、全キャラ展開時に各キャラの palette データが必要
- モバイルではパレットが縦長になるため、Phase 5 でモバイル向けレイアウト改善を要検討

---

## 自動計算フィールド

SA ゲージ消費・D ゲージ消費など、入力値から自動算出するフィールドの推奨スタイル。

### 構成（参考実装: `src/pages/mock/okizeme/new.astro`）

```html
<div style="display:flex; align-items:center; gap:7px;">
  <span style="font-size:0.72rem; font-weight:700; color:var(--muted); letter-spacing:0.06em; text-transform:uppercase;">
    SA ゲージ消費
  </span>
  <!-- 「自動」バッジ -->
  <span style="font-size:0.7rem; font-weight:700; background:var(--surface3); color:var(--muted-strong); padding:1px 6px; border-radius:3px; letter-spacing:0.04em;">
    自動
  </span>
  <!-- 読み取り専用ボックス -->
  <input type="text" readonly
    style="width:60px; background:var(--surface); color:var(--text-soft); font-family:'JetBrains Mono',monospace; font-weight:700; text-align:center; cursor:default;" />
</div>
```

### ルール
- `readonly` 属性を付け、`cursor:default` でクリック不可感を演出
- 背景は `var(--surface)`（通常入力の `#fff` より一段暗く、編集不可を示す）
- テキストは `var(--text-soft)`（通常テキストより薄め）
- 値は JS で動的に更新。計算ロジックは `src/lib/gauges.ts` の `calcGaugesFromSegs` を使用
- ラベルと「自動」バッジは横並び（`display:flex; align-items:center; gap:7px;`）

---

## 見た目の確認（スクリーンショット）

UI を変えたら、ヘッドレス Edge で撮って目で確かめる（2026-10-23 の UI 見直しで使用）。

1. `npm run dev`（4321 が使用中だと 4322 などにずれる。起動ログの Local の URL を使う）
2. スクラッチパッドに shots.json を書き、`node scripts/screenshot.mjs shots.json <出力フォルダ>` を実行
3. 出力された PNG を Read で見る

- 使い方の詳細はスクリプト冒頭のコメント。初回は Edge のプロファイル作成で十数秒かかる
- 撮影後は 9333 番の Edge が残るので、終わったら止める（`msedge.exe` のうち `--remote-debugging-port=9333` のもの）
- `npm run dev` をバックグラウンドで起動して止めると、npm だけが終わって `node …astro.mjs dev` が 4321 に残ることがある（2026-10-24）。そのプロセスも止める（残ると次の `npm run dev` が 4322 にずれる）
- シナリオテストをずれたポートに向けるときは `BASE=http://localhost:4322 npm run test:scenarios`
- 撮影用 Edge のプロファイルは使い回されるので、localStorage（表記設定 `sf6-dir` / `sf6-name` など）が前回の撮影から残る（2026-10-24）。表記に関わる撮影は actions で値を入れてから撮り、終わったら消す
- shots.json は Write で書く。Bash のヒアドキュメントで書くと、actions / evals の JS 式のバックスラッシュ（正規表現の `\s` など）が1つ減って JSON が壊れることがある
- キャラハブのインラインエディタを撮るとき（2026-10-24）: startSelector を `#inline-editor-host` にすると Layout の sticky ヘッダーがエディタの上端に重なるので、actions の先頭で `document.querySelector('header').style.position = 'static'` にする。開く操作は `#btn-add-combo-top`（新規）・`button.btn-edit[data-edit-combo-id="c_001"]`（編集）・`#combo-editor-cancel`（キャンセル）の click。入力欄の値は evals で JSON にまとめて出すと、画像を見なくても確かめられる
