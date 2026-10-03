'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { nav } from '@/lib/site';

export function MobileNav() {
  const menu = useRef<HTMLDetailsElement>(null);
  function closeMenu() { if (menu.current) menu.current.open = false; }
  return <details className="mobile-nav" ref={menu} onKeyDown={event => { if (event.key === 'Escape') closeMenu(); }}><summary aria-label="Navigation menu"><span></span><span></span><span></span></summary><nav aria-label="Mobile navigation">{nav.map(item => <Link href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>)}</nav></details>;
}
