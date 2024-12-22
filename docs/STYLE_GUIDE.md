# Richey Realty Design System 2025

## Core Design Principles

### Colors
- **Primary**: Black (#000000) - Text, buttons, icons
- **Secondary**: White (#FFFFFF) - Backgrounds, cards
- **Accent**: Warm Gold (#E6B325) - Used sparingly (< 10% of UI) for:
  - Call-to-action hover states
  - Subtle highlights
  - Selected states

### Typography
- **Headings**: Montserrat (600, 700)
  - H1: 3rem/48px
  - H2: 2.5rem/40px
  - H3: 2rem/32px
- **Body**: Open Sans (400, 500, 600)
  - Base: 1rem/16px
  - Large: 1.125rem/18px

### Spacing
- Base unit: 0.25rem (4px)
- Section padding: 6rem (96px)
- Component gaps: 2rem (32px)
- Card padding: 2rem (32px)

### Accessibility
- Color contrast ratios:
  - Black on White: 21:1 (Exceeds WCAG AAA)
  - Gold accent on White: 4.5:1 (Meets WCAG AA)
- Focus states: 2px solid accent color
- Interactive elements: Minimum touch target 44x44px
- Keyboard navigation: Clear focus indicators

## Component Guidelines

### Buttons
```jsx
// Primary Button
<button className="btn-primary">
  Text
  <ArrowRight className="ml-2" />
</button>

// Secondary Button
<button className="btn-outline">
  Text
  <ArrowRight className="ml-2" />
</button>
```

### Cards
```jsx
// Standard Card
<div className="card">
  <div className="card-content">
    {children}
  </div>
</div>
```

## Future Updates (Q4 2025)

### Planned Enhancements
1. Seasonal accent color variations
   - Winter: Cool Silver (#C0C0C0)
   - Spring: Sage Green (#9CAF88)
2. Enhanced micro-interactions
   - Smooth page transitions
   - Refined hover states
3. Data visualization updates
   - Real-time market trends
   - Interactive property comparisons

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Lighthouse Performance Score: > 90