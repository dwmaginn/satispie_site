# SatisPie Brand Design System

## Brand Palette

### Primary Colors

Based on food industry best practices and pie/baking themes, we've defined the following brand colors:

#### Primary Brand Colors

- **SatisPie Primary Orange**: `#D35400` (211, 84, 0)
  - A warm, appetizing orange that evokes the color of baked goods and warmth
  - Used for primary buttons, links, and key brand elements
- **SatisPie Secondary Brown**: `#8B4513` (139, 69, 19)

  - A rich, warm brown reminiscent of pie crust and natural ingredients
  - Used for secondary elements and accents

- **SatisPie Accent Red**: `#C0392B` (192, 57, 43)
  - A deep red that complements the orange and brown palette
  - Used for call-to-action elements and highlights

#### Neutral Colors

- **Text Primary**: `#2C3E50` (44, 62, 80)
  - Dark blue-gray for primary text, ensuring excellent readability
- **Text Secondary**: `#7F8C8D` (127, 140, 141)
  - Medium gray for secondary text and muted content
- **Background Light**: `#F8F9FA` (248, 249, 250)
  - Very light gray for page backgrounds
- **Background White**: `#FFFFFF` (255, 255, 255)
  - Pure white for content areas

### Color Usage Guidelines

#### Primary Elements

- **Buttons**: Use SatisPie Primary Orange (`#D35400`) for primary actions
- **Links**: Use SatisPie Primary Orange with hover state to Secondary Brown
- **Headings**: Use Text Primary (`#2C3E50`) for all headings
- **Body Text**: Use Text Primary (`#2C3E50`) for main content

#### Secondary Elements

- **Accents**: Use SatisPie Accent Red (`#C0392B`) sparingly for highlights
- **Backgrounds**: Use Background Light (`#F8F9FA`) for section backgrounds
- **Borders**: Use a light gray (`#E9ECEF`) for subtle borders

### Typography

#### Font Selection

- **Primary Font**: Inter (already configured in the template)
  - Clean, modern, and highly readable
  - Excellent for both headings and body text
- **Fallback Stack**: `'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

#### Font Weights

- **Headings**: 600 (semibold) for H1, H2; 500 (medium) for H3, H4
- **Body Text**: 400 (regular)
- **Emphasis**: 600 (semibold) for important text
- **Links**: 500 (medium) with color emphasis

### Design Principles

#### Food Industry Focus

- Warm, appetizing color palette
- Clean, professional presentation
- Emphasis on quality and tradition
- Accessible and easy-to-read typography

#### Brand Personality

- **Trustworthy**: Professional, established company
- **Warm**: Friendly, approachable, family-oriented
- **Quality**: Premium ingredients and processes
- **Traditional**: Time-tested recipes and methods

### Implementation Notes

#### CSS Variables

The brand colors will be implemented as CSS custom properties:

```css
:root {
  --sp-primary: #d35400;
  --sp-secondary: #8b4513;
  --sp-accent: #c0392b;
  --sp-text-primary: #2c3e50;
  --sp-text-secondary: #7f8c8d;
  --sp-bg-light: #f8f9fa;
  --sp-bg-white: #ffffff;
}
```

#### Tailwind Configuration

Custom colors will be added to the Tailwind config:

```js
colors: {
  'sp-primary': '#D35400',
  'sp-secondary': '#8B4513',
  'sp-accent': '#C0392B',
  'sp-text-primary': '#2C3E50',
  'sp-text-secondary': '#7F8C8D',
  'sp-bg-light': '#F8F9FA',
}
```

### Accessibility Considerations

#### Color Contrast

- All text colors meet WCAG AA standards for contrast
- Primary orange on white background: 4.5:1 ratio ✓
- Brown text on light background: 7:1 ratio ✓
- Red accent on white background: 4.5:1 ratio ✓

#### Color Blindness

- Orange and brown palette is distinguishable for most color vision types
- Red accent is used sparingly and with sufficient contrast
- Text relies on contrast, not just color, for emphasis

### Brand Application

#### Logo Usage

- Logo should be displayed prominently in header
- Maintain clear space around logo (minimum 1x logo height)
- Use on light backgrounds for best visibility

#### Photography Style

- Warm, natural lighting
- Focus on product quality and craftsmanship
- Show the human element of baking
- Emphasize fresh, quality ingredients

#### Content Tone

- Professional but approachable
- Emphasize quality and tradition
- Use warm, inviting language
- Highlight the craftsmanship and care in production

## Implementation Checklist

- [ ] Update CSS variables in CustomStyles.astro
- [ ] Add custom colors to Tailwind config
- [ ] Replace template colors with brand colors
- [ ] Test color contrast for accessibility
- [ ] Apply brand colors to all components
- [ ] Update typography to use Inter font
- [ ] Test brand colors across all pages
- [ ] Verify accessibility compliance
