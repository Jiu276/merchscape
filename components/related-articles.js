import { renderArticleCard } from './article-card.js';

/**
 * 渲染相关文章推荐
 * @param {object} current - 当前文章
 * @param {object[]} articles - 全部文章列表
 * @param {string} prefix - 路径前缀
 * @param {number} limit - 显示数量
 * @returns {string}
 */
export function renderRelatedArticles(current, articles, prefix = '../', limit = 3) {
  const related = articles
    .filter(a => a.id !== current.id)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      if (aMatch !== bMatch) return bMatch - aMatch;
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, limit);

  if (!related.length) return '';

  return `
    <aside class="related-articles fade-in">
      <h2>Related Articles</h2>
      <div class="cards-grid">${related.map(a => renderArticleCard(a, prefix)).join('')}</div>
    </aside>
  `;
}
