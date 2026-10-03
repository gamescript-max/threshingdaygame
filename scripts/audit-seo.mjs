import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve('out');
const files = [];
async function walk(dir) { for (const item of await readdir(dir, { withFileTypes: true })) { const file = path.join(dir, item.name); if (item.isDirectory()) await walk(file); else if (item.name === 'index.html') files.push(file); } }
await walk(root);
const pages = files.filter(file => { const relative = path.relative(root, file); return !relative.startsWith('_') && !relative.startsWith('404' + path.sep); });
const titles = new Set();
const canonicals = new Set();
const errors = [];
let indexed = 0;
const canonicalOrigins = new Set();
for (const file of pages) {
  const rel = path.relative(root, file).replaceAll('\\', '/');
  const route = rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, '');
  const html = await readFile(file, 'utf8');
  const fail = message => errors.push(`${route}: ${message}`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  if (!title || titles.has(title)) fail('missing or duplicate title'); else titles.add(title);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) fail('expected exactly one rendered H1');
  if (!/<html[^>]+lang="en"/.test(html)) fail('missing English language');
  const tags = html.match(/<meta[^>]*>|<link[^>]*>/g) || [];
  if (!tags.some(tag => /name="description"/.test(tag) && /content="[^"]+"/.test(tag))) fail('missing description');
  const canonicalTag = tags.find(tag => /rel="canonical"/.test(tag));
  const canonical = canonicalTag?.match(/href="([^"]+)"/)?.[1];
  if (!canonical || canonicals.has(canonical)) fail('missing or duplicate canonical');
  else { canonicals.add(canonical); const parsed = new URL(canonical); canonicalOrigins.add(parsed.origin); if (parsed.pathname !== route) fail('canonical does not match path'); }
  const ogUrl = tags.find(tag => /property="og:url"/.test(tag))?.match(/content="([^"]+)"/)?.[1];
  if (ogUrl !== canonical) fail('Open Graph URL differs from canonical');
  const noindex = tags.some(tag => /name="robots"/.test(tag) && /noindex/.test(tag));
  if (!noindex) indexed++;
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(match[1]); } catch { fail('invalid JSON-LD'); } }
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[^\"]*)"/g)) {
    const href = match[1];
    if (href.startsWith('//')) { fail('protocol-relative remote asset'); continue; }
    let target = path.resolve(root, '.' + href);
    if (href.endsWith('/')) target = path.join(target, 'index.html');
    const info = await stat(target).catch(() => null);
    if (!info?.isFile()) fail(`broken local reference ${href}`);
  }
  for (const tag of html.match(/<(?:script|img|iframe)[^>]*>/g) || []) {
    const remoteSrc = tag.match(/\bsrc="(https?:\/\/[^\"]+)"/)?.[1];
    if (!remoteSrc) continue;
    const url = new URL(remoteSrc.replaceAll('&amp;', '&'));
    const isGoogleTag = tag.startsWith('<script ') && url.origin === 'https://www.googletagmanager.com' && url.pathname === '/gtag/js' && /^G-[A-Z0-9]+$/.test(url.searchParams.get('id') || '');
    if (!isGoogleTag) fail('unexpected external runtime resource');
  }
  if (!/Independent fan|independent guide|Independent guide|Independent fan site/.test(html)) fail('missing independent-site disclosure');
}
assert.equal(canonicalOrigins.size, 1, 'All canonicals must share one site origin');
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (urls.length !== indexed) errors.push(`Sitemap: ${urls.length} URLs for ${indexed} indexable pages`);
for (const canonical of canonicals) { const file = new URL(canonical).pathname; const page = await readFile(path.join(root, '.' + file, 'index.html'), 'utf8'); const noindex = /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(page); if (urls.includes(canonical) === noindex) errors.push(`Sitemap inclusion incorrect: ${canonical}`); }
const robots = await readFile(path.join(root, 'robots.txt'), 'utf8');
if (!robots.includes([...canonicalOrigins][0] + '/sitemap.xml')) errors.push('robots.txt sitemap origin differs from canonical origin');
const missingPage = await readFile(path.join(root, '404.html'), 'utf8');
if (!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(missingPage)) errors.push('404 page must be noindex');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`SEO audit passed: ${pages.length} static pages; ${indexed} indexed routes; unique metadata, correct canonicals, JSON-LD, sitemap and local links.`);
