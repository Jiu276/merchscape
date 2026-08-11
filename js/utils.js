/**
 * @param {object[]} items
 * @param {string} query
 * @param {string[]} searchFields
 * @returns {object[]}
 */
export function searchItems(items, query, searchFields) {
  if (!query.trim()) return items;
  const q = query.toLowerCase();
  return items.filter(item =>
    searchFields.some(field => String(item[field] || '').toLowerCase().includes(q))
  );
}

/**
 * @param {object[]} items
 * @param {string} category
 * @param {string} field
 * @returns {object[]}
 */
export function filterByCategory(items, category, field = 'category') {
  if (!category || category === 'All') return items;
  return items.filter(item => item[field] === category);
}

/**
 * @param {object[]} items
 * @param {string} dateField
 * @returns {object[]}
 */
export function sortByDateDesc(items, dateField = 'date') {
  return [...items].sort((a, b) => new Date(b[dateField]) - new Date(a[dateField]));
}

/**
 * @param {object[]} items
 * @param {number} page
 * @param {number} perPage
 * @returns {{ items: object[], totalPages: number }}
 */
export function paginate(items, page, perPage = 6) {
  const totalPages = Math.ceil(items.length / perPage) || 1;
  const start = (page - 1) * perPage;
  return { items: items.slice(start, start + perPage), totalPages };
}

/** @param {string} id @param {object[]} items @returns {object|undefined} */
export function findById(id, items) {
  return items.find(item => item.id === id);
}

/** Initializes fade-in scroll animations */
export function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}