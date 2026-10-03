import { StructuredData } from './StructuredData';

export function Faq({ items, schema = true }: { items: { question: string; answer: string }[]; schema?: boolean }) {
  return <>
    {schema && <StructuredData data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }} />}
    <div className="faq-list">{items.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
  </>;
}
