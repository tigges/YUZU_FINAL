import { LIVE_SITE_URL, social } from '../data'

function SiteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h16M12 3.8c2.2 2.4 3.5 5.3 3.5 8.2S14.2 17.8 12 20.2C9.8 17.8 8.5 14.9 8.5 12S9.8 6.2 12 3.8Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
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

export function SocialLinks({ className = 'social-row' }: { className?: string }) {
  return (
    <div className={className}>
      <a href={LIVE_SITE_URL} target="_blank" rel="noreferrer" aria-label="Current site">
        <SiteIcon />
      </a>
      <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a href={social.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
        <TikTokIcon />
      </a>
      <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
        <FacebookIcon />
      </a>
      <a href={social.email} aria-label="Email">
        <MailIcon />
      </a>
    </div>
  )
}
