const MODELS = [
  {
    icon: "</>",
    name: "HTML Focused",
    bestFor: "Best for business presence & landing pages",
    features: [
      "Built for fast loading — visitors won't wait",
      "Fully responsive across all devices",
      "Search-engine ready from day one",
      "Accessible for every visitor",
    ],
    stack: ["HTML5", "CSS3"],
    delay: 1,
  },
  {
    icon: "✦",
    name: "Animated Experience",
    bestFor: "Best for product storytelling & marketing",
    features: [
      "Smooth motion that guides attention naturally",
      "Interactive moments that hold visitors longer",
      "Polished transitions between every section",
      "Everything in HTML Focused, elevated",
    ],
    stack: ["HTML5", "CSS3", "JS", "GSAP"],
    delay: 2,
  },
  {
    icon: "⬡",
    name: "Backend Integration",
    bestFor: "Best for client portals & small apps",
    features: [
      "Secure client login & member areas",
      "Data storage for contacts, records, or content",
      "Booking, intake, and enquiry workflows",
      "Everything in Animated Experience, plus more",
    ],
    stack: ["HTML5", "CSS3", "JS", "Node", "PostgreSQL"],
    delay: 3,
  },
];

export default function Models() {
  return (
    <section id="models" aria-labelledby="models-heading">
      <div className="container">
        <header className="section-header fade-in">
          <p className="section-eyebrow">What We Build</p>
          <h2 className="section-title" id="models-heading">
            Three models. One studio.
          </h2>
          <p className="section-subtitle">
            Every Delni site is built from the ground up for your industry — no
            templates, no shortcuts.
          </p>
        </header>

        <div className="models-grid">
          {MODELS.map((model) => (
            <article
              key={model.name}
              className={`model-card fade-in fade-in-delay-${model.delay}`}
            >
              <span className="model-icon" aria-hidden="true">
                {model.icon}
              </span>
              <h3 className="model-name">{model.name}</h3>
              <p className="model-best-for">{model.bestFor}</p>
              <ul
                className="model-features"
                aria-label={`Features of ${model.name} plan`}
              >
                {model.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="model-stack" aria-label="Technologies used">
                {model.stack.map((tech) => (
                  <span key={tech} className="stack-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
