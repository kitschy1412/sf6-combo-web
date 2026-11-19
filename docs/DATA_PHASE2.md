# データ層 — Phase 2 設計案

現行スキーマは `docs/DATA.md` を参照。
このファイルは Phase 2 実装時に参照する設計議論のみを含む。

---

## コンボ分岐ツリーの DB 表現（Phase 2 設計案）

モックでは `Combo.root: ComboNode` として再帰ツリーをクライアント側で保持している。
これを DB に落とす候補を 3 つ比較する。

### モックで確認した前提

- `ComboNode` は `segment`（コマンド断片）と `children?: ComboNode[]` を持つ
- 葉ノードのみ `damage / gauge / driveGauge / enderClassId / votes` を持つ
- 投票は**葉単位**（ルート単位）で行う（`votes.good / bad / brokenInCurrentVer`）
- コンボのトップレベルメタ（title, patchVersion, youtubeId 等）はツリーとは別管理

### 候補A — `combo_nodes` テーブル（`parent_id` 再帰）

```
combo_nodes(
  id          uuid PK,
  combo_id    uuid REFERENCES combos,
  parent_id   uuid REFERENCES combo_nodes NULL,  -- NULLがルート
  segment     text,          -- "2MK > 236LP" などのコマンド断片
  sort_order  int,           -- 兄弟ノード間の表示順
  -- 葉のみ（中間ノードはNULL）
  damage            int,
  gauge             int,
  drive_gauge       int,
  ender_class_id    text,
  route_label       text,
  situation_tags    text[],
  notes             text
)
```

**votes テーブル変更**: `combo_id` → `node_id uuid REFERENCES combo_nodes`（葉IDで紐付け）

- **書き込み（archiver）**: ツリーをDFSで走査し1ノードずつ INSERT。`parent_id` の解決順序に注意が必要
- **読み込み**: 再帰CTE（`WITH RECURSIVE`）で1クエリ取得 → クライアントでツリー再構築
- **Pros**: 正規化・votes が葉IDで直接紐付く・深さ自由
- **Cons**: 再帰CTEが必要（Supabase `.select()` では使えずRPC化が必要）・archiver書き込みが複雑

### 候補B — `combos.tree JSONB` カラム

```
-- 既存 combos テーブルにカラム追加
combos.tree jsonb   -- ComboNode をそのままJSONシリアライズして格納
```

**votes テーブル変更**: `node_id text`（JSON内のノードIDを文字列で参照）

- **書き込み（archiver）**: ツリーをJSONにシリアライズして1行 UPSERT。最もシンプル
- **読み込み**: `combos` を1行 SELECT してJSONパース。追加クエリ不要
- **Pros**: 書き込みが断然簡単・スキーマ変更最小（カラム追加のみ）
- **Cons**: votes の `node_id` が外部キーでなくなる（整合性を DB が保証できない）・ノードへのインデックス不可・JSONB の更新コストが高い

### 候補C — 別テーブル `combo_branches`（葉を1行として平坦化）

```
combo_branches(
  id              uuid PK,
  combo_id        uuid REFERENCES combos,
  path_segments   text[],   -- ルート→葉までの segment 配列
  full_inputs     text,     -- 結合済みコマンド文字列（検索用）
  route_label     text,
  damage          int,
  gauge           int,
  drive_gauge     int,
  ender_class_id  text,
  situation_tags  text[],
  notes           text
)
```

**votes テーブル変更**: `branch_id uuid REFERENCES combo_branches`

- **書き込み（archiver）**: 全ルート（葉）を `getAllLeaves()` で列挙して INSERT。モックのヘルパ関数がそのまま使える
- **読み込み**: 単純な SELECT。ツリー再構築不要（フラット一覧として扱う）
- **Pros**: シンプルなSELECT・archiver書き込みが比較的容易・votes紐付けが明確
- **Cons**: 共通プレフィックスが全ルートに重複して格納される・ツリー構造の UI 再現には `path_segments` から組み立て直しが必要

### 比較まとめ

| 観点 | A（再帰） | B（JSONB） | C（平坦化） |
|---|---|---|---|
| archiver書き込みやすさ | ★☆☆ | ★★★ | ★★☆ |
| 読み込みやすさ | ★☆☆ | ★★★ | ★★☆ |
| votes紐付けの正規化 | ★★★ | ★☆☆ | ★★★ |
| 柔軟性（深さ・変更） | ★★★ | ★★☆ | ★☆☆ |

### 暫定方針

**Phase 2 では候補A（combo_nodes）を基本方針とする。**

理由: votes が葉単位で正規化され、DB が整合性を保証できる。
ただし archiver 実装が先行するため、**当面は候補B（JSONB）で仮実装**し、
votes が本格稼働するタイミングで A に移行するマイグレーションを検討する。

移行手順: `tree JSONB` → `combo_nodes` へのデータ移行は `getAllLeaves()` 相当の SQL で実施可能。

---

## 〆分類のマスタ設計（Phase 2 設計案）

〆技（コンボの締め技）の種類を管理する方法の比較。

### モックでの現状前提

`src/mock-data/rashid.ts` では **マスタテーブル方式**を採用している。

```ts
type EnderClass = {
  id: string;          // "ec_weak_eagle"
  key: string;         // "weak_eagle_spike_ender"
  displayName: string; // "弱イーグルスパイク〆"
  frameAdvantage?: string; // "+34F"
};
// コンボ数・起き攻め数は持たず、getEnderClassCounts() で実データから数える

// ComboNode（葉）側
enderClassId?: string | null;  // EnderClass.id を参照
```

`ENDER_CLASSES` に 6種（弱/強イーグル, ODミキサー, ODウィップ, 投げ後, アラビアンサイクロン）を定義し、
`OkizemeSetup` が `enderClassId` でリンクしている。つまり **〆分類 → 起き攻め** の紐付けがマスタ経由で成立している。
紐付けは `getOkizemeLinks()` に一本化していて、〆分類が同じ起き攻めを主に、〆は違うが有利フレームが同じものを「参考」として返す（2026-10-24）。

〆分類の単位（2026-11-14 ユーザー判断）: 基本は〆技ごと。ただし同じ技でも当たり方やルートで相手の起き上がりまでのフレームが変わるものは、連携ごとに分類を作り、連携名で呼ぶ（「もにょもにょ〆」、大ミキサーの空中ヒット/地上ヒット、大スカイハイの「J中P＞」と「拾い」）。連携の中身は `EnderClass.route` に書く。
同じ連携でタイミングだけ違うもの（J中P 最速 +24F / 遅らせ +23F）は分類を分けず、起き攻めの `pattern` で区別する（起き攻めの一覧で小見出しになる）。
相手がダウンしない〆（弱ミキサー）は分類を作らない。取り込みでの振り分けは `scripts/import-archiver.ts` の `ENDER_BY_ROUTE`（セットプレイは archiver の `route`、コンボは〆の1つ前の技で決める）。
2026-11-15 に doskonnbu と他チャンネル（つのちゃんねる・4shika・ばるぱ・イウサール(本人)）の起き攻めをまとめて取り込んだときに足した分類: 後ろ投げ後、ODサイクロン〆、ODスパイク〆、中サイクロンネイル〆、大足パニッシュカウンター後、中スカイハイ〆、気流の中で当てたスパイク3種と強ミキサー（archiver の `route: "気流"`）。ODミキサー〆の有利Fは +9F（以前の +22F から弱体化）、SA1〆は +1F、弱スカイハイ〆は +23F、気流強スパイク〆は +63F、気流強ミキサー〆は +29F にした。
受け身の方向で択が変わるもの（ODミキサー後・SA1後）も `pattern` に「その場受け身」「後ろ受け身」と書いて小見出しにする。
同じ起き攻めが複数の動画から入るときは、1件にまとめて出典を並べる（2026-11-15 ユーザー判断。ほかの案は「新しい動画だけ残す」「全部残す」）。本体を1件残し、残りを `alsoIn`（出典ごとの区分・動画の時刻・解説つき）に新しい順に並べる。票が割れず、どの動画で紹介されたかも残る。位置（中央・端・どこでも）は出典によって書き方が違う（同じ連携を端とも、どこでもとも書く）ので、本体の位置は変えず、ほかの出典の区分はそのまま見せる。中段・下段・投げ・詐欺の印は、まとめた全部の分を付ける（選択肢を1つだけ書いた出典があるため）。まとめは取り込み（`scripts/okizeme-dedupe.ts`）がするので、archiver のデータは出典ごとのまま。

同じかどうかの決め方（2026-11-16。コマンドが完全に同じものだけをまとめたら、書き方の違いで同じ連携が4行並んだとユーザー指摘）:
1. 自動: 〆分類・`pattern` が同じで、コマンドを「経路の集合」にならすと同じもの。「(空)」「(持続当て)」の有無、or の並び順と括弧のくくり方は見ない（「5MK > (66 > LPLK) or 6HP」＝「5MK(空) > 6HP or (66 > LPLK)」）。本体は一番新しい出典
2. 手で決める: 片方の経路がもう片方の途中まで（「5MK(空) > 66」と「5MK(空) > 66 > 2LK」）の組は、同じ起き攻めを途中まで書いたものか、選択肢の1つだけを書いたもののことが多い。ただ、続きの違う別の連携のこともある（詐欺飛びの J大K と、J大K の後の持続中段）。なので自動ではまとめず、`scripts/okizeme-merge.json` に same（まとめる。`main` で本体を選ぶ。選択肢が全部見える書き方を本体にする）か distinct（別のまま）を、理由をつけて書く
3. 取り込みのたびに、まだ決めていない「途中まで同じ」の組の数を出す。`node scripts/import-archiver.ts --dups` で一覧（短い方・長い方のコマンドと解説）が出るので、1組ずつ決めて 2 のファイルに書く。動画の番号が変わってファイルの ID が無くなると、取り込みがエラーで止まる

2026-11-16 時点で取り込み分 314件 → 222件（92件をまとめた）。手で決めたのは same 7組・distinct 1組。〆とコマンドが同じでも `pattern`（受け身の向き・有利F）が違うものは別の行のまま。

### 方式A — 自由文字列

```sql
-- combos / combo_nodes / combo_branches いずれかに
ender_class text   -- "弱イーグル〆" など自由記述
```

- **書き込み（archiver）**: 最もシンプル。バリデーション不要
- **読み込み**: GROUP BY で集計可能だが表記ゆれが起きる
- **Pros**: スキーマ変更なし・新〆技の追加がゼロコスト
- **Cons**: 起き攻めと紐付けできない・フレーム状況などのメタデータを持てない・検索/フィルタが不安定

### 方式B — マスタテーブル（モック現状方式）

```sql
ender_classes(
  id              text PK,          -- "ec_weak_eagle"
  display_name    text,             -- "弱イーグルスパイク〆"
  frame_advantage text,             -- "+34F"
  character_id    uuid REFERENCES characters NULL  -- NULL = 全キャラ共通
)
```

FK: `combo_nodes.ender_class_id text REFERENCES ender_classes`
FK: `okizeme_setups.ender_class_id text REFERENCES ender_classes`

- **書き込み（archiver）**: マスタ先行投入が必要。新キャラ追加時は `ender_classes` を事前に用意
- **読み込み**: JOIN で displayName / frameAdvantage を取得
- **Pros**: 起き攻めと1:1リンク・フレーム状況等のメタデータ管理・集計・フィルタが安定
- **Cons**: 新〆技が出るたびマスタ更新が必要・キャラ固有の〆分類が増えるとマスタが肥大化

### 方式C — タグ多重付与

```sql
-- combo_nodes / combo_branches に
ender_tags text[]  -- ["弱イーグル", "画面端限定"] など複数タグ
```

- **書き込み（archiver）**: 自由にタグを付与。配列なので表現力は高い
- **読み込み**: `ANY(ender_tags)` でフィルタ。ただし `ender_classes` との1:1対応が崩れる
- **Pros**: 複合条件（「弱イーグル + 画面端」など）を1フィールドで表現
- **Cons**: 起き攻めとの紐付けができない・集計が難しい・正規化されていない

### 比較まとめ

| 観点 | A（自由文字列） | B（マスタ） | C（タグ多重） |
|---|---|---|---|
| archiver書き込みやすさ | ★★★ | ★☆☆ | ★★☆ |
| 起き攻めとの紐付け | ✕ | ✓ | ✕ |
| フレーム状況のメタデータ | ✕ | ✓ | ✕ |
| 検索・フィルタの安定性 | ★☆☆ | ★★★ | ★★☆ |
| 新〆技追加コスト | ★★★ | ★☆☆ | ★★★ |

### 暫定方針

**方式B（マスタテーブル）を維持する。**

モックが既にこの設計で起き攻めリンクを実現しており、これを崩すとサジェスト機能が成立しない。
フレーム状況の「ルート単位オーバーライド」が必要な場合は、マスタ値をデフォルトとして
`combo_nodes.frame_advantage_override` で上書きする設計（別タスク参照）で対応する。

新キャラ追加時の `ender_classes` 事前投入は archiver パイプラインの責務とする。

---

## ルート個別の「〆分類オーバーライド」設計（Phase 2 設計案）

### 問題

`ender_classes.frame_advantage` はクラス単位の固定値だが、
実際には同じ「弱イーグル〆」でも**繋ぎ・距離・相手キャラの高さ**によってフレーム状況が変わる。
また、クラスに紐付く起き攻めセットアップ全てが当該ルートで使えるとは限らない。

例（モック `rashid.ts:132`）:
```
弱イーグル〆 → +34F（マスタ固定値）
  ↑ 実際には画面端ルートは +36F、高め当て後は +31F になることがある
```

また `ec_weak_eagle` に紐付く起き攻め3種のうち、一部ルートでは距離が遠すぎて不可になる。

### 設計案

`ComboNode`（葉）に 2 フィールドを追加する。

#### TypeScript 型（モック拡張）

```ts
export type ComboNode = {
  // ... 既存フィールド ...
  enderClassId?: string | null;

  // ── オーバーライドフィールド（省略時はマスタ値を使用）──
  frameAdvantageOverride?: string | null;  // "+36F" など。null = マスタ値を明示的に使わない
  excludedOkizemeIds?: string[];           // このルートでは使えない起き攻めID
};
```

#### DB カラム（候補A/C 採用時）

```sql
-- combo_nodes または combo_branches に追加
frame_advantage_override  text        NULL,  -- NULL = ender_classes のデフォルト値を使用
excluded_okizeme_ids      text[]      NOT NULL DEFAULT '{}'
```

#### 候補B（JSONB）採用時

`tree` JSON 内の葉ノードに同フィールドを埋め込むだけ。スキーマ変更不要。

### UI での扱い方

```
〆分類: [弱イーグル〆 ▼]        ← EnderClass マスタから選択

フレーム状況: +34F（マスタ値）  ← デフォルトはマスタから自動サジェスト
              [+36F          ]  ← 編集時に上書き可能（上書きした場合「カスタム」バッジ表示）

起き攻めサジェスト（弱イーグル由来）:
  ✅ 詐欺重ね 2LK 中段崩し
  ✅ 中段 5MK 重ね
  ✅ 投げ重ね
     [このルートでは使えないものを除外] ← excludedOkizemeIds で管理
```

- `frameAdvantageOverride` が設定されている場合、表示上は「カスタム (+36F)」のように区別する
- `excludedOkizemeIds` はチェックボックス式の除外 UI（一覧から外す）
- 未設定の場合はマスタ値を継承するため、マスタを後から修正すれば全ルートに自動反映される

### 判断ポイント

- `frameAdvantageOverride` は `null` と `undefined` を区別する:
  - `undefined`（未設定）→ マスタ値を表示・使用
  - `null`（明示的なリセット）→ フレーム状況なし（表示しない）
  - 文字列 → その値を使用（マスタ値を上書き）
- `excludedOkizemeIds` は追加方向（除外リスト）にする。
  マスタに起き攻めを追加した場合、既存ルートは自動で新起き攻めをサジェストするようになる。
  逆（許可リスト方式）にすると、マスタ追加のたびに全ルートを更新する必要があり運用コストが高い。

---

## ノート機能のスキーマ設計（Phase 2 設計案）

コンボや起き攻めをユーザーがまとめる「ノート」機能のテーブル設計。

### モックでの現状前提

`src/mock-data/notes.ts` では以下の型を定義している。

```ts
type ComboNote   = { id, kind: 'combo',   title, visibility, description?, itemIds: string[] }
type OkizemeNote = { id, kind: 'okizeme', title, visibility, description?, itemIds: string[] }
type Note = ComboNote | OkizemeNote
```

- ノートは `kind` によって **コンボノート / 起き攻めノート** に分類され、**異種混在は禁止**
- `itemIds` は順序付きリスト（並び替え・除去が UI で可能）
- `visibility` は `'private' | 'unlisted' | 'public'`

### テーブル設計

#### `notes` テーブル

```sql
notes(
  id            uuid PK DEFAULT gen_random_uuid(),
  owner_id      uuid NOT NULL,             -- 将来的に auth.users(id) を参照
  kind          text NOT NULL CHECK (kind IN ('combo', 'okizeme')),
  title         text NOT NULL,
  visibility    text NOT NULL DEFAULT 'private'
                     CHECK (visibility IN ('private', 'unlisted', 'public')),
  description   text,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
)
```

#### `note_combo_items` テーブル

```sql
note_combo_items(
  note_id   uuid NOT NULL REFERENCES notes ON DELETE CASCADE,
  position  int  NOT NULL,                 -- 0-indexed 表示順
  combo_id  uuid NOT NULL REFERENCES combos ON DELETE CASCADE,
  PRIMARY KEY (note_id, position)
)
```

#### `note_okizeme_items` テーブル

```sql
note_okizeme_items(
  note_id      uuid NOT NULL REFERENCES notes ON DELETE CASCADE,
  position     int  NOT NULL,
  okizeme_id   uuid NOT NULL REFERENCES combo_nodes ON DELETE CASCADE,
  PRIMARY KEY (note_id, position)
)
```

### 異種混在禁止をどこで効かせるか

単一の `note_items(note_id, position, item_id)` テーブルに全種をまとめる方式と比較した。

#### 方式A — テーブル分割（採用方針）

上記の `note_combo_items` / `note_okizeme_items` に分ける。

- **Pros**: FK が明確・混在は構造的に不可能・クエリがシンプル
- **Cons**: `notes.kind` の値とテーブルの対応をアプリ側で意識する必要がある

アプリ側ルール: `notes.kind = 'combo'` なら `note_combo_items` のみ操作、`'okizeme'` なら `note_okizeme_items` のみ操作。
DB トリガーなしで整合性を保てる。

#### 方式B — 単一テーブル + トリガー制約

```sql
note_items(
  note_id    uuid REFERENCES notes,
  position   int,
  item_kind  text NOT NULL CHECK (item_kind IN ('combo', 'okizeme')),
  item_id    uuid NOT NULL   -- combo_id or okizeme_id（外部キーなし）
)
```

INSERT トリガーで `notes.kind = item_kind` を検証する。

- **Pros**: テーブルが1つ・position 管理が統一
- **Cons**: `item_id` に外部キーを張れない・トリガーが必要で複雑

#### 比較まとめ

| 観点 | A（テーブル分割） | B（トリガー） |
|---|---|---|
| FK 整合性 | ★★★（完全） | ★☆☆（なし） |
| 実装シンプルさ | ★★☆ | ★☆☆ |
| 混在禁止の確実性 | ★★★（構造的） | ★★☆（トリガー） |

### 暫定方針

**方式A（テーブル分割）を採用する。**

`note_combo_items` / `note_okizeme_items` の2テーブルに分けることで、外部キー制約が完全に機能し、
トリガーなしで混在禁止を構造的に保証できる。
アプリ層は `notes.kind` を読んで操作対象テーブルを切り替えるだけでよい。

Phase 2 スキーマ移行時は、`schema.sql` にこの3テーブルを追加する。
`notes.owner_id` は `auth.users(id)` への外部キー追加をその時点で検討する。
