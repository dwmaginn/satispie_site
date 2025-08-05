# SatisPie SEO Implementation Plan

## Phase 0 – SEO Audit & Quick Wins

### Batch 0.1 – Baseline Analytics & Crawl

* **Goal:** Establish tracking, gather baseline metrics, and surface critical technical issues.
* **Step‑by‑Step Tasks:**

  1. Create and link **Google Analytics 4** property; verify via real‑time traffic.
  2. Add **Google Search Console** property; submit temporary IONOS domain.
  3. Generate **XML sitemap** (`/sitemap.xml`) and **robots.txt**; submit in GSC.
  4. Run full crawl with Screaming Frog; export error, redirect, duplicate reports.
  5. Capture baseline Core Web Vitals with PageSpeed Insights (desktop + mobile).
* **Deliverables:** GA 4 view, GSC verified, sitemap & robots committed, crawl audit spreadsheets, CWV baseline report.
* **Acceptance Criteria:** Tracking shows at least one test session; GSC indexing passes without coverage errors; crawl reports delivered.
* **Estimated Effort (h):** 3
* **Dependencies / Prereqs:** Production or staging site URL accessible.

### Batch 0.2 – Meta & Heading Fixes

* **Goal:** Optimize titles, descriptions, and headings across existing pages.
* **Step‑by‑Step Tasks:**

  1. Draft keyword‑rich `<title>` (≤ 60 chars) and `<meta description>` (≤ 155 chars) for Home, Products, Fundraising, Wholesale, Contact, FAQ.
  2. Update `<h1>` on each page to include primary keyword; add logical `<h2>/<h3>` structure.
  3. Commit changes; run Screaming Frog to verify no duplicate titles/descriptions remain.
* **Deliverables:** Updated page templates / markdown files with new meta tags and headings.
* **Acceptance Criteria:** All pages show unique, keyword‑optimized meta in crawl; headings follow a single H1 hierarchy.
* **Estimated Effort (h):** 2
* **Dependencies / Prereqs:** Batch 0.1 completed (keyword list created during audit).

### Batch 0.3 – Image SEO Pass

* **Goal:** Ensure all imagery is optimized for search and performance.
* **Step‑by‑Step Tasks:**

  1. Rename image files to descriptive, hyphen‑separated names (e.g., `cherry‑pie.jpg`).
  2. Compress photos (≤ 100 KB) and convert hero/product shots to WebP; retain fallback JPGs.
  3. Add descriptive `alt` text and `width/height` attributes; lazy‑load non‑critical images.
  4. Re‑test CWV; document LCP improvement.
* **Deliverables:** Optimized image set in repo, commit diff, CWV before/after screenshot.
* **Acceptance Criteria:** Largest Contentful Paint ≤ 2.5 s on mobile test; all images have meaningful alt text.
* **Estimated Effort (h):** 3
* **Dependencies / Prereqs:** Access to original image assets.

---

## Phase 1 – Content Infrastructure & Launch

### Batch 1.1 – Blog Setup & Editorial Calendar

* **Goal:** Enable a blog and plan 3 months of SEO‑driven content.
* **Step‑by‑Step Tasks:**

  1. Add `src/routes/blog/` (Astro MDX) or CMS collection; configure list & post template.
  2. Create category/tag taxonomy (Recipes, Seasonal, Behind‑the‑Scenes, Fundraising).
  3. Build editorial calendar (12 post ideas) with target keywords, publish dates, authors.
* **Deliverables:** Blog templates, calendar spreadsheet, initial draft outlines.
* **Acceptance Criteria:** `blog/index` lists dummy posts; content calendar approved by marketing.
* **Estimated Effort (h):** 4
* **Dependencies / Prereqs:** Phase 0 keywords finalized.

### Batch 1.2 – Publish Starter Content

* **Goal:** Launch first four SEO‑optimized articles.
* **Step‑by‑Step Tasks:**

  1. Write & edit 600–800 word posts for:

     * "Best Summer Fruit Pies You Can Buy"
     * "How a Pie Fundraiser Works"
     * "Behind Our All‑Butter Crust"
     * "Top Holiday Desserts for Thanksgiving"
  2. Add internal links to product pages; embed 1‑2 compressed images per post.
  3. Push live; request indexing via GSC URL Inspector.
* **Deliverables:** 4 published blog posts, social share images.
* **Acceptance Criteria:** Posts pass Hemingway/Flesch readability; GSC shows "Submitted & indexed."
* **Estimated Effort (h):** 6
* **Dependencies / Prereqs:** Batch 1.1 blog templates.

### Batch 1.3 – FAQ Page with Schema

* **Goal:** Answer common customer questions and capture FAQ rich snippets.
* **Step‑by‑Step Tasks:**

  1. Compile 10 FAQs (shipping, allergens, storage, store locator use).
  2. Create `/faq` page; mark up each Q/A pair with JSON‑LD FAQ schema.
  3. Validate in Google Rich Results tester; fix any errors.
* **Deliverables:** FAQ page, schema JSON‑LD block.
* **Acceptance Criteria:** Rich Results test passes; page appears in sitemap.
* **Estimated Effort (h):** 2
* **Dependencies / Prereqs:** Phase 0 structured‑data knowledge.

---

## Phase 2 – Technical SEO & Performance

### Batch 2.1 – Performance Optimization

* **Goal:** Achieve sub‑3 s mobile load and pass all Core Web Vitals.
* **Step‑by‑Step Tasks:**

  1. Integrate Astro Image for automatic responsive images.
  2. Enable HTTP/2 server push or preload for critical CSS.
  3. Configure Brotli + far‑future cache headers in `.htaccess`.
  4. Deploy and retest CWV; log improvements.
* **Deliverables:** Updated build config, CWV report.
* **Acceptance Criteria:** PSI scores ≥ 90 in Performance on mobile & desktop.
* **Estimated Effort (h):** 4
* **Dependencies / Prereqs:** Phase 0 CWV baseline.

### Batch 2.2 – Structured Data Rollout

* **Goal:** Implement organization, product, and recipe schemas.
* **Step‑by‑Step Tasks:**

  1. Add global Organization schema in `BaseLayout`.
  2. For each pie product page, inject Product schema (name, image, description).
  3. Add Recipe schema to newest blog recipe article.
  4. Validate via Rich Results; resolve warnings.
* **Deliverables:** Schema code snippets committed; validation screenshots.
* **Acceptance Criteria:** Zero critical schema errors in Search Console Enhancements panel.
* **Estimated Effort (h):** 3
* **Dependencies / Prereqs:** Phase 1 pages live.

### Batch 2.3 – Mobile UX Polish

* **Goal:** Ensure flawless mobile navigation and readability.
* **Step‑by‑Step Tasks:**

  1. Implement responsive hamburger menu with "Find Our Pies" CTA button.
  2. Increase body font to 18 px; confirm contrast AA.
  3. Test touch targets (≥ 48 px) and fix any overlapping tap areas.
* **Deliverables:** Updated header component, style tweaks.
* **Acceptance Criteria:** Chrome DevTools Lighthouse mobile accessibility ≥ 100; manual device test passes.
* **Estimated Effort (h):** 3
* **Dependencies / Prereqs:** Phase 2.1 performance work done (for stable layout).

---

## Phase 3 – Feature Development

### Batch 3.1 – Store Locator MVP

* **Goal:** Help users find retail locations stocking pies.
* **Step‑by‑Step Tasks:**

  1. Collect store list (CSV: name, address, lat/long).
  2. Integrate Google Maps JS API; build `/find‑pies` page with search by ZIP.
  3. Style results list; add "Get Directions" link per store.
* **Deliverables:** Locator page, store data file, API key secured in `.env`.
* **Acceptance Criteria:** Search returns correct store within 50 mile radius; map pins clickable.
* **Estimated Effort (h):** 6
* **Dependencies / Prereqs:** Google Cloud billing set up; Phase 2 mobile UX.

### Batch 3.2 – Order Inquiry Form

* **Goal:** Capture leads for holiday or bulk orders.
* **Step‑by‑Step Tasks:**

  1. Build `/order‑inquiry` form (name, email, phone, products, quantity, message).
  2. Connect Formspree endpoint; add honeypot anti‑spam.
  3. Send confirmation email autoresponder; display thanks page.
* **Deliverables:** Inquiry page, Formspree dashboard access, confirmation copy.
* **Acceptance Criteria:** Test submission delivers email to sales inbox within 1 min.
* **Estimated Effort (h):** 3
* **Dependencies / Prereqs:** Formspree account; Batch 3.1 optional.

### Batch 3.3 – Enhanced Product Pages

* **Goal:** Turn each pie flavor into a high‑converting SEO landing page.
* **Step‑by‑Step Tasks:**

  1. Create template `src/pages/pies/[slug].astro` with image gallery, ingredient list, nutrition table.
  2. Add JSON front‑matter for future CMS; map data file (`pies.json`).
  3. Embed product FAQ snippet + internal links to related blog articles.
* **Deliverables:** At least 5 product pages (Apple, Pumpkin, Cherry, Pecan, Blueberry).
* **Acceptance Criteria:** Each product page scores ≥ 90 Lighthouse SEO; visible breadcrumb trail.
* **Estimated Effort (h):** 4
* **Dependencies / Prereqs:** Batch 2.2 schema patterns.

### Batch 3.4 – Navigation & Homepage Redesign

* **Goal:** Elevate first‑impression impact and funnel users to key actions.
* **Step‑by‑Step Tasks:**

  1. Design hero section with high‑res pie photo, headline, and dual CTAs ("Find Pies" & "Get Recipes").
  2. Add three icon cards for Unique Selling Points (Kosher, All‑Butter, Employment Mission).
  3. Insert a latest‑blog teaser carousel (Astro island).
  4. A/B test CTA button colors for click‑through in GA.
* **Deliverables:** New homepage, CSS modules, variant test plan.
* **Acceptance Criteria:** Bounce rate drops ≥ 10 % vs baseline after two weeks; GA event goals track CTA clicks.
* **Estimated Effort (h):** 5
* **Dependencies / Prereqs:** Brand photography assets; GA event setup (Phase 0).

---

## Phase 4 – Off‑Page SEO & Promotion

### Batch 4.1 – PR & Blogger Outreach

* **Goal:** Earn high‑authority backlinks and media coverage.
* **Step‑by‑Step Tasks:**

  1. Draft press kit (PDF + image pack) and master outreach email template.
  2. Build list of 30 food journalists/bloggers; document domain authority & contact info.
  3. Send personalized pitches; track responses in spreadsheet.
* **Deliverables:** Press kit, outreach tracker, at least 5 secured article commitments.
* **Acceptance Criteria:** Minimum 5 do‑follow backlinks from DA 40+ sites within 8 weeks.
* **Estimated Effort (h):** 4
* **Dependencies / Prereqs:** Compelling brand story assets ready.

### Batch 4.2 – Directory & Citation Building

* **Goal:** Strengthen local/national citations for NAP consistency.
* **Step‑by‑Step Tasks:**

  1. Claim / update Google Business Profile, Yelp, Apple Maps, Bing Places.
  2. Submit consistent NAP to 15 industry/local directories (Foursquare, TripAdvisor, local chamber).
  3. Document credentials and live URLs.
* **Deliverables:** Citation list spreadsheet with submission status.
* **Acceptance Criteria:** 100 % NAP consistency across all listings; GBP live with photos & hours.
* **Estimated Effort (h):** 3
* **Dependencies / Prereqs:** Official company contact info verified.

### Batch 4.3 – Social UGC & Influencer Push

* **Goal:** Drive social buzz and indirect SEO signals.
* **Step‑by‑Step Tasks:**

  1. Launch #PieTime campaign on Instagram; encourage customers to share photos.
  2. Partner with 3 dessert influencers for product swaps; require feed post + story link.
  3. Embed Instagram feed widget on homepage.
* **Deliverables:** Influencer agreements, live posts, embedded feed code.
* **Acceptance Criteria:** Achieve ≥ 2 000 campaign hashtag uses in 30 days; referral traffic visible in GA Social channel.
* **Estimated Effort (h):** 4
* **Dependencies / Prereqs:** Product samples budget; social handles active.

### Batch 4.4 – Email Newsletter Setup

* **Goal:** Capture leads and generate repeat traffic.
* **Step‑by‑Step Tasks:**

  1. Integrate Mailchimp (or Klaviyo) signup form; add footer and exit‑intent modal.
  2. Design welcome automation with 10 % off in‑store coupon PDF.
  3. Schedule monthly newsletter template pulling latest blog & product highlights.
* **Deliverables:** Email opt‑in widget, automation workflow, first campaign draft.
* **Acceptance Criteria:** List growth ≥ 200 subscribers in first 60 days; open rate ≥ 35 %.
* **Estimated Effort (h):** 3
* **Dependencies / Prereqs:** Privacy policy updated; coupon approval.

---

## Phase 5 – Analytics & Iteration

### Batch 5.1 – Reporting Dashboard

* **Goal:** Provide real‑time visibility on SEO & marketing KPIs.
* **Step‑by‑Step Tasks:**

  1. Connect GA4, GSC, Mailchimp, and social APIs to Google Looker Studio.
  2. Build dashboard with traffic, top keywords, conversions, store‑locator clicks.
  3. Share view‑only link with stakeholders; schedule weekly email summary.
* **Deliverables:** Looker Studio dashboard, weekly email schedule.
* **Acceptance Criteria:** All data sources refresh automatically; metrics align with GA UI.
* **Estimated Effort (h):** 3
* **Dependencies / Prereqs:** GA4 events named consistently; Phase 3 locator event tracking.

### Batch 5.2 – Quarterly SEO Review

* **Goal:** Evaluate performance, identify gaps, and update roadmap.
* **Step‑by‑Step Tasks:**

  1. Export 90‑day GSC data; analyze ranking changes for target keywords.
  2. Audit backlink profile in Ahrefs/Moz; note new vs lost links.
  3. Hold retrospective meeting; reprioritize content & outreach.
* **Deliverables:** SEO review deck, updated backlog.
* **Acceptance Criteria:** Action items logged in project tracker; next‑quarter targets set.
* **Estimated Effort (h):** 4
* **Dependencies / Prereqs:** Batch 5.1 dashboard; at least 3 months of data collected.

---

## Phase 6 – E‑commerce Feasibility & Expansion

### Batch 6.1 – E‑commerce Scoping

* **Goal:** Decide on technology and logistics for online pie sales.
* **Step‑by‑Step Tasks:**

  1. Research platform options (Shopify headless with Astro, Snipcart, Woo + API).
  2. Estimate shipping costs & packaging; consult with fulfillment vendor.
  3. Draft ROI and timeline; present to leadership.
* **Deliverables:** Feasibility report, platform shortlist, cost projections.
* **Acceptance Criteria:** Go/No‑Go decision documented; budget request (if go).
* **Estimated Effort (h):** 4
* **Dependencies / Prereqs:** Sales interest data from inquiry form (Phase 3).

### Batch 6.2 – Subscription Pilot ("Pie of the Month")

* **Goal:** Test recurring revenue concept with a limited subscriber cohort.
* **Step‑by‑Step Tasks:**

  1. Install subscription plug‑in (Recharge or native if Shopify chosen).
  2. Create landing page with plan details and FAQ; limit to 100 subscriptions.
  3. Soft‑launch via email list; gather feedback after first shipment.
* **Deliverables:** Subscription checkout flow, landing page, feedback survey.
* **Acceptance Criteria:** 80 % of pilot customers rate experience ≥ 4/5; churn < 10 % after 2 months.
* **Estimated Effort (h):** 6
* **Dependencies / Prereqs:** Batch 6.1 green‑light; payment gateway account.

---

### Parallelization & Gantt Notes

* Phase 0 must finish before Phase 1 starts.
* Batch 2.1 (Performance) can run in parallel with Batch 1.2 once initial blog is live.
* Off‑Page Phase 4 activities (link building, social) should start once Phase 1 content exists and continue concurrently with Phases 2–3.
* Phase 5 reporting begins as soon as meaningful data accrues (≈ Month 2).
* Phase 6 starts only after at least one full quarter of traffic and demand signals.

---

This phased playbook breaks the SEO project into executable 2–6 h work packets, each with clear goals, tasks, deliverables, and acceptance criteria so your implementation team can move methodically from foundational fixes to long‑term growth initiatives. 