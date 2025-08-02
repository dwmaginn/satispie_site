# SatisPie Site Map & Migration Plan

## Overview

This document maps the existing satispie.com pages to their new Astro routing structure and identifies content to migrate, update, or omit.

## Current Site Structure Analysis

### Existing Pages on satispie.com

Based on the original site analysis, the following pages exist and need migration:

| Old URL                | New Astro Path                        | Page Title        | Content Type    | Special Features                 | Status              |
| ---------------------- | ------------------------------------- | ----------------- | --------------- | -------------------------------- | ------------------- |
| `/`                    | `src/pages/index.astro`               | Home              | Landing page    | Welcome message, company intro   | ✅ Ready to migrate |
| `/branded-products`    | `src/pages/branded-products.astro`    | Branded Products  | Product catalog | Product list, private label info | ✅ Ready to migrate |
| `/tips-and-techniques` | `src/pages/tips-and-techniques.astro` | Tips & Techniques | Resources       | PDF downloads (SatisPie 101/102) | ✅ Ready to migrate |
| `/contact-us`          | `src/pages/contact-us.astro`          | Contact Us        | Contact form    | Contact form, company info       | ✅ Ready to migrate |
| `/apply-today`         | `src/pages/apply-today.astro`         | Apply Today       | Job application | Job application form             | ✅ Ready to migrate |

### Content to Omit/Update

1. **Homepage "Under Renovation" Notice**: Remove the "currently under site renovations" message from the homepage
2. **Outdated Announcements**: Any temporary notices or "coming soon" content should be updated or removed
3. **Old CMS References**: Remove any references to the old content management system

### External Links to Preserve

1. **PDF Resources**:
   - SatisPie 101 - Baking Fundamentals (PDF)
   - SatisPie 102 - Baking Solutions (PDF)
2. **Contact Information**:
   - Phone: (585) 424-1240
   - Email: mm@satispie.com
   - Address: 155 Balta Drive, Rochester, NY 14623

### Navigation Structure

The new site will have a simplified navigation menu:

- **Home** (`/`)
- **Branded Products** (`/branded-products`)
- **Tips & Techniques** (`/tips-and-techniques`)
- **Contact Us** (`/contact-us`)
- **Apply Today** (`/apply-today`)

### Page Content Summaries

#### Home Page (`/`)

- Welcome message
- Company introduction
- New plant information
- Private label products mention
- Seasonal notes about pies
- **Omit**: "Under site renovations" notice

#### Branded Products (`/branded-products`)

- Product flavor list (Apple, Pumpkin, Pecan, Blueberry, Cherry, Peach, Apple Crumb, Triple Berry, Sweet Potato)
- Private label customization information
- SQF, HACCP & GMP controls mention
- Product images (if available)

#### Tips & Techniques (`/tips-and-techniques`)

- Introduction to baking resources
- SatisPie 101 - Baking Fundamentals (PDF download)
- SatisPie 102 - Baking Solutions (PDF download)
- **Update**: Remove "coming soon" language since resources are available

#### Contact Us (`/contact-us`)

- Company contact information
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Message (required)
- **Remove**: Captcha (not needed for simple contact form)

#### Apply Today (`/apply-today`)

- Job application form with fields:
  - Name (required)
  - Address (required)
  - Email (required)
  - Telephone (required)
  - Position of Interest (required)
- **Remove**: Captcha (not needed for simple application form)

### SEO Considerations

- All pages need unique meta titles and descriptions
- Use SEO-friendly URLs (already planned with dashes)
- Ensure proper heading hierarchy (H1, H2, etc.)
- Add alt text for all images
- Include structured data where appropriate

### 404 Page

- Create custom 404 page at `src/pages/404.astro`
- Provide navigation back to main site
- Keep on-brand messaging

## Migration Checklist

- [ ] Create all page files in `src/pages/`
- [ ] Migrate content from old site to new pages
- [ ] Update navigation structure
- [ ] Add proper meta tags and SEO
- [ ] Test all internal links
- [ ] Verify PDF downloads work
- [ ] Test contact and application forms
- [ ] Ensure responsive design
- [ ] Add custom 404 page
- [ ] Remove outdated content notices

## Notes

- All pages will use a common layout with header and footer
- Forms will be implemented with proper validation
- PDF resources will be stored in `public/docs/`
- Images will be optimized and stored in `src/assets/images/`
- Brand colors and fonts will be applied globally
