"use client";

import { useRef, type MouseEvent } from "react";

const STATS = [
  { num: "0", label: "templates used", cardClass: "stat-card stat-a" },
  { num: "100%", label: "original work", cardClass: "stat-card stat-b" },
  { num: "0", label: "boring brand decks", cardClass: "stat-card stat-c" },
];

function StatCard({ num, label, cardClass }: { num: string; label: string; cardClass: string }) {
  const doodleRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const doodle = doodleRef.current;
    if (!doodle) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    doodle.style.transform = `translate(${nx * 12}px, ${ny * 10}px) rotate(${nx * 12}deg)`;
  };

  const handleMouseLeave = () => {
    const doodle = doodleRef.current;
    if (!doodle) return;
    doodle.style.transform = "translate(0, 0) rotate(0deg)";
  };

  return (
    <div className={cardClass} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <span className="stat-num">{num}</span>
      <span className="stat-label">{label}</span>
      <span className="stat-doodle" aria-hidden="true" ref={doodleRef}>
        <svg viewBox="0 0 64 64">
          <path d="M32 4 C40 4 44 12 40 20 C48 16 56 20 56 28 C56 36 48 40 40 36 C44 44 40 52 32 52 C24 52 20 44 24 36 C16 40 8 36 8 28 C8 20 16 16 24 20 C20 12 24 4 32 4Z" fill="#8FB4FF" />
          <ellipse cx="26" cy="27" rx="5" ry="6" fill="#0C2578" />
          <ellipse cx="40" cy="27" rx="5" ry="6" fill="#0C2578" />
          <circle cx="27" cy="29" r="1.8" fill="#F7F2E7" />
          <circle cx="41" cy="29" r="1.8" fill="#F7F2E7" />
          <path d="M25 37 Q32 42 40 37" stroke="#0C2578" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-left" data-reveal="up">
          <p className="about-eyebrow">
            <svg className="eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            built different
          </p>
          <h2 className="about-heading">
            A small crew who thinks{" "}
            <span className="hl-orange">good marketing shouldn&apos;t feel like marketing.</span> We sketch first,
            strategize second, and ship things people actually stop scrolling for.
          </h2>
          <div className="about-cta-row">
            <button className="btn-meet">Meet the team</button>
            <span className="tag-note">
              real humans, promise
              <span className="wave">🤝</span>
            </span>
          </div>
        </div>
        <div className="about-stats" data-reveal="up">
          {STATS.map((s) => (
            <StatCard key={s.cardClass} num={s.num} label={s.label} cardClass={s.cardClass} />
          ))}
        </div>
      </div>
      <div className="fact-grid">
        <div className="fact-card">
          <div className="fact-icon ic-a">
            <svg viewBox="0 0 24 24" fill="none" stroke="#B8790A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v2M18.4 5.6l-1.4 1.4M21 12h-2M7 12H5M6.6 5.6L8 7" />
              <path d="M9 16a3 3 0 1 1 6 0c0 1.5-1 2-1 3.5H10c0-1.5-1-2-1-3.5Z" />
              <path d="M10 21h4" />
            </svg>
          </div>
          <p>Founded over a sketchbook and one very ambitious to-do list.</p>
        </div>
        <div className="fact-card">
          <div className="fact-icon ic-b">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0F8A6C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9h13a2 2 0 0 1 2 2c0 3-2 5-5 5H8c-2.5 0-4-2-4-4.5V9Z" />
              <path d="M19 10h1.5a1.5 1.5 0 0 1 0 3H19" />
              <path d="M7 3.5c0 1-1 1-1 2M11 3.5c0 1-1 1-1 2" />
            </svg>
          </div>
          <p>Coffee-to-idea ratio: high. Ask us anytime.</p>
        </div>
        <div className="fact-card">
          <div className="fact-icon ic-c">
            <svg viewBox="0 0 24 24" fill="none" stroke="#D14A1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="8" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="12" cy="12" r="0.6" fill="#D14A1F" />
            </svg>
          </div>
          <p>We&apos;ve never once shipped the &quot;safe&quot; version of anything.</p>
        </div>
        <div className="fact-card">
          <div className="fact-icon ic-d">
            <svg viewBox="0 0 24 24" fill="none" stroke="#2A4BAE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 12l2.5 2.5L16 9" />
              <rect x="3" y="4" width="18" height="16" rx="4" />
            </svg>
          </div>
          <p>New clients welcome. We promise we&apos;re normal.</p>
        </div>
      </div>
    </section>
  );
}
