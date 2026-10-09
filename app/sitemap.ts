import type { MetadataRoute } from 'next';
import { articles } from '@/lib/content';
import { absoluteUrl, site, specialRoutes } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...specialRoutes.map(path => ({ url: absoluteUrl(path), lastModified: ['/', '/guides/'].includes(path) ? '2026-10-09' : site.checkedDate })),
    ...articles.filter(item => !item.noindex).map(item => ({ url: absoluteUrl(`/${item.slug}/`), lastModified: item.updatedDate || item.checkedDate || site.checkedDate })),
  ];
}
