import type { MetadataRoute } from 'next';
import { articles } from '@/lib/content';
import { absoluteUrl, site, specialRoutes } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [...specialRoutes, ...articles.filter(item => !item.noindex).map(item => `/${item.slug}/`)].map(path => ({ url: absoluteUrl(path), lastModified: site.checkedDate }));
}
