import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Icon } from '@/components/Icon';
import { articles } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Threshing Day Game Guides — Dragonkind Help', 'Find Threshing Day Game guides for Dragonkind: how to play, email codes, retry cooldowns, and dragon results. Independent help with official sources.', '/guides/');
export default function Guides() {
  const guides = articles.filter(item => !['about', 'privacy', 'terms', 'sources'].includes(item.slug));
  return <main id="main-content"><div className="container"><Breadcrumbs items={[{ label: 'Game guides', href: '/guides/' }]} /></div><header className="page-header container"><span className="eyebrow">THE DRAGONKIND FIELD GUIDE</span><h1>Threshing Day Game guides.</h1><p>Start playing, solve the problem in front of you, and understand the dragon that chooses you. Official facts and practical suggestions, with sources attached.</p></header><section className="container section guide-library" aria-label="All game guides"><div className="guide-grid">{guides.map((article, i) => <Link className="guide-card" href={`/${article.slug}/`} key={article.slug}><div className="card-top"><span className="eyebrow">{article.eyebrow}</span><span className="card-number">{String(i + 1).padStart(2, '0')}</span></div><h2>{article.title}</h2><p>{article.description}</p><div className="guide-card-bottom"><span>{article.readTime}</span><Icon name="arrow" /></div></Link>)}</div></section></main>;
}
