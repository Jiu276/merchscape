/** @returns {string} */
export function renderSocialWidget() {
  const links = [
    { href: 'https://twitter.com', label: 'Twitter', icon: '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-19 11 2.2.1 4.4-.6 6-2C3 15.5 1 9 4 5.5 6.2 8 9 9.5 12 9.4c-1.5-4.5 6-7 9-3.8 1.4 0 2.8.5 4 1.2z"/>' },
    { href: 'https://facebook.com', label: 'Facebook', icon: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
    { href: 'https://instagram.com', label: 'Instagram', icon: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>' },
    { href: 'https://youtube.com', label: 'YouTube', icon: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.87z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>' },
  ];
  return `<div class="social-widget">${links.map(l =>
    `<a href="${l.href}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${l.label}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${l.icon}</svg></a>`
  ).join('')}</div>`;
}