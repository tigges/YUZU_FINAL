import Clean from './Clean'
import { SeptFrame } from './Frame'
import Instagram from './Instagram'
import Hairlust from './Hairlust'
import { VersionBar } from '../ui'
import { LegalArticle, readLegalParam } from '../legal'
import { versionUrl, type VersionId } from '../versions'
import type { CleanSubpage } from './seo'

function SeptLegal({ version }: { version: VersionId }) {
  const kind = readLegalParam()
  if (!kind) return null
  return (
    <div className="hub">
      <VersionBar current={version} />
      <main id="main" className="wrap legal-shell">
        <a className="round-back" href={versionUrl(version)}>
          ← Home
        </a>
        <LegalArticle kind={kind} />
      </main>
    </div>
  )
}

function readRoundPage(): 'home' | CleanSubpage {
  const value = new URLSearchParams(window.location.search).get('p')
  if (value === 'about' || value === 'questions' || value === 'prices') return value
  return 'home'
}

export function RoundSept() {
  const legal = readLegalParam()
  if (legal) return <SeptLegal version="round-sept" />
  const page = readRoundPage()
  return (
    <>
      <VersionBar current="round-sept" />
      <SeptFrame>
        <Clean variant="round" page={page} />
      </SeptFrame>
    </>
  )
}

export function InstagramSept() {
  const legal = readLegalParam()
  if (legal) return <SeptLegal version="instagram-sept" />
  return (
    <>
      <VersionBar current="instagram-sept" />
      <SeptFrame>
        <Instagram />
      </SeptFrame>
    </>
  )
}

export function HairlustSept() {
  const legal = readLegalParam()
  if (legal) return <SeptLegal version="hairlust-sept" />
  return (
    <>
      <VersionBar current="hairlust-sept" />
      <SeptFrame>
        <Hairlust />
      </SeptFrame>
    </>
  )
}
