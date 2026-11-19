# データ層

## Supabase テーブル
スキーマ定義の正本は `sf6-combo-archiver/schema.sql`。本サイトは読み取り主体（`votes` のみ INSERT）。

- `characters` — キャラクターマスタ
- `combos` — コンボデータ。`youtube_id` + `start_sec` で埋め込みURL生成
- `votes` — 投票（`combo_id`, `is_working`, `has_error`, `ip_hash`, `created_at`）

## コンボの分け方（始動技・ヒット状態・位置・優先度）

2026-10-23 に、自由入力の大分類/小分類をやめ、コンボの属性として持つことにした（ROADMAP「決まったこと（2026-10-23）」）。
一覧の見出し（位置 × 場面）は、この属性から自動で決める（docs/UI.md「コンボテーブルの構造」）。2026-11-07 に持ち方を次のように決めた。

| 属性 | `combos` の列 | 値 | 選べる値の正本 |
|------|--------------|----|---------------|
| 始動技 | `starter text not null` | `5LP` `2MK` `DR` `ODワール` `インパクト` … `その他` | `src/mock-data/rashid-starters.ts` の `STARTERS`（キャラごと） |
| ヒット状態 | `hit_state text not null default '通常'` | `通常` / `CH` / `PC` | `HIT_STATES` |
| 位置 | `position text not null default '中央'` | `中央` / `端` / `どこでも` | `POSITIONS` |
| 優先度 | `priority text not null default 'ときどき'` | `よく使う` / `ときどき` / `あまり使わない` | `PRIORITIES` |

- **当面（Rashid だけの間）は、どれも文字列の列にして、選べる値はアプリ側の定数で持つ**。マスタテーブルは作らない。
  ヒット状態・位置・優先度は全キャラ共通で増えない見込みなので、DB では `check` 制約で値を縛ってよい
- 始動技はキャラごとに違う。**キャラを増やす段階で、キャラ × 始動技のマスタテーブル**（例: `starters(character_id, key, sort_order)`）に移し、`combos.starter` はそのキーを指す。それまでは定数の `STARTERS` が正本
- 始動技が決まらないとき（先頭の技がリストに無い）は `その他`。エディタはコマンドの先頭から推定する（`inferStarter`）
- 「どこでも」はインパクト・スタン・イウサールの見出しだけが持つ。通常のコンボで「どこでも」を選ぶと中央の見出しに入る

## 並び順（sortOrder）

一覧の D&D 並び替え（SortableJS）は現状 DOM 操作のみで、並び替えた結果はページリロードで失われる。
永続化する場合の受け皿として `Combo.sortOrder?: number` を用意している（`src/mock-data/rashid.ts`）。

- **同じ見出し（位置 × 場面。`bucketOf` の値）・同じ優先度の中**で昇順に並べるための相対値。D&D もこの範囲の中でしか動かせない
- `combos` テーブルに `sort_order integer` カラムを追加し、D&D の drop 確定時に、同じ見出し・同じ優先度の中の並びをまとめて再採番して保存する想定
- 見出しは属性から決まるので、始動技・ヒット状態・位置・優先度を変えると別の範囲に移る。移った先では末尾（未設定と同じ扱い）に置く
- 未設定（`null`/`undefined`）の行は挿入順・作成日時などフォールバック順で末尾に配置

## キャラ対策（2026-11-13 追加、2026-11-14 に強い技・連携ごとに作り直し。モックだけ）

対策動画を archiver で取り込んだもの。手書きの対策はまだ無い（`MATCHUPS` = `ARCHIVER_MATCHUPS`）。

- 出典は2つ。ACQUA さんのキャラ対策動画（archiver の `data/matchup/<id>.json`。目線は「共通」＝どのキャラでも使える対策）と、doskonnbu の対策動画・ブログ（`data/rashid/<id>.json` の `kind: "matchup"`。目線は「ラシード」＝ラシードの技を使う対策）
- 型は `src/mock-data/rashid.ts` の `MatchupEntry`（相手キャラ × 動画1本。目線・要約・その動画で扱う強い技・連携の一覧 `threats`（名前と説明））→ `MatchupPoint`（対策1つ。`threats` はどの強い技・連携への対策かの名前で、空なら立ち回り全般）→ `MatchupRecipe`（レシピ。位置などのラベル付きで複数持てる）
- 画面では `src/lib/matchups.ts` が相手キャラごとに、強い技・連携の名前でまとめる。同じ名前なら動画・出典をまたいで1つの見出しになるので、名前は動画をまたいでそろえて書く（doskonnbu の分も ACQUA さんの呼び方に合わせた）
- 相手キャラは英語名で持ち、表示名・並び順・URL 用の slug・あくあ総研のキャラページの URL は `src/lib/characters.ts`。表に無い相手は取り込みが止まる
- ポイントの種類（`MATCHUP_TOPICS`）は 立ち回り / 攻め / 守り / 対空 / 反撃 の5つ。`caution` は調整で変わった点などの注意
- 時期のタグ（`patchVersion`）は公開日から決める。キャラ対策では Year 3 より前の動画（Y1・Y2）も入れ、画面で注意の色にする
- 1本の動画が複数の相手に効く内容（反撃集、「ブランカ・キャミィ限定」、ワンポイント対策シリーズなど）は、相手ごとに同じポイントを入れる
- 入力の JSON の書き方: ACQUA さんの分は `../sf6-combo-archiver/docs/acqua.md`、doskonnbu の分は `../sf6-combo-archiver/docs/doskonnbu.md`「キャラ対策」
- Supabase に移すときの形は未定（ROADMAP「キャラ対策」）

## YouTube 埋め込みURL
```
https://www.youtube.com/embed/{youtube_id}?start={start_sec}
```
モックのコンボ詳細では、分岐の葉が `startSec` を持てばそのルートを選んだときにその秒から出す（未設定ならコンボの `startSec`）。リピート再生は `end`/`loop` のURLパラメータでは2周目が頭からになるため、IFrame API（`enablejsapi=1`）で区間の終わりに読み直している。

## クライアント
- `src/lib/supabase.ts` — Supabaseクライアント
- `src/lib/movenames.ts` / `src/lib/notation.ts` — 技名・表記変換
- `src/lib/routes.ts` — ルートの並び ↔ 分岐ツリー（ComboNode）の変換。エディタはルートを1本ずつ書き、保存時に共通の先頭をまとめてツリーにする
- `src/mock-data/` — 開発用モック（本番ビルド時は使わない）

## 環境変数
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_KEY`（anon キー）

書き込みは `src/pages/api/vote.ts` のみ。サーバ側でIP制限を行うため anon キーで十分。

Phase 2 のスキーマ設計案（コンボ分岐ツリー・〆分類・ノート）は `docs/DATA_PHASE2.md` を参照。
