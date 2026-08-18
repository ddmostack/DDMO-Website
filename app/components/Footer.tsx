export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col footer-brand">
          <h4>Brand Statement</h4>
          <p className="footer-tagline">
            Marketing &amp; design for brands who&apos;d rather be remembered than &quot;professional.&quot;
            <br />
            <br />
            From a rough idea to something people actually stop for.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#work">Our Work</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#services">Branding</a>
            </li>
            <li>
              <a href="#services">Social Media</a>
            </li>
            <li>
              <a href="#services">Web Design</a>
            </li>
            <li>
              <a href="#services">Ad Campaigns</a>
            </li>
            <li>
              <a href="#services">Strategy</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-newsletter">
          <h4>Stay in the loop</h4>
          <div className="footer-form">
            <input type="email" placeholder="type your email" />
            <button aria-label="Subscribe">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
          <p>Occasional notes on what we&apos;re building — no spam, ever.</p>
        </div>
      </div>
      <div className="footer-wordmark-wrap">
        <svg className="mark" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 4 C40 4 44 12 40 20 C48 16 56 20 56 28 C56 36 48 40 40 36 C44 44 40 52 32 52 C24 52 20 44 24 36 C16 40 8 36 8 28 C8 20 16 16 24 20 C20 12 24 4 32 4Z" fill="#1235A0" />
          <ellipse cx="26" cy="27" rx="5" ry="6" fill="#F7F2E7" />
          <ellipse cx="40" cy="27" rx="5" ry="6" fill="#F7F2E7" />
          <circle cx="27" cy="29" r="1.8" fill="#1235A0" />
          <circle cx="41" cy="29" r="1.8" fill="#1235A0" />
          <path d="M25 37 Q32 42 40 37" stroke="#F7F2E7" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
        <span className="footer-wordmark">Doodles Dynamo</span>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Doodles Dynamo. All rights reserved.</p>
        <p className="footer-made">made with a little creative chaos ✨</p>
      </div>
    </footer>
  );
}
