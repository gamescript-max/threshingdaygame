import type { Article } from './article';

const officialGame = { label: 'Open official Dragonkind', href: 'https://dragonkind.com/' };
const officialFaq = { label: 'Rebecca Yarros — Dragonkind FAQs', href: 'https://rebeccayarros.com/faqs' };
const publisherBook = { label: 'Threshing Day — publisher website', href: 'https://threshingday.com/' };
const publisherQuiz = { label: 'Open the publisher’s Signet Quiz', href: 'https://threshingday.com/quiz.html' };

export const entryArticles: Article[] = [
  {
    slug: 'threshing-day-game-website',
    title: 'Threshing Day Game Website: Official Entry and Login',
    description: 'Looking for the Threshing Day Game website? Open official Dragonkind, choose candidate or returning-rider entry, and find the publisher’s separate quiz.',
    eyebrow: 'FIND THE RIGHT ENTRANCE',
    readTime: '3 min read',
    checkedDate: '2026-10-09',
    actions: [officialGame, { label: 'Help with an email code', href: '/code-not-received/' }],
    sections: [
      {
        id: 'official-website',
        title: 'Open Dragonkind for the official game',
        paragraphs: [
          'The official Threshing Day Game experience is on dragonkind.com. Use the direct link below if you want to enter the interactive dragon-rider adventure or return to an existing account. This page is an independent signpost; the entry form belongs to Dragonkind.',
          'If your search meant a quiz or the book website, choose the matching destination instead. Similar names lead to different activities, so check the domain before starting.',
        ],
        links: [officialGame],
        table: {
          caption: 'Choose a destination before entering an email',
          columns: ['Your next step', 'Website', 'What to expect'],
          rows: [
            ['Start or return to the official adventure', 'dragonkind.com', 'Candidate and returning-rider entry with an email field'],
            ['Find the publisher’s quiz', 'threshingday.com/quiz.html', 'A Signet Quiz, separate from Dragonkind entry'],
            ['Read about the companion collection', 'threshingday.com', 'Publisher information about the Threshing Day book'],
            ['Try our independent dragon affinity quiz', 'This website: /fan-quiz/', 'Eight original questions and six color affinities'],
          ],
        },
      },
      {
        id: 'new-candidate',
        title: 'First visit: use the candidate entrance',
        paragraphs: [
          'Dragonkind’s entrance presents a candidate welcome and an email entry. Choose the candidate option when you are beginning, then follow the instructions shown on the official screen. Use an address whose inbox you can open while playing.',
          'Keep that browser tab available when checking your email. Before repeating a request, confirm the address and look in spam. Rebecca Yarros’s FAQ explains that codes are delivered in batches, so a delay alone does not establish that entry failed.',
        ],
        links: [officialGame, { label: 'Check a missing-code checklist', href: '/code-not-received/' }, officialFaq],
      },
      {
        id: 'returning-rider',
        title: 'Returning visit: choose the rider option',
        paragraphs: [
          'Look for the returning-rider option on Dragonkind rather than starting another candidate entry. Keep track of the email you previously used so you can follow the appropriate account instructions. This guide cannot retrieve your account or confirm which address belongs to it.',
          'If the official screen tells you to wait, use that message to plan your return. Our retry timer is an optional local reminder based on a time you enter; it does not sign you in or inspect Dragonkind eligibility.',
        ],
        links: [officialGame, { label: 'Understand retries and cooldowns', href: '/retry-cooldown/' }, { label: 'Set a personal retry timer', href: '/retry-timer/' }],
      },
      {
        id: 'other-destinations',
        title: 'Choose a quiz when that is what you wanted',
        paragraphs: [
          'The publisher’s Threshing Day homepage has a Quiz link leading to its Signet Quiz. That is a useful destination when you want the publisher’s activity rather than the Dragonkind account entrance.',
          'Our fan quiz offers a separate color-affinity result, with no account on this site required. Choose it for a short original activity; choose Dragonkind for the official adventure. Neither this guide nor its quiz grants an official dragon.',
        ],
        links: [publisherQuiz, { label: 'Compare the official quiz and dragon adventure', href: '/official-dragon-quiz/' }, { label: 'Try our original fan quiz', href: '/fan-quiz/' }],
      },
    ],
    faqs: [
      { question: 'What is the official Threshing Day Game website?', answer: 'Open dragonkind.com for the official interactive experience. This guide helps you find it and is independently operated.' },
      { question: 'Do I enter my Dragonkind email on this website?', answer: 'No. Follow the direct official link and use the entry instructions on Dragonkind. Our guide has no account login form.' },
      { question: 'Does threshingday.com also have a quiz?', answer: 'Yes. The publisher’s homepage links to a Signet Quiz at threshingday.com/quiz.html. It is a different destination from Dragonkind.' },
    ],
    sources: [officialGame, officialFaq, publisherBook, publisherQuiz],
    related: ['how-to-play', 'official-dragon-quiz', 'code-not-received'],
  },
  {
    slug: 'official-dragon-quiz',
    title: 'Official Threshing Day Quiz: Signets vs Threshing Day Game',
    description: 'Find the publisher’s official Threshing Day Signet Quiz and compare it with the Dragonkind adventure and our independent eight-question dragon affinity quiz.',
    eyebrow: 'QUIZ OR DRAGON ADVENTURE?',
    readTime: '3 min read',
    checkedDate: '2026-10-09',
    actions: [publisherQuiz, officialGame],
    sections: [
      {
        id: 'publisher-signet-quiz',
        title: 'The publisher has an official Signet Quiz',
        paragraphs: [
          'Looking for the official Threshing Day quiz? The publisher’s website at threshingday.com has a Quiz navigation link. It opens threshingday.com/quiz.html, where the page identifies the activity as SIGNET QUIZ and invites visitors to discover a relic.',
          'Use that direct publisher link for the activity. We checked the destination and its introduction, not every question or ending, so this guide does not promise a particular result or describe an unverified scoring method.',
        ],
        links: [publisherQuiz, publisherBook],
      },
      {
        id: 'choose-experience',
        title: 'Pick the experience that matches your question',
        paragraphs: [
          'A search for a dragon quiz can mean several things. The publisher’s Signet Quiz, the official Dragonkind adventure, and an independent personality quiz have different purposes. Start with the result you want rather than assuming their answers are interchangeable.',
        ],
        table: {
          caption: 'Three destinations for three different activities',
          columns: ['Experience', 'Where to go', 'Your activity'],
          rows: [
            ['Publisher’s Signet Quiz', 'threshingday.com/quiz.html', 'Explore the publisher’s signet-themed quiz'],
            ['Official Threshing Day Game adventure', 'dragonkind.com', 'Enter through the official account screen and make story choices'],
            ['Our original fan quiz', 'This website: /fan-quiz/', 'Answer eight questions for one of six color affinities'],
          ],
        },
        links: [publisherQuiz, officialGame, { label: 'Open our independent fan quiz', href: '/fan-quiz/' }],
      },
      {
        id: 'read-the-result',
        title: 'Keep signet, dragon color, and game progress separate',
        paragraphs: [
          'The publisher’s quiz introduction connects signets to the rider-and-dragon partnership. That does not make a signet the same field as a dragon’s color or tail. When comparing results, first identify exactly what the activity says it has given you.',
          'Treat a quiz outcome as that quiz’s outcome. Do not assume it changes a Dragonkind account, guarantees survival in the official story, or establishes a color-to-signet rule. For an official dragon result, record the information shown inside Dragonkind; use our result guide to organize it.',
        ],
        links: [publisherQuiz, { label: 'Read dragon colors and result labels', href: '/dragon-results/' }, { label: 'Find the official game entrance', href: '/threshing-day-game-website/' }],
      },
      {
        id: 'fan-quiz-option',
        title: 'Want a short dragon affinity activity?',
        paragraphs: [
          'Our independent fan quiz has eight original questions and six color-affinity results. It uses its own consistent personality scoring, requires no account on this website, and can be retaken immediately. It does not provide a publisher Signet Quiz result or assign an official dragon.',
          'You can share the result or download its SVG card. Progress can be restored in the same browser when local storage is available; it does not synchronize across devices. Choose this activity for a quick personal interpretation, then follow the official links above if you want another experience.',
        ],
        links: [{ label: 'Take our original eight-question fan quiz', href: '/fan-quiz/' }, officialGame],
      },
    ],
    faqs: [
      { question: 'Is there an official Threshing Day quiz?', answer: 'Yes. The publisher’s Threshing Day website links to its Signet Quiz. Dragonkind is the separate official interactive adventure.' },
      { question: 'Is your dragon affinity quiz official?', answer: 'No. Our eight-question quiz is an original independent fan activity with six color affinities and its own scoring.' },
      { question: 'Which link should I use to play the official Threshing Day Game?', answer: 'Use dragonkind.com for the official adventure. Use threshingday.com/quiz.html when you specifically want the publisher’s Signet Quiz.' },
    ],
    sources: [publisherQuiz, publisherBook, officialGame],
    related: ['threshing-day-game-website', 'dragon-results', 'dragonkind-vs-threshing-day'],
  },
];
