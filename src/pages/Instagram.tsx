import { useState } from 'react'
import {
  BOOKING_URL,
  MAPS_DIRECTIONS_URL,
  OFFERS_PAGE_URL,
  contact,
  instagram,
  offers,
  services,
  social,
} from '../data'
import {
  Ext,
  MenuIcon,
  MobileBook,
  Skip,
  SocialRow,
  VersionBar,
  onSamePage,
  useBodyLock,
  useSection,
} from '../ui'

const sections = ['top', 'feed', 'work', 'offers', 'visit'] as const
const filters = [
  { id: 'all', label: 'All' },
  { id: 'offers', label: 'Offers' },
  { id: 'colour', label: 'Colour' },
  { id: 'salon', label: 'Salon' },
] as const

type FilterId = (typeof filters)[number]['id']

const nav = [
  { href: '#feed', label: 'Feed' },
  { href: '#work', label: 'Work' },
  { href: '#offers', label: 'Offers' },
  { href: '#visit', label: 'Visit' },
]

export default function Instagram() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<FilterId>('all')
  const current = useSection(sections)
  useBodyLock(menuOpen)
  const closeMenu = () => setMenuOpen(false)
  const posts = instagram.feed.filter((item) => filter === 'all' || item.group === filter)

  return (
    <div className="ig">
      <VersionBar current="instagram" />
      <Skip />
      <header className={`ig-header${menuOpen ? ' open' : ''}`}>
        <div className="wrap ig-header-inner">
          <a className="ig-logo" href="#top" onClick={onSamePage('#top', closeMenu)}>
            <img src={instagram.profile} alt="" width={320} height={320} />
            <span>
              <strong>YUZU</strong>
              <em>Hair</em>
            </span>
          </a>
          <nav className="ig-nav" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onSamePage(item.href, closeMenu)}
                aria-current={current === item.href.slice(1) ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
            <Ext className="btn btn-sage" href={BOOKING_URL}>
              Book
            </Ext>
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="ig-hero wrap" id="top">
          <div className="ig-hero-copy">
            <p className="kicker">{instagram.handle}</p>
            <h1>Colour that looks like the chair.</h1>
            <p>
              Welcome to YUZU Hair. Unit 5, Dickens Yard, Ealing, W5 2TD. Tuesday–Friday 10am–8pm,
              Saturday 9am–6pm. Sunday and Monday closed.
            </p>
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
            <div className="round-actions">
              <Ext className="btn btn-sage" href={BOOKING_URL}>
                Book your appointment
              </Ext>
              <Ext className="btn btn-ghost" href={social.instagram}>
                Follow
              </Ext>
            </div>
          </div>
          <figure className="ig-hero-photo">
            <img
              src={instagram.featured[1].src}
              alt={instagram.featured[1].alt}
              width={1080}
              height={1137}
              fetchPriority="high"
            />
          </figure>
        </section>

        <section className="ig-feed" id="feed">
          <div className="wrap">
            <div className="ig-feed-bar">
              <h2>The feed</h2>
              <div className="filters" role="toolbar" aria-label="Filter posts">
                {filters.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={filter === item.id}
                    onClick={() => setFilter(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <ul className="ig-grid">
              {posts.map((item) => (
                <li key={item.href}>
                  <Ext href={item.href}>
                    <img src={item.src} alt="" />
                    <span>
                      {item.kind === 'reel' ? 'Reel · ' : item.kind === 'carousel' ? 'Carousel · ' : ''}
                      {item.label}
                    </span>
                  </Ext>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ig-work wrap" id="work">
          <div className="section-head">
            <p className="kicker">Portfolio</p>
            <h2>Shot in the Dickens Yard room.</h2>
            <p>A copper balayage on the same client, then the blonde that sits beside it in the feed.</p>
          </div>
          <div className="ig-pair">
            {instagram.featured.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} width={1080} height={1137} />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="ig-pair ig-pair-quiet">
            {instagram.blonde.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} width={1080} height={1080} />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="ig-offers wrap" id="offers">
          <div className="section-head">
            <h2>Weekday offers</h2>
            <p>The blossom graphics from the grid, with the terms written beside them.</p>
          </div>
          <ul className="ig-offer-grid">
            {offers.map((item) => (
              <li key={item.id}>
                <img src={item.src} alt={item.alt} width={1024} height={1024} />
                <div>
                  <p className="kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <Ext href={OFFERS_PAGE_URL}>Offer details</Ext>
                </div>
              </li>
            ))}
          </ul>
          <ul className="ig-services">
            {services.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>From {item.from}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="ig-visit" id="visit">
          <div className="wrap ig-visit-grid">
            <div>
              <p className="kicker">Visit</p>
              <h2>Dickens Yard, a short walk from Ealing Broadway.</h2>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p>
                <Ext href={MAPS_DIRECTIONS_URL}>Get directions</Ext>
              </p>
            </div>
            <ul className="hours">
              {contact.hours.map((item) => (
                <li key={item.days}>
                  <span>{item.days}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="ig-visit-cta">
              <Ext className="btn btn-cream" href={BOOKING_URL}>
                Book your appointment
              </Ext>
              <SocialRow />
            </div>
          </div>
        </section>
      </main>

      <footer className="ig-footer">
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} Yuzu Hair &amp; Beauty
          </span>
          <Ext href={social.instagram}>{instagram.handle}</Ext>
        </div>
      </footer>
      <MobileBook href={BOOKING_URL} />
    </div>
  )
}
