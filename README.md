# Threshing Day Game

An English, independent Dragonkind field guide with an original eight-question dragon affinity quiz and a manual retry reminder. Built in this repository using the static architecture of `dressmakergame`.

## Local use

Requires Node.js 22.13 or newer.

```sh
npm install
npm run dev -- --port 3100
```

For the production export:

```sh
npm run check
npm run preview
```

Open http://127.0.0.1:3100. `preview` serves the actual `out/` build, returns genuine 404 responses, and does not use an SPA fallback.

## Domain

The current canonical origin is `https://www.threshingdaygame.org`. This is a build configuration, not confirmation that the domain has been purchased or connected. Change `NEXT_PUBLIC_SITE_URL` in `.env.local` before building if another domain is selected. The example is in `.env.example`. Metadata, canonical URLs, sitemap, robots and structured data use the same origin. If `NEXT_PUBLIC_SITE_URL` is set in the hosting build environment, it must use this same `www` origin.

## Deploy

Upload `out/` to a static host. Cloudflare Workers Static Assets configuration is provided in `wrangler.jsonc`. After logging into your own Cloudflare account:

```sh
npm run deploy:cloudflare
```

For the existing Cloudflare Workers project, use project name `threshingdaygame` to match `wrangler.jsonc`, repository `gamescript-max/threshingdaygame`, production branch `master`, build command `npm run check`, deploy command `npx wrangler deploy`, and the repository root as the root directory. The build command must run before deployment because `out/` is generated locally and excluded from Git.

If a build stops while fetching the repository, or the dashboard cannot retrieve GitHub user/organization details, repair the Cloudflare GitHub integration before retrying. This happens before the build command executes. Use the project's Git Repository settings to reconnect the same repository and verify the Cloudflare Workers and Pages GitHub App can access it. See [Cloudflare's GitHub integration guide](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/).

For Cloudflare Pages, use build command `npm run check` and output directory `out`. For either Cloudflare hosting setup, connect `www.threshingdaygame.org` as the primary custom domain, configure a permanent 301 redirect from `threshingdaygame.org` to `https://www.threshingdaygame.org` while preserving the path and query string, and submit `https://www.threshingdaygame.org/sitemap.xml` in Search Console. Do not use a catch-all rewrite to `/index.html`. No deployment or domain purchase is performed by the build scripts.

## Content and functionality

- `lib/content.ts`: twelve articles, evidence links, related guides and FAQs.
- `lib/site.ts`: domain, official links and navigation.
- `lib/quiz.ts`: original quiz scenarios, scores, deterministic tie rules and six result profiles.
- `lib/dragons.ts` and `components/DragonColorGallery.tsx`: six illustrated color references on the homepage and result guide, also used for fan quiz result portraits.
- `components/DragonQuiz.tsx`: progress, local restore, share/copy and SVG result-card download.
- `components/RetryTimer.tsx`: absolute-time reminder with local restore, pause, resume and reset.
- `app/globals.css`: responsive visual design and reduced-motion support.

Official gameplay happens at `dragonkind.com`. Our quiz does not assign an official dragon. The reminder uses the remaining time entered by the visitor and cannot read or change an official cooldown. There are no accounts, application backend, advertising or external fonts. Google Analytics 4 uses measurement ID `G-8RXPBQ7HEW` for basic visit statistics. Quiz answers, generated results and timer content stay in the browser and are not sent as custom analytics events. Google may process visited pages, device/browser details and cookie identifiers; see [Google's partner-site privacy explanation](https://policies.google.com/technologies/partner-sites) and [Google Privacy Policy](https://policies.google.com/privacy). Local storage can be unavailable; both tools keep working in memory.

The measurement ID is configured in `lib/site.ts`, and `components/GoogleAnalytics.tsx` loads the Google tag after hydration in the shared layout. For pageviews during Next.js client navigation, keep Enhanced Measurement and “Page changes based on browser history events” enabled in the GA4 web data stream, as described in [Google's SPA measurement guide](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications). This integration relies on automatic pageviews and does not add manual pageview events. Property settings and receipt in GA Realtime have not been verified from this workspace.

## Validation

`npm run check` typechecks, builds the static export, audits generated HTML metadata and local links, and checks every complete quiz answer combination. Browser QA should additionally cover quiz progression/result/restore, timer validation/restore/pause/reset, mobile navigation, and a missing route.

The primary search phrase is **threshing day game**, matched as a complete phrase without case sensitivity. The homepage alone has an editorial target of approximately 3% keyword word share: complete phrase occurrences × 3 ÷ English word count × 100. `npm run audit:keyword` checks the exported homepage `<main>` against a 2.7–3.3% range and writes details to `output/keyword-audit.json`. It includes headings, card text and all expandable FAQ answers, and excludes the outer header/footer, metadata, scripts, SVG and image alt text. The report also shows occurrence-based density (occurrences ÷ words × 100), a different measure. Inner pages use the complete phrase naturally in their titles and descriptions without a numeric density target. Titles containing the site name are emitted once rather than repeating it in a suffix.

This is a requested content acceptance measure, not a Google ranking metric. [Google states that there is no optimal keyword density](https://developers.google.com/search/help/office-hours/2023/january#does-google-use-keyword-density) and [identifies unnatural repetition as keyword stuffing](https://developers.google.com/search/docs/essentials/spam-policies#keyword-stuffing). Keep copy useful and readable when making future edits.

October 3, 2026 validation for this update: the homepage contains 748 English words and 8 complete target phrases, giving 3.2086% keyword word share (1.0695% occurrence density). An independent HTML parser confirmed the same numbers. The dragon logo loaded in desktop and 320/375 px previews, mobile navigation opened and closed after selection, and the updated homepage and guide/article views had no horizontal overflow. Page titles showed the complete target phrase once.

Privacy and terms remain accessible but are marked `noindex` and excluded from the sitemap. Guides, tools, sources and about are indexable. FAQ structured data matches visible answers; it does not guarantee rich results.

Production browser QA completed on October 3, 2026: eight-question progression, result restore and reset; timer input validation, pause, paused restore, resume, expired restore and reset; navigation that closes after mobile selection; homepage at 320/375 px and mobile quiz/article/timer layouts without horizontal overflow; no captured console errors. HTTP checks confirmed normal routes return 200, unknown routes return 404, and directory routes redirect with 308. The SVG download action produced its success state, but the in-app browser did not expose a completed download event, so file delivery still needs a check in the deployment browser. Native share-sheet delivery was not exercised.

The six-color update was checked in the production preview at desktop, 375 px and 320 px: all six homepage portraits loaded, the black card reached its guide anchor, and a complete quiz displayed the red portrait and retained it after reload. The result's color-reference link also reached the matching guide card. No horizontal overflow was observed on these new guide/result views.

## Artwork

`public/images/dragon-valley.webp` is original editorial artwork generated with the built-in ImageGen tool. It is not official game artwork or a screenshot. Prompt: original 16:9 hand-painted fantasy illustration with engraved print texture; a dark forest-green dragon perched on the right rocky ledge above an alpine ravine, pine forests, mist and a distant weathered stone tower; parchment-gold dawn light, muted greens, grey and cream; open misty valley on the left; no people, text, logos, watermarks, interface or official artwork imitation.

The six portraits in `public/images/dragons/` are original editorial illustrations for the red, blue, green, brown, orange and black collections listed in the [official Dragonkind shop](https://rebeccayarrosshop.com/pages/dragonkind). They are visual references, not official screenshots, exact color specifications or a complete current result catalog. All six are 960×640 WebP images, loaded lazily in the galleries. See [the artwork record](docs/dragon-color-artwork.md) for the complete generation prompts and asset details.

The header uses an original forest-green dragon head with a transparent background and the complete brand name “Threshing Day Game.” Matching browser and Apple touch icons use the same artwork. [The logo record](docs/dragon-logo-artwork.md) contains the built-in ImageGen prompt, saved asset paths and delivery sizes.

## Updating

Recheck the official game and author FAQ before changing factual guidance. Keep confirmed rules separate from editorial suggestions. Update the checked date only when the sources were actually reviewed. Do not publish invented win routes, probabilities, user counts, official result data or screenshots.
