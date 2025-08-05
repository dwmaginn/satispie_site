# SatisPie SEO Setup Guide - Phase 0

## Batch 0.1: Baseline Analytics & Crawl

### ✅ Completed Tasks

1. **Enhanced robots.txt** - Added proper directives and sitemap reference
2. **Configured sitemap** - Enhanced Astro sitemap with filtering and SEO settings
3. **Enabled blog functionality** - Set up blog infrastructure for content marketing
4. **Created SEO audit script** - Automated analysis of site structure and keywords

### 🔧 Next Steps Required

#### 1. Google Analytics 4 Setup

**Action Required:** Create GA4 property and update configuration

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create new GA4 property for `satispie.com`
3. Get the Measurement ID (format: G-XXXXXXXXXX)
4. Update `src/config.yaml`:
   ```yaml
   analytics:
     vendors:
       googleAnalytics:
         id: 'G-XXXXXXXXXX' # Replace with actual ID
   ```

#### 2. Google Search Console Setup

**Action Required:** Verify site ownership and submit sitemap

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://satispie.com`
3. Verify ownership (DNS record or HTML file)
4. Submit sitemap: `https://satispie.com/sitemap-index.xml`

#### 3. Core Web Vitals Baseline

**Action Required:** Capture performance metrics

1. Test homepage with [PageSpeed Insights](https://pagespeed.web.dev/)
2. Document current scores:
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)
3. Test mobile and desktop versions

### 📊 Keyword Strategy

#### Primary Keywords (High Priority)
- `pre-baked pies`
- `quality desserts`
- `pie delivery`
- `fresh baked pies`
- `artisan pies`

#### Secondary Keywords (Medium Priority)
- `pie fundraiser`
- `wholesale pies`
- `kosher desserts`
- `all-butter crust`
- `homemade pies`

#### Long-tail Keywords (Low Competition)
- `best pre-baked pies near me`
- `quality dessert delivery service`
- `fresh baked pies for events`
- `artisan pie wholesale supplier`
- `kosher certified desserts`

### 🎯 Page Optimization Targets

#### Homepage (/)
- **Title:** "SatisPie - Quality Pre-Baked Pies & Desserts | Fresh Artisan Pies"
- **Description:** "Discover premium pre-baked pies, waffles & pancakes. Quality desserts for retail & foodservice. Fresh, artisan pies delivered."
- **H1:** "Quality Pre-Baked Pies & Desserts"

#### About Page (/about)
- **Title:** "About SatisPie - Our Story & Mission | Artisan Pie Makers"
- **Description:** "Learn about SatisPie's mission to provide quality pre-baked pies. Our story of artisan pie making and community impact."
- **H1:** "About SatisPie - Our Story"

#### Services Page (/services)
- **Title:** "Pie Services - Retail, Wholesale & Fundraising | SatisPie"
- **Description:** "Comprehensive pie services: retail, wholesale, fundraising & foodservice. Quality pre-baked pies for every need."
- **H1:** "Pie Services & Solutions"

#### Contact Page (/contact)
- **Title:** "Contact SatisPie - Order Pies & Get Support"
- **Description:** "Contact SatisPie for pie orders, wholesale inquiries, or support. Get quality pre-baked pies delivered."
- **H1:** "Contact SatisPie"

### 📈 Success Metrics

#### Technical SEO
- [ ] Google Analytics tracking active
- [ ] Google Search Console verified
- [ ] Sitemap submitted and indexed
- [ ] Core Web Vitals baseline captured
- [ ] No crawl errors in GSC

#### Content SEO
- [ ] All pages have unique, optimized titles
- [ ] All pages have compelling meta descriptions
- [ ] Proper H1 hierarchy implemented
- [ ] Internal linking structure in place

### 🔍 Tools & Resources

#### Free SEO Tools
- [Google Analytics](https://analytics.google.com/)
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

#### Recommended Paid Tools
- Screaming Frog SEO Spider (crawl analysis)
- Ahrefs (keyword research & backlink analysis)
- SEMrush (competitor analysis)

### 📝 Implementation Checklist

- [ ] **GA4 Property Created**
  - [ ] Measurement ID obtained
  - [ ] Configuration updated in `src/config.yaml`
  - [ ] Real-time tracking verified

- [ ] **GSC Property Verified**
  - [ ] Site ownership confirmed
  - [ ] Sitemap submitted
  - [ ] Initial crawl completed

- [ ] **Performance Baseline**
  - [ ] PageSpeed Insights scores captured
  - [ ] Mobile performance tested
  - [ ] Desktop performance tested

- [ ] **Technical Setup**
  - [ ] Robots.txt optimized
  - [ ] Sitemap configuration enhanced
  - [ ] Blog functionality enabled

### 🚀 Ready for Next Phase

Once Batch 0.1 is complete, we can proceed to **Batch 0.2: Meta & Heading Fixes** to implement the keyword-optimized titles and descriptions identified above.

---

**Estimated Completion Time:** 3 hours
**Dependencies:** Access to Google Analytics and Search Console accounts
**Deliverables:** GA4 tracking, GSC verification, performance baseline, keyword strategy 