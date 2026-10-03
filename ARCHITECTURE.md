# Architecture

## Rendering and hosting

Next.js 16.3.8 App Router, React 19 and TypeScript. `output: 'export'` generates an HTML document for each route. Content is present before client JavaScript runs. Dynamic article routes have explicit static parameters and reject unknown slugs. The quiz, reminder and small mobile-navigation component are client components.

`trailingSlash: true` produces directory index pages. The postbuild script provides flat route-payload aliases where needed by the Next client router. `wrangler.jsonc` points at `out/` and uses a real 404 page. No application Worker, database or runtime API is required.

## Search metadata

One environment-controlled origin in `lib/site.ts` supplies all canonicals, metadata base, OG URLs, robots, sitemap and JSON-LD. Each article has independent title and description. Sitemap excludes explicit `noindex` articles. Article and breadcrumb data describe this independent publisher; no schema claims ownership of official Dragonkind. FAQ data is generated from the same visible answer records.

## Data and privacy

Version-controlled article records contain sections, related links and official source references. One checked date in `lib/site.ts` supplies visible dates, schema and sitemap. Pure quiz functions score original scenarios; all advertised affinities are reachable. Device-local storage contains only quiz answers and the reminder end time. It is validated on restore and failures fall back to in-memory operation. Quiz results are calculated locally. Quiz answers, results and timer content are not uploaded or sent as custom analytics events. Google Analytics 4 measurement ID `G-8RXPBQ7HEW` provides basic visit statistics; Google may process visited pages, device/browser details and cookie identifiers as described in [Google's partner-site privacy explanation](https://policies.google.com/technologies/partner-sites) and [Google Privacy Policy](https://policies.google.com/privacy).

## Assets and presentation

The site uses locally bundled Inter and Cormorant Garamond fonts, one compressed original illustration and a simple SVG monogram. Layout, article typography, forms, focus styling, mobile navigation and reduced-motion rules share one stylesheet. External websites are linked, not embedded. Public security headers allow same-origin assets and block third-party frames.

## Checks

The generated-output audit verifies static H1s, unique titles/canonicals, matching OG URLs, parseable JSON-LD, sitemap exclusion, and every internal link or resource. Quiz checks enumerate complete answer combinations. Browser verification tests user-facing state transitions and responsive layouts against the production static preview.
