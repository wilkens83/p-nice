# p-nice Shopify Store

## Project Overview

Custom Shopify store theme based on **Dawn** (Shopify's official OS 2.0 reference theme).
Target store: [YOUR-STORE].myshopify.com

Dawn is Shopify's free, open-source Online Store 2.0 theme — lightweight, fast (Lighthouse 90+ mobile), and fully customizable.

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
