export type QuizTrait = "courage" | "composure" | "curiosity" | "loyalty" | "adaptability" | "independence";

export type QuizOption = {
  id: string;
  label: string;
  scores: Partial<Record<QuizTrait, number>>;
};

export type QuizQuestion = {
  id: string;
  scene: string;
  question: string;
  options: QuizOption[];
};

export type DragonProfile = {
  id: string;
  color: string;
  title: string;
  trait: QuizTrait;
  hex: string;
  meaning: string;
  traits: string[];
  advice: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "bridge",
    scene: "A storm has broken the bridge to a mountain refuge. Three travelers are waiting on your side.",
    question: "What do you do first?",
    options: [
      { id: "bridge-cross", label: "Test a route across, then guide the others.", scores: { courage: 2, loyalty: 1 } },
      { id: "bridge-observe", label: "Watch the river and choose a safer moment.", scores: { composure: 2, curiosity: 1 } },
      { id: "bridge-build", label: "Make a new crossing from what is available.", scores: { adaptability: 2, courage: 1 } },
      { id: "bridge-search", label: "Scout upstream for a route no one has tried.", scores: { independence: 2, curiosity: 1 } },
    ],
  },
  {
    id: "signal",
    scene: "An unfamiliar light pulses from an abandoned watchtower at dusk.",
    question: "How do you respond?",
    options: [
      { id: "signal-study", label: "Look for a pattern in the flashes.", scores: { curiosity: 2, composure: 1 } },
      { id: "signal-check", label: "Check that everyone nearby is safe.", scores: { loyalty: 2, composure: 1 } },
      { id: "signal-approach", label: "Approach the tower and investigate directly.", scores: { courage: 2, independence: 1 } },
      { id: "signal-answer", label: "Try different signals until something answers.", scores: { adaptability: 2, curiosity: 1 } },
    ],
  },
  {
    id: "expedition",
    scene: "Your expedition reaches a fork. The familiar path is slow; the unknown path could save a day.",
    question: "What matters most to your decision?",
    options: [
      { id: "expedition-team", label: "Keeping the group together and hearing every concern.", scores: { loyalty: 2, adaptability: 1 } },
      { id: "expedition-evidence", label: "Comparing the map, weather, and available supplies.", scores: { composure: 2, curiosity: 1 } },
      { id: "expedition-instinct", label: "Trusting my own reading of the terrain.", scores: { independence: 2, composure: 1 } },
      { id: "expedition-discover", label: "Discovering what lies beyond the mapped trail.", scores: { curiosity: 2, courage: 1 } },
    ],
  },
  {
    id: "repair",
    scene: "Minutes before a demonstration, the device you have built stops working.",
    question: "What is your next move?",
    options: [
      { id: "repair-improvise", label: "Change the plan and make a simpler version work.", scores: { adaptability: 2, independence: 1 } },
      { id: "repair-diagnose", label: "Slow down and isolate the fault step by step.", scores: { composure: 2, curiosity: 1 } },
      { id: "repair-own", label: "Explain the failure openly and try again in front of everyone.", scores: { courage: 2, loyalty: 1 } },
      { id: "repair-help", label: "Ask my teammates to combine their different skills.", scores: { loyalty: 2, adaptability: 1 } },
    ],
  },
  {
    id: "promise",
    scene: "A guide offers a shortcut, but asks you to leave your companions behind.",
    question: "How do you answer?",
    options: [
      { id: "promise-stay", label: "I made a promise to them. We continue together.", scores: { loyalty: 2, courage: 1 } },
      { id: "promise-question", label: "I want to understand why that condition is necessary.", scores: { curiosity: 2, composure: 1 } },
      { id: "promise-negotiate", label: "Let us find a different arrangement that works for everyone.", scores: { adaptability: 2, loyalty: 1 } },
      { id: "promise-decline", label: "I will choose my own route without accepting the bargain.", scores: { independence: 2, courage: 1 } },
    ],
  },
  {
    id: "challenge",
    scene: "You are invited to attempt a difficult climb. No one knows whether the summit is reachable today.",
    question: "What gives you confidence?",
    options: [
      { id: "challenge-act", label: "Taking the first hard step even when I feel afraid.", scores: { courage: 2, adaptability: 1 } },
      { id: "challenge-steady", label: "Keeping a steady pace and respecting my limits.", scores: { composure: 2, independence: 1 } },
      { id: "challenge-own", label: "Knowing that I chose this challenge for myself.", scores: { independence: 2, courage: 1 } },
      { id: "challenge-adjust", label: "Being ready to change my technique as the terrain changes.", scores: { adaptability: 2, curiosity: 1 } },
    ],
  },
  {
    id: "discovery",
    scene: "Inside an old observatory, you find a mechanism with six unexplained markings.",
    question: "What draws your attention?",
    options: [
      { id: "discovery-learn", label: "The possibility of learning how all six parts connect.", scores: { curiosity: 2, adaptability: 1 } },
      { id: "discovery-care", label: "Preserving the discovery so others can learn from it.", scores: { loyalty: 2, curiosity: 1 } },
      { id: "discovery-test", label: "Trying a careful experiment and recording what happens.", scores: { composure: 2, curiosity: 1 } },
      { id: "discovery-personal", label: "Finding an interpretation that feels true to my own experience.", scores: { independence: 2, adaptability: 1 } },
    ],
  },
  {
    id: "return",
    scene: "Your journey is over. A friend asks what you most want to carry into the next adventure.",
    question: "What do you tell them?",
    options: [
      { id: "return-bravery", label: "The courage to begin before I have every answer.", scores: { courage: 2, independence: 1 } },
      { id: "return-friends", label: "The people who stood beside me when things were difficult.", scores: { loyalty: 2, composure: 1 } },
      { id: "return-questions", label: "The questions that still make me curious.", scores: { curiosity: 2, independence: 1 } },
      { id: "return-change", label: "The ability to find a new way when the old one closes.", scores: { adaptability: 2, composure: 1 } },
    ],
  },
];

// These are original personality interpretations, not official dragon assignments.
// Array order is the final deterministic tie-breaker, never a rarity ranking.
export const dragonProfiles: DragonProfile[] = [
  { id: "red", color: "Red", title: "The Brave Ember", trait: "courage", hex: "#f17868", meaning: "You meet uncertainty by taking a purposeful first step. Your strength is acting with conviction while making room for the people affected by your choices.", traits: ["Courageous", "Direct", "Action-oriented"], advice: "Let courage open the door, then pause long enough to listen." },
  { id: "blue", color: "Blue", title: "The Quiet Horizon", trait: "composure", hex: "#85b7f1", meaning: "You create space between pressure and reaction. Your strength is noticing what matters, setting a steady pace, and making considered decisions.", traits: ["Composed", "Observant", "Deliberate"], advice: "Trust your preparation, and remember that a good decision can still involve uncertainty." },
  { id: "green", color: "Green", title: "The Curious Canopy", trait: "curiosity", hex: "#a6cf9a", meaning: "You follow questions toward new possibilities. Your strength is connecting details, investigating unfamiliar ideas, and helping others see beyond their first assumptions.", traits: ["Curious", "Inventive", "Open-minded"], advice: "Choose one promising question and give it the attention it deserves." },
  { id: "brown", color: "Brown", title: "The Steadfast Earth", trait: "loyalty", hex: "#d5ad80", meaning: "You measure a journey by the people who can finish it together. Your strength is showing up, keeping promises, and building trust through small, consistent actions.", traits: ["Loyal", "Dependable", "Considerate"], advice: "Care for your own limits with the same attention you give your companions." },
  { id: "orange", color: "Orange", title: "The Changing Spark", trait: "adaptability", hex: "#f7b56d", meaning: "You find possibility when a plan changes. Your strength is experimenting, adjusting your approach, and turning the materials at hand into a practical next step.", traits: ["Adaptable", "Resourceful", "Flexible"], advice: "Keep your direction clear, even when the route keeps changing." },
  { id: "black", color: "Black", title: "The Independent Sky", trait: "independence", hex: "#c5b6e6", meaning: "You look inward before choosing your direction. Your strength is holding your own perspective, making intentional choices, and taking responsibility for the route you choose.", traits: ["Independent", "Self-directed", "Intentional"], advice: "A chosen path can still make room for good advice and trusted company." },
];

export function isValidQuizAnswers(value: unknown): value is Array<string | null> {
  return Array.isArray(value) && value.length === quizQuestions.length && quizQuestions.every((question, index) => value[index] === null || (typeof value[index] === "string" && question.options.some((option) => option.id === value[index])));
}

export function scoreQuizAnswers(answers: Array<string | null>): Record<QuizTrait, number> {
  const scores: Record<QuizTrait, number> = { courage: 0, composure: 0, curiosity: 0, loyalty: 0, adaptability: 0, independence: 0 };
  quizQuestions.forEach((question, index) => {
    const option = question.options.find((candidate) => candidate.id === answers[index]);
    if (!option) return;
    Object.entries(option.scores).forEach(([trait, points]) => { scores[trait as QuizTrait] += points ?? 0; });
  });
  return scores;
}

export function getQuizResult(answers: Array<string | null>): DragonProfile | null {
  if (!isValidQuizAnswers(answers) || answers.some((answer) => answer === null)) return null;
  const scores = scoreQuizAnswers(answers);
  const primaryVotes: Record<QuizTrait, number> = { courage: 0, composure: 0, curiosity: 0, loyalty: 0, adaptability: 0, independence: 0 };
  quizQuestions.forEach((question, index) => {
    const option = question.options.find((candidate) => candidate.id === answers[index]);
    if (option) Object.entries(option.scores).forEach(([trait, points]) => { if (points === 2) primaryVotes[trait as QuizTrait] += 1; });
  });
  return dragonProfiles.reduce((best, candidate) => {
    if (scores[candidate.trait] > scores[best.trait]) return candidate;
    if (scores[candidate.trait] === scores[best.trait] && primaryVotes[candidate.trait] > primaryVotes[best.trait]) return candidate;
    return best;
  });
}
