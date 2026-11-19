# サイトマップ（確定版）

Phase 3 移行後に目標とする URL 体系。現状稼働中の旧版との対応も記載する。

---

## 現状（Phase 0 稼働中）

| URL | ページ | ファイル |
|---|---|---|
| `/` | キャラ一覧 | `src/pages/index.astro` |
| `/[character]` | キャラ別コンボ一覧（旧版） | `src/pages/[character].astro` |
| `/combo/[id]` | コンボ詳細 + YouTube 埋め込み + 投票 | `src/pages/combo/[id].astro` |
| `POST /api/vote` | 投票 API | `src/pages/api/vote.ts` |

---

## 目標 URL 体系（Phase 3 移行後）

### パブリック閲覧（認証不要）

| URL | ページ | 備考 |
|---|---|---|
| `/` | キャラ一覧 | 変更なし |
| `/[character]` | キャラ別コンボ一覧（新版） | `src/pages/mock/character/[name].astro` を昇格 |
| `/combo/[id]` | コンボ詳細 | 新版に差し替え |
| `/okizeme` | 起き攻めの一覧（〆分類ごと） | `src/pages/mock/okizeme/index.astro` を昇格（2026-11-14。URL は未確定） |
| `/okizeme/[id]` | 起き攻め詳細 | 新規（Phase 3） |
| `/vs` | キャラ対策の一覧（キャラごとの強い技・連携） | `src/pages/mock/vs/index.astro` を昇格（2026-11-14。URL は未確定） |
| `/vs/[character]` | 相手キャラ1人の対策（強い技・連携ごと） | `src/pages/mock/vs/[slug].astro` を昇格（2026-11-14。URL は未確定） |

`/[character]` に表示されるのは `visibility = public` のコンボのみ。

### ユーザープロフィール（認証不要・公開情報のみ）

| URL | ページ | 備考 |
|---|---|---|
| `/u/[handle]` | ユーザー公開プロフィール | `public` なコンボ・ノートのみ表示 |

### マイページ（要ログイン）

| URL | ページ | 備考 |
|---|---|---|
| `/me` | ダッシュボード | 自分のコンボ・ノート概要 |
| `/me/notes` | マイノート一覧 | コンボ・起き攻め両系統を並べて表示 |
| `/me/notes/combos/[id]` | コンボノート詳細 | 順序付きコンボリスト |
| `/me/notes/okizeme/[id]` | 起き攻めノート詳細 | 順序付き起き攻めリスト |

ノートの kind は固定（1ノート = 1種類）。コンボと起き攻めの混在はしない。

### コンテンツ作成・編集（要ログイン）

| URL | ページ | 備考 |
|---|---|---|
| `/combo/new` | コンボ投稿フォーム | |
| `/combo/[id]/edit` | コンボ編集 | オーナーのみ |
| `/okizeme/new` | 起き攻め投稿フォーム | |
| `/okizeme/[id]/edit` | 起き攻め編集 | オーナーのみ |

### 管理（admin 限定）

| URL | ページ | 備考 |
|---|---|---|
| `/admin/broken-list` | 「現ver不可」票が多いコンボ一覧 | |

### API

| URL | メソッド | 内容 |
|---|---|---|
| `/api/vote` | POST | 投票（Wilson Score + IP ハッシュ制限） |

---

## visibility による出し分けルール

visibility は `public` / `unlisted` / `private` の 3 値（コンボ・ノート共通）。

| visibility | キャラページ一覧 | URLで直接アクセス | `/u/[handle]` | `/me` |
|---|---|---|---|---|
| `public` | 表示 | 誰でも可 | 表示 | 表示 |
| `unlisted` | 非表示 | URLを知っていれば可 | 非表示 | 表示 |
| `private` | 非表示 | オーナーのみ（他は 404） | 非表示 | 表示 |

- `unlisted` はリンクを直接共有することで非公式に共有できる状態（SNS 投稿・DM 等）。
- `private` へのオーナー以外のアクセスはステータス 404 を返す（存在を隠す）。
- フォーク（`forked_from` あり）のコンボも同じ visibility ルールで制御する。
- ノートも同じルールで制御する（コンボノート・起き攻めノート共通）。

---

## モックページ（Phase 1 参考実装）

`/mock/` 以下はモック専用。Phase 3 移行後に廃止予定。

| URL | 対応する正式 URL |
|---|---|
| `/mock/` | — （モック索引） |
| `/mock/character/[name]` | `/[character]` |
| `/mock/combo/[id]` | `/combo/[id]` |
| `/mock/combo/new`（廃止。入力はキャラハブのインラインエディタ） | `/combo/new` |
| `/mock/okizeme/` | `/okizeme`（未確定） |
| `/mock/okizeme/new` | `/okizeme/new` |
| `/mock/situation/[id]` | `/okizeme/[id]` （旧称 situation） |
| `/mock/situation/new` | `/okizeme/new` |
| `/mock/ender-class/list` | `/admin/ender-class/list`（未確定） |
| `/mock/admin/broken-list` | `/admin/broken-list` |
| `/mock/vs/` | `/vs`（未確定） |
| `/mock/vs/[slug]` | `/vs/[character]`（未確定） |
| `/mock/me/notes` | `/me/notes` |
| `/mock/me/notes/combos/[id]` | `/me/notes/combos/[id]` |
| `/mock/me/notes/okizeme/[id]` | `/me/notes/okizeme/[id]` |
