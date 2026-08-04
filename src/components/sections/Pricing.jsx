const CheckIcon = () => (
  <span className="check-icon" aria-hidden="true">
    <svg viewBox="0 0 10 10" fill="none">
      <path
        d="M2 5l2.5 2.5L8 3"
        stroke="#8C8C9F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const PLANS = [
  {
    name: "HTML Focused",
    tagline: "The professional foundation every serious business needs online.",
    price: "468",
    monthly: "+ $16/mo ongoing",
    features: [
      "Design & build your full site",
      "Looks great on every device",
      "Basic search engine setup",
      "1 project included",
      "Community support access",
    ],
    featured: false,
    ctaClass: "btn-outline",
    delay: 1,
  },
  {
    name: "Animated Experience",
    tagline: "Your brand in motion — built to impress and built to convert.",
    price: "968",
    monthly: "+ $19/mo ongoing",
    features: [
      "Everything in React + Vite integrations",
      "Signature animations & motion design",
      "Up to 1 project",
      "Priority support response",
      "Basic visitor analytics",
    ],
    featured: true,
    ctaClass: "btn-primary",
    delay: 2,
  },
  {
    name: "Backend Pro",
    tagline: "A fully capable platform for client workflows and growing teams.",
    price: "2,279",
    monthly: "+ $19/mo ongoing",
    features: [
      "Everything in Animated Experience",
      "Hosting-ready backend setup with PostgresSQL",
      "Database storage",
      "Integrations & secure login options",
      "Security audit included",
      "24/7 dedicated support",
    ],
    featured: false,
    ctaClass: "btn-outline",
    delay: 3,
  },
];

const ADDONS = [
  {
    name: "Premium Support",
    desc: "Dedicated advisor, faster response times",
    price: "+$9/mo",
  },
  {
    name: "Security Audit",
    desc: "Full review and hardening of your site",
    price: "+$15/mo",
  },
  {
    name: "Migration Assistance",
    desc: "We move your existing site over, cleanly",
    price: "+$20 one-time",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <header className="section-header fade-in">
          <p className="section-eyebrow">Investment</p>
          <h2 className="section-title" id="pricing-heading">
            Transparent, all-inclusive pricing.
          </h2>
          <p className="section-subtitle">
            One setup fee to build it right. A small monthly retainer to keep it
            that way.
          </p>
        </header>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card${plan.featured ? " featured" : ""} fade-in fade-in-delay-${plan.delay}`}
              aria-label={plan.featured ? "Most popular plan" : undefined}
            >
              {plan.featured && (
                <div className="pricing-badge" aria-hidden="true">
                  Most Popular
                </div>
              )}
              <h3 className="pricing-plan-name">{plan.name}</h3>
              <p className="pricing-tagline">{plan.tagline}</p>
              <div className="pricing-amount">
                <div
                  className="pricing-setup"
                  aria-label={`Setup fee: $${plan.price} one time`}
                >
                  <span className="price-currency" aria-hidden="true">
                    $
                  </span>
                  <span className="price-value">{plan.price}</span>
                  <span className="price-label" aria-hidden="true">
                    &nbsp;one-time setup
                  </span>
                </div>
              </div>
              <p className="price-monthly">{plan.monthly}</p>
              <div className="pricing-divider" role="separator"></div>
              <ul className="pricing-features" aria-label="Included features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${plan.ctaClass} pricing-cta`}
                aria-label={`Get started with ${plan.name} plan`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>

        <aside
          className="addons-section fade-in"
          aria-labelledby="addons-heading"
        >
          <h3 className="addons-title" id="addons-heading">
            Optional Add-ons
          </h3>
          <p className="addons-sub">
            Extend your site at any time. All add-ons can be added after your
            initial setup.
          </p>
          <div className="addons-grid">
            {ADDONS.map((addon) => (
              <div key={addon.name} className="addon-item">
                <div>
                  <p className="addon-name">{addon.name}</p>
                  <p className="addon-desc">{addon.desc}</p>
                </div>
                <span className="addon-price">{addon.price}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
