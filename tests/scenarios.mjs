// SF6 Combo Web — シナリオテスト
//
// 使い方:
//   1) 別ターミナルで `npm run dev`
//   2) `npm run test:scenarios`（別ポートなら BASE=http://localhost:4322 npm run test:scenarios）
//
// ユーザー動線ごとに実際のHTTPレスポンスと src/lib のロジックを検証する。
// 破壊的操作はしない（/api/vote はバリデーション拒否パスのみ叩く）。

import { readFileSync } from 'node:fs';

const BASE = process.env.BASE ?? 'http://localhost:4321';

let pass = 0, fail = 0, skip = 0;
const failures = [];
let currentScenario = '';

function scenario(name) {
  currentScenario = name;
  console.log(`\n\x1b[1m▶ ${name}\x1b[0m`);
}
function ok(label) { pass++; console.log(`  \x1b[32m✓\x1b[0m ${label}`); }
function ng(label, detail) {
  fail++;
  failures.push({ scenario: currentScenario, label, detail });
  console.log(`  \x1b[31m✗\x1b[0m ${label}\n      → ${detail}`);
}
function sk(label, why) { skip++; console.log(`  \x1b[33m-\x1b[0m ${label} (skip: ${why})`); }

function check(label, cond, detail = '') { cond ? ok(label) : ng(label, detail || '条件を満たしませんでした'); }

async function get(path, headers = {}) {
  const res = await fetch(BASE + path, { redirect: 'manual', headers });
  const body = await res.text();
  return { status: res.status, body, headers: res.headers };
}
const count = (html, re) => (html.match(re) ?? []).length;

// ────────────────────────────────────────────────────────────
// S1. 公開閲覧フロー（Phase 0 / Supabase 実データ）
// ────────────────────────────────────────────────────────────
scenario('S1 公開閲覧フロー: トップ → キャラ一覧 → コンボ詳細（Supabase実データ）');
{
  const top = await get('/');
  check('GET / が 200', top.status === 200, `status=${top.status}`);
  check('トップに「キャラクターを選択」見出しがある', top.body.includes('キャラクターを選択'));

  const charLinks = [...top.body.matchAll(/href="\/([A-Za-z0-9_%-]+)"/g)]
    .map(m => m[1])
    .filter(s => !['favicon.svg', 'mock'].includes(s));

  if (charLinks.length === 0) {
    sk('キャラページ遷移', 'トップにキャラリンクが0件（Supabase未接続 or combos が空）');
    sk('コンボ詳細ページ', '同上');
  } else {
    ok(`トップに ${charLinks.length} 件のキャラリンク`);
    const char = charLinks[0];
    const cp = await get(`/${char}`);
    check(`GET /${char} が 200`, cp.status === 200, `status=${cp.status}`);

    const comboIds = [...cp.body.matchAll(/href="\/combo\/(\d+)"/g)].map(m => m[1]);
    if (comboIds.length === 0) {
      sk('コンボ詳細ページ', `/${char} にコンボリンクが0件`);
    } else {
      ok(`/${char} に ${comboIds.length} 件のコンボリンク`);
      const cd = await get(`/combo/${comboIds[0]}`);
      check(`GET /combo/${comboIds[0]} が 200`, cd.status === 200, `status=${cd.status}`);
      check('YouTube 埋め込み iframe がある', /youtube(-nocookie)?\.com\/embed\//.test(cd.body),
        'embed URL が見つかりません');
      check('埋め込みURLに開始秒(start=)が含まれる', /embed\/[^"']*[?&]start=\d+/.test(cd.body),
        'start パラメータがありません（DATA.md の埋め込み仕様）');
      check('投票UIがある', /is_working|投票|vote/i.test(cd.body));
    }
  }

  const missing = await get('/combo/999999999');
  check('存在しないコンボIDでも500にならない', missing.status !== 500, `status=${missing.status}`);
  ok(`  (実際の応答: ${missing.status})`);
}

// ────────────────────────────────────────────────────────────
// S2. Wiki型キャラページ（モック / 最新の未コミット変更の中心）
// ────────────────────────────────────────────────────────────
scenario('S2 Wiki型キャラページ: 一覧・状況別の見出し・優先度・フィルタ・編集UI');
{
  const r = await get('/mock/character/rashid');
  check('GET /mock/character/rashid が 200', r.status === 200, `status=${r.status}`);
  const h = r.body;

  // 見出しは 中央 / 端 / インパクト / スタン / イウサール と、中央・端の下の場面の小見出し。
  // 各コンボ行は自分の見出しの下にあり、見出しの中は優先度の高い順に並ぶ
  const { LIST_SECTIONS, SCENES, PRIORITIES, FOLDED_PRIORITY, bucketKey, isSpecialStarter } =
    await import(new URL('../src/mock-data/rashid-starters.ts', import.meta.url).href);
  const allBuckets = LIST_SECTIONS.flatMap(s => (isSpecialStarter(s) ? [s] : SCENES.map(scene => bucketKey(s, scene))));
  // 開始タグの属性の並び。検索用の文字列（data-search）の値には > が入るので、引用符の中はまとめて読み飛ばす
  const ATTRS = '(?:[^>"]|"[^"]*")*';
  const listLayout = (html) => {
    const sections = [...html.matchAll(/<tbody class="combo-section-head"[^>]*data-head-section="([^"]+)"/g)].map(m => m[1]);
    const heads = [];
    const misplaced = [];
    const unsorted = [];
    const shownLow = [];
    let lastRank = 0;
    for (const m of html.matchAll(new RegExp(`<tbody class="combo-(?:section|scene)-head"${ATTRS}>|<tbody class="combo-group"${ATTRS}>`, 'g'))) {
      const attr = (name) => new RegExp(`${name}="([^"]+)"`).exec(m[0])?.[1];
      if (!m[0].includes('combo-group')) {
        if (attr('data-head-bucket')) heads.push(attr('data-head-bucket'));
        lastRank = 0;
        continue;
      }
      const id = attr('data-combo-id');
      const rank = PRIORITIES.indexOf(attr('data-priority'));
      if (attr('data-bucket') !== heads.at(-1)) misplaced.push(`${id}@${heads.at(-1)}`);
      if (rank < lastRank) unsorted.push(id);
      if (attr('data-priority') === FOLDED_PRIORITY && !/style="display:\s*none/.test(m[0])) shownLow.push(id);
      lastRank = rank;
    }
    return { sections, heads, misplaced, unsorted, shownLow };
  };
  const hub = listLayout(h);
  check(`大見出しが 中央 / 端 / インパクト / スタン / イウサール の順に並ぶ`,
    JSON.stringify(hub.sections) === JSON.stringify(LIST_SECTIONS), hub.sections.join(','));
  check(`見出し ${hub.heads.length}件が決まった順に並ぶ（空の見出しも受け皿として出す）`,
    JSON.stringify(hub.heads) === JSON.stringify(allBuckets), hub.heads.join(','));
  check('全コンボ行が自分の見出しの下にある', hub.misplaced.length === 0, hub.misplaced.join(' '));
  check('見出しの中は優先度の高い順に並ぶ', hub.unsorted.length === 0, hub.unsorted.join(' '));
  check('「あまり使わない」の行は最初は畳んである', hub.shownLow.length === 0, hub.shownLow.join(' '));
  check('大分類/小分類の見出し・名前変更・小分類追加・削除・空のドロップゾーンがない',
    !/combo-major-head|data-major=|data-minor=|btn-(major|minor)-(rename|delete)|btn-add-minor|drop-zone/.test(h),
    (h.match(/combo-major-head|data-major=|data-minor=|btn-(major|minor)-(rename|delete)|btn-add-minor|drop-zone/g) ?? []).slice(0, 5).join(' '));
  check('見出しごとに「＋」（その見出しに入る値でエディタを開く）がある',
    count(h, /class="btn-add-combo-bucket"/g) === allBuckets.length, `＋=${count(h, /class="btn-add-combo-bucket"/g)}`);
  check('見出しごとに「あまり使わない N件」の行がある',
    count(h, /<tbody class="combo-low-row"/g) === allBuckets.length, `行=${count(h, /<tbody class="combo-low-row"/g)}`);

  const groups = count(h, /class="combo-group"/g);
  check(`全コンボ行に優先度のバッジがある (${groups}件)`,
    count(h, /class="tag tag-priority-\d"/g) === groups, `バッジ=${count(h, /class="tag tag-priority-\d"/g)}`);
  check('優先度のチップが3つあり、効いていないチップ（画面端 / 画面中央 / DR始動 / 確反）がない',
    PRIORITIES.every(p => h.includes(`data-filter-priority="${p}"`)) && !/<button class="chip">/.test(h));
  const hasHitGaugeChips = (html) => ['CH', 'PC'].every(v => html.includes(`data-filter-hit="${v}"`))
    && ['ノーゲージ', 'OD', 'SA'].every(v => html.includes(`data-filter-gauge="${v}"`)) && !html.includes('data-filter-hit="通常"');
  check('ヒット状態（CH / PC）とゲージ（ノーゲージ / OD / SA）のチップがある', hasHitGaugeChips(h));
  const edits = count(h, /class="btn-edit"/g);
  const dels = count(h, /class="btn-delete"/g);
  const ups = count(h, /class="btn-upload"/g);
  const { ARCHIVER_COMBOS } = await import(new URL('../src/mock-data/rashid-archiver.ts', import.meta.url).href);
  const expectedGroups = 38 + ARCHIVER_COMBOS.length;
  check(`モックデータ${expectedGroups}件（手書き38 + archiver取り込み${ARCHIVER_COMBOS.length}）のコンボが全部描画される (combo-group=${groups})`, groups === expectedGroups, `combo-group=${groups}`);
  check('archiver取り込みの推定できなかった項目の一覧が出る', h.includes('archiver取り込み: 推定できなかった項目'));
  check(`各コンボ行に編集/削除ボタンが1組ずつ (edit=${edits}, delete=${dels})`,
    edits === groups && dels === groups, `groups=${groups} edit=${edits} delete=${dels}`);
  check(`アップロードボタンは共有済みを除いた行に出る (upload=${ups})`,
    ups > 0 && ups <= groups, `upload=${ups} groups=${groups}`);
  check('フィルタUI（始動技/自分のみ）があり、大分類/小分類の select はない',
    h.includes('id="filter-starter"') && h.includes('id="filter-self-only"') && !/id="filter-(major|minor)"/.test(h));
  check('D&D の並び替えハンドルがある', count(h, /class="row-drag-handle"/g) > 0);
  check('列表示切替メニューがある', h.includes('id="col-vis-toggle"') && h.includes('id="col-vis-menu"'));
  // コマンドを1行に収めるため、コンボ名・状況タグはコマンド欄の中でコマンドの後ろに続ける（タイトル・状況の列を作らない。
  // 同じ行に収まらないときだけ下に回るのは CSS の flex-wrap なので、ここでは並びだけ見る）
  const colHeads = (html) => [...(/<thead class="combo-col-head"[^>]*>([\s\S]*?)<\/thead>/.exec(html)?.[1] ?? '').matchAll(/<th[^>]*>([^<]+)<\/th>/g)].map(m => m[1]);
  const nameAfterCommand = (html) => html.split('<tbody class="combo-group"').slice(1)
    .every(g => g.indexOf('class="combo-line"') < g.indexOf('class="notation') && g.indexOf('class="notation') < g.search(/class="[^"]*col-title/));
  check('キャラハブの列はコマンド・ダメージ・〆分類・有利Fで、コンボ名はコマンドの後ろに続ける',
    colHeads(h).join() === 'コマンド,ダメージ,〆分類,有利F' && nameAfterCommand(h), colHeads(h).join());

  check('インラインエディタがホストされている',
    h.includes('id="inline-editor-host"') && h.includes('id="combo-form"'));
  check('保存先の選択肢が2つある（自分のメモ / アップロード）',
    h.includes('id="dest-personal"') && h.includes('id="dest-upload"'));
  check('重複確認モーダルがある', h.includes('id="dup-modal"'));
  // 新規は空で開く（見本の値を入れない）。編集のあとに新規を開いたときの初期化（comboEditorAPI.reset）は
  // JS なのでここでは見られない（docs/UI.md の手順でヘッドレス Edge で確かめる）
  const editorForm = h.slice(h.indexOf('id="combo-form"'), h.indexOf('id="dup-modal"'));
  const prefilled = editorForm.match(/<input\b[^>]*\svalue="[^"]+"|<option\b[^>]*\sselected/g) ?? [];
  check('インラインエディタの入力欄に初期値が入っていない（新規は空で開く）',
    editorForm.includes('id="combo-title"') && prefilled.length === 0,
    prefilled.join(' / ') || 'エディタのフォームが見つかりません');
  check('エディタに始動技・ヒット状態・位置・優先度の入力があり、大分類/小分類・登録・始動技種別はない',
    ['combo-starter', 'combo-hit-state', 'combo-position', 'combo-priority'].every(id => editorForm.includes(`id="${id}"`))
      && !/id="(cat-major|cat-minor|btn-save-minor|custom-minor-chips)"|始動技種別/.test(editorForm));
  // 分岐はルートを1本ずつ書く（ルートのカード・削除は JS で描くので、ここでは置き場と「＋ ルートを追加」・確認用ツリーだけ見る）
  check('エディタはルートを1本ずつ書く形（ルートの並び・「＋ ルートを追加」・まとめたツリー）で、「ここで分岐」のツリー編集はない',
    ['route-list', 'btn-add-route', 'tree-overview'].every(id => h.includes(`id="${id}"`))
      && !/id="(btn-add-sibling|btn-delete-node|focus-pane)"|ここで分岐/.test(h));
  check('エディタの「技名」は文字表記と同じ表（2MK → 2中K、DR → ラッシュ）で、昔の呼び方（しゃがみ中K・生ラッシュ）は無い',
    h.includes('"2MK":"2中K"') && h.includes('"DR":"ラッシュ"') && !/しゃがみ中K|生ラッシュ/.test(h));
  check('全コンボ行がリンク付きで詳細へ遷移できる',
    count(h, /href="\/mock\/combo\/c_\d+"/g) > 0,
    'コンボ詳細へのリンクがありません');

  // 公開一覧も同じ見出しでまとめる（公開コンボの無い見出しは出さない）
  const exploreHtml = (await get('/mock/explore/rashid')).body;
  const explore = listLayout(exploreHtml);
  check(`公開一覧の見出しもキャラハブと同じ順 (${explore.heads.length}件)`,
    explore.heads.length > 0 && explore.heads.every((b, i) => i === 0 || allBuckets.indexOf(explore.heads[i - 1]) < allBuckets.indexOf(b)),
    explore.heads.join(','));
  check('公開一覧の全コンボ行が自分の見出しの下にある', explore.misplaced.length === 0, explore.misplaced.join(' '));
  check('公開一覧の見出しの中も優先度の高い順で、「あまり使わない」は畳んである',
    explore.unsorted.length === 0 && explore.shownLow.length === 0, [...explore.unsorted, ...explore.shownLow].join(' '));
  check('公開一覧の並び順は「優先度順」が既定で、優先度・ヒット状態・ゲージのチップがある',
    /class="sort-btn sort-btn-active"[^>]*data-sort="priority"/.test(exploreHtml)
      && PRIORITIES.every(p => exploreHtml.includes(`data-filter-priority="${p}"`)) && hasHitGaugeChips(exploreHtml));
  check('公開一覧に「＋」は出ない', count(exploreHtml, /class="btn-add-combo-bucket"/g) === 0);
  check('公開一覧の列はコマンド・ダメージ・〆分類・有利F・スコアで、コンボ名と投稿者はコマンドの後ろに続ける',
    colHeads(exploreHtml).join() === 'コマンド,ダメージ,〆分類,有利F,スコア' && nameAfterCommand(exploreHtml), colHeads(exploreHtml).join());

  // 行の形はキャラハブと公開一覧で同じ（ComboRowCommand / ComboRowStats / ComboColumnMenu）
  const groupsOf = (html) => html.split('<tbody class="combo-group"').slice(1).map(g => g.slice(0, g.indexOf('</tbody>')));
  const comboIdOf = (g) => /data-combo-id="([^"]+)"/.exec(g)?.[1];
  // 検索の例（バックログの受け入れ:「スパイク」「236HK」「ミキサー」で当たる）。[検索語, 含む行, 件数まで同じか]。
  // 236HK は非公開の c_074（溜め236HK）だけが持つ。2中K は文字表記の呼び方（エディタの技名も同じ表）
  const { searchTermsOf, matchesSearch } = await import(new URL('../src/lib/combo-search.ts', import.meta.url).href);
  const searchCases = {
    キャラハブ: [['スパイク', ['c_001', 'c_005']], ['236HK', ['c_074'], true], ['ミキサー', ['c_001', 'c_005']],
      ['すぱいく', ['c_001', 'c_005']], ['2中K', ['c_001']], ['2MK>236LP', ['c_001', 'c_005']], ['〆分岐', ['c_005'], true]],
    公開一覧: [['スパイク', ['c_005']], ['236HK', [], true], ['ミキサー', ['c_005']], ['2中K', ['c_005']], ['doskonnbu', ['ax_eXUug9kjcVQ_01']]],
  };
  for (const [label, html] of [['キャラハブ', h], ['公開一覧', exploreHtml]]) {
    const rows = groupsOf(html);
    const noLink = rows.filter(g => !g.includes(`href="/mock/combo/${comboIdOf(g)}" class="combo-cmd-link"`));
    check(`${label}: コマンド自体が詳細へのリンクになっている（コンボ名を隠しても飛べる）`, noLink.length === 0, noLink.map(comboIdOf).join(' '));
    const branched = rows.filter(g => g.includes('class="branch-toggle"'));
    const lowToggle = branched.filter(g => g.indexOf('class="branch-toggle"') > g.indexOf('class="combo-sub"'));
    check(`${label}: 分岐の ▶ ルートボタン (${branched.length}件) はコマンドの段にある（コンボ名などを隠しても開ける）`,
      branched.length > 0 && lowToggle.length === 0, lowToggle.map(comboIdOf).join(' '));
    // CH/PC はカウンター・確反の見出しにしか入らない（sceneOf）。ルートの行のバッジは薄く出す（cmd-ghost）ので別のクラス列になる
    const hitBadge = /class="tag tag-hit tag-hit-(?:ch|pc)"/;
    const wrongHit = rows.filter(g => hitBadge.test(g) !== /data-bucket="[^"]*カウンター・確反"/.test(g));
    check(`${label}: CH/PC の行にだけヒット状態のバッジが出る (${rows.filter(g => hitBadge.test(g)).length}件)`,
      rows.some(g => hitBadge.test(g)) && wrongHit.length === 0, wrongHit.map(comboIdOf).join(' '));
    check(`${label}: ダメージ未入力は「0」ではなく「—」`,
      !/<span class="dmg"[^>]*>0<\/span>/.test(html) && /<span class="dmg dmg-empty"[^>]*>—<\/span>/.test(html));
    check(`${label}: 列表示メニューにコンボ名・状況・優先度・ダメージ・〆分類・有利Fがある`,
      ['title', 'situation', 'priority', 'damage', 'ender', 'frame'].every(k => html.includes(`data-col-vis="${k}"`)));
    // チップの絞り込み用に、行はヒット状態とルートのゲージ区分（分岐はルートごと）を持ち、ルートの行も区分を持つ
    const openTag = (g) => new RegExp(`^${ATTRS}`).exec(g)[0];
    const badAttr = rows.filter(g => !/\sdata-hit-state="(通常|CH|PC)"/.test(openTag(g)) || !/\sdata-gauges="(ノーゲージ|OD|SA)( (OD|SA))*"/.test(openTag(g)));
    const gaugesOf = (id) => /data-gauges="([^"]*)"/.exec(rows.find(g => comboIdOf(g) === id) ?? '')?.[1];
    check(`${label}: 全コンボ行にヒット状態とゲージ区分がある（c_005=ノーゲージ OD・c_006=OD SA・DR を含む c_004=OD）`,
      badAttr.length === 0 && gaugesOf('c_005') === 'ノーゲージ OD' && gaugesOf('c_006') === 'OD SA' && gaugesOf('c_004') === 'OD',
      [...badAttr.map(comboIdOf), `c_005=${gaugesOf('c_005')}`, `c_006=${gaugesOf('c_006')}`, `c_004=${gaugesOf('c_004')}`].join(' '));
    const childRows = html.match(new RegExp(`<tr class="combo-child-row"${ATTRS}>`, 'g')) ?? [];
    check(`${label}: 分岐のルートの行 (${childRows.length}件) にゲージ区分がある`,
      childRows.length > 0 && childRows.every(t => /data-gauge="(ノーゲージ|OD|SA)"/.test(t)));

    // フリーテキスト検索: 行とルートの行が検索用の文字列（data-search）を持つ。照合は絞り込み（combo-list-view.ts）と同じく、
    // ルートの行があればルートごとに見て、どれか1つが合えば行を出す
    check(`${label}: フィルタバーに検索欄と件数の表示がある`,
      new RegExp(`<input type="search" id="filter-text"${ATTRS}>`).test(html) && html.includes('id="filter-text-count"'));
    const searchAttr = (tag) => /\sdata-search="([^"]*)"/.exec(tag)?.[1]?.replaceAll('&#34;', '"').replaceAll('&#38;', '&');
    const routeSearches = (g) => [...g.matchAll(new RegExp(`<tr class="combo-child-row"(${ATTRS})>`, 'g'))].map(m => searchAttr(m[1]));
    const searchesOf = (g) => { const routes = routeSearches(g); return routes.length > 0 ? routes : [searchAttr(openTag(g))]; };
    const noSearch = rows.filter(g => !searchAttr(openTag(g)) || searchesOf(g).some(t => !t));
    check(`${label}: 全コンボ行と分岐のルートの行に検索用の文字列がある`, noSearch.length === 0, noSearch.map(comboIdOf).join(' '));
    const hits = (q) => rows.filter(g => searchesOf(g).some(t => matchesSearch(t, searchTermsOf(q)))).map(comboIdOf);
    for (const [q, want, exact = false] of searchCases[label]) {
      const got = hits(q);
      check(`${label}: 「${q}」で ${exact ? `${want.length}件（${want.join(' ') || 'なし'}）` : `${want.join(' ')} を含む一部の行`}に絞られる`,
        exact ? got.join(' ') === want.join(' ') : want.every(id => got.includes(id)) && got.length < rows.length,
        `${got.length}件: ${got.slice(0, 10).join(' ')}`);
    }
    // 分岐コンボは、合ったルートだけを濃く出す（c_006 の SA2 は3ルートのうち SA2締め だけ）
    const c006Routes = routeSearches(rows.find(g => comboIdOf(g) === 'c_006') ?? '').map(t => (matchesSearch(t, searchTermsOf('SA2')) ? 1 : 0)).join('');
    check(`${label}: 「SA2」は c_006 の3ルートのうち3本目（SA2締め）だけに合う`, c006Routes === '001', c006Routes);
  }
  const forkInActions = count(exploreHtml, /<td class="col-actions"[^>]*>\s*<button type="button" class="btn-fork"/g);
  check('公開一覧に投稿者の列が無く、全行の fork が操作の列にある',
    !exploreHtml.includes('col-poster') && forkInActions === groupsOf(exploreHtml).length, `fork=${forkInActions}`);

  const unknown = await get('/mock/character/unknownchar');
  check('未知のキャラ名は /mock/ へリダイレクト',
    unknown.status === 302 && unknown.headers.get('location') === '/mock/',
    `status=${unknown.status} location=${unknown.headers.get('location')}`);
}

// ────────────────────────────────────────────────────────────
// S3. コンボ詳細（モック）: 単一ルート vs 分岐ツリー
// ────────────────────────────────────────────────────────────
scenario('S3 コンボ詳細: 単一ルートと分岐ツリーの描画差');
{
  const single = await get('/mock/combo/c_001');
  const branch = await get('/mock/combo/c_006');
  check('GET /mock/combo/c_001 が 200', single.status === 200, `status=${single.status}`);
  check('GET /mock/combo/c_006 が 200', branch.status === 200, `status=${branch.status}`);

  // 上段のルート一覧（1ルート1行）と、下段のルート別パネル（最初のルートだけ表示）。ツリー表示は無い
  const rowsOf = (html) => [...html.matchAll(/data-route-row="([^"]+)"/g)].map(m => m[1]);
  const panelsOf = (html) => [...html.matchAll(/<section[^>]*data-route-panel="([^"]+)"[^>]*>/g)].map(m => ({ id: m[1], hidden: /\shidden/.test(m[0]) }));
  const bRows = rowsOf(branch.body);
  const bPanels = panelsOf(branch.body);
  check('c_006: ルート一覧に3行、下段に3パネルが同じ順で並ぶ',
    bRows.join(',') === 'n_c006_a,n_c006_b1,n_c006_b2' && bPanels.map(p => p.id).join(',') === bRows.join(','),
    `rows=${bRows.join(',')} panels=${bPanels.map(p => p.id).join(',')}`);
  check('c_006: 最初のルートだけ表示し、ほかは hidden',
    bPanels.map(p => (p.hidden ? 0 : 1)).join('') === '100', bPanels.map(p => (p.hidden ? 0 : 1)).join(''));
  check('c_001（分岐なし）: ルート1行・パネル1つ', rowsOf(single.body).length === 1 && panelsOf(single.body).length === 1);
  check('ツリー表示とルート別の大きなカードの見出しが無い',
    !/ctree-/.test(branch.body) && !branch.body.includes('ルートの詳細'));
  check('分岐コンボの下段は共通部分を薄く（ゴースト）出す', /cmd-ghost/.test(branch.body));
  check('葉ごとの投票バーが出る（共有のみ）', count(branch.body, /class="vote-bar"/g) === 3 && !/class="vote-bar"/.test(single.body));
  check('自分のメモ（c_001）には編集提案を出さず、共有（c_006）には出す',
    !single.body.includes('編集提案') && branch.body.includes('編集提案'));
  // #葉ID でのルート選択はクライアントのスクリプト（バンドルされるので HTML には出ない）。ここではリンク側を見る
  const hubHtml = (await get('/mock/character/rashid')).body;
  check('キャラハブの起き攻めパネルの「詳しくは」がそのルートの #葉ID を指す',
    hubHtml.includes('href="/mock/combo/c_006#n_c006_b2"') && !hubHtml.includes('#combo-okizeme'));
  const noVideo = await get('/mock/combo/c_003');
  check('動画なし・分岐なし（c_003）でもルート一覧とパネルが出る',
    noVideo.status === 200 && !/youtube\.com\/embed/.test(noVideo.body) && rowsOf(noVideo.body).length === 1 && panelsOf(noVideo.body).length === 1);
  check('youtubeId を持つ c_001 に開始秒つきの埋め込みが出る',
    /youtube\.com\/embed\/dQw4w9WgXcQ\?start=12/.test(single.body), '埋め込みURLが見つかりません');
  check('動画のあるコンボにリピートのトグル（既定10秒・区間表示）が出て、ルート行が開始秒を持つ',
    /id="repeat-toggle"/.test(single.body) && /id="repeat-len"[^>]*value="10"/.test(single.body)
      && /0:12〜0:22/.test(single.body) && /data-route-row="[^"]+"[^>]*data-start-sec="12"/.test(single.body));
  check('動画のないコンボ（c_006）にはリピートのトグルが出ない', !/id="repeat-toggle"/.test(branch.body));
  check('c_001 の YouTube ボタンが実URLを指す',
    /youtube\.com\/watch\?v=dQw4w9WgXcQ(&|&amp;|&#38;)t=12s/.test(single.body), 'ダミーリンクのままです');
  check('youtubeId を持たない c_006 には埋め込みもボタンも出ない',
    !/youtube\.com\/embed/.test(branch.body) && !/▶ YouTube/.test(branch.body),
    '不要な埋め込み/ボタンが出ています');

  const missing = await get('/mock/combo/c_999');
  check('存在しないコンボIDで500にならない', missing.status !== 500, `status=${missing.status}`);
  ok(`  (実際の応答: ${missing.status})`);
}

// ────────────────────────────────────────────────────────────
// S4. マイノート動線
// ────────────────────────────────────────────────────────────
scenario('S4 マイノート: 一覧 → コンボノート / 起き攻めノート');
{
  const list = await get('/mock/me/notes');
  check('GET /mock/me/notes が 200', list.status === 200, `status=${list.status}`);
  check('コンボノートと起き攻めノートが両方並ぶ',
    list.body.includes('基本コンボまとめ') && list.body.includes('弱イーグル後の択まとめ'));
  check('visibility バッジが表示される',
    /public|private|unlisted|公開|非公開|限定/.test(list.body));

  const cn = await get('/mock/me/notes/combos/note_c_001');
  check('コンボノート詳細が 200', cn.status === 200, `status=${cn.status}`);
  check('ノートに登録した3件のコンボが並ぶ',
    ['c_001', 'c_002', 'c_005'].every(id => cn.body.includes(id)),
    'itemIds のコンボが揃っていません');

  const on = await get('/mock/me/notes/okizeme/note_o_001');
  check('起き攻めノート詳細が 200', on.status === 200, `status=${on.status}`);

  const bad = await get('/mock/me/notes/combos/note_x_999');
  check('存在しないノートIDで500にならない', bad.status !== 500, `status=${bad.status}`);
  ok(`  (実際の応答: ${bad.status})`);
}

// ────────────────────────────────────────────────────────────
// S5. 起き攻め / シチュエーション
// ────────────────────────────────────────────────────────────
scenario('S5 起き攻め: 状況詳細と新規作成フォーム');
{
  const s = await get('/mock/situation/s_001');
  check('GET /mock/situation/s_001 が 200', s.status === 200, `status=${s.status}`);
  check('〆分類（弱イーグル）に紐づく状況が表示される', s.body.includes('イーグル'));

  const sn = await get('/mock/situation/new');
  const on = await get('/mock/okizeme/new');
  check('状況の新規作成フォームが 200', sn.status === 200, `status=${sn.status}`);
  check('起き攻めの新規作成フォームが 200', on.status === 200, `status=${on.status}`);
  check('新規フォームに入力欄がある', /<(form|input|select|textarea)/.test(on.body));
}

// ────────────────────────────────────────────────────────────
// S6. 管理系
// ────────────────────────────────────────────────────────────
scenario('S6 管理: 〆分類一覧 / 現ver不可リスト');
{
  const ec = await get('/mock/ender-class/list');
  check('GET /mock/ender-class/list が 200', ec.status === 200, `status=${ec.status}`);
  const shown = ['弱イーグルスパイク〆', '強イーグルスパイク〆', 'ODスピニングミキサー〆', '投げ後']
    .filter(n => ec.body.includes(n));
  check(`ENDER_CLASSES が表示される (${shown.length}/4 サンプル一致)`, shown.length === 4,
    `不足: ${['弱イーグルスパイク〆','強イーグルスパイク〆','ODスピニングミキサー〆','投げ後'].filter(n => !ec.body.includes(n))}`);

  const bl = await get('/mock/admin/broken-list');
  check('GET /mock/admin/broken-list が 200', bl.status === 200, `status=${bl.status}`);
  check('「現ver不可」票を集計した行が出る', /不可|broken/i.test(bl.body));
}

// ────────────────────────────────────────────────────────────
// S7. 投票API（バリデーションのみ / 実投票はしない）
// ────────────────────────────────────────────────────────────
scenario('S7 投票API: 不正リクエストの拒否（DBへの書き込みは行わない）');
{
  const post = async (payload, raw = false) => {
    const res = await fetch(BASE + '/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: raw ? payload : JSON.stringify(payload),
    });
    return { status: res.status, body: await res.text() };
  };

  const cases = [
    ['空ボディ', '', true],
    ['壊れたJSON', '{oops', true],
    ['combo_id 欠落', { is_working: true }],
    ['combo_id が文字列', { combo_id: '1', is_working: true }],
    ['is_working 欠落', { combo_id: 1 }],
    ['is_working が文字列', { combo_id: 1, is_working: 'yes' }],
  ];
  for (const [label, payload, raw] of cases) {
    const r = await post(payload, raw);
    check(`${label} → 400`, r.status === 400, `status=${r.status} body=${r.body.slice(0, 120)}`);
  }

  const g = await fetch(BASE + '/api/vote');
  check('GET /api/vote は許可されない', g.status !== 200, `status=${g.status}`);
  ok(`  (実際の応答: ${g.status})`);
}

// ────────────────────────────────────────────────────────────
// S8. ドメインロジック（src/lib）
// ────────────────────────────────────────────────────────────
scenario('S8 ロジック: Wilson Score / ゲージ計算 / 表記変換 / 一覧の検索 / ルート↔ツリー');
{
  const lib = (f) => new URL(`../src/lib/${f}`, import.meta.url).href;
  const { wilsonScore, scoreLabel } = await import(lib('wilson.ts'));
  const { calcGaugesFromSegs, parseTokens } = await import(lib('gauges.ts'));
  const { numpadToArrows, readNotationPrefs, formatToken, recipeSteps } = await import(lib('notation.ts'));
  const { getMoveTable, getRecipeTable } = await import(lib('movenames.ts'));

  // Wilson
  check('投票0件はスコア0', wilsonScore(0, 0) === 0, `=${wilsonScore(0, 0)}`);
  check('全員good(10/10)でも1未満（少数票を過信しない）',
    wilsonScore(10, 10) > 0.6 && wilsonScore(10, 10) < 1, `=${wilsonScore(10, 10)}`);
  check('同じ勝率なら票数が多いほど高スコア',
    wilsonScore(100, 100) > wilsonScore(10, 10), `100件=${wilsonScore(100,100)} 10件=${wilsonScore(10,10)}`);
  check('全員badでスコア0', wilsonScore(0, 20) === 0, `=${wilsonScore(0, 20)}`);
  check('スコアは0〜1に収まる',
    [[3,7],[1,2],[50,60],[0,1]].every(([p, t]) => { const s = wilsonScore(p, t); return s >= 0 && s <= 1; }));
  check('未投票ラベルは「未検証」', scoreLabel(0, 0).includes('未検証'), scoreLabel(0, 0));
  check('高スコアは「高信頼」', scoreLabel(0.85, 30).includes('高信頼'), scoreLabel(0.85, 30));
  check('中スコアは「確認中」', scoreLabel(0.65, 10).includes('確認中'), scoreLabel(0.65, 10));
  check('低スコアは「要注意」', scoreLabel(0.35, 5).includes('要注意'), scoreLabel(0.35, 5));

  // ゲージ
  check('トークン分割', JSON.stringify(parseTokens('2MK > 236LP >  ')) === '["2MK","236LP"]',
    JSON.stringify(parseTokens('2MK > 236LP >  ')));
  const g1 = calcGaugesFromSegs(['2MK > 236LP']);
  check('通常技のみならゲージ消費0', g1.saGauge === 0 && g1.dGauge === 0, JSON.stringify(g1));
  const g2 = calcGaugesFromSegs(['DR > 2MP > 236PP']);
  check('DR(3)+OD技(2) でドライブ5', g2.dGauge === 5, JSON.stringify(g2));
  const g3 = calcGaugesFromSegs(['2MK', '236236P']);
  check('SA3 で saGauge=3', g3.saGauge === 3, JSON.stringify(g3));
  const g4 = calcGaugesFromSegs(['CR > 5MP', 'DI > 214214K']);
  check('CR(1)+DI(1)=2, SA2 で saGauge=2', g4.dGauge === 2 && g4.saGauge === 2, JSON.stringify(g4));
  const g5 = calcGaugesFromSegs(['214KK > 236236K']);
  check('OD(KK)=2 と SA1 を同時に拾う', g5.dGauge === 2 && g5.saGauge === 1, JSON.stringify(g5));
  check('分岐パス（複数セグメント）を合算する',
    calcGaugesFromSegs(['DR > 2MP', '236PP']).dGauge === 5,
    JSON.stringify(calcGaugesFromSegs(['DR > 2MP', '236PP'])));
  const g6 = calcGaugesFromSegs(['6KK > 5HK > 236PP']);
  const g7 = calcGaugesFromSegs(['66 > 溜めODワール > 5MK > 214HK > 6KK > j.MK']);
  check('6KK（フリップ）は OD 技に数えず、「溜めODワール」は OD 技（Dゲージ2）に数える',
    g6.dGauge === 2 && g7.dGauge === 2, JSON.stringify({ g6, g7 }));
  const { gaugeClassFromSegs, gaugeClassesOf } = await import(lib('gauges.ts'));
  check('ゲージ区分: 通常技のみ=ノーゲージ / DR=OD / SA込み=SA',
    gaugeClassFromSegs(['2MK > 236LP']) === 'ノーゲージ' && gaugeClassFromSegs(['DR > 5HP']) === 'OD'
      && gaugeClassFromSegs(['DR > 5HP', '214214K']) === 'SA',
    ['2MK > 236LP', 'DR > 5HP', 'DR > 5HP > 214214K'].map(s => gaugeClassFromSegs([s])).join(' / '));
  const routeClasses = gaugeClassesOf([['DR > 5HP', '214214K'], ['2MK > 214LK'], ['2MK', '236PP'], ['2MK > 236LP']].map(pathSegments => ({ pathSegments })));
  check('コンボのゲージ区分はルートごとの区分を ノーゲージ / OD / SA の順に重複なく並べる',
    routeClasses.join(' ') === 'ノーゲージ OD SA', routeClasses.join(' '));

  // 始動技・ヒット状態・位置・優先度（手書きは rashid.ts を文字列で、取り込みは生成物を読む）
  const data = (f) => new URL(`../src/mock-data/${f}`, import.meta.url);
  const { STARTERS, HIT_STATES, POSITIONS, PRIORITIES, inferStarter, isSpecialStarter, sectionOf, sceneOf, bucketOf, bucketPreset, positionTagOf } =
    await import(data('rashid-starters.ts').href);
  const { ARCHIVER_COMBOS } = await import(data('rashid-archiver.ts').href);
  const handSrc = readFileSync(data('rashid.ts'), 'utf8');
  const handCombos = handSrc.slice(handSrc.indexOf('export const COMBOS'), handSrc.indexOf('export const KNOCKDOWN_SITUATIONS'));
  const handAttrs = [...handCombos.matchAll(/starter: '([^']*)', hitState: '([^']*)', position: '([^']*)', priority: '([^']*)'/g)]
    .map(m => ({ starter: m[1], hitState: m[2], position: m[3], priority: m[4] }));
  const allAttrs = [...handAttrs, ...ARCHIVER_COMBOS];
  const handCount = (handCombos.match(/^\s{4}id: 'c_/gm) ?? []).length;
  const validAttrs = (a) => STARTERS.includes(a.starter) && HIT_STATES.includes(a.hitState) && POSITIONS.includes(a.position) && PRIORITIES.includes(a.priority);
  check(`全コンボに始動技・ヒット状態・位置・優先度が入っている（手書き ${handAttrs.length}/${handCount}・取り込み ${ARCHIVER_COMBOS.length}）`,
    handAttrs.length === handCount && allAttrs.every(validAttrs),
    allAttrs.filter(a => !validAttrs(a)).map(a => JSON.stringify(a)).join(' '));
  const anywhere = allAttrs.filter(a => a.position === 'どこでも');
  check(`位置が「どこでも」(${anywhere.length}件) はインパクト・スタン・イウサールだけ`,
    anywhere.every(a => isSpecialStarter(a.starter)), anywhere.filter(a => !isSpecialStarter(a.starter)).map(a => JSON.stringify(a)).join(' '));

  // 一覧の見出しの決め方
  const attrs = (starter, hitState, position) => ({ starter, hitState, position });
  for (const [a, want] of [
    [attrs('2MP', '通常', '中央'), '中央/通常'],
    [attrs('DR', '通常', '端'), '端/ラッシュ'],
    [attrs('j.HK', '通常', '中央'), '中央/飛び'],
    [attrs('DR', 'PC', '端'), '端/カウンター・確反'],
    [attrs('5HK', 'CH', '中央'), '中央/カウンター・確反'],
    [attrs('インパクト', '通常', '端'), 'インパクト'],
    [attrs('イウサール', '通常', 'どこでも'), 'イウサール'],
    [attrs('2MK', '通常', 'どこでも'), '中央/通常'],
  ]) {
    check(`見出し: ${a.starter}/${a.hitState}/${a.position} → ${want}`, bucketOf(a) === want, bucketOf(a));
  }
  check('見出しの場面は小見出しの無い大見出しでは null', sceneOf(attrs('スタン', '通常', 'どこでも')) === null && sectionOf(attrs('スタン', '通常', 'どこでも')) === 'スタン');
  check('「＋」の初期値: 位置と、ラッシュ=DR・飛び=j.HK・カウンター=CH・インパクト=その始動技',
    JSON.stringify(['端/通常', '中央/ラッシュ', '端/飛び', '中央/カウンター・確反', 'インパクト'].map(bucketPreset)) === JSON.stringify([
      { position: '端' }, { position: '中央', starter: 'DR' }, { position: '端', starter: 'j.HK' },
      { position: '中央', hitState: 'CH' }, { position: 'どこでも', starter: 'インパクト' },
    ]), JSON.stringify(['端/通常', '中央/ラッシュ', '端/飛び', '中央/カウンター・確反', 'インパクト'].map(bucketPreset)));
  check('位置のタグはインパクトなどの行で、位置が決まっているものだけ',
    positionTagOf(attrs('インパクト', '通常', '端')) === '端' && positionTagOf(attrs('インパクト', '通常', 'どこでも')) === null
      && positionTagOf(attrs('2MP', '通常', '端')) === null);
  check('始動技の推定: 5HK(CH) → 5HK / CH、214214K → SA2、リストに無い技は null',
    JSON.stringify([inferStarter('5HK(CH) > DR'), inferStarter('214214K > 2HP'), inferStarter('66 > 2HP')])
      === '[{"starter":"5HK","hitState":"CH"},{"starter":"SA2","hitState":"通常"},{"starter":null,"hitState":"通常"}]',
    JSON.stringify([inferStarter('5HK(CH) > DR'), inferStarter('214214K > 2HP'), inferStarter('66 > 2HP')]));

  // 表記変換
  check('623HP → →↓↘HP', numpadToArrows('623HP') === '→↓↘HP', numpadToArrows('623HP'));
  check('2MK > 214214P を変換', numpadToArrows('2MK > 214214P') === '↓MK > ↓↙←↓↙←P',
    numpadToArrows('2MK > 214214P'));
  check('5(ニュートラル)は省略される', numpadToArrows('5HK') === 'HK', numpadToArrows('5HK'));
  check('OD技(PP/KK)も変換対象', numpadToArrows('236PP') === '↓↘→PP', numpadToArrows('236PP'));
  check('ボタンを伴わない数字は変換しない', numpadToArrows('DR') === 'DR' && numpadToArrows('x3') === 'x3',
    `${numpadToArrows('DR')} / ${numpadToArrows('x3')}`);

  // 表記設定（localStorage の sf6-style / sf6-dir / sf6-name）
  const storage = (items) => ({ getItem: (k) => items[k] ?? null });
  const prefsOf = (items) => JSON.stringify(readNotationPrefs(storage(items)));
  check('表記設定の既定は 文字 / 数字 / コマンド', prefsOf({}) === '{"style":"text","dir":"numpad","name":"command"}', prefsOf({}));
  check('保存済みの チップ / 矢印 / 技名 を読む',
    prefsOf({ 'sf6-style': 'chip', 'sf6-dir': 'arrows', 'sf6-name': 'name' }) === '{"style":"chip","dir":"arrows","name":"name"}',
    prefsOf({ 'sf6-style': 'chip', 'sf6-dir': 'arrows', 'sf6-name': 'name' }));
  check('想定外の表示は文字扱い', readNotationPrefs(storage({ 'sf6-style': 'x' })).style === 'text', prefsOf({ 'sf6-style': 'x' }));
  check('想定外の値はコマンド扱い（以前エディタの方向トグルで sf6-name に入った "arrows" など）',
    readNotationPrefs(storage({ 'sf6-name': 'arrows' })).name === 'command', prefsOf({ 'sf6-name': 'arrows' }));
  const rashid = getMoveTable('Rashid');
  const arrowsName = { dir: 'arrows', name: 'name' };
  check('技名モード: 技名テーブルにある技は技名で出す（236LP → 弱ミキサー）',
    formatToken('236LP', arrowsName, rashid) === '弱ミキサー', formatToken('236LP', arrowsName, rashid));
  check('技名モード: テーブルにない通常技は方向だけ変換する（2MK → ↓MK）',
    formatToken('2MK', arrowsName, rashid) === '↓MK', formatToken('2MK', arrowsName, rashid));
  const numpadName = { dir: 'numpad', name: 'name' };
  for (const [tok, want] of [
    ['236LP or 236MP', '弱ミキサー or 中ミキサー'],
    ['236K(最大溜め)', 'ワール(最大溜め)'],
    ['溜め236HK', '溜め大ワール'],
    ['214MK(CH)', '中スパイク(CH)'],
    ['j.214KK', 'ODスカイハイ'],
    ['5LP or 5LK', '5LP or 5LK'],
  ]) {
    const got = formatToken(tok, numpadName, rashid);
    check(`技名モード: 語が付いたトークンはコマンド部分だけ置き換える（${tok} → ${want}）`, got === want, got);
  }
  check('技名モード: 語が付いたトークンの残ったコマンドは方向を変換する',
    formatToken('236LP or 2MK', arrowsName, rashid) === '弱ミキサー or ↓MK', formatToken('236LP or 2MK', arrowsName, rashid));
  check('コマンドモードでは技名にしない',
    formatToken('236LP', { dir: 'numpad', name: 'command' }, rashid) === '236LP',
    formatToken('236LP', { dir: 'numpad', name: 'command' }, rashid));

  // 文字表記（doskonnbu の動画の字幕の書き方）
  const recipeTable = getRecipeTable('Rashid');
  for (const [inputs, want] of [
    ['2MP > 5LK > 214LK', '2中P > 弱K > 弱スパイク'],
    ['2MK > CR > 5MK', '2中K > キャンセルラッシュ立中K'],
    ['DR > 5LP > 5MP > 214MK', 'ラッシュ弱P > 中P > 中スパイク'],
    ['5LK > CR > 5LP > 5MK', '弱K > キャンセルラッシュ弱P > 立中K'],
    ['中大TC > 236LP > 6MP > 214LP>4K > j.HK', '中大TC > 弱ミキサー > 前中P > 弱サイクロンストローク > J大K'],
    ['6MP > 214LP > 4K', '前中P > 弱サイクロンストローク'],
    ['6MP > 214LP>6K>K', '前中P > 弱サイクロンネイル'],
    ['66 > 6P > LPLK', 'スライディング > 投げ'],
    ['236K(最大溜め) > 236PP > j.214KK', '最大溜めワール > ODミキサー > ODスカイハイ'],
    ['5LP(CH) > 236236K', '弱P(CH) > SA1'],
    ['236LP or 236MP', '弱ミキサー or 中ミキサー'],
    ['214LK > 2MP(持続当て)', '弱スパイク > 2中P持続当て'],
    ['5MK > (66 > LPLK) or 6HP or (66 > 2LK)', '立中K > (前ステ > 投げ) or 中段 or (前ステ > 小足)'],
    ['前ジャンプ > J.HK > 微歩き', '前ジャンプ > J大K > 微歩き'],
  ]) {
    const got = recipeSteps(inputs, recipeTable).join(' > ');
    check(`文字表記: ${inputs} → ${want}`, got === want, got);
  }
  check('文字表記: 空の入力は手順なし', recipeSteps('', recipeTable).length === 0);

  // 一覧のフリーテキスト検索（行に載せる文字列と照合）
  const { normalizeSearch, searchTermsOf, matchesSearch, comboSearchTexts } = await import(lib('combo-search.ts'));
  check('検索: 全角/半角・大文字/小文字・ひらがな/カタカナの違いを無視する（２３６ＨＫ → 236hk、すぱいく・ｽﾊﾟｲｸ → スパイク）',
    normalizeSearch('２３６ＨＫ') === '236hk' && normalizeSearch('すぱいく') === 'スパイク' && normalizeSearch('ｽﾊﾟｲｸ') === 'スパイク',
    [normalizeSearch('２３６ＨＫ'), normalizeSearch('すぱいく'), normalizeSearch('ｽﾊﾟｲｸ')].join(' / '));
  check('検索: 入力は空白（全角を含む）で語に分け、空白だけなら語なし',
    JSON.stringify(searchTermsOf(' 弱スパイク　236HK ')) === '["弱スパイク","236hk"]' && searchTermsOf('　 ').length === 0,
    JSON.stringify(searchTermsOf(' 弱スパイク　236HK ')));
  const searchRoute = (fullInputs, leaf) => ({ leaf, fullInputs, pathSegments: [fullInputs] });
  const searchTexts = comboSearchTexts({ title: '基本コンボ', sourceType: 'shared', ownerLabel: 'doskonnbu' }, [
    searchRoute('2MK > 236LP > 214LK', { routeLabel: '弱イーグル〆ルート', situationTags: ['起き攻め'] }),
    searchRoute('DR > 5HP > 214214K', { condition: '画面端が近い場合' }),
  ], recipeTable);
  // 2ルートのどちらに合うか（1=合う）
  const routeHits = (q) => searchTexts.routes.map(t => (matchesSearch(t, searchTermsOf(q)) ? 1 : 0)).join('');
  for (const [q, want, why] of [
    ['236LP', '10', 'コマンド'],
    ['2MK>236LP', '10', 'コマンドを続けて打つ'],
    ['2MK>214LK', '00', '続けたコマンドは並びどおりのときだけ'],
    ['2mk 214lk', '10', '2語はどちらも入っているルートだけ'],
    ['スパイク', '10', '文字表記の呼び方'],
    ['ラッシュ大P', '01', '文字表記の呼び方（ラッシュは次の技と続ける）'],
    ['2中K', '10', '文字表記の呼び方（通常技）'],
    ['しゃがみ中K', '00', 'エディタの技名は文字表記と同じ表なので、昔の呼び方では当たらない'],
    ['イーグル', '10', 'ルート名'],
    ['画面端', '01', '条件'],
    ['起き攻め', '10', '状況タグ'],
    ['基本', '11', 'コンボ名はどのルートでも'],
    ['doskonnbu', '11', '出典'],
    ['236HK', '00', '無いコマンド'],
    ['', '11', '空なら全部'],
  ]) {
    check(`検索: 「${q}」→ ルートごとに ${want}（${why}）`, routeHits(q) === want, routeHits(q));
  }
  check('検索: 行の文字列は全ルートの語を持つ（ルートの行が無い行で使う）',
    matchesSearch(searchTexts.group, searchTermsOf('2中K ラッシュ')), searchTexts.group);
  const personal = comboSearchTexts({ title: 'メモ', sourceType: 'personal', ownerLabel: '（あなた）' }, [searchRoute('2MK', {})], recipeTable);
  check('検索: 自分のコンボは出典（一覧に出さない投稿者名）で当たらない', !matchesSearch(personal.group, searchTermsOf('あなた')), personal.group);

  // ルートの並び ↔ 分岐ツリー（エディタはルートを1本ずつ書き、保存時にツリーへまとめる）
  const { routesToTree, treeToRoutes, findPrefixRoutes } = await import(lib('routes.ts'));
  const { COMBOS } = await import(data('rashid.ts').href);
  // 区切り（各ノードの segment のトークン）と葉の内容だけを比べる。途中の分岐点の id は振り直すので見ない
  const shapeOf = (node) => node.children?.length
    ? { seg: parseTokens(node.segment), children: node.children.map(shapeOf) }
    : { seg: parseTokens(node.segment), leaf: (({ segment, children, ...leaf }) => leaf)(node) };
  const branched = COMBOS.filter(c => c.root.children?.length);
  // 手書きのツリーも自動でまとめた形にそろえてある（c_013・c_030 は 2026-11-07 にそろえた）。エディタで保存しても区切りは変わらない
  const notBack = branched.filter(c => JSON.stringify(shapeOf(routesToTree(treeToRoutes(c.root), c.root.id))) !== JSON.stringify(shapeOf(c.root)));
  check(`ルート↔ツリー: 分岐コンボ ${branched.length}件すべて（c_005・c_006・2段の c_030・同じコマンドが2本ある c_031 など）がルートの並びから元のツリーに戻る`,
    branched.length > 0 && branched.some(c => c.id === 'c_006') && notBack.length === 0, notBack.map(c => c.id).join(', '));
  // ルートを選ぶ条件（ヒット時 / ガード時・遠距離 / 近距離）は状況タグではなく condition に書く（2026-11-07）
  const condWords = ['ヒット時', 'ガード時', '遠距離', '近距離'];
  const condAsTag = branched.flatMap(c => treeToRoutes(c.root).filter(r => r.leaf.situationTags?.some(t => condWords.includes(t))).map(() => c.id));
  check('ルートを選ぶ条件（ヒット時 / ガード時・遠距離 / 近距離）は状況タグに無く、condition に入っている',
    condAsTag.length === 0 && branched.filter(c => treeToRoutes(c.root).some(r => condWords.includes(r.leaf.condition))).length >= 4,
    condAsTag.join(', '));
  const routesNotBack = branched.filter(c => JSON.stringify(treeToRoutes(routesToTree(treeToRoutes(c.root), c.root.id))) !== JSON.stringify(treeToRoutes(c.root)));
  check(`ルート↔ツリー: 分岐コンボ ${branched.length}件すべてで、ツリーにまとめてもルートの並び（コマンドと葉）は変わらない`,
    routesNotBack.length === 0, routesNotBack.map(c => c.id).join(', '));
  const c006 = treeToRoutes(COMBOS.find(c => c.id === 'c_006').root);
  check('ルート↔ツリー: c_006 は3ルート（フルコマンドと葉の id）',
    c006.map(r => `${r.inputs}|${r.leaf.id}`).join(' / ')
      === '5HK(CH) > DR > 5HP > 2MK > 214LK|n_c006_a / 5HK(CH) > DR > 5HP > 236PP > 5HP > 214HK|n_c006_b1 / 5HK(CH) > DR > 5HP > 236PP > 214214K|n_c006_b2',
    c006.map(r => `${r.inputs}|${r.leaf.id}`).join(' / '));
  const single = routesToTree([{ inputs: '2MK > 236LP', leaf: { id: 'n_x', damage: 1000 } }], 'n_root');
  check('ルート↔ツリー: 1本だけなら葉がそのまま根になる（id は葉の id）',
    single.id === 'n_x' && single.segment === '2MK > 236LP' && !single.children && single.damage === 1000, JSON.stringify(single));
  const forked = routesToTree([
    { inputs: '2MK > 236LP > 214LK', leaf: { id: 'a' } },
    { inputs: 'DR > 5HP', leaf: { id: 'b' } },
    { inputs: '2MK>236LP>236PP', leaf: { id: 'c' } },
  ], 'r');
  check('ルート↔ツリー: 先頭から違うルートは根の segment が空、子は最初に出てくる順',
    JSON.stringify(shapeOf(forked)) === JSON.stringify({ seg: [], children: [
      { seg: ['2MK', '236LP'], children: [{ seg: ['214LK'], leaf: { id: 'a' } }, { seg: ['236PP'], leaf: { id: 'c' } }] },
      { seg: ['DR', '5HP'], leaf: { id: 'b' } },
    ] }), JSON.stringify(shapeOf(forked)));
  const prefixRoutes = [
    { inputs: '2MK > 236LP > 214LK', leaf: { id: 'long' } },
    { inputs: '2MK > 236LP', leaf: { id: 'short' } },
  ];
  const prefixTree = routesToTree(prefixRoutes, 'r');
  check('ルート↔ツリー: 別のルートの途中で終わるルートは segment が空の葉になり、ルートに戻すと同じコマンド',
    prefixTree.segment === '2MK > 236LP' && prefixTree.children?.map(c => `${c.leaf ?? c.id}:${c.segment}`).join(' ') === 'long:214LK short:'
      && treeToRoutes(prefixTree).map(r => r.inputs).join(' / ') === '2MK > 236LP > 214LK / 2MK > 236LP',
    JSON.stringify(prefixTree));
  check('ルート↔ツリー: 別のルートの途中で終わるルートを見つける（エディタの警告用。同じコマンド同士は条件違いとして含めない）',
    JSON.stringify(findPrefixRoutes(prefixRoutes)) === '[{"short":1,"long":0}]'
      && findPrefixRoutes([{ inputs: '2MK', leaf: { id: 'a' } }, { inputs: '2MK', leaf: { id: 'b' } }]).length === 0
      && findPrefixRoutes(c006).length === 0,
    JSON.stringify(findPrefixRoutes(prefixRoutes)));
  const twins = routesToTree([{ inputs: '2MK > 214HP', leaf: { id: 'a' } }, { inputs: '2MK > 214HP', leaf: { id: 'b' } }], 'r');
  check('ルート↔ツリー: 全ルートが同じコマンドなら、根の segment を空にして同じ segment の葉を並べる',
    twins.segment === '' && twins.children?.map(c => `${c.id}:${c.segment}`).join(' ') === 'a:2MK > 214HP b:2MK > 214HP', JSON.stringify(twins));

  // YouTube の URL → 動画 ID と開始秒（エディタの URL 欄）
  const { parseYoutubeUrl, formatMmSs } = await import(lib('youtube.ts'));
  const ytCases = [
    ['https://youtu.be/RUcGCfDJvdQ?t=83', 'RUcGCfDJvdQ', 83],
    ['https://www.youtube.com/watch?v=RUcGCfDJvdQ&t=1m23s', 'RUcGCfDJvdQ', 83],
    ['youtube.com/watch?v=RUcGCfDJvdQ&t=83s', 'RUcGCfDJvdQ', 83],
    ['https://www.youtube.com/watch?v=RUcGCfDJvdQ', 'RUcGCfDJvdQ', null],
    ['https://youtu.be/RUcGCfDJvdQ', 'RUcGCfDJvdQ', null],
    ['https://www.youtube.com/embed/RUcGCfDJvdQ?start=90', 'RUcGCfDJvdQ', 90],
    ['https://youtube.com/shorts/RUcGCfDJvdQ', 'RUcGCfDJvdQ', null],
  ];
  const ytBad = ytCases.filter(([u, id, sec]) => { const r = parseYoutubeUrl(u); return r?.id !== id || r?.startSec !== sec; });
  check(`YouTube URL: youtu.be / watch / &t=1m23s / &t=83s / 秒数なし / embed / shorts の ${ytCases.length}形式から動画IDと開始秒を取り出す`,
    ytBad.length === 0, ytBad.map(c => `${c[0]} → ${JSON.stringify(parseYoutubeUrl(c[0]))}`).join(' / '));
  check('YouTube URL: YouTube でない URL・壊れた ID は読まない。秒は mm:ss で出す',
    parseYoutubeUrl('https://example.com/watch?v=RUcGCfDJvdQ') === null && parseYoutubeUrl('https://youtu.be/short') === null
      && formatMmSs(83) === '1:23' && formatMmSs(5) === '0:05' && formatMmSs(3723) === '1:02:03');
}

// ────────────────────────────────────────────────────────────
// S9. 起き攻めの紐付け（〆分類基準。同じ有利フレームの別〆は参考）
// ────────────────────────────────────────────────────────────
scenario('S9 起き攻めの紐付け: 同じコンボにはどの画面でも同じ起き攻めが出る');
{
  // 起き攻め1件ごとに data-okizeme-id と data-okizeme-rel（main=〆分類が同じ / ref=参考）を出している。
  // 一覧のパネル行（data-okizeme-panel）・詳細の #combo-okizeme・ダウン状況の #situation-okizeme で画面を突き合わせるので、
  // 起き攻めの見た目を作り直すときもこれらの属性は残す
  const okizemeIn = (html) => [...new Set([...(html ?? '').matchAll(/<[^>]*\bdata-okizeme-id="([^"]+)"[^>]*>/g)]
    .map(m => `${/data-okizeme-rel="(\w+)"/.exec(m[0])?.[1]}:${m[1]}`))].sort().join(' ');
  const panelOf = (html, leafId) => { // 一覧の行で開く起き攻めパネル（tr 1行）
    const i = html.indexOf(`data-okizeme-panel="${leafId}"`);
    return i < 0 ? null : html.slice(i, html.indexOf('</tr>', i));
  };
  const sectionOf = (html, id) => {
    const i = html.indexOf(`id="${id}"`);
    return i < 0 ? null : html.slice(i, html.indexOf('</section>', i));
  };
  const hub = (await get('/mock/character/rashid')).body;
  const explore = (await get('/mock/explore/rashid')).body;
  // コンボ詳細はルートごとのパネルに「このルートの後の起き攻め」（data-route-okizeme="葉ID"）を出す
  const routeOkizemeOf = (html, leafId) => {
    const i = html.indexOf(`data-route-okizeme="${leafId}"`);
    return i < 0 ? null : html.slice(i, html.indexOf('</section>', i));
  };
  const detail = async (id, leafId = `n_${id.replace('_', '')}_r`) => okizemeIn(routeOkizemeOf((await get(`/mock/combo/${id}`)).body, leafId));
  const situation = async (id) => okizemeIn(sectionOf((await get(`/mock/situation/${id}`)).body, 'situation-okizeme'));

  // c_002（公開・1本道）はダウン状況 s_002 の由来コンボなので、4画面すべてに出る
  const c002 = okizemeIn(panelOf(hub, 'n_c002_r'));
  const c002Others = [okizemeIn(panelOf(explore, 'n_c002_r')), await detail('c_002'), await situation('s_002')];
  check('c_002: キャラハブ・公開一覧・コンボ詳細・ダウン状況で同じ起き攻め',
    c002 !== '' && c002Others.every(s => s === c002), `hub=${c002} / others=${c002Others.join(' | ')}`);
  // c_001 は非公開なので公開一覧には出ない
  const c001 = okizemeIn(panelOf(hub, 'n_c001_r'));
  const c001Others = [await detail('c_001'), await situation('s_001')];
  check('c_001: キャラハブ・コンボ詳細・ダウン状況で同じ起き攻め（非公開なので公開一覧には出ない）',
    c001 !== '' && c001Others.every(s => s === c001) && panelOf(explore, 'n_c001_r') === null,
    `hub=${c001} / others=${c001Others.join(' | ')}`);

  const exploreLeaves = [...explore.matchAll(/data-okizeme-panel="([^"]+)"/g)].map(m => m[1]);
  const differs = exploreLeaves.filter(l => okizemeIn(panelOf(hub, l)) !== okizemeIn(panelOf(explore, l)));
  check(`公開一覧の全ルート (${exploreLeaves.length}件) でキャラハブと同じ起き攻め`,
    exploreLeaves.length > 0 && differs.length === 0, `違うルート: ${differs.join(', ')}`);

  // 中イーグル〆（c_012）と投げ後（s_003）は同じ +30F なので、互いの起き攻めが参考に出る
  const c012 = okizemeIn(panelOf(hub, 'n_c012_r'));
  const s003 = await situation('s_003');
  const rel = (s, r) => s.split(' ').filter(x => x.startsWith(`${r}:`)).map(x => x.slice(r.length + 1)).join(' ');
  check('同じ有利フレームの別〆は「参考」として分けて出る（中イーグル〆 ↔ 投げ後）',
    rel(c012, 'ref') !== '' && rel(c012, 'ref') === rel(s003, 'main') && rel(c012, 'main') === rel(s003, 'ref'),
    `c_012=${c012} / s_003=${s003}`);
  check('c_012: コンボ詳細もキャラハブと同じ（参考を含む）', (await detail('c_012')) === c012);
  check('公開一覧にも参考付きのルートがある', exploreLeaves.some(l => okizemeIn(panelOf(explore, l)).includes('ref:')));

  // 〆分類管理の件数は手書きではなく実データから数える（キャラハブのコンボ行・ダウン状況と突き合わせる）。
  // コンボ行の〆は〆分類列の title 属性で拾っているので、行を作り直したらここも合わせる
  const list = (await get('/mock/ender-class/list')).body;
  const groups = hub.split('<tbody class="combo-group"').slice(1).map(s => s.slice(0, s.indexOf('</tbody>')));
  const rows = [...list.matchAll(/<tr[^>]*data-ender-class="([^"]+)"[^>]*>([\s\S]*?)<\/tr>/g)].map(m => ({
    id: m[1],
    name: /class="col-title"[^>]*>([^<]+)</.exec(m[2])?.[1],
    combos: Number(/data-count="combos"[^>]*>(\d+)</.exec(m[2])?.[1]),
    okizeme: Number(/data-count="okizeme"[^>]*>(\d+)</.exec(m[2])?.[1]),
  }));
  const wrongCombos = rows.filter(r => r.combos !== groups.filter(g => g.includes(`title="${r.name}"`)).length);
  check(`〆分類管理のコンボ数がキャラハブのコンボ行と一致 (${rows.length}分類)`,
    rows.length > 0 && wrongCombos.length === 0, `ずれ: ${wrongCombos.map(r => `${r.name}=${r.combos}`).join(', ')}`);
  const sitOf = { ec_weak_eagle: 's_001', ec_strong_eagle: 's_002', ec_throw: 's_003', ec_arabian: 's_004' };
  const wrongOki = [];
  for (const [ec, sid] of Object.entries(sitOf)) {
    const shown = rel(await situation(sid), 'main').split(' ').filter(Boolean).length;
    const row = rows.find(r => r.id === ec);
    if (row?.okizeme !== shown) wrongOki.push(`${ec}: 一覧=${row?.okizeme} 状況=${shown}`);
  }
  check('〆分類管理の起き攻め数がダウン状況に出る件数と一致', wrongOki.length === 0, wrongOki.join(', '));

  // 起き攻めの一覧（〆分類ごと。2026-11-14）。節は data-okizeme-ender="〆分類ID"
  const okiPage = await get('/mock/okizeme/');
  check('起き攻めの一覧が 200', okiPage.status === 200, `status=${okiPage.status}`);
  const okiSection = (ec) => sectionOf(okiPage.body, ec) ?? '';
  const wrongSections = rows.filter(r => r.okizeme > 0)
    .filter(r => rel(okizemeIn(okiSection(r.id)), 'main').split(' ').filter(Boolean).length !== r.okizeme)
    .map(r => r.id);
  check('一覧の〆ごとの件数が〆分類管理の起き攻め数と一致', wrongSections.length === 0, wrongSections.join(', '));
  check('起き攻めの無い〆は節を作らず、まとめて出す',
    rows.filter(r => r.okizeme === 0).every(r => !okiPage.body.includes(`data-okizeme-ender="${r.id}"`)) && okiPage.body.includes('id="okizeme-empty"'));
  check('もにょもにょ〆のコンボの起き攻めパネルが、一覧の節と同じ起き攻め',
    okizemeIn(panelOf(hub, 'n_ax_eXUug9kjcVQ_09_r')) === okizemeIn(okiSection('ec_weak_stroke')) && okizemeIn(okiSection('ec_weak_stroke')) !== '');
  check('起き攻めパネルから、その〆の一覧の節へ飛べる', panelOf(hub, 'n_ax_eXUug9kjcVQ_09_r').includes('href="/mock/okizeme/#ec_weak_stroke"'));
  // 同じ連携でタイミングだけ違うもの（J中P 最速 +24F / 遅らせ +23F）は小見出しで分ける
  check('大スカイハイ（TC大サイクロン）の起き攻めが +24F / +23F の小見出しに分かれる',
    count(okiSection('ec_strong_skyhigh'), /data-okizeme-pattern="/g) === 2);
  check('大ミキサーは空中ヒットと地上ヒットで別の〆分類',
    ['ec_strong_mixer', 'ec_strong_mixer_ground'].every(ec => okiPage.body.includes(`data-okizeme-ender="${ec}"`)));
  // 同じ〆・同じコマンド・同じ小見出しの起き攻めは、一番新しい出典の1件にまとめ、ほかの出典を添える（2026-11-15 ユーザー判断）
  const okiRowIds = new Set([...okiPage.body.matchAll(/data-okizeme-id="([^"]+)"/g)].map(m => m[1]));
  const okiSourceIds = [...okiPage.body.matchAll(/data-okizeme-source="([^"]+)"/g)].map(m => m[1]);
  check('同じ起き攻めは1件にまとめ、まとめた分は「ほかの出典」に出す（行にはしない）',
    okiSourceIds.length > 0 && okiSourceIds.every(id => !okiRowIds.has(id)), `ほかの出典 ${okiSourceIds.length}件`);
  // 書き方だけ違うもの（(空)・持続当て・or の順）と、選択肢の一部だけ書いたもの（scripts/okizeme-merge.json）もまとまる（2026-11-16 ユーザー指摘の例）
  const midSpike = okiSection('ec_mid_eagle');
  check('中スパイク〆・端の「立中K空振り>前ステ投げ/中段/前ステ小足」が1件にまとまる',
    midSpike.includes('data-okizeme-id="ax_note_n81b55ff3de1c_08"')
      && ['ax_B7GqchUdv3Y_05', 'ax_RUcGCfDJvdQ_03', 'ax_Lb6O2R2-qv8_11'].every(id => midSpike.includes(`data-okizeme-source="${id}"`)));
}

// ────────────────────────────────────────────────────────────
// S10. 表記設定（文字/チップ・数字/矢印・コマンド/技名）を全ページで反映する
// ────────────────────────────────────────────────────────────
// 反映は Layout.astro のスクリプトが行い、技名は <body data-character> のキャラの表で引く。
// ここでは JS を動かせないので、反映できる形になっているか（文字表記 + チップ + キャラ指定）を見る
scenario('S10 表記設定: コマンドを出すページはどれも保存済みの表記で表示できる');
{
  const chipRe = /class="cmd-chip[^"]*" data-token="/g;
  const pages = [
    '/mock/character/rashid', '/mock/explore/rashid', '/mock/combo/c_001', '/mock/combo/c_006',
    '/mock/me/notes/combos/note_c_001', '/mock/me/notes/okizeme/note_o_001',
    '/mock/situation/s_001', '/mock/okizeme/new', '/mock/okizeme/', '/mock/vs/sagat',
  ];
  const notReady = [];
  const rawSteps = [];
  for (const p of pages) {
    // キャラ対策のレシピ（コマンド）はラシード目線の対策にあるので、ラシードを選んだ状態で見る
    const r = await get(p, { Cookie: 'sf6-char=rashid' });
    const chips = count(r.body, chipRe);
    const steps = [...r.body.matchAll(/class="recipe-step[^>]*>([^<]*)</g)].map(m => m[1]);
    rawSteps.push(...steps.filter(s => /\b(?:[1-9]+(?:[LMH][PK]|PP|KK|P|K)|LPLK|DR|CR)\b|[jJ]\.\w/.test(s)));
    const hasCharacter = /<body[^>]*\sdata-character="Rashid"/.test(r.body);
    if (r.status !== 200 || chips === 0 || steps.length === 0 || !hasCharacter) {
      notReady.push(`${p} (status=${r.status} chips=${chips} steps=${steps.length} character=${hasCharacter})`);
    }
  }
  check(`コマンドを出す ${pages.length} ページすべてがチップ表示で、技名に使うキャラが body に入っている`,
    notReady.length === 0, notReady.join(', '));

  const detail = await get('/mock/combo/c_006');
  check('コンボ詳細に表記トグル（表示・方向・必殺技）がある',
    ['style', 'dir', 'name'].every(g => detail.body.includes(`data-group="${g}"`)), 'トグルが見つかりません');
  check('文字表記にコマンドのまま残った語がない', rawSteps.length === 0, [...new Set(rawSteps)].join(' / '));

  // ノート詳細: c_002（DR > 5HP > 2MK > 214MK > 5HP > 214HK）がチップで並び、プレーンテキストで出ていない
  const note = await get('/mock/me/notes/combos/note_c_001');
  const noteTokens = [...note.body.matchAll(/class="cmd-chip[^"]*" data-token="([^"]+)"/g)].map(m => m[1]).join(' > ');
  check('コンボノート詳細のコマンドがチップ表示になっている',
    noteTokens.includes('DR > 5HP > 2MK > 214MK > 5HP > 214HK') && !/DR (&gt;|>) 5HP (&gt;|>) 2MK/.test(note.body),
    `チップ: ${noteTokens}`);
  check('ノートの分岐コンボ（c_005）は共通部分の後に「…の後に分岐」と出る', note.body.includes('…の後に分岐'));

  // キャラハブ: 一覧のトグルはエディタ内のトグル（data-editor-toggle）と別扱い
  const hub = await get('/mock/character/rashid');
  const pageToggles = count(hub.body, /class="ntoggle-btn" data-group=/g);
  const editorToggles = count(hub.body, /class="ntoggle-btn" data-editor-toggle=/g);
  check('キャラハブの一覧トグルとエディタ内トグルが別の属性で区別されている',
    pageToggles === 6 && editorToggles === 4, `一覧=${pageToggles} エディタ=${editorToggles}`);
  check('既定は文字表記で、チップを選んだときだけ描画前に切り替える',
    !/<html[^>]*data-notation-style/.test(hub.body) && hub.body.includes(`dataset.notationStyle = 'chip'`));
  // data-original のページには文字表記が無いので、切り替えを出さず、方向・必殺技のトグルを常に出す
  const realPage = (await get('/Rashid')).body;
  check('文字表記の無いページは方向・必殺技のトグルだけを常に出す',
    realPage.includes('data-group="dir"') && !realPage.includes('data-group="style"') && !realPage.includes('class="ntoggle-group ntoggle-chip-only'));
}

// ────────────────────────────────────────────────────────────
// S11. キャラ対策: 一覧の技・連携の名前から相手キャラのページのその見出しに飛べて、
//      取り込んだ対策が全部（技・連携ごとに）、動画のその場面つきで出る。
//      ラシード目線の対策はラシードを選んでいるときだけ出るので、ここは選んだ状態（Cookie）で見る。選ぶ前は S12
// ────────────────────────────────────────────────────────────
scenario('S11 キャラ対策: 一覧 → 相手キャラの強い技・連携 → 対策と動画の場面');
{
  const { ARCHIVER_MATCHUPS, ARCHIVER_UNRESOLVED } = await import(new URL('../src/mock-data/rashid-archiver.ts', import.meta.url).href);
  const { CHARACTERS, characterByEn } = await import(new URL('../src/lib/characters.ts', import.meta.url).href);
  const { isOldEra } = await import(new URL('../src/lib/matchups.ts', import.meta.url).href);
  const ATTRS = '(?:[^>"]|"[^"]*")*';  // 属性値の中の「>」（data-label の技名など）を読み飛ばす
  const RASHID = { Cookie: 'sf6-char=rashid' };
  const unescape = (s) => s.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').trim();
  const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];

  const opponents = [...new Set(ARCHIVER_MATCHUPS.map(m => m.opponent))];
  check('取り込んだ対策の相手は全員 src/lib/characters.ts にいる',
    opponents.every(o => characterByEn(o)), opponents.filter(o => !characterByEn(o)).join(', '));
  check('相手キャラの並びはキャラ一覧の順',
    opponents.every((o, i) => i === 0 || CHARACTERS.findIndex(c => c.en === opponents[i - 1]) < CHARACTERS.findIndex(c => c.en === o)));

  // 相手キャラのページ。見出し（強い技・連携 ＋ 立ち回り全般）ごとに、中のポイントを数える
  const pages = new Map();
  for (const o of opponents) {
    const { slug } = characterByEn(o);
    const r = await get(`/mock/vs/${slug}`, RASHID);
    const blocks = [...r.body.matchAll(new RegExp(`<section class="vs-block" id="([^"]+)"${ATTRS}>([\\s\\S]*?)</section>`, 'g'))]
      .map(m => ({ anchor: m[1], name: unescape(m[2].match(new RegExp(`<h2${ATTRS}>([^<]*)</h2>`))?.[1] ?? ''), points: count(m[2], /<li class="mu-point"/g) }));
    pages.set(slug, { ...r, blocks });
  }
  const notOk = [...pages].filter(([, r]) => r.status !== 200).map(([s, r]) => `${s}=${r.status}`);
  check(`相手キャラのページ（${pages.size}人）がどれも 200 で返る`, notOk.length === 0, notOk.join(', '));
  check('対策の無い名前のページは 404', (await get('/mock/vs/nobody')).status === 404);

  // 一覧: 対策のあるキャラが全員並び、技・連携の名前（とポイント数）が相手キャラのページの見出しと1対1で合う
  const index = await get('/mock/vs/', RASHID);
  check('キャラ対策の一覧が 200 で返る', index.status === 200, `status=${index.status}`);
  check('対策のあるキャラが全員、一覧に並ぶ', count(index.body, /<section class="vs-row"/g) === opponents.length,
    `行 ${count(index.body, /<section class="vs-row"/g)} / 相手 ${opponents.length}`);
  const chips = [...index.body.matchAll(new RegExp(`<a href="/mock/vs/([a-z]+)#([^"]+)" class="vs-threat[^"]*"${ATTRS}>([^<]*)<span class="vs-count"${ATTRS}>(\\d+)</span>`, 'g'))]
    .map(m => ({ slug: m[1], anchor: m[2], name: unescape(m[3]), n: Number(m[4]) }));
  const badChips = chips.filter(ch => {
    const b = pages.get(ch.slug)?.blocks.find(b => b.anchor === ch.anchor);
    return !b || b.name !== ch.name || b.points !== ch.n;
  });
  const blockTotal = [...pages.values()].reduce((n, p) => n + p.blocks.length, 0);
  check('一覧の技・連携の名前から、相手キャラのページの同じ見出しに飛べる（ポイント数も同じ）',
    chips.length === blockTotal && badChips.length === 0,
    `一覧 ${chips.length} / 見出し ${blockTotal}、合わない: ${badChips.map(c => `${c.slug}#${c.anchor} ${c.name}`).join(', ')}`);

  // ポイント: 結びつく技・連携の見出しそれぞれに出て（無ければ立ち回り全般に1回）、id はページ内に1つだけ
  const points = ARCHIVER_MATCHUPS.flatMap(e => e.points.map(p => ({ ...p, entry: e, slug: characterByEn(e.opponent).slug })));
  const byId = new Map(points.map(p => [p.id, p]));
  const blocksOf = (p) => Math.max(p.threats.length, 1);
  const seen = new Map();
  const ids = [];
  const wrong = [];
  let scenes = 0, recipes = 0, cautions = 0, warns = 0, badChipsPerPage = [];
  for (const [slug, r] of pages) {
    for (const m of r.body.matchAll(new RegExp(`<li class="mu-point"(${ATTRS})>([\\s\\S]*?)</li>`, 'g'))) {
      const [, tag, inner] = m;
      const pid = attr(tag, 'data-point-id');
      const p = byId.get(pid);
      const btn = inner.match(/class="mu-time" data-video="([^"]+)" data-sec="(\d+)"/);
      seen.set(pid, (seen.get(pid) ?? 0) + 1);
      if (attr(tag, 'id')) ids.push(`${slug}:${attr(tag, 'id')}`);
      if (!p || p.slug !== slug || btn?.[1] !== p.entry.youtubeId || Number(btn?.[2]) !== p.startSec
        || attr(tag, 'data-perspective') !== p.entry.perspective || attr(tag, 'data-topic') !== p.topic) wrong.push(`${slug}:${pid}`);
      scenes += count(inner, /class="mu-time mu-time-sm"/g);
      recipes += count(inner, /<div class="mu-recipe"/g);
      cautions += count(inner, /<p class="vs-caution"/g);
    }
    warns += count(r.body, /<span class="tag tag-warn"/g);
    // 絞り込みのチップ: 目線は2つ以上あるときだけ「すべて」＋そのキャラにある目線、種類はそのキャラで使われている種類の分だけ
    const mine = points.filter(p => p.slug === slug);
    const nPerspective = new Set(mine.map(p => p.entry.perspective)).size;
    const wantPerspective = nPerspective > 1 ? 1 + nPerspective : 0;
    const wantTopic = new Set(mine.map(p => p.topic)).size;
    if (count(r.body, /data-filter-perspective="/g) !== wantPerspective || count(r.body, /data-filter-topic="/g) !== wantTopic) badChipsPerPage.push(slug);
  }
  const placedWrong = points.filter(p => seen.get(p.id) !== blocksOf(p));
  check('取り込んだ対策が全部、結びつく技・連携の見出しそれぞれに出る（無ければ立ち回り全般）', placedWrong.length === 0,
    placedWrong.slice(0, 10).map(p => `${p.id}: ${seen.get(p.id) ?? 0}回 / ${blocksOf(p)}`).join(', '));
  check('各ポイントの ▶ が、その動画のその場面を開く（目線・種類の印もデータどおり）', wrong.length === 0, wrong.slice(0, 10).join(', '));
  check('ポイントの id はページ内で1つだけ（リンクで飛べる）', ids.length === points.length && new Set(ids).size === ids.length,
    `id ${ids.length} / ポイント ${points.length}`);
  const want = (f) => points.reduce((n, p) => n + f(p) * blocksOf(p), 0);
  check('「ほかの場面」の時刻ボタンがデータと同じ数ある', scenes === want(p => p.scenes.length), `表示 ${scenes} / データ ${want(p => p.scenes.length)}`);
  check('反撃などのレシピが全部出ている', recipes === want(p => p.recipes.length), `表示 ${recipes} / データ ${want(p => p.recipes.length)}`);
  check('調整で変わった点などの注意が全部出ている', cautions === want(p => (p.caution ? 1 : 0)), `表示 ${cautions} / データ ${want(p => (p.caution ? 1 : 0))}`);
  // 古い動画（Year 3 より前）は、ポイントの1行目と出典、「動画ごとの要点」の時期に注意の印が付く
  const oldSummaries = ARCHIVER_MATCHUPS.filter(e => e.summary && isOldEra(e.patchVersion)).length;
  const wantWarns = want(p => (isOldEra(p.entry.patchVersion) ? 2 : 0)) + oldSummaries;
  check('古い時期の動画には注意の印が付く', warns === wantWarns, `表示 ${warns} / データ ${wantWarns}`);
  check('目線・種類の絞り込みチップは、そのキャラにある分だけ出る', badChipsPerPage.length === 0, badChipsPerPage.join(', '));

  // 「バクステ」「垂直J」のように日本語がそのままトークンの技もあるので、取り込みの未解決一覧で見る
  const unconverted = ARCHIVER_UNRESOLVED.filter(u => u.kind === 'matchup');
  check('レシピは全部コマンドに変換されている（対応表に無い語が無い）', unconverted.length === 0,
    unconverted.map(u => `${u.recipeJa}: ${u.unresolvedTerms.join(',')}`).join(' / '));

  const noAcqua = [...pages].filter(([slug, r]) => {
    const c = CHARACTERS.find(c => c.slug === slug);
    return c?.acqua && !r.body.includes(`href="https://acqua-souken.com/char/${c.acqua}/"`);
  }).map(([slug]) => slug);
  check('あくあ総研のそのキャラのページへのリンクがある', noAcqua.length === 0, noAcqua.join(', '));

  const hub = await get('/mock/character/rashid');
  check('キャラハブからキャラ対策の一覧へのリンクがある', hub.body.includes('href="/mock/vs/"'));
}

// ────────────────────────────────────────────────────────────
// S12. ヘッダーのナビ: キャラ選択・キャラ対策はいつでも、選んだキャラのコンボ・起き攻めにもいつでも飛べる（2026-11-16）
// ────────────────────────────────────────────────────────────
scenario('S12 ヘッダーのナビ: キャラ選択 / コンボ / 起き攻め / キャラ対策');
{
  const { navSectionOf, selectedCharacterOf, characterPickUrl } = await import('../src/lib/site-nav.ts');
  const { CHARACTERS } = await import('../src/lib/characters.ts');
  check('URL からタブが決まる', navSectionOf('/mock/character/rashid') === 'combos' && navSectionOf('/mock/combo/c_001') === 'combos'
    && navSectionOf('/mock/okizeme/') === 'okizeme' && navSectionOf('/mock/situation/s_003') === 'okizeme'
    && navSectionOf('/mock/vs/sagat') === 'vs' && navSectionOf('/mock/') === undefined);
  check('コンボ・起き攻めのページはそのページのキャラを選ぶ', selectedCharacterOf('combos', 'Rashid', undefined)?.slug === 'rashid');
  check('キャラ対策ではページのキャラでなく Cookie で決まる', selectedCharacterOf('vs', 'Rashid', undefined) === undefined
    && selectedCharacterOf('vs', 'Rashid', 'rashid')?.slug === 'rashid');
  check('データの無いキャラは選べない', selectedCharacterOf(undefined, undefined, 'ken') === undefined);
  check('キャラ選択は今のタブを保つ（起き攻め → 起き攻め、キャラ対策 → 同じページ、それ以外 → コンボ）',
    characterPickUrl('okizeme', 'rashid', '/mock/okizeme/') === '/mock/okizeme/'
    && characterPickUrl(undefined, 'rashid', '/mock/') === '/mock/character/rashid'
    && characterPickUrl('vs', 'rashid', '/mock/vs/sagat') === '/mock/vs/sagat');

  const tabsOf = (html) => Object.fromEntries([...html.matchAll(/<(a|button)\b([^>]*?)data-nav-tab="(\w+)"([^>]*)>/g)]
    .map(m => [m[3], { tag: m[1], current: /aria-current="page"/.test(m[2] + m[4]), href: (m[2] + m[4]).match(/href="([^"]*)"/)?.[1] }]));

  const pages = {
    '/mock/character/rashid': 'combos', '/mock/combo/c_001': 'combos',
    '/mock/okizeme/': 'okizeme', '/mock/situation/s_003': 'okizeme', '/mock/vs/sagat': 'vs',
  };
  for (const [path, want] of Object.entries(pages)) {
    const r = await get(path);
    const tabs = tabsOf(r.body);
    const cur = Object.entries(tabs).filter(([, t]) => t.current).map(([k]) => k);
    check(`${path}: ナビに キャラ選択・コンボ・起き攻め・キャラ対策 があり、${want} が今のタブ`,
      r.body.includes('id="char-picker"') && ['combos', 'okizeme', 'vs'].every(k => tabs[k]) && cur.join() === want,
      `tabs=${JSON.stringify(tabs)}`);
  }

  const hubTabs = tabsOf((await get('/mock/character/rashid')).body);
  check('キャラのページではコンボ・起き攻めがそのキャラのページへのリンク',
    hubTabs.combos?.href === '/mock/character/rashid' && hubTabs.okizeme?.href === '/mock/okizeme/', JSON.stringify(hubTabs));

  const fresh = tabsOf((await get('/mock/vs/')).body);
  check('キャラを選ぶ前のキャラ対策では、コンボ・起き攻めはキャラ選択を開くボタン',
    fresh.combos?.tag === 'button' && fresh.okizeme?.tag === 'button' && fresh.vs?.href === '/mock/vs/', JSON.stringify(fresh));

  const withCookie = await fetch(BASE + '/mock/vs/', { headers: { Cookie: 'sf6-char=rashid' } }).then(r => r.text());
  const chosen = tabsOf(withCookie);
  check('キャラを選んだ後（Cookie）は、キャラ対策からもそのキャラのコンボ・起き攻めへ飛べる',
    chosen.combos?.href === '/mock/character/rashid' && chosen.okizeme?.href === '/mock/okizeme/', JSON.stringify(chosen));

  // キャラ対策: 選ぶ前は共通の対策だけ、ラシードを選ぶとラシード目線の対策が足される
  const { ARCHIVER_MATCHUPS } = await import('../src/mock-data/rashid-archiver.ts');
  const { characterByEn } = await import('../src/lib/characters.ts');
  const perspectivesIn = (html) => [...html.matchAll(/<li class="mu-point"[^>]*?data-perspective="([^"]+)"/g)].map(m => m[1]);
  const slugs = [...new Set(ARCHIVER_MATCHUPS.map(m => characterByEn(m.opponent).slug))];
  const leaks = [], missing = [];
  for (const slug of slugs) {
    const commonOnly = perspectivesIn((await get(`/mock/vs/${slug}`)).body);
    const withRashid = perspectivesIn((await get(`/mock/vs/${slug}`, { Cookie: 'sf6-char=rashid' })).body);
    if (commonOnly.some(v => v !== '共通')) leaks.push(slug);
    if (commonOnly.length !== withRashid.filter(v => v === '共通').length) missing.push(slug);
  }
  check('キャラを選ぶ前のキャラ対策は、共通の対策だけ（ラシードを選ぶと共通に足される）',
    leaks.length === 0 && missing.length === 0, `ラシード目線が出た: ${leaks.join(', ')} / 共通の数が違う: ${missing.join(', ')}`);
  const rashidOnly = ARCHIVER_MATCHUPS.filter(e => e.perspective === 'ラシード').flatMap(e => e.points);
  const rashidShown = (await Promise.all(slugs.map(s => get(`/mock/vs/${s}`, { Cookie: 'sf6-char=rashid' }))))
    .reduce((n, r) => n + new Set([...r.body.matchAll(/<li class="mu-point"[^>]*?data-point-id="([^"]+)"[^>]*?data-perspective="ラシード"/g)].map(m => m[1])).size, 0);
  check('ラシードを選ぶと、ラシード目線の対策が全部出る', rashidShown === rashidOnly.length, `表示 ${rashidShown} / データ ${rashidOnly.length}`);
  const vsFresh = (await get('/mock/vs/')).body;
  check('キャラを選ぶ前のキャラ対策の一覧に「ラ」の印は無い', !vsFresh.includes('class="vs-only-rashid"'));
  const vsWithPick = (await get('/mock/vs/sagat', { Cookie: 'sf6-char=rashid' })).body;
  check('キャラ対策でキャラを選ぶと同じページのまま（選択を外すボタンもある）',
    vsWithPick.includes('href="/mock/vs/sagat" data-char-pick="rashid"') && vsWithPick.includes('data-char-clear'));

  // キャラ対策のトップ: ゲームのキャラ選択画面と同じ並びで全キャラ。押すとそのキャラの対策ページ
  const { SELECT_SCREEN_ROWS, SELECT_SCREEN_COLUMNS } = await import('../src/lib/characters.ts');
  const order = SELECT_SCREEN_ROWS.flat();
  check('キャラ選択画面の並びに全キャラが1回ずつ入っている（1段は4人まで）',
    order.length === CHARACTERS.length && new Set(order).size === order.length && CHARACTERS.every(c => order.includes(c.slug))
    && SELECT_SCREEN_ROWS.every(r => r.length <= SELECT_SCREEN_COLUMNS),
    `並び ${order.length} / キャラ ${CHARACTERS.length}、無い: ${CHARACTERS.filter(c => !order.includes(c.slug)).map(c => c.slug).join(', ')}`);
  const picks = [...vsFresh.matchAll(/<a href="\/mock\/vs\/([a-z]+)" data-vs-pick="([a-z]+)"/g)];
  check('キャラ対策のトップに、キャラ選択画面の並びで全キャラのマスがあり、押すとそのキャラのページへ',
    picks.length === order.length && picks.every((m, i) => m[1] === order[i] && m[2] === order[i]),
    picks.map(m => m[2]).join(','));
  check('キャラ選択のマスは「強い技・連携」の一覧より上にある',
    vsFresh.indexOf('data-vs-pick=') !== -1 && vsFresh.indexOf('data-vs-pick=') < vsFresh.indexOf('<section class="vs-row"'));

  const picker = (await get('/mock/')).body;
  check('キャラ選択に全キャラが並び、データの無いキャラは「準備中」',
    picker.includes('data-char-pick="rashid"') && count(picker, /data-char-unready="/g) === CHARACTERS.length - 1);
}

// ────────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(60)}`);
console.log(`\x1b[1m結果: ${pass} pass / ${fail} fail / ${skip} skip\x1b[0m`);
if (failures.length) {
  console.log('\n失敗一覧:');
  for (const f of failures) console.log(`  [${f.scenario}] ${f.label}\n      ${f.detail}`);
}
process.exit(fail > 0 ? 1 : 0);
