import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="contact-form-section"
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="contact-hang" id="contactHang">
      <div className="contact-swing-idle">
      <div className="contact-board">
      <div className="contact-grid">
        <svg className="contact-blob" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 4 C40 4 44 12 40 20 C48 16 56 20 56 28 C56 36 48 40 40 36 C44 44 40 52 32 52 C24 52 20 44 24 36 C16 40 8 36 8 28 C8 20 16 16 24 20 C20 12 24 4 32 4Z" fill="#FEBD02" />
          <ellipse cx="26" cy="27" rx="5" ry="6" fill="#0C2578" />
          <ellipse cx="40" cy="27" rx="5" ry="6" fill="#0C2578" />
          <circle cx="27" cy="29" r="1.8" fill="#F7F2E7" />
          <circle cx="41" cy="29" r="1.8" fill="#F7F2E7" />
          <path d="M25 37 Q32 42 40 37" stroke="#0C2578" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
        <div className="contact-info">
          <p className="contact-eyebrow">
            <svg className="eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            get in touch
          </p>
          <h2 className="contact-heading">Ready to start?</h2>
          <p className="contact-sub">
            Budget, timeline, what you&apos;re picturing — the more you tell us, the faster we can figure out if this
            works.
          </p>
          <div className="contact-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <a href="mailto:hello@doodlesdynamo.com">hello@doodlesdynamo.com</a>
          </div>
          <div className="contact-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" />
            </svg>
            Usually reply within 24 hours
          </div>
          <div className="contact-next">
            <p className="contact-next-title">What happens after you hit send</p>
            <div className="contact-next-step">
              <span className="contact-next-num">1</span>
              <span>Your message lands straight in our inbox.</span>
            </div>
            <div className="contact-next-step">
              <span className="contact-next-num">2</span>
              <span>We reply with next steps or a quick call.</span>
            </div>
            <div className="contact-next-step">
              <span className="contact-next-num">3</span>
              <span>If it&apos;s a fit, we scope it and get moving.</span>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card-head">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l2.5 5.5L20 10l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5z" />
            </svg>
            <span>Start your project</span>
          </div>
          <form id="contactForm">
            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="cf-name">Your name</label>
                <div className="contact-field-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
                  </svg>
                  <input type="text" id="cf-name" name="name" placeholder="Jane Doe" required />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="cf-email">Email</label>
                <div className="contact-field-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <input type="email" id="cf-email" name="email" placeholder="jane@company.com" required />
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="cf-project">Project type</label>
                <select id="cf-project" name="project">
                  <option>Branding</option>
                  <option>Social Media</option>
                  <option>Web Design</option>
                  <option>Ad Campaign</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="contact-field">
                <label htmlFor="cf-budget">Budget range</label>
                <select id="cf-budget" name="budget">
                  <option>Under $1,000</option>
                  <option>$1,000 – $5,000</option>
                  <option>$5,000 – $15,000</option>
                  <option>Let&apos;s discuss</option>
                </select>
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="cf-message">Tell us about your project</label>
              <textarea id="cf-message" name="message" placeholder="What are you building? What's the timeline?" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="contact-submit"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Send message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.button>
          </form>
        </div>
      </div>
      </div>
      </div>
      </div>
    </motion.section>
  );
}
