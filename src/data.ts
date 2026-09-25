export const LIVE_SITE_URL = 'https://www.yuzuhairandbeauty.london/'
export const BOOKING_URL = 'https://www.phorest.com/salon/yuzuhairandbeauty'
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/bhFS5wwkW3xxAdKd8'
export const MAPS_DIRECTIONS_URL = 'https://maps.app.goo.gl/bhFS5wwkW3xxAdKd8'
export const MAPS_EMBED_URL =
  'https://www.openstreetmap.org/export/embed.html?bbox=-0.307%2C51.511%2C-0.297%2C51.5165&layer=mapnik&marker=51.5137%2C-0.302'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const PRICE_LIST_URL = asset('price-list.pdf')
export const PATCH_TEST_PDF_URL = asset('patch-testing.pdf')
export const TERMS_URL = 'https://www.yuzuhairandbeauty.london/terms-and-conditions'
export const OFFERS_PAGE_URL = 'https://www.yuzuhairandbeauty.london/o-f-f-e-r-s-1'
export const WHATSAPP_URL = 'https://wa.me/442088402244'

export const ORIGINALS = {
  round: 'https://tigges.github.io/YUZU_SEPT_26/?v=round',
  instagram: 'https://tigges.github.io/YUZU_SEPT_26/?v=instagram',
  hairlust: 'https://tigges.github.io/YUZU_SEPT_26/?v=hairlust',
} as const

export const social = {
  instagram: 'https://www.instagram.com/yuzuhairandbeauty/',
  tiktok: 'https://www.tiktok.com/@yuzuhairandbeauty.est16',
  facebook: 'https://www.facebook.com/YUZUHairandBeauty/',
  email: 'mailto:info@yuzuhairandbeauty.co.uk',
}

export const contact = {
  name: 'Yuzu Hair & Beauty',
  addressLines: ['5 Dickens Yard', 'Longfield Avenue', 'Ealing, W5 2TD'],
  phone: '020 8840 2244',
  phoneHref: 'tel:+442088402244',
  email: 'info@yuzuhairandbeauty.co.uk',
  hours: [
    { days: 'Tuesday – Friday', time: '10am – 8pm' },
    { days: 'Saturday', time: '9am – 6pm' },
    { days: 'Monday & Sunday', time: 'Closed' },
  ],
}

export const gallery = [
  { src: asset('assets/gallery/1.jpg'), alt: 'Copper and rose colour with textured fringe', title: 'Copper & rose' },
  { src: asset('assets/gallery/2.jpg'), alt: 'Long sleek dark hair, freshly styled in salon', title: 'Long and sleek' },
  { src: asset('assets/gallery/3.jpg'), alt: 'Deep teal bob with a soft, healthy finish', title: 'Teal bob' },
  { src: asset('assets/gallery/4.jpg'), alt: 'Violet and blue colour melt, worn long', title: 'Violet melt' },
  { src: asset('assets/gallery/5.jpg'), alt: 'Vivid red bob with a blunt fringe', title: 'Red bob' },
  { src: asset('assets/gallery/6.jpg'), alt: 'Long chocolate brown hair, cut and blow-dried', title: 'Chocolate brown' },
]

export const reviews = [
  {
    name: 'Alexa',
    quote: 'Amazing — focused on every detail',
    body: 'Listened to my requests and delivered exactly what I wanted. I already booked my follow-up.',
    photo: asset('assets/reviews/1.jpg'),
  },
  {
    name: 'Rachel',
    quote: 'I always leave feeling a million dollars',
    body: 'Cut and colour once again exactly how I asked. Calm, expert and friendly throughout.',
    photo: asset('assets/reviews/2.jpg'),
  },
  {
    name: 'Steve',
    quote: 'A brilliant artist working in hair',
    body: 'Jasmine is not just another haircut, but a brilliant artist working in hair.',
    photo: asset('assets/reviews/3.jpg'),
  },
]

type PriceRow = { name: string; senior: string; stylist: string }

export const priceGroups: { title: string; rows: PriceRow[] }[] = [
  {
    title: 'Cut & style',
    rows: [
      { name: 'Ladies wash, cut & style', senior: '£87', stylist: '£58' },
      { name: 'Gents wash, cut & style', senior: '£58', stylist: '—' },
      { name: 'Kids (12 & under)', senior: '£29', stylist: '£23' },
      { name: 'Teens (13–16) boys', senior: '£41', stylist: '£35' },
      { name: 'Teens (13–16) girls', senior: '£52', stylist: '£35' },
      { name: 'Blow-dry', senior: '£58', stylist: '£41' },
    ],
  },
  {
    title: 'Colour',
    rows: [
      { name: 'Full head', senior: '£101', stylist: '£87' },
      { name: 'Roots', senior: '£88', stylist: '£75' },
      { name: 'In-between full head', senior: '£124', stylist: '£101' },
      { name: 'In-between roots', senior: '£111', stylist: '£88' },
      { name: 'Illumina colouring', senior: '£133', stylist: '—' },
    ],
  },
  {
    title: 'Highlights / balayage / foiliage',
    rows: [
      { name: 'Full head', senior: '£150', stylist: '£98' },
      { name: 'Half head', senior: '£115', stylist: '£75' },
      { name: 'T-section', senior: '£89', stylist: '£64' },
      { name: 'Long hair below chest', senior: '+£41', stylist: '+£41' },
      { name: 'Toner', senior: '£38', stylist: '£38' },
      { name: 'Blending', senior: '£41', stylist: '£41' },
      { name: 'Colour remover', senior: '£115', stylist: '£104' },
      { name: 'Pre-lighten full head', senior: '£179', stylist: '£138' },
      { name: 'Pre-lighten roots', senior: '£127', stylist: '£104' },
    ],
  },
]

export const treatments = [
  { name: 'Nashi Filler Express', price: '£33' },
  { name: 'Nashi Filler 1, 2, 3 intense moisture', price: '£46' },
  { name: 'K2.0 short', price: '£41' },
  { name: 'K2.0 medium', price: '£52' },
  { name: 'K2.0 long', price: '£64' },
  { name: 'K2.0 extra long', price: '£75' },
  { name: 'Aura smoothing, long (3–4 months)', price: '£357' },
  { name: 'Aura smoothing, below shoulder', price: '£294' },
  { name: 'Aura smoothing, above shoulder', price: '£228' },
  { name: 'Aura smoothing, short', price: '£117–165' },
]

export const offers = [
  {
    id: 'tuesdays',
    kicker: 'Colour Tuesdays',
    title: '50% off colour',
    detail: 'Your most expensive colour service, with a full-priced wash, cut and blow-dry. Senior stylist.',
    src: asset('assets/clean/offer-tuesdays.jpg'),
    alt: 'Colour Tuesdays, 50% off with a senior stylist',
  },
  {
    id: 'wednesdays',
    kicker: 'Smooth Wednesdays',
    title: '25% off smoothing',
    detail: 'Brazilian blow-dry / Aura smoothing. Formaldehyde and ammonia free.',
    src: asset('assets/clean/offer-wednesdays.jpg'),
    alt: 'Smooth Wednesdays, 25% off smoothing treatments',
  },
  {
    id: 'thursdays',
    kicker: 'Thursdays',
    title: '50% off colour',
    detail: 'Colour celebration with a full-priced wash, cut and blow-dry. Stylist.',
    src: asset('assets/clean/offer-thursdays.jpg'),
    alt: 'Thursdays are the new Tuesdays, 50% off with a stylist',
  },
]

export const extras = [
  {
    title: 'Refer a friend',
    detail: 'When they complete their first appointment, you receive £10 credit. No limit on referrals.',
  },
  {
    title: 'Rebook the same day',
    detail: 'Book your next visit before you leave and take 10% off that appointment.',
  },
  {
    title: '4 blow-drys',
    detail: '£156, valid 6 months. Haircuts not included. Non-refundable.',
  },
]

export const services = [
  {
    title: 'Cut & styling',
    copy: 'Ladies wash, cut and style from £58 with a stylist, £87 with a senior. Kids from £29.',
    from: '£29',
  },
  {
    title: 'Colour',
    copy: 'Roots from £75, full head from £87, including Illumina with a senior stylist.',
    from: '£75',
  },
  {
    title: 'Highlights & balayage',
    copy: 'T-section from £64, half head from £75, full head from £98, with toner and blending.',
    from: '£64',
  },
  {
    title: 'Treatments',
    copy: 'Nashi fillers from £33 and K2.0 moisture. Aura smoothing from £117, formaldehyde-free.',
    from: '£33',
  },
]

export const faqs = [
  {
    question: 'How much is a haircut at Yuzu in Ealing?',
    answer:
      'A ladies wash, cut and style is £58 with a stylist and £87 with a senior stylist. A gents wash, cut and style is £58. Kids aged 12 and under start at £29. Blow-dries start at £41.',
  },
  {
    question: 'Do I need a patch test?',
    answer:
      'Yes. Colour services need a mandatory patch test, including for existing guests, at least 48 hours before the appointment. Book the test and the chair on Phorest.',
  },
  {
    question: 'Where is the salon?',
    answer:
      '5 Dickens Yard, Longfield Avenue, Ealing, W5 2TD — about two minutes from Ealing Broadway station. This is Yuzu Hair & Beauty in Ealing, not YUZUHAIR in Hucknall.',
  },
  {
    question: 'When are you open?',
    answer: 'Tuesday to Friday, 10am–8pm. Saturday, 9am–6pm. Monday and Sunday closed.',
  },
]

export const instagram = {
  handle: '@yuzuhairandbeauty',
  name: 'YUZU Hair & Beauty',
  followers: '2,952',
  following: '510',
  posts: '776',
  profile: asset('assets/instagram/profile.jpg'),
  featured: [
    {
      src: asset('assets/instagram/09-1.jpg'),
      alt: 'Before: long dark wavy hair in the salon chair',
      title: 'Before',
      detail: 'The same client, before the copper',
    },
    {
      src: asset('assets/instagram/09.jpg'),
      alt: 'Copper balayage with a glossy finish',
      title: 'After',
      detail: 'Copper balayage, glossy and dimensional',
    },
  ],
  blonde: [
    {
      src: asset('assets/instagram/08.jpg'),
      alt: 'Dimensional blonde with silky layers, photographed in salon',
      title: 'Soft blonde',
      detail: 'Colour and cut, salon-fresh finish',
    },
    {
      src: asset('assets/instagram/08-1.jpg'),
      alt: 'Back view of blended blonde colour',
      title: 'From behind',
      detail: 'Movement through the lengths',
    },
  ],
  feed: [
    {
      src: asset('assets/instagram/00.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/DWhEa09jImn/',
      kind: 'image' as const,
      group: 'offers' as const,
      label: 'Colour Tuesdays · 50% off',
    },
    {
      src: asset('assets/instagram/01.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/DWhDiM2DLZO/',
      kind: 'image' as const,
      group: 'offers' as const,
      label: 'Smooth Wednesdays · 25% off',
    },
    {
      src: asset('assets/instagram/02.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/DWhDWkJjMmZ/',
      kind: 'image' as const,
      group: 'offers' as const,
      label: 'Colour Thursdays · 50% off',
    },
    {
      src: asset('assets/instagram/03.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/reel/DcyBdOeMgqE/',
      kind: 'reel' as const,
      group: 'salon' as const,
      label: 'Behind the scenes at Dickens Yard',
    },
    {
      src: asset('assets/instagram/04.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/reel/Dcl0vYwM16h/',
      kind: 'reel' as const,
      group: 'salon' as const,
      label: 'Meet the team',
    },
    {
      src: asset('assets/instagram/05.jpg'),
      href: 'https://www.instagram.com/itslammmmmm/reel/DcI4Ygruv3R/',
      kind: 'reel' as const,
      group: 'salon' as const,
      label: 'Asian beauty spots in London',
    },
    {
      src: asset('assets/instagram/06.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/reel/DcBQVFEt3EP/',
      kind: 'reel' as const,
      group: 'salon' as const,
      label: '10-year anniversary',
    },
    {
      src: asset('assets/instagram/07.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/reel/Db-ybHkMh-R/',
      kind: 'reel' as const,
      group: 'salon' as const,
      label: 'Celebrating small businesses',
    },
    {
      src: asset('assets/instagram/08.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/Db2s4CCDLJ_/',
      kind: 'carousel' as const,
      group: 'colour' as const,
      label: 'Dimensional blonde',
    },
    {
      src: asset('assets/instagram/09.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/Db0-9OpDJ3O/',
      kind: 'carousel' as const,
      group: 'colour' as const,
      label: 'Copper balayage',
    },
    {
      src: asset('assets/instagram/10.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/Daz2v-MstsH/',
      kind: 'image' as const,
      group: 'salon' as const,
      label: 'Summer party pastries',
    },
    {
      src: asset('assets/instagram/11.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/Danv113MFV3/',
      kind: 'image' as const,
      group: 'salon' as const,
      label: 'Tooth gems at the summer party',
    },
  ],
}

export const media = {
  hero: asset('assets/clean/hero.jpg'),
  logo: asset('assets/clean/logo.png'),
  portrait: asset('assets/clean/portrait.png'),
  wordmark: asset('assets/wix/logo.png'),
  hairlustHero: asset('assets/v4/hero.jpg'),
  salon: asset('assets/v4/ig-3.jpg'),
  colour: asset('assets/v4/look-1.jpg'),
  cut: asset('assets/v4/look-3.jpg'),
}
