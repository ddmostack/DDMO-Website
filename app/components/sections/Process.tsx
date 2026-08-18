import { motion } from "framer-motion";

export default function Process() {
  return (
    <motion.section
      className="process"
      id="process"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="process-head">
        <p className="process-eyebrow">
          <svg className="eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
          </svg>
          how we work
        </p>
        <h2 className="process-heading">Signs you need a studio like Doodles Dynamo.</h2>
        <p className="process-hint">
          keep swiping
          <span className="swipe-track">
            <span className="swipe-trail"></span>
            <svg className="swipe-hand" viewBox="0 0 24 24" fill="none" stroke="#0C2578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11.5V6.5a1.5 1.5 0 0 1 3 0v5M12 6.5a1.5 1.5 0 0 1 3 0v5M15 7.5a1.5 1.5 0 0 1 3 0v4.5M9 12l-1.8-1.8a1.4 1.4 0 0 0-2 2L9.5 16.5A5 5 0 0 0 13 18h1a5 5 0 0 0 5-5v-1" />
            </svg>
          </span>
        </p>
      </div>
      <div className="process-track">
        {/* Cover card */}
        <div
          className="p-card p-photo"
          style={{ alignItems: "center", textAlign: "center", position: "relative", background: "#1235A0", overflow: "hidden" }}
        >
          <svg
            style={{ position: "absolute", inset: "0", width: "100%", height: "100%", zIndex: "0" }}
            viewBox="0 0 300 460"
            preserveAspectRatio="none"
          >
            <circle cx="70" cy="120" r="150" fill="#1A44C4" opacity="0.55" />
            <circle cx="240" cy="260" r="130" fill="#1A44C4" opacity="0.5" />
            <circle cx="40" cy="330" r="90" fill="#2C55D6" opacity="0.4" />
            <circle cx="270" cy="80" r="70" fill="#2C55D6" opacity="0.35" />
            <path d="M60 60 C 40 90 55 120 40 150" stroke="#0C2578" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.55" />
            <path d="M40 150 C 30 160 20 158 12 172" stroke="#0C2578" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.55" />
          </svg>
          <div className="p-logo" style={{ justifyContent: "center", alignSelf: "center", position: "relative", zIndex: "2" }}>
            <span className="p-logo-dot"></span>
            Doodles Dynamo
          </div>
          <div className="dualpole"></div>
          <div className="dualpole right"></div>
          <div className="signstack">
            <div className="stack-board hard">SIGNS</div>
            <div className="stack-board hard">YOU ARE</div>
            <div className="stack-board hard">MADE FOR</div>
            <div className="stack-board hard">DDMO</div>
          </div>
          <div className="p-rocks"></div>
          <div className="p-bottom-row" style={{ justifyContent: "flex-start", alignSelf: "stretch", zIndex: "3" }}>
            <div className="p-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="#F7F2E7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
        {/* Step 1 */}
        <div className="p-card bg-cream">
          <p className="p-statement">You&apos;ve got an idea but no one to shape it with.</p>
          <div className="p-signpost" style={{ height: "120px" }}>
            <div className="p-pole2"></div>
            <div className="p-board" style={{ top: "8px", left: "26px", transform: "rotate(-2.5deg)" }}>
              STEP 01
            </div>
          </div>
          <p className="p-sub">Discover</p>
          <p className="p-sub" style={{ marginTop: "2px" }}>
            We dig into your brand, your audience, and what&apos;s actually not working yet.
          </p>
          <div className="p-rocks"></div>
          <div className="p-bottom-row">
            <div className="p-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="#F7F2E7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <p className="p-caption">A team that actually listens.</p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="p-card bg-cream">
          <p className="p-statement">One idea leads to three directions. You need a plan, not more options.</p>
          <div className="p-signpost" style={{ height: "140px" }}>
            <div className="p-pole2"></div>
            <div className="p-board" style={{ top: "64px", left: "26px", transform: "rotate(2deg)" }}>
              STEP 02
            </div>
          </div>
          <p className="p-sub">Sketch &amp; strategize</p>
          <p className="p-sub" style={{ marginTop: "2px" }}>
            Ideas hit paper fast. We shape a plan before we touch a single pixel.
          </p>
          <div className="p-rocks"></div>
          <div className="p-bottom-row">
            <div className="p-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="#F7F2E7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <p className="p-caption">One clear roadmap, not a mood board.</p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="p-card bg-cream">
          <p className="p-statement">You want to see it built, not just talked about.</p>
          <div className="p-signpost" style={{ height: "110px" }}>
            <div className="p-pole2"></div>
            <div className="p-board" style={{ top: "0px", left: "26px", transform: "rotate(-1.5deg)" }}>
              STEP 03
            </div>
          </div>
          <p className="p-sub">Design &amp; build</p>
          <p className="p-sub" style={{ marginTop: "2px" }}>
            We design, write, and build — with you in the loop at every checkpoint.
          </p>
          <div className="p-rocks"></div>
          <div className="p-bottom-row">
            <div className="p-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="#F7F2E7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <p className="p-caption">No radio silence for three weeks.</p>
          </div>
        </div>
        {/* Step 4 */}
        <div className="p-card bg-cream">
          <p className="p-statement">Launch day shouldn&apos;t feel like the finish line.</p>
          <div className="p-signpost" style={{ height: "150px" }}>
            <div className="p-pole2"></div>
            <div className="p-board" style={{ top: "80px", left: "26px", transform: "rotate(3deg)" }}>
              STEP 04
            </div>
          </div>
          <p className="p-sub">Launch &amp; iterate</p>
          <p className="p-sub" style={{ marginTop: "2px" }}>
            We ship it, watch the numbers, and keep tightening what&apos;s working.
          </p>
          <div className="p-rocks"></div>
          <div className="p-bottom-row">
            <div className="p-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="#F7F2E7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <p className="p-caption">It&apos;s not done at launch. It&apos;s just starting.</p>
          </div>
        </div>
        {/* Closing CTA card */}
        <div className="p-card bg-navy p-photo">
          <div className="p-logo">
            <span className="p-logo-dot"></span>
            Doodles Dynamo
          </div>
          <p className="p-sub" style={{ marginTop: "22px", color: "var(--yellow)", opacity: "1", fontFamily: "'Caveat',cursive", fontSize: "19px" }}>
            Doodles Dynamo gives you
          </p>
          <h3 className="p-cta-heading">
            THE STRATEGY
            <br />
            THE DESIGN
            <br />
            <span>THE LAUNCH</span>
          </h3>
          <p className="p-sub">Go from idea → to impact.</p>
          <div className="p-rocks"></div>
          <motion.button
            className="p-cta-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Let&apos;s talk →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
