export type Article = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  readTime: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    links?: { label: string; href: string }[];
    visual?: "dragon-colors";
  }[];
  faqs?: { question: string; answer: string }[];
  sources: { label: string; href: string }[];
  related: string[];
  noindex?: boolean;
};


const officialGame = { label: "Dragonkind — official experience", href: "https://dragonkind.com/" };
const officialFaq = { label: "Rebecca Yarros — Dragonkind FAQs", href: "https://rebeccayarros.com/faqs" };
const officialBook = { label: "Threshing Day — publisher website", href: "https://threshingday.com/" };
const officialChapter = { label: "Rebecca Yarros — Xaden's Threshing Day bonus content", href: "https://rebeccayarros.com/threshing-day-xaden" };

export const homepageFaqs = [
  {
    question: "Where can I play the official Threshing Day game?",
    answer: "Open dragonkind.com for the official Dragonkind experience. This website is an independent guide with a separate, original fan quiz.",
  },
  {
    question: "Why has my Dragonkind code not arrived?",
    answer: "Rebecca Yarros's FAQ says codes are sent in batches. Check spam and confirm the email address you entered before requesting another code.",
  },
  {
    question: "Can I try again after dying during Threshing?",
    answer: "Yes. The official FAQ says you can return after a few hours and keep trying. Follow the current message shown by Dragonkind.",
  },
  {
    question: "Can a guide guarantee a specific dragon?",
    answer: "We have no verified method that guarantees a color or tail type. Our guide separates confirmed information from assumptions about choices.",
  },
  {
    question: "Is the fan quiz connected to my Dragonkind account?",
    answer: "No. Our fan quiz runs in your browser, uses its own original scoring, and does not send answers to Dragonkind or change an official result.",
  },
  {
    question: "Is Threshing Day a game or a book?",
    answer: "The phrase is used for the dragon-bonding event, the Threshing Day companion collection, and searches for Dragonkind. Our comparison guide helps you find the right destination.",
  },
];

export const articles: Article[] = [
  {
    slug: "how-to-play",
    title: "How to Play the Threshing Day Game",
    description: "Find the official Dragonkind experience, understand the email entry step, and prepare for your first Threshing attempt.",
    eyebrow: "START HERE",
    readTime: "5 min read",
    sections: [
      {
        id: "official-entry",
        title: "Start at the official Dragonkind website",
        paragraphs: [
          "If you are looking for the interactive dragon-bonding experience associated with Rebecca Yarros, start at dragonkind.com. Its entry page presents the Rider's Quadrant and distinguishes new candidates from returning riders. Keep that address in a bookmark so you can return to the same service after leaving the page.",
          "This guide does not host the official game. The quiz on this website is an original fan activity with a separate result. You can enjoy it while you wait, but completing it does not register you with Dragonkind, unlock an attempt, or add a dragon to an official account.",
        ],
        links: [officialGame, { label: "Try our original fan quiz", href: "/fan-quiz/" }],
      },
      {
        id: "email-entry",
        title: "Use an email address you can access",
        paragraphs: [
          "The official entry screen includes an email field. Use an inbox you can open on the device you are playing with, and check the spelling before submitting. If you have already entered before, look for the returning-rider option rather than assuming you need to begin as a new candidate.",
          "Keep account codes private. Enter them only on the official site, and do not post screenshots that expose your inbox or email address. A fan guide never needs your Dragonkind verification code to explain a problem. If the message does not arrive immediately, work through our email checklist before repeatedly submitting the form.",
        ],
        bullets: [
          "Open the official domain directly and check the address bar.",
          "Choose the entry option that matches your account status.",
          "Confirm the email spelling and check that inbox, including spam.",
          "Follow the current on-screen instructions; screens may change.",
        ],
        links: [{ label: "Troubleshoot a missing code", href: "/code-not-received/" }],
      },
      {
        id: "first-attempt",
        title: "Read the choices before you commit",
        paragraphs: [
          "For your first attempt, approach the experience as a story. Read the full prompt, consider the available choices, and avoid clicking through simply to reproduce another person's outcome. We do not have a verified answer key, a documented scoring formula, or access to the official game's internal logic.",
          "If you want to compare attempts later, make a private note of the choices you remember and the outcome the game actually shows. Record the date as well: a guide written for an earlier version may not describe what you see today. A result from one attempt is a useful observation, but it is not proof that one answer always causes that result.",
        ],
      },
      {
        id: "after-attempt",
        title: "Know what to do after an attempt",
        paragraphs: [
          "A successful result and an unsuccessful attempt call for different next steps. Save the information the official experience gives you if you want to remember it, but crop personal details before sharing. If you encounter a retry message, follow that message instead of treating a fan-made countdown as permission to play.",
          "Our guides cover the next questions separately: how to interpret a dragon result, how to organize observations about choices, and how to track a waiting period. These pages provide context and practical tools; account access and eligibility remain controlled by the official website.",
        ],
        links: [
          { label: "Understand your dragon result", href: "/dragon-results/" },
          { label: "Read the retry guide", href: "/retry-cooldown/" },
        ],
      },
    ],
    faqs: [
      { question: "Do I need to install an app from this website?", answer: "No. We link to the official browser experience and do not provide an installer, APK, or account login." },
      { question: "Can this site play Dragonkind for me?", answer: "No. Play on the official domain. Our content and original fan tools work independently." },
    ],
    sources: [officialGame, officialFaq],
    related: ["code-not-received", "retry-cooldown", "dragonkind-vs-threshing-day"],
  },
  {
    slug: "code-not-received",
    title: "Dragonkind Code Not Received?",
    description: "A practical checklist for a missing Dragonkind email code, with the official explanation and careful next steps.",
    eyebrow: "EMAIL HELP",
    readTime: "4 min read",
    sections: [
      {
        id: "batch-delivery",
        title: "A delay does not always mean the request failed",
        paragraphs: [
          "The author's Dragonkind FAQ confirms that codes are sent in batches and recommends checking spam. A message can therefore arrive later than the moment you submit the entry form. The FAQ does not provide a guaranteed delivery time, so we cannot promise that a code will arrive within a particular number of minutes.",
          "Begin with the inbox rather than repeatedly changing accounts. Keep the official entry page open if practical, note the address you submitted, and look for the latest message associated with that request. If several messages arrive, follow the instructions shown by the official website about which code to use.",
        ],
      },
      {
        id: "inbox-checklist",
        title: "Check the address and every mailbox folder",
        paragraphs: [
          "A typo, a different inbox, or an automatic filter can make a delivered email appear missing. Compare the submitted address with the one you are checking. Work through your folders systematically, particularly if your email provider separates messages into categories or your organization quarantines unfamiliar senders.",
        ],
        bullets: [
          "Check spam, junk, promotions, and other filtered folders.",
          "Search the mailbox for Dragonkind, then inspect the results and dates.",
          "Confirm that you submitted the intended email address without a typo.",
          "Check storage limits and any mailbox rules that move or delete incoming mail.",
          "For a work or school address, check whether a quarantine system blocks the message.",
        ],
      },
      {
        id: "request-carefully",
        title: "Use the official resend option if one is available",
        paragraphs: [
          "If the page offers a resend control, follow its current instructions and any displayed wait. Avoid a rapid series of requests: multiple emails can make it harder to match a code with the current screen. This is an organizational suggestion, not a claim about an unpublished rate limit or expiry rule.",
          "Once a code arrives, type it carefully on dragonkind.com. If it is rejected, check for spaces introduced by copying, confirm you are using the intended email address, and read the error before requesting another message. Do not assume a code's lifespan; the official interface is the source for that information.",
        ],
      },
      {
        id: "still-missing",
        title: "If the code is still missing",
        paragraphs: [
          "Review the author's FAQ and the official website for current notices or support directions. Useful details to keep privately include the request time, the exact error, and the browser you used. Never publish a verification code or your complete inbox screenshot in a community thread.",
          "We cannot inspect the delivery queue, retrieve a code, or verify an account. If you want something to do while waiting, our original quiz does not require email, but its result is separate from Dragonkind.",
        ],
        links: [officialFaq, officialGame, { label: "Play the independent fan quiz", href: "/fan-quiz/" }],
      },
    ],
    faqs: [
      { question: "Can this website send me a Dragonkind code?", answer: "No. Codes and account access are managed by the official Dragonkind service." },
      { question: "How long should I wait for the email?", answer: "The cited FAQ does not specify a maximum delivery time. Follow any timing instructions on the official entry screen." },
    ],
    sources: [officialFaq, officialGame],
    related: ["how-to-play", "faq", "privacy"],
  },
  {
    slug: "retry-cooldown",
    title: "Dragonkind Retry and Cooldown Guide",
    description: "Understand what is confirmed about trying again after Threshing and use a personal countdown without guessing the official timer.",
    eyebrow: "TRY AGAIN",
    readTime: "5 min read",
    sections: [
      {
        id: "confirmed-rules",
        title: "What the official FAQ confirms",
        paragraphs: [
          "Rebecca Yarros's FAQ says an unsuccessful Threshing attempt can be followed by another attempt after a few hours. It also says there is no limit to the number of times you can keep trying. It does not publish an exact universal cooldown in minutes.",
          "Use the message shown in your own official session as the practical guide for when to return. If it gives a time, note it. If it gives only a general waiting instruction, do not turn that into a precise rule based on someone else's account or an unofficial article.",
        ],
      },
      {
        id: "track-wait",
        title: "Track your own waiting period",
        paragraphs: [
          "A personal countdown is useful when you want a reminder to check again. Our retry timer lets you choose a duration based on the information you have. It does not read your account, query the Dragonkind server, or discover the moment an official attempt becomes available.",
          "When you set a countdown, leave a note about where the duration came from. A duration shown by your current game session has a different meaning from a rough estimate you choose yourself. Once the countdown finishes, revisit the official page and check its status; a finished fan timer cannot grant eligibility.",
        ],
        bullets: [
          "Record the time of the unsuccessful attempt.",
          "Read and save the current retry message.",
          "Set an optional personal countdown using that information.",
          "Return to Dragonkind when you plan to check again.",
          "Follow the official status if it differs from your estimate.",
        ],
        links: [{ label: "Open the personal retry timer", href: "/retry-timer/" }],
      },
      {
        id: "timer-limitations",
        title: "Understand what a browser timer can do",
        paragraphs: [
          "A browser may pause background activity, especially on a phone with the screen locked. A useful countdown compares the saved finish time with the current time when the page becomes active again. Even so, changing your device clock or clearing stored website data can affect a local timer.",
          "Keep any important return time somewhere you already trust, such as your own calendar. Our tool is a convenience, and its local data stays in the browser you used. Moving to another browser or device does not synchronize the countdown with an account on this site.",
        ],
      },
      {
        id: "still-waiting",
        title: "When the game still says to wait",
        paragraphs: [
          "Read the new message before troubleshooting. A retry restriction, an email-entry problem, and a page that fails to load are different issues. Keep a copy of the displayed text so you do not mistake one for another. For email problems, use the missing-code checklist rather than changing a timer.",
          "We have no verified bypass for a cooldown. Clearing cookies, switching accounts, or changing a clock is not a method we can recommend as a working solution. While waiting, you can read the result guide or use the separate fan quiz, with the understanding that neither affects your official attempt.",
        ],
        links: [{ label: "Missing email code checklist", href: "/code-not-received/" }, { label: "Read about choices and outcomes", href: "/choices-and-outcomes/" }],
      },
    ],
    faqs: [
      { question: "Is the cooldown exactly three hours?", answer: "The official FAQ cited here does not state that exact duration. Use any current timing information displayed in your own session." },
      { question: "Does the retry timer notify me outside this page?", answer: "It is a local browser countdown, not an account service or a promise of a background notification." },
    ],
    sources: [officialFaq, officialGame],
    related: ["choices-and-outcomes", "code-not-received", "dragon-results"],
  },
  {
    slug: "dragon-results",
    title: "How to Read Your Dragonkind Result",
    description: "Explore six dragon color families, record the names and tail types in your Dragonkind result, and assess rarity claims carefully.",
    eyebrow: "DRAGON FIELD GUIDE",
    readTime: "5 min read",
    sections: [
      {
        id: "read-your-result",
        title: "Begin with the result the game actually shows",
        paragraphs: [
          "A dragon result can make you curious about names, colors, tail types, and how it compares with the dragons in the books. Start by recording the exact labels displayed in your own Dragonkind result. Do not fill a missing field with a guess from a fan chart or a similar-looking image.",
          "The official FAQ confirms that all dragon colors and tail types are possibilities. That statement establishes availability, not the odds of any individual outcome. This site has no verified distribution table, rarity ranking, or complete catalog of current official results.",
        ],
      },
      {
        id: "dragon-colors",
        title: "Dragon colors at a glance",
        visual: "dragon-colors",
        paragraphs: [
          "These six color families — red, blue, green, brown, orange, and black — match the collections in the official Dragonkind shop linked from Rebecca Yarros's FAQ. Use the visual as a quick reference while reading the color label shown in your own result.",
          "The illustrations are original to this website. They are not game screenshots and do not represent exact official color values. This display does not claim to be a complete catalog of current game results or establish the probability of any color.",
        ],
        links: [
          { label: "Official Dragonkind color collections", href: "https://rebeccayarrosshop.com/pages/dragonkind" },
          officialFaq,
        ],
      },
      {
        id: "record-fields",
        title: "Keep a useful result record",
        paragraphs: [
          "A small, dated record is more useful than a screenshot with no context. If the page shows a name, color, or tail label, preserve its spelling. If it shows another field you do not recognize, copy the label as well as the value before looking for an explanation. This helps you distinguish what you saw from what someone later inferred.",
          "Only include fields that appear in your session. We cannot promise that every result contains the same layout or that the site will retain the same labels. If you share a card or screenshot, crop any email address, verification code, or other account information first.",
        ],
        bullets: [
          "Exact dragon name, if shown.",
          "Displayed color and tail type, if shown.",
          "Other labels exactly as written on the result.",
          "Date of the attempt and optional private choice notes.",
          "A cropped result image without account information.",
        ],
      },
      {
        id: "lore-and-game",
        title: "Keep book lore and game mechanics separate",
        paragraphs: [
          "The Empyrean stories provide the setting that makes the experience meaningful, but a detail from a novel is not automatically a rule of this interactive site. A dragon's role in a story does not tell us the probability of receiving a comparable result, and a dramatic description is not a documented scoring formula.",
          "For story context, read the author's official bonus content or the relevant books rather than treating a personality quiz as canon. For the mechanics of your current attempt, prefer information in the official experience and the author's Dragonkind FAQ. When these sources do not answer a question, leave that uncertainty visible.",
        ],
        links: [officialChapter, officialFaq],
      },
      {
        id: "rarity-claims",
        title: "Be careful with rare-dragon claims",
        paragraphs: [
          "A handful of shared results can show that an outcome occurred. They cannot establish how rare it is across all players. A public thread also has selection effects: people may be more likely to share an unusual-looking result, while others never post. Without a suitable sample and a stable version, a percentage can be misleading.",
          "Our original fan quiz uses its own invented archetypes and scoring. Its result is a playful interpretation of your answers, not an official dragon, a prediction of Dragonkind, or evidence about rarity. Keep those results separate when talking with other players.",
        ],
        links: [{ label: "How to evaluate choices and outcomes", href: "/choices-and-outcomes/" }, { label: "Try the independent fan quiz", href: "/fan-quiz/" }],
      },
    ],
    faqs: [
      { question: "Does a dragon's color reveal its drop rate?", answer: "No verified drop-rate table is available in our cited sources. A color label alone does not establish rarity." },
      { question: "Is my fan quiz result an official dragon?", answer: "No. It belongs to this site's original activity and does not represent an official Dragonkind assignment." },
    ],
    sources: [
      officialFaq,
      officialGame,
      officialChapter,
      { label: "Official Dragonkind color collections", href: "https://rebeccayarrosshop.com/pages/dragonkind" },
    ],
    related: ["choices-and-outcomes", "wings-and-squads", "sources"],
  },
  {
    slug: "choices-and-outcomes",
    title: "Threshing Day Choices and Outcomes",
    description: "A careful approach to Dragonkind answers: record your choices, assess player claims, and avoid unsupported guarantees.",
    eyebrow: "CHOICE NOTES",
    readTime: "5 min read",
    sections: [
      {
        id: "no-answer-key",
        title: "There is no verified answer key here",
        paragraphs: [
          "Players often search for Threshing Day game answers after an unsuccessful attempt or when they hope for a particular dragon. We cannot provide a tested sequence that guarantees survival, a specific color, or a specific tail. We have not inspected the official game's code or conducted a controlled study of its outcomes.",
          "That limit matters because a confident-looking list can turn one person's experience into a universal promise. A posted route may omit a question, come from an earlier version, or leave out a failed attempt. Treat it as a report to evaluate rather than a certainty to repeat.",
        ],
      },
      {
        id: "record-attempt",
        title: "Make your own observations easier to compare",
        paragraphs: [
          "If you enjoy investigating choices, keep a private attempt log. Write down the date, the prompts you can accurately remember, the options you selected, and the outcome shown. Copy wording only for your personal notes; do not needlessly republish the full official experience to explain one observation.",
          "Separate what happened from your explanation of why it happened. For example, recording that a particular route ended unsuccessfully is an observation. Saying that one option always causes failure is a stronger claim that needs more evidence. Keeping those statements separate makes discussion clearer and helps you notice when information is missing.",
        ],
        bullets: [
          "Record the date and any visible version information.",
          "Note each choice accurately, including its position in the attempt.",
          "Save the outcome without adding a guessed cause.",
          "Mark anything you cannot remember as unknown.",
          "Keep codes, email addresses, and account details out of shared notes.",
        ],
      },
      {
        id: "evaluate-reports",
        title: "Ask what a player report can establish",
        paragraphs: [
          "A useful report includes an outcome and enough context to understand it. Look for a date, the complete relevant choice sequence, and a clear distinction between a screenshot and a recollection. If someone claims a guaranteed dragon, ask whether they have evidence across repeated attempts and whether other explanations have been considered.",
          "Even matching outcomes from several people do not reveal the underlying mechanism by themselves. We do not know from the cited public sources whether every choice is deterministic, whether there are hidden variables, or whether randomness is involved. Avoid replacing those unknowns with a convenient scoring story.",
        ],
      },
      {
        id: "play-next",
        title: "Choose how you want to experience the next attempt",
        paragraphs: [
          "You can play as a reader, making the choice that feels right for your candidate, or as an observer, keeping notes about what changes between attempts. Either approach can be enjoyable. The important distinction is between your own way of playing and a claim that a route has been officially confirmed.",
          "If your attempt ends with a waiting message, use the retry guide and follow the official status before returning. Our fan quiz offers a separate way to explore a dragon archetype: its scoring is original to this site and should never be used as an answer key for Dragonkind.",
        ],
        links: [{ label: "Read the retry and cooldown guide", href: "/retry-cooldown/" }, { label: "Explore the original fan quiz", href: "/fan-quiz/" }],
      },
    ],
    faqs: [
      { question: "Which answers guarantee a black dragon?", answer: "We have no verified answer sequence that guarantees a black dragon or any other specific result." },
      { question: "Is Dragonkind random or based entirely on choices?", answer: "Our cited public sources do not document the full outcome algorithm, so we cannot resolve that question." },
    ],
    sources: [officialGame, officialFaq],
    related: ["dragon-results", "retry-cooldown", "sources"],
  },
  {
    slug: "dragonkind-vs-threshing-day",
    title: "Dragonkind vs. Threshing Day: Where to Go",
    description: "Find the official game, the Threshing Day book website, author bonus content, and independent fan activities without mixing them up.",
    eyebrow: "FIND YOUR DESTINATION",
    readTime: "4 min read",
    sections: [
      {
        id: "official-game",
        title: "Dragonkind is the official interactive destination",
        paragraphs: [
          "Dragonkind.com is the destination to open when you want the official interactive experience. Its entry page welcomes candidates to the Rider's Quadrant and includes an email entry step. The author's website also has a dedicated Dragonkind FAQ, which provides a direct place to check a few common account and retry questions.",
          "Use this destination for an official attempt or for returning to your account. A similarly named fan website cannot provide your official verification code, inspect your account, or change the result you receive there.",
        ],
        links: [officialGame, officialFaq],
      },
      {
        id: "book-website",
        title: "Threshingday.com is the publisher's book website",
        paragraphs: [
          "Threshingday.com introduces Threshing Day as a companion collection in the Empyrean setting. Its book description focuses on dragon-bonding stories, including Xaden's, and distinguishes the collection from a continuation after Onyx Storm. It provides book-related navigation and publisher material.",
          "Visit it when your question is about the collection, publisher announcements, or book events. You may encounter a quiz in its navigation, but that does not make every Threshing Day quiz the same activity. Check the domain and the description of each experience before assuming an account or result carries across.",
        ],
        links: [officialBook],
      },
      {
        id: "author-content",
        title: "The author's website has official reading material",
        paragraphs: [
          "Rebecca Yarros's website has an official Xaden's Threshing Day bonus-content page. It is a reading destination rather than the Dragonkind entry screen. If you want to read that material, follow the author's link rather than searching for a repost or expecting a game login to unlock it here.",
          "The reading material can provide story context, but it is not a documented walkthrough of an interactive attempt. Keep book events, the game's current interface, and fan interpretations distinct when comparing information across websites.",
        ],
        links: [officialChapter],
      },
      {
        id: "this-website",
        title: "This website offers independent guides and fan tools",
        paragraphs: [
          "Threshing Day Game is an independent guide. Our articles link to primary sources and state what those sources do not confirm. Our original fan quiz and personal retry timer run separately in your browser and have no connection to your Dragonkind account.",
          "Use our guides when you want an organized explanation, an email checklist, or help evaluating a player claim. Use the official service for account access and play. A clear destination is especially useful when several search results use the same dragon-bonding vocabulary.",
        ],
        bullets: [
          "Play an official attempt: dragonkind.com.",
          "Find publisher information about the collection: threshingday.com.",
          "Read official bonus content: rebeccayarros.com.",
          "Use this site's original activity: /fan-quiz/.",
        ],
      },
    ],
    sources: [officialGame, officialFaq, officialBook, officialChapter],
    related: ["how-to-play", "about", "sources"],
  },
  {
    slug: "wings-and-squads",
    title: "Dragonkind Wings, Sections, and Squads",
    description: "A practical guide to recording group labels and finding fellow players while keeping account details private.",
    eyebrow: "PLAYER NOTES",
    readTime: "4 min read",
    sections: [
      {
        id: "record-labels",
        title: "Copy your group labels before comparing them",
        paragraphs: [
          "If your Dragonkind page presents a wing, section, or squad, copy the full label exactly as it appears. Do not assume a matching number alone means two players have the same assignment. Keeping each label together gives you a clearer way to compare what the official interface actually displays.",
          "This guide is about organizing that information. Our cited public sources do not explain the full assignment mechanism, establish the relative size of groups, or confirm that assignments affect a dragon outcome. We therefore do not rank groups or promise a way to select one.",
        ],
      },
      {
        id: "group-notes",
        title: "Use a simple private record",
        paragraphs: [
          "Write the labels in a note with the date you viewed them. If you later see something different, keep both observations and their dates rather than silently replacing the first. That makes it easier to describe an interface change or an account question without inventing a cause.",
          "If a field is absent, leave it blank. An explanation from a novel or another player's screenshot should not be inserted into your own result as though the game displayed it. Similar vocabulary can appear in story discussion and in the interactive experience with different levels of detail.",
        ],
        bullets: [
          "Wing: write the complete displayed label.",
          "Section: keep its label alongside the wing.",
          "Squad: record the full value if it is shown.",
          "Date: note when you saw the assignment.",
          "Source: distinguish your session from another player's report.",
        ],
      },
      {
        id: "find-players",
        title: "Share only what you mean to make public",
        paragraphs: [
          "When you look for players with a similar assignment, share the group labels you are comfortable making public. Crop screenshots tightly. Email addresses, access codes, and account links are not needed to compare a squad, and a public post can be copied beyond the place where you first shared it.",
          "Check a community's rules before posting a matching thread or adding your details to a spreadsheet. A community roster is organized by its participants; it should not be mistaken for an official directory or proof of how many players belong to a particular group.",
        ],
      },
      {
        id: "assignment-questions",
        title: "Treat assignment theories as questions",
        paragraphs: [
          "Seeing the same label as a friend can be fun, but it does not demonstrate that a choice caused the assignment. A useful theory needs dated observations, complete context, and a clear account of what has not been tested. We do not have that evidence for a group-selection method.",
          "For account changes or missing information, follow directions on the official website. This site has no player database, roster submission form, or access to official group records. Our result and choice guides can help you keep your observations readable while you explore the experience.",
        ],
        links: [officialGame, { label: "Read the dragon result guide", href: "/dragon-results/" }, { label: "Evaluate a choice theory", href: "/choices-and-outcomes/" }],
      },
    ],
    sources: [officialGame, officialFaq],
    related: ["dragon-results", "choices-and-outcomes", "privacy"],
  },
  {
    slug: "faq",
    title: "Threshing Day Game Questions",
    description: "Quick answers about the official Dragonkind game, missing codes, retries, fan quiz results, and this independent guide.",
    eyebrow: "COMMON QUESTIONS",
    readTime: "3 min read",
    sections: [
      {
        id: "choose-question",
        title: "Find the answer that matches your next step",
        paragraphs: [
          "Start with the official domain if you want to play. Use our dedicated guides when you need a longer checklist or help interpreting information. The answers below keep official account access separate from this site's original fan activities.",
          "We check primary sources for public facts but do not operate Dragonkind, receive its email codes, or control its availability. When an answer depends on your account, the current official screen has information that a general guide cannot see.",
        ],
        links: [officialGame, officialFaq],
      },
      {
        id: "tool-questions",
        title: "Our quiz and timer are separate fan tools",
        paragraphs: [
          "The quiz is an original activity that calculates a fictional archetype from your answers. It does not recreate the official story or promise a matching official dragon. The timer stores a return time you choose; it does not verify when your official cooldown ends.",
          "Both tools work in your browser. Where local storage is available, they can retain progress or a timer on that browser. They do not submit your answers or countdown to a server run by this site. You can reset the tool or remove its stored data through your browser settings.",
        ],
        links: [{ label: "Open the fan quiz", href: "/fan-quiz/" }, { label: "Open the retry timer", href: "/retry-timer/" }, { label: "Read the privacy notice", href: "/privacy/" }],
      },
    ],
    faqs: [
      ...homepageFaqs,
      { question: "Can I get an official dragon without opening Dragonkind?", answer: "This website cannot assign an official dragon. Use the official experience and follow its entry instructions." },
      { question: "Do you have a complete list of verified game answers?", answer: "No. We provide a method for evaluating observations, not a guaranteed route or a hidden scoring formula." },
      { question: "Can you see my email, account, or current cooldown?", answer: "No. This guide has no Dragonkind account connection and does not ask for your email or verification code." },
      { question: "Does the countdown continue across devices?", answer: "No. It is stored locally in the browser you used when storage is available, without an account synchronization service." },
      { question: "Where can I read Xaden's official Threshing Day bonus content?", answer: "Use the author's Threshing Day — Xaden's POV page, linked in our source directory." },
    ],
    sources: [officialFaq, officialGame, officialChapter],
    related: ["how-to-play", "code-not-received", "retry-cooldown"],
  },
  {
    slug: "sources",
    title: "Sources and Editorial Standards",
    description: "The primary sources behind our Dragonkind guides, what we verify, and how we distinguish facts from fan interpretations.",
    eyebrow: "SHOW THE EVIDENCE",
    readTime: "3 min read",
    sections: [
      {
        id: "primary-sources",
        title: "Start with the original source",
        paragraphs: [
          "Our guides use the official Dragonkind website, the author's Dragonkind FAQ, the publisher's Threshing Day website, and the author's bonus-content page. Links appear with the relevant article so you can check the source in context instead of relying on a claim without a destination.",
          "The date on a guide indicates when its cited public information was checked for this version of the website. It is not a guarantee that an external page or account interface has remained the same since then. If a current official instruction differs, follow that instruction.",
        ],
        links: [officialGame, officialFaq, officialBook, officialChapter],
      },
      {
        id: "evidence-boundaries",
        title: "Match the strength of a claim to its evidence",
        paragraphs: [
          "An official statement can confirm a public rule. A current screenshot can establish what one session displayed. A player recollection is a report, and a proposed explanation is a theory. These forms of information should not be presented as interchangeable.",
          "We do not claim access to a hidden answer key, outcome probabilities, account records, or the official game's source code. We also do not describe original fan quiz scoring as an official personality system. When a question remains unresolved, the article says so.",
        ],
      },
      {
        id: "original-work",
        title: "Write original guidance and link to official material",
        paragraphs: [
          "Our troubleshooting checklists and observation methods are original editorial guidance. They help readers organize a problem without implying that the game's operators endorsed every suggested step. We link to official reading material rather than reproducing the author's story or copying the full interactive experience.",
          "The fan quiz and countdown are independent tools with clearly stated limits. We do not publish manufactured player statistics, invented testimonials, or claims that we tested an official route when no such testing is documented.",
        ],
      },
      {
        id: "changes",
        title: "A checked guide can still have unanswered questions",
        paragraphs: [
          "Important open questions include exact universal retry timing, dragon-result distributions, and the complete relationship between choices and outcomes. Absence of a public explanation is not evidence for a particular answer. Until suitable evidence is available, we avoid filling those gaps with confident numbers.",
          "For the quickest route to current official guidance, use the links above. For an explanation of who operates this guide and what it can help with, read the about page.",
        ],
        links: [{ label: "About this independent guide", href: "/about/" }],
      },
    ],
    sources: [officialGame, officialFaq, officialBook, officialChapter],
    related: ["about", "choices-and-outcomes", "dragonkind-vs-threshing-day"],
  },
  {
    slug: "about",
    title: "About Threshing Day Game",
    description: "An independent English-language guide to Dragonkind, with source-linked articles and original fan tools.",
    eyebrow: "INDEPENDENT FAN GUIDE",
    readTime: "2 min read",
    sections: [
      {
        id: "purpose",
        title: "A clearer path through the dragon-bonding questions",
        paragraphs: [
          "Threshing Day Game helps readers find the official Dragonkind experience and understand the questions that arise around entry, email codes, retries, and results. It is an independent fan guide, not a service operated or endorsed by Rebecca Yarros, Yarros Ink, Entangled Publishing, or the creators of Dragonkind.",
          "We focus on useful explanations and direct source links. The guides avoid guaranteed answer sequences and unsupported rarity percentages because the cited public information does not establish those claims.",
        ],
      },
      {
        id: "tools",
        title: "Original tools with straightforward limits",
        paragraphs: [
          "Our fan quiz is a separate activity with original questions and fictional result archetypes. It does not reproduce the official game or connect to an official account. Our timer is a personal countdown based on a duration you choose, not a live view of Dragonkind eligibility.",
          "You do not need an account on this site to read a guide or use a tool. There is no player directory, newsletter registration, or support inbox published here. We do not invent a team biography, personal play history, or testimonials to make a guide appear more authoritative.",
        ],
        links: [{ label: "Play the original fan quiz", href: "/fan-quiz/" }, { label: "Set a personal countdown", href: "/retry-timer/" }],
      },
      {
        id: "official-support",
        title: "Official account questions belong with the official service",
        paragraphs: [
          "For a login, code, or account-specific problem, follow the instructions on dragonkind.com and consult the author's FAQ. We cannot retrieve a code, reset an official account, or investigate another website's delivery system.",
          "For book information and official reading material, use the publisher and author links in the source directory. Names associated with the Empyrean, Threshing Day, and Dragonkind are used here to identify the topics being discussed; their respective rights remain with their owners.",
        ],
        links: [officialGame, officialFaq, { label: "Read our sources and editorial standards", href: "/sources/" }],
      },
    ],
    sources: [officialGame, officialFaq, officialBook],
    related: ["sources", "dragonkind-vs-threshing-day", "privacy"],
  },
  {
    slug: "privacy",
    title: "Privacy Notice",
    description: "How this guide uses Google Analytics for basic visit statistics while keeping quiz answers, results, and countdown content in your browser.",
    eyebrow: "SITE INFORMATION",
    readTime: "3 min read",
    noindex: true,
    sections: [
      {
        id: "site-data",
        title: "This site does not ask you to create an account",
        paragraphs: [
          "This version of Threshing Day Game is a static guide with browser-based fan tools. It does not include an account system, email signup, player submission form, or advertising scripts. It does not ask for a Dragonkind code or connect to your official account. Google Analytics is used for basic website visit statistics.",
          "The website has no application backend that receives quiz answers or countdown entries. Quiz answers, generated results, and timer content are not uploaded to a player database or sent as custom Google Analytics events.",
        ],
      },
      {
        id: "local-storage",
        title: "Quiz and countdown data can stay in your browser",
        paragraphs: [
          "The fan quiz and retry timer use localStorage when the browser permits it. This allows quiz state and a chosen countdown to remain on the same browser after a refresh. Quiz results are calculated in your browser. These tool data stay on your device and are not sent to Dragonkind, included in custom analytics events, or synchronized across devices.",
          "If storage is blocked or unavailable, the tools can operate without persistent saving. Use each tool's reset control to clear its current state, or remove this site's saved data in your browser settings. On a shared device, another person using the same browser profile may be able to see saved progress or a countdown.",
        ],
      },
      {
        id: "analytics",
        title: "Google Analytics measures basic site visits",
        paragraphs: [
          "This site uses Google Analytics 4 with measurement ID G-8RXPBQ7HEW to understand basic traffic and how visitors use its pages. Google may process usage information such as the pages visited, device and browser information, and cookie or similar identifiers. Analytics cookies are separate from the localStorage used by our fan tools.",
          "Our implementation does not send quiz answers, generated quiz results, or timer content as custom Analytics events. For details about Google's processing and available privacy controls, read Google's explanation of information from partner websites and its Privacy Policy.",
        ],
        links: [
          { label: "How Google uses information from partner sites", href: "https://policies.google.com/technologies/partner-sites" },
          { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
        ],
      },
      {
        id: "delivery",
        title: "Website delivery still involves a hosting provider",
        paragraphs: [
          "Your browser requests site files from the hosting provider. The provider may process ordinary technical information such as an IP address and request details to deliver files and operate its service. This notice does not claim that all hosting access logs are disabled or that every provider has identical retention practices.",
          "The privacy notice should be reviewed if deployment changes the Analytics configuration or adds advertisements, forms, accounts, or other services. The description here applies to the features included in the current site implementation.",
        ],
      },
      {
        id: "external-links",
        title: "Other websites have their own privacy practices",
        paragraphs: [
          "Following a link to Dragonkind, the author's website, the publisher, or another destination opens a separate service. Information you enter there is governed by that service's policies. Our lack of an account system does not imply that the official game has the same data practices.",
          "Before entering an email address or code, check the destination domain and review that site's current policy. Do not send account details to an independent fan guide or put them in a public screenshot.",
        ],
        links: [officialGame],
      },
    ],
    sources: [
      { label: "Google — information from partner sites", href: "https://policies.google.com/technologies/partner-sites" },
      { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
    ],
    related: ["about", "terms", "faq"],
  },
  {
    slug: "terms",
    title: "Site Use and Fan Content Notice",
    description: "The scope of this independent guide and its original fan tools, including source limits and official account boundaries.",
    eyebrow: "SITE INFORMATION",
    readTime: "2 min read",
    noindex: true,
    sections: [
      {
        id: "independent-site",
        title: "An independent guide",
        paragraphs: [
          "Threshing Day Game provides editorial guides and original fan activities. It is not affiliated with or endorsed by Rebecca Yarros, Yarros Ink, Entangled Publishing, or Dragonkind. References to their works and services identify the subject of the guides and do not claim ownership of those names or an official relationship.",
          "The official interactive experience operates on its own website under its own rules. This site does not grant an official dragon, redeem a code, manage an official account, or provide access that bypasses a restriction.",
        ],
      },
      {
        id: "guidance-limits",
        title: "Guides explain public information",
        paragraphs: [
          "Articles are based on cited public information and original practical guidance. External websites can change, and an account-specific message may contain details that a general article cannot see. Use current official instructions for account access and game availability.",
          "No article promises a successful attempt, a particular dragon result, or a universal exact cooldown. Our source notes identify important information that remains unverified. A fan quiz score is a result of our own activity, not official canon or a prediction of an official outcome.",
        ],
      },
      {
        id: "tool-use",
        title: "Use the tools as personal conveniences",
        paragraphs: [
          "The original quiz is for entertainment. The countdown is a local reminder based on the time you choose. Browser settings, cleared storage, or a changed device clock can affect saved state. Keep an important return time elsewhere if you need a dependable record.",
          "Do not enter account credentials, verification codes, or private personal information into fan-tool fields. These tools do not need that information. Read the privacy notice for how local storage is used.",
        ],
        links: [{ label: "Privacy notice", href: "/privacy/" }],
      },
      {
        id: "external-content",
        title: "Follow official links for official content",
        paragraphs: [
          "External links are provided to help readers locate a source. A destination may have its own account requirements, availability, and terms. This guide does not control those services.",
          "Official artwork, stories, trademarks, and game material remain with their respective owners. Our guides link to official reading material rather than hosting the full story or copying the complete game. The original writing and fan-tool content on this site should not be presented as an official release.",
        ],
      },
    ],
    sources: [],
    related: ["about", "privacy", "sources"],
  },
];
