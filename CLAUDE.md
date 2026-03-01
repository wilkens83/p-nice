# p-nice Shopify Store

## Project Overview

Custom Shopify store theme based on **Dawn** (Shopify's official OS 2.0 reference theme).
Target store: [YOUR-STORE].myshopify.com

Dawn is Shopify's free, open-source Online Store 2.0 theme — lightweight, fast (Lighthouse 90+ mobile), and fully customizable.

## Brand Identity

**Brand name:** P-nice Wellness
**Brand positioning:** Sleep-focused skincare — where restful sleep meets radiant skin
**Target audience:** Adults (men and women) seeking a science-backed nighttime skincare routine
**Brand voice:** Trustworthy, science-informed, warm, wellness-driven
**Made in:** USA

### Flagship Product — Sleep Plus Collagen Night Cream

| Field | Value |
|---|---|
| Product name | Sleep Plus Collagen Night Cream |
| Tagline | Infused with Hyaluronic Acid for deep hydration |
| Size | 2 oz / 56g |
| Price point | Premium skincare |
| Key claim | Bio-Identical Melatonin + Collagen for overnight skin restoration |

**Key Features (copy-ready):**
1. **Hydrating Formula** — Enriched with Hyaluronic Acid, nature's "Moisture Miracle," to keep skin supple and hydrated through the night
2. **Collagen Infused** — Helps maintain skin elasticity and smooth appearance with restorative overnight benefits
3. **Enriched with Natural Oils** — Avocado Oil and Lavender Oil soothe and moisturize, leaving skin soft and refreshed by morning
4. **Gentle on All Skin Types** — Suitable for men and women; gentle formula for all skin types

**Full Ingredients list:**
Purified Water, Melatonin, Aloe Vera Extract, Collagen, Hyaluronic Acid, Avocado Oil, Rheosol, Lavender Oil, Phenonip, Rosemary Leaf Extract

**Suggested Use:**
Apply ¼ tsp to face and/or neck 45 minutes to 1 hour before bedtime. Increase to ½ tsp if you wake repeatedly during the night. Each ¼ tsp contains 2.4 mg of melatonin.

**Warnings (must appear on product page):**
- For external use only. If irritation develops, discontinue use.
- If cream enters eye, flush thoroughly with water.
- If accidentally ingested, call a physician.
- Do not exceed recommended dose.
- Pregnant or nursing mothers, children under 18, and individuals with a known medical condition should consult a physician before use.
- Keep out of reach of children. Do not use if the safety seal is damaged or missing.
- Store in a cool, dry place.
- This product is not intended to diagnose, treat, cure, or prevent any disease.

**Science Behind the Product (for `science-facts` section):**

| Claim | Source |
|---|---|
| Bio-Identical Melatonin resets circadian rhythm, restoring restful sleep | General wellness science |
| Melatonin significantly enhances sleep onset latency & total sleep time | 2022 systematic review, *Journal of Neurology* |
| Melatonin improves sleep in individuals with mental health disorders | 2023 study, *Journal of Psychiatric Research* |
| Topical melatonin: antioxidant, anti-inflammatory, photoprotection, anti-aging | Peer-reviewed dermatology study |

**Hero/CTA Copy Examples:**
- "Wake up to radiant skin — every morning."
- "Sleep better. Look better."
- "Science-backed skincare that works while you rest."
- "Your nighttime routine, elevated."
- "Nourish your skin while you sleep."

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
│   ├── base.css         # Global base styles + P-nice Wellness brand tokens
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
│   ├── hero-social-proof.liquid    # Hero + social proof badge (homepage)
│   ├── brand-story.liquid          # Image + brand paragraph
│   ├── features-grid.liquid        # 3-column features/benefits
│   ├── dark-variant-cta.liquid     # Dark bg CTA / product selector
│   ├── ingredients-callout.liquid  # "Powered by Nature" ingredient hero
│   ├── science-facts.liquid        # Research-backed claims cards
│   ├── testimonials.liquid         # Customer reviews
│   └── cta-banner.liquid           # Closing CTA with italic quote
├── snippets/                  # Reusable Liquid partials ({% render 'name' %})
│   ├── card-product.liquid         # Product card with dual ADD TO CART + BUY NOW buttons
│   ├── social-proof-badge.liquid   # Reusable star + buyer count pill badge
│   ├── icon-cart.liquid
│   └── icon-close.liquid
├── templates/                 # JSON templates for each page type
│   ├── index.json             # Homepage — all custom sections
│   ├── product.json           # Product page + science-facts + ingredients
│   ├── collection.json
│   ├── cart.json
│   ├── page.json
│   ├── blog.json
│   ├── article.json
│   └── 404.json
├── .gitignore
├── .shopifyignore
└── shopify.theme.toml         # Environment config (gitignored)
```

## Store Design Direction

This store is a **wellness skincare brand** specializing in sleep-focused night creams. Design blends two reference aesthetics: Nathalia (elegant, warm, feminine) and Resvina (clean, science-backed, clinical-minimal).

### Design References

**Reference A — Nathalia (Perfume Brand)**
Elegant, feminine, warm aesthetic targeting modern women. Key patterns:
- Large hero with woman model image, serif headline, cream/beige background
- Social proof badge: "Satisfied by 50k Buyers" near the hero CTA
- Product grid: 3-column, each card has **ADD TO CART** + **BUY NOW** dual buttons
- Brand story section: side-by-side image + text paragraph
- Features section: "Crafted for the Modern Woman" — 3 icon + title + description blocks
- **Dark full-width section** (near-black bg) for "BEST VARIANT FOR YOU" product selector
- Testimonials: "Stories from Nathalia Wearers" — horizontal card row
- Closing CTA banner: italicized quote + uppercase button ("OWN YOUR NATHALIA TODAY")
- Footer: brand name large, social icons (Instagram, Facebook, X, TikTok), nav links

**Reference B — Resvina (Skincare Brand)**
Clean, clinical-minimal aesthetic. Key patterns:
- Hero: product + model image, bold sans-serif headline, "99% Natural Ingredients" badge
- Social proof badge: "Satisfied by 1k Users" inline below headline
- About text section: single paragraph brand statement
- Category tiles: parenthetical heading `(Discover Resvina By Category)` + 3 image tiles
- Best Sellers: 4-column product grid, 8 products, price + add-to-cart
- Numbered benefits: "(1) Dermatologically tested… (2) Rich in flavonoids… (3) Helps reduce…"
- Ingredients callout: "Powered by Nature, Perfected by Science" — single ingredient hero card
- Testimonials: "Real Stories, Real Result" — single large quote card
- Dark footer: discount CTA ("Get 20% Off Your First Purchase"), newsletter input, social links, nav

### Color System

Derived from the **P-nice Wellness product label** (forest green brand mark, gold lettering, cream/teal gradient):

| Token | Value | Usage |
|---|---|---|
| `--color-cream` | `#F8F4EE` | Primary background (warm cream) |
| `--color-dark` | `#1A1A1A` | Primary text + dark section bg |
| `--color-green` | `#2D5A3D` | Brand color (P-nice Wellness logo green) |
| `--color-gold` | `#C9A96E` | Product name accent, buttons, badges |
| `--color-teal` | `#7EC8C8` | Label accent, hover states, highlights |
| `--color-mid` | `#6D6D6D` | Secondary text, captions |
| `--color-white` | `#FFFFFF` | Cards, light sections |
| `--color-badge-bg` | `#F0EAE0` | Social proof badge background |

### Typography System

| Role | Style |
|---|---|
| Brand headlines | Serif font (e.g. Playfair Display), large scale, normal weight |
| Section headings | Serif or elegant sans, mixed case |
| Body text | Clean sans-serif, 1.5–1.6 line height |
| Buttons / labels | Uppercase, sans-serif, tracked letter-spacing |
| Science/research text | Smaller sans-serif, with citation styling |
| Parenthetical headings | e.g. `(Section Title)` — Resvina style for categories |

### Required Homepage Sections (in order)

| Section file | Description |
|---|---|
| `announcement-bar.liquid` | Promo: "Free shipping on orders over $X" or discount code |
| `header.liquid` | P-nice Wellness logo + nav + cart icon |
| `hero-social-proof.liquid` | Full-bleed hero image, serif headline, social proof badge, "SHOP NOW" CTA |
| `brand-story.liquid` | "Sleep better. Wake up radiant." — image left + paragraph right |
| `featured-collection.liquid` | Product grid with dual-button cards (ADD TO CART + BUY NOW) |
| `features-grid.liquid` | 3 columns: Hyaluronic Acid / Collagen / Natural Oils — icon + title + text |
| `ingredients-callout.liquid` | "Powered by Nature, Perfected by Science" — Melatonin or Collagen hero card |
| `science-facts.liquid` | Research-backed cards: 2022 + 2023 studies, anti-aging melatonin |
| `dark-variant-cta.liquid` | Dark bg — "Your Nighttime Routine, Elevated" — bold CTA to product |
| `testimonials.liquid` | "Real Results, Real Nights" — customer review cards with star ratings |
| `cta-banner.liquid` | "Nourish your skin while you sleep." + "SHOP SLEEP PLUS" button |
| `footer.liquid` | Newsletter, social icons, nav, copyright, "Made in USA" badge |

### Product Page Sections (product.json)

| Section | Purpose |
|---|---|
| `header.liquid` | Global header |
| `main-product.liquid` | Title, images, price, variants, Add to Cart, Buy Now |
| `features-grid.liquid` | Hyaluronic Acid / Collagen / Natural Oils benefits |
| `ingredients-callout.liquid` | Full ingredients list + Suggested Use |
| `science-facts.liquid` | Research citations for melatonin claims |
| `testimonials.liquid` | Customer reviews for this product |
| `cta-banner.liquid` | "Wake up to radiant skin" |
| `footer.liquid` | Global footer |

### Product Card Conventions

Every product card (`snippets/card-product.liquid`) must include:
- Product image (square crop, lazy loaded)
- Product name
- Price (with compare-at price struck through if on sale)
- "Sold out" badge if unavailable
- **Two buttons**: primary "ADD TO CART" + secondary "BUY NOW" (links to product page)
- Sale badge if `compare_at_price > price`

### Social Proof Badge Pattern

Used in hero and potentially collection banners:
```liquid
<div class="social-proof-badge">
  <span class="social-proof-badge__stars">★★★★★</span>
  <span class="social-proof-badge__text">Satisfied by {{ section.settings.buyer_count }} Customers</span>
</div>
```
The badge is a pill/rounded shape with `--color-badge-bg` background and `--color-green` star color.

### Section Schema Conventions

- Every section must have `"name"` and `"presets"` in its `{% schema %}`
- Text content (headlines, body, button labels) must be editable via schema settings
- Images use `image_picker` type so merchants can swap them in the customizer
- Color overrides (e.g. dark vs light bg variant) use `select` or `checkbox` settings
- All heading/body strings should reference `locales/en.default.json` keys where reused

## Dawn Customization Approach

- **Avoid forking Dawn files you don't need to change** — only add/edit what differs from stock Dawn
- Use the **theme customizer** (Shopify admin → Online Store → Themes → Customize) for layout/content changes where possible
- Add new sections in `sections/` rather than editing Dawn's existing sections
- Add new snippets in `snippets/` for reusable partials
- Override styles by editing `assets/base.css` or adding new CSS files per component
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

### Design Implementation Rules

- **Color tokens** must use CSS custom properties (`--color-cream`, `--color-dark`, `--color-green`, etc.) — never hardcode hex values in CSS outside of `:root`
- **Hero sections** always include a social proof badge (buyer count, star rating, or trust badge)
- **Product cards** always show dual-button pattern: primary "ADD TO CART" + secondary "BUY NOW"
- **Dark sections** (`dark-variant-cta`, footer CTA) use `--color-dark` (#1A1A1A) background with white text
- **Headings** in hero and brand-story sections use serif font family; body and UI labels use sans-serif
- **Testimonials** section must show customer name, review text, and star rating
- **Features/benefits** blocks use icon + title + text format (3 columns)
- **Science facts** section uses card format with study citation and summary text
- **Ingredients** section must list all ingredients and include Suggested Use + Warnings
- **CTA banners** use italic or serif quote text paired with an uppercase button label
- **Footer** must include: P-nice Wellness brand name, nav links, social icons (Instagram, Facebook, TikTok at minimum), newsletter input, "Made in USA" trust badge, copyright
- Sections must be fully configurable from the Shopify customizer — zero hardcoded copy in Liquid
