import { useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  OFFERS_PAGE_URL,
  contact,
  extras,
  faqs,
  gallery,
  media,
  offers,
  priceGroups,
  reviews,
  treatments,
} from '../data'
import { LegalArticle, readLegalParam, type LegalKind } from '../legal'
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

const sections = ['top', 'work', 'offers', 'words', 'visit'] as const

const nav = [
  { id: 'work', label: 'Work' },
  { id: 'offers', label: 'Offers' },
  { id: 'words', label: 'Reviews' },
  { id: 'visit', label: 'Visit' },
]

const cards = [
  {
    title: 'Cut',
    copy: 'Ladies wash, cut and style from £58 with a stylist, £87 with a senior.',
    src: gallery[1].src,
    alt: gallery[1].alt,
  },
  {
    title: 'Colour',
    copy: 'Roots from £75, full head from £87, including Illumina with a senior stylist.',
    src: gallery[0].src,
    alt: gallery[0].alt,
  },
  {
    title: 'Care',
    copy: 'Aura smoothing from £117, formaldehyde-free, plus Nashi fillers from £33.',
    src: gallery[2].src,
    alt: gallery[2].alt,
  },
]

type SparkPage = 'home' | 'prices' | 'questions' | 'patch' | LegalKind

function readSparkPage(): SparkPage {
  const value = new URLSearchParams(window.location.search).get('p')
  if (value === 'prices' || value === 'questions' || value === 'patch' || value === 'terms' || value === 'privacy') {
    return value
  }
  return 'home'
}

export default function Spark() {
  const page = readSparkPage()
  const legal = readLegalParam()
  const home = `${import.meta.env.BASE_URL}?v=spark`
  const pricesHref = `${home}&p=prices`
  const questionsHref = `${home}&p=questions`
  const patchHref = `${home}&p=patch`
  const [menuOpen, setMenuOpen] = useState(false)
  const current = useSection(sections)
  useBodyLock(menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="spark">
      <VersionBar current="spark" />
      <Skip />
      <header className={`sp-header${menuOpen ? ' open' : ''}`}>
        <div className="wrap sp-header-inner">
          <a className="sp-logo" href={page === 'home' ? '#top' : home} onClick={page === 'home' ? onSamePage('#top', closeMenu) : closeMenu}>
            <img src={media.logo} alt="Yuzu Hair & Beauty" width={234} height={80} />
          </a>
          <nav className="sp-nav" aria-label="Primary">
            {nav.map((item) => {
              const hash = `#${item.id}`
              return (
                <a
                  key={item.id}
                  href={page === 'home' ? hash : `${home}${hash}`}
                  onClick={page === 'home' ? onSamePage(hash, closeMenu) : closeMenu}
                  aria-current={page === 'home' && current === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
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

      {page === 'home' ? (
        <main id="main">
          <section className="sp-hero" id="top" aria-labelledby="sp-title">
            <div className="wrap">
              <p className="kicker">Dickens Yard · Ealing Broadway</p>
              <h1 id="sp-title">Cut. Colour. Care.</h1>
              <p className="sp-lead">
                Japanese-inspired hair at 5 Dickens Yard — two minutes from Ealing Broadway. A
                consultation first, then a finish you can live with.
              </p>
              <div className="sp-actions">
                <Ext className="btn btn-book" href={BOOKING_URL}>
                  Book your appointment
                </Ext>
                <a className="btn btn-ghost" href={pricesHref}>
                  See prices
                </a>
              </div>
              <ul className="sp-stats">
                <li>
                  <strong>2 min</strong>
                  <span>from Ealing Broadway</span>
                </li>
                <li>
                  <strong>Tue–Fri</strong>
                  <span>10am–8pm</span>
                </li>
                <li>
                  <strong>From £58</strong>
                  <span>ladies cut and style</span>
                </li>
              </ul>
              <img
                className="sp-hero-photo"
                src={media.hero}
                alt="Wavy brunette hair, photographed in the salon at Yuzu Hair & Beauty, Ealing"
                width={1920}
                height={660}
                fetchPriority="high"
              />
            </div>
          </section>

          <div className="wrap">
            <p className="sp-notice">
              Colour guests, including existing clients, need a patch test at least 48 hours before
              the appointment. <a href={patchHref}>Patch testing notes</a>
            </p>
          </div>

          <section className="sp-section" id="work">
            <div className="wrap">
              <h2>The chair, without the noise.</h2>
              <ul className="sp-grid">
                {cards.map((item) => (
                  <li className="sp-card" key={item.title}>
                    <img src={item.src} alt={item.alt} width={567} height={567} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="sp-section sp-offers" id="offers">
            <div className="wrap">
              <h2>This week.</h2>
              <ul className="sp-grid">
                {offers.map((item) => (
                  <li className="sp-card" key={item.id}>
                    <Ext href={OFFERS_PAGE_URL}>
                      <img src={item.src} alt={item.alt} width={1024} height={1024} />
                      <div>
                        <p className="kicker">{item.kicker}</p>
                        <h3>{item.title}</h3>
                        <p>{item.detail}</p>
                      </div>
                    </Ext>
                  </li>
                ))}
              </ul>
              <ul className="sp-extras">
                {extras.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="sp-section" id="words">
            <div className="wrap">
              <h2>In their words.</h2>
              <ul className="sp-grid">
                {reviews.map((item) => (
                  <li className="sp-quote" key={item.name}>
                    <Stars />
                    <h3>“{item.quote}”</h3>
                    <p>{item.body}</p>
                    <Ext href={GOOGLE_REVIEWS_URL}>{item.name} · Google review</Ext>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="sp-section" id="visit">
            <div className="wrap sp-visit">
              <div>
                <h2>Come in.</h2>
                {contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p>
                  <a href={contact.phoneHref}>{contact.phone}</a>
                  <br />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
                <ul className="hours">
                  {contact.hours.map((item) => (
                    <li key={item.days}>
                      <span>{item.days}</span>
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="sp-actions">
                  <Ext className="btn btn-book" href={BOOKING_URL}>
                    Book your appointment
                  </Ext>
                  <Ext className="btn btn-ghost" href={MAPS_DIRECTIONS_URL}>
                    Directions
                  </Ext>
                </div>
                <SocialRow />
              </div>
              <iframe title="Map of Yuzu Hair & Beauty, 5 Dickens Yard, Ealing" src={MAPS_EMBED_URL} loading="lazy" />
            </div>
          </section>
        </main>
      ) : (
        <main id="main" className="sp-section sp-sub">
          <div className="wrap">
            <a className="round-back" href={home}>
              ← Home
            </a>
            {page === 'prices' ? (
              <Prices />
            ) : page === 'questions' ? (
              <Questions />
            ) : page === 'patch' ? (
              <Patch />
            ) : legal ? (
              <LegalArticle kind={legal} />
            ) : null}
          </div>
        </main>
      )}

      <footer className="sp-footer">
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} Yuzu Hair &amp; Beauty · {contact.addressLines.join(', ')}
          </p>
          <SocialRow />
          <p>
            <a href={pricesHref}>Prices</a>
            {' · '}
            <a href={questionsHref}>Questions</a>
            {' · '}
            <a href={patchHref}>Patch testing</a>
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

function Prices() {
  return (
    <>
      <div className="section-head">
        <h1>Prices</h1>
        <p>Senior and stylist menus. Call {contact.phone} for long hair or a colour correction.</p>
      </div>
      {priceGroups.map((group) => (
        <div className="price-group" key={group.title}>
          <h2>{group.title}</h2>
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
        <h2>Treatments</h2>
        <ul className="treatment-list">
          {treatments.map((item) => (
            <li key={item.name}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function Questions() {
  return (
    <>
      <div className="section-head">
        <h1>Questions</h1>
      </div>
      <div className="faq">
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  )
}

function Patch() {
  return (
    <>
      <div className="section-head">
        <h1>Patch testing</h1>
        <p>Mandatory before any colour service, for new and existing clients.</p>
      </div>
      <div className="legal-copy">
        <p>
          At Yuzu Hair, colour services need a mandatory patch test — an allergy alert test — before
          any colour service. That includes both existing and new clients, as part of the updated
          colour line.
        </p>
        <p>
          The test checks for a possible reaction to hair dye. A small amount is applied behind the
          ear, then watched for irritation or redness over 48 hours.
        </p>
        <p>
          Please complete the patch test at least 48 hours before the appointment. You can walk in
          for a patch test even if you do not have a booking. Ask at reception.
        </p>
        <p>Thank you, the Yuzu team.</p>
      </div>
    </>
  )
}
