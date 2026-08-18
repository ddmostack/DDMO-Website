import Image from "next/image";

const FAQS = [
  {
    q: "What services do you actually offer?",
    a: "Branding, social media, ad campaigns, content creation, web design, and strategy. Basically everything a brand needs to go from idea to something people actually notice.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope — a logo refresh costs a lot less than a full brand + website build. Tell us what you need and we'll send a clear, itemized quote before anything starts.",
  },
  {
    q: "How long does a typical project take?",
    a: "Branding projects usually run 2–4 weeks. Websites take 3–6 depending on complexity. Ongoing social/content work runs on a monthly cycle. We'll give you a firm timeline upfront.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Yes — that's most of who we work with. We keep our process light and our pricing honest specifically so smaller teams don't get priced out of good design.",
  },
  {
    q: "Who owns the final files and designs?",
    a: "You do, fully. Once a project is paid for, every file, source asset, and design is yours to use however you like — no licensing games.",
  },
  {
    q: "How do we get started?",
    a: 'Hit "Let\'s talk" up top, tell us a bit about what you need, and we\'ll get back to you within a day or two to set up a quick call.',
  },
];

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="faq-head">
        <p className="faq-eyebrow">
          <svg className="eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9a2.5 2.5 0 0 1 4.8 1c0 1.5-2.3 1.8-2.3 3.5" />
            <circle cx="12" cy="17" r="0.6" fill="currentColor" />
          </svg>
          FAQS
        </p>
        <h2 className="faq-heading">Questions people usually ask.</h2>
      </div>
      <div className="faq-chat">
        {FAQS.map((item) => (
          <div className="faq-thread" key={item.q}>
            <div className="faq-q-row">
              <div className="faq-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="#5C6480" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
                </svg>
              </div>
              <div className="faq-bubble-q">{item.q}</div>
              <span className="faq-plus">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </div>
            <div className="faq-a-row">
              <div className="faq-bubble-a">{item.a}</div>
              <div className="faq-avatar brand">
                <Image
                  src="/avatars/ddmo-monogram.jpg"
                  alt="Doodles Dynamo"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
