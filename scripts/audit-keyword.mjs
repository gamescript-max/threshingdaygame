import { readFile, mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

// Editorial acceptance measure requested for the homepage, not a Google ranking metric.
const keyword = 'threshing day game';
const html = await readFile(new URL('../out/index.html', import.meta.url), 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1];
assert.ok(main, 'Homepage must have a main content region');
assert.ok(body, 'Homepage must have a body region');

function plainText(markup) {
  return markup
    .replace(/<!--([\s\S]*?)-->/g, ' ')
    .replace(/<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&(amp|quot|apos|lt|gt|nbsp);/g, (_, name) => ({ amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' }[name]))
    .replace(/\s+/g, ' ').trim();
}

const keywordWords = keyword.split(' ').length;
const targetOccurrencePercent = { min: 3, max: 4 };

// This is an estimate from exported HTML, not CSS-aware browser innerText.
function defaultCollapsedDetails(markup) {
  return markup.replace(/<details\b([^>]*)>([\s\S]*?)<\/details>/gi, (element, attributes, content) => {
    const parsedAttributes = [...attributes.matchAll(/([^\s"'<>/=]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?/g)];
    if (parsedAttributes.some((attribute) => attribute[1].toLowerCase() === 'open')) return element;
    return content.match(/<summary\b[^>]*>[\s\S]*?<\/summary>/i)?.[0] || '';
  });
}

function measure(markup) {
  const text = plainText(markup);
  const englishWords = (text.match(/[A-Za-z]+(?:['\u2019][A-Za-z]+)*/g) || []).length;
  const occurrences = (text.match(/\bthreshing\s+day\s+game\b/gi) || []).length;
  assert.ok(englishWords > 0, 'Measured homepage text must contain English words');
  return {
    englishWords,
    occurrences,
    occurrencePercent: occurrences / englishWords * 100,
    wordSharePercent: occurrences * keywordWords / englishWords * 100,
  };
}

const measurements = {
  mainAll: measure(main),
  mainDefaultCollapsed: measure(defaultCollapsedDetails(main)),
  bodyAll: measure(body),
  bodyDefaultCollapsed: measure(defaultCollapsedDetails(body)),
};
const title = plainText(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '');
const h1 = plainText(main.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '');
for (const [label, value] of [['title', title], ['H1', h1]]) {
  assert.match(value, /\bthreshing\s+day\s+game\b/i, `Homepage ${label} must contain the complete target phrase`);
}

const report = {
  keyword, route: '/', keywordWords,
  targetOccurrencePercent,
  formula: 'Complete phrase occurrences ÷ English word count × 100',
  secondaryFormula: 'Complete phrase occurrences × 3 ÷ English word count × 100; reported separately, not used for acceptance',
  scopes: {
    mainAll: 'Exported homepage main text including all FAQ answers; excludes outer header and footer.',
    mainDefaultCollapsed: 'Exported homepage main text with unopened details reduced to their summaries; open details retain their contents.',
    bodyAll: 'Exported homepage body text including header, footer, and all details contents.',
    bodyDefaultCollapsed: 'Exported homepage body text with unopened details reduced to their summaries; open details retain their contents.',
  },
  exclusions: 'All scopes exclude metadata, scripts, styles, templates, noscript, SVG, and image alt text.',
  limitation: 'Counts are estimates from generated HTML. They do not model CSS visibility, responsive navigation, or actual browser innerText. The AITDK density formula has not been verified.',
  measurements: Object.fromEntries(Object.entries(measurements).map(([scope, metrics]) => [scope, {
    ...metrics,
    occurrencePercent: Number(metrics.occurrencePercent.toFixed(4)),
    wordSharePercent: Number(metrics.wordSharePercent.toFixed(4)),
  }])),
};
await mkdir(new URL('../output/', import.meta.url), { recursive: true });
await writeFile(new URL('../output/keyword-audit.json', import.meta.url), JSON.stringify(report, null, 2) + '\n');
for (const [scope, metrics] of Object.entries(measurements)) {
  console.log(`Homepage keyword audit (${scope}): ${metrics.occurrences} complete phrases; ${metrics.englishWords} English words; occurrence density ${metrics.occurrencePercent.toFixed(2)}%; secondary word share ${metrics.wordSharePercent.toFixed(2)}%.`);
  assert.ok(metrics.occurrencePercent >= targetOccurrencePercent.min && metrics.occurrencePercent <= targetOccurrencePercent.max, `Homepage keyword occurrence density (${scope}) must remain at 3–4%; got ${metrics.occurrencePercent.toFixed(2)}%`);
}
