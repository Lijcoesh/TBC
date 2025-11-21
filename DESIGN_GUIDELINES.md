# BitBattle Design Guidelines

## Overview
BitBattle embraces a bold, playful, and unapologetically retro aesthetic inspired by 80s/90s pixel art and arcade culture. The design celebrates creativity, humor, and originality over conventional polish.

## Color Palette

### Primary Colors
- **Electric Yellow**: `#FFE03D` - Main background color
- **Vibrant Purple**: `#8B2BE2` / `#9D4EDD` - Primary brand color for text and accents
- **Hot Pink/Magenta**: `#FF1493` / `#E91E8C` - Secondary accent for borders and highlights
- **Deep Blue**: `#1E0066` - Used for text on colored backgrounds

### Supporting Colors
- **Black**: `#000000` - Text shadows, pixel borders
- **White**: `#FFFFFF` - High contrast text elements

### Color Usage Rules
- Always use high contrast combinations (yellow/purple, pink/blue)
- Layer borders: outer black stroke, then colored border, then content
- Embrace bold, eye-catching color clashes
- No subtle gradients - use solid blocks of color

## Typography

### Font Style
- **Primary Font Family**: Pixel/bitmap fonts, bold sans-serif
- **Characteristics**: 
  - Chunky, blocky letterforms
  - High weight (800-900)
  - All caps for headings
  - Pixel art aesthetic with visible "blocks"

### Font Hierarchy
```
H1 (Main Titles): 
  - Size: 72-96px
  - Weight: 900
  - Style: UPPERCASE, pixel-style
  - Letter-spacing: 2-4px
  - Text-shadow: 4px black offset

H2 (Section Headers):
  - Size: 48-60px
  - Weight: 800
  - Style: UPPERCASE
  - Color: Purple on yellow, or yellow on purple

Body Text:
  - Size: 18-24px
  - Weight: 600-700
  - Line-height: 1.4
  - Color: Deep blue or black
```

### Recommended Web Fonts
- Press Start 2P (Google Fonts)
- VT323 (Google Fonts)
- Silkscreen (Google Fonts)
- "Courier New" (system fallback with heavy weight)

## Layout & Spacing

### Border System
All major containers use a **triple-border approach**:
1. Outer black border (4-6px)
2. Primary colored border (8-12px) - usually pink/magenta
3. Inner content area with contrasting background

### Spacing Scale
```
XS:  8px
S:   16px
M:   24px
L:   32px
XL:  48px
XXL: 64px
```

### Layout Principles
- **Bold geometric shapes**: Rectangles, sharp angles, no rounded corners
- **Asymmetric chevrons**: Arrow shapes pointing inward/outward for visual interest
- **Centered content**: Major elements centered with clear visual hierarchy
- **Generous padding**: 24-48px inside bordered containers
- **Grid-based**: Align elements to an 8px grid system

## UI Components

### Buttons
```css
Style:
- Background: Purple or pink
- Border: 4px black solid
- Text: Yellow or white, uppercase
- Padding: 16px 32px
- Font-weight: 800
- Hover: Slight color shift, add pixel "glitch" effect
```

### Cards/Containers
```css
Style:
- Triple border system (black → magenta → yellow background)
- Drop shadow: 8px 8px 0px rgba(0,0,0,0.3)
- Min padding: 32px
- Sharp corners (border-radius: 0)
```

### Input Fields
```css
Style:
- Border: 3px solid black
- Background: Yellow or white
- Text: Purple, bold
- Focus state: Magenta border, slight "pixel shake" animation
```

## Visual Effects

### Shadows
- **No soft shadows** - use hard pixel-perfect shadows
- Offset shadows: 6px 6px 0px #000000
- For depth: stack multiple offset shadows

### Animations
- **Pixel transitions**: Use step() timing function for choppy, retro feel
- **Shake/glitch effects**: Small vibrations on hover
- **Color cycling**: Rapid color changes for active states
- **8-directional movement**: Restrict animations to pixel grid

### Decorative Elements
- **Chevron arrows**: Large angular shapes as page dividers
- **Pixel borders**: Decorative borders with visible pixel blocks
- **Retro patterns**: Checkerboard, diagonal lines, pixel noise
- **Badge/label style**: Rotated elements with bold outlines

## Design Principles

### Core Values
1. **Maximalism over Minimalism**: More is more - embrace bold, busy designs
2. **Humor over Polish**: Quirky, fun, unexpected interactions
3. **Nostalgia**: 80s/90s computer culture, arcade games, early internet
4. **High Contrast**: Everything should be immediately visible and energetic
5. **Unapologetically Bold**: No subtle design - if it's there, make it obvious

### What to Avoid
- ❌ Subtle gradients or soft shadows
- ❌ Rounded corners or organic shapes
- ❌ Pastel or muted colors
- ❌ Thin, delicate typography
- ❌ Minimalist white space
- ❌ Smooth, easing animations
- ❌ Professional corporate aesthetics

### What to Embrace
- ✅ Pixel art and bitmap graphics
- ✅ Neon-bright color combinations
- ✅ Chunky borders and outlines
- ✅ All-caps bold typography
- ✅ Deliberate "bad taste" choices
- ✅ Retro computing references
- ✅ Playful, irreverent tone

## Responsive Design

### Breakpoints
```
Mobile: < 768px
  - Scale down font sizes by 30-40%
  - Reduce border widths to 3-6px
  - Stack layouts vertically
  - Maintain high contrast and boldness

Tablet: 768px - 1024px
  - Moderate scaling
  - Two-column layouts where appropriate

Desktop: > 1024px
  - Full-size elements
  - Multi-column complex layouts
```

### Mobile Considerations
- Touch targets: Minimum 44px × 44px
- Maintain thick borders even on mobile
- Simplify pixel effects if performance issues arise
- Keep the bold aesthetic - don't dilute it for mobile

## Accessibility

### Contrast Ratios
- Yellow (#FFE03D) on Purple: ~8:1 ✓
- Purple text on Yellow: ~8:1 ✓
- Black on Yellow: 21:1 ✓
- White on Purple: ~12:1 ✓

### Best Practices
- Always use high-contrast color pairs
- Ensure text is at least 18px (14pt) for readability
- Provide visual feedback for all interactive elements
- Test pixel fonts for legibility at smaller sizes
- Add aria-labels to decorative elements

## Example Color Combinations

### Primary Palette
```
Background: #FFE03D (Electric Yellow)
Primary Text: #8B2BE2 (Vibrant Purple)
Borders: #FF1493 (Hot Pink)
Shadows: #000000 (Black)
```

### Alternate Palette
```
Background: #8B2BE2 (Vibrant Purple)
Primary Text: #FFE03D (Electric Yellow)
Borders: #000000 (Black)
Accents: #FF1493 (Hot Pink)
```

### High-Energy Palette
```
Background: #FF1493 (Hot Pink)
Primary Text: #FFFFFF (White)
Borders: #000000 (Black)
Accents: #FFE03D (Electric Yellow)
```

## Assets & Resources

### Icon Style
- Pixel art icons (16×16, 32×32)
- Bold outlines (2px minimum)
- Limited color palette from brand colors
- High contrast against backgrounds

### Imagery
- Embrace pixel art and low-fi graphics
- Dithering and limited color palettes
- Retro computer/gaming references
- Intentionally "bad" or humorous graphics

## Implementation Notes

### CSS Custom Properties
```css
:root {
  --color-yellow: #FFE03D;
  --color-purple: #8B2BE2;
  --color-pink: #FF1493;
  --color-blue: #1E0066;
  --color-black: #000000;
  --color-white: #FFFFFF;
  
  --border-width-sm: 3px;
  --border-width-md: 6px;
  --border-width-lg: 12px;
  
  --shadow-pixel: 6px 6px 0px var(--color-black);
  --shadow-deep: 8px 8px 0px rgba(0, 0, 0, 0.3);
  
  --font-size-h1: 72px;
  --font-size-h2: 48px;
  --font-size-body: 20px;
  
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
}
```

### Key CSS Classes
```css
.pixel-border {
  border: var(--border-width-md) solid var(--color-black);
  box-shadow: var(--shadow-pixel);
}

.double-border {
  border: var(--border-width-sm) solid var(--color-black);
  outline: var(--border-width-lg) solid var(--color-pink);
  outline-offset: -#{var(--border-width-sm)};
}

.pixel-text {
  font-family: 'Press Start 2P', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 3px 3px 0px var(--color-black);
}
```

---

**Remember**: BitBattle is about celebrating the weird, wonderful, and wonderfully terrible. When in doubt, make it bolder, brighter, and more ridiculous. This is anti-corporate design at its finest.
