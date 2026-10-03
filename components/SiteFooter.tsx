import Link from 'next/link';
import { official } from '@/lib/site';

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-top">
    <div className="footer-brand"><Link href="/" className="footer-wordmark">Threshing Day Game</Link><p>A field guide for the moment<br />a dragon chooses you.</p></div>
    <div><span className="footer-label">EXPLORE</span><Link href="/how-to-play/">How to play</Link><Link href="/fan-quiz/">Fan dragon quiz</Link><Link href="/retry-timer/">Retry timer</Link></div>
    <div><span className="footer-label">OFFICIAL LINKS</span><a href={official.game}>Dragonkind</a><a href={official.faq}>Author FAQ</a><a href={official.book}>Threshing Day book</a></div>
    <div><span className="footer-label">THE GUIDE</span><Link href="/about/">About this site</Link><Link href="/sources/">Sources &amp; methods</Link><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link></div>
  </div><div className="container footer-bottom"><p>Independent fan site. Not affiliated with Rebecca Yarros, Yarros Ink, Entangled Publishing, or Red Tower Books. Our quiz and artwork are original; they are not official game content.</p><span>© 2026 Threshing Day Game</span></div></footer>;
}
