import { useEffect, useState } from "react";
import logo from "/assets/logo.png";

const NAV_LINKS = [
  { href: "#models", label: "Features" },
  { href: "#pricing", label: "Plans" },
  { href: "#demos", label: "Demos" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = "";
  };

  const toggleDrawer = () => {
    setDrawerOpen((open) => {
      const next = !open;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("hero-animation-restart"));
    if (drawerOpen) closeDrawer();
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <>
      <header id="site-header" role="banner">
        <div className="header-inner">
          <a
            href="#"
            className="logo"
            aria-label="Delni Studio home"
            onClick={handleLogoClick}
          >
            <img src={logo} alt="Delni Studio" className="logo-mark"></img>{" "}
          </a>

          <nav aria-label="Primary navigation">
            <ul className="nav-links" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <div className="nav-ctas">
              <a
                href="#contact"
                className="btn btn-primary"
                aria-label="Get started with Delni Studio"
              >
                Try it
              </a>
            </div>
          </nav>

          <button
            className="hamburger"
            id="hamburger"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            aria-label="Toggle navigation menu"
            onClick={toggleDrawer}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <nav
        id="mobile-drawer"
        className={`mobile-drawer${drawerOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeDrawer}>
            {link.label}
          </a>
        ))}
        <div className="mobile-ctas">
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ justifyContent: "center" }}
            onClick={closeDrawer}
          >
            Try it
          </a>
        </div>
      </nav>
    </>
  );
}
