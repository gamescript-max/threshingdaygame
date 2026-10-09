import type { Article } from './article';

const authorFaq = { label: 'Rebecca Yarros — Dragonkind FAQs', href: 'https://rebeccayarros.com/faqs' };
const blueCollection = { label: 'Rebecca Yarros shop — Blue Dragon Collection', href: 'https://rebeccayarrosshop.com/collections/the-blue-dragon-collection' };
const xadenChapter = { label: "Rebecca Yarros — Xaden's Threshing Day bonus chapter", href: 'https://rebeccayarros.com/threshing-day-xaden' };
const fourthWing = { label: 'Rebecca Yarros — Fourth Wing, Book 1', href: 'https://rebeccayarros.com/fourthwing' };
const ironFlame = { label: 'Rebecca Yarros — Iron Flame, Book 2', href: 'https://rebeccayarros.com/ironflame' };
const onyxStorm = { label: 'Rebecca Yarros — Onyx Storm, Book 3', href: 'https://rebeccayarros.com/onyxstorm' };
const collection = { label: 'Rebecca Yarros — Threshing Day collection', href: 'https://rebeccayarros.com/threshing-day' };
const publisher = { label: 'Threshing Day — official publisher website', href: 'https://threshingday.com/' };

export const loreArticles: Article[] = [
  {
    slug: 'dragon-tail-types',
    title: 'Dragon Tail Types in the Threshing Day Game',
    description: 'Understand Threshing Day Game dragon tail labels, compare five names, and record your color and tail without mistaking lore for an answer key.',
    eyebrow: 'READ YOUR DRAGON RESULT',
    readTime: '4 min read',
    checkedDate: '2026-10-09',
    sections: [
      {
        id: 'color-and-tail',
        title: 'Read color and tail as separate details',
        paragraphs: [
          'A dragon color describes its appearance; a tail label names another feature. Record both when you compare Threshing Day Game results. A screenshot showing only a color can leave out the part another player wants to discuss.',
          "There is a useful example in the author's free Xaden bonus chapter: a blue clubtail and a blue daggertail appear in the same scene. That is evidence against treating blue as a synonym for one tail type. It is a story example, not a list of every combination in the interactive game.",
        ],
        links: [xadenChapter, { label: 'Compare dragon colors', href: '/dragon-results/' }],
      },
      {
        id: 'tail-vocabulary',
        title: 'Five tail labels to recognize',
        paragraphs: [
          'These five labels appear in the official shop’s Blue Dragon Collection. The memory cues below are our plain-language prompts based on the names; they are not official illustrations, a combat ranking, or specifications for an in-game model.',
          'The table is a vocabulary reference, not a complete inventory of every possible result. If your screen uses a different label, keep its exact wording rather than forcing it into the nearest category.',
        ],
        table: {
          caption: 'Tail names and simple memory cues',
          columns: ['Tail label', 'Memory cue'],
          rows: [
            ['Clubtail', 'Think of a club: a blunt, heavy end.'],
            ['Daggertail', 'Think of a dagger: a pointed weapon.'],
            ['Morningstartail', 'Think of a morning star: a spiked striking weapon.'],
            ['Scorpiontail', 'Think of a scorpion: a stinger-shaped end.'],
            ['Swordtail', 'Think of a sword: a long cutting edge.'],
          ],
        },
      },
      {
        id: 'official-possibilities',
        title: 'Possibility is different from probability',
        paragraphs: [
          "The author's Dragonkind FAQ says players have an opportunity to bond with dragons of all colors and tail types. It does not provide an outcome distribution or a scoring formula in that answer.",
          'A merchandise collection shows that a label is used officially. It cannot establish how often that result appears, which choices produce it, or whether your next attempt will match a friend’s. Keep those questions separate when reading a guide or comparing a community poll.',
        ],
        links: [authorFaq, blueCollection],
      },
      {
        id: 'record-your-tail',
        title: 'Make a result record you can actually compare',
        paragraphs: [
          'Save the color, full tail label, result wording, and date together. Keep a private screenshot if the card includes more detail than you can easily transcribe. When sharing it, crop account details and access codes out of the image.',
          'For a comparison, first check whether both people mean official Dragonkind results. A fan quiz result describes that quiz’s own scoring. Our original quiz generates fictional archetypes and cannot assign a tail to your official account.',
        ],
        bullets: ['Copy the complete label, including its spelling.', 'Mark the source as official Dragonkind or a named fan activity.', 'Leave an unreadable or missing field unknown instead of guessing.'],
      },
      {
        id: 'tail-choice-theories',
        title: 'Use tail guides to understand a result, not guarantee one',
        paragraphs: [
          'A proposed route to a particular tail needs evidence about choices and outcomes. One successful attempt establishes what happened to that player; it does not show that the same sequence always works.',
          'Use our choices guide to organize observations, or the background guide if the vocabulary is unfamiliar. Both can help you interpret what you see without turning a story’s dragon description into an official answer key.',
        ],
        links: [{ label: 'Evaluate a choice theory', href: '/choices-and-outcomes/' }, { label: 'Understand Threshing', href: '/what-is-threshing/' }],
      },
    ],
    faqs: [
      { question: 'Is a dragon’s color the same as its tail type?', answer: 'No. Keep both labels in your record. The official Xaden bonus chapter includes blue dragons described with different tails, so a color alone is not a complete description.' },
      { question: 'Does a tail label tell me how rare my result is?', answer: 'Not by itself. The cited official FAQ does not give rarity percentages, and a shop category cannot establish the frequency of an interactive game result.' },
      { question: 'Can this guide give me a specific official tail?', answer: 'No. It explains names and how to compare results. We have no verified sequence that guarantees a particular tail in Dragonkind.' },
    ],
    sources: [authorFaq, blueCollection, xadenChapter],
    related: ['dragon-results', 'choices-and-outcomes', 'what-is-threshing'],
  },
  {
    slug: 'what-is-threshing',
    title: 'What Is Threshing? A Threshing Day Game Guide',
    description: 'Learn what Threshing means in Fourth Wing, understand the dragon-rider vocabulary, and separate story background from Threshing Day Game rules.',
    eyebrow: 'A STARTING POINT FOR NEW READERS',
    readTime: '4 min read',
    checkedDate: '2026-10-09',
    sections: [
      {
        id: 'threshing-meaning',
        title: 'The day a cadet hopes to become a dragon rider',
        paragraphs: [
          'In the Empyrean setting, Threshing is the dangerous selection event associated with dragons choosing riders. It is the background behind searches for the Threshing Day Game, rather than the name of a farming simulator.',
          "Fourth Wing introduces Basgiath War College and its dragon-rider candidates. The author's free Xaden chapter takes readers into a Threshing event. Those are reading sources for the setting; neither is a walkthrough of the choices currently displayed by Dragonkind.",
        ],
        links: [fourthWing, xadenChapter],
      },
      {
        id: 'small-glossary',
        title: 'A small glossary before you start',
        paragraphs: [
          'These terms help you follow a guide without first memorizing the series. The definitions stay broad so that they do not reveal character outcomes or imply a hidden game rule.',
        ],
        table: {
          caption: 'Background terms for a first visit',
          columns: ['Term', 'Meaning in this guide'],
          rows: [
            ['The Empyrean', 'The fantasy series to which Fourth Wing belongs.'],
            ['Basgiath', 'The war college at the center of Fourth Wing’s opening setting.'],
            ['Cadet', 'A trainee pursuing a place among the riders.'],
            ['Threshing', 'The dragon-bonding selection event in the story setting.'],
            ['Bond', 'The connection between a dragon and its rider.'],
            ['Tail type', 'A descriptive dragon feature, recorded separately from color.'],
          ],
        },
      },
      {
        id: 'background-versus-rules',
        title: 'Story stakes and browser instructions answer different questions',
        paragraphs: [
          'The novels make selection dangerous and important to their characters. An online experience can draw on that setting while giving players its own entry steps, screens, and return instructions. A fictional consequence does not explain how your browser session or email access works.',
          'For practical play, use the current official interface. Our entry guide covers where to start, while the author’s Dragonkind FAQ answers public questions about codes and trying again. The background here cannot tell you which button will lead to a particular dragon.',
        ],
        links: [{ label: 'Find the official game website', href: '/threshing-day-game-website/' }, { label: 'Follow the getting-started guide', href: '/how-to-play/' }, authorFaq],
      },
      {
        id: 'read-without-spoilers',
        title: 'Choose how much background you want',
        paragraphs: [
          'If you want to discover the novels in order, begin with Fourth Wing and avoid character pairing lists, result discussions about named riders, and bonus chapters until you are comfortable with spoilers. This is our reading advice, not a requirement to open the official game.',
          'If your immediate aim is to understand your own result, start with the color and tail guides instead. They let you describe what your screen shows without reading a recap of a character’s selection scene.',
        ],
        links: [{ label: 'Read the book and bonus-content guide', href: '/threshing-day-book/' }, { label: 'Compare dragon tail labels', href: '/dragon-tail-types/' }],
      },
      {
        id: 'choose-next-step',
        title: 'Pick the next page that fits your question',
        paragraphs: [
          'Use a book source when you want the original story, a game guide when you need access help, and an independent fan activity when you want a separate entertainment result. Naming the activity before comparing answers prevents a fan result from being mistaken for an official assignment.',
          'The publisher also offers a Signet Quiz. Its name describes a different topic from a dragon color or tail. Our quiz comparison explains those destinations so you can choose an activity based on what you actually want to find out.',
        ],
        links: [{ label: 'Compare the official quizzes and fan quiz', href: '/official-dragon-quiz/' }],
      },
    ],
    faqs: [
      { question: 'Is Threshing a real-world event?', answer: 'Here it refers to the fictional dragon-rider selection in the Empyrean setting. Dragonkind is an interactive experience connected to that setting, with its own website instructions.' },
      { question: 'Does knowing the book scene reveal every game answer?', answer: 'No. A story scene is not evidence of Dragonkind’s scoring system or a guaranteed route through its choices.' },
      { question: 'Where should I start if I am new to the books?', answer: 'Fourth Wing is listed as Empyrean Book 1 on the author’s website. Read our book guide for the next titles and a cautious approach to bonus-content spoilers.' },
    ],
    sources: [fourthWing, xadenChapter, authorFaq, { label: 'Threshing Day — publisher Signet Quiz', href: 'https://threshingday.com/quiz.html' }],
    related: ['how-to-play', 'dragon-tail-types', 'threshing-day-book', 'official-dragon-quiz'],
  },
  {
    slug: 'threshing-day-book',
    title: 'Threshing Day Game: Book and Reading Order Guide',
    description: 'Find the Threshing Day collection, follow the first three Empyrean books, and choose when to read Xaden’s official bonus chapter without game spoilers.',
    eyebrow: 'READING AND OFFICIAL BONUS CONTENT',
    readTime: '4 min read',
    checkedDate: '2026-10-09',
    sections: [
      {
        id: 'companion-collection',
        title: 'A collection of dragon-bonding stories',
        paragraphs: [
          'Threshing Day is an Empyrean companion collection containing thirteen stories. The publisher describes accounts of riders being chosen, including Xaden’s, and distinguishes the collection from a continuation of the main story after Onyx Storm.',
          'That makes it a reading destination for players curious about the event behind the Threshing Day Game. Opening a book or bonus chapter does not give your Dragonkind account a result, unlock a retry, or supply a verified game answer sequence.',
        ],
        links: [collection, publisher],
      },
      {
        id: 'main-books',
        title: 'Start with the numbered main novels',
        paragraphs: [
          'The author’s book pages identify Fourth Wing, Iron Flame, and Onyx Storm as the first three Empyrean novels. Following those numbers is a straightforward starting order for a new reader.',
          'Our spoiler-conscious recommendation is to read those novels before exploring the companion stories and character-specific bonus material. This is editorial advice about preserving discoveries, not a claim that the author requires that order for every additional text.',
        ],
        table: {
          caption: 'The first three main Empyrean novels',
          columns: ['Order', 'Title', 'Starting point'],
          rows: [
            ['1', 'Fourth Wing', 'Begin with the college and its dragon-rider world.'],
            ['2', 'Iron Flame', 'Continue after finishing Fourth Wing.'],
            ['3', 'Onyx Storm', 'Continue after finishing Iron Flame.'],
          ],
        },
        links: [fourthWing, ironFlame, onyxStorm],
      },
      {
        id: 'xaden-bonus',
        title: 'Use the author’s page for Xaden’s bonus chapter',
        paragraphs: [
          'Rebecca Yarros hosts a Threshing Day chapter from Xaden’s point of view on her own website. You can read that chapter at the source rather than looking for reposted text or relying on a secondhand summary.',
          'The page is a story with character-specific information, so opening it is a spoiler decision. We link to the complete official text without reproducing it here. Reading a free bonus chapter is also different from obtaining the full companion collection; use the book’s official listing for that.',
        ],
        links: [xadenChapter, collection],
      },
      {
        id: 'spoiler-plan',
        title: 'A practical spoiler plan',
        paragraphs: [
          'Before following a recommendation, decide whether you want world background or character outcomes. General vocabulary is useful early; a named dragon-and-rider pairing can reveal a selection outcome. An article headed with a character’s name may contain more than a general explanation of the ritual.',
          'Save interesting links until you have finished the relevant reading. If you are sharing recommendations with a new reader, send a plain title and source link rather than a screenshot containing the end of a scene. That gives them the choice to open it when they are ready.',
        ],
        bullets: ['Read the numbered novels in order when starting the series.', 'Treat character bonus chapters as potentially revealing.', 'Use the background glossary for a short introduction without a plot recap.'],
        links: [{ label: 'Read a short Threshing background guide', href: '/what-is-threshing/' }],
      },
      {
        id: 'reading-or-playing',
        title: 'Choose a reading link or a playing link',
        paragraphs: [
          'Use the author’s book pages and publisher website for reading information. For the official interactive experience, follow our website guide to Dragonkind. For the publisher’s separate Signet Quiz or our original fan quiz, use the quiz comparison page.',
          'Keep this distinction when a search result uses the same words for a collection and a game. The book can add context, but account entry and current interactive rules belong with the service you are using. A reading recommendation should not be presented as an account-access requirement.',
        ],
        links: [{ label: 'Open the official game website guide', href: '/threshing-day-game-website/' }, { label: 'Compare the quiz destinations', href: '/official-dragon-quiz/' }],
      },
    ],
    faqs: [
      { question: 'Is Threshing Day the fourth main Empyrean novel?', answer: 'The publisher describes it as a companion collection, not the continuation after Onyx Storm. Use the author’s current listings for the main novels.' },
      { question: 'Where can I read Xaden’s Threshing Day bonus chapter?', answer: 'The author hosts it at rebeccayarros.com/threshing-day-xaden. It contains character-specific story material, so consider spoilers before opening it.' },
      { question: 'Does this reading order guarantee a dragon in the game?', answer: 'No. It is reading advice. Neither a novel nor this guide can assign an official dragon or guarantee an interactive outcome.' },
    ],
    sources: [collection, publisher, fourthWing, ironFlame, onyxStorm, xadenChapter],
    related: ['what-is-threshing', 'threshing-day-game-website', 'official-dragon-quiz', 'dragonkind-vs-threshing-day'],
  },
];
