# Phase 3: Visual Design System Documentation

## Overview

This document outlines the complete visual design system for the SatisPie website redesign, created during Phase 3 of the implementation plan. The design system ensures consistency, accessibility, and professional quality across all pages and components.

## Brand Identity

### Color Palette

**Primary Colors:**
- **Blue (#2563EB)** - Primary brand color, used for CTAs, links, and key elements
- **Blue Dark (#1E40AF)** - Hover states and emphasis
- **Blue Light (#3B82F6)** - Secondary actions and highlights

**Secondary Colors:**
- **Brown (#8B4513)** - Warm pie crust color, used for accents
- **Brown Dark (#6B3410)** - Darker brown for emphasis
- **Brown Light (#A0522D)** - Lighter brown for backgrounds

**Accent Colors:**
- **Gold (#F59E0B)** - Golden baked goods color, used for highlights
- **Gold Dark (#D97706)** - Darker gold for emphasis
- **Gold Light (#FCD34D)** - Light gold for backgrounds

**Semantic Colors:**
- **Success (#10B981)** - Green for success states
- **Warning (#F59E0B)** - Orange for warnings
- **Error (#EF4444)** - Red for errors
- **Info (#3B82F6)** - Blue for informational content

**Text Colors:**
- **Primary (#111827)** - Main text color
- **Secondary (#4B5563)** - Secondary text
- **Muted (#6B7280)** - Muted text
- **Light (#9CA3AF)** - Light text

**Background Colors:**
- **Primary (#FFFFFF)** - Main background
- **Secondary (#F9FAFB)** - Secondary background
- **Tertiary (#F3F4F6)** - Tertiary background
- **Dark (#111827)** - Dark backgrounds

### Typography

**Font Families:**
- **Sans Serif:** Inter - Used for body text, navigation, and general content
- **Serif:** Playfair Display - Used for headings and display text
- **Fallbacks:** System fonts for optimal performance

**Font Sizes:**
- **Mobile Base:** 18px (line-height: 1.6)
- **Mobile Large:** 20px (line-height: 1.5)
- **Mobile XL:** 24px (line-height: 1.4)
- **Mobile 2XL:** 30px (line-height: 1.3)

**Heading Hierarchy:**
- **H1:** 4xl-6xl (48-72px) - Page titles
- **H2:** 3xl-4xl (36-48px) - Section titles
- **H3:** 2xl (24px) - Subsection titles
- **H4:** xl (20px) - Card titles
- **H5:** lg (18px) - Small headings
- **H6:** base (16px) - Micro headings

## Component Library

### Buttons

**Primary Button:**
```css
bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200
```

**Secondary Button:**
```css
border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200
```

**Small Button:**
```css
px-4 py-2 text-sm font-medium
```

### Cards

**Product Card:**
- White background with shadow
- Rounded corners (xl)
- Hover shadow effect
- Image with overlay
- Category badge
- Price badge
- Action buttons

**Feature Card:**
- Gradient background
- Icon with colored background
- Title and description
- Optional CTA

### Forms

**Input Fields:**
```css
w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
```

**Form Sections:**
- White background
- Rounded corners
- Padding (6)
- Section headers

### Navigation

**Header:**
- Sticky positioning
- White background with border
- Logo on left
- Navigation links in center
- CTA button on right
- Mobile hamburger menu

**Mobile Menu:**
- Slide-down animation
- Full-width background
- Stacked navigation items
- CTA button at bottom

### Layout Components

**Hero Sections:**
- Gradient backgrounds
- Large typography
- CTA buttons
- Optional images or illustrations

**Content Sections:**
- Consistent padding (py-16)
- Max-width containers
- Grid layouts for content
- Responsive breakpoints

## Page Templates

### Homepage
- Hero section with tagline and CTAs
- Stats section with metrics
- Features grid (3 columns)
- Product categories
- Testimonials
- Newsletter signup

### Products Page
- Hero with category filters
- Featured products section
- Product grid with filtering
- Category overview
- Call-to-action section

### Where to Buy Page
- Hero with search functionality
- Store locator form
- Store results with details
- Product availability info
- Contact information

### Tips & Tricks Page
- Hero with category filters
- Featured tip section
- Tips grid with thumbnails
- Newsletter signup
- Related tips

### Contact Page
- Hero section
- Contact form with validation
- Contact information
- Map or location details
- FAQ section

### Careers Page
- Hero with application CTA
- Benefits section
- Open positions grid
- Comprehensive application form
- Contact information

## Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized typography for readability

### Responsive Patterns
- **Grid Systems:** 1 column → 2 columns → 3+ columns
- **Navigation:** Hamburger menu → Horizontal navigation
- **Typography:** Smaller → Larger font sizes
- **Spacing:** Reduced → Increased padding/margins

## Interactive Elements

### Hover States
- Color transitions (200ms duration)
- Shadow effects
- Scale transforms
- Opacity changes

### Focus States
- Blue ring (2px)
- High contrast
- Keyboard navigation support
- Screen reader compatibility

### Loading States
- Skeleton screens
- Spinner animations
- Progress indicators
- Disabled states

## Accessibility

### Color Contrast
- Minimum 4.5:1 ratio for normal text
- Minimum 3:1 ratio for large text
- High contrast mode support

### Keyboard Navigation
- Tab order logical
- Focus indicators visible
- Skip links available
- ARIA labels implemented

### Screen Reader Support
- Semantic HTML structure
- Alt text for images
- ARIA roles and states
- Descriptive link text

## Animation Guidelines

### Transitions
- **Duration:** 200ms for most interactions
- **Easing:** Ease-out for natural feel
- **Properties:** Color, opacity, transform, shadow

### Micro-interactions
- Button hover effects
- Form field focus states
- Loading spinners
- Success/error feedback

### Page Transitions
- Smooth scrolling
- Fade-in animations
- Staggered content loading
- Progressive disclosure

## Asset Guidelines

### Images
- **Hero Images:** 1200x600px minimum
- **Product Images:** 400x300px minimum
- **Thumbnail Images:** 200x150px minimum
- **Format:** WebP with JPEG fallback
- **Optimization:** Compressed for web

### Icons
- **Style:** Tabler Icons (consistent style)
- **Size:** 16px, 20px, 24px, 32px
- **Color:** Inherit from parent or brand colors
- **Accessibility:** Descriptive labels

### Logo
- **Primary:** SVG format for scalability
- **Colors:** Blue and white versions
- **Size:** Minimum 120px width
- **Spacing:** Clear space around logo

## Implementation Notes

### CSS Framework
- **Tailwind CSS** for utility classes
- **Custom components** for complex patterns
- **CSS custom properties** for theming
- **PostCSS** for optimization

### JavaScript
- **Vanilla JS** for interactions
- **Alpine.js** for simple state management
- **Form validation** with custom logic
- **Progressive enhancement** approach

### Performance
- **Lazy loading** for images
- **Code splitting** for pages
- **Minification** of assets
- **CDN delivery** for static files

## Quality Assurance

### Design Review Checklist
- [ ] Brand colors applied correctly
- [ ] Typography hierarchy maintained
- [ ] Responsive behavior tested
- [ ] Accessibility standards met
- [ ] Performance benchmarks achieved
- [ ] Cross-browser compatibility verified

### Testing Protocol
- **Visual Testing:** Compare with design mockups
- **Functional Testing:** Verify all interactions work
- **Accessibility Testing:** Screen reader and keyboard navigation
- **Performance Testing:** Lighthouse scores and load times
- **Cross-browser Testing:** Chrome, Firefox, Safari, Edge

## Future Considerations

### Scalability
- Component library can be extended
- Design tokens for easy theming
- Documentation for new team members
- Version control for design system

### Maintenance
- Regular accessibility audits
- Performance monitoring
- User feedback integration
- Design system updates

---

*This design system documentation serves as the foundation for all visual design decisions and ensures consistency across the SatisPie website. It should be referenced during development and updated as the design system evolves.*
