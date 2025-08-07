# SatisPie Website Redesign - Phase 2 Component Architecture

## Overview
This document outlines the Astro component architecture for the redesigned SatisPie website. Components are organized by functionality and reusability to ensure consistency and maintainability.

## Component Hierarchy

### 1. Layout Components
**Location**: `src/layouts/`

#### BaseLayout.astro
- **Purpose**: Main layout wrapper for all pages
- **Props**: 
  - `metadata` (title, description, keywords)
  - `pageTitle` (optional override)
- **Features**:
  - Header inclusion
  - Footer inclusion
  - SEO meta tags
  - Google Analytics
  - Structured data

#### PageLayout.astro
- **Purpose**: Layout for content pages (About, Contact, etc.)
- **Props**:
  - `metadata` (title, description)
  - `hero` (optional hero section)
- **Features**:
  - Page-specific hero sections
  - Content area styling
  - Breadcrumb support

#### MarkdownLayout.astro
- **Purpose**: Layout for blog/tips articles
- **Props**:
  - `frontmatter` (article metadata)
  - `content` (article content)
- **Features**:
  - Article styling
  - Author information
  - Related content
  - Social sharing

### 2. Global Components
**Location**: `src/components/`

#### Header.astro
- **Purpose**: Site navigation and branding
- **Props**:
  - `currentPage` (active page indicator)
- **Features**:
  - Logo display
  - Navigation menu
  - Mobile hamburger menu
  - Contact CTA button
  - Responsive design

#### Footer.astro
- **Purpose**: Site footer with links and newsletter
- **Props**: None (static content)
- **Features**:
  - Newsletter signup form
  - Social media links
  - Legal links
  - Company information
  - Contact details

#### Logo.astro
- **Purpose**: Reusable logo component
- **Props**:
  - `size` (sm, md, lg)
  - `variant` (light, dark)
- **Features**:
  - SVG logo display
  - Responsive sizing
  - Alt text support

### 3. UI Components
**Location**: `src/components/ui/`

#### Button.astro
- **Purpose**: Reusable button component
- **Props**:
  - `variant` (primary, secondary, outline)
  - `size` (sm, md, lg)
  - `href` (for link buttons)
  - `type` (button, submit, reset)
- **Features**:
  - Multiple style variants
  - Icon support
  - Loading states
  - Accessibility features

#### Form.astro
- **Purpose**: Form wrapper with validation
- **Props**:
  - `action` (form submission URL)
  - `method` (POST, GET)
  - `fields` (field configuration)
- **Features**:
  - Form validation
  - Error handling
  - Success messages
  - Spam protection

#### Input.astro
- **Purpose**: Form input component
- **Props**:
  - `type` (text, email, phone, etc.)
  - `name` (field name)
  - `label` (field label)
  - `required` (validation)
  - `placeholder` (input placeholder)
- **Features**:
  - Label association
  - Error states
  - Validation feedback
  - Accessibility support

#### Card.astro
- **Purpose**: Content card wrapper
- **Props**:
  - `title` (card title)
  - `subtitle` (optional subtitle)
  - `image` (card image)
  - `link` (optional link)
- **Features**:
  - Image display
  - Hover effects
  - Link integration
  - Responsive design

#### Modal.astro
- **Purpose**: Popup modal component
- **Props**:
  - `id` (modal identifier)
  - `title` (modal title)
  - `content` (modal content)
- **Features**:
  - Backdrop overlay
  - Close functionality
  - Keyboard navigation
  - Focus management

### 4. Page-Specific Components
**Location**: `src/components/widgets/`

#### Hero.astro
- **Purpose**: Homepage hero section
- **Props**:
  - `title` (hero title)
  - `subtitle` (hero subtitle)
  - `image` (hero image)
  - `cta` (call-to-action)
- **Features**:
  - Background image
  - CTA buttons
  - Responsive text sizing
  - Animation support

#### ProductCard.astro
- **Purpose**: Product display card
- **Props**:
  - `product` (product data object)
  - `variant` (display variant)
- **Features**:
  - Product image
  - Product details
  - Pricing information
  - Action buttons

#### ProductGrid.astro
- **Purpose**: Product listing grid
- **Props**:
  - `products` (array of products)
  - `columns` (grid columns)
  - `filters` (filter options)
- **Features**:
  - Responsive grid
  - Filtering capability
  - Pagination
  - Loading states

#### TipCard.astro
- **Purpose**: Tips article card
- **Props**:
  - `tip` (tip data object)
  - `variant` (display variant)
- **Features**:
  - Article thumbnail
  - Article title
  - Article excerpt
  - Read time
  - Category tags

#### TipGrid.astro
- **Purpose**: Tips listing grid
- **Props**:
  - `tips` (array of tips)
  - `columns` (grid columns)
- **Features**:
  - Responsive grid
  - Search functionality
  - Category filtering
  - Pagination

#### StoreLocator.astro
- **Purpose**: Store finder component
- **Props**:
  - `apiKey` (Google Maps API key)
  - `stores` (store data)
- **Features**:
  - ZIP code search
  - Map integration
  - Store listings
  - Distance calculation

#### ContactForm.astro
- **Purpose**: Contact form component
- **Props**:
  - `type` (form type: general, sales, support)
  - `endpoint` (form submission endpoint)
- **Features**:
  - Form validation
  - File upload support
  - Success/error handling
  - Spam protection

#### TestimonialCard.astro
- **Purpose**: Customer testimonial display
- **Props**:
  - `testimonial` (testimonial data)
  - `variant` (display variant)
- **Features**:
  - Customer quote
  - Customer information
  - Rating display
  - Company logo

### 5. Utility Components
**Location**: `src/components/common/`

#### Analytics.astro
- **Purpose**: Google Analytics integration
- **Props**:
  - `trackingId` (GA tracking ID)
- **Features**:
  - Page view tracking
  - Event tracking
  - Conversion tracking
  - Privacy compliance

#### SEO.astro
- **Purpose**: SEO meta tags and structured data
- **Props**:
  - `metadata` (page metadata)
  - `schema` (structured data)
- **Features**:
  - Meta tags generation
  - Open Graph tags
  - Twitter Cards
  - JSON-LD structured data

#### SocialShare.astro
- **Purpose**: Social media sharing
- **Props**:
  - `url` (share URL)
  - `title` (share title)
  - `description` (share description)
  - `image` (share image)
- **Features**:
  - Social media buttons
  - Share count display
  - Copy link functionality

#### NewsletterSignup.astro
- **Purpose**: Newsletter subscription form
- **Props**:
  - `placeholder` (email placeholder)
  - `buttonText` (submit button text)
- **Features**:
  - Email validation
  - Success/error messages
  - Integration with email service
  - Privacy compliance

### 6. Content Components
**Location**: `src/components/content/`

#### Timeline.astro
- **Purpose**: Company timeline display
- **Props**:
  - `events` (timeline events array)
- **Features**:
  - Vertical timeline layout
  - Event descriptions
  - Date formatting
  - Responsive design

#### Stats.astro
- **Purpose**: Statistics display
- **Props**:
  - `stats` (statistics array)
  - `columns` (display columns)
- **Features**:
  - Number formatting
  - Icon support
  - Animation effects
  - Responsive layout

#### Certifications.astro
- **Purpose**: Quality certifications display
- **Props**:
  - `certifications` (certifications array)
- **Features**:
  - Certification badges
  - Description tooltips
  - Link to certificates
  - Responsive grid

## Component Data Structure

### Product Data Structure
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  specifications: {
    size: string;
    weight: string;
    ingredients: string[];
  };
  pricing: {
    wholesale: number;
    retail: number;
  };
  availability: boolean;
}
```

### Tip Data Structure
```typescript
interface Tip {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readingTime: number;
  image: string;
  category: string;
  tags: string[];
}
```

### Store Data Structure
```typescript
interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  distance?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}
```

## Component Styling

### Design System
- **Colors**: Brand color palette defined in Tailwind config
- **Typography**: Font families and sizing scale
- **Spacing**: Consistent spacing scale
- **Breakpoints**: Responsive breakpoints
- **Shadows**: Elevation system
- **Animations**: Transition timing and easing

### CSS Architecture
- **Tailwind CSS**: Utility-first approach
- **Component Classes**: Scoped component styles
- **Custom Properties**: CSS variables for theming
- **Responsive Design**: Mobile-first approach

## Component Testing Strategy

### Unit Testing
- **Component Props**: Validate prop types and defaults
- **Event Handling**: Test click and form events
- **Accessibility**: Test ARIA attributes and keyboard navigation
- **Responsive Behavior**: Test breakpoint behavior

### Integration Testing
- **Page Rendering**: Test component integration on pages
- **Data Flow**: Test data passing between components
- **User Interactions**: Test complete user flows

## Performance Considerations

### Component Optimization
- **Lazy Loading**: Load components on demand
- **Code Splitting**: Split large components
- **Image Optimization**: Use Astro Image component
- **Caching**: Implement component caching

### Bundle Size
- **Tree Shaking**: Remove unused code
- **Minification**: Compress component code
- **Asset Optimization**: Optimize images and fonts

## Accessibility Requirements

### WCAG Compliance
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Reader Support**: Proper ARIA labels and roles
- **Color Contrast**: Meet AA standards
- **Focus Management**: Clear focus indicators

### Component Accessibility
- **Form Labels**: Proper label associations
- **Error Messages**: Clear error communication
- **Loading States**: Loading indicators
- **Skip Links**: Navigation shortcuts

## Documentation Standards

### Component Documentation
- **Purpose**: Clear component description
- **Props**: Complete prop documentation
- **Examples**: Usage examples
- **Accessibility**: Accessibility considerations

### Code Comments
- **Complex Logic**: Explain complex algorithms
- **Business Rules**: Document business requirements
- **API Integration**: Document external integrations
- **Performance Notes**: Document performance considerations

## Next Steps

This component architecture will guide:
1. **Development Implementation** (Phase 5)
2. **Component Testing** (Phase 6)
3. **Performance Optimization** (Ongoing)
4. **Maintenance and Updates** (Post-launch)

---

*Component architecture completed for Phase 2.2 - ready for development implementation.*
