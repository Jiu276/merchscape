/**
 * @param {string} activePage
 * @param {string} prefix
 * @returns {string}
 */
export function renderHeader(activePage = '', prefix = '') {
  const p = prefix || '';
  const links = [
    { href: `${p}index.html`, label: 'Home', page: 'home' },
    { href: `${p}pages/blog.html`, label: 'Blog', page: 'blog' },
    { href: `${p}pages/products.html`, label: 'Products', page: 'products' },
    { href: `${p}pages/about.html`, label: 'About', page: 'about' },
    { href: `${p}pages/contact.html`, label: 'Contact', page: 'contact' },
  ];
  const navLinks = links.map(l =>
    `<a href="${l.href}" class="nav-link ${activePage === l.page ? 'active' : ''}">${l.label}</a>`
  ).join('');
  const mobileLinks = links.map(l =>
    `<a href="${l.href}" class="nav-link ${activePage === l.page ? 'active' : ''}">${l.label}</a>`
  ).join('');

  return `
    <header class="site-header" id="site-header">
      <div class="container header-inner">
        <a href="${p}index.html" class="logo" aria-label="Merchscape Home">
          <span class="logo-icon">M</span>
          <span>Merchscape</span>
        </a>
        <nav class="nav-desktop" aria-label="Main navigation">${navLinks}</nav>
        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>
      </div>
      <nav class="nav-mobile" id="nav-mobile" aria-label="Mobile navigation">${mobileLinks}</nav>
    </header>
  `;
}

/** @param {string} prefix */
export function initHeader(prefix = '') {
  const toggle = document.getElementById('menu-toggle');
  const mobile = document.getElementById('nav-mobile');
  const header = document.getElementById('site-header');

  toggle?.addEventListener('click', () => {
    const open = mobile?.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(!!open));
  });

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 50);
  });

  document.querySelectorAll('.nav-mobile .nav-link').forEach(link => {
    link.addEventListener('click', () => mobile?.classList.remove('open'));
  });
}