const BENEFITS = [
  {
    icon: '🕐',
    title: 'Your site, on time, every time',
    body: "We deliver on schedule so you can focus on your clients, not your inbox. Delays don't happen here — your timeline is taken as seriously as your business.",
    delay: 1,
  },
  {
    icon: '🔒',
    title: 'Built to stay up',
    body: 'Your website runs reliably around the clock. No surprises, no unexpected downtime, and no frantic calls on a Sunday morning. Just a site that works.',
    delay: 2,
  },
  {
    icon: '🤝',
    title: 'A team that speaks your language',
    body: 'We translate outcomes, not jargon. You tell us what your business needs — we figure out how to build it. No technical literacy required on your part.',
    delay: 3,
  },
  {
    icon: '✦',
    title: 'Designed to impress',
    body: 'First impressions close deals. Every Delni site looks and feels like it belongs at the top of your market — because it does. Your clients will notice.',
    delay: 1,
  },
  {
    icon: '📈',
    title: 'Grows with your business',
    body: "Whether you're establishing your name or scaling an established practice, your website moves with you. Upgrading is a conversation, not a rebuild.",
    delay: 2,
  },
  {
    icon: '🛡',
    title: 'Your data, protected',
    body: "We take the protection of your clients' information seriously — because your reputation depends on it. Every site is built with security as a standard, not an afterthought.",
    delay: 3,
  },
];

export default function WhyUs() {
  return (
    <section id="why" aria-labelledby="why-heading">
      <div className="container">
        <header className="section-header fade-in">
          <p className="section-eyebrow">Why Delni</p>
          <h2 className="section-title" id="why-heading">Built for people who can't afford to compromise.</h2>
          <p className="section-subtitle">You run a business that runs on trust. Your website should do the same.</p>
        </header>

        <div className="benefits-grid">
          {BENEFITS.map((benefit) => (
            <article key={benefit.title} className={`benefit-tile fade-in fade-in-delay-${benefit.delay}`}>
              <span className="benefit-icon" aria-hidden="true">{benefit.icon}</span>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-body">{benefit.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
