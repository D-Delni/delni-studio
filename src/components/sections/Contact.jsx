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
              <a href="#" aria-label="Schedule a call with Delni Studio">
                Schedule a Call →
              </a>
            </p>
          </div>

          <form
            className="contact-form fade-in fade-in-delay-1"
            aria-label="Contact form"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Alexandra Reid"
                  required
                  aria-required="true"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  placeholder="alex@company.com"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-company">Company or Practice</label>
              <input
                type="text"
                id="contact-company"
                name="company"
                autoComplete="organization"
                placeholder="Reid & Associates"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">What do you need?</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your business, what you'd like your site to do, and any timeline you have in mind…"
                required
                aria-required="true"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-large"
              style={{
                alignSelf: "flex-start",
                opacity: sent ? 0.7 : 1,
                cursor: sent ? "default" : "pointer",
              }}
              disabled={sent}
            >
              {sent ? "Message sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
