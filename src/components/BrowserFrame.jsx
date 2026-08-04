export default function BrowserFrame({ screenClass, children }) {
  return (
    <>
      <div className="browser-frame" aria-hidden="true">
        <div className="browser-dots">
          <div className="browser-dot"></div>
          <div className="browser-dot"></div>
          <div className="browser-dot"></div>
        </div>
        <div className="browser-url"></div>
      </div>
      <div className={`browser-screen ${screenClass}`} aria-hidden="true">
        <div className="screen-elements">{children}</div>
      </div>
    </>
  );
}
