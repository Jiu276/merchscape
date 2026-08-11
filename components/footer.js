import { renderSocialWidget } from './social-widget.js';

/**
 * @param {string} prefix
 * @returns {string}
 */
export function renderFooter(prefix = '') {
  const p = prefix || '';
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="${p}index.html" class="logo">
              <span class="logo-icon">M</span>
              <span>Merchscape</span>
            </a>
            <p>Curated product discoveries, retail trends, and merchandise strategies for savvy sellers.</p>
          </div>
          <div class="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="${p}pages/blog.html">Blog</a></li>
              <li><a href="${p}pages/products.html">Products</a></li>
              <li><a href="${p}pages/about.html">About</a></li>
              <li><a href="${p}pages/contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><a href="${p}pages/blog.html?category=Product+Reviews">Product Reviews</a></li>
              <li><a href="${p}pages/blog.html?category=Platform+Recommendations">Platform Recommendations</a></li>
              <li><a href="${p}pages/blog.html?category=Industry+Insights">Industry Insights</a></li>
              <li><a href="${p}pages/blog.html?category=How-To+Guides">How-To Guides</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Connect</h4>
            ${renderSocialWidget()}
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} Merchscape. All rights reserved.</span>
          ${renderSocialWidget()}
        </div>
      </div>
    </footer>
  `;
}