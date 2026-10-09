const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.threshingdaygame.org';
const parsedUrl = new URL(configuredUrl);
if (!['https:', 'http:'].includes(parsedUrl.protocol) || parsedUrl.pathname !== '/' || parsedUrl.search || parsedUrl.hash) {
  throw new Error('NEXT_PUBLIC_SITE_URL must be a plain HTTP(S) origin without a path, query, or fragment.');
}

export const site = {
  name: 'Threshing Day Game',
  url: parsedUrl.origin,
  description: 'Find the official Threshing Day game, learn Dragonkind, solve email and retry problems, and discover your dragon with an original fan quiz.',
  checkedDate: '2026-10-03',
};

export const analytics = { googleMeasurementId: 'G-8RXPBQ7HEW' };

export const official = {
  game: 'https://dragonkind.com/',
  faq: 'https://rebeccayarros.com/faqs',
  book: 'https://threshingday.com/',
  author: 'https://rebeccayarros.com/threshing-day',
  chapter: 'https://rebeccayarros.com/threshing-day-xaden',
};

export const nav = [
  { href: '/guides/', label: 'Game guides' },
  { href: '/dragon-results/', label: 'Dragon results' },
  { href: '/retry-timer/', label: 'Retry timer' },
  { href: '/fan-quiz/', label: 'Dragon quiz' },
];

export const specialRoutes = ['/', '/guides/', '/fan-quiz/', '/retry-timer/'];
export function absoluteUrl(path = '/') { return new URL(path, `${site.url}/`).href; }
export function formatCheckedDate(month: 'long' | 'short' = 'long', date = site.checkedDate) {
  return new Intl.DateTimeFormat('en-US', { month, day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(date));
}
