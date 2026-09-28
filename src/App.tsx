import { useEffect } from 'react'
import Hairlust from './pages/Hairlust'
import Hub from './pages/Hub'
import Instagram from './pages/Instagram'
import Japanese from './pages/Japanese'
import Round from './pages/Round'
import { HairlustSept, InstagramSept, RoundSept } from './sept/pages'
import { readVersionParam } from './versions'

const titles: Record<string, string> = {
  round: 'Round · Yuzu Hair & Beauty, Ealing',
  instagram: 'Instagram · Yuzu Hair & Beauty',
  hairlust: 'Hairlust · Yuzu Hair & Beauty, Dickens Yard',
  'round-sept': 'Round clone · September gallery',
  'instagram-sept': 'Instagram clone · September gallery',
  'hairlust-sept': 'Hairlust clone · September gallery',
  japanese: 'Japanese · Yuzu Hair & Beauty',
  carousel: 'Carousel · Yuzu Hair & Beauty, Ealing',
}

export default function App() {
  const version = readVersionParam()

  useEffect(() => {
    document.body.dataset.theme = version ?? 'hub'
    const page = new URLSearchParams(window.location.search).get('p')
    const roundPages = version === 'round' || version === 'carousel'
    document.title =
      roundPages && page === 'prices'
        ? 'Prices · Yuzu Hair & Beauty, Ealing'
        : roundPages && page === 'questions'
          ? 'Questions · Yuzu Hair & Beauty, Ealing'
          : roundPages && page === 'patch'
            ? 'Patch testing · Yuzu Hair & Beauty, Ealing'
            : (version && titles[version]) || 'Yuzu Hair & Beauty · design gallery'
  }, [version])

  if (version === 'round') return <Round />
  if (version === 'instagram') return <Instagram />
  if (version === 'hairlust') return <Hairlust />
  if (version === 'round-sept') return <RoundSept />
  if (version === 'instagram-sept') return <InstagramSept />
  if (version === 'hairlust-sept') return <HairlustSept />
  if (version === 'japanese') return <Japanese />
  if (version === 'carousel') return <Round variant="carousel" />
  return <Hub />
}
