export default function FinalCTA() {
  return (
    <section className="final-cta">
      <svg className="fc-blob" viewBox="0 0 88 88" style={{ width: "80px", height: "80px", top: "36px", left: "6%" }} aria-hidden="true">
        <path d="M44 78 C20 78 8 62 10 44 C12 24 30 8 48 10 C68 12 78 30 76 48 C74 66 62 78 44 78Z" fill="#FEBD02" />
        <ellipse cx="34" cy="42" rx="7" ry="8.5" fill="#0C2578" />
        <ellipse cx="56" cy="42" rx="7" ry="8.5" fill="#0C2578" />
        <circle cx="35" cy="44" r="2.6" fill="#F7F2E7" />
        <circle cx="57" cy="44" r="2.6" fill="#F7F2E7" />
        <path d="M32 58 Q44 68 58 58" stroke="#0C2578" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
      <svg className="fc-blob b2" viewBox="0 0 64 64" style={{ width: "60px", height: "60px", bottom: "44px", right: "7%" }} aria-hidden="true">
        <path d="M32 4 C40 4 44 12 40 20 C48 16 56 20 56 28 C56 36 48 40 40 36 C44 44 40 52 32 52 C24 52 20 44 24 36 C16 40 8 36 8 28 C8 20 16 16 24 20 C20 12 24 4 32 4Z" fill="#8FB4FF" />
        <ellipse cx="26" cy="27" rx="5" ry="6" fill="#0C2578" />
        <ellipse cx="40" cy="27" rx="5" ry="6" fill="#0C2578" />
        <circle cx="27" cy="29" r="1.8" fill="#F7F2E7" />
        <circle cx="41" cy="29" r="1.8" fill="#F7F2E7" />
        <path d="M25 37 Q32 42 40 37" stroke="#0C2578" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
      <svg className="fc-blob b3" viewBox="0 0 70 70" style={{ width: "64px", height: "64px", top: "60%", left: "3%" }} aria-hidden="true">
        <path d="M22 6 L48 6 L64 22 L64 48 L48 64 L22 64 L6 48 L6 22 Z" fill="#F7F2E7" />
        <path d="M20 30 Q27 22 34 30" stroke="#0C2578" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M40 30 Q47 22 54 30" stroke="#0C2578" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M22 44 Q35 56 48 44" stroke="#0C2578" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      </svg>
      <svg className="fc-blob b4" viewBox="0 0 64 64" style={{ width: "52px", height: "52px", top: "18%", right: "4%" }} aria-hidden="true">
        <path d="M12 4 L52 4 L60 60 L4 60 Z" fill="#FF4101" />
        <ellipse cx="24" cy="30" rx="5.5" ry="6.5" fill="#F7F2E7" />
        <ellipse cx="40" cy="30" rx="5.5" ry="6.5" fill="#F7F2E7" />
        <circle cx="25" cy="32" r="2" fill="#0C2578" />
        <circle cx="41" cy="32" r="2" fill="#0C2578" />
        <path d="M22 44 Q32 52 42 44" stroke="#F7F2E7" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      </svg>
      <div className="billboard-scene">
        <div className="billboard-board">
          <div className="billboard-bezel"></div>
          <div className="billboard-side"></div>
          <span className="billboard-rivet" style={{ top: "8px", left: "8px" }}></span>
          <span className="billboard-rivet" style={{ top: "8px", right: "8px" }}></span>
          <span className="billboard-rivet" style={{ bottom: "8px", left: "8px" }}></span>
          <span className="billboard-rivet" style={{ bottom: "8px", right: "8px" }}></span>
          <div className="billboard-top">
            <div className="billboard-logo">
              <span className="logo-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--yellow)" }}></span>
              Doodles Dynamo
            </div>
            <span className="billboard-badge">Now booking</span>
          </div>
          <h2 className="billboard-headline">
            Got an idea?{" "}
            <span className="hl">Let&apos;s make it loud.</span>
          </h2>
          <p className="billboard-sub">
            Tell us what you&apos;re building. We&apos;ll tell you honestly if we&apos;re the right fit — no sales
            pitch, just a real conversation.
          </p>
          <div className="billboard-cta-row">
            <div className="billboard-cta">
              Let&apos;s talk
              <svg viewBox="0 0 24 24" fill="none" stroke="#0C2578" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <a href="mailto:hello@doodlesdynamo.com" className="billboard-email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              hello@doodlesdynamo.com
            </a>
          </div>
          <div className="billboard-trust">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" />
            </svg>
            We usually reply within a day
          </div>
        </div>
        <div className="billboard-pole-wrap">
          <svg className="billboard-chain" id="billboardChain" width="28" height="320" viewBox="0 0 28 320" xmlns="http://www.w3.org/2000/svg">
            <ellipse className="link" cx="14" cy="10" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="28" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="46" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="64" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="82" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="100" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="118" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="136" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="154" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="172" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="190" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="208" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="226" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="244" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="262" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="280" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="298" rx="7" ry="10" />
            <ellipse className="link" cx="14" cy="316" rx="7" ry="10" />
          </svg>
        </div>
      </div>
    </section>
  );
}
