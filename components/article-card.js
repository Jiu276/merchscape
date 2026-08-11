/**
 * @param {object} article
 * @param {string} prefix
 * @returns {string}
 */
export function renderArticleCard(article, prefix = '') {
  const date = new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return `
    <article class="card fade-in">
      <div class="card-image">
        <a href="${prefix}pages/article.html?id=${article.id}">
          <img src="${article.image}" alt="${article.title}" loading="lazy">
        </a>
      </div>
      <div class="card-body">
        <span class="card-category">${article.category}</span>
        <h3 class="card-title"><a href="${prefix}pages/article.html?id=${article.id}">${article.title}</a></h3>
        <p class="card-excerpt">${article.excerpt}</p>
        <div class="card-meta">
          <span>${date}</span>
          <span>${article.author}</span>
          <span>${article.readTime}</span>
        </div>
      </div>
    </article>
  `;
}