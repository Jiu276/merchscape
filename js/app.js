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
  const backToTopMount = document.getElementById('back-to-top-mount');

  if (headerEl) headerEl.innerHTML = renderHeader(activePage, prefix);
  if (footerEl) footerEl.innerHTML = renderFooter(prefix);
  if (backToTopMount) backToTopMount.innerHTML = renderBackToTop();

  initHeader(prefix);
  initBackToTop();
  initScrollAnimations();
}