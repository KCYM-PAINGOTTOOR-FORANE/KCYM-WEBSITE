import type { Parish } from '../types';

export const parishes: Parish[] = [
  {
    slug: 'paingottoor',
    name: "St. Antony's Forane Church",
    place: 'Paingottoor',
    badge: 'Forane',
    tagline:
      'A vibrant community of youth dedicated to faith, fellowship, and service in the heart of our diocese.',
    history:
      "Established in the early days of the diocese, the KCYM unit at St. Antony's Forane Church has a rich legacy of spiritual awakening and social action. For over three decades, our youth have been at the forefront of community development, organizing blood donation camps, educational seminars, and cultural festivals that unite our parishioners.",
    focus:
      'Today, our focus lies in bridging the gap between traditional values and modern challenges. We prioritize youth mental health awareness, career guidance programs, and active participation in the liturgical life of the church. We strive to be the energetic hands and feet of Christ in our local community.',
    cardImage: '/Parishes/Paingottoor.jpg',
    heroImage: '/Parishes/Paingottoor.jpg',
    accent: 'primary',
  },
  {
    slug: 'kulappuram',
    name: 'BVM Dolours Church',
    place: 'Kulappuram',
    badge: 'Parish',
    tagline:
      'A vibrant community of youth dedicated to faith, fellowship, and service in the heart of our diocese.',
    history:
      'Established in the early days of the diocese, the KCYM unit at BVM Dolours Church has a rich legacy of spiritual awakening and social action. For over three decades, our youth have been at the forefront of community development, organizing blood donation camps, educational seminars, and cultural festivals that unite our parishioners.',
    focus:
      'Today, our focus lies in bridging the gap between traditional values and modern challenges. We prioritize youth mental health awareness, career guidance programs, and active participation in the liturgical life of the church. We strive to be the energetic hands and feet of Christ in our local community.',
    cardImage: '/Parishes/kulappuram.jpg',
    heroImage: '/Parishes/kulappuram.jpg',
    accent: 'primary',
  },
  {
    slug: 'mullaringad',
    name: 'BVM Lourdes Church',
    place: 'Mullaringad',
    badge: 'Parish',
    tagline:
      'A vibrant community of youth dedicated to faith, fellowship, and service in the heart of our diocese.',
    history:
      'Established in the early days of the diocese, the KCYM unit at BVM Lourdes Church has a rich legacy of spiritual awakening and social action. For over three decades, our youth have been at the forefront of community development, organizing blood donation camps, educational seminars, and cultural festivals that unite our parishioners.',
    focus:
      'Today, our focus lies in bridging the gap between traditional values and modern challenges. We prioritize youth mental health awareness, career guidance programs, and active participation in the liturgical life of the church. We strive to be the energetic hands and feet of Christ in our local community.',
    cardImage: '/Parishes/mullaringad.jpg',
    heroImage: '/Parishes/mullaringad.jpg',
    accent: 'secondary',
  },
  {
    slug: 'pothanikad',
    name: 'St. Francis Xavier Church',
    place: 'Pothanikad',
    badge: 'Parish',
    tagline:
      'A vibrant community of youth dedicated to faith, fellowship, and service in the heart of our diocese.',
    history:
      'Established in the early days of the diocese, the KCYM unit at St. Francis Xavier Church has a rich legacy of spiritual awakening and social action. For over three decades, our youth have been at the forefront of community development, organizing blood donation camps, educational seminars, and cultural festivals that unite our parishioners.',
    focus:
      'Today, our focus lies in bridging the gap between traditional values and modern challenges. We prioritize youth mental health awareness, career guidance programs, and active participation in the liturgical life of the church. We strive to be the energetic hands and feet of Christ in our local community.',
    cardImage: '/Parishes/pothanicad.jpg',
    heroImage: '/Parishes/pothanicad.jpg',
    accent: 'primary',
  },
  {
    slug: 'rajagiri',
    name: 'Christuraj Church',
    place: 'Rajagiri',
    badge: 'Parish',
    tagline:
      'A vibrant community of youth dedicated to faith, fellowship, and service in the heart of our diocese.',
    history:
      'Established in the early days of the diocese, the KCYM unit at Christuraj Church has a rich legacy of spiritual awakening and social action. For over three decades, our youth have been at the forefront of community development, organizing blood donation camps, educational seminars, and cultural festivals that unite our parishioners.',
    focus:
      'Today, our focus lies in bridging the gap between traditional values and modern challenges. We prioritize youth mental health awareness, career guidance programs, and active participation in the liturgical life of the church. We strive to be the energetic hands and feet of Christ in our local community.',
    cardImage: '/Parishes/rajagiri.jpg',
    heroImage: '/Parishes/rajagiri.jpg',
    accent: 'secondary',
  },
  {
    slug: 'kadavoor',
    name: 'St. George Church',
    place: 'Kadavoor',
    badge: 'Parish',
    tagline:
      'A vibrant community of youth dedicated to faith, fellowship, and service in the heart of our diocese.',
    history:
      'Established in the early days of the diocese, the KCYM unit at St. George Church has a rich legacy of spiritual awakening and social action. For over three decades, our youth have been at the forefront of community development, organizing blood donation camps, educational seminars, and cultural festivals that unite our parishioners.',
    focus:
      'Today, our focus lies in bridging the gap between traditional values and modern challenges. We prioritize youth mental health awareness, career guidance programs, and active participation in the liturgical life of the church. We strive to be the energetic hands and feet of Christ in our local community.',
    cardImage: '/Parishes/kadavoor.jpg',
    heroImage: '/Parishes/kadavoor.jpg',
    accent: 'primary',
  },
  {
    slug: 'punnamattam',
    name: "St. Sebastian's Church",
    place: 'Punnamattam',
    badge: 'Parish',
    tagline:
      'A vibrant community of youth dedicated to faith, fellowship, and service in the heart of our diocese.',
    history:
      "Established in the early days of the diocese, the KCYM unit at St. Sebastian's Church has a rich legacy of spiritual awakening and social action. For over three decades, our youth have been at the forefront of community development, organizing blood donation camps, educational seminars, and cultural festivals that unite our parishioners.",
    focus:
      'Today, our focus lies in bridging the gap between traditional values and modern challenges. We prioritize youth mental health awareness, career guidance programs, and active participation in the liturgical life of the church. We strive to be the energetic hands and feet of Christ in our local community.',
    cardImage: '/Parishes/punnamattom.jpg',
    heroImage: '/Parishes/punnamattom.jpg',
    accent: 'secondary',
  },
];

export function getParishBySlug(slug: string): Parish | undefined {
  return parishes.find((parish) => parish.slug === slug);
}
