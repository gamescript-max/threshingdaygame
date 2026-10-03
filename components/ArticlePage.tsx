import Link from 'next/link';
import { Breadcrumbs } from './Breadcrumbs';
import { DragonColorGallery } from './DragonColorGallery';
import { Faq } from './Faq';
import { Icon } from './Icon';
import { StructuredData } from './StructuredData';
import { articles, type Article } from '@/lib/content';
import { absoluteUrl, formatCheckedDate, official, site } from '@/lib/site';

export function ArticlePage({ article }: { article: Article }) {
  const path = `/${article.slug}/`;
  const informational = ['about', 'privacy', 'terms', 'sources'].includes(article.slug);
  const checkedDate = formatCheckedDate();
  return <main id="main-content">
    <div className="container"><Breadcrumbs items={informational ? [{ label: article.title, href: path }] : [{ label: 'Game guides', href: '/guides/' }, { label: article.title, href: path }]} /></div>
    <StructuredData data={{ '@context': 'https://schema.org', '@type': informational ? 'WebPage' : 'Article', headline: article.title, name: article.title, description: article.description, url: absoluteUrl(path), dateModified: site.checkedDate, inLanguage: 'en', isPartOf: { '@id': site.url + '/#website' }, ...(!informational ? { author: { '@type': 'Organization', name: site.name, url: site.url }, publisher: { '@type': 'Organization', name: site.name, url: site.url }, mainEntityOfPage: absoluteUrl(path) } : {}) }} />
    <header className="article-header"><div className="container"><span className="eyebrow">{article.eyebrow}</span><h1>{article.title}</h1><p>{article.description}</p><div className="article-meta"><span><Icon name="clock" /> {article.readTime}</span><span>Sources checked {checkedDate}</span><span>Independent fan guide</span></div></div></header>
    <div className="container article-layout"><aside className="article-sidebar"><div className="toc"><span className="eyebrow">IN THIS GUIDE</span><nav aria-label="On this page">{article.sections.map(section => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}{article.faqs?.length ? <a href="#questions">Common questions</a> : null}<a href="#sources">Sources</a></nav><div className="sidebar-official"><Icon name="compass" /><strong>Ready to enter?</strong><p>Continue at the official Dragonkind website.</p><a href={official.game} target="_blank" rel="noopener noreferrer" className="text-link">Open official game <Icon name="external" /></a></div></div></aside>
      <article className="article-body">{article.sections.map(section => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}{section.visual === 'dragon-colors' && <DragonColorGallery mode="guide" />}{section.bullets?.length ? <ul>{section.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}</ul> : null}{section.links?.length ? <div className="article-link-list">{section.links.map(link => link.href.startsWith('/') ? <Link className="text-link" href={link.href} key={link.href}>{link.label}<Icon name="arrow" /></Link> : <a className="text-link" href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">{link.label}<Icon name="external" /></a>)}</div> : null}</section>)}
      {article.faqs?.length ? <section id="questions"><span className="eyebrow">QUICK ANSWERS</span><h2>Common questions</h2><Faq items={article.faqs} /></section> : null}
      <section className="article-sources" id="sources"><span className="eyebrow">FOLLOW THE EVIDENCE</span><h2>Sources &amp; further reading</h2><p>Official information was checked on {checkedDate}. Features can change; your current official game screen takes precedence.</p><ul>{article.sources.map(source => <li key={source.href}><a href={source.href}>{source.label}<Icon name="external" /></a></li>)}</ul><Link href="/sources/" className="text-link">How we write these guides <Icon name="arrow" /></Link></section></article>
    </div>
    {article.related.length > 0 && <section className="container section related-section"><span className="eyebrow">CONTINUE YOUR JOURNEY</span><h2>Related guides</h2><div className="related-grid">{article.related.map(slug => { const related = articles.find(item => item.slug === slug); return related ? <Link key={slug} href={`/${slug}/`}><h3>{related.title}</h3><p>{related.description}</p><Icon name="arrow" /></Link> : null; })}</div></section>}
  </main>;
}
