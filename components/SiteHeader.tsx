import Link from 'next/link';
import Image from 'next/image';
import { nav, official } from '@/lib/site';
import { Icon } from './Icon';
import { MobileNav } from './MobileNav';

export function SiteHeader() {
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="wordmark" aria-label="Threshing Day Game home"><Image className="brand-dragon" src="/images/dragon-logo-mark.png" width={96} height={96} alt="" priority sizes="48px" /><span><span className="brand-name">THRESHING DAY GAME</span>{' '}<small>DRAGONKIND FIELD GUIDE</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <a className="official-link" href={official.game} target="_blank" rel="noopener noreferrer">Official game <Icon name="external" /></a>
      <MobileNav />
    </div>
  </header>;
}
