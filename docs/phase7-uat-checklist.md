## Phase 7 UAT Checklist

Use this checklist during stakeholder UAT to validate the site end-to-end.

- Environment
  - [ ] Staging or local URL shared with stakeholders
  - [ ] Test email destinations configured (Formspree test mode)
  - [ ] Clear browser cache; test in incognito once

- Global
  - [ ] Header visible, logo links to `/`
  - [ ] Primary navigation links work on desktop and mobile
  - [ ] Footer shows correct company info, links, and social icons
  - [ ] No console errors on page load or navigation

- Homepage
  - [ ] Hero section text and primary CTA copy approved
  - [ ] Images load quickly and look crisp on desktop and mobile
  - [ ] Key sections present: products, value props, testimonials if applicable

- Key Pages
  - [ ] Products index `/products` loads and lists expected items
  - [ ] Product detail (e.g., `/products/apple-pie`) shows correct content and images
  - [ ] Pies listing `/pies` and store info `/where-to-buy` render correctly
  - [ ] About `/about` content and brand story approved
  - [ ] Tips section pages render and paginate as expected

- Forms
  - [ ] Contact form submits successfully and shows confirmation
  - [ ] Careers/application form submits (if applicable)
  - [ ] Formspree receives submissions (check inbox or dashboard)

- Mobile
  - [ ] Mobile menu opens/closes; links navigate correctly
  - [ ] Typography and spacing readable on small screens

- SEO & Social
  - [ ] Title and meta description look correct on key pages
  - [ ] Open Graph image appears when sharing a key URL
  - [ ] Sitemap builds and excludes private/test pages

- Performance & Accessibility (spot check)
  - [ ] Lighthouse performance and a11y reasonable on homepage
  - [ ] No large unoptimized images remaining

- Final Review
  - [ ] All requested changes from UAT logged in `docs/phase7-uat-feedback.md`
  - [ ] Blockers resolved or scheduled post-launch with owner/date


