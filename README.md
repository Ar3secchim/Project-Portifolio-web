# renara.dev

[Leia em português](README.pt-BR.md) · **Live:** [www.renara.dev](https://www.renara.dev)

My personal site: case studies written as problem → decisions → trade-offs,
a live (and sanitized) view of my Kubernetes homelab, and a knowledge map that
links each technology to the case where it was actually used. Available in
Portuguese and English.

## What is in here

- **Bilingual routing.** Every page lives under `/[locale]` (`pt` or `en`).
  The middleware picks the locale from a cookie or `Accept-Language` and
  redirects `/` accordingly.
- **Case studies as MDX with typed metadata.** Each case exports a `meta`
  object (problem, decisions with their trade-offs, outcomes, technologies)
  plus a prose body. Pages, cards, and the knowledge map all read from that
  single source.
- **Knowledge map derived from content.** The graph of cases and technologies
  is built from case metadata at build time, so it can never drift from what
  the cases say.
- **Live homelab status.** The home page reads a public snapshot produced by
  [api-homelab-public](https://github.com/Ar3secchim/api-homelab-public),
  validates its shape, and rejects expired data.
- **Blog backed by Notion**, rendered to Markdown and cached with
  `unstable_cache`.
- **Accessibility and tests.** Vitest and Testing Library for content
  invariants and interactions; Playwright with axe for locale switching,
  keyboard navigation, and automated accessibility checks on mobile, tablet,
  and desktop viewports.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · MDX · plain CSS with design
tokens (dark and light themes) · Notion API · Vitest · Playwright · axe-core ·
Vercel

## Layout

```text
app/[locale]/        pages: home, cases, knowledge, blog
components/portfolio/ UI components (case cards, homelab map, finance demo, ...)
content/{pt,en}/     case studies in MDX
lib/portfolio/       content loaders, dictionaries, site data, snapshot parser
lib/notion/          blog integration
styles/              tokens, base styles, page and component styles
tests/unit/          Vitest
tests/e2e/           Playwright + axe
```

## Running locally

Requires Node.js 24 (see `engines` in `package.json`).

```bash
npm install
npm run dev
```

The site works without any environment variables. Optional ones:

| Variable                  | Purpose                                                      |
| ------------------------- | ------------------------------------------------------------ |
| `NOTION_API_KEY`          | Enables the blog. Without it, the blog shows an empty state. |
| `NOTION_BLOG_DATABASE_ID` | Overrides the default Notion database.                       |
| `NEXT_PUBLIC_SITE_URL`    | Canonical URL for metadata and the sitemap.                  |

## Scripts

| Command              | What it does                                                             |
| -------------------- | ------------------------------------------------------------------------ |
| `npm run dev`        | Development server on port 3000                                          |
| `npm run build`      | Production build                                                         |
| `npm run typecheck`  | `tsc --noEmit`                                                           |
| `npm run lint`       | ESLint                                                                   |
| `npm run lint:check` | Prettier check                                                           |
| `npm test`           | Unit tests (Vitest)                                                      |
| `npm run test:e2e`   | End-to-end and accessibility tests (needs `npx playwright install` once) |

## License

[MIT](LICENSE)
