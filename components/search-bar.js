/**
 * @param {string} placeholder
 * @returns {string}
 */
export function renderSearchBar(placeholder = 'Search articles...') {
  return `
    <div class="search-wrap">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="search" class="search-input" id="search-input" placeholder="${placeholder}" aria-label="Search">
    </div>
  `;
}

/**
 * @param {string[]} categories
 * @returns {string}
 */
export function renderCategoryFilter(categories) {
  const btns = ['All', ...categories].map(cat =>
    `<button class="category-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>`
  ).join('');
  return `<div class="category-filter" id="category-filter">${btns}</div>`;
}