const features = [
  { icon: "accounts", title: "Multiple Gmail accounts", copy: "Keep work and personal inboxes signed in, then switch in one click." },
  { icon: "apps", title: "Google apps, all in one", copy: "Open Gmail, Calendar, Tasks, Drive, Docs, Sheets, and Slides in one Mac app." },
  { icon: "paperclip", title: "Attachments in one place", copy: "Find messages with attachments or large files without digging through your inbox." },
  { icon: "download", title: "Downloads, organized", copy: "Track download progress and reveal saved files instantly in Finder." },
  { icon: "print", title: "Print or save as PDF", copy: "Use the familiar macOS print panel to print complete emails or archive them as PDF." },
  { icon: "theme", title: "Light and dark modes", copy: "Follow your Mac automatically or choose the appearance that works for you." },
  { icon: "lock", title: "App lock", copy: "Lock your inbox when you step away, then unlock with Touch ID or your Mac password." },
  { icon: "menubar", title: "Menu bar access", copy: "See unread mail and jump straight to composing, attachments, or important messages." },
];

function FeatureIcon({ name }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    accounts: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    apps: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
    paperclip: <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/></>,
    print: <><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></>,
    theme: <><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18Z"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    menubar: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 9h18M7 7h.01M10 7h.01"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function WindowStack() {
  return (
    <div className="window-stage" aria-label="Desktop for Gmail shown with Gmail, Calendar and Google Slides">
      <div className="window-card window-card--calendar"><img src="/assets/calendar-window.webp" alt="Calendar inside the Mac app" /></div>
      <div className="window-card window-card--office"><img src="/assets/office-window.webp" alt="Google Slides inside the Mac app" /></div>
      <div className="window-card window-card--mail"><img src="/assets/mail-window.webp" alt="Gmail and Tasks together inside the Mac app" /></div>
    </div>
  );
}

export function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Desktop for Gmail home">
          <img src="/assets/app-icon.png" alt="" />
          <span>Desktop for Gmail</span>
        </a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="mailto:support@byteapps.studio">Support</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="eyebrow"><span /> Made for macOS</div>
          <h1 id="hero-title">Google work,<br />one Mac window.</h1>
          <p className="hero-copy">Gmail, Calendar, Tasks, Drive, Docs, Sheets, and Slides—together in one focused desktop app.</p>
          <div className="hero-actions">
            <span className="store-button" aria-label="Coming soon on the Mac App Store">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 12.8c0-2.6 2.1-3.9 2.2-4-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1 1-3.9 1-.8 0-2-1-3.3-1-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.8-1.1-2.8-3.8ZM14.1 5.1c.7-.9 1.2-2.1 1.1-3.3-1.1.1-2.4.7-3.2 1.6-.7.8-1.3 2-1.2 3.2 1.2.1 2.5-.6 3.3-1.5Z"/></svg>
              <span><small>Coming soon on the</small>Mac App Store</span>
            </span>
            <a className="text-link" href="mailto:support@byteapps.studio">Contact support <span aria-hidden="true">↗</span></a>
          </div>
          <WindowStack />
        </section>

        <section className="features" id="features" aria-labelledby="features-title">
          <div className="section-heading">
            <p className="kicker">Everything together</p>
            <h2 id="features-title">Less switching. More getting things done.</h2>
            <p>Stay close to your inbox and the Google tools you already use—without filling your Dock or losing your place.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon"><FeatureIcon name={feature.icon} /></div>
                <div><h3>{feature.title}</h3><p>{feature.copy}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <img src="/assets/app-icon.png" alt="Desktop for Gmail app icon" />
          <div><p className="kicker">Desktop for Gmail</p><h2 id="closing-title">Your Google day, neatly in one place.</h2></div>
          <a href="mailto:support@byteapps.studio">Questions? Email us</a>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><img src="/assets/app-icon.png" alt="" /><span>Desktop for Gmail</span></div>
        <div className="footer-links" aria-label="Legal and support links">
          <a href="mailto:support@byteapps.studio">Support</a>
          <a href="https://byteapps.super.site/desktop-for-gmail/privacy-policy-1" target="_blank" rel="noreferrer">Privacy Policy</a>
          <a href="https://byteapps.super.site/desktop-for-gmail/terms-of-use-1" target="_blank" rel="noreferrer">Terms of Use</a>
          <a href="https://byteapps.super.site/desktop-for-gmail/faq-1" target="_blank" rel="noreferrer">FAQ</a>
        </div>
        <p className="legal-note">Gmail and Google Workspace are trademarks of Google LLC. Desktop for Gmail is not affiliated with Google.</p>
      </footer>
    </div>
  );
}
