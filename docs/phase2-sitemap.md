# SatisPie Website Redesign - Phase 2 Site Map

## Overview
This document outlines the proposed site structure for the redesigned SatisPie website, focusing on improved user experience, clear navigation, and enhanced content organization.

## Primary Navigation Structure

### 1. Home (/)
- **Purpose**: Landing page with hero section, key value propositions, and clear CTAs
- **Key Sections**:
  - Hero with tagline and primary CTA
  - Product highlights (3 main categories)
  - Manufacturing capabilities overview
  - Trust indicators (certifications, stats)
  - "Where to Buy" callout
  - Contact CTA

### 2. Products (/products)
- **Purpose**: Showcase all product offerings with clear categorization
- **Key Sections**:
  - Product category navigation
  - Product grid with images and descriptions
  - Filtering options (if needed)
  - Product specifications
  - "Request Quote" CTAs

### 3. Tips & Tricks (/tips-and-tricks)
- **Purpose**: Educational content hub for baking tips and product usage
- **Key Sections**:
  - Tips listing page with thumbnails and excerpts
  - Individual tip articles (Markdown-based)
  - Related tips suggestions
  - Newsletter signup integration

### 4. Where to Buy (/where-to-buy)
- **Purpose**: Store locator functionality for consumers
- **Key Sections**:
  - ZIP code search form
  - Store results display (map or list)
  - Store information (address, hours, etc.)
  - "Not in your area?" fallback

### 5. About Us (/about)
- **Purpose**: Company story and credibility building
- **Key Sections**:
  - Company history and mission
  - Manufacturing facility overview
  - Quality certifications
  - Team/leadership (if applicable)
  - Timeline of achievements

### 6. Contact Us (/contact)
- **Purpose**: Multiple contact options and inquiry forms
- **Key Sections**:
  - Contact form (Name, Email, Phone, Message)
  - Contact information display
  - Office location and hours
  - Different contact types (Sales, Support, General)

### 7. Careers (/careers) - Optional
- **Purpose**: Job opportunities and application process
- **Key Sections**:
  - Current openings
  - Application form
  - Company culture overview
  - Benefits information

## Secondary Navigation

### Footer Links
- **Legal**: Terms of Use, Privacy Policy
- **Resources**: Product catalogs, certifications
- **Social Media**: LinkedIn, Facebook, Instagram
- **Newsletter Signup**: Email subscription form

### Utility Pages
- **404 Error Page**: Custom error page with navigation back to main site
- **Thank You Pages**: Form submission confirmations

## Page Content Requirements

### Homepage (/)
- **Hero Section**: Compelling tagline, value proposition, primary CTA
- **Product Highlights**: 3 main product categories with images
- **Manufacturing Stats**: Key metrics (pies produced, partners, etc.)
- **Trust Indicators**: Certifications, awards, testimonials
- **Where to Buy**: Prominent callout to store locator
- **Contact CTA**: Secondary call-to-action

### Products Page (/products)
- **Category Navigation**: Clear product type organization
- **Product Grid**: Visual product cards with images
- **Product Details**: Descriptions, specifications, use cases
- **Filtering**: By type, size, packaging (if applicable)
- **Quote Requests**: Easy way to request pricing

### Tips & Tricks (/tips-and-tricks)
- **Article Listing**: Grid/list of tip articles
- **Article Pages**: Individual tip content with images
- **Related Content**: Cross-linking between tips
- **Search/Filter**: By topic or difficulty (if needed)

### Where to Buy (/where-to-buy)
- **Search Interface**: ZIP code input and search
- **Results Display**: Map or list of nearby stores
- **Store Details**: Address, hours, contact info
- **Fallback Content**: "Contact us" if no stores nearby

### About Us (/about)
- **Company Story**: Founding, mission, values
- **Manufacturing**: Facility details, capabilities
- **Quality**: Certifications, processes, standards
- **Timeline**: Key milestones and achievements
- **Team**: Leadership and key personnel (if applicable)

### Contact Us (/contact)
- **Contact Form**: Name, email, phone, message fields
- **Contact Info**: Address, phone, email, hours
- **Contact Types**: Different forms for different inquiries
- **Map Integration**: Location display (if applicable)

## Navigation Hierarchy

```
Home (/)
├── Products (/products)
│   ├── Fruit Pies (/products/fruit-pies)
│   ├── Seasonal Pies (/products/seasonal)
│   └── Specialty Pies (/products/specialty)
├── Tips & Tricks (/tips-and-tricks)
│   ├── How to Slice a Pie (/tips/how-to-slice-a-pie)
│   ├── Storage Tips (/tips/storage-tips)
│   └── Serving Suggestions (/tips/serving-suggestions)
├── Where to Buy (/where-to-buy)
├── About Us (/about)
├── Contact Us (/contact)
└── Careers (/careers) - Optional
```

## Mobile Navigation Considerations

- **Hamburger Menu**: Collapsible navigation for mobile
- **Touch-Friendly**: Large touch targets for mobile users
- **Simplified Navigation**: Reduced menu items on mobile
- **Quick Access**: Important pages easily accessible

## SEO Structure

- **URL Structure**: Clean, descriptive URLs
- **Breadcrumbs**: Navigation breadcrumbs for deep pages
- **Meta Tags**: Unique titles and descriptions for each page
- **Schema Markup**: Structured data for products and organization

## Content Priority

### High Priority (Must Have)
- Homepage with clear value proposition
- Products page with all offerings
- Contact page with working forms
- About page with company story
- Where to Buy functionality

### Medium Priority (Should Have)
- Tips & Tricks content hub
- Careers page (if applicable)
- Enhanced product details
- Customer testimonials

### Low Priority (Nice to Have)
- Blog/news section
- Advanced filtering
- Interactive features
- Social media integration

## Technical Considerations

- **Astro Components**: Reusable components for consistency
- **Responsive Design**: Mobile-first approach
- **Performance**: Fast loading times
- **Accessibility**: WCAG compliance
- **SEO**: Search engine optimization

## Success Metrics

- **Navigation Clarity**: Users can find information quickly
- **Conversion Rate**: Contact form submissions
- **Engagement**: Time on site, page views
- **Mobile Usage**: Mobile-friendly experience
- **SEO Performance**: Search engine rankings

---

*This site map serves as the foundation for wireframe development and content planning in subsequent phases.*
