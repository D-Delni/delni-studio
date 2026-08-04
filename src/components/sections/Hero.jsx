import LineAnimation from "../LineAnimation.jsx";
import bigLogo from "/assets/delnistudio.svg";
const HERO_CARDS = [
  {
    icon: "</>",
    name: "HTML Focused",
    desc: "A fast, polished online presence built for credibility and discovery.",
    tag: "From $468 setup",
    delay: 1,
  },
  {
    icon: "✦",
    name: "Animated Experience",
    desc: "Fluid, memorable motion that turns visitors into clients at first scroll.",
    tag: "From $968 setup",
    delay: 2,
  },
  {
    icon: "⬡",
    name: "Backend Pro",
    desc: "A fully capable site with portals, data storage, and secure access built in.",
    tag: "From $2,279 setup",
    delay: 3,
  },
];

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading">
      <svg
        className="hero-bg"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="1200" cy="120" r="320" fill="rgba(203,195,227,0.12)" />
        <circle cx="200" cy="550" r="260" fill="rgba(227,217,195,0.14)" />
        <circle cx="700" cy="-60" r="200" fill="rgba(199,199,227,0.10)" />
        <circle cx="1380" cy="500" r="180" fill="rgba(159,152,136,0.07)" />
        <rect
          x="60"
          y="200"
          width="80"
          height="80"
          rx="20"
          fill="rgba(203,195,227,0.15)"
          transform="rotate(15 100 240)"
        />
        <rect
          x="1300"
          y="300"
          width="60"
          height="60"
          rx="14"
          fill="rgba(227,217,195,0.2)"
          transform="rotate(-10 1330 330)"
        />
      </svg>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <div className="hero-canvas-layer">
              <LineAnimation />
            </div>
            <div className="hero-text-inner">
              <div className="hero-logo-wrap"></div>

              <div className="hero-badge" aria-label="Premium web studio">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                >
                  <circle cx="5" cy="5" r="5" fill="#9F9888" />
                </svg>
                Premium Web Studio
              </div>
              <h1 className="hero-title" id="hero-heading">
                Design clean, efficient and reliably
                <em> Crafted for growth.</em>
              </h1>
              <p className="hero-sub">
                <br />
              </p>
              <div className="hero-ctas">
                <a href="#pricing" className="btn btn-primary btn-large">
                  Compare Plans
                </a>
                <a href="#contact" className="btn btn-outline btn-large">
                  Talk to Us
                </a>
              </div>
            </div>
          </div>

          <div className="hero-cards" role="list">
            {HERO_CARDS.map((card) => (
              <article
                key={card.name}
                className={`hero-card fade-in fade-in-delay-${card.delay}`}
                role="listitem"
              >
                <span className="hero-card-icon" aria-hidden="true">
                  {card.icon}
                </span>
                <h2 className="hero-card-name">{card.name}</h2>
                <p className="hero-card-desc">{card.desc}</p>
                <span className="hero-card-tag">{card.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
