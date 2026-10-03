import { readFile, mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

// Editorial acceptance measure requested for the homepage, not a Google ranking metric.
const keyword = 'threshing day game';
const html = await readFile(new URL('../out/index.html', import.meta.url), 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
assert.ok(main, 'Homepage must have a main content region');

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

const text = plainText(main);
const englishWords = (text.match(/[A-Za-z]+(?:['\u2019][A-Za-z]+)*/g) || []).length;
const occurrences = (text.match(/\bthreshing\s+day\s+game\b/gi) || []).length;
const keywordWords = keyword.split(' ').length;
const wordSharePercent = occurrences * keywordWords / englishWords * 100;
const occurrencePercent = occurrences / englishWords * 100;
const title = plainText(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '');
const h1 = plainText(main.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '');
for (const [label, value] of [['title', title], ['H1', h1]]) {
  assert.match(value, /\bthreshing\s+day\s+game\b/i, `Homepage ${label} must contain the complete target phrase`);
}

const report = {
  keyword, route: '/', englishWords, occurrences, keywordWords,
  wordSharePercent: Number(wordSharePercent.toFixed(4)),
  occurrencePercent: Number(occurrencePercent.toFixed(4)),
  targetWordSharePercent: { min: 2.7, max: 3.3 },
  scope: 'Exported homepage main text, including all expandable FAQ answers. Excludes outer header/footer, metadata, scripts, styles, templates, noscript, SVG, and image alt text.',
  formula: 'Complete phrase occurrences × 3 ÷ English word count × 100',
};
await mkdir(new URL('../output/', import.meta.url), { recursive: true });
await writeFile(new URL('../output/keyword-audit.json', import.meta.url), JSON.stringify(report, null, 2) + '\n');
console.log(`Homepage keyword audit: ${occurrences} complete phrases; ${englishWords} English words; word share ${wordSharePercent.toFixed(2)}%; occurrence density ${occurrencePercent.toFixed(2)}%.`);
assert.ok(wordSharePercent >= 2.7 && wordSharePercent <= 3.3, `Homepage keyword word share must remain near 3% (2.7–3.3%); got ${wordSharePercent.toFixed(2)}%`);
