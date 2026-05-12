# Luminy — Landing site

Public marketing / landing site for **Luminy**, built as a static **Vite** + **TypeScript** app with hand-written DOM components and CSS.

## Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** (or use your preferred package manager and adjust commands)

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

## Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start dev server with hot reload                 |
| `npm run build`   | Typecheck (`tsc`) and production build to `dist/` |
| `npm run preview` | Serve the production build locally               |

## Stack

- **Vite 6** — bundler & dev server
- **TypeScript** — strict mode
- **Vanilla components** — `Component` / `Mountable` base classes under `src/core/`
- **embla-carousel** — swipe carousel on the “What does Luminy include?” section
- **CSS** — design tokens in `src/styles/tokens.css`, main styles in `src/styles/main.css`

## Project layout

```
src/
  app/           # Root shell (LuminyApp)
  components/    # Page sections (Hero, Features, Pricing, …)
  config/        # site.config.ts — nav, footer, branding
  core/          # Component + Mountable primitives
  styles/        # Global CSS
  ui/            # Scroll / navbar behavior helpers
```

## Deployment

Production output is **`dist/`** after `npm run build`. Host it with any static file host (S3 + CloudFront, Netlify, Vercel, GitHub Pages, etc.). Configure the host to serve `index.html` for SPA-style routes if you add client-side routing later.

## Content & assets

- **Copy / nav / footer links:** `src/config/site.config.ts`
- **Images:** `images/` (referenced from components or config)

## License

Private / all rights reserved unless otherwise noted.
