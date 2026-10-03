import type { Metadata } from 'next';
import { absoluteUrl, site } from './site';

export function pageMetadata(title: string, description: string, path: string, noindex = false): Metadata {
  return {
    title: /\bthreshing day game\b/i.test(title) ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { type: 'website', title, description, url: absoluteUrl(path), siteName: site.name, images: [{ url: absoluteUrl('/images/dragon-valley.webp'), width: 1672, height: 941, alt: 'Original dragon-valley illustration for the independent Threshing Day Game field guide' }] },
    twitter: { card: 'summary_large_image', title, description, images: [absoluteUrl('/images/dragon-valley.webp')] },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
