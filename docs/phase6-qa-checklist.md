# Phase 6 — Testing & QA Checklist

## Functional QA
- [ ] Homepage renders without console errors
- [ ] Header navigation links visible: Home, Products, Tips & Tricks, Where to Buy, About, Contact, Apply Today
- [ ] Mobile menu toggles and closes on outside click/resize
- [ ] Footer visible and links render
- [ ] Contact form submits to Formspree (test endpoint)
- [ ] Apply Today form submits to Formspree (test endpoint)
- [ ] Where to Buy search validates ZIP format and shows results UI
- [ ] Product listing and product details pages render
- [ ] FAQ page renders with questions and answers

## SEO/Analytics
- [ ] Titles and meta descriptions present on key pages
- [ ] Structured data present (Organization, FAQ, Breadcrumb/Product where applicable)
- [ ] Sitemap generated and excludes non-indexable pages
- [ ] Robots.txt includes sitemap reference
- [ ] GA4 script renders when ID is set in `src/config.yaml`

## Accessibility
- [ ] Keyboard navigation through header/menu
- [ ] Focus states visible on interactive elements
- [ ] Images include informative alt text
- [ ] Color contrast meets AA

## Performance
- [ ] Astro build succeeds locally
- [ ] `astro-compress` minifies HTML/CSS/JS
- [ ] Images served as AVIF/WEBP where supported
- [ ] Critical CSS present

## Cross-browser
- [ ] Chrome latest desktop
- [ ] Firefox latest desktop
- [ ] Edge latest desktop
- [ ] iOS Safari mobile
- [ ] Android Chrome mobile

## Automation
- [ ] `npm run test:unit` passes
- [ ] `npm run test:e2e` passes (Playwright)
- [ ] `scripts/performance-test.js` runs
- [ ] `scripts/validate-structured-data.js` runs

## Known Gaps / Actions
- [ ] Replace GA4 placeholder ID in `src/config.yaml`
- [ ] Confirm final store data source for `where-to-buy`
- [ ] Confirm final PDF assets in `public/docs/`
