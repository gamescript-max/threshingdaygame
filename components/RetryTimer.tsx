"use client";

import { useEffect, useState, type FormEvent } from "react";

type TimerState = { status: "idle" | "running" | "paused" | "finished"; endTime: number | null; remainingMs: number };
const STORAGE_KEY = "threshing-day-retry-reminder-v1";
const idleTimer: TimerState = { status: "idle", endTime: null, remainingMs: 0 };
const MAX_DURATION_MS = 720 * 60 * 60 * 1000;

function formatRemaining(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function restoreTimer(value: unknown, now: number): TimerState | null {
  if (!value || typeof value !== "object" || !("version" in value) || value.version !== 1 || !("timer" in value)) return null;
  const timer = value.timer;
  if (!timer || typeof timer !== "object" || !("status" in timer) || !("endTime" in timer) || !("remainingMs" in timer)) return null;
  if (typeof timer.remainingMs !== "number" || !Number.isFinite(timer.remainingMs) || timer.remainingMs < 0 || timer.remainingMs > MAX_DURATION_MS) return null;
  if (timer.status === "running" && typeof timer.endTime === "number" && Number.isFinite(timer.endTime) && timer.endTime > 0 && timer.endTime - now <= MAX_DURATION_MS) {
    return timer.endTime <= now ? { status: "finished", endTime: null, remainingMs: 0 } : { status: "running", endTime: timer.endTime, remainingMs: timer.remainingMs };
  }
  if (timer.status === "paused" && timer.remainingMs > 0) return { status: "paused", endTime: null, remainingMs: timer.remainingMs };
  if (timer.status === "finished") return { status: "finished", endTime: null, remainingMs: 0 };
  if (timer.status === "idle") return idleTimer;
  return null;
}

export default function RetryTimer() {
  const [timer, setTimer] = useState<TimerState>(idleTimer);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [now, setNow] = useState(0);
  const [ready, setReady] = useState(false);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const currentTime = Date.now();
    setNow(currentTime);
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = restoreTimer(JSON.parse(raw), currentTime);
        if (saved) {
          setTimer(saved);
          if (saved.status === "running") setMessage("Your running reminder has been restored.");
          if (saved.status === "paused") setMessage("Your paused reminder has been restored.");
          if (saved.status === "finished") setMessage("Your saved reminder has ended. Check the official game before trying again.");
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
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, timer }));
    } catch {
      setStorageAvailable(false);
    }
  }, [timer, ready, storageAvailable]);

  useEffect(() => {
    if (!ready || timer.status !== "running" || timer.endTime === null) return;
    const endTime = timer.endTime;
    const update = () => {
      const currentTime = Date.now();
      setNow(currentTime);
      if (currentTime >= endTime) {
        setTimer((previous) => previous.status === "running" && previous.endTime === endTime ? { status: "finished", endTime: null, remainingMs: 0 } : previous);
        setMessage("Your reminder has ended. Return to Dragonkind and check whether a retry is available.");
      }
    };
    update();
    const interval = window.setInterval(update, 1000);
    document.addEventListener("visibilitychange", update);
    return () => { window.clearInterval(interval); document.removeEventListener("visibilitychange", update); };
  }, [ready, timer.status, timer.endTime]);

  function startTimer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredHours = hours.trim() === "" ? 0 : Number(hours);
    const enteredMinutes = minutes.trim() === "" ? 0 : Number(minutes);
    if (!Number.isInteger(enteredHours) || !Number.isInteger(enteredMinutes) || enteredHours < 0 || enteredHours > 720 || enteredMinutes < 0 || enteredMinutes > 59) {
      setError("Enter whole hours from 0 to 720 and minutes from 0 to 59.");
      return;
    }
    const duration = (enteredHours * 60 + enteredMinutes) * 60 * 1000;
    if (duration <= 0 || duration > MAX_DURATION_MS) {
      setError("Enter a remaining duration greater than zero and no longer than 720 hours.");
      return;
    }
    const currentTime = Date.now();
    setNow(currentTime);
    setTimer({ status: "running", endTime: currentTime + duration, remainingMs: duration });
    setError("");
    setMessage("Your reminder has started using the time you entered.");
  }

  function pauseTimer() {
    if (timer.status !== "running" || timer.endTime === null) return;
    const remaining = Math.max(0, timer.endTime - Date.now());
    setTimer({ status: remaining > 0 ? "paused" : "finished", endTime: null, remainingMs: remaining });
    setMessage(remaining > 0 ? "Your reminder is paused. The official game cooldown continues independently." : "Your reminder has ended. Check the official game before trying again.");
  }

  function resumeTimer() {
    if (timer.status !== "paused" || timer.remainingMs <= 0) return;
    const currentTime = Date.now();
    setNow(currentTime);
    setTimer({ ...timer, status: "running", endTime: currentTime + timer.remainingMs });
    setMessage("Your reminder has resumed from its paused duration. Check the official screen if its countdown has changed.");
  }

  function resetTimer() {
    setTimer(idleTimer);
    setHours("");
    setMinutes("");
    setError("");
    setMessage("Your reminder has been reset.");
  }

  const remaining = timer.status === "running" && timer.endTime !== null ? Math.max(0, timer.endTime - now) : timer.remainingMs;
  const canStart = timer.status === "idle" || timer.status === "finished";

  return (
    <div className="timer-tool">
      <p className="timer-intro">This local reminder uses your input. Use the duration shown in your current official Dragonkind session.</p>
      <form className="timer-form" onSubmit={startTimer} noValidate>
        <div className="timer-fields">
          <label className="timer-field" htmlFor="timer-hours"><span>Hours</span><input id="timer-hours" type="number" inputMode="numeric" min="0" max="720" step="1" placeholder="0" value={hours} onChange={(event) => { setHours(event.target.value); setError(""); }} disabled={!ready || !canStart} aria-describedby={error ? "timer-input-help timer-error" : "timer-input-help"} aria-invalid={!!error} /></label>
          <label className="timer-field" htmlFor="timer-minutes"><span>Minutes</span><input id="timer-minutes" type="number" inputMode="numeric" min="0" max="59" step="1" placeholder="0" value={minutes} onChange={(event) => { setMinutes(event.target.value); setError(""); }} disabled={!ready || !canStart} aria-describedby={error ? "timer-input-help timer-error" : "timer-input-help"} aria-invalid={!!error} /></label>
        </div>
        <p className="timer-input-help" id="timer-input-help">Use the current remaining duration, not a presumed fixed cooldown.</p>
        {error && <p className="timer-error" id="timer-error" role="alert">{error}</p>}
        {canStart && <button className="button button-primary" type="submit" disabled={!ready}>{timer.status === "finished" ? "Start a new reminder" : "Start reminder"}</button>}
      </form>
      <div className={`timer-display timer-display-${timer.status}`}>
        <p className="eyebrow">{timer.status === "idle" ? "Your local reminder" : timer.status === "running" ? "Time remaining" : timer.status === "paused" ? "Reminder paused" : "Reminder complete"}</p>
        <p className="timer-clock" role="timer" aria-live="off" aria-label={`Time remaining: ${formatRemaining(remaining)}`}>{formatRemaining(remaining)}</p>
        <p className="timer-clock-label">hours : minutes : seconds</p>
        {timer.status === "finished" && <p className="timer-finished">Time to check Dragonkind. The official game decides when you can retry.</p>}
        {timer.status === "paused" && <p className="timer-paused">Pausing this reminder does not pause the official game cooldown.</p>}
        <div className="timer-actions">
          {timer.status === "running" && <button className="button button-secondary" type="button" onClick={pauseTimer}>Pause reminder</button>}
          {timer.status === "paused" && <button className="button button-primary" type="button" onClick={resumeTimer}>Resume reminder</button>}
          {timer.status !== "idle" && <button className="button button-secondary" type="button" onClick={resetTimer}>Reset</button>}
        </div>
      </div>
      <p className="timer-status" role="status" aria-live="polite" aria-atomic="true">{message}</p>
      <p className="timer-save-note">{storageAvailable ? "Saved in this browser. A running reminder keeps counting when you close or reload the page." : "Browser storage is unavailable. This reminder works in this tab, but cannot be restored after closing it."}</p>
      <p className="timer-disclaimer">This tool cannot read your official account, send background notifications, or unlock a retry. Recheck the official screen when your reminder ends.</p>
      <a className="text-link" href="https://dragonkind.com/" target="_blank" rel="noopener noreferrer">Check the official Dragonkind experience ↗</a>
      <noscript><p className="timer-disclaimer">Enable JavaScript to start and save a personal reminder. The official retry rules remain available in our guide.</p></noscript>
    </div>
  );
}
