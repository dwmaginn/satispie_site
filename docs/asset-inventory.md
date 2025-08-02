# SatisPie Asset Inventory

## Overview

This document catalogs all images, documents, and other assets needed for the SatisPie website migration.

## Required Assets

### Logo & Branding

- **SatisPie Logo** (Primary)

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `logo.png` or `logo.svg`
  - **Location**: `src/assets/images/logo.png`
  - **Alt Text**: "SatisPie LLC company logo"
  - **Usage**: Header navigation, footer, business cards
  - **Priority**: High

- **Favicon**
  - **Current Status**: Need to create from logo
  - **File Name**: `favicon.ico`, `favicon.svg`
  - **Location**: `public/favicon.ico`, `public/favicon.svg`
  - **Alt Text**: N/A
  - **Usage**: Browser tab icon
  - **Priority**: High

### Product Images

- **Apple Pie**

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `apple-pie.jpg`
  - **Location**: `src/assets/images/products/apple-pie.jpg`
  - **Alt Text**: "Apple pie in packaging"
  - **Usage**: Branded Products page
  - **Priority**: Medium

- **Pumpkin Pie**

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `pumpkin-pie.jpg`
  - **Location**: `src/assets/images/products/pumpkin-pie.jpg`
  - **Alt Text**: "Pumpkin pie in packaging"
  - **Usage**: Branded Products page
  - **Priority**: Medium

- **Pecan Pie**

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `pecan-pie.jpg`
  - **Location**: `src/assets/images/products/pecan-pie.jpg`
  - **Alt Text**: "Pecan pie in packaging"
  - **Usage**: Branded Products page
  - **Priority**: Medium

- **Blueberry Pie**

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `blueberry-pie.jpg`
  - **Location**: `src/assets/images/products/blueberry-pie.jpg`
  - **Alt Text**: "Blueberry pie in packaging"
  - **Usage**: Branded Products page
  - **Priority**: Medium

- **Cherry Pie**

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `cherry-pie.jpg`
  - **Location**: `src/assets/images/products/cherry-pie.jpg`
  - **Alt Text**: "Cherry pie in packaging"
  - **Usage**: Branded Products page
  - **Priority**: Medium

- **Peach Pie**

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `peach-pie.jpg`
  - **Location**: `src/assets/images/products/peach-pie.jpg`
  - **Alt Text**: "Peach pie in packaging"
  - **Usage**: Branded Products page
  - **Priority**: Medium

- **Apple Crumb Pie**

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `apple-crumb-pie.jpg`
  - **Location**: `src/assets/images/products/apple-crumb-pie.jpg`
  - **Alt Text**: "Apple crumb pie in packaging"
  - **Usage**: Branded Products page
  - **Priority**: Medium

- **Triple Berry Pie**

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `triple-berry-pie.jpg`
  - **Location**: `src/assets/images/products/triple-berry-pie.jpg`
  - **Alt Text**: "Triple berry pie in packaging"
  - **Usage**: Branded Products page
  - **Priority**: Medium

- **Sweet Potato Pie**
  - **Current Status**: Need to obtain from existing site
  - **File Name**: `sweet-potato-pie.jpg`
  - **Location**: `src/assets/images/products/sweet-potato-pie.jpg`
  - **Alt Text**: "Sweet potato pie in packaging"
  - **Usage**: Branded Products page
  - **Priority**: Medium

### Facility & Process Images

- **Baking Facility**

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `facility.jpg`
  - **Location**: `src/assets/images/facility.jpg`
  - **Alt Text**: "SatisPie baking facility in Rochester, NY"
  - **Usage**: Home page, About section
  - **Priority**: Medium

- **Baking Process**
  - **Current Status**: Need to obtain from existing site
  - **File Name**: `baking-process.jpg`
  - **Location**: `src/assets/images/baking-process.jpg`
  - **Alt Text**: "Pie baking process at SatisPie"
  - **Usage**: Home page, About section
  - **Priority**: Low

### Hero & Marketing Images

- **Hero Image**

  - **Current Status**: Need to create or obtain
  - **File Name**: `hero-pies.jpg`
  - **Location**: `src/assets/images/hero-pies.jpg`
  - **Alt Text**: "Assortment of delicious SatisPie products"
  - **Usage**: Home page hero section
  - **Priority**: High

- **Freezer Case Image**
  - **Current Status**: Need to obtain from existing site
  - **File Name**: `freezer-case.jpg`
  - **Location**: `src/assets/images/freezer-case.jpg`
  - **Alt Text**: "SatisPie freezer case with take & bake products"
  - **Usage**: Branded Products page
  - **Priority**: Medium

### Document Assets

- **SatisPie 101 - Baking Fundamentals**

  - **Current Status**: Need to obtain from existing site
  - **File Name**: `baking-fundamentals.pdf`
  - **Location**: `public/docs/baking-fundamentals.pdf`
  - **Alt Text**: "SatisPie 101 - Baking Fundamentals PDF guide"
  - **Usage**: Tips & Techniques page
  - **Priority**: High

- **SatisPie 102 - Baking Solutions**
  - **Current Status**: Need to obtain from existing site
  - **File Name**: `baking-solutions.pdf`
  - **Location**: `public/docs/baking-solutions.pdf`
  - **Alt Text**: "SatisPie 102 - Baking Solutions PDF guide"
  - **Usage**: Tips & Techniques page
  - **Priority**: High

## Asset Optimization Guidelines

### Image Optimization

- **Format**: Use WebP for photos, PNG for graphics with transparency, SVG for logos
- **Sizes**: Provide multiple resolutions for responsive images
- **Compression**: Optimize without visible quality loss
- **Naming**: Use lowercase with hyphens, descriptive names

### File Organization

```
src/assets/images/
├── logo.png
├── hero-pies.jpg
├── facility.jpg
├── baking-process.jpg
├── freezer-case.jpg
└── products/
    ├── apple-pie.jpg
    ├── pumpkin-pie.jpg
    ├── pecan-pie.jpg
    ├── blueberry-pie.jpg
    ├── cherry-pie.jpg
    ├── peach-pie.jpg
    ├── apple-crumb-pie.jpg
    ├── triple-berry-pie.jpg
    └── sweet-potato-pie.jpg

public/
├── favicon.ico
├── favicon.svg
└── docs/
    ├── baking-fundamentals.pdf
    └── baking-solutions.pdf
```

## Missing Assets

### High Priority

1. **SatisPie Logo** - Essential for brand identity
2. **Hero Image** - Needed for homepage impact
3. **PDF Documents** - Core content for Tips & Techniques page

### Medium Priority

1. **Product Images** - Important for product showcase
2. **Facility Image** - Helps establish credibility
3. **Freezer Case Image** - Shows retail presentation

### Low Priority

1. **Baking Process Images** - Nice to have for storytelling
2. **Additional Product Varieties** - Can be added later

## Asset Acquisition Plan

### Phase 1: Essential Assets

- [ ] Obtain SatisPie logo from current site
- [ ] Create favicon from logo
- [ ] Obtain PDF documents (SatisPie 101 & 102)
- [ ] Create or obtain hero image

### Phase 2: Product Assets

- [ ] Obtain product images for all pie varieties
- [ ] Optimize and resize images for web
- [ ] Create alt text for all product images

### Phase 3: Supporting Assets

- [ ] Obtain facility and process images
- [ ] Create additional marketing images as needed

## Quality Standards

### Image Requirements

- **Minimum Resolution**: 1200px width for hero images
- **Product Images**: Square format preferred (1:1 aspect ratio)
- **File Size**: Under 500KB for web optimization
- **Format**: WebP preferred, JPEG fallback

### Document Requirements

- **PDF Quality**: High resolution for printing
- **File Size**: Under 10MB for easy downloading
- **Accessibility**: Text-searchable PDFs preferred

## Implementation Notes

### Alt Text Guidelines

- Be descriptive but concise
- Include product names and context
- Avoid "image of" or "picture of" phrases
- Use empty alt="" for decorative images

### Responsive Images

- Provide multiple sizes for different screen sizes
- Use srcset for optimal loading
- Consider lazy loading for product galleries

### Accessibility

- Ensure sufficient color contrast
- Provide text alternatives for all images
- Test with screen readers

## Asset Status Tracking

| Asset          | Status     | Source         | Notes                 |
| -------------- | ---------- | -------------- | --------------------- |
| Logo           | ❌ Missing | Current site   | Need to extract       |
| Hero Image     | ❌ Missing | Need to create | Can use product photo |
| Product Images | ❌ Missing | Current site   | Need to extract       |
| PDF Documents  | ❌ Missing | Current site   | Need to extract       |
| Favicon        | ❌ Missing | Need to create | From logo             |

## Next Steps

1. **Contact Stakeholders** to obtain missing assets
2. **Extract Assets** from current site if accessible
3. **Create Placeholder Assets** for development
4. **Optimize Assets** for web use
5. **Implement Assets** in the new site structure
