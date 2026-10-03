import Image from 'next/image';
import Link from 'next/link';
import { Faq } from '@/components/Faq';
import { Icon } from '@/components/Icon';
import { homepageFaqs } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';
import { formatCheckedDate, official } from '@/lib/site';

export const metadata = { ...pageMetadata('Threshing Day Game — Dragonkind Guides & Free Dragon Quiz', 'Play the official Threshing Day game on Dragonkind, find help with codes and retry timers, or take our free original dragon quiz. Independent fan guide.', '/'), title: { absolute: 'Threshing Day Game — Dragonkind Guides & Free Dragon Quiz' } };

const help = [
  { href: '/how-to-play/', icon: 'compass' as const, tag: 'START YOUR JOURNEY', title: 'How to play Dragonkind', text: 'Find the official game and take your first steps into Threshing.' },
  { href: '/code-not-received/', icon: 'mail' as const, tag: 'GETTING INTO THE GAME', title: 'Waiting for your code?', text: 'Understand email batches, check spam, and get back on track.' },
  { href: '/retry-cooldown/', icon: 'clock' as const, tag: 'AFTER THE FIRE', title: 'Burned? You can try again.', text: 'Read the retry rules and keep track of your next attempt.' },
  { href: '/dragon-results/', icon: 'book' as const, tag: 'KNOW YOUR DRAGON', title: 'Make sense of your result', text: 'A guide to dragon colors, tails, and your result card.' },
];

export default function Home() {
  return <main id="main-content">
    <section className="home-hero">
      <Image src="/images/dragon-valley.webp" alt="Original fantasy illustration of a green dragon above a misty mountain valley; not a Dragonkind screenshot" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <span className="eyebrow hero-eyebrow"><span className="tiny-diamond" /> THE THRESHING DAY GAME FIELD GUIDE</span>
        <h1>Enter the Vale.<br /><em>Find your dragon.</em></h1>
        <p>Ready for your Threshing Day? Play Rebecca Yarros’s official Dragonkind experience, find the answer you need, or discover your dragon with our original fan quiz.</p>
        <div className="button-group"><a href={official.game} target="_blank" rel="noopener noreferrer" className="button button-gold">Play official Dragonkind <Icon name="external" /></a><Link href="/fan-quiz/" className="button button-hero">Take the fan dragon quiz <Icon name="arrow" /></Link></div>
        <div className="hero-note"><Icon name="shield" /> Independent fan guide. The official game is at dragonkind.com.</div>
      </div>
      <span className="hero-caption">Original editorial artwork</span>
      <div className="hero-coordinate" aria-hidden="true">THE VALE · A NEW BEGINNING</div>
    </section>

    <div className="field-strip"><div className="container"><span>A LITTLE COURAGE. A LITTLE GUIDANCE.</span><span>Official sources <i /> Original fan quiz <i /> A place to start</span></div></div>

    <section className="container section quick-help" aria-labelledby="help-title">
      <div className="section-heading"><div><span className="eyebrow">THE FIELD GUIDE</span><h2 id="help-title">Every rider needs a starting point.</h2></div><Link href="/guides/" className="text-link">Explore all guides <Icon name="arrow" /></Link></div>
      <div className="help-grid">{help.map((item, index) => <Link className="help-card" key={item.href} href={item.href}><div className="card-top"><span className="card-icon"><Icon name={item.icon} /></span><span className="card-number">0{index + 1}</span></div><span className="eyebrow">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-link">Read the guide <Icon name="arrow" /></span></Link>)}</div>
    </section>

    <section className="quiz-feature" aria-labelledby="quiz-feature-title"><div className="container quiz-feature-inner">
      <div className="quiz-feature-art"><Image src="/images/dragon-valley.webp" width={1672} height={941} alt="Original illustration of a forest-green dragon resting on a rocky ledge" sizes="(max-width: 760px) 100vw, 45vw" /><span>THE DRAGONS ARE WAITING</span></div>
      <div className="quiz-feature-copy"><span className="eyebrow">A DIFFERENT PATH INTO THE VALE</span><h2 id="quiz-feature-title">Which dragon<br />would choose <em>you?</em></h2><p>Eight choices. Six dragon affinities. An original fan-made quiz about how you face the unknown, with a result card to keep or share.</p><div className="quiz-feature-facts"><span><Icon name="clock" /> About 3 minutes</span><span><Icon name="shield" /> No account needed</span></div><Link href="/fan-quiz/" className="button button-primary">Discover your dragon <Icon name="arrow" /></Link><small>For fun. Your result does not predict your official Dragonkind bond.</small></div>
    </div></section>

    <section className="container section companion-section"><div className="section-heading"><div><span className="eyebrow">KEEP YOUR PLACE IN THE STORY</span><h2>While you wait for your next attempt.</h2></div><p>Death at Threshing is not the end. Use the remaining time shown in your official game to set a personal reminder.</p></div><div className="timer-promo"><div className="timer-promo-icon"><Icon name="clock" width="42" height="42" /></div><div><h3>Your next chance, kept in view.</h3><p>A simple retry timer that stays on this device. Set it from Dragonkind’s countdown and return when your reminder ends.</p></div><Link href="/retry-timer/" className="button button-secondary">Open retry timer <Icon name="arrow" /></Link></div></section>

    <section className="official-section"><div className="container official-inner"><div><span className="eyebrow">THREE DOORS. THREE DIFFERENT STORIES.</span><h2>Looking for the<br /><em>official</em> website?</h2><p>The game, the book, and the author each have their own home. Here is the right place for each.</p><Link href="/dragonkind-vs-threshing-day/" className="text-link">Understand the difference <Icon name="arrow" /></Link></div><div className="official-list">{[
      { href: official.game, label: 'THE OFFICIAL GAME', name: 'Dragonkind', domain: 'dragonkind.com', text: 'Create your candidate account and experience Threshing.' },
      { href: official.book, label: 'THE BOOK WEBSITE', name: 'Threshing Day', domain: 'threshingday.com', text: 'Discover the Empyrean companion collection and book links.' },
      { href: official.faq, label: 'ANSWERS FROM THE AUTHOR', name: 'Rebecca Yarros', domain: 'rebeccayarros.com', text: 'Read the official answers about codes, retries, and dragons.' },
    ].map((item, i) => <a href={item.href} key={item.href} target="_blank" rel="noopener noreferrer"><span className="official-index">0{i + 1}</span><div><span className="eyebrow">{item.label}</span><h3>{item.name}</h3><p>{item.text}</p><small>{item.domain}</small></div><Icon name="external" /></a>)}</div></div></section>

    <section className="container section home-faq"><div><span className="eyebrow">BEFORE YOU ENTER</span><h2>A few things<br />worth knowing.</h2><p>Short answers for your first Threshing Day.</p><Link href="/faq/" className="text-link">More questions &amp; answers <Icon name="arrow" /></Link></div><Faq items={homepageFaqs} /></section>

    <section className="source-note container"><Icon name="book" /><p>Our guides start with official sources. Confirmed rules, practical suggestions, and our original quiz are kept distinct. <Link href="/sources/">Read our sources &amp; methods.</Link></p><span>CHECKED {formatCheckedDate('short').toUpperCase()}</span></section>
  </main>;
}
