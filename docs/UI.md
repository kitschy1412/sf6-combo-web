# UI規約

## スタイリング方針
- グローバルCSSクラスは `src/styles/global.css` で定義。Tailwindユーティリティより優先して使う
- Tailwindはグローバルクラスで賄えないレイアウト（`display:flex; gap:...`）には使用可
- インラインstyleは許容（ページ固有のone-off調整）
- キャラページ等の複雑な要素はページ内 `<style>` スコープに書く
- JS で足す要素には、ページの scoped な `<style>` が効かない（Astro が付ける `data-astro-cid-…` が無いため）。一覧の行は保存で JS から足すので、CSS を `src/styles/combo-list.css` に置いて両ページから import している
- `src/layouts/Layout.astro` を全ページで使う

---

## デザイントークン（CSS変数）

`src/styles/global.css` の `:root` で定義。ライトテーマ固定。

| 変数 | 値 | 用途 |
|---|---|---|
| `--bg` | `#ffffff` | ページ背景 |
| `--surface` | `#fafafa` | カード・テーブルヘッダ等の1段目サーフェス |
| `--surface2` | `#f5f5f5` | 2段目サーフェス |
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
| `.tag-priority-1` / `.tag-priority-3` | 優先度のバッジ。1（よく使う）は緑、2（ときどき）は `.tag` のまま、3（あまり使わない）は枠だけ。クラス名は `priorityTagClass`（`src/mock-data/rashid-starters.ts`）で作る |
| `.tag-hit` + `.tag-hit-ch` / `.tag-hit-pc` | ヒット状態のバッジ。CH は青、PC は赤で、幅をそろえてある。クラス名は `hitTagClass`（同じファイル。通常は null）で作る |

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
| `.notation-text` | 文字表記（既定）。動画の字幕の書き方。`.notation-text-sm` は小サイズ |
| `.recipe-step` / `.recipe-sep` | 文字表記の1手順（途中で折り返さない）と区切りの `>` |
| `.notation-chips` | チップ表示のコンテナ（`.notation` と併用。チップを選んだときだけ出る） |
| `.only-text-style` / `.only-chip-style` | 文字表記のとき／チップのときだけ出す（始動技の名前。`StarterLabel.astro`） |
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

表記の設定（表示: 文字/チップ・方向: 数字/矢印・必殺技: コマンド/技名）は全ページで共有する（2026-10-24）。
**既定は文字表記**で、チップは選択式（2026-11-02 ユーザー要望）。

- **文字表記**: doskonnbu の動画の字幕の書き方（`2中P > 弱K > 弱スパイク`）。`Notation.astro` がサーバー側で `recipeSteps`（`src/lib/notation.ts`）を使って出す。呼び方は `src/lib/movenames.ts` の `getRecipeTable`（必殺技 + 通常技・共通行動 + 複数トークンで1つの技）。`DR > 5LP` は `ラッシュ弱P`、`214LP > 4K` は `弱サイクロンストローク` のようにまとめる。動画と違う書き方は `2MK` の `2中K` だけ（動画は「中足」。2026-11-02 ユーザー指定）
- **チップ**: 方向と必殺技はチップのときの設定なので、文字表記ではトグルを隠す
- 切り替えは `<html data-notation-style="chip">`。`Notation` は文字とチップの両方を出し、CSS で片方を隠す。チップを選んでいるときは Layout の head のスクリプトが描画前に属性を付ける（文字が既定なのでちらつかない）
- 設定は localStorage（`sf6-style` / `sf6-dir` / `sf6-name`）に保存。読み込みと1トークンの変換は `src/lib/notation.ts`（`readNotationPrefs` / `formatToken`）
- ページへの反映は `Layout.astro` のスクリプトが行う（`.cmd-chip[data-token]` と Phase 0 の `.notation[data-original]`）。トグルの無いページでも保存済みの表記で出る
- 技名は Layout の `character`（`<body data-character>`）のキャラの表（`src/lib/movenames.ts`）で引く。**コマンドを出すページでは Layout に `character` を渡す**（モックは `"Rashid"`）
- トグル（`NotationToggle.astro` と ComboEditor 内のトグル）は、保存して `notation:change` を流すだけ。ページのチップ・各トグル・エディタがそれを受けて表示を合わせる（別タブでの切り替えも storage イベントで追従）
- 一覧のトグルは `data-group`、エディタ内は `data-editor-toggle` で区別する（同じ `.ntoggle-btn` でも互いのハンドラを付けない）
- 置き場所: キャラハブ・公開一覧は表の上、コンボ詳細はパンくずの下。`Notation` を使うページは `<NotationToggle styleToggle />` で文字/チップの切り替えも出す（Phase 0 の `data-original` のページには文字表記が無いので付けない）

### アニメーション

| クラス | 概要 |
|---|---|
| `.animate-fade-up` | フェードアップ入場（`0.25s ease`） |

---

## レイアウト構造

### ページ全体（`src/layouts/Layout.astro`）

```
<SiteNav>          src/components/SiteNav.astro。sticky top:0; height:52px; background:#111; z-index:100
  <a href="/">     ロゴ（スマホは「SF6」だけ。BETA は lg 以上）
  nav              [キャラ選択 ▾ | コンボ | 起き攻め]  キャラ対策
  <a href="/mock/"> モックリンク（開発中のみ・sm 以上）
<main>             max-width:1200px; margin:0 auto; padding:28px 24px 60px
  <slot />
<footer>           border-top:1px solid var(--border); text-align:center; color:var(--muted)
```

ヘッダーのナビ（2026-11-16 ユーザー要望。行き先・タブ・選んだキャラの決め方は `src/lib/site-nav.ts`）:

- キャラ選択・キャラ対策はいつでも開ける。コンボ・起き攻めは「選んだキャラ」のページへ飛ぶ（枠で囲んでキャラ選択とひとまとまりに見せる）
- 今のタブは URL から決める（キャラハブ・コンボ詳細・公開一覧＝コンボ、起き攻め・ダウン状況＝起き攻め、`/mock/vs`＝キャラ対策）。各ページで指定しない
- 選んだキャラ: コンボ・起き攻めのページならそのページのキャラ（Layout の `character`）。ほかのページは Cookie `sf6-char`（キャラのページを開くとスクリプトが書く）。キャラ対策のページは表記のために `character="Rashid"` を渡しているが、これでは選んだことにしない
- キャラを選ぶ前は、コンボ・起き攻めはリンクでなくボタンで、押すとキャラ選択を開く
- キャラ選択（`#char-picker`、`<details>`）はヘッダーの幅いっぱいの一覧。データのあるキャラ（今は Rashid だけ）だけ押せて、ほかは「準備中」。押すと今のタブを保つ（起き攻めなら起き攻め、キャラ対策なら同じページを開き直してそのキャラの対策を足す、それ以外はコンボ）。Cookie は押したときにスクリプトが書く。キャラがページで決まらないところ（キャラ対策など）では「選択を外す（共通だけ）」も出す。外を押す / Esc で閉じる
- スマホでナビが入りきらないとき（320px 幅）はナビの中だけ横スクロール。キャラ選択の一覧が切れないよう、`<details>` とナビには position を付けない（一覧の基準はヘッダーの中の div）
- キャラ対策は全キャラ共通の対策が既定で、キャラを選んでいればそのキャラ目線の対策を足して出す（2026-11-16 ユーザー回答。下の「キャラ対策ページ」）
- 起き攻めの URL はまだキャラごとに分かれていない（`/mock/okizeme/` は Rashid だけ）。分けるときは `okizemeUrl` だけ直す

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
| 始動技・ヒット状態・位置（コンボ詳細） | インライン（`background:#e8f0fe; color:#1a56db`） | `5HK始動` `CH` `端` |
| 優先度（一覧の行・コンボ詳細） | `priorityTagClass(priority)` | `よく使う` `ときどき` `あまり使わない` |
| ヒット状態（一覧の行） | `hitTagClass(hitState)` | `CH` `PC`（通常は出さない） |

---

## コンボテーブルの構造（キャラページ）

`src/pages/mock/character/[name].astro` の `#combo-table` を参照。

```
table.data-table#combo-table
  thead.combo-col-head       ← 列名（表の上に1回だけ）
  tbody.combo-section-head   ← 大見出し（背景:var(--surface2)、左ボーダー:4px amber）
  tbody.combo-scene-head     ← 小見出し（中央・端の下の場面。ホバーで「＋」）
  tbody.combo-group          ← コンボ1件分のtbody（data-section / data-bucket / data-priority / data-starter / data-hit-state / data-gauges / data-search。分岐ありは複数tr）
    tr.insert-here-row       ← 行間の挿入ボタン（高さ0。行の境目にマウスを乗せたときだけ、境目の上に重ねて出す）
    tr                       ← コンボ本体行（列: ≡ / コマンド / ダメージ / 〆分類 / 有利F / 操作）
    tr.okizeme-panel-row     ← 起き攻めパネル（初期:display:none。1件1行のリスト。OkizemePanel.astro）
  tbody.combo-low-row        ← 見出しの末尾の「あまり使わない N件」（その見出しの畳んだ行を開く）
  tbody.combo-tail           ← 末尾の挿入ポイント
  tbody#inline-editor-host   ← インラインエディタ（初期:display:none）
```

見出し（2026-11-02 に始動技の1段から状況別へ変更。公開一覧も同じ）：

- **大見出し**: 中央 / 端 / インパクト / スタン / イウサール（doskonnbu の動画の章立てと同じ）。インパクト・スタン・イウサールは小見出しを持たず、大見出しが data-head-bucket と「＋」を持つ
- **小見出し**: 中央・端の下の場面。通常 / ラッシュ / 飛び / カウンター・確反。項目は足さず、ヒット状態と始動技から自動で決める（`src/mock-data/rashid-starters.ts` の `sectionOf` / `sceneOf`。CH・PC → カウンター・確反、DR → ラッシュ、j.HK → 飛び）
- **位置**: インパクト・スタン・イウサールは見出しで位置が分からないので、決まっているものだけ行に「中央」「端」のタグを出す（`positionTagOf`）。「どこでも」はこの3つだけが持つ。通常のコンボにエディタで「どこでも」を選ぶと中央に入る
- **data-bucket**: 行と見出しを結びつけるキー（`中央/通常`、`インパクト` など。`bucketOf`）。D&D は同じ data-bucket・同じ data-priority の中だけ
- **＋**: 見出しの「＋」と行間の挿入は、その見出しに入る値（`bucketPreset`。位置、ラッシュは始動技 DR など）を入れてエディタを開く。行間の挿入は行の優先度も入れる

優先度（`Combo.priority`。2026-11-02）：

- 実戦で使う頻度。よく使う / ときどき / あまり使わない の3段階で、コンボの属性（エディタで変える）
- 見出しの中は優先度の高い順（`groupCombosForList`）。公開一覧の並び順は「優先度順」が既定
- コマンドの後ろの項目（`.combo-sub`）の先頭にバッジを出す。フィルタバーのチップ（`data-filter-priority`）で絞り込める
- 「あまり使わない」の行は最初は畳み、`tbody.combo-low-row` で見出しごとに開く。チップで絞り込んでいるときは畳まない
- 初期値は動画の補足から `scripts/import-archiver.ts` の `PRIORITY_BY_ID` に書く（根拠が無ければ「ときどき」）。`src/mock-data/rashid-archiver.ts` は生成物なので直接直さない

絞り込み（フィルタバー。公開一覧も同じ。2026-11-03）：

- 始動技の `<select>`（キャラハブは「自身作成のみ」も）と、優先度・ヒット状態（CH / PC）・ゲージ（ノーゲージ / OD / SA）のチップ。同じ軸のチップどうしは OR、軸どうしは AND。位置・場面は見出しで分かるのでチップにしない
- ゲージはルートごとの区分（`src/lib/gauges.ts` の `gaugeClassFromSegs`。SA を使えば SA、DR・CR・OD技などDゲージだけなら OD）。行の `data-gauges` にルートの区分を空白区切りで持ち、分岐コンボはどれか1つのルートが合えば出す。開いたときは合わないルートを薄く出す（`tr.combo-child-row` の `data-gauge` と `.route-unmatched`）
- 「ノーゲージ」はDゲージも SA も使わないこと。ラッシュを使うコンボの名前に「ノーゲージ」と付けない（2026-11-03 に c_004・c_006 を直した）。インパクト・スタンはコマンドに始動（DI など）を書かないので、続きで使うゲージだけで決まる
- 「あまり使わない」の畳みを外すのは優先度で絞ったときだけ。ヒット状態・ゲージ・検索語で絞っても畳みは残り、畳みの行の件数が絞り込みに合わせて変わる
- **検索欄**（`#filter-text`。2026-11-05）: フィルタバーの1行目に単独で置き、入力のたびに絞り込む。チップ・`<select>` とは AND。空白で区切った語がどれも入っているルートだけ合い、分岐コンボはゲージと同じく、どれか1つのルートが合えば出して合わないルートは薄く出す（ゲージと検索語は同じルートで見る）。検索しているときだけ横に合った件数を出す（畳んだ行も数える）
  - 引ける語: コンボ名・出典（一覧に出す投稿者名）・ルート名・条件・状況タグ・コマンド（`236HK`。`2MK>236LP` と続けても当たる）・文字表記の呼び方（`getRecipeTable`。弱スパイク）・エディタの技名（`TOKEN_TO_NAME`。しゃがみ中K）。〆分類・優先度・位置は引かない（列・チップ・見出しで分かる）
  - 全角/半角・大文字/小文字・ひらがな/カタカナの違いは無視する（IME で変換する前の「すぱいく」でも当たる）
  - 検索用の文字列は `src/lib/combo-search.ts` の `comboSearchTexts` で作り、行の `data-search`（全ルートの語）とルートの行の `data-search`（そのルートの語）に載せる。保存で足す行はルートの行を作らないので、行の `data-search` だけで見る

部品（どれもキャラハブと公開一覧で共通。片方だけ変えない）：

- 見出しは `ComboListHead.astro`、畳みの行は `ComboLowRow.astro`
- 行のコマンド欄は `ComboRowCommand.astro`、ダメージ・〆分類・有利F の列は `ComboRowStats.astro`（分岐の親行は `ComboParentStats.astro`）、列表示メニューは `ComboColumnMenu.astro`。保存で足す行はキャラハブの `buildNewComboRow` が同じ形を JS で組み立てるので、形を変えたらそちらも直す
- 表と行の CSS は `src/styles/combo-list.css`
- ブラウザ側の絞り込み・折りたたみ・畳み・ルートと起き攻めの開閉・列表示は `src/lib/combo-list-view.ts`（絞り込みチップを足すときはここに寄せる）。検索用の文字列と照合は `src/lib/combo-search.ts`

分岐コンボ（branched）の場合：
```
tr.combo-parent-row          ← 共通プレフィックス行（background:var(--surface)）
tr.combo-child-row           ← 各ルート行（初期:display:none、ツリートグルで展開）
```

行の並び（左から）：

- キャラハブ: ≡ / コマンド / ダメージ / 〆分類 / 有利F / 操作（✎ ⤴ 🗑）
- 公開一覧: コマンド / ダメージ / 〆分類 / 有利F / スコア / 操作（fork）
- ≡ と操作のボタンはマウスを乗せた行だけに出す。⚠ の印は常に出す
- 有利F のバッジは起き攻めパネルの開閉を兼ねる。ダメージ未入力は「—」
- 分岐の親行は、ダメージの幅（最小〜最大）と、ルートに出てくる〆と有利F を1行ずつ出す（2026-11-03）。親行の有利F は起き攻めを開かない（ルートの行で開く）
- 起き攻めパネルは1件1行（タイトル・コマンド・中段/下段/投げ/詐欺）。起き上がりへの対応（GD・暴れ・無敵）は行の title に入れ、見出しの右に「詳しくはコンボ詳細 →」（そのルートの `#葉ID`。詳細ではそのルートが選ばれて開く）を置く（2026-11-03。6件で約180px）
- **行の高さを抑える**（2026-11-03 ユーザー要望: 1画面に多く見せたい）。1行の行はキャラハブ約33px・公開一覧約32px（前は行間込みで約61px・約50px）。行の中の行送りは 1.3（起き攻めパネルは除く）、操作のボタンは 24×22px で、コマンドの行より高くしない。行間の挿入は高さ0の行で、境目の上下5px（セルの余白の中）に重ねて出す。分岐の親行は〆の数だけ高くなる（〆4種で約76px）

コマンド欄の中身（公開一覧も同じ形）：

- コマンド（`Notation`）が主役。コマンド自体が詳細へのリンクで、ルートの行はそのルートの `#葉ID` へ飛ぶ。分岐の親は共通部分の後ろに「▶ Nルート」を置く（どちらも、コンボ名を隠しても使えるように `.combo-sub` に入れない）
- CH/PC の行だけ、コマンドの左にヒット状態のバッジを出す。専用の列は作らない（CH/PC は全部「カウンター・確反」の見出しに入るので、同じ見出しの中で左端がそろい、ほかの行の幅を削らない）。ルートの行では、共通部分と同じく薄く出して位置を合わせる
- コマンドの後ろに `.combo-sub`（優先度・出典（fork・投稿者）・コンボ名・状況タグ。ルートの行はルート名・条件・状況タグ）を小さく薄く、同じ行で続ける。収まらない行だけ下の行に回る（`.combo-line` の flex-wrap。文字表記で、1行のコマンドのうちキャラハブ 61/70本・公開一覧 37/45本が同じ行に収まる。2026-11-03）。前はいつも下の行に出していた
- 文字のトーンは3段: 見出し（大見出し 1.15rem・小見出し 0.98rem の太字。件数は細く薄く）／コマンド（0.84rem の太字で濃い色）／後ろの項目（0.72rem で細く薄く）
- **余程長いコンボでない限り、コマンドは1行に収める**（2026-11-02 ユーザー要望）。表の幅 1152px でコマンド欄はキャラハブ約755px・公開一覧約730px（文字表記で11手順前後）。項目を足すときは列を増やさず、`.combo-sub` に入れる

列表示メニュー：

- コンボ名・状況・優先度はコマンドの後ろの項目で、`#combo-table` の `hide-title` などのクラスで隠す。ダメージ・〆分類・有利F は `<col data-col>` を畳む
- コンボ名をオフにすると、コンボ名と出典が消える。ルートの行のルート名は消さない
- コンボ名・状況・優先度を全部オフにすると、コマンドだけが残る（限定公開の 🔗 は残る）
- 設定は localStorage の `sf6-combo-col-vis`。キャラハブと公開一覧で共有する

---

## 起き攻めの一覧（2026-11-14。形はユーザー未確認の暫定）

`src/pages/mock/okizeme/index.astro`（`/mock/okizeme/`）。ヘッダーのナビの「起き攻め」から開く。

- 全部の〆を縦に並べたら長すぎて見づらかった（2026-11-14 ユーザー指摘。4,500px超）ので、左に〆の一覧（件数つき）を置き、選んだ〆の節だけを右に出す。選んだ〆は `#〆分類ID`（無ければ先頭の〆）。スマホは〆の一覧が上で横スクロール。JS が無ければ全部並ぶ
- 節（`id` と `data-okizeme-ender` は〆分類ID）の見出しに〆分類名・有利F・連携の中身（`route`）。「この〆で終わるコンボ N件」は開閉式
- 1件は「位置（端/中央/どこでも）・コマンド・中段/下段/投げ/詐欺」が主役。補足は1行で切り、押すと全文と動画へのリンクを出す（`<details>`）。取り込み分の名前（「端 弱スパイク後 #2」）は位置と〆の繰り返しなので出さず、手書き分の名前だけ出す。並びは位置（端 → 中央 → どこでも）の順
- `pattern` のある起き攻めは小見出しで分ける（大スカイハイの +24F / +23F）
- 同じ起き攻めを紹介している動画が複数あれば1件にまとめてある（`alsoIn`。docs/DATA_PHASE2.md）。行の右に「ばるぱ ほか3件」と出し、開くと本体の動画（チャンネル名「動画の題」）の下に「ほかの出典 N件」としてリンク・その動画での区分（端・TC始動など）・解説の1行目を並べる（`data-okizeme-source`）。コンボ詳細・ダウン状況の起き攻めは「ほか N件」だけ（title に出典の一覧）、起き攻めパネルは行の title に件数（2026-11-15）
- 起き攻めの無い〆は節を作らず、〆の一覧の下に名前だけ出す（PC のみ）
- 「参考」（〆は違うが有利Fが同じ）はここには出さない。コンボ側のパネル・詳細だけ
- 起き攻めパネルとコンボ詳細の起き攻めの見出しに「この〆の起き攻め一覧 →」（`/mock/okizeme/#〆分類ID`）

## キャラ対策ページ（2026-11-14 に強い技・連携ごとに作り直し。形はユーザー未確認の暫定）

一覧 `src/pages/mock/vs/index.astro`（`/mock/vs/`）と、相手キャラ1人のページ `src/pages/mock/vs/[slug].astro`（`/mock/vs/sagat` など。slug は `src/lib/characters.ts`、無い slug は 404）。ヘッダーのナビの「キャラ対策」から一覧を開く。まとめ方（相手キャラ → 強い技・連携 → 対策）は `src/lib/matchups.ts`。

出す対策は、全キャラ共通（ACQUA さん）が既定。ヘッダーでキャラを選んでいれば（Cookie `sf6-char`）、そのキャラ目線の対策（今はラシード＝doskonnbu）を足す（`visibleMatchups`。目線の値はキャラの日本語名と比べる）。件数・印・絞り込みは、出している対策だけで数える。シナリオテストでラシード目線まで見るときは Cookie を付けて取る（S10・S11）

一覧（キャラ対策のトップ）:

```
section#vs-pick            ← 相手キャラの選択（2026-11-16 ユーザー要望）。題「キャラ対策 相手キャラを選ぶ」と、全キャラのマス
  a[data-vs-pick]          ← キャラ1人。名前とポイント数（無ければ点線で「まだ無し」。押せる）。押すと相手キャラのページへ
.page-head（h2「強い技・連携から探す」）+ .filter-bar   ← 題（キャラ数・強い技・連携の数・ポイント数・出典）と検索
.vs-list
  section.vs-row           ← キャラ1人（並びは characters.ts の順）。キャラ名から相手キャラのページへ
    a.vs-threat            ← 強い技・連携の名前とポイント数。押すとそのページのその見出し（#t1 …）に飛ぶ
                              選んだキャラの目線の対策しか無いものは「ラ」の印（キャラ名の1文字目）。最後に破線の「立ち回り全般」（#general）
.vs-uncovered              ← まだ対策が無いキャラ（今は全員あるので出ない）
```

- 相手キャラの選択は、ランクマッチで相手キャラが出たらすぐ押すためのもの。並びはゲームのキャラ選択画面と同じ（`characters.ts` の `SELECT_SCREEN_ROWS`。4列で、4人に満たない段は真ん中に寄せる）。新キャラが出たらゲームの画面を見てここに足す
- スマホでもスクロールせずに1画面に収める。マスの高さは画面の高さ（`100dvh`）からヘッダー・main の上の余白・題を引いて段の数で等分（PC は 600px まで）。スマホではパンくずを出さない。375×548（iPhone SE の Safari の見える範囲）・360×640・390×664 で、下端が画面に収まるのを確かめた（2026-11-16）
- `.breadcrumb` などグローバル CSS のクラスはレイヤーの外なので、同じ要素に付けた Tailwind の `max-sm:hidden` が効かない。外側の div に付ける
- 検索はキャラ名・技名で絞る。キャラ名に当たればそのキャラの技を全部、技名に当たればその技だけを出す（`combo-search.ts` の normalizeSearch / matchesSearch）

相手キャラのページ:

```
.page-head + .filter-bar   ← 題（強い技・連携の数・ポイント数・動画数）、あくあ総研のそのキャラのページへのリンク、絞り込み
  目線のチップ              ← すべて / 共通 / ラシード（1つだけ選ぶ）。目線が2つ以上あるとき（キャラを選んでいて、その目線の対策もあるとき）だけ出す
  種類のチップ              ← 立ち回り / 攻め / 守り / 対空 / 反撃（複数選ぶと OR）
.mu-layout                 ← 左: 見出しごとの対策、右: 動画（sticky。幅 960px 以下は下の項）
  nav.vs-toc               ← 見出しの目次（ポイント数つき。幅 960px 以下は横スクロールの1行）
  details.vs-summaries     ← 動画ごとの要点（要約がある動画だけ。畳んで出す）
  section.vs-block#t<n>    ← 強い技・連携1つ（ポイントの多い順）。名前と説明（about）
    li.mu-point > details  ← 対策1つ。summary は1行: 種類のタグ・ラシード目線の印・結論のひとこと・「注意」の印・古い時期（Y1/Y2）・▶ 時刻
                              開くと（.mu-body）説明・注意・レシピ・出典・自分用の印のボタン（.mu-mark）
    button[data-hidden-toggle] ← 非表示にした対策があるときだけ「非表示 N件を表示 / 隠す」（見出しごと）
  section.vs-block#general ← どの技・連携にも結びつかない対策（立ち回り全般）
```

- 1件ずつ説明まで並べると1画面に4件ほどしか入らなかった（2026-11-17 ユーザー指摘。サガットで PC 5,100px・スマホ 8,300px）ので、結論の1行だけにして説明は開閉式にした（PC 2,800px・スマホ 3,300px）。summary の中の ▶ は開閉させずに再生だけする（preventDefault）。`#<ポイントID>` で来たらその対策を開く
- 自分用の印（2026-11-18 ユーザー要望）: 対策を開いた中の「優先度 高 / 優先度 低 / 非表示」で付ける。もう一度押すと外れる。見出しの中は 高 → 普通 → 低 の順（低は薄く）。非表示はその見出しの下のボタンで出し入れする。印が1つでもあれば絞り込みに「優先度 高だけ」を出す。1行目に印のバッジ（`.tag-priority-1` / `.tag-priority-3` を流用）。保存は localStorage の `sf6-vs-marks`（{ポイントID: 'high'|'low'|'hidden'}）で、同じポイントが複数の見出しに出ていれば全部に効く。一覧ページ（/mock/vs/）の件数には反映しない。本番ではアカウントに保存する想定
- 幅 960px 以下では動画を最初は出さず、▶ / 時刻を押したら画面の下に固定して出す（✕ で閉じる。開いている間は一覧の下に余白を足す）。前は一覧の上に動画があり、スマホの最初の1画面に対策が1件も出なかった
- 1つの対策が複数の技・連携に効くときは、それぞれの見出しに出す。`#<ポイントID>` の id は最初に出たところにだけ付ける（キャラハブの「推定できなかった項目」からのリンク）
- ▶ と時刻のボタンは、右の（スマホは下の）動画をその場面から再生する（`embed?start=…&autoplay=1` に差し替える）。押したポイントは薄い背景で示す。絞り込みで今の動画のポイントが隠れたら、見えている最初のポイントの場面に頭出しだけする（自動再生はしない）
- 出典の行に時期のタグ（Y1〜Y4）。Year 3 より前（Y1・Y2）は注意の色。調整で変わった点などの注意は `.vs-caution`（注意の枠）で説明の下に出す
- レシピは `Notation`（文字表記 / チップ）で出す。位置などで変わるものはラベル付きで並べる（「中央」「端」など）。コマンドが無いポイントは説明だけ
- 種類のタグの色: 攻め=赤、守り=青、対空=緑、反撃=黄、立ち回り=グレー

## コマンド入力 UI — 採用方式

### 採用: C（ハイブリッド）

テキストボックス直接入力 + パレットボタン補助の組み合わせ。

**実装**: `src/components/ComboEditor.astro`

#### 構造
- **テキスト入力（主）**: `"2MK > 236LP > 214LK"` 形式で直打ち。慣れたプレイヤーが速く入力できる
- **パレット（補助）**: キャラ固有の技をグループ別ボタンで選択。選択中のルートの末尾に追記される
- **トークンチップ行**: 入力内容をリアルタイムで表示。ほかのルートと共通の先頭は薄く出す。チップクリックで「空振り」を切り替える
- **分岐はルートを1本ずつ書く**（2026-11-07）: ルートごとにルート名・条件・コマンド・ダメージ・〆分類・タグを入れる。コマンドが空のルートがあると保存しない。「＋ ルートを追加」は選択中のルートをコピーして足す。下に、保存時の形（`src/lib/routes.ts` の routesToTree でまとめたツリー）を確認用に出す。別のルートの途中で終わるルートは警告する
  - `is:inline` のスクリプトからは src/lib を import できないので、同じコンポーネントのモジュールスクリプトが `window.comboEditorLib`（routes.ts の変換と gauges.ts のゲージ計算）を出す。モジュールは inline より後に読まれるので、届いたら `combo-editor:lib-ready` で描き直す
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
- `npm run dev` の出力をファイルに流してバックグラウンドで起動すると、ログに Local の URL が出ないことがある（2026-10-24）。そのときは `curl -s -o /dev/null -w "%{http_code}" http://localhost:4322/mock/` のようにポートを順に叩いて確かめる。4321 にユーザーの dev サーバーが動いていることがあるので、止めるのは自分が起動したポートだけにする
- `npx astro check` は `@astrojs/check` が入っていないのでインストールの確認で止まる（2026-10-27）。型の確認は dev サーバーでの表示とシナリオテストで代える
- シナリオテストをずれたポートに向けるときは `BASE=http://localhost:4322 npm run test:scenarios`
- 撮影用 Edge のプロファイルは使い回されるので、localStorage（表記設定 `sf6-dir` / `sf6-name` など）が前回の撮影から残る（2026-10-24）。表記に関わる撮影は actions で値を入れてから撮り、終わったら消す
- shots.json は Write で書く。Bash のヒアドキュメントで書くと、actions / evals の JS 式のバックスラッシュ（正規表現の `\s` など）が1つ減って JSON が壊れることがある
- 一覧のコマンドが1行に収まる本数は `node scripts/screenshot.mjs scripts/shots/list-one-line.json <出力フォルダ>` で測れる（evals に出る。文字表記・4321番の前提。畳んだ行は `display:none` だと1行に数えられるので、actions で開いてから測っている）（2026-11-02）
- 一覧の操作（チップ・検索欄・畳み・折りたたみ・「＋」の初期値・保存の置き場所・保存した行の見た目・列表示・起き攻めの開閉・D&D・公開一覧の並び替え）は `node scripts/screenshot.mjs scripts/shots/list-interact.json <出力フォルダ>` でまとめて確かめられる。結果は actions の出力に JSON で出るので画像を見なくてよい（4321番の前提。例外やコンソールのエラーも一緒に出る）（2026-11-02）
- マウスを乗せたときの表示（≡・操作のボタン）は、JS の click では確かめられない。shots.json の `hover`（セレクタ）でマウスを動かしてから、evals で `getComputedStyle` の opacity を見る（例: list-interact.json の `hub-hover`）（2026-11-02）
- SortableJS の D&D はヘッドレスでも動かせる。JS から `PointerEvent` を送る（`.row-drag-handle` に pointerdown → document に pointermove を約70msおきに14回 → 300ms 待って pointerup。移動先の行は画面内に入れる。手順は list-interact.json の `__drag`）（2026-11-02）
- 開発中の HTML には Astro が `data-astro-cid-…` などの属性を足すので、テストで HTML を正規表現で見るときは `<thead class="…"[^>]*>` のように属性が続く形にする（2026-11-02）
- 一覧の行の `data-search` の値にはコマンドの `>` がそのまま入る（Astro は属性値の `>` をエスケープしない）。行の開始タグを `[^>]*>` で切り出すと値の途中で切れ、後ろの `style="display:none"` などが見えなくなる。tests/scenarios.mjs の `ATTRS`（引用符の中を読み飛ばす）を使う（2026-11-05）
- `src/mock-data/rashid.ts` は拡張子なしの import があるので Node から直接読めない。データを数えたいときは `npx --no-install esbuild src/mock-data/rashid.ts --bundle --format=esm --platform=node --outfile=<スクラッチパッド>/rashid.bundle.mjs` で束ねて読む（2026-11-02）
- `npm run dev` 直後の最初の撮影は、Vite の依存の再最適化（ログに「optimized dependencies changed. reloading」）でページが読み直され、actions が効かないことがある（2026-10-24。「＋ コンボ」を押したのにエディタが開いていなかった）。evals の結果が空や想定外なら、もう一度撮る
- キャラハブのインラインエディタを撮るとき（2026-10-24）: startSelector を `#inline-editor-host` にすると Layout の sticky ヘッダーがエディタの上端に重なるので、actions の先頭で `document.querySelector('header').style.position = 'static'` にする。開く操作は `#btn-add-combo-top`（新規）・`button.btn-edit[data-edit-combo-id="c_001"]`（編集）・`#combo-editor-cancel`（キャンセル）の click。入力欄の値は evals で JSON にまとめて出すと、画像を見なくても確かめられる
