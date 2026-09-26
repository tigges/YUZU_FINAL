const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const v4Assets = {
  hero: asset('assets/v4/hero.jpg'),
  looks: [
    { src: asset('assets/v4/look-1.jpg'), title: 'Copper & Rose', subtitle: 'Vivid colour' },
    { src: asset('assets/v4/look-2.jpg'), title: 'Vivid red bob', subtitle: 'Colour + cut' },
    { src: asset('assets/v4/ig-3.jpg'), title: 'Salon atmosphere', subtitle: 'Dickens Yard' },
    { src: asset('assets/v4/look-3.jpg'), title: 'Soft layers', subtitle: 'Textured styling' },
    { src: asset('assets/v4/ig-2.jpg'), title: 'Editorial detail', subtitle: 'Precision finish' },
  ],
  servicesMedia: [
    { src: asset('assets/gallery/1.jpg'), label: 'Colour' },
    { src: asset('assets/gallery/6.jpg'), label: 'Cut & styling' },
    { src: asset('assets/v4/service-salon.jpg'), label: 'Salon finish' },
  ],
}
