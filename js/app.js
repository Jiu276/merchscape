import { renderHeader, initHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderBackToTop, initBackToTop } from '../components/back-to-top.js';
import { initScrollAnimations } from './utils.js';

/**
 * @param {string} activePage
 * @param {string} prefix
 */
export function initLayout(activePage, prefix = '') {
  const headerEl = document.getElementById('header');
  const footerEl = document.getElementById('footer');
  const backToTopEl = document.getElementById('back-to-top');

  if (headerEl) headerEl.innerHTML = renderHeader(activePage, prefix);
  if (footerEl) footerEl.innerHTML = renderFooter(prefix);
  if (backToTopEl) backToTopEl.innerHTML = renderBackToTop();

  initHeader(prefix);
  initBackToTop();
  initScrollAnimations();
}