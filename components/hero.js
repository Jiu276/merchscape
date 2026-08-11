/**
 * @param {{ title: string, subtitle: string, bgImage: string, primaryHref?: string, secondaryHref?: string }} opts
 * @returns {string}
 */
export function renderHero({ title, subtitle, bgImage, primaryHref = 'pages/blog.html', secondaryHref = 'pages/about.html' }) {
  return `
    <section class="hero">
      <div class="hero-bg" style="background-image:url('${bgImage}')"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>${title}</h1>
        <p>${subtitle}</p>
        <div class="hero-actions">
          <a href="${primaryHref}" class="btn btn-primary">Explore Articles</a>
          <a href="${secondaryHref}" class="btn btn-outline">Learn More</a>
        </div>
      </div>
    </section>
  `;
}