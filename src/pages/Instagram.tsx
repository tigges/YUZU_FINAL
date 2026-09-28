import { useEffect, useState } from 'react'
import {
  BOOKING_URL,
  MAPS_DIRECTIONS_URL,
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
import { LegalArticle, readLegalParam } from '../legal'

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

const offersPage = `${import.meta.env.BASE_URL}?v=instagram&p=offers`

const offerStories = [
  {
    id: 'tuesdays',
    kicker: 'Colour Tuesdays',
    title: '50% off colour',
    image: offers[0].src,
    alt: offers[0].alt,
    paragraphs: [
      'Every Tuesday, enjoy colour at 50% off. The discount is on your most expensive colour service, with a full-priced wash, cut and blow-dry. Senior stylist.',
      'Visit the salon or call to take the chair.',
    ],
  },
  {
    id: 'wednesdays',
    kicker: 'Smooth Wednesdays',
    title: '25% off smoothing',
    image: offers[1].src,
    alt: offers[1].alt,
    paragraphs: [
      'Every Wednesday, 25% off Brazilian blow-dry services. The smoothing and straightening treatment is formaldehyde and ammonia free. Aura smoothing is included.',
      'Pop in or call the salon to hear how the treatment suits your hair.',
    ],
  },
  {
    id: 'thursdays',
    kicker: 'Thursdays',
    title: '50% off colour',
    image: offers[2].src,
    alt: offers[2].alt,
    paragraphs: [
      'Every Thursday, the same colour celebration: 50% off your most expensive colour service, with a full-priced wash, cut and blow-dry. Stylist.',
      'Visit the salon or call to book the Thursday chair.',
    ],
  },
] as const

function OffersPage({ home }: { home: string }) {
  return (
    <main id="main" className="ig-offer-page">
      <div className="wrap">
        <a className="round-back" href={home}>
          ← Home
        </a>
        <div className="section-head">
          <p className="kicker">Exclusive offers</p>
          <h1>Especially for you.</h1>
          <p>Weekday colour and smoothing, a £10 thank-you for a friend, and 10% when you rebook the same day.</p>
        </div>
        <ul className="ig-offer-jump">
          {offerStories.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.kicker}</a>
            </li>
          ))}
          <li>
            <a href="#refer">Refer a friend</a>
          </li>
          <li>
            <a href="#rebook">Rebook</a>
          </li>
        </ul>
        {offerStories.map((item) => (
          <article className="ig-offer-block" id={item.id} key={item.id}>
            <img src={item.image} alt={item.alt} width={1024} height={1024} />
            <div>
              <p className="kicker">{item.kicker}</p>
              <h2>{item.title}</h2>
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="round-actions">
                <Ext className="btn btn-book" href={BOOKING_URL}>
                  Book
                </Ext>
                <a className="btn btn-ghost" href={contact.phoneHref}>
                  {contact.phone}
                </a>
              </div>
            </div>
          </article>
        ))}
        <article className="ig-offer-block ig-offer-note" id="refer">
          <div>
            <p className="kicker">Refer a friend</p>
            <h2>£10 credit</h2>
            <ol>
              <li>Share Yuzu with a friend, someone at work, or anyone who wants a salon visit.</li>
              <li>When they book and complete their first appointment, you receive £10 credit towards your next visit.</li>
              <li>There is no limit on how many friends you refer, or how much credit you earn.</li>
            </ol>
            <Ext className="btn btn-book" href={BOOKING_URL}>
              Book
            </Ext>
          </div>
        </article>
        <article className="ig-offer-block ig-offer-note" id="rebook">
          <div>
            <p className="kicker">Same-day rebook</p>
            <h2>10% off the next visit</h2>
            <p>
              Rebook before you leave on the day of your appointment and take 10% off that next
              appointment.
            </p>
            <Ext className="btn btn-book" href={BOOKING_URL}>
              Book
            </Ext>
          </div>
        </article>
      </div>
    </main>
  )
}

export default function Instagram() {
  const legal = readLegalParam()
  const onOffers = new URLSearchParams(window.location.search).get('p') === 'offers'
  const away = Boolean(legal) || onOffers
  const home = `${import.meta.env.BASE_URL}?v=instagram`
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<FilterId>('all')
  const current = useSection(sections)
  useBodyLock(menuOpen)
  const closeMenu = () => setMenuOpen(false)
  const posts = instagram.feed.filter((item) => filter === 'all' || item.group === filter)

  useEffect(() => {
    if (!onOffers) return
    const id = window.location.hash.replace('#', '')
    if (!id) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }, [onOffers])

  return (
    <div className="ig">
      <VersionBar current="instagram" />
      <Skip />
      <header className={`ig-header${menuOpen ? ' open' : ''}`}>
        <div className="wrap ig-header-inner">
          <a className="ig-logo" href={away ? home : '#top'} onClick={away ? closeMenu : onSamePage('#top', closeMenu)}>
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
                href={item.href === '#offers' ? offersPage : away ? `${home}${item.href}` : item.href}
                onClick={item.href === '#offers' || away ? closeMenu : onSamePage(item.href, closeMenu)}
                aria-current={
                  onOffers && item.href === '#offers'
                    ? 'page'
                    : !away && current === item.href.slice(1)
                      ? 'page'
                      : undefined
                }
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

      {legal ? (
        <main id="main" className="round-section">
          <div className="wrap">
            <a className="round-back" href={home}>
              ← Home
            </a>
            <LegalArticle kind={legal} />
          </div>
        </main>
      ) : onOffers ? (
        <OffersPage home={home} />
      ) : (
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
              <Ext className="btn btn-book" href={BOOKING_URL}>
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
                  <a href={`${offersPage}#${item.id}`}>Offer details</a>
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
              <Ext className="btn btn-book" href={BOOKING_URL}>
                Book your appointment
              </Ext>
              <SocialRow />
            </div>
          </div>
        </section>
      </main>
      )}

      <footer className="ig-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty</span>
          <SocialRow />
          <p>
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
