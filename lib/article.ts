export type Article = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  readTime: string;
  checkedDate?: string;
  updatedDate?: string;
  actions?: { label: string; href: string }[];
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    links?: { label: string; href: string }[];
    visual?: 'dragon-colors';
    table?: { caption: string; columns: string[]; rows: string[][] };
  }[];
  faqs?: { question: string; answer: string }[];
  sources: { label: string; href: string }[];
  related: string[];
  noindex?: boolean;
};
