import Image from 'next/image';
import Link from 'next/link';
import { DragonColorGallery } from '@/components/DragonColorGallery';
import { Faq } from '@/components/Faq';
import { Icon } from '@/components/Icon';
import { dragonColorSource } from '@/lib/dragons';
import { pageMetadata } from '@/lib/metadata';
import { formatCheckedDate, official } from '@/lib/site';

export const metadata = { ...pageMetadata('Threshing Day Game — Dragonkind Guides & Free Dragon Quiz', 'Play the official Threshing Day game on Dragonkind, find help with codes and retry timers, or take our free original dragon quiz. Independent fan guide.', '/'), title: { absolute: 'Threshing Day Game — Dragonkind Guides & Free Dragon Quiz' } };

const help = [
  { href: '/how-to-play/', icon: 'compass' as const, tag: 'START YOUR JOURNEY', title: 'How to play Dragonkind', text: 'Start the Threshing Day Game on the official Dragonkind website.' },
  { href: '/code-not-received/', icon: 'mail' as const, tag: 'GETTING INTO THE GAME', title: 'Waiting for your code?', text: 'Check email batches and spam when a Threshing Day Game code is missing.' },
  { href: '/retry-cooldown/', icon: 'clock' as const, tag: 'AFTER THE FIRE', title: 'Burned? You can try again.', text: 'Read the Threshing Day Game retry rules and plan your next attempt.' },
  { href: '/dragon-results/', icon: 'book' as const, tag: 'KNOW YOUR DRAGON', title: 'Make sense of your result', text: 'Understand Threshing Day Game dragon colors, tails, and result cards.' },
];

const homeFaqs = [
  {
    question: 'Where can I play the official Threshing Day Game?',
    answer: 'Play the Threshing Day Game at dragonkind.com. This website is an independent guide with a separate, original fan quiz.',
  },
  {
    question: 'Why has my Threshing Day Game code not arrived?',
    answer: "Threshing Day Game codes are sent in batches, according to Rebecca Yarros's FAQ. Check spam and confirm your email address before requesting another code.",
  },
  {
    question: 'Can I retry the Threshing Day Game after dying?',
    answer: 'Yes. The official FAQ says you can return to the Threshing Day Game after a few hours and keep trying. Follow your current Dragonkind message.',
  },
  {
    question: 'Can a Threshing Day Game guide guarantee my dragon?',
    answer: 'No Threshing Day Game guide here guarantees a color or tail type. We separate confirmed information from assumptions about choices.',
  },
  {
    question: 'Is the Threshing Day Game fan quiz linked to Dragonkind?',
    answer: 'No. Our quiz runs in your browser, uses original scoring, and does not send answers to Dragonkind or change your official result.',
  },
  {
    question: 'Is the Threshing Day Game different from the book?',
    answer: 'Dragonkind is the official interactive experience. Threshing Day is also the title of the companion collection. Our comparison guide separates the game, book website, and fan quizzes.',
  },
];

export default function Home() {
  return <main id="main-content">
    <section className="home-hero">
      <Image src="/images/dragon-valley.webp" alt="Original fantasy illustration of a green dragon above a misty mountain valley; not a Dragonkind screenshot" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <span className="eyebrow hero-eyebrow"><span className="tiny-diamond" /> THE DRAGONKIND FIELD GUIDE</span>
        <h1><span className="hero-title-keyword">Threshing Day Game</span>{' '}<em>Find your dragon.</em></h1>
        <p>Your Threshing Day Game journey starts here. Play Rebecca Yarros’s official Dragonkind experience, find the answer you need, or discover your dragon with our original fan quiz.</p>
        <div className="button-group"><a href={official.game} target="_blank" rel="noopener noreferrer" className="button button-gold">Play official Dragonkind <Icon name="external" /></a><Link href="/fan-quiz/" className="button button-hero">Take the fan dragon quiz <Icon name="arrow" /></Link></div>
        <div className="hero-note"><Icon name="shield" /> Independent fan guide. The official game is at dragonkind.com.</div>
      </div>
      <span className="hero-caption">Original editorial artwork</span>
      <div className="hero-coordinate" aria-hidden="true">THE VALE · A NEW BEGINNING</div>
    </section>

    <div className="field-strip"><div className="container"><span>A LITTLE COURAGE. A LITTLE GUIDANCE.</span><span>Official sources <i /> Original fan quiz <i /> A place to start</span></div></div>

    <section className="container section quick-help" aria-labelledby="help-title">
      <div className="section-heading"><div><span className="eyebrow">THE FIELD GUIDE</span><h2 id="help-title">Threshing Day Game guides.</h2></div><Link href="/guides/" className="text-link">Explore all guides <Icon name="arrow" /></Link></div>
      <div className="help-grid">{help.map((item, index) => <Link className="help-card" key={item.href} href={item.href}><div className="card-top"><span className="card-icon"><Icon name={item.icon} /></span><span className="card-number">0{index + 1}</span></div><span className="eyebrow">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-link">Read the guide <Icon name="arrow" /></span></Link>)}</div>
    </section>

    <section className="quiz-feature" aria-labelledby="quiz-feature-title"><div className="container quiz-feature-inner">
      <div className="quiz-feature-art"><Image src="/images/dragon-valley.webp" width={1672} height={941} alt="Original illustration of a forest-green dragon resting on a rocky ledge" sizes="(max-width: 760px) 100vw, 45vw" /><span>THE DRAGONS ARE WAITING</span></div>
      <div className="quiz-feature-copy"><span className="eyebrow">THRESHING DAY GAME FAN QUIZ</span><h2 id="quiz-feature-title">Which dragon<br />would choose <em>you?</em></h2><p>Our original Threshing Day Game fan quiz explores how you face the unknown through eight choices and six dragon affinities. Keep or share your personal result card.</p><div className="quiz-feature-facts"><span><Icon name="clock" /> About 3 minutes</span><span><Icon name="shield" /> No account needed</span></div><Link href="/fan-quiz/" className="button button-primary">Discover your dragon <Icon name="arrow" /></Link><small>For fun. Your result does not predict your official Dragonkind bond.</small><Link href="/official-dragon-quiz/" className="text-link quiz-comparison-link">Compare official and fan quizzes <Icon name="arrow" /></Link></div>
    </div></section>

    <section className="container section dragon-colors-section" aria-labelledby="dragon-colors-title">
      <div className="section-heading"><div><span className="eyebrow">A DRAGON COLOR FIELD GUIDE</span><h2 id="dragon-colors-title">Threshing Day Game dragon colors.</h2></div><Link href="/dragon-results/#dragon-colors" className="text-link">Read the result guide <Icon name="arrow" /></Link></div>
      <p className="dragon-colors-intro">Reading a Threshing Day Game result? Explore six color families featured in the official Dragonkind collection, then use our original illustrations as a visual reference.</p>
      <DragonColorGallery />
      <p className="dragon-art-note">Original fan illustrations. Colors follow the <a href={dragonColorSource} target="_blank" rel="noopener noreferrer">official Dragonkind color collections</a>; these are visual references, not game screenshots or a complete result catalog.</p>
    </section>

    <section className="container section companion-section"><div className="section-heading"><div><span className="eyebrow">KEEP YOUR PLACE IN THE STORY</span><h2>Your next Threshing Day Game attempt.</h2></div><p>Death at Threshing is not the end. Follow the official retry message and set a personal reminder for your next attempt.</p></div><div className="timer-promo"><div className="timer-promo-icon"><Icon name="clock" width="42" height="42" /></div><div><h3>Your next chance, kept in view.</h3><p>Track your Threshing Day Game retry time on this device. Enter the time shown by Dragonkind, or your own estimate if none is given.</p></div><Link href="/retry-timer/" className="button button-secondary">Open retry timer <Icon name="arrow" /></Link></div></section>

    <section className="official-section"><div className="container official-inner"><div><span className="eyebrow">THREE DOORS. THREE DIFFERENT STORIES.</span><h2>Looking for the<br /><em>official</em> website?</h2><p>Looking for the official Threshing Day Game? The game, the book, and the author each have their own home. Here is the right place for each.</p><Link href="/dragonkind-vs-threshing-day/" className="text-link">Understand the difference <Icon name="arrow" /></Link></div><div className="official-list">{[
      { href: official.game, label: 'THE OFFICIAL GAME', name: 'Dragonkind', domain: 'dragonkind.com', text: 'Create your candidate account and experience Threshing.' },
      { href: official.book, label: 'THE BOOK WEBSITE', name: 'Threshing Day', domain: 'threshingday.com', text: 'Discover the Empyrean companion collection and book links.' },
      { href: official.faq, label: 'ANSWERS FROM THE AUTHOR', name: 'Rebecca Yarros', domain: 'rebeccayarros.com', text: 'Read the official answers about codes, retries, and dragons.' },
    ].map((item, i) => <a href={item.href} key={item.href} target="_blank" rel="noopener noreferrer"><span className="official-index">0{i + 1}</span><div><span className="eyebrow">{item.label}</span><h3>{item.name}</h3><p>{item.text}</p><small>{item.domain}</small></div><Icon name="external" /></a>)}</div></div></section>

    <section className="container section home-faq"><div><span className="eyebrow">BEFORE YOU ENTER</span><h2>A few things<br />worth knowing.</h2><p>Quick answers about the Threshing Day Game.</p><Link href="/faq/" className="text-link">More questions &amp; answers <Icon name="arrow" /></Link></div><Faq items={homeFaqs} /></section>

    <section className="container section home-resources" aria-labelledby="more-guides-title"><div className="section-heading"><div><span className="eyebrow">FURTHER READING</span><h2 id="more-guides-title">Explore the Threshing Day Game.</h2></div></div><p className="home-resources-intro">Find the right entrance, understand your result, or choose your next read. These guides connect the official activities with their book background.</p><div className="home-resource-grid">{[
      { href: '/threshing-day-game-website/', title: 'Official website and login', text: 'The Threshing Day Game website guide links to Dragonkind and explains the entry options.' },
      { href: '/official-dragon-quiz/', title: 'Official quiz or fan quiz?', text: 'Compare the publisher’s Signet Quiz, the official adventure, and our original fan quiz.' },
      { href: '/dragon-tail-types/', title: 'Dragon tail types', text: 'Understand Threshing Day Game tail labels and read them alongside your dragon’s color.' },
      { href: '/what-is-threshing/', title: 'What is Threshing?', text: 'Learn the dragon-rider vocabulary and separate book background from current game instructions.' },
      { href: '/threshing-day-book/', title: 'Book and reading order', text: 'Find the companion collection, the first three novels, and official bonus material.' },
    ].map(item => <Link key={item.href} href={item.href}><h3>{item.title}</h3><p>{item.text}</p><span>Read the guide <Icon name="arrow" /></span></Link>)}</div></section>

    <section className="source-note container"><Icon name="book" /><p>Our Threshing Day Game guides start with official sources. Confirmed rules, practical suggestions, and our original quiz are kept distinct. <Link href="/sources/">Read our sources &amp; methods.</Link></p><span>CHECKED {formatCheckedDate('short').toUpperCase()}</span></section>
  </main>;
}
