import { useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  OFFERS_PAGE_URL,
  PATCH_TEST_PDF_URL,
  PRICE_LIST_URL,
  WHATSAPP_URL,
  contact,
  extras,
  gallery,
  instagram,
  media,
  offers,
  reviews,
  social,
} from '../data'
import {
  Ext,
  MenuIcon,
  MobileBook,
  Scroller,
  Skip,
  Stars,
  VersionBar,
  onSamePage,
  SocialRow,
  useBodyLock,
  useSection,
} from '../ui'
import { LegalArticle, readLegalParam } from '../legal'

const sections = ['top', 'services', 'offers', 'reviews', 'visit'] as const

const nav = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#offers', label: 'Offers' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit' },
]

const ranges = [
  { href: '#services', title: 'Cut & style', src: gallery[5].src, alt: gallery[5].alt },
  { href: '#services', title: 'Colour', src: gallery[1].src, alt: gallery[1].alt },
  { href: '#services', title: 'Highlights', src: gallery[0].src, alt: gallery[0].alt },
  { href: '#offers', title: 'Offers', src: offers[0].src, alt: offers[0].alt },
  { href: '#visit', title: 'Visit us', src: media.salon, alt: 'The salon at Dickens Yard' },
  { href: '#reviews', title: 'Reviews', src: reviews[0].photo, alt: 'The salon at Dickens Yard' },
]

const popular = [
  { src: gallery[0].src, alt: gallery[0].alt, title: 'Highlights & balayage', detail: 'Foils, balayage, and foiliage with toner.', from: 'From £64' },
  { src: gallery[5].src, alt: gallery[5].alt, title: 'Wash, cut & style', detail: 'Ladies cut with a stylist or a senior.', from: 'From £58' },
  { src: gallery[1].src, alt: gallery[1].alt, title: 'Colour', detail: 'Roots, full head, and Illumina.', from: 'From £75' },
  { src: gallery[4].src, alt: gallery[4].alt, title: 'Blow-dry', detail: 'A polished finish for the week or the weekend.', from: 'From £41' },
  { src: gallery[2].src, alt: gallery[2].alt, title: 'Treatments', detail: 'Nashi fillers and K2.0 moisture.', from: 'From £33' },
  { src: gallery[3].src, alt: gallery[3].alt, title: 'Aura smoothing', detail: 'Formaldehyde-free Brazilian blow-dry.', from: 'From £117' },
]

const tiles = [
  { href: '#services', title: 'Cut & styling', src: media.cut, copy: 'Wash, cut and style from £58.' },
  { href: '#offers', title: 'Colour', src: media.colour, copy: 'Tuesday and Thursday colour offers.' },
  { href: '#visit', title: 'Dickens Yard', src: media.salon, copy: 'Two minutes from Ealing Broadway.' },
]

const facts = [
  'Japanese-inspired salon',
  '5 Dickens Yard, W5 2TD',
  'Two minutes from Ealing Broadway',
  'Tue–Fri 10–8 · Sat 9–6',
]

export default function Hairlust() {
  const legal = readLegalParam()
  const home = `${import.meta.env.BASE_URL}?v=hairlust`
  const [menuOpen, setMenuOpen] = useState(false)
  const current = useSection(sections)
  useBodyLock(menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="hl">
      <VersionBar current="hairlust" />
      <Skip />
      <div className="hl-announce">
        <Ext href={OFFERS_PAGE_URL}>
          Colour Tuesdays · 50% off your most expensive colour, with a full-priced wash, cut and blow-dry
        </Ext>
      </div>
      <header className={`hl-header${menuOpen ? ' open' : ''}`}>
        <div className="wrap hl-bar">
          <button
            className="hl-menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
            <span>Menu</span>
          </button>
          <a className="hl-logo" href={legal ? home : '#top'} onClick={legal ? closeMenu : onSamePage('#top', closeMenu)}>
            <img src={media.wordmark} alt="Yuzu Hair & Beauty" width={400} height={136} />
          </a>
          <nav className="hl-nav" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={legal ? `${home}${item.href}` : item.href}
                onClick={legal ? closeMenu : onSamePage(item.href, closeMenu)}
                aria-current={!legal && current === item.href.slice(1) ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hl-tools">
            <Ext className="hl-tool" href={social.instagram}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
              </svg>
              <span className="vh">Instagram</span>
            </Ext>
            <Ext className="btn hl-book" href={BOOKING_URL}>
              Book
            </Ext>
          </div>
        </div>
        {menuOpen ? (
          <div className="hl-drawer" role="dialog" aria-label="Menu">
            {nav.map((item) => (
              <a
                key={item.href}
                href={legal ? `${home}${item.href}` : item.href}
                onClick={legal ? closeMenu : onSamePage(item.href, closeMenu)}
                aria-current={!legal && current === item.href.slice(1) ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
            <Ext href={BOOKING_URL}>Book on Phorest</Ext>
            <Ext href={PRICE_LIST_URL}>Price list</Ext>
            <Ext href={PATCH_TEST_PDF_URL}>Patch testing</Ext>
          </div>
        ) : null}
      </header>

      {legal ? (
        <main id="main" className="round-section">
          <div className="wrap">
            <a className="round-back" href={home}>
              ← Home
            </a>
            <LegalArticle kind={legal} />
          </div>
        </main>
      ) : (
      <main id="main">
        <section className="hl-hero" id="top" aria-labelledby="hl-hero-title">
          <img
            src={media.hairlustHero}
            alt="Brunette waves, photographed at Yuzu Hair & Beauty"
            width={1080}
            height={1141}
            fetchPriority="high"
          />
          <div className="hl-hero-copy">
            <h1 id="hl-hero-title">Cut, colour, and care.</h1>
            <p>
              Japanese-inspired hairdressing at Dickens Yard, two minutes from Ealing Broadway.
              Precision cuts, colour, balayage, and formaldehyde-free smoothing.
            </p>
            <Ext className="btn btn-book hl-cta" href={BOOKING_URL}>
              Book your chair
            </Ext>
          </div>
        </section>

        <section className="hl-ranges" aria-label="Browse services">
          <div className="wrap">
            <Scroller label="services">
              {ranges.map((item) => (
                <a key={item.title} className="hl-range" href={item.href} onClick={onSamePage(item.href)}>
                  <img src={item.src} alt={item.alt} />
                  <span>{item.title}</span>
                </a>
              ))}
            </Scroller>
          </div>
        </section>

        <ul className="hl-facts wrap">
          {facts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <section className="hl-section" id="services">
          <div className="wrap">
            <div className="section-head hl-head">
              <h2>Popular services</h2>
              <p>Cuts, colour, and treatments guests rebook. Prices are the 2025 stylist menu.</p>
              <Ext className="btn hl-stroke" href={PRICE_LIST_URL}>
                Full price list
              </Ext>
            </div>
            <Scroller label="popular services">
              {popular.map((item) => (
                <article key={item.title} className="hl-card">
                  <img src={item.src} alt={item.alt} />
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <p className="hl-from">{item.from}</p>
                  <Ext className="btn btn-book hl-dark" href={BOOKING_URL}>
                    Book
                  </Ext>
                </article>
              ))}
            </Scroller>
          </div>
        </section>

        <section className="wrap hl-tiles" aria-label="Find a service">
          {tiles.map((item) => (
            <a key={item.title} className="hl-tile" href={item.href} onClick={onSamePage(item.href)}>
              <img src={item.src} alt="" />
              <span>
                <strong>{item.title}</strong>
                <em>{item.copy}</em>
              </span>
            </a>
          ))}
        </section>

        <section className="hl-patch">
          <div className="wrap hl-patch-inner">
            <div>
              <h2>New to colour here?</h2>
              <p>
                Colour services need a mandatory patch test, including for existing guests, at least
                48 hours before the appointment. Book the test and the chair together.
              </p>
              <Ext className="btn hl-dark" href={PATCH_TEST_PDF_URL}>
                Patch testing notes
              </Ext>
            </div>
            <img src={gallery[1].src} alt={gallery[1].alt} width={567} height={567} />
          </div>
        </section>

        <section className="hl-section" id="reviews">
          <div className="wrap">
            <div className="section-head hl-head">
              <p className="kicker">Trusted by you</p>
              <h2>From the chair at Dickens Yard</h2>
              <Ext href={GOOGLE_REVIEWS_URL}>Read Google reviews</Ext>
            </div>
            <ul className="hl-reviews">
              {reviews.map((item) => (
                <li key={item.name}>
                  <img src={item.photo} alt="The salon at Dickens Yard" width={590} height={332} />
                  <blockquote>
                    <Stars />
                    <p>“{item.quote}”</p>
                    <p>{item.body}</p>
                    <cite>{item.name}</cite>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="hl-section" id="offers">
          <div className="wrap">
            <div className="section-head hl-head">
              <h2>Weekday offers</h2>
              <p>Colour and smoothing through the week, plus credit when a friend completes a first visit.</p>
              <Ext className="btn hl-stroke" href={OFFERS_PAGE_URL}>
                Exclusive offers
              </Ext>
            </div>
            <ul className="hl-offer-grid">
              {offers.map((item) => (
                <li key={item.id}>
                  <img src={item.src} alt={item.alt} width={1024} height={1024} />
                  <p className="kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
            <ul className="hl-extras">
              {extras.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="hl-ig" aria-labelledby="hl-ig-title">
          <div className="wrap">
            <div className="hl-ig-head">
              <h2 id="hl-ig-title">Follow along</h2>
              <SocialRow />
            </div>
            <ul className="hl-ig-grid">
              {instagram.feed.slice(0, 8).map((item) => (
                <li key={item.href}>
                  <Ext href={item.href}>
                    <img src={item.src} alt={item.label} />
                  </Ext>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="hl-visit" id="visit">
          <div className="wrap hl-visit-grid">
            <div>
              <p className="kicker">Visit</p>
              <h2>Come in from Ealing Broadway.</h2>
              <p>
                {contact.addressLines.join(', ')}. Tuesday–Friday 10am–8pm, Saturday 9am–6pm.
                Monday and Sunday closed.
              </p>
            </div>
            <div className="hl-visit-actions">
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <ul className="hours">
                {contact.hours.map((item) => (
                  <li key={item.days}>
                    <span>{item.days}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
              <div className="round-actions">
                <Ext className="btn btn-book hl-dark" href={BOOKING_URL}>
                  Book on Phorest
                </Ext>
                <Ext className="btn hl-stroke" href={MAPS_DIRECTIONS_URL}>
                  Directions
                </Ext>
                <Ext className="btn hl-stroke" href={WHATSAPP_URL}>
                  WhatsApp
                </Ext>
              </div>
            </div>
          </div>
        </section>
      </main>
      )}

      <footer className="hl-footer">
        <div className="wrap hl-footer-grid">
          <div>
            <h2>Visit</h2>
            {contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
          </div>
          <div>
            <h2>Book</h2>
            <Ext href={BOOKING_URL}>Phorest</Ext>
            <Ext href={PRICE_LIST_URL}>2025 price list</Ext>
            <Ext href={PATCH_TEST_PDF_URL}>Patch testing</Ext>
            <Ext href={OFFERS_PAGE_URL}>Exclusive offers</Ext>
            <Ext href={MAPS_DIRECTIONS_URL}>Get directions</Ext>
          </div>
          <div>
            <h2>Follow</h2>
            <SocialRow />
          </div>
        </div>
        <div className="wrap hl-legal">
          <p>
            © {new Date().getFullYear()} Yuzu Hair &amp; Beauty · Dickens Yard, Ealing
            {' · '}
            <a href={`${home}&p=terms`}>Terms</a>
            {' · '}
            <a href={`${home}&p=privacy`}>Privacy</a>
          </p>
        </div>
      </footer>
      <MobileBook href={BOOKING_URL} />
    </div>
  )
}
