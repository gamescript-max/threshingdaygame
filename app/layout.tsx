import type { Metadata, Viewport } from 'next';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/cormorant-garamond/latin-600.css';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { StructuredData } from '@/components/StructuredData';
import { site } from '@/lib/site';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Threshing Day Game — Dragonkind Guides & Dragon Quiz', template: '%s | Threshing Day Game' },
  description: site.description,
  applicationName: site.name,
  icons: { icon: [{ url: '/images/dragon-favicon.png', sizes: '64x64', type: 'image/png' }], apple: [{ url: '/images/dragon-touch-icon.png', sizes: '180x180', type: 'image/png' }] },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#172d25', colorScheme: 'light' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a>
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebSite', '@id': site.url + '/#website', name: site.name, url: site.url, description: site.description, inLanguage: 'en', publisher: { '@type': 'Organization', name: site.name, url: site.url } }} />
    <SiteHeader />{children}<SiteFooter /><GoogleAnalytics />
  </body></html>;
}
