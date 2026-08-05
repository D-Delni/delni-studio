import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-copy fade-in">
            <p className="section-eyebrow">Get in Touch</p>
            <h2 className="section-title" id="contact-heading">
              Let's build something you're proud to share.
            </h2>
            <p className="section-subtitle">
              Tell us about your business and what you need. We'll come back to
              you within one business day with a clear plan forward.
            </p>
            <p className="contact-alt">
              Prefer a conversation?{" "}
              <a
                href="mailto:support@delni.dev"
                aria-label="Schedule a call with Delni Studio"
              >
                Schedule a meeting →
              </a>
            </p>
          </div>
          <div
            class="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="6a708d2e5030fcd55a0164e6"
            data-style-height="52px"
            data-style-width="100%"
            data-token="58e420d4-8145-4425-a555-e9ba40f9db3e"
          >
            <a
              href="https://www.trustpilot.com/review/delni.dev"
              className="btn btn-primary btn-large flex"
              target="_blank"
              rel="noopener"
            >
              Review me here!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
