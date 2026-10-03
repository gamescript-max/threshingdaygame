import Link from 'next/link';
import { absoluteUrl } from '@/lib/site';
import { StructuredData } from './StructuredData';

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  const crumbs = [{ label: 'Home', href: '/' }, ...items];
  return <><StructuredData data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.label, item: absoluteUrl(item.href) })) }} /><nav className="breadcrumbs" aria-label="Breadcrumb"><ol>{crumbs.map((item, i) => <li key={item.href}>{i === crumbs.length - 1 ? <span aria-current="page">{item.label}</span> : <Link href={item.href}>{item.label}</Link>}</li>)}</ol></nav></>;
}
