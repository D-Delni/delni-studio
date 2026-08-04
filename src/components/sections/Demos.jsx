import BrowserFrame from '../BrowserFrame.jsx';

export default function Demos() {
  return (
    <section id="demos" aria-labelledby="demos-heading">
      <div className="container">
        <header className="section-header fade-in">
          <p className="section-eyebrow">Live Previews</p>
          <h2 className="section-title" id="demos-heading">See what your site could look like.</h2>
          <p className="section-subtitle">Three distinct approaches. Each one built to reflect the brand behind it.</p>
        </header>

        <div className="demos-grid">
          {/* HTML Focused */}
          <article className="demo-card fade-in fade-in-delay-1">
            <BrowserFrame screenClass="browser-screen-1">
              <div className="screen-bar screen-bar-short" style={{ height: '14px', background: 'rgba(203,195,227,0.5)' }}></div>
              <div className="screen-bar screen-bar-shorter" style={{ height: '8px' }}></div>
              <div className="screen-blocks">
                <div className="screen-block"></div>
                <div className="screen-block screen-block-accent"></div>
                <div className="screen-block"></div>
              </div>
              <div className="screen-bar" style={{ height: '6px', width: '80%' }}></div>
              <div className="screen-bar" style={{ height: '6px', width: '65%' }}></div>
            </BrowserFrame>
            <div className="demo-info">
              <p className="demo-label">HTML Focused</p>
              <h3 className="demo-tagline">Clean, credible, and fast — a presence that speaks for itself.</h3>
              <a href="#contact" className="demo-link" aria-label="Request HTML Focused demo">
                Open Demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </article>

          {/* Animated Experience */}
          <article className="demo-card fade-in fade-in-delay-2">
            <BrowserFrame screenClass="browser-screen-2">
              <div className="screen-circle"></div>
              <div className="screen-bar" style={{ height: '16px', width: '60%', background: 'rgba(203,195,227,0.6)' }}></div>
              <div className="screen-lines">
                <div className="screen-line" style={{ width: '90%' }}></div>
                <div className="screen-line" style={{ width: '75%' }}></div>
                <div className="screen-line" style={{ width: '55%' }}></div>
              </div>
              <div className="screen-bar" style={{ height: '32px', width: '130px', borderRadius: '8px', background: 'rgba(203,195,227,0.5)', marginTop: '4px' }}></div>
            </BrowserFrame>
            <div className="demo-info">
              <p className="demo-label">Animated Experience</p>
              <h3 className="demo-tagline">Motion that pulls people in — and keeps them there.</h3>
              <a href="#contact" className="demo-link" aria-label="Request Animated Experience demo">
                Open Demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </article>

          {/* Backend Pro */}
          <article className="demo-card fade-in fade-in-delay-3">
            <BrowserFrame screenClass="browser-screen-3">
              <div className="screen-blocks" style={{ gap: '6px' }}>
                <div className="screen-block" style={{ height: '160px', maxWidth: '60px', borderRadius: '8px', background: 'rgba(140,140,159,0.15)' }}></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div className="screen-bar" style={{ height: '10px', width: '80%', background: 'rgba(203,195,227,0.45)' }}></div>
                  <div className="screen-bar" style={{ height: '7px', width: '60%' }}></div>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                    <div style={{ height: '40px', flex: 1, borderRadius: '6px', background: 'rgba(227,217,195,0.4)' }}></div>
                    <div style={{ height: '40px', flex: 1, borderRadius: '6px', background: 'rgba(203,195,227,0.3)' }}></div>
                  </div>
                  <div className="screen-bar" style={{ height: '6px', width: '85%' }}></div>
                  <div className="screen-bar" style={{ height: '6px', width: '70%' }}></div>
                </div>
              </div>
            </BrowserFrame>
            <div className="demo-info">
              <p className="demo-label">Backend Pro</p>
              <h3 className="demo-tagline">A full platform — portals, data, and workflows — in your brand.</h3>
              <a href="#contact" className="demo-link" aria-label="Request Backend Pro demo">
                Open Demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
