import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { social } from './data'
import { homeUrl, versionUrl, versions, type VersionId } from './versions'

export function Skip() {
  return (
    <a className="skip" href="#main">
      Skip to content
    </a>
  )
}

export function VersionBar({ current }: { current: VersionId | null }) {
  return (
    <div className="version-bar">
      <a className="version-home" href={homeUrl()}>
        Gallery
      </a>
      <nav aria-label="Design versions">
        {versions.map((item) => (
          <a key={item.id} href={versionUrl(item.id)} aria-current={item.id === current ? 'page' : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

export function Ext({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="vh"> (opens in a new tab)</span>
    </a>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.2 3h2.3c.2 1.7 1.2 3.2 2.7 4.1 1 .6 2.1.9 3.2.9v2.4c-1.6 0-3.1-.5-4.4-1.3v6.6c0 3.4-2.7 6.2-6.2 6.3-3.4 0-6.2-2.8-6.2-6.3s2.8-6.2 6.2-6.2c.3 0 .6 0 .9.1v2.5c-.3-.1-.6-.2-.9-.2-2 0-3.6 1.6-3.6 3.7s1.6 3.7 3.6 3.7 3.6-1.6 3.6-3.7V3Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.7.5-1.1 1.2-1.1h1.3V3h-2.3C12.3 3 11 4.4 11 6.6v2H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7.2 12 13l8-5.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function SocialRow() {
  return (
    <ul className="socials">
      <li>
        <Ext href={social.instagram}>
          <InstagramIcon />
          <span className="vh">Instagram</span>
        </Ext>
      </li>
      <li>
        <Ext href={social.tiktok}>
          <TikTokIcon />
          <span className="vh">TikTok</span>
        </Ext>
      </li>
      <li>
        <Ext href={social.facebook}>
          <FacebookIcon />
          <span className="vh">Facebook</span>
        </Ext>
      </li>
      <li>
        <a href={social.email}>
          <MailIcon />
          <span className="vh">Email</span>
        </a>
      </li>
    </ul>
  )
}

export function MobileBook({ href }: { href: string }) {
  return (
    <Ext className="mobile-book" href={href}>
      Book on Phorest
    </Ext>
  )
}

export function scrollToId(id: string) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

export function onSamePage(href: string, close?: () => void) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    close?.()
    window.setTimeout(() => scrollToId(href.slice(1)), close ? 40 : 0)
  }
}

export function useSection(ids: readonly string[]) {
  const [current, setCurrent] = useState(ids[0] ?? '')
  useEffect(() => {
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
        if (id) setCurrent((prev) => (prev === id ? prev : id))
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    )
    observed.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])
  return current
}

export function useBodyLock(locked: boolean) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [locked])
}

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      {dir === 'left' ? (
        <path d="M12.5 4 7 9.5l5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      ) : (
        <path d="M7.5 4 13 9.5 7.5 15" fill="none" stroke="currentColor" strokeWidth="1.6" />
      )}
    </svg>
  )
}

export function Scroller({ label, children }: { label: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      setEdge({
        start: el.scrollLeft <= 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      })
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const move = (dir: number) => {
    const el = ref.current
    if (!el) return
    const card = el.querySelector<HTMLElement>(':scope > *')
    const amount = (card?.offsetWidth ?? 260) + 16
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * amount, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="scroller">
      <button type="button" aria-label={`Previous ${label}`} disabled={edge.start} onClick={() => move(-1)}>
        <Arrow dir="left" />
      </button>
      <div className="scroller-track" ref={ref}>
        {children}
      </div>
      <button type="button" aria-label={`Next ${label}`} disabled={edge.end} onClick={() => move(1)}>
        <Arrow dir="right" />
      </button>
    </div>
  )
}

export function Stars() {
  return (
    <p className="stars">
      <span aria-hidden="true">★★★★★</span>
      <span className="vh">5 stars. </span>
    </p>
  )
}

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menu-icon${open ? ' open' : ''}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  )
}
