import { useCallback, useEffect, useRef, useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  OFFERS_PAGE_URL,
  PATCH_TEST_PDF_URL,
  PRICE_LIST_URL,
  WHATSAPP_URL,
  contact,
  extras,
  faqs,
  gallery,
  media,
  offers,
  priceGroups,
  reviews,
  services,
  treatments,
} from '../data'
import {
  Ext,
  MenuIcon,
  MobileBook,
  Skip,
  SocialRow,
  Stars,
  VersionBar,
  onSamePage,
  useBodyLock,
  useSection,
} from '../ui'

const sections = ['top', 'gallery', 'services', 'offers', 'prices', 'visit'] as const

const nav = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'Services' },
  { href: '#offers', label: 'Offers' },
  { href: '#prices', label: 'Prices' },
  { href: '#visit', label: 'Visit' },
]

export default function Round() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)
  const current = useSection(sections)
  useBodyLock(menuOpen || active !== null)

  const closeMenu = () => setMenuOpen(false)
  const closeLightbox = useCallback(() => setActive(null), [])
  const step = useCallback(
    (dir: number) => {
      setActive((value) => {
        if (value === null) return value
        return (value + dir + gallery.length) % gallery.length
      })
    },
    [],
  )

  useEffect(() => {
    if (active === null) return
    closeBtn.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active, closeLightbox, step])

  return (
    <div className="round">
      <VersionBar current="round" />
      <Skip />
      <header className={`round-header${menuOpen ? ' open' : ''}`}>
        <div className="wrap round-header-inner">
          <a className="round-logo" href="#top" onClick={onSamePage('#top', closeMenu)}>
            <img src={media.logo} alt="Yuzu Hair & Beauty" width={234} height={80} />
          </a>
          <nav className="round-nav" aria-label="Primary">
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
            <Ext className="btn btn-book" href={BOOKING_URL}>
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
        <section className="round-hero" id="top" aria-labelledby="round-hero-title">
          <div className="wrap">
            <img
              className="round-hero-img"
              src={media.hero}
              alt="Wavy brunette hair, photographed in the salon at Yuzu Hair & Beauty, Ealing"
              width={1920}
              height={660}
              fetchPriority="high"
            />
            <div className="round-hero-card">
              <p className="kicker">Dickens Yard · Ealing Broadway</p>
              <h1 id="round-hero-title">Hair, finished with care.</h1>
              <p>
                Japanese-inspired cuts, colour, and smoothing at 5 Dickens Yard — two minutes from
                Ealing Broadway. A consultation first, then a finish you can live with.
              </p>
              <div className="round-actions">
                <Ext className="btn btn-book" href={BOOKING_URL}>
                  Book your appointment
                </Ext>
                <a className="btn btn-ghost" href="#prices" onClick={onSamePage('#prices')}>
                  See prices
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap">
          <p className="round-notice">
            Colour guests, including existing clients, need a patch test at least 48 hours before
            the appointment.{' '}
            <Ext href={PATCH_TEST_PDF_URL}>Patch testing notes</Ext>
          </p>
        </div>

        <section className="round-section" id="gallery">
          <div className="wrap">
            <div className="section-head">
              <h2>Gallery</h2>
              <p>Six recent finishes from the Dickens Yard chair.</p>
            </div>
            <ul className="round-gallery">
              {gallery.map((item, index) => (
                <li key={item.src}>
                  <button type="button" className="round-shot" onClick={() => setActive(index)}>
                    <img src={item.src} alt="" width={567} height={567} />
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="round-section" id="services">
          <div className="wrap">
            <div className="section-head">
              <h2>Services</h2>
              <p>Starting prices from the 2025 menu. Long hair and colour correction are quoted.</p>
            </div>
            <ul className="round-services">
              {services.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <p className="price-from">
                    From <strong>{item.from}</strong>
                  </p>
                  <a href="#prices" onClick={onSamePage('#prices')}>
                    Full menu
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="round-section round-offers-band" id="offers">
          <div className="wrap">
            <div className="section-head">
              <h2>This week</h2>
              <p>The weekday graphics, with the offer written out beside them.</p>
            </div>
            <ul className="round-offers">
              {offers.map((item) => (
                <li key={item.id}>
                  <Ext href={OFFERS_PAGE_URL}>
                    <img src={item.src} alt={item.alt} width={1024} height={1024} />
                    <span className="kicker">{item.kicker}</span>
                    <strong>{item.title}</strong>
                    <em>{item.detail}</em>
                  </Ext>
                </li>
              ))}
            </ul>
            <ul className="round-extras">
              {extras.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="round-section" id="reviews">
          <div className="wrap">
            <div className="section-head">
              <h2>From Google</h2>
              <p>Three notes guests left after a visit. The photographs are the salon, not the reviewers.</p>
            </div>
            <ul className="round-reviews">
              {reviews.map((item) => (
                <li key={item.name}>
                  <img src={item.photo} alt="The salon at Dickens Yard" width={590} height={332} />
                  <div>
                    <Stars />
                    <h3>“{item.quote}”</h3>
                    <p>{item.body}</p>
                    <Ext href={GOOGLE_REVIEWS_URL}>{item.name} · Google review</Ext>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="round-about">
          <div className="wrap round-about-grid">
            <img
              src={media.portrait}
              alt="Line portrait from the Yuzu Hair & Beauty price list"
              width={407}
              height={460}
            />
            <div>
              <h2>A Japanese-inspired salon, two minutes from the station.</h2>
              <p>
                Yuzu Hair &amp; Beauty works at 5 Dickens Yard, Longfield Avenue, Ealing, W5 2TD.
                Stylists cut, colour, and smooth with an unhurried consultation. Guests describe the
                room as calm, and one Google review calls Jasmine “a brilliant artist working in
                hair”.
              </p>
              <p>
                Use the name Yuzu Hair &amp; Beauty — that is the Ealing salon, not YUZUHAIR in
                Hucknall. Open Tuesday to Friday 10am–8pm and Saturday 9am–6pm.
              </p>
            </div>
          </div>
        </section>

        <section className="round-section" id="prices">
          <div className="wrap">
            <div className="section-head">
              <h2>Prices</h2>
              <p>
                Senior and stylist menus. Call {contact.phone} for long hair or a colour correction.
                The PDF is the same 2025 list.
              </p>
            </div>
            {priceGroups.map((group) => (
              <div className="price-group" key={group.title}>
                <h3>{group.title}</h3>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Service</th>
                      <th scope="col">Senior</th>
                      <th scope="col">Stylist</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.name}>
                        <th scope="row">{row.name}</th>
                        <td data-label="Senior">{row.senior}</td>
                        <td data-label="Stylist">{row.stylist}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            <div className="price-group">
              <h3>Treatments</h3>
              <ul className="treatment-list">
                {treatments.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Ext className="btn btn-ink" href={PRICE_LIST_URL}>
              Download the 2025 PDF
            </Ext>
          </div>
        </section>

        <section className="round-section" id="questions">
          <div className="wrap">
            <div className="section-head">
              <h2>Questions</h2>
            </div>
            <div className="faq">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="round-section" id="visit">
          <div className="wrap round-visit">
            <div>
              <h2>Visit</h2>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
                <br />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p>
                <Ext href={MAPS_DIRECTIONS_URL}>Get directions</Ext>
                {' · '}
                <Ext href={WHATSAPP_URL}>WhatsApp</Ext>
              </p>
            </div>
            <div>
              <h2>Hours</h2>
              <ul className="hours">
                {contact.hours.map((item) => (
                  <li key={item.days}>
                    <span>{item.days}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="round-visit-book">
              <h2>Ready when you are</h2>
              <Ext className="btn btn-book" href={BOOKING_URL}>
                Book your appointment
              </Ext>
              <SocialRow />
            </div>
          </div>
          <div className="wrap round-map">
            <iframe title="Map of Yuzu Hair & Beauty, 5 Dickens Yard, Ealing" src={MAPS_EMBED_URL} loading="lazy" />
          </div>
        </section>
      </main>

      <footer className="round-footer">
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} Yuzu Hair &amp; Beauty · {contact.addressLines.join(', ')} ·{' '}
            {contact.phone}
          </p>
          <p>
            <Ext href={PRICE_LIST_URL}>Price list</Ext>
            {' · '}
            <Ext href={PATCH_TEST_PDF_URL}>Patch testing</Ext>
            {' · '}
            <a href="https://www.yuzuhairandbeauty.london/terms-and-conditions" target="_blank" rel="noreferrer">
              Terms
              <span className="vh"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </footer>
      <MobileBook href={BOOKING_URL} />

      {active !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[active].title}>
          <button ref={closeBtn} className="lightbox-close" type="button" onClick={closeLightbox}>
            Close
          </button>
          <button className="lightbox-nav prev" type="button" aria-label="Previous photo" onClick={() => step(-1)}>
            ‹
          </button>
          <figure>
            <img src={gallery[active].src} alt={gallery[active].alt} />
            <figcaption>{gallery[active].title}</figcaption>
          </figure>
          <button className="lightbox-nav next" type="button" aria-label="Next photo" onClick={() => step(1)}>
            ›
          </button>
        </div>
      ) : null}
    </div>
  )
}
