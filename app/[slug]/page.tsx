import { notFound } from 'next/navigation';
import { articles } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';
import { ArticlePage } from '@/components/ArticlePage';

export const dynamicParams = false;
export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  return article ? pageMetadata(article.title, article.description, `/${slug}/`, article.noindex) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
