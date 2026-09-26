import { useEffect } from 'react'
import Hairlust from './pages/Hairlust'
import Hub from './pages/Hub'
import Instagram from './pages/Instagram'
import Round from './pages/Round'
import { readVersionParam } from './versions'

const titles: Record<string, string> = {
  round: 'Round · Yuzu Hair & Beauty, Ealing',
  instagram: 'Instagram · Yuzu Hair & Beauty',
  hairlust: 'Hairlust · Yuzu Hair & Beauty, Dickens Yard',
}

export default function App() {
  const version = readVersionParam()

  useEffect(() => {
    document.body.dataset.theme = version ?? 'hub'
    const page = new URLSearchParams(window.location.search).get('p')
    document.title =
      version === 'round' && page === 'prices'
        ? 'Prices · Yuzu Hair & Beauty, Ealing'
        : version === 'round' && page === 'questions'
          ? 'Questions · Yuzu Hair & Beauty, Ealing'
          : (version && titles[version]) || 'Yuzu Hair & Beauty · design gallery'
  }, [version])

  if (version === 'round') return <Round />
  if (version === 'instagram') return <Instagram />
  if (version === 'hairlust') return <Hairlust />
  return <Hub />
}
