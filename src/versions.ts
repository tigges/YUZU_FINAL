const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const versions = [
  {
    id: 'round',
    name: 'Round',
    kicker: '01',
    summary:
      'The rounded Clean layout, redesigned: readable hero, prices that match the 2025 menu, offers that match their graphics, a lightbox, and a map.',
    was: 'Clean with border-radius added. The headline was a keyword list, offer titles contradicted the pictures, and “from” prices did not match the menu.',
    preview: asset('assets/clean/hero.jpg'),
    previewAlt: 'Wavy brunette hair, photographed at Yuzu Hair & Beauty',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    kicker: '02',
    summary:
      'Sage, blossom, and the real @yuzuhairandbeauty feed — led by the colour work, with captions, filters, weekday offers, and a menu that stays on a phone.',
    was: 'A profile clone. The portfolio sat under the grid, reel tiles did not say they leave the site, and the phone hid Work, Feed, and Visit.',
    preview: asset('assets/instagram/09.jpg'),
    previewAlt: 'Copper balayage photographed in the salon',
  },
  {
    id: 'hairlust',
    name: 'Hairlust',
    kicker: '03',
    summary:
      'The Hairlust rhythm — announcement, hero, ranges, service cards, three review columns — with a real visit section and contrast that holds in every state.',
    was: 'A shop homepage forced onto a salon: a lilac bar below contrast, a form that never sends, and the same three reviews shown twice.',
    preview: asset('assets/v4/hero.jpg'),
    previewAlt: 'Brunette waves, photographed in the salon',
  },
] as const

export type VersionId = (typeof versions)[number]['id']

export function homeUrl() {
  return import.meta.env.BASE_URL
}

export function versionUrl(id: VersionId) {
  return `${import.meta.env.BASE_URL}?v=${id}`
}

export function readVersionParam(): VersionId | null {
  const value = new URLSearchParams(window.location.search).get('v')
  return versions.some((item) => item.id === value) ? (value as VersionId) : null
}
