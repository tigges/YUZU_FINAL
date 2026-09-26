import { useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  OFFERS_PAGE_URL,
  PATCH_TEST_PDF_URL,
  PRICE_LIST_URL,
  contact,
  gallery,
  media,
  offers,
  priceGroups,
  reviews,
  services,
} from '../data'
import { Ext, MenuIcon, MobileBook, Skip, Stars, VersionBar, onSamePage, useBodyLock, useSection } from '../ui'
import './japanese.css'

const sections = ['top', 'gallery', 'services', 'offers', 'visit'] as const

const nav = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'Services' },
  { href: '#offers', label: 'Offers' },
  { href: '#visit', label: 'Visit' },
]

export default function Japanese() {
  const [menuOpen, setMenuOpen] = useState(false)
  const current = useSection(sections)
  useBodyLock(menuOpen)
  const close = () => setMenuOpen(false)

  return (
    <div className="jp">
      <VersionBar current="japanese" />
      <Skip />
      <header className={`jp-header${menuOpen ? ' open' : ''}`}>
        <div className="wrap jp-header-inner">
          <a className="jp-brand" href="#top" onClick={onSamePage('#top', close)}>
            <span className="jp-seal" aria-hidden="true">柚</span>
            <span>
              <strong>YUZU</strong>
              <em>Hair &amp; Beauty</em>
            </span>
          </a>
          <nav className="jp-nav" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onSamePage(item.href, close)}
                aria-current={current === item.href.slice(1) ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
            <Ext className="jp-book" href={BOOKING_URL}>Book</Ext>
          </nav>
          <button
            className="jp-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="jp-hero" id="top">
          <p className="jp-vertical" lang="ja">丁寧に、整える</p>
          <div className="jp-hero-card">
            <div className="jp-hero-copy">
              <p className="jp-kicker" lang="ja">柚子 · Dickens Yard</p>
              <h1>Hair, finished with care.</h1>
              <p>
                A Japanese-inspired salon at 5 Dickens Yard, two minutes from Ealing Broadway.
                Cuts, colour, and smoothing, with time enough for the consultation.
              </p>
              <div className="jp-actions">
                <Ext className="jp-book" href={BOOKING_URL}>Book your appointment</Ext>
                <a className="jp-quiet" href="#services" onClick={onSamePage('#services')}>Services</a>
              </div>
            </div>
            <figure>
              <img
                src={media.hero}
                alt="Wavy brunette hair, photographed at Yuzu Hair & Beauty"
                width={1920}
                height={660}
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <p className="wrap jp-note">
          Colour guests, including existing clients, need a patch test at least 48 hours before.{' '}
          <Ext href={PATCH_TEST_PDF_URL}>Patch testing notes</Ext>
        </p>

        <section className="jp-section" id="gallery">
          <div className="wrap">
            <header className="jp-head">
              <p className="jp-kicker">六つの仕上がり</p>
              <h2>From the chair</h2>
            </header>
            <ul className="jp-gallery">
              {gallery.map((item) => (
                <li key={item.src}>
                  <img src={item.src} alt={item.alt} width={567} height={567} />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="jp-section" id="services">
          <div className="wrap">
            <header className="jp-head">
              <p className="jp-kicker">メニュー</p>
              <h2>Services</h2>
              <p>Starting prices from the 2025 menu. Long hair and colour correction are quoted.</p>
            </header>
            <ul className="jp-services">
              {services.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <p className="jp-from">From <strong>{item.from}</strong></p>
                </li>
              ))}
            </ul>
            <div className="jp-prices">
              {priceGroups.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.rows.slice(0, 4).map((row) => (
                      <li key={row.name}>
                        <span>{row.name}</span>
                        <span>{row.stylist === '—' ? row.senior : row.stylist}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Ext className="jp-quiet" href={PRICE_LIST_URL}>Full 2025 price list</Ext>
          </div>
        </section>

        <section className="jp-section" id="offers">
          <div className="wrap">
            <header className="jp-head">
              <p className="jp-kicker">今週</p>
              <h2>Weekday offers</h2>
            </header>
            <ul className="jp-offers">
              {offers.map((item) => (
                <li key={item.id}>
                  <Ext href={OFFERS_PAGE_URL}>
                    <img src={item.src} alt={item.alt} width={1024} height={1024} />
                    <span className="jp-kicker">{item.kicker}</span>
                    <strong>{item.title}</strong>
                    <em>{item.detail}</em>
                  </Ext>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="jp-section" id="reviews">
          <div className="wrap">
            <header className="jp-head">
              <p className="jp-kicker">お客様の声</p>
              <h2>From Google</h2>
            </header>
            <ul className="jp-reviews">
              {reviews.map((item) => (
                <li key={item.name}>
                  <Stars />
                  <h3>“{item.quote}”</h3>
                  <p>{item.body}</p>
                  <Ext href={GOOGLE_REVIEWS_URL}>{item.name}</Ext>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="jp-visit" id="visit">
          <div className="wrap jp-visit-grid">
            <div>
              <p className="jp-kicker">ご来店</p>
              <h2>Dickens Yard</h2>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p>
                <Ext href={MAPS_DIRECTIONS_URL}>Directions</Ext>
              </p>
              <Ext className="jp-book" href={BOOKING_URL}>Book on Phorest</Ext>
            </div>
            <ul className="hours">
              {contact.hours.map((item) => (
                <li key={item.days}>
                  <span>{item.days}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
            <figure className="jp-portrait">
              <img src={media.portrait} alt="Line portrait from the Yuzu price list" width={407} height={460} />
            </figure>
          </div>
          <div className="wrap jp-map">
            <iframe title="Map of Yuzu Hair & Beauty, 5 Dickens Yard, Ealing" src={MAPS_EMBED_URL} loading="lazy" />
          </div>
        </section>
      </main>

      <footer className="jp-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty</span>
          <span>{contact.addressLines.join(', ')}</span>
        </div>
      </footer>
      <MobileBook href={BOOKING_URL} />
    </div>
  )
}
