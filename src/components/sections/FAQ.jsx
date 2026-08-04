import { useRef, useState } from 'react';

const FAQS = [
  {
    q: 'What exactly is covered in the setup fee?',
    a: 'The setup fee covers everything it takes to build your site from scratch — design, copywriting guidance, development, and launch. By the time you pay it, your site is live and ready to represent your business. There are no hidden extras at the build stage. Think of it as the one-time cost of getting something done properly.',
    delay: 0,
  },
  {
    q: 'What does the monthly fee cover, and do I have to pay it forever?',
    a: "The monthly fee keeps your site hosted, monitored, and maintained — security patches, uptime monitoring, and small updates as needed. It's the cost of having a professional in your corner, not a subscription to a piece of software. You can cancel with 30 days' notice at any point, though most clients keep it for the peace of mind alone.",
    delay: 1,
  },
  {
    q: 'What happens if I want to upgrade my plan later?',
    a: "Upgrading is straightforward. You'd pay the difference in setup cost between your current plan and the one you're moving to — we don't rebuild from scratch, we build on top of what's already there. Your monthly fee adjusts to reflect the new plan. Just get in touch and we'll walk you through it.",
    delay: 2,
  },
  {
    q: 'Do I own my website?',
    a: "Yes — fully. Once your setup is complete, the site and all its content belong to you. We hold nothing hostage. If you ever decide to move hosting or bring the site in-house, we'll hand over everything cleanly. You're a client, not a subscriber locked into our ecosystem.",
    delay: 3,
  },
  {
    q: 'How long will it take before my site is live?',
    a: 'Most HTML Focused sites go live within 5–7 business days of receiving your brief. Animated Experience projects typically take 10–14 days. Backend Pro builds run 3–4 weeks depending on complexity. We confirm your exact timeline before work begins — and we hold to it.',
    delay: 4,
  },
  {
    q: "I'm not technical at all — will I be lost?",
    a: "Not for a moment. The majority of our clients are lawyers, real estate professionals, and business owners who don't know — and don't need to know — anything about how websites are built. We handle everything. You tell us what you want your business to communicate. We take it from there.",
    delay: 5,
  },
];

function FaqItem({ index, faq, expanded, onToggle }) {
  const answerRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  const delayClass = faq.delay > 0 ? ` fade-in-delay-${faq.delay}` : '';

  return (
    <div className={`faq-item fade-in${delayClass}`} role="listitem">
      <button
        className="faq-question"
        aria-expanded={expanded}
        aria-controls={`faq-answer-${index}`}
        id={`faq-btn-${index}`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
      >
        {faq.q}
        <span className="faq-icon" aria-hidden="true">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </span>
      </button>
      <div
        className="faq-answer"
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        style={{ maxHeight: expanded && answerRef.current ? `${answerRef.current.scrollHeight}px` : '0px' }}
      >
        <div className="faq-answer-inner" ref={answerRef}>
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <header className="section-header fade-in">
          <p className="section-eyebrow">Questions</p>
          <h2 className="section-title" id="faq-heading">Everything you'd want to know.</h2>
          <p className="section-subtitle">Straight answers, no fine print.</p>
        </header>

        <div className="faq-list" role="list">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={faq.q}
              index={index + 1}
              faq={faq}
              expanded={openIndex === index + 1}
              onToggle={() => handleToggle(index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
