import { siteConfig } from '../js/data.js';

/**
 * 渲染站点 Logo（与项目文件夹同名 merchscape）
 * @param {string} prefix - 路径前缀
 * @returns {string}
 */
export function renderLogo(prefix = '') {
  const p = prefix || '';
  const name = siteConfig.name;

  return `
    <a href="${p}index.html" class="logo" aria-label="${name} Home">
      <span class="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="currentColor"/>
          <path d="M8 22V10h3.2l4.8 7.5L20.8 10H24v12h-2.8v-7.2L17.2 22h-2.4l-4-7.2V22H8z" fill="#fff"/>
        </svg>
      </span>
      <span class="logo-text">${name}</span>
    </a>
  `;
}
