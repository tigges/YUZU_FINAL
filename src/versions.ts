import { ORIGINALS } from './data'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const versions = [
  {
    id: 'round',
    label: 'Round',
    name: 'Round',
    group: 'Rebuilt',
    kicker: '01',
    summary:
      'The rounded Clean layout, redesigned: readable hero, prices that match the 2025 menu, offers that match their graphics, a lightbox, and a map.',
    noteLabel: 'What changed',
    note: 'Clean with border-radius added. The headline was a keyword list, offer titles contradicted the pictures, and “from” prices did not match the menu.',
    preview: asset('assets/clean/hero.jpg'),
    previewAlt: 'Wavy brunette hair, photographed at Yuzu Hair & Beauty',
    origin: ORIGINALS.round,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    name: 'Instagram',
    group: 'Rebuilt',
    kicker: '02',
    summary:
      'Sage, blossom, and the real @yuzuhairandbeauty feed — led by the colour work, with captions, filters, weekday offers, and a menu that stays on a phone.',
    noteLabel: 'What changed',
    note: 'A profile clone. The portfolio sat under the grid, reel tiles did not say they leave the site, and the phone hid Work, Feed, and Visit.',
    preview: asset('assets/instagram/09.jpg'),
    previewAlt: 'Copper balayage photographed in the salon',
    origin: ORIGINALS.instagram,
  },
  {
    id: 'hairlust',
    label: 'Hairlust',
    name: 'Hairlust',
    group: 'Rebuilt',
    kicker: '03',
    summary:
      'The Hairlust rhythm — announcement, hero, ranges, service cards, three review columns — with a real visit section and contrast that holds in every state.',
    noteLabel: 'What changed',
    note: 'A shop homepage forced onto a salon: a lilac bar below contrast, a form that never sends, and the same three reviews shown twice.',
    preview: asset('assets/v4/hero.jpg'),
    previewAlt: 'Brunette waves, photographed in the salon',
    origin: ORIGINALS.hairlust,
  },
  {
    id: 'round-sept',
    label: 'Round Sept',
    name: 'Round clone',
    group: 'September clones',
    kicker: 'Clone',
    summary:
      'The September Round page, copied as it was: rounded Clean layout, keyword headline, and the original offer titles.',
    noteLabel: 'Identical to',
    note: 'https://tigges.github.io/YUZU_SEPT_26/?v=round — including About, Questions, and Prices.',
    preview: asset('assets/clean/hero.jpg'),
    previewAlt: 'Wavy brunette hair, photographed at Yuzu Hair & Beauty',
    origin: ORIGINALS.round,
  },
  {
    id: 'instagram-sept',
    label: 'IG Sept',
    name: 'Instagram clone',
    group: 'September clones',
    kicker: 'Clone',
    summary:
      'The September Instagram page, copied as it was: profile header, three-column feed, and the portfolio underneath.',
    noteLabel: 'Identical to',
    note: 'https://tigges.github.io/YUZU_SEPT_26/?v=instagram',
    preview: asset('assets/instagram/09.jpg'),
    previewAlt: 'Copper balayage photographed in the salon',
    origin: ORIGINALS.instagram,
  },
  {
    id: 'hairlust-sept',
    label: 'HL Sept',
    name: 'Hairlust clone',
    group: 'September clones',
    kicker: 'Clone',
    summary:
      'The September Hairlust page, copied as it was: announcement, ranges, service cards, repeated reviews, and the email field.',
    noteLabel: 'Identical to',
    note: 'https://tigges.github.io/YUZU_SEPT_26/?v=hairlust',
    preview: asset('assets/v4/hero.jpg'),
    previewAlt: 'Brunette waves, photographed in the salon',
    origin: ORIGINALS.hairlust,
  },
  {
    id: 'japanese',
    label: 'Japanese',
    name: 'Japanese',
    group: 'From Round',
    kicker: '柚子',
    summary:
      'Round’s rounded rooms, reset in ink, paper, and a seal-red book button. The salon stays in English. Japanese is only the brand voice.',
    noteLabel: 'Based on',
    note: 'The Round layout — gallery, services, weekday offers, reviews, and visit — with mincho headlines and a hanko mark.',
    preview: asset('assets/clean/hero.jpg'),
    previewAlt: 'Wavy brunette hair, photographed at Yuzu Hair & Beauty',
    origin: null,
  },
  {
    id: 'carousel',
    label: 'Carousel',
    name: 'Carousel',
    group: 'From Round',
    kicker: 'Hero',
    summary:
      'Round’s rooms, with a sliding hero: a recent colour, Colour Tuesdays, and the Dickens Yard visit, in the same paper, ink, and clay.',
    noteLabel: 'Based on',
    note: 'The Round page. Gallery, services, prices, questions, and visit stay. The hero is a carousel.',
    preview: asset('assets/clean/hero.jpg'),
    previewAlt: 'Wavy brunette hair, photographed at Yuzu Hair & Beauty',
    origin: null,
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
