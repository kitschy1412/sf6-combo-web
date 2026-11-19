// コンボ一覧（キャラハブ・公開一覧）のブラウザ側の表示: 絞り込み・見出しの折りたたみ・「あまり使わない」の畳み・行の開閉・列表示。
// 行は tbody.combo-group に data-section / data-bucket / data-priority / data-hit-state / data-gauges（ルートのゲージ区分を空白区切り）/
// data-search（検索用の文字列。combo-search.ts）を持ち、分岐のルートの行は data-gauge / data-search を持つ。
// 見出しは ComboListHead.astro、畳みの行は ComboLowRow.astro、絞り込みのチップは [data-filter-priority] / [data-filter-hit] / [data-filter-gauge]、
// 検索欄は #filter-text（件数は #filter-text-count）
import { FOLDED_PRIORITY } from '../mock-data/rashid-starters';
import { matchesSearch, searchTermsOf } from './combo-search';

const COL_VIS_KEY = 'sf6-combo-col-vis';

// 未入力は 0 と区別する（保存イベントは未入力を 0 で渡す）
export const formatDamage = (damage?: number) => (damage ? damage.toLocaleString() : '—');

// 分岐の ▶ ルートボタン1つに開閉を付ける（あとから足した行にも使う。キャラハブの buildNewComboRow）
export function bindBranchToggle(btn: HTMLButtonElement) {
  btn.addEventListener('click', () => {
    const comboId = btn.dataset.comboId;
    const isOpen = btn.classList.toggle('is-open');
    document.querySelectorAll<HTMLElement>(`tr[data-branch-of="${comboId}"]`).forEach(row => {
      row.style.display = isOpen ? '' : 'none';
    });
    // 折り畳み時: 子行の起き攻めパネルをすべて閉じる
    if (isOpen) return;
    document.querySelectorAll<HTMLElement>(`[data-okizeme-branch-of="${comboId}"]`).forEach(panel => {
      panel.style.display = 'none';
      document.querySelector(`[data-okizeme-toggle="${panel.dataset.okizemePanel}"]`)?.classList.remove('is-open');
    });
  });
}

// 分岐のルートと起き攻めパネルの開閉
function initRowToggles() {
  document.querySelectorAll<HTMLButtonElement>('.branch-toggle').forEach(bindBranchToggle);

  document.querySelectorAll<HTMLButtonElement>('.frame-adv-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = btn.classList.toggle('is-open');
      const panel = document.querySelector<HTMLElement>(`[data-okizeme-panel="${btn.dataset.okizemeToggle}"]`);
      if (panel) panel.style.display = isOpen ? '' : 'none';
    });
  });
}

// 列表示メニュー（ComboColumnMenu.astro）。設定はキャラハブと公開一覧で共有する
function initColumnMenu() {
  const table = document.getElementById('combo-table');
  const toggle = document.getElementById('col-vis-toggle');
  const menu = document.getElementById('col-vis-menu');
  if (!table || !toggle || !menu) return;

  const applyColVis = (key: string, visible: boolean) => {
    const col = table.querySelector<HTMLTableColElement>(`col[data-col="${key}"]`);
    if (col) col.style.visibility = visible ? '' : 'collapse';
    // コンボ名・状況・優先度はコマンド欄の中に出すので、列ではなく中身を隠す（combo-list.css）
    else table.classList.toggle(`hide-${key}`, !visible);
  };

  let saved: Record<string, boolean> = {};
  try { saved = JSON.parse(localStorage.getItem(COL_VIS_KEY) ?? '{}'); }
  catch { saved = {}; }

  menu.querySelectorAll<HTMLInputElement>('[data-col-vis]').forEach(cb => {
    const key = cb.dataset.colVis ?? '';
    if (key in saved) cb.checked = saved[key];
    applyColVis(key, cb.checked);
    cb.addEventListener('change', () => {
      applyColVis(key, cb.checked);
      saved[key] = cb.checked;
      localStorage.setItem(COL_VIS_KEY, JSON.stringify(saved));
    });
  });

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
  });
  document.addEventListener('click', (e) => {
    if (menu.style.display === 'none' || menu.contains(e.target as Node)) return;
    menu.style.display = 'none';
  });
}

export function initComboListView(matches: (group: HTMLElement) => boolean) {
  // 絞り込みのチップと検索語（空なら全部）。同じ軸のチップどうしは OR、軸どうしとページの matches（始動技など）・検索語は AND
  const priorities = new Set<string>();   // 優先度
  const hitStates = new Set<string>();    // ヒット状態（CH / PC）
  const gauges = new Set<string>();       // ゲージ区分
  let terms: string[] = [];               // 検索語（検索欄を空白で区切ったもの。どの語も含むルートだけ合う）
  const collapsed = new Set<string>();    // 折りたたみ中の見出し（大見出しは section、小見出しは bucket）
  const lowOpen = new Set<string>();      // 「あまり使わない」を開いている見出し（bucket）
  const searchInput = document.getElementById('filter-text') as HTMLInputElement | null;
  const searchCount = document.getElementById('filter-text-count');

  // ゲージと検索語はルートごとに見る。分岐コンボはどれか1つのルートが合えば出し、開いたときは合わないルートを薄く出す。
  // ルートの行が無い行（1本道と、保存で足した行）は行の data-gauges と data-search で見る
  const routeMatches = (gaugeList: string, search: string) =>
    (gauges.size === 0 || gaugeList.split(' ').some(g => gauges.has(g))) && matchesSearch(search, terms);
  const routeRowMatches = (row: HTMLElement) => routeMatches(row.dataset.gauge ?? '', row.dataset.search ?? '');

  const filtersMatch = (grp: HTMLElement) => {
    if (priorities.size > 0 && !priorities.has(grp.dataset.priority ?? '')) return false;
    if (hitStates.size > 0 && !hitStates.has(grp.dataset.hitState ?? '')) return false;
    const routeRows = Array.from(grp.querySelectorAll<HTMLElement>('tr.combo-child-row'));
    return routeRows.length > 0
      ? routeRows.some(routeRowMatches)
      : routeMatches(grp.dataset.gauges ?? '', grp.dataset.search ?? '');
  };

  const sectionOfBucket = (bucket: string) => bucket.split('/')[0];
  const setCount = (head: HTMLElement, n: number) => {
    const el = head.querySelector('.combo-head-count');
    if (el) el.textContent = `${n}件`;
  };

  function apply() {
    const groups = Array.from(document.querySelectorAll<HTMLElement>('tbody.combo-group'));
    // 優先度で絞っているときは「あまり使わない」を畳まない（ヒット状態・ゲージ・検索語で絞っても畳みはそのまま）
    const byPriority = priorities.size > 0;
    groups.forEach(grp => {
      const { section = '', bucket = '', priority = '' } = grp.dataset;
      // 一致判定は折りたたみとは独立に保持する（見出しの表示と件数に使う）
      const match = matches(grp) && filtersMatch(grp);
      grp.dataset.filterMatch = match ? '1' : '0';
      const folded = priority === FOLDED_PRIORITY && !byPriority && !lowOpen.has(bucket);
      const hidden = !match || folded || collapsed.has(section) || collapsed.has(bucket) || grp.dataset.editing === '1';
      grp.style.display = hidden ? 'none' : '';
    });

    // 分岐のルートの行: ゲージ・検索語で絞っているとき、合わないルートは薄く出す（combo-list.css）
    document.querySelectorAll<HTMLElement>('tr.combo-child-row').forEach(row => {
      row.classList.toggle('route-unmatched', !routeRowMatches(row));
    });

    const matched = groups.filter(g => g.dataset.filterMatch === '1');
    // 検索しているときだけ、検索欄の横に合ったコンボの数を出す（畳んでいる行・折りたたんだ見出しの行も数える）
    if (searchCount) searchCount.textContent = terms.length > 0 ? `${matched.length}件` : '';
    // 見出しは配下に一致するコンボが1件以上あれば出す（折りたたみ中でも再展開できるように）
    document.querySelectorAll<HTMLElement>('tbody.combo-section-head').forEach(head => {
      const n = matched.filter(g => g.dataset.section === head.dataset.headSection).length;
      head.style.display = n > 0 ? '' : 'none';
      setCount(head, n);
    });
    document.querySelectorAll<HTMLElement>('tbody.combo-scene-head').forEach(head => {
      const n = matched.filter(g => g.dataset.bucket === head.dataset.headBucket).length;
      head.style.display = n > 0 && !collapsed.has(head.dataset.headSection ?? '') ? '' : 'none';
      setCount(head, n);
    });
    document.querySelectorAll<HTMLElement>('tbody.combo-low-row').forEach(row => {
      const bucket = row.dataset.lowBucket ?? '';
      const n = matched.filter(g => g.dataset.bucket === bucket && g.dataset.priority === FOLDED_PRIORITY).length;
      const headClosed = collapsed.has(sectionOfBucket(bucket)) || collapsed.has(bucket);
      row.style.display = n > 0 && !byPriority && !headClosed ? '' : 'none';
      const open = lowOpen.has(bucket);
      const btn = row.querySelector('button');
      if (!btn) return;
      btn.textContent = open ? `▾ ${FOLDED_PRIORITY} ${n}件を隠す` : `▸ ${FOLDED_PRIORITY} ${n}件`;
      btn.setAttribute('aria-expanded', String(open));
    });
  }

  // 見出しを開く（「＋」でエディタを出すとき、保存した行を見せるとき）。showLow なら畳んでいる行も開く
  function reveal(bucket: string, showLow = false) {
    [sectionOfBucket(bucket), bucket].forEach(key => {
      if (!collapsed.delete(key)) return;
      document.querySelector(`.combo-head-toggle[data-collapse-key="${CSS.escape(key)}"]`)?.setAttribute('aria-expanded', 'true');
    });
    if (showLow) lowOpen.add(bucket);
    apply();
  }

  document.querySelectorAll<HTMLButtonElement>('.combo-head-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.collapseKey ?? '';
      const nowCollapsed = !collapsed.has(key);
      if (nowCollapsed) collapsed.add(key); else collapsed.delete(key);
      btn.setAttribute('aria-expanded', String(!nowCollapsed));
      apply();
    });
  });

  document.querySelectorAll<HTMLElement>('tbody.combo-low-row').forEach(row => {
    row.querySelector('button')?.addEventListener('click', () => {
      const bucket = row.dataset.lowBucket ?? '';
      if (!lowOpen.delete(bucket)) lowOpen.add(bucket);
      apply();
    });
  });

  const bindChips = (attr: string, selected: Set<string>) => {
    document.querySelectorAll<HTMLButtonElement>(`[${attr}]`).forEach(btn => {
      btn.addEventListener('click', () => {
        const value = btn.getAttribute(attr) ?? '';
        const on = !selected.has(value);
        if (on) selected.add(value); else selected.delete(value);
        btn.classList.toggle('chip-on', on);
        btn.setAttribute('aria-pressed', String(on));
        apply();
      });
    });
  };
  bindChips('data-filter-priority', priorities);
  bindChips('data-filter-hit', hitStates);
  bindChips('data-filter-gauge', gauges);

  // 検索欄は入力のたびに絞り込む（変換前のひらがなでも当たる）
  searchInput?.addEventListener('input', () => {
    terms = searchTermsOf(searchInput.value);
    apply();
  });

  initRowToggles();
  initColumnMenu();

  return { apply, reveal };
}
