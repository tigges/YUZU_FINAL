import Clean from './Clean'
import { SeptFrame } from './Frame'
import Instagram from './Instagram'
import Hairlust from './Hairlust'
import { VersionBar } from '../ui'
import type { CleanSubpage } from './seo'

function readRoundPage(): 'home' | CleanSubpage {
  const value = new URLSearchParams(window.location.search).get('p')
  if (value === 'about' || value === 'questions' || value === 'prices') return value
  return 'home'
}

export function RoundSept() {
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
  return (
    <>
      <VersionBar current="hairlust-sept" />
      <SeptFrame>
        <Hairlust />
      </SeptFrame>
    </>
  )
}
