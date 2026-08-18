import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "They actually got our brand voice on the first try. Every draft felt like it came from inside our team, not an outside agency.",
    initials: "AR",
    bg: "#1235A0",
    name: "Ayesha Raza",
    role: "Founder, placeholder brand — Lahore",
  },
  {
    quote:
      "Fast, direct, and no fluff in the process. We had a working prototype in a week when other quotes were promising a month.",
    initials: "BH",
    bg: "#FF4101",
    name: "Bilal Hussain",
    role: "Co-founder, placeholder co. — Karachi",
  },
  {
    quote:
      "What stood out was how much they pushed back on our first idea — and they were right to. The final result performed way better.",
    initials: "ML",
    bg: "#10D9AB",
    name: "Maria Lopez",
    role: "Marketing Lead, placeholder inc. — Madrid",
  },
  {
    quote:
      "Clear communication from day one. No jargon, no vague timelines — just steady updates and a launch that actually happened on schedule.",
    initials: "JW",
    bg: "#7A3FB0",
    name: "Jonas Weber",
    role: "Product Lead, placeholder gmbh — Berlin",
  },
  {
    quote:
      "Hands down the most fun I've had briefing an agency. They took a rough idea and made it sharper than what we walked in with.",
    initials: "EC",
    bg: "#2A4BAE",
    name: "Emily Carter",
    role: "Brand Manager, placeholder ltd. — London",
  },
  {
    quote:
      "We came in expecting a standard rebrand and left with a whole new way of talking to our customers. Worth every rupee.",
    initials: "SM",
    bg: "#D14A1F",
    name: "Sophie Martin",
    role: "Founder, placeholder studio — Toronto",
  },
];

const STAR_PATH = "M12 2l3 6.5 7 1-5.2 4.9L18 21l-6-3.5L6 21l1.2-6.6L2 9.5l7-1z";

export default function Testimonials() {
  return (
    <motion.section
      className="testimonials"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="testimonials-head">
        <p className="testimonials-eyebrow">
          <svg className="eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 9 9 0 0 1-2.5-.4L3 21l1.5-4.5A8.4 8.4 0 0 1 3 11.5 8.4 8.4 0 0 1 11.5 3a8.4 8.4 0 0 1 9.5 8.5z" />
          </svg>
          kind words
        </p>
        <h2 className="testimonials-heading">Don&apos;t just take our word for it.</h2>
        <p className="testimonials-note">Placeholder reviews — swapping these for real client feedback soon.</p>
      </div>
      <div className="testimonials-track">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            className="testi-card"
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: (i % 3) * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="testi-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg viewBox="0 0 24 24" fill="#FEBD02" key={i}>
                  <path d={STAR_PATH} />
                </svg>
              ))}
            </div>
            <p className="testi-quote">&quot;{t.quote}&quot;</p>
            <div className="testi-person">
              <div className="testi-avatar" style={{ background: t.bg }}>
                {t.initials}
              </div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
