import backgroundImage from '../assets/images/Background.jpg'
import campingImage from '../assets/images/camping.jpg'
import dalLakeImage from '../assets/images/dal_lake.jpg'
import forestImage from '../assets/images/Forest.jpg'
import gulmargImage from '../assets/images/Gulmarg.jpg'
import hutInWoodsImage from '../assets/images/hut_in_woods.jpg'
import mountainsImage from '../assets/images/Mountains.jpg'
import snowGulmargImage from '../assets/images/snow_covered_gulmarg.jpg'
import gulmargMeadowImage from '../assets/images/gulmarg-meadows.jpg'
import pahalgamImage from '../assets/images/pahalgam.jpg'

export const destinations = [
  {
    name: 'Dal Lake',
    region: 'Srinagar',
    description: 'Shikara rides, heritage houseboats, and soft sunrise reflections.',
    idealFor: 'Couples and relaxed family travel',
    duration: '3N / 4D',
    bestSeason: 'April to October',
    image: dalLakeImage,
    highlights: ['Shikara cruise', 'Floating market', 'Houseboat stay'],
  },
  {
    name: 'Gulmarg',
    region: 'North Kashmir',
    description: 'Snow slopes, gondola rides, pine valleys, and alpine meadows.',
    idealFor: 'Adventure seekers and winter travelers',
    duration: '4N / 5D',
    bestSeason: 'December to March',
    image: snowGulmargImage,
    highlights: ['Ski and snowboard', 'Gondola Phase 2', 'Snow valley walks'],
  },
  {
    name: 'Pahalgam',
    region: 'Anantnag',
    description: 'Riverside valleys, cedar forests, and scenic countryside drives.',
    idealFor: 'Leisure holidays and honeymoon routes',
    duration: '4N / 5D',
    bestSeason: 'May to September',
    image: pahalgamImage,
    highlights: ['Aru Valley', 'Lidder riverbank', 'Countryside picnic routes'],
  },
  {
    name: 'Sonamarg',
    region: 'Ganderbal',
    description: 'Glacier gateways, high meadows, and mountain stream trails.',
    idealFor: 'Road-trip enthusiasts and photographers',
    duration: '3N / 4D',
    bestSeason: 'June to September',
    image: mountainsImage,
    highlights: ['Thajiwas glacier', 'Scenic drive', 'High-altitude viewpoints'],
  },
  {
    name: 'Tulip Garden',
    region: 'Srinagar',
    description: 'Seasonal bloom walks set against snow-lined Himalayan backdrops.',
    idealFor: 'Spring travelers and family groups',
    duration: '2N / 3D',
    bestSeason: 'Late March to April',
    image: backgroundImage,
    highlights: ['Tulip terraces', 'Garden promenade', 'Spring city tour'],
  },
  {
    name: 'Betaab Valley',
    region: 'Pahalgam Circuit',
    description: 'Wide green floors, crystal streams, and cinematic mountain views.',
    idealFor: 'Nature-focused itineraries',
    duration: '3N / 4D',
    bestSeason: 'April to October',
    image: hutInWoodsImage,
    highlights: ['Valley viewpoints', 'Forest huts', 'Riverside nature walk'],
  },
]

export const destinationGallery = [
  { name: 'Valley Camp', image: campingImage },
  { name: 'Gulmarg Meadow', image: gulmargMeadowImage },
]
