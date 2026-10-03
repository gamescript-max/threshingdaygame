import Link from 'next/link';
export default function NotFound() {
  return <main id="main-content" className="container not-found"><span className="eyebrow">404 · A path less traveled</span><h1>This trail ends here.</h1><p>The page you are looking for is not in this field guide. Find the official game or return to a guide below.</p><div className="button-group"><Link href="/" className="button button-primary">Return home</Link><Link href="/guides/" className="button button-secondary">Browse game guides</Link></div></main>;
}
