const PRODUCT_LINKS = [
  { href: '#models', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#demos', label: 'Demos' },
  { href: '#why', label: 'Why Delni' },
];

const COMPANY_LINKS = [
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Our Process' },
  { href: '#', label: 'Case Studies' },
  { href: '#contact', label: 'Contact' },
];

const LEGAL_LINKS = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Cookie Policy' },
];

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo" aria-label="Delni Studio home">
              <svg className="logo-mark" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="36" height="36" rx="9" fill="#CBC3E3" fillOpacity="0.15" />
                <path d="M10 10h7c4.418 0 8 3.582 8 8s-3.582 8-8 8h-7V10z" stroke="rgba(249,248,252,0.7)" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M17 14h0.5c2.485 0 4.5 1.79 4.5 4s-2.015 4-4.5 4H17V14z" fill="#CBC3E3" fillOpacity="0.4" />
              </svg>
              Delni Studio
            </a>
            <p className="footer-tagline">Premium websites for businesses that lead in their field — built right, maintained right, and delivered on time.</p>
            <div className="footer-socials" aria-label="Social media links">
              <a href="#" className="social-link" aria-label="Delni Studio on GitHub">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </a>
              <a href="#" className="social-link" aria-label="Delni Studio on X (Twitter)">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="social-link" aria-label="Delni Studio on LinkedIn">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-col-title">Product</h3>
            <ul className="footer-links" role="list">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links" role="list">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Legal</h3>
            <ul className="footer-links" role="list">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Delni Studio. All rights reserved.</p>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
