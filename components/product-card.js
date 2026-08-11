/**
 * @param {object} product
 * @param {string} prefix
 * @returns {string}
 */
export function renderProductCard(product, prefix = '') {
  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
  return `
    <article class="card fade-in">
      <div class="card-image">
        <a href="${prefix}pages/product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
      </div>
      <div class="card-body">
        <span class="card-category">${product.category}</span>
        <h3 class="card-title"><a href="${prefix}pages/product.html?id=${product.id}">${product.name}</a></h3>
        <p class="card-excerpt">${product.description}</p>
        <div class="card-meta">
          <span class="product-rating">${stars} ${product.rating}</span>
          <span>${product.price}</span>
        </div>
      </div>
    </article>
  `;
}