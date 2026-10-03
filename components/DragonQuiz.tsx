"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { getQuizResult, isValidQuizAnswers, quizQuestions, type DragonProfile } from "../lib/quiz";

const STORAGE_KEY = "threshing-day-fan-quiz-v1";
const emptyAnswers = () => quizQuestions.map(() => null as string | null);

function escapeXml(value: string) {
  return value.replace(/[<>&"']/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" }[character] ?? character));
}

function createResultCard(result: DragonProfile) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#171d21"/><stop offset="1" stop-color="#0b1014"/></linearGradient><radialGradient id="glow"><stop stop-color="${result.hex}" stop-opacity=".2"/><stop offset="1" stop-color="${result.hex}" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="760" rx="32" fill="url(#bg)"/><rect x="30" y="30" width="1140" height="700" rx="20" fill="none" stroke="${result.hex}" stroke-opacity=".45"/><circle cx="965" cy="375" r="265" fill="url(#glow)"/><g fill="none" stroke="${result.hex}" stroke-width="4"><path d="M946 210l-67 124-131-37 95 111 19 157 84-98 84 98 19-157 95-111-131 37z"/><path d="M946 210v257m-67-133 67 60 67-60m-170 74 103 59 103-59"/><circle cx="946" cy="395" r="170" stroke-opacity=".3"/></g><g font-family="Georgia,serif" fill="#f6f1e7"><text x="90" y="140" font-family="Arial,sans-serif" font-size="20" letter-spacing="4" fill="${result.hex}">ORIGINAL FAN QUIZ</text><text x="90" y="254" font-size="62">${escapeXml(result.color)} dragon affinity</text><text x="90" y="333" font-size="43">${escapeXml(result.title)}</text><text x="90" y="408" font-family="Arial,sans-serif" font-size="23" fill="${result.hex}">${escapeXml(result.traits.join(" · "))}</text><text x="90" y="582" font-family="Arial,sans-serif" font-size="23">THRESHING DAY GAME</text><text x="90" y="626" font-family="Arial,sans-serif" font-size="18" fill="#b9b8b2">Unofficial. For fun. Not a Dragonkind result.</text></g></svg>`;
}

export default function DragonQuiz() {
  const [answers, setAnswers] = useState<Array<string | null>>(emptyAnswers);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [ready, setReady] = useState(false);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const focusTarget = useRef<HTMLHeadingElement>(null);
  const shouldFocus = useRef(false);
  const result = completed ? getQuizResult(answers) : null;
  const question = quizQuestions[questionIndex];
  const answeredCount = answers.filter((answer) => answer !== null).length;

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved: unknown = JSON.parse(raw);
        if (saved && typeof saved === "object" && "answers" in saved && isValidQuizAnswers(saved.answers)) {
          const record = saved as { answers: Array<string | null>; questionIndex?: unknown; completed?: unknown; version?: unknown };
          if (record.version === 1) {
            setAnswers(record.answers);
            setQuestionIndex(typeof record.questionIndex === "number" && Number.isInteger(record.questionIndex) && record.questionIndex >= 0 && record.questionIndex < quizQuestions.length ? record.questionIndex : 0);
            setCompleted(record.completed === true && getQuizResult(record.answers) !== null);
            if (record.answers.some((answer) => answer !== null)) setMessage("Your saved quiz has been restored on this device.");
          }
        }
      }
    } catch {
      setStorageAvailable(false);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || !storageAvailable) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, answers, questionIndex, completed }));
    } catch {
      setStorageAvailable(false);
    }
  }, [answers, questionIndex, completed, ready, storageAvailable]);

  useEffect(() => {
    if (shouldFocus.current) {
      focusTarget.current?.focus();
      shouldFocus.current = false;
    }
  }, [questionIndex, completed]);

  function moveQuestion(index: number) {
    shouldFocus.current = true;
    setMessage("");
    setQuestionIndex(index);
  }

  function finishQuiz() {
    if (!getQuizResult(answers)) {
      const missing = answers.findIndex((answer) => answer === null);
      if (missing >= 0) moveQuestion(missing);
      setMessage("Choose an answer for every question to see your result.");
      return;
    }
    shouldFocus.current = true;
    setCompleted(true);
    setMessage("Your original fan quiz result is ready.");
  }

  function restartQuiz() {
    shouldFocus.current = true;
    setAnswers(emptyAnswers());
    setQuestionIndex(0);
    setCompleted(false);
    setMessage("Quiz restarted. Your previous answers have been cleared.");
  }

  async function shareResult() {
    if (!result || busy) return;
    setBusy(true);
    setMessage("");
    const url = `${window.location.origin}${window.location.pathname}`;
    const text = `My original Threshing Day fan quiz affinity is ${result.color}: ${result.title}. Unofficial and just for fun; not a Dragonkind result.`;
    try {
      if (typeof navigator.share === "function") {
        try {
          await navigator.share({ title: "My dragon affinity", text, url });
          setMessage("Your result has been shared.");
          return;
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") {
            setMessage("Sharing cancelled. Your result is still saved here.");
            return;
          }
        }
      }
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setMessage("Your result and quiz link have been copied to the clipboard.");
    } catch {
      setMessage("Sharing is unavailable in this browser. You can download your card or copy the page address manually.");
    } finally {
      setBusy(false);
    }
  }

  function downloadCard() {
    if (!result) return;
    try {
      const objectUrl = URL.createObjectURL(new Blob([createResultCard(result)], { type: "image/svg+xml;charset=utf-8" }));
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = `threshing-day-fan-quiz-${result.id}.svg`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
      setMessage("Your SVG result card is ready to download.");
    } catch {
      setMessage("The card could not be downloaded. Try another browser or share your result instead.");
    }
  }

  return (
    <div className="quiz-tool">
      {result ? (
        <section className={`quiz-result quiz-result-${result.id}`} aria-labelledby="quiz-result-title" style={{ "--quiz-color": result.hex } as CSSProperties}>
          <p className="eyebrow">Your original fan quiz result</p>
          <h2 id="quiz-result-title" ref={focusTarget} tabIndex={-1}>{result.color} dragon affinity</h2>
          <p className="quiz-result-name">{result.title}</p>
          <ul className="quiz-traits" aria-label="Your strongest qualities">{result.traits.map((trait) => <li key={trait}>{trait}</li>)}</ul>
          <p className="quiz-result-meaning">{result.meaning}</p>
          <p className="quiz-result-advice">{result.advice}</p>
          <p className="quiz-result-disclaimer">This is a personality interpretation created for this fan quiz. It does not assign a dragon in Dragonkind or predict an official result.</p>
          <div className="quiz-actions">
            <button className="button button-primary" type="button" onClick={shareResult} disabled={busy}>{busy ? "Sharing…" : "Share result"}</button>
            <button className="button button-secondary" type="button" onClick={downloadCard}>Download SVG card</button>
            <button className="button button-secondary" type="button" onClick={restartQuiz}>Take it again</button>
          </div>
          <a className="text-link" href="/dragon-results/">Understand official dragon result fields →</a>
        </section>
      ) : (
        <section className="quiz-question" aria-labelledby="quiz-question-title">
          <div className="quiz-progress-meta"><span>Question {questionIndex + 1} of {quizQuestions.length}</span><span>{answeredCount} answered</span></div>
          <progress className="quiz-progress" max={quizQuestions.length} value={answeredCount} aria-label="Questions answered" />
          <p className="quiz-scene">{question.scene}</p>
          <h2 id="quiz-question-title" ref={focusTarget} tabIndex={-1}>{question.question}</h2>
          <fieldset className="quiz-options">
            <legend className="quiz-options-legend">Choose the answer closest to you.</legend>
            {question.options.map((option, index) => (
              <label className={`quiz-option${answers[questionIndex] === option.id ? " quiz-option-selected" : ""}`} key={option.id}>
                <input type="radio" name={`quiz-${question.id}`} value={option.id} disabled={!ready} checked={answers[questionIndex] === option.id} onChange={() => { setAnswers((previous) => previous.map((answer, position) => position === questionIndex ? option.id : answer)); setMessage(""); }} />
                <span className="quiz-option-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span>
                <span>{option.label}</span>
              </label>
            ))}
          </fieldset>
          <div className="quiz-navigation">
            <button className="button button-secondary" type="button" onClick={() => moveQuestion(questionIndex - 1)} disabled={questionIndex === 0}>Previous</button>
            {questionIndex < quizQuestions.length - 1 ? <button className="button button-primary" type="button" onClick={() => moveQuestion(questionIndex + 1)} disabled={answers[questionIndex] === null}>Next question →</button> : <button className="button button-primary" type="button" onClick={finishQuiz} disabled={answers[questionIndex] === null}>See my affinity →</button>}
          </div>
          <p className="quiz-save-note">{storageAvailable ? "Your progress is saved in this browser. No account needed." : "Browser storage is unavailable. You can still finish the quiz in this tab."}</p>
        </section>
      )}
      <p className="quiz-status" role="status" aria-live="polite" aria-atomic="true">{message}</p>
      {result && !storageAvailable && <p className="quiz-save-note">Browser storage is unavailable. Download or share your result to keep it.</p>}
      <aside className="quiz-aside">
        <img src="/images/dragon-valley.webp" width="1672" height="941" alt="Original forest-green dragon illustration" />
        <div className="quiz-aside-copy"><span className="eyebrow">AN ORIGINAL FAN STORY</span><h3>Trust your instincts.</h3><p>There is no wrong path here. Choose the answer that feels closest to you.</p><div className="quiz-aside-facts"><span>8 choices</span><span>6 affinities</span><span>No cooldown</span></div>
        <details className="quiz-method">
        <summary>How this quiz chooses a result</summary>
        <p>Each answer adds points to two of six traits: courage, composure, curiosity, loyalty, adaptability, and independence. Your highest total selects its corresponding color. A tie is resolved by the number of two-point choices, then by the fixed order red, blue, green, brown, orange, black. The same answers always give the same result.</p>
        <p>Colors here express our original personality themes. They do not represent official game odds, dragon behavior, or rarity.</p>
        </details></div>
      </aside>
      <noscript><p className="quiz-no-script">Enable JavaScript to answer this quiz, or visit <a href="https://dragonkind.com/">official Dragonkind</a>.</p></noscript>
    </div>
  );
}
