import { motion } from "framer-motion";

const PROJECTS = [
  {
    cat: "Brand Identity",
    title: "Citrus Cafe rebrand",
    art: (
      <>
        <rect width="400" height="300" fill="#FFF6E3" />
        <circle cx="200" cy="120" r="70" fill="#FEBD02" />
        <path d="M140 210 h120 v40 a10 10 0 0 1 -10 10 h-100 a10 10 0 0 1 -10 -10 Z" fill="#1235A0" />
        <rect x="170" y="180" width="60" height="30" fill="#FF4101" />
        <circle cx="200" cy="120" r="26" fill="#FFF6E3" />
        <text x="200" y="126" fontFamily="'Titan One',cursive" fontSize="15" fill="#1235A0" textAnchor="middle">
          CC
        </text>
      </>
    ),
  },
  {
    cat: "Social Campaign",
    title: '"Stop Scrolling" ad series',
    art: (
      <>
        <rect width="400" height="300" fill="#1235A0" />
        <rect x="0" y="0" width="400" height="300" fill="#FF4101" opacity="0.85" />
        <path d="M0 220 Q200 140 400 210 L400 300 L0 300 Z" fill="#FEBD02" />
        <circle cx="90" cy="90" r="30" fill="#F7F2E7" opacity="0.85" />
        <circle cx="320" cy="70" r="16" fill="#F7F2E7" opacity="0.6" />
        <text x="200" y="270" fontFamily="'Titan One',cursive" fontSize="20" fill="#1235A0" textAnchor="middle">
          STOP.
        </text>
      </>
    ),
  },
  {
    cat: "Web Design",
    title: "Studio portfolio site",
    art: (
      <>
        <rect width="400" height="300" fill="#E9F1FF" />
        <rect x="40" y="40" width="320" height="220" rx="12" fill="#FFFFFF" stroke="#1235A0" strokeWidth="2" />
        <rect x="60" y="60" width="280" height="28" rx="6" fill="#1235A0" />
        <circle cx="76" cy="74" r="5" fill="#FEBD02" />
        <circle cx="94" cy="74" r="5" fill="#FF4101" />
        <rect x="60" y="104" width="130" height="80" rx="6" fill="#10D9AB" />
        <rect x="200" y="104" width="140" height="36" rx="6" fill="#FEBD02" />
        <rect x="200" y="148" width="140" height="36" rx="6" fill="#E5EBFA" />
        <rect x="60" y="198" width="280" height="16" rx="4" fill="#E5EBFA" />
      </>
    ),
  },
  {
    cat: "Packaging",
    title: "Roast & co. coffee bags",
    art: (
      <>
        <rect width="400" height="300" fill="#3B2A6B" />
        <rect x="130" y="40" width="140" height="220" rx="18" fill="#7A3FB0" />
        <rect x="150" y="70" width="100" height="60" rx="8" fill="#F7F2E7" />
        <path d="M150 160 h100 M150 180 h70 M150 200 h100" stroke="#F7F2E7" strokeWidth="6" strokeLinecap="round" />
        <circle cx="200" cy="240" r="10" fill="#10D9AB" />
        <circle cx="70" cy="90" r="22" fill="#FEBD02" opacity="0.8" />
        <circle cx="330" cy="220" r="16" fill="#10D9AB" opacity="0.8" />
      </>
    ),
  },
  {
    cat: "Content Creation",
    title: "Reel series for a gym brand",
    art: (
      <>
        <rect width="400" height="300" fill="#FEBD02" />
        <rect x="150" y="30" width="100" height="240" rx="16" fill="#1235A0" />
        <rect x="162" y="50" width="76" height="140" rx="8" fill="#F7F2E7" />
        <polygon points="192,105 192,135 216,120" fill="#1235A0" />
        <circle cx="200" cy="215" r="10" fill="#F7F2E7" />
        <circle cx="60" cy="150" r="26" fill="#FF4101" opacity="0.85" />
        <circle cx="340" cy="90" r="18" fill="#10D9AB" opacity="0.85" />
      </>
    ),
  },
  {
    cat: "Ad Campaign",
    title: "Launch teaser — SaaS client",
    art: (
      <>
        <rect width="400" height="300" fill="#0C2578" />
        <rect x="60" y="70" width="280" height="160" rx="10" fill="#1235A0" stroke="#10D9AB" strokeWidth="2" />
        <rect x="80" y="90" width="160" height="14" rx="4" fill="#F7F2E7" />
        <rect x="80" y="114" width="110" height="10" rx="4" fill="#8FB4FF" />
        <rect x="80" y="160" width="100" height="34" rx="8" fill="#FEBD02" />
        <circle cx="290" cy="120" r="36" fill="#10D9AB" opacity="0.9" />
        <path d="M275 120 l10 10 l20 -20" stroke="#0C2578" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function Portfolio() {
  return (
    <motion.section
      className="portfolio"
      id="work"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="portfolio-head">
        <div>
          <p className="portfolio-eyebrow">
            <svg className="eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="9" cy="9" r="1.8" />
              <path d="M21 15l-5-5-9 9" />
            </svg>
            selected work
          </p>
          <h2 className="portfolio-heading">A few concepts we&apos;re proud of.</h2>
        </div>
        <p className="portfolio-note">
          We&apos;re a young studio — every piece here is real work from our own sandbox, built the way we&apos;d
          build it for you.
        </p>
      </div>
      <div className="portfolio-grid">
        {PROJECTS.map((p, i) => (
          <motion.div
            className="project-card"
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: (i % 3) * 0.09 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="project-visual">
              <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                {p.art}
              </svg>
              <div className="project-overlay">
                <span>
                  View concept
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="project-info">
              <span className="project-cat">{p.cat}</span>
              <h3>{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
