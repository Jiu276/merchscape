/** @returns {string} */
export function renderBackToTop() {
  return `
    <button class="back-to-top" id="back-to-top" aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m18 15-6-6-6 6"/></svg>
    </button>
  `;
}

/** Initializes back-to-top button behavior */
export function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}