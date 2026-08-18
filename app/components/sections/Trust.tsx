const TRUST_ITEMS = [
  {
    bg: "#FFF3D6",
    stroke: "#B8790A",
    title: "Fixed timelines",
    desc: 'We agree on dates upfront and hit them. No "it\'s almost ready" for three weeks straight.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
  },
  {
    bg: "#E0F9F1",
    stroke: "#0F8A6C",
    title: "Direct access",
    desc: "You talk to the people actually doing the work — no account manager relay chain.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20c0-3.5 2.5-6 5.5-6s5.5 2.5 5.5 6" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M15.5 13.2c2.2.4 3.8 2.3 3.8 4.8" />
      </>
    ),
  },
  {
    bg: "#FFE6DD",
    stroke: "#D14A1F",
    title: "Transparent pricing",
    desc: "Clear scope, clear numbers, upfront. No surprise line items after the invoice lands.",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h4" />
      </>
    ),
  },
  {
    bg: "#E5EBFA",
    stroke: "#2A4BAE",
    title: "Original work only",
    desc: "Every deliverable is built for you from scratch — no recycled templates, ever.",
    icon: <path d="M12 3l2.5 5.5L20 10l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5z" />,
  },
  {
    bg: "#F3E5FA",
    stroke: "#7A3FB0",
    title: "Fast turnaround",
    desc: "Tight feedback loops and quick iterations — momentum doesn't stall in our inbox.",
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  },
  {
    bg: "#FFF3D6",
    stroke: "#B8790A",
    title: "You own everything",
    desc: "Full rights to every file, design, and asset we hand over. It's yours, no strings.",
    icon: (
      <>
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
];

export default function Trust() {
  return (
    <section className="trust">
      <div className="trust-head">
        <p className="trust-eyebrow">
          <svg className="eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
          </svg>
          why trust us
        </p>
        <h2 className="trust-heading">What you can count on, before you sign anything.</h2>
      </div>
      <div className="trust-grid">
        {TRUST_ITEMS.map((t) => (
          <div className="trust-card" key={t.title}>
            <div className="trust-icon" style={{ background: t.bg }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={t.stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {t.icon}
              </svg>
            </div>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
