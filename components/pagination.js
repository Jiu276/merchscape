/**
 * @param {number} current
 * @param {number} total
 * @param {function(number): void} onPageChange
 * @returns {string}
 */
export function renderPagination(current, total, onPageChange) {
  if (total <= 1) return '';
  let html = '<div class="pagination" role="navigation" aria-label="Pagination">';
  html += `<button class="page-btn" ${current === 1 ? 'disabled' : ''} data-page="${current - 1}" aria-label="Previous page">&laquo;</button>`;
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn ${i === current ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }
  html += `<button class="page-btn" ${current === total ? 'disabled' : ''} data-page="${current + 1}" aria-label="Next page">&raquo;</button>`;
  html += '</div>';
  return html;
}

/** @param {HTMLElement} container @param {function(number): void} callback */
export function bindPagination(container, callback) {
  container.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.dataset.page, 10);
      if (page > 0) callback(page);
    });
  });
}