# p-nice Shopify Store

## Project Overview

Custom Shopify store theme based on **Dawn** (Shopify's official OS 2.0 reference theme).
Target store: [YOUR-STORE].myshopify.com

Dawn is Shopify's free, open-source Online Store 2.0 theme — lightweight, fast (Lighthouse 90+ mobile), and fully customizable.

---

## Brand & Design Direction

This store is in the **premium beauty / personal care** space. All design decisions should reinforce a professional, luxurious, and trustworthy aesthetic. Two reference brands define the target look and feel:

### Reference 1 — Nathalia (Luxury Perfume)
Drives the **warmth, elegance, and emotional storytelling** direction.

- **Color palette:** Warm cream/beige (`#f5f0e8`) background · Deep charcoal/near-black (`#1a1a1a`) for contrast sections · Gold/amber accents for premium feel
- **Typography:** Elegant serif headlines (e.g. Cormorant Garamond) · Cursive/script for brand name · Clean refined sans-serif for body copy
- **Tone:** Emotional, feminine, aspirational — "Unveil Your True Essence"
- **Social proof:** Milestone stat badge ("50k+ Satisfied") in the hero

### Reference 2 — Resvina (Skincare)
Drives the **cleanliness, trust, and science-backed credibility** direction.

- **Color palette:** Pure white (`#ffffff`) primary · Olive/forest green accent · Near-black for CTAs and text sections · Light grey/cream for alternating section backgrounds
- **Typography:** Bold modern sans-serif or slab-serif headlines · Clinical-clean body copy
- **Tone:** Confident, credible, results-focused — "Confidence Starts with Clear Skin"
- **Trust signals:** "98% Natural Ingredients" badge · Dermatologically tested claims · Ingredient science callout

### Combined Design System for p-nice

| Token | Value |
|---|---|
| Primary bg | Warm cream/white |
| Dark contrast bg | Deep charcoal `#1a1a1a` |
| Brand accent | Gold/olive blend — choose one per product line |
| Headline font | Elegant serif (Cormorant Garamond or Playfair Display) |
| Body font | Clean sans-serif (Inter or DM Sans) |
| Script/logo font | Cursive accent font for brand mark only |
| Button style | Solid dark or outlined; no rounded pill — square or slightly rounded corners |
| Imagery | Professional product photography, warm lighting, clean backgrounds |

---

## Homepage Section Structure

Build the homepage in this exact section order, matching the patterns from both reference brands:

1. **Announcement Bar** — Promo offer (e.g. "Get 20% Off Your First Order") · Link to collections
2. **Hero** — Full-width · Headline (serif, large) · Subheadline · Primary CTA button · Trust badge (e.g. "98% Natural Ingredients" or "50k+ Happy Customers")
3. **Brand Promise** — Short centered text block reinforcing brand values; 1–3 sentences max
4. **Category Discovery** — 3-column cards linking to main product categories (e.g. Body Care, Serums, Creams)
5. **Product Grid — Best Sellers** — 3–4 column product grid, min 4 products; labeled "Best Sellers" or "Our Bestsellers"
6. **Feature/Benefits Section** — "Crafted for…" or "Why Choose Us" · 3 icons + short copy · Light background
7. **Dark Product Carousel** — Dark (`#1a1a1a`) background · "Best Variant For You" or similar headline · Horizontal scrollable product cards
8. **Ingredient/Science Section** — "Powered by Nature, Perfected by Science" · Highlight 1–2 key ingredients with imagery
9. **Testimonials** — "Real Stories, Real Results" · Customer photo + quote grid (min 3) · Star ratings
10. **Full-Width CTA Banner** — Strong brand statement or discount offer · Single CTA button ("Shop Now" or "Own It Today")
11. **Footer** — Dark background · Logo · Navigation links · Social icons (Instagram, Facebook, X/Twitter, TikTok)

---

## UI/UX Patterns to Follow

- **Product cards:** Clean white card · Product image (square crop) · Product name · Price · Hover state with quick-add button
- **Section spacing:** Generous vertical padding (80–120px desktop, 48–64px mobile) — never cramped
- **Social proof badges:** Display milestone stats ("50k+ Customers", "4.9★ Rating") near the hero and CTA sections
- **Dark sections:** Use `#1a1a1a` or near-black for 2–3 sections to create visual contrast rhythm
- **Trust signals:** Show ingredient claims, dermatologist-tested badges, and return policy near product grids
- **Mobile:** Stack all multi-column layouts to single column; keep CTA buttons full-width on mobile
- **Testimonials:** Always include real customer photos alongside quotes; use a grid or carousel layout

---

## Content & Copywriting Guidelines

- Headlines: Short, evocative, emotion-first (max 6 words for hero)
- Subheadlines: Benefit-focused, one clear value prop per section
- CTAs: Action verbs — "Shop Now", "Discover Your Scent", "Own It Today" — never just "Click Here"
- Product descriptions: Lead with the benefit, follow with the ingredient/science, close with a sensory detail
- Avoid generic placeholder copy — every section should have intentional, on-brand language

## Tech Stack

- Shopify Online Store 2.0 (Liquid templating)
- **Base theme: Dawn** (Shopify's default OS 2.0 theme)
- Shopify CLI 3.x
- Node.js 18.20+ / npm
- Git for version control

## Prerequisites

- Node.js 18.20+ or 20.10+
- npm / yarn / pnpm
- Git 2.28+
- Shopify CLI: `npm install -g @shopify/cli @shopify/theme`
- Active Shopify store (development store recommended for local dev)

## Development Setup

1. Install Shopify CLI: `npm install -g @shopify/cli @shopify/theme`
2. Authenticate: `shopify auth login --store YOUR-STORE.myshopify.com`
3. Start dev server (push local files + hot reload): `shopify theme dev --store YOUR-STORE.myshopify.com`

To start fresh from the latest Dawn instead:
```bash
shopify theme init   # clones Dawn from GitHub into a new folder
```

## Key Commands

| Command | Purpose |
|---|---|
| `shopify theme dev` | Local dev server with hot reload at localhost:9292 |
| `shopify theme push` | Deploy theme to store |
| `shopify theme pull` | Pull live theme files locally |
| `shopify theme check` | Lint/validate theme code (Liquid syntax, accessibility) |
| `shopify theme list` | List all themes on the store |
| `shopify theme open` | Open store preview in browser |
| `shopify theme share` | Generate shareable preview link |
| `shopify theme publish` | Publish a theme as the live storefront |

## Environment Configuration

Configure environments in `shopify.theme.toml` at the project root (this file is gitignored — never commit it):

```toml
[environments.development]
store = "my-dev-store.myshopify.com"
theme = "123456789"

[environments.staging]
store = "my-staging-store.myshopify.com"
theme = "987654321"

[environments.production]
store = "my-store.myshopify.com"
theme = "111111111"
```

Deploy to a specific environment: `shopify theme push --environment production`

## Theme Folder Structure (OS 2.0 / Dawn)

```
├── assets/              # CSS, JS, images, fonts (served as-is)
│   ├── base.css         # Global base styles
│   ├── component-*.css  # Per-component stylesheets
│   └── global.js        # Global JS (cart, modals, etc.)
├── config/
│   ├── settings_schema.json   # Theme customizer settings definition
│   └── settings_data.json     # Live store customizer values (gitignored)
├── layout/
│   └── theme.liquid           # Base HTML layout wrapping all pages
├── locales/                   # Translation JSON files
│   └── en.default.json        # Default English strings
├── sections/                  # Page sections (.liquid) with {% schema %} blocks
│   ├── header.liquid
│   ├── footer.liquid
│   ├── announcement-bar.liquid
│   └── ...
├── snippets/                  # Reusable Liquid partials ({% render 'name' %})
├── templates/                 # JSON templates for each page type
│   ├── index.json             # Homepage
│   ├── product.json           # Product pages
│   ├── collection.json        # Collection listing pages
│   ├── cart.json              # Cart page
│   ├── page.json              # Static pages
│   ├── blog.json              # Blog listing
│   ├── article.json           # Blog post
│   └── 404.json               # 404 error page
├── .gitignore
├── .shopifyignore             # Files excluded from Shopify CLI push
└── shopify.theme.toml         # Environment config (gitignored)
```

## Dawn Customization Approach

- **Avoid forking Dawn files you don't need to change** — only add/edit what differs from stock Dawn
- Use the **theme customizer** (Shopify admin → Online Store → Themes → Customize) for layout/content changes where possible
- Add new sections in `sections/` rather than editing Dawn's existing sections
- Add new snippets in `snippets/` for reusable partials
- Override styles by editing `assets/base.css` or adding new CSS files
- Use **app blocks** for third-party integrations — do not edit `theme.liquid` directly

## Liquid Conventions

- Use `{% render 'snippet-name' %}` — never `{% include %}` (deprecated in OS 2.0)
- Section customizer settings defined via `{% schema %}...{% endschema %}` at bottom of each section file
- Templates are JSON-based (OS 2.0); they reference sections by name
- Load assets via filters: `{{ 'styles.css' | asset_url | stylesheet_tag }}`
- Base layout (`layout/theme.liquid`) must include `{{ content_for_header }}` and `{{ content_for_layout }}`
- Use metafields for dynamic per-product/collection/page data
- Sections: max 25 per template; blocks: max 1,250 per template

## Secrets & Security

**Never commit these files:**
- `shopify.theme.toml` — contains store URLs and Theme Access passwords
- `.env` — any local environment variables
- `config/settings_data.json` — live store customizer data (store-specific)

**For CI/CD, store credentials as GitHub Secrets:**
- `SHOPIFY_STORE` — store URL (e.g., `my-store.myshopify.com`)
- `SHOPIFY_API_KEY` — Theme Access token (read/write themes scope)

## .gitignore Essentials

```
shopify.theme.toml
.env
config/settings_data.json
node_modules/
.DS_Store
Thumbs.db
*.log
dist/
```

## GitHub Actions CI/CD (Optional)

Example workflow to deploy on push to `main`:

```yaml
name: Deploy to Shopify
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install -g @shopify/cli @shopify/theme
      - name: Deploy theme
        run: shopify theme push --store ${{ secrets.SHOPIFY_STORE }} --password ${{ secrets.SHOPIFY_API_KEY }}
```

## Development Workflow

1. `shopify theme dev` — develop locally with hot reload
2. `shopify theme check` — lint before committing
3. Commit changes and push to git feature branch
4. `shopify theme push --environment staging` — validate on staging store
5. `shopify theme push --environment production` — deploy to live store

## AI Assistance Notes

- This theme is **Dawn-based** — always check if Dawn already handles something before building from scratch
- Always use OS 2.0 JSON templates — not legacy `.liquid` templates — unless explicitly asked otherwise
- Prefer `{% render %}` over `{% include %}` (deprecated and removed in OS 2.0)
- Keep sections self-contained with their own `{% schema %}` block
- Use app blocks for third-party integrations rather than editing `theme.liquid`
- Never hardcode store URLs, API keys, or passwords in theme files
- Run `shopify theme check` before considering any theme change complete
- Do not modify `config/settings_data.json` — this contains live store settings
- When adding new customizer settings, add them to `config/settings_schema.json`

### Design-Specific AI Rules

- Always follow the **Homepage Section Structure** order defined above — do not reorder or skip sections
- When building or editing sections, apply the **Design System tokens** (colors, fonts, spacing) — never use arbitrary values
- New sections must match the visual rhythm: alternate between light (cream/white) and dark (`#1a1a1a`) backgrounds
- Product grids use a **3 or 4 column layout on desktop**, always collapsing to 1 column on mobile
- Every CTA section must include a **trust signal** (stat, badge, or claim) near the button
- Testimonials must include **customer photos** — do not build text-only review sections
- The **hero section always has a trust badge** below or beside the CTA button
- Font choices: use only the approved serif/sans-serif pair — do not introduce additional typefaces
- Icon style: use simple, line-based icons consistent with the clean premium aesthetic — no filled cartoon icons
