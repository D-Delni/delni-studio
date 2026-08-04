# Delni Studio — React Landing Page

A production-ready React + Vite migration of the original static `index1.html`
landing page for Delni Studio. Visually identical to the source, fully
componentized, and ready to deploy to Cloudflare Pages.

## Stack

- React 18 (functional components + hooks)
- Vite 5
- Plain modular CSS (no framework, no Tailwind/Bootstrap)

## Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/
    Navbar.jsx            Sticky header, desktop nav, mobile drawer
    Footer.jsx             Footer with brand, link columns, socials
    BrowserFrame.jsx        Shared "browser mockup" shell used by demo cards
    LineAnimation.jsx       Curved, low-branch line-growth canvas
    sections/
      Hero.jsx               Includes the animation as an integrated
                              background layer (see note below)
      Models.jsx
      Pricing.jsx
      Demos.jsx
      WhyUs.jsx
      FAQ.jsx
      Contact.jsx
  hooks/
    useFadeIn.js            Scroll-reveal via IntersectionObserver
    useSmoothScroll.js       Smooth in-page anchor scrolling (header-aware)
  styles/
    global.css               All page styles, deduplicated from the source
  App.jsx
  main.jsx
```

## Notes

- **LineAnimation, integrated into the Hero background**: a horizontal,
  curved branching line-growth animation drawn directly behind the hero's
  logo, title, and subtitle — not in a separate section. It lives inside
  `.hero-canvas-layer`, which intentionally breaks out beyond the narrow
  `max-width: 700px` text column (up to 1600px wide) so it reads as a
  bigger, integrated backdrop rather than a strip confined to the
  paragraph width, while its height still matches `.hero-text` (logo
  through CTAs) — so it visually spans the gap between "Crafted for
  growth." and "Choose your canvas…". The actual text content sits in
  `.hero-text-inner`, stacked above it with `z-index: 1`.
  Design goals for the animation itself:
  - **Curved, not jagged** — each branch keeps a short trail of points and
    is rendered with quadratic-curve midpoint smoothing, so every stroke
    reads as a soft arc rather than straight zig-zag segments.
  - **Continuously wavy** — each branch's vertical drift follows a slow,
    randomly-phased sine wave, so trunks curve gently on their own even
    before any fork happens — echoing the rounded blob shapes in the
    hero's background SVG.
  - **Ramifies less** — forking is rare, needs more distance between
    forks, and is capped at a low branch count (22) for a calm, sparse
    look rather than a dense thicket of lines.
  - **Smooth forks** — when a branch does fork, the child inherits the
    parent's current direction and eases toward its new angle over time
    instead of snapping to it, so forks look like gentle curls.
  Lines are drawn using the site's own palette (pink-rose, soft-lavender,
  accent, earthy, dark) at reduced opacity, since it now sits directly
  behind readable text and needs to stay a background element, not
  compete with it. It's sized to its container via a `ResizeObserver` and
  starts drawing immediately on mount. Each growth cycle runs once: once
  every branch has grown off the right edge of the canvas, the animation
  stops and the final frame stays static — it does not reseed or loop on
  its own. It replays on two triggers instead:
  1. **Scrolling the hero back into view** — an `IntersectionObserver` on
     the hero `<section>` restarts the animation whenever it re-enters the
     viewport (e.g. scroll down, then back up).
  2. **Clicking the header logo / home link** — `Navbar.jsx` dispatches a
     `hero-animation-restart` custom `window` event on click (and smooth-
     scrolls to the top), which `LineAnimation` listens for and always
     restarts on, even if the hero was already in view.
  To move it elsewhere, mount `<LineAnimation />` as the first child of any
  `position: relative` container — it fills whatever it's placed in.
- All copy, pricing, FAQ content, and structure are preserved exactly from
  the source HTML. Accessibility attributes (aria-labels, roles, heading
  hierarchy) and SEO meta tags are preserved.
- Fonts (`Playfair Display`, `Inter`) are loaded from Google Fonts, matching
  the original `<link>` tags.

## Deploying to Cloudflare Pages

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- No environment variables or additional configuration required.
