import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type KeyboardEvent } from 'react'
import { BOOKING_URL, gallery, media, offers } from '../data'
import { Ext } from '../ui'

const SLIDES = [
  {
    ribbon: "What's new",
    title: 'Hair, finished with care.',
    copy: 'Japanese-inspired cuts, colour, and smoothing at 5 Dickens Yard — two minutes from Ealing Broadway.',
    href: '#gallery',
    image: media.hero,
    alt: 'Wavy brunette hair, photographed in the salon at Yuzu Hair & Beauty, Ealing',
    width: 1920,
    height: 660,
    fit: 'cover' as const,
    position: '42% 36%',
    chip: { title: 'Book the chair', detail: 'A consultation first' },
  },
  {
    ribbon: 'This week',
    title: '50% off colour.',
    copy: 'Colour Tuesdays: your most expensive colour service, with a full-priced wash, cut and blow-dry. Senior stylist.',
    href: '#offers',
    image: offers[0].src,
    alt: offers[0].alt,
    width: 1024,
    height: 1024,
    fit: 'poster' as const,
    position: 'center',
    chip: null,
  },
  {
    ribbon: 'The chair',
    title: 'Copper & rose.',
    copy: 'A recent colour finish from the Dickens Yard chair, with a textured fringe.',
    href: '#gallery',
    image: gallery[0].src,
    alt: gallery[0].alt,
    width: 567,
    height: 567,
    fit: 'cover' as const,
    position: 'center 18%',
    chip: { title: 'Copper & rose', detail: 'Textured fringe' },
  },
  {
    ribbon: 'Visit us',
    title: 'Two minutes from the station.',
    copy: '5 Dickens Yard, Longfield Avenue, Ealing, W5 2TD. Tuesday to Friday 10am–8pm, Saturday 9am–6pm.',
    href: '#visit',
    image: gallery[2].src,
    alt: gallery[2].alt,
    width: 567,
    height: 567,
    fit: 'cover' as const,
    position: 'center 16%',
    chip: { title: 'Dickens Yard', detail: 'Ealing Broadway' },
  },
]

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M12.2 4.5 6.7 10l5.5 5.5' : 'M7.8 4.5 13.3 10 7.8 15.5'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function RoundCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(true)
  const rootRef = useRef<HTMLElement>(null)
  const drag = useRef<{ x: number; y: number } | null>(null)
  const count = SLIDES.length

  const go = (next: number) => setIndex(((next % count) + count) % count)

  useEffect(() => {
    const node = rootRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || paused || !inView) return
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % count), 6500)
    return () => window.clearInterval(timer)
  }, [paused, inView, count])

  useEffect(() => {
    const finish = (event: globalThis.PointerEvent) => {
      if (!drag.current) return
      const dx = event.clientX - drag.current.x
      const dy = event.clientY - drag.current.y
      drag.current = null
      if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return
      setIndex((value) => (value + (dx < 0 ? 1 : -1) + count) % count)
    }
    const cancel = () => {
      drag.current = null
    }
    window.addEventListener('pointerup', finish)
    window.addEventListener('pointercancel', cancel)
    return () => {
      window.removeEventListener('pointerup', finish)
      window.removeEventListener('pointercancel', cancel)
    }
  }, [count])

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(index + 1)
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(index - 1)
    }
  }

  const onPointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    const target = event.target
    if (target instanceof Element && target.closest('a, button')) return
    drag.current = { x: event.clientX, y: event.clientY }
  }

  return (
    <section
      className="cr-hero"
      id="top"
      ref={rootRef}
      aria-roledescription="carousel"
      aria-labelledby="round-hero-title"
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <div className="wrap">
        <div className="cr-stage">
          <p className="cr-ribbon">
            <span>{SLIDES[index].ribbon}</span>
          </p>
          <div className="cr-slides">
            {SLIDES.map((slide, slideIndex) => {
              const active = slideIndex === index
              return (
                <article
                  key={slide.title}
                  className={active ? 'cr-slide is-active' : 'cr-slide'}
                  aria-hidden={active ? undefined : true}
                  inert={active ? undefined : true}
                >
                  <div className="cr-copy">
                    <span className="cr-mark">
                      <img src={media.logo} alt="" width={234} height={80} />
                    </span>
                    {active ? (
                      <h1 id="round-hero-title">{slide.title}</h1>
                    ) : (
                      <p className="cr-title">{slide.title}</p>
                    )}
                    <p>{slide.copy}</p>
                    <a className="btn btn-ghost cr-more" href={slide.href}>
                      Learn more
                      <Chevron dir="right" />
                    </a>
                  </div>
                  <div className="cr-visual">
                    <span className="cr-orb" />
                    <div className={`cr-float${slide.fit === 'poster' ? ' is-poster' : ''}`}>
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        width={slide.width}
                        height={slide.height}
                        style={{ objectPosition: slide.position }}
                        draggable={false}
                        fetchPriority={slideIndex === 0 ? 'high' : undefined}
                      />
                      {slide.chip ? (
                        <div className="cr-chip">
                          <strong>{slide.chip.title}</strong>
                          <span>{slide.chip.detail}</span>
                          <Ext className="btn btn-book" href={BOOKING_URL}>
                            Book
                          </Ext>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="cr-controls">
            <button type="button" aria-label="Previous slide" onClick={() => go(index - 1)}>
              <Chevron dir="left" />
            </button>
            <div className="cr-dots">
              {SLIDES.map((slide, slideIndex) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Show slide ${slideIndex + 1}: ${slide.title}`}
                  aria-current={slideIndex === index ? 'true' : undefined}
                  onClick={() => go(slideIndex)}
                />
              ))}
            </div>
            <button type="button" aria-label="Next slide" onClick={() => go(index + 1)}>
              <Chevron dir="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
