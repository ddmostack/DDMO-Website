import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import Nav from "../Nav";

const HERO_SPARKLES = [
  { top: "6%", left: "16%", size: 6, color: "#FEBD02", delay: "0s", duration: "7.5s", sx: 8, sy: -14 },
  { top: "12%", left: "38%", size: 7, color: "#F7F2E7", delay: "1.2s", duration: "8.5s", sx: -10, sy: -10 },
  { top: "8%", left: "60%", size: 5, color: "#FEBD02", delay: "2.4s", duration: "6.8s", sx: 12, sy: -8 },
  { top: "15%", left: "80%", size: 6, color: "#F7F2E7", delay: "0.6s", duration: "9s", sx: -8, sy: -16 },
  { top: "4%", left: "92%", size: 5, color: "#FEBD02", delay: "3.2s", duration: "7.2s", sx: -14, sy: -6 },
  { top: "26%", left: "6%", size: 5, color: "#F7F2E7", delay: "1.8s", duration: "8s", sx: 10, sy: -12 },
  { top: "30%", left: "48%", size: 6, color: "#FEBD02", delay: "0.9s", duration: "7.8s", sx: -12, sy: -10 },
  { top: "22%", left: "68%", size: 6, color: "#F7F2E7", delay: "2.6s", duration: "6.5s", sx: 8, sy: -14 },
  { top: "40%", left: "24%", size: 5, color: "#FEBD02", delay: "1.4s", duration: "9.4s", sx: -8, sy: -12 },
  { top: "45%", left: "88%", size: 6, color: "#F7F2E7", delay: "3.6s", duration: "7s", sx: 12, sy: -8 },
  { top: "55%", left: "10%", size: 6, color: "#FEBD02", delay: "0.3s", duration: "8.2s", sx: -10, sy: -14 },
  { top: "58%", left: "60%", size: 5, color: "#F7F2E7", delay: "2s", duration: "6.9s", sx: 14, sy: -10 },
  { top: "64%", left: "38%", size: 6, color: "#FEBD02", delay: "1.1s", duration: "8.8s", sx: -8, sy: -16 },
  { top: "68%", left: "76%", size: 5, color: "#F7F2E7", delay: "2.9s", duration: "7.6s", sx: 10, sy: -8 },
  { top: "74%", left: "20%", size: 5, color: "#FEBD02", delay: "0.5s", duration: "9.2s", sx: -12, sy: -12 },
  { top: "3%", left: "28%", size: 5, color: "#F7F2E7", delay: "1.6s", duration: "8.4s", sx: 10, sy: -10 },
  { top: "9%", left: "48%", size: 5, color: "#FEBD02", delay: "2.8s", duration: "7.4s", sx: -9, sy: -13 },
  { top: "18%", left: "9%", size: 6, color: "#F7F2E7", delay: "0.2s", duration: "9.6s", sx: 13, sy: -9 },
  { top: "5%", left: "72%", size: 5, color: "#FEBD02", delay: "3.4s", duration: "6.7s", sx: -11, sy: -15 },
  { top: "20%", left: "94%", size: 5, color: "#F7F2E7", delay: "1s", duration: "8.6s", sx: -13, sy: -7 },
  { top: "34%", left: "36%", size: 6, color: "#FEBD02", delay: "2.2s", duration: "7.1s", sx: 9, sy: -14 },
  { top: "36%", left: "76%", size: 5, color: "#F7F2E7", delay: "0.4s", duration: "9.8s", sx: -8, sy: -11 },
  { top: "48%", left: "4%", size: 5, color: "#FEBD02", delay: "3s", duration: "7.9s", sx: 11, sy: -12 },
  { top: "50%", left: "56%", size: 6, color: "#F7F2E7", delay: "1.5s", duration: "6.6s", sx: -10, sy: -16 },
  { top: "44%", left: "96%", size: 5, color: "#FEBD02", delay: "2.5s", duration: "8.9s", sx: -14, sy: -8 },
  { top: "60%", left: "30%", size: 5, color: "#F7F2E7", delay: "0.8s", duration: "7.3s", sx: 8, sy: -13 },
  { top: "62%", left: "88%", size: 6, color: "#FEBD02", delay: "3.8s", duration: "9.1s", sx: -12, sy: -9 },
  { top: "70%", left: "52%", size: 5, color: "#F7F2E7", delay: "1.3s", duration: "6.4s", sx: 13, sy: -11 },
  { top: "76%", left: "62%", size: 5, color: "#FEBD02", delay: "2.1s", duration: "8.3s", sx: -9, sy: -15 },
  { top: "72%", left: "4%", size: 5, color: "#F7F2E7", delay: "0.1s", duration: "7.7s", sx: 10, sy: -10 },
];

export default function Hero() {
  return (
    <motion.div
      className="hero"
      id="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="hero-sparkles" aria-hidden="true">
        {HERO_SPARKLES.map((s, i) => (
          <span
            key={i}
            className="hero-sparkle"
            style={
              {
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                background: s.color,
                animationDelay: s.delay,
                animationDuration: s.duration,
                "--sx": `${s.sx}px`,
                "--sy": `${s.sy}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <svg className="corner-doodle" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <circle cx="60" cy="60" r="34" stroke="#FEBD02" strokeWidth="1.5" opacity="0.7" />
        <circle cx="60" cy="60" r="3" fill="#FEBD02" />
      </svg>

      <svg className="blob-crew blob-crew-a" viewBox="0 0 150 150" aria-hidden="true">
        <path d="M75 100 C40 100 20 78 24 50 C28 22 58 12 82 20 C110 30 122 58 112 82 C104 100 92 100 75 100Z" fill="#10D9AB" />
        <ellipse cx="60" cy="55" rx="10" ry="12" fill="#F7F2E7" />
        <ellipse cx="92" cy="55" rx="10" ry="12" fill="#F7F2E7" />
        <circle cx="63" cy="58" r="4.5" fill="#0C2578" />
        <circle cx="95" cy="58" r="4.5" fill="#0C2578" />
        <path d="M62 76 Q76 88 92 76" stroke="#0C2578" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M118 40 L122 30 L126 40 L136 44 L126 48 L122 58 L118 48 L108 44 Z" fill="#FEBD02" />
      </svg>

      <svg className="blob-crew blob-crew-b" viewBox="0 0 88 88" aria-hidden="true">
        <path d="M44 8 C48 8 51 10 53 14 L80 62 C83 68 79 76 72 76 L16 76 C9 76 5 68 8 62 L35 14 C37 10 40 8 44 8Z" fill="#FEBD02" />
        <ellipse cx="35" cy="54" rx="6.5" ry="8" fill="#0C2578" />
        <ellipse cx="53" cy="54" rx="6.5" ry="8" fill="#0C2578" />
        <circle cx="36" cy="56" r="2.4" fill="#F7F2E7" />
        <circle cx="54" cy="56" r="2.4" fill="#F7F2E7" />
        <path d="M33 65 Q44 72 55 65" stroke="#0C2578" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>

      <svg className="blob-crew blob-crew-c" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 4 C40 4 44 12 40 20 C48 16 56 20 56 28 C56 36 48 40 40 36 C44 44 40 52 32 52 C24 52 20 44 24 36 C16 40 8 36 8 28 C8 20 16 16 24 20 C20 12 24 4 32 4Z" fill="#8FB4FF" />
        <ellipse cx="26" cy="27" rx="5" ry="6" fill="#0C2578" />
        <ellipse cx="40" cy="27" rx="5" ry="6" fill="#0C2578" />
        <circle cx="27" cy="29" r="1.8" fill="#F7F2E7" />
        <circle cx="41" cy="29" r="1.8" fill="#F7F2E7" />
        <path d="M25 37 Q32 42 40 37" stroke="#0C2578" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>

      <svg className="blob-crew blob-crew-d" viewBox="0 0 70 70" aria-hidden="true">
        <path d="M22 6 L48 6 L64 22 L64 48 L48 64 L22 64 L6 48 L6 22 Z" fill="#F7F2E7" />
        <ellipse cx="27" cy="33" rx="5.5" ry="6.5" fill="#0C2578" />
        <ellipse cx="45" cy="33" rx="5.5" ry="6.5" fill="#0C2578" />
        <circle cx="28" cy="35" r="2" fill="#F7F2E7" />
        <circle cx="46" cy="35" r="2" fill="#F7F2E7" />
        <path d="M25 46 Q35 53 47 46" stroke="#0C2578" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      </svg>

      <Nav />

      <div className="content">
        <div className="eyebrow">
          <span className="eyebrow-dot"></span>
          Marketing &amp; Design Agency
        </div>

        <h1>
          Boring brands{" "}
          <span className="underline-yellow">
            get skipped
            <svg viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 12 C 60 4, 240 4, 298 12" stroke="#FEBD02" strokeWidth="7" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          . We make sure
          <br />
          yours <span className="hl">isn&apos;t one.</span>
        </h1>

        <p className="sub">
          Strategy, design and content that turns scrollers into customers — built for brands who&apos;d rather be
          remembered than &quot;professional.&quot;
        </p>

        <div className="cta-row">
          <motion.button
            className="btn-primary"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Let&apos;s fix that
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.button>
          <motion.a
            href="#work"
            className="btn-secondary"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            See our work
          </motion.a>

          <div className="sticky" id="stickyNote">
            creative
            <br />
            chaos,
            <br />
            on schedule
            <span className="sticky-badge" aria-hidden="true"></span>
          </div>
        </div>

        <div className="booking-badge">
          <span className="booking-dot-wrap">
            <span className="booking-ping"></span>
            <span className="booking-dot"></span>
          </span>
          Currently booking new clients
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-card">
          <div className="visual-badge">New drop</div>
          <div className="visual-card-header">
            <span className="visual-dot" style={{ background: "#FEBD02" }}></span>
            <span className="visual-dot" style={{ background: "#FF4101" }}></span>
            <span className="visual-dot" style={{ background: "#10D9AB" }}></span>
          </div>
          <div className="visual-card-body">
            <div className="visual-bar w60"></div>
            <div className="visual-bar w80"></div>
            <div className="visual-bar w40"></div>
            <span className="visual-tag">Campaign concept</span>
          </div>
        </div>
      </div>

      <div className="marquee-section">
        <div className="marquee-wrap">
          <div className="marquee">
            <span>Branding</span>
            <span>Social Media</span>
            <span>Ad Campaigns</span>
            <span>Content Creation</span>
            <span>Web Design</span>
            <span>Strategy</span>
            <span>Branding</span>
            <span>Social Media</span>
            <span>Ad Campaigns</span>
            <span>Content Creation</span>
            <span>Web Design</span>
            <span>Strategy</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
