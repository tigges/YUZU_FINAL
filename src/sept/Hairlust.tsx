import { useEffect, useRef, useState, type FormEvent } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  OFFERS_PAGE_URL,
  PATCH_TEST_PDF_URL,
  PRICE_LIST_URL,
  TERMS_URL,
  contact,
  gallery,
  instagram,
  reviews,
  social,
} from '../data'
import { v4Assets } from './v4'

const offers = [
  {
    id: 'tuesdays',
    kicker: 'Colour Tuesdays',
    title: '50% off',
    detail: 'Your most expensive colour service, with a full-priced wash, cut and blow-dry. Senior stylist.',
  },
  {
    id: 'wednesdays',
    kicker: 'Smooth Wednesdays',
    title: '25% off',
    detail: 'Brazilian blow-dry / Aura smoothing. Formaldehyde and ammonia free.',
  },
  {
    id: 'thursdays',
    kicker: 'Thursdays are the new Tuesdays',
    title: '50% off',
    detail: 'Colour celebration with a full-priced wash, cut and blow-dry. Stylist.',
  },
]

const logo = `${import.meta.env.BASE_URL}assets/wix/logo.png`

const nav = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#offers', label: 'Offers' },
  { href: '#visit', label: 'Visit' },
]

const ranges = [
  { href: '#services', title: 'Cut & style', src: gallery[5].src, alt: gallery[5].alt },
  { href: '#services', title: 'Colour', src: gallery[1].src, alt: gallery[1].alt },
  { href: '#services', title: 'Highlights', src: gallery[0].src, alt: gallery[0].alt },
  { href: '#services', title: 'Treatments', src: gallery[2].src, alt: gallery[2].alt },
  { href: '#offers', title: 'Offers', src: instagram.feed[0].src, alt: instagram.feed[0].label },
  { href: '#visit', title: 'Visit us', src: v4Assets.looks[2].src, alt: v4Assets.looks[2].title },
  { href: BOOKING_URL, title: 'Book', src: gallery[4].src, alt: gallery[4].alt, external: true },
  { href: '#reviews', title: 'Reviews', src: reviews[0].photo, alt: reviews[0].name },
]

const popular = [
  { src: gallery[0].src, alt: gallery[0].alt, title: 'Highlights & balayage', detail: 'Foils, balayage, and foiliage with toner.', from: 'From £64' },
  { src: gallery[5].src, alt: gallery[5].alt, title: 'Wash, cut & style', detail: 'Ladies cut with a stylist or senior.', from: 'From £58' },
  { src: gallery[1].src, alt: gallery[1].alt, title: 'Colour', detail: 'Roots, full head, and Illumina.', from: 'From £75' },
  { src: gallery[3].src, alt: gallery[3].alt, title: 'Blow-dry', detail: 'A polished finish, weekday or weekend.', from: 'From £41' },
  { src: gallery[2].src, alt: gallery[2].alt, title: 'Treatments', detail: 'Nashi fillers and K2.0 moisture.', from: 'From £33' },
  { src: gallery[4].src, alt: gallery[4].alt, title: 'Aura smoothing', detail: 'Formaldehyde-free Brazilian blow-dry.', from: 'From £117' },
]

const blocks = [
  { href: '#services', title: 'Cut & styling', src: gallery[5].src },
  { href: '#services', title: 'Colour', src: gallery[4].src },
  { href: '#services', title: 'Highlights + balayage', src: gallery[0].src },
  { href: '#services', title: 'Treatments', src: gallery[1].src },
  { href: '#offers', title: 'Weekday offers', src: instagram.feed[0].src },
  { href: '#visit', title: 'Dickens Yard', src: v4Assets.looks[4].src },
]

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      {dir === 'left' ? (
        <path d="M14.429 19.857c-.143 0-.286 0-.429-.143L5.143 11c-.572-.571-.572-1.571 0-2.143L13.857.143a.69.69 0 011 0 .69.69 0 010 1L6.286 10 15 18.714a.69.69 0 010 1c-.143.143-.286.143-.571.143z" />
      ) : (
        <path d="M5.571.143c.143 0 .286 0 .429.143L14.857 9c.572.571.572 1.571 0 2.143L6.143 19.857a.69.69 0 01-1 0 .69.69 0 010-1L13.714 10 5 1.286a.69.69 0 010-1C5.143.143 5.286.143 5.571.143z" />
      )}
    </svg>
  )
}

function ArrowSmall() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" />
    </svg>
  )
}

export default function Hairlust() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [sent, setSent] = useState(false)
  const [current, setCurrent] = useState('top')
  const rangeRef = useRef<HTMLDivElement>(null)
  const popularRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['top', 'services', 'offers', 'visit']
    const observed = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!observed.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const id = visible[0]?.target.id
        if (id) setCurrent(id)
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0.1, 0.25, 0.5] },
    )
    observed.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const goTo = (href: string) => (event: { preventDefault: () => void }) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    setMenuOpen(false)
    window.setTimeout(() => {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const scrollRow = (ref: { current: HTMLDivElement | null }, dir: number) => {
    ref.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  const usps = [
    'Japanese-inspired salon',
    '5 Dickens Yard, W5 2TD',
    'Two minutes from Ealing Broadway',
    'Tue–Fri 10am–8pm · Sat 9am–6pm',
  ]

  return (
    <div className="hl">
      <div className="hl-announce">
        <a href={OFFERS_PAGE_URL} target="_blank" rel="noreferrer">
          Colour Tuesdays · 50% off your most expensive colour, with a full-priced wash, cut and blow-dry
        </a>
      </div>
      <header className={`hl-header${solid ? ' solid' : ''}${menuOpen ? ' open' : ''}`}>
        <div className="hl-bar">
          <button
            className="hl-menu-btn"
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hl-menu-ico" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Menu</span>
          </button>
          <a className="hl-logo" href="#top" onClick={goTo('#top')}>
            <img src={logo} alt="Yuzu Hair & Beauty" />
          </a>
          <nav className="hl-nav" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={goTo(item.href)}
                aria-current={current === item.href.slice(1) ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
            <a className="hl-nav-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book
            </a>
          </nav>
          <div className="hl-tools">
            <a className="hl-tool" href={social.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
            <a className="hl-tool hl-tool-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
              <span className="hl-book-dot" aria-hidden="true" />
              <span>Book</span>
            </a>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="hl-drawer" role="dialog" aria-label="Menu">
          <div className="hl-drawer-top">
            <button type="button" onClick={() => setMenuOpen(false)}>
              Close
            </button>
          </div>
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={goTo(item.href)}
              aria-current={current === item.href.slice(1) ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book on Phorest
          </a>
          <a href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
            Price list
          </a>
          <a href={PATCH_TEST_PDF_URL} target="_blank" rel="noreferrer">
            Patch testing
          </a>
          <a href={social.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      ) : null}

      <main>
        <section className="hl-hero" id="top" aria-labelledby="hl-hero-title">
          <figure className="hl-hero-image">
            <img src={v4Assets.hero} alt="Brunette waves, photographed at Yuzu Hair & Beauty" />
          </figure>
          <div className="hl-container hl-hero-inner">
            <h1 id="hl-hero-title" className="hl-title-xl">
              Cut, colour or <span>Transform</span>
            </h1>
            <p>
              Japanese-inspired hairdressing at Dickens Yard, two minutes from Ealing Broadway.
              Precision cuts, colour, balayage, and formaldehyde-free smoothing.
            </p>
            <a className="hl-cta hl-cta-light" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book your chair
            </a>
          </div>
        </section>

        <section className="hl-range" aria-label="Services">
          <div className="hl-container hl-range-wrap">
            <button
              className="hl-arrow hl-arrow-prev"
              type="button"
              aria-label="Previous"
              onClick={() => scrollRow(rangeRef, -1)}
            >
              <Arrow dir="left" />
            </button>
            <div className="hl-range-track" ref={rangeRef}>
              {ranges.map((item) => (
                <a
                  key={item.title}
                  className="hl-range-card"
                  href={item.href}
                  onClick={item.external ? undefined : goTo(item.href)}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                >
                  <figure>
                    <img src={item.src} alt={item.alt} />
                  </figure>
                  <div className="hl-range-title">
                    <span>{item.title}</span>
                    <ArrowSmall />
                  </div>
                </a>
              ))}
            </div>
            <button
              className="hl-arrow hl-arrow-next"
              type="button"
              aria-label="Next"
              onClick={() => scrollRow(rangeRef, 1)}
            >
              <Arrow dir="right" />
            </button>
          </div>
        </section>

        <section className="hl-usp" aria-label="Salon facts">
          <div className="hl-usp-track">
            {[0, 1].map((copy) => (
              <ul key={copy}>
                {usps.map((item) => (
                  <li key={`${copy}-${item}`}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className="hl-popular" id="services">
          <div className="hl-container hl-popular-inner">
            <div className="hl-section-head">
              <h2 className="hl-title">Popular services</h2>
              <p>A hand-picked selection from the Dickens Yard chair — cuts, colour, and treatments that guests rebook.</p>
              <a className="hl-cta hl-cta-stroke" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                Full price list
              </a>
            </div>
            <div className="hl-popular-slider">
              <button
                className="hl-arrow hl-arrow-prev"
                type="button"
                aria-label="Previous services"
                onClick={() => scrollRow(popularRef, -1)}
              >
                <Arrow dir="left" />
              </button>
              <div className="hl-cards" ref={popularRef}>
                {popular.map((item) => (
                  <article key={item.title} className="hl-card">
                    <a className="hl-card-image" href={BOOKING_URL} target="_blank" rel="noreferrer">
                      <img src={item.src} alt={item.alt} />
                    </a>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                    <p className="hl-card-price">{item.from}</p>
                    <a className="hl-cta hl-cta-dark hl-cta-slim" href={BOOKING_URL} target="_blank" rel="noreferrer">
                      Book
                    </a>
                  </article>
                ))}
              </div>
              <button
                className="hl-arrow hl-arrow-next"
                type="button"
                aria-label="Next services"
                onClick={() => scrollRow(popularRef, 1)}
              >
                <Arrow dir="right" />
              </button>
            </div>
          </div>
        </section>

        <section className="hl-blocks" aria-label="Shop by category">
          <div className="hl-container hl-blocks-grid">
            {blocks.map((item) => (
              <a key={item.title} className="hl-block" href={item.href} onClick={goTo(item.href)}>
                <img src={item.src} alt="" />
                <h2 className="hl-title">{item.title}</h2>
              </a>
            ))}
          </div>
        </section>

        <section className="hl-quiz" aria-labelledby="hl-quiz-title">
          <div className="hl-container hl-quiz-inner">
            <div className="hl-section-head hl-quiz-copy">
              <h2 id="hl-quiz-title" className="hl-title">
                New to Yuzu?
              </h2>
              <p>
                Colour services need a mandatory patch test, including for existing guests, at least 48 hours
                before the appointment. Book the test and the chair on Phorest.
              </p>
              <a className="hl-cta hl-cta-light" href={PATCH_TEST_PDF_URL} target="_blank" rel="noreferrer">
                Patch testing notes
              </a>
            </div>
            <div className="hl-quiz-media">
              <img src={gallery[1].src} alt={gallery[1].alt} />
            </div>
          </div>
        </section>

        <section className="hl-reviews" id="reviews">
          <div className="hl-container hl-reviews-inner">
            <div className="hl-section-head">
              <p className="hl-reviews-kicker">Trusted by you</p>
              <h2 className="hl-title">From the chair at Dickens Yard</h2>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                Read Google reviews
              </a>
            </div>
            <div className="hl-review-cards">
              {reviews.map((item) => (
                <article key={item.name} className="hl-review">
                  <img src={item.photo} alt="" />
                  <blockquote>
                    <p>“{item.quote}”</p>
                    <p>{item.body}</p>
                    <cite>{item.name}</cite>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hl-new" id="offers">
          <div className="hl-container hl-popular-inner">
            <div className="hl-section-head">
              <h2 className="hl-title">New in</h2>
              <p>Weekday colour and smoothing offers, plus refer-a-friend credit when they complete a first visit.</p>
              <a className="hl-cta hl-cta-stroke" href={OFFERS_PAGE_URL} target="_blank" rel="noreferrer">
                Exclusive offers
              </a>
            </div>
            <div className="hl-offer-grid">
              {offers.map((item, index) => (
                <article key={item.id} className="hl-card">
                  <a className="hl-card-image" href={OFFERS_PAGE_URL} target="_blank" rel="noreferrer">
                    <img src={instagram.feed[index].src} alt={instagram.feed[index].label} />
                  </a>
                  <p className="hl-card-kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hl-press">
          <div className="hl-container">
            <h2 className="hl-title hl-press-title">Guests keep coming back</h2>
            <div className="hl-press-grid">
              {reviews.map((item) => (
                <figure key={item.name} className="hl-press-item">
                  <img src={item.photo} alt="" />
                  <figcaption>
                    <blockquote>“{item.body}”</blockquote>
                    <cite>{item.name}</cite>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="hl-ig" aria-labelledby="hl-ig-title">
          <div className="hl-container">
            <header className="hl-ig-head">
              <p id="hl-ig-title">
                <InstagramIcon /> Follow along
              </p>
              <a href={social.instagram} target="_blank" rel="noreferrer">
                {instagram.handle}
              </a>
            </header>
            <div className="hl-ig-grid">
              {instagram.feed.slice(0, 8).map((item) => (
                <a key={item.src} href={item.href} target="_blank" rel="noreferrer">
                  <img src={item.src} alt={item.label} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="hl-letter" id="visit">
          <div className="hl-container">
            <p className="hl-title hl-title-sm">Come in from Ealing Broadway</p>
            <p>
              Yuzu Hair &amp; Beauty, {contact.addressLines.join(', ')}. Tuesday–Friday 10am–8pm, Saturday 9am–6pm.
              Monday and Sunday closed. Call {contact.phone} or book on Phorest.
            </p>
            {sent ? (
              <p className="hl-thanks">Thanks — if you need a reply, email {contact.email}.</p>
            ) : (
              <form className="hl-letter-form" onSubmit={onSubmit}>
                <label className="visually-hidden" htmlFor="hl-email">
                  Email address
                </label>
                <input id="hl-email" name="email" type="email" required placeholder="Email address" />
                <button className="hl-cta hl-cta-dark" type="submit">
                  Send
                </button>
              </form>
            )}
            <p className="hl-letter-note">
              This form stays on the page. For a real enquiry use{' '}
              <a href={social.email}>{contact.email}</a>.
            </p>
          </div>
        </section>
      </main>

      <footer className="hl-footer">
        <div className="hl-container hl-footer-main">
          <div className="hl-footer-photo">
            <img src={v4Assets.servicesMedia[2].src} alt="The salon at Dickens Yard" />
          </div>
          <div className="hl-footer-cols">
            <div>
              <h2>Visit</h2>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              {contact.hours.map((item) => (
                <p key={item.days}>
                  {item.days} · {item.time}
                </p>
              ))}
            </div>
            <div>
              <h2>Book</h2>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                Phorest
              </a>
              <a href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                2025 price list
              </a>
              <a href={PATCH_TEST_PDF_URL} target="_blank" rel="noreferrer">
                Patch testing
              </a>
              <a href={OFFERS_PAGE_URL} target="_blank" rel="noreferrer">
                Exclusive offers
              </a>
              <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </div>
            <div>
              <h2>Follow</h2>
              <a href={social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={social.tiktok} target="_blank" rel="noreferrer">
                TikTok
              </a>
              <a href={social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href={TERMS_URL} target="_blank" rel="noreferrer">
                Terms and conditions
              </a>
            </div>
          </div>
        </div>
        <div className="hl-legal">
          <p>Yuzu Hair &amp; Beauty · Dickens Yard, Ealing · Layout after hairlust.com</p>
        </div>
      </footer>
    </div>
  )
}
