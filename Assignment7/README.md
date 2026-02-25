# Savoria — Two-Page Food Blog Website

A two-page culinary blog website built with HTML, CSS Grid, Flexbox, and SASS/SCSS.

## Pages

- **index.html** — Home page: hero section, stats bar, featured recipe grid, category browser, newsletter signup
- **recipes.html** — Recipes page: sidebar filters, recipe grid with pagination

---

## Project Structure

```
savoria/
├── index.html
├── recipes.html
├── css/
│   └── main.css          (compiled output)
├── scss/
│   ├── main.scss
│   ├── utilities/
│   │   ├── _variables.scss
│   │   ├── _functions.scss
│   │   ├── _mixins.scss
│   │   └── _placeholders.scss
│   ├── base/
│   │   └── _base.scss
│   ├── layout/
│   │   ├── _header.scss
│   │   └── _footer.scss
│   └── components/
│       ├── _buttons.scss
│       ├── _hero.scss
│       ├── _cards.scss
│       └── _sections.scss
└── README.md
```

---

## Setup & Running

### Prerequisites

- Node.js (v14+)
- npm

### Install Sass

```bash
npm install -g sass
```

### Compile SCSS to CSS

```bash
sass scss/main.scss css/main.css
```

### Watch for changes

```bash
sass --watch scss/main.scss:css/main.css
```

### Open in browser

Open `index.html` directly in any modern browser, or use a local server:

```bash
npx serve .
```

---

## SASS/SCSS Features Implemented

### Required Features

| Feature | File | Description |
|---|---|---|
| **Variables** | `_variables.scss` | Colors, fonts, spacing, shadows, breakpoints |
| **Custom Properties** | `_base.scss` | CSS vars (`--color-primary`, `--shadow-md`, etc.) used alongside SASS variables |
| **Nesting** | All component files | BEM selectors nested within parent blocks (`.card { &__title {} }`) |
| **Interpolation** | `_buttons.scss`, `_sections.scss` | `&--#{$name}` generates dynamic modifier classes from maps |
| **Placeholder Selectors** | `_placeholders.scss` | `%card-base`, `%badge`, `%input-base`, `%img-ratio`, `%section-padding` |
| **Mixins** | `_mixins.scss` | `respond-to`, `flex-center`, `flex-between`, `container`, `card-hover`, `truncate`, `img-cover`, `button-reset`, `gradient-overlay` |
| **Functions** | `_functions.scss` | `rem()`, `alpha()`, `tint()`, `shade()`, `fluid()`, `z()` |

### Additional SASS/SCSS Features (4+)

| Feature | File | Description |
|---|---|---|
| **`@each` loop** | `_buttons.scss`, `_sections.scss` | Iterates over maps to generate variant classes for buttons and category colors |
| **`@use` with namespacing** | `main.scss`, `_functions.scss` | Uses `@use 'sass:math'` and `@use 'sass:color'` for built-in module access |
| **SASS Maps** | `_buttons.scss`, `_sections.scss`, `_functions.scss` | Stores variant configs and z-index layers as maps |
| **`@if / @else if / @else`** | `_mixins.scss`, `_buttons.scss` | Conditional logic in `respond-to` mixin and button variant generation |
| **`@extend`** | `_cards.scss`, `_hero.scss`, `_sections.scss` | Reuses `%badge`, `%card-base`, `%img-ratio`, `%section-padding` across components |
| **`clamp()` + custom fluid function** | `_functions.scss`, `_hero.scss`, `_cards.scss` | `fluid($min, $max)` generates responsive fluid typography with `clamp()` |

---

## CSS Layout Features

### CSS Grid (2+ implementations)
1. **Featured Cards Grid** (`_cards.scss`) — `grid-template-columns: repeat(3, 1fr)` with `.card--large` spanning two rows
2. **Stats Section** (`_sections.scss`) — `repeat(4, 1fr)` grid collapses to 2-column on mobile
3. **Recipe Page Layout** (`_sections.scss`) — Two-column layout with fixed sidebar + fluid main content area
4. **Footer Grid** (`_footer.scss`) — `2fr repeat(3, 1fr)` asymmetric grid

### Flexbox (2+ implementations)
1. **Header Navigation** (`_header.scss`) — `flex-between` for logo + nav alignment
2. **Category Browser** (`_sections.scss`) — `flex-wrap` row of category pills
3. **Newsletter Form** (`_sections.scss`) — `flex` row with input + button
4. **Hero Actions** (`_hero.scss`) — Flex row of CTA buttons