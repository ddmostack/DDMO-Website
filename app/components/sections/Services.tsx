import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    bg: "#FFF3D6",
    stroke: "#B8790A",
    title: "Branding",
    desc: "Logo, identity systems, and a visual language that actually feels like you.",
    icon: <path d="M12 3l2.5 5.5L20 10l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5z" />,
  },
  {
    num: "02",
    bg: "#E0F9F1",
    stroke: "#0F8A6C",
    title: "Social media",
    desc: "Content calendars, community management, and posts people stop for.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="16.2" cy="7.8" r="0.6" fill="#0F8A6C" />
      </>
    ),
  },
  {
    num: "03",
    bg: "#FFE6DD",
    stroke: "#D14A1F",
    title: "Ad campaigns",
    desc: "Paid strategy and creative that's built to convert, not just look nice.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.6" fill="#D14A1F" />
      </>
    ),
  },
  {
    num: "04",
    bg: "#E5EBFA",
    stroke: "#2A4BAE",
    title: "Content creation",
    desc: "Photo, video, and copy that carries your voice across every platform.",
    icon: <path d="M4 6h16M4 12h10M4 18h13" />,
  },
  {
    num: "05",
    bg: "#F3E5FA",
    stroke: "#7A3FB0",
    title: "Web design",
    desc: "Fast, clean sites that turn visitors into leads, not just page views.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </>
    ),
  },
  {
    num: "06",
    bg: "#FFF3D6",
    stroke: "#B8790A",
    title: "Strategy",
    desc: "Positioning, messaging, and a roadmap that ties every piece together.",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <motion.section
      className="services"
      id="services"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="services-head">
        <p className="services-eyebrow">
          <svg className="eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
          </svg>
          what we do
        </p>
        <h2 className="services-heading">Everything a growing brand needs, minus the agency bloat.</h2>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <motion.div
            className="service-card"
            key={s.num}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.09 }}
          >
            <span className="service-num">{s.num}</span>
            <div className="service-icon" style={{ background: s.bg }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={s.stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {s.icon}
              </svg>
            </div>
            <h3>
              {s.title}
              <svg className="service-arrow" viewBox="0 0 24 24" fill="none" stroke="#F7F2E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
