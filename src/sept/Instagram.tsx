import { BOOKING_URL, contact, instagram, social } from '../data'
import { versionUrl } from '../versions'
import { SocialLinks } from './SocialLinks'

function ReelBadge() {
  return (
    <span className="ig-badge" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5.5v13l11-6.5L8 5.5Z" />
      </svg>
    </span>
  )
}

function CarouselBadge() {
  return (
    <span className="ig-badge" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="6" width="12" height="12" rx="1.5" />
        <path d="M18 8.5V16a2 2 0 0 1-2 2h-8" />
      </svg>
    </span>
  )
}

export default function Instagram() {
  return (
    <div className="ig">
      <header className="ig-header">
        <div className="wrap ig-header-inner">
          <a className="ig-logo" href={social.instagram} target="_blank" rel="noreferrer">
            <img src={instagram.profile} alt="" />
            <span>
              <strong>YUZU</strong>
              <em>Hair</em>
            </span>
          </a>
          <nav className="ig-nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#feed">Feed</a>
            <a href="#visit">Visit</a>
            <a className="btn ig-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="ig-profile wrap" aria-label="Instagram profile">
          <img className="ig-avatar" src={instagram.profile} alt="YUZU Hair wordmark" />
          <div>
            <div className="ig-handle-row">
              <h1>{instagram.handle}</h1>
              <a className="btn ig-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book
              </a>
              <a className="btn ig-ghost" href={social.instagram} target="_blank" rel="noreferrer">
                Follow
              </a>
            </div>
            <ul className="ig-stats">
              <li>
                <strong>{instagram.posts}</strong> posts
              </li>
              <li>
                <strong>{instagram.followers}</strong> followers
              </li>
              <li>
                <strong>{instagram.following}</strong> following
              </li>
            </ul>
            <p className="ig-name">{instagram.name}</p>
            <p className="ig-bio">
              Welcome to YUZU Hair 🌿
              <br />
              Unit 5, Dickens Yard, Ealing, W5 2TD
              <br />
              Tue–Fri 10am–8pm · Sat 9am–6pm · Sun–Mon closed
            </p>
            <div className="ig-highlights">
              {instagram.highlights.map((item) => (
                <div className="ig-highlight" key={item.title}>
                  <img src={item.src} alt="" />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ig-feed" id="feed">
          <div className="wrap">
            <div className="ig-grid">
              {instagram.feed.map((item) => (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                  <img src={item.src} alt={item.label} />
                  {item.kind === 'reel' && <ReelBadge />}
                  {item.kind === 'carousel' && <CarouselBadge />}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="ig-work wrap" id="work">
          <div className="ig-work-copy">
            <p className="eyebrow">Portfolio Hair</p>
            <h2>Colour that photographs like the chair.</h2>
            <p>
              The feed is not only graphics. Recent work is shot in the Dickens Yard room: blended
              blonde, copper balayage, before-and-after on the same client.
            </p>
          </div>
          <div className="ig-work-grid">
            {instagram.featured.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="ig-visit" id="visit">
          <div className="wrap ig-visit-grid">
            <div>
              <p className="eyebrow">Visit</p>
              <h2>Dickens Yard, a short walk from Ealing Broadway.</h2>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
            </div>
            <ul className="ig-hours">
              {contact.hours.map((item) => (
                <li key={item.days}>
                  <span>{item.days}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="ig-visit-cta">
              <a className="btn ig-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book your appointment
              </a>
              <SocialLinks />
            </div>
          </div>
        </section>
      </main>

      <footer className="ig-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty</span>
          <SocialLinks />
          <p>
            <a href={`${versionUrl('instagram-sept')}&p=terms`}>Terms</a>
            {' · '}
            <a href={`${versionUrl('instagram-sept')}&p=privacy`}>Privacy</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
