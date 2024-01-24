import W1 from '../MockData/MockImages/W1.jpg';
import W2 from '../MockData/MockImages/W2.jpg';
import W3 from '../MockData/MockImages/W3.jpg';
import W4 from '../MockData/MockImages/W4.jpg';
import W5 from '../MockData/MockImages/W5.jpg';
import W6 from '../MockData/MockImages/W6.jpg';
import BC1 from '../MockData/MockImages/BC1.jpg';
import BC2 from '../MockData/MockImages/BC2.jpg';
import BC3 from '../MockData/MockImages/BC3.jpg';
import BC4 from '../MockData/MockImages/BC4.jpg';
import BC5 from '../MockData/MockImages/BC5.jpg';
import BK1 from '../MockData/MockImages/BK1.jpg';
import BK2 from '../MockData/MockImages/BK2.jpg';
import BK3 from '../MockData/MockImages/BK3.jpg';
import BK4 from '../MockData/MockImages/BK4.jpg';
import BK5 from '../MockData/MockImages/BK5.jpg';
import BK6 from '../MockData/MockImages/BK6.jpg';
import BAG1 from '../MockData/MockImages/BlackAntiqueGoldRidge1.jpg';
import BAG2 from '../MockData/MockImages/BlackAntiqueGoldRidge2.jpg';
import BG1 from '../MockData/MockImages/BlackGold1.jpg';
import BG2 from '../MockData/MockImages/BlackGold2.jpg';
import BG3 from '../MockData/MockImages/BlackGold3.jpg';
import BG4 from '../MockData/MockImages/BlackGold4.jpg';
import BG6 from '../MockData/MockImages/BlackGold6.jpg';
import BG7 from '../MockData/MockImages/BlackGold7.jpg';
import BCF1 from '../MockData/MockImages/BlueCopperFire1.jpg';
import BCF2 from '../MockData/MockImages/BlueCopperFire2.jpg';
import BCF3 from '../MockData/MockImages/BlueCopperFire3.jpg';
import BCF4 from '../MockData/MockImages/BlueCopperFire4.jpg';
import FP1 from '../MockData/MockImages/FlatPlane1.jpg';
import FP2 from '../MockData/MockImages/FlatPlane2.jpg';
import FP3 from '../MockData/MockImages/FlatPlane3.jpg';
import FP4 from '../MockData/MockImages/FlatPlane4.jpg';
import FP5 from '../MockData/MockImages/FlatPlane5.jpg';
import FP6 from '../MockData/MockImages/FlatPlane6.jpg';
import GE1 from '../MockData/MockImages/GreenEnvy1.jpg';
import GE2 from '../MockData/MockImages/GreenEnvy2.jpg';
import NR1 from '../MockData/MockImages/NavyRidge1.jpg';
import NR2 from '../MockData/MockImages/NavyRidge2.jpg';
import NR3 from '../MockData/MockImages/NavyRidge3.jpg';
import NR4 from '../MockData/MockImages/NavyRidge4.jpg';
import NR5 from '../MockData/MockImages/NavyRidge5.jpg';
import NR6 from '../MockData/MockImages/NavyRidge6.jpg';
import NC1 from '../MockData/MockImages/NC1.jpg';
import NC2 from '../MockData/MockImages/NC2.jpg';
import NC3 from '../MockData/MockImages/NC3.jpg';
import NC4 from '../MockData/MockImages/NC4.jpg';
import WG1 from '../MockData/MockImages/WG1.jpg';
import WG2 from '../MockData/MockImages/WG2.jpg';
import WG3 from '../MockData/MockImages/WG3.jpg';
import WG4 from '../MockData/MockImages/WG4.jpg';
import WHG1 from '../MockData/MockImages/WhiteG1.jpg';
import WHG2 from '../MockData/MockImages/WhiteG2.jpg';
import WHG3 from '../MockData/MockImages/WhiteG3.jpg';
import WHG4 from '../MockData/MockImages/WhiteG4.jpg';
import WR1 from '../MockData/MockImages/WR1.jpg';
import WR2 from '../MockData/MockImages/WR2.jpg';
import WR3 from '../MockData/MockImages/WR3.jpg';
import WR4 from '../MockData/MockImages/WR4.jpg';
import GR1 from '../MockData/MockImages/Grey1.jpg';
import GR2 from '../MockData/MockImages/Grey2.jpg';
import GR3 from '../MockData/MockImages/Grey3.jpg';
import GR4 from '../MockData/MockImages/Grey4.jpg';
import GR5 from '../MockData/MockImages/Grey5.jpg';
import GR6 from '../MockData/MockImages/Grey6.jpg';
import P1 from '../MockData/MockImages/Peak1.jpg';
import P2 from '../MockData/MockImages/Peak2.jpg';
import P3 from '../MockData/MockImages/Peak3.jpg';
import P4 from '../MockData/MockImages/Peak4.jpg';
import S1 from '../MockData/MockImages/S1.jpg';
import S2 from '../MockData/MockImages/S2.jpg';
import S3 from '../MockData/MockImages/S3.jpg';
import S4 from '../MockData/MockImages/S4.jpg';
import Star1 from '../MockData/MockImages/Star1.jpg';
import Star2 from '../MockData/MockImages/Star2.jpg';
import Star3 from '../MockData/MockImages/Star3.jpg';
import Star4 from '../MockData/MockImages/Star4.jpg';
import Wave1 from '../MockData/MockImages/Wave1.jpg';
import Wave2 from '../MockData/MockImages/Wave2.jpg';
import Wave3 from '../MockData/MockImages/Wave3.jpg';
import Wave4 from '../MockData/MockImages/Wave4.jpg';
import B1 from '../MockData/MockImages/Blossom1.jpg';
import B2 from '../MockData/MockImages/Blossom2.jpg';
import B3 from '../MockData/MockImages/Blossom3.jpg';
import B4 from '../MockData/MockImages/Blossom4.jpg';
import B5 from '../MockData/MockImages/Blossom5.jpg';
import GB1 from '../MockData/MockImages/GB1.jpg';
import GB2 from '../MockData/MockImages/GB2.jpg';
import GB3 from '../MockData/MockImages/GB3.jpg';
import GB4 from '../MockData/MockImages/GB4.jpg';

const PRODUCTS = [
  {
    id: '1',
    key: '1',
    title: 'Serene Ripples',
    artist: 'Olivia Brown',
    images: [W1, W2, W2, W3, W4, W5, W6],
    description:
      'A textured portrayal of tranquility in white, evoking the gentle caress of wind over a snow-blanketed landscape.',
    year: 2021,
    medium: 'Oil on Canvas',
    dimensions: '60x40 cm',
    price: 125,
  },
  {
    id: '2',
    key: '2',
    title: 'Celestial Resonance',
    artist: 'Ethan Taylor',
    images: [BC1, BC2, BC3, BC4, BC5],
    description:
      'Textured black and gold spiral, embodies the cosmic dance of darkness and light.',
    year: 2020,
    medium: 'Acrylic',
    dimensions: '20x20 cm',
    price: 100,
  },
  {
    id: '3',
    key: '3',
    title: 'Aurum Obscurum',
    artist: 'Amelia Johnson',
    images: [BK1, BK2, BK3, BK4, BK5, BK6],
    description:
      'Abstract canvas of layered textures, with golden highlights shimmering on a rich, dark backdrop.',
    year: 2022,
    medium: 'Photography',
    dimensions: 'Print available in various sizes',
    price: 250,
  },
  {
    id: '4',
    key: '4',
    title: 'Golden Veins',
    artist: 'James Wilson',
    images: [BAG1, BAG2],
    description:
      "Luminous gold streaks across textured darkness, evoking earth's artistry, a dance of contrast and splendor.",
    year: 2019,
    medium: 'Digital Art',
    dimensions: '40x30 cm',
    price: 200,
  },
  {
    id: '5',
    key: '5',
    title: 'Ephemeral Gleam',
    artist: 'Sophie Green',
    images: [BG1, BG2, BG3, BG4, BG6, BG7],
    description:
      'Textured contrasts, black depth meets lustrous gold, encapsulating transient beauty in tactile strokes and shimmering ridges.',
    year: 2021,
    medium: 'Ceramics',
    dimensions: 'Various sizes',
    price: 180,
  },
  {
    id: '6',
    key: '6',
    title: 'Ethereal Ridges',
    artist: 'Harry Davis',
    images: [BCF1, BCF2, BCF3, BCF4],
    description:
      'Textured triptych, interplay of light and shadow, tactile ridges, juxtaposing black, white, and metallic gold.',
    year: 2018,
    medium: 'Linocut Print',
    dimensions: '45x35 cm',
    price: 150,
  },
  {
    id: '7',
    key: '7',
    title: 'Glasgow in Rain',
    artist: 'Isabella Morris',
    images: [FP1, FP2, FP3, FP4, FP5, FP6],
    description: 'Textile artwork showcasing a rainy day in Glasgow.',
    year: 2022,
    medium: 'Mixed Textiles',
    dimensions: '50x50 cm',
    price: 220,
  },
  {
    id: '8',
    key: '8',
    title: 'Belfast Night',
    artist: 'Charlotte Young',
    images: [GE1, GE2],
    description: 'Illustration capturing a night scene in Belfast.',
    year: 2023,
    medium: 'Illustration',
    dimensions: 'A3',
    price: 95,
  },
  {
    id: '9',
    key: '9',
    title: 'Brighton Pier Carousel',
    artist: 'Jack Thompson',
    images: [NR1, NR2, NR3, NR4, NR5, NR6],
    description: "Graphic design piece of the Brighton Pier's iconic carousel.",
    year: 2017,
    medium: 'Graphic Design',
    dimensions: '60x40 cm',
    price: 175,
  },
  {
    id: '10',
    key: '10',
    title: 'Fashion of London',
    artist: 'Grace Williams',
    images: [NC1, NC2, NC3, NC4],
    description: "Fashion sketches inspired by London's street style.",
    year: 2019,
    medium: 'Sketches',
    dimensions: 'Various sizes',
    price: 90,
  },
  {
    id: '11',
    key: '11',
    title: 'Edinburgh Castle',
    artist: 'Olivia Brown',
    images: [WG1, WG2, WG3, WG4],
    description: 'A stunning watercolor painting of Edinburgh Castle.',
    year: 2021,
    medium: 'Watercolor',
    dimensions: '50x70 cm',
    price: 350,
  },
  {
    id: '12',
    key: '12',
    title: 'Yorkshire Dales',
    artist: 'Ethan Taylor',
    images: [WHG1, WHG2, WHG3, WHG4],
    description: 'Sculptural representation of the Yorkshire Dales landscape.',
    year: 2020,
    medium: 'Bronze',
    dimensions: '100x75 cm',
    price: 400,
  },
  {
    id: '13',
    key: '13',
    title: 'Welsh Coastline',
    artist: 'Amelia Johnson',
    images: [WR1, WR2, WR3, WR4],
    description: 'Photographic journey along the scenic Welsh coastline.',
    year: 2022,
    medium: 'Photography',
    dimensions: 'Prints available in various sizes',
    price: 275,
  },
  {
    id: '14',
    key: '14',
    title: 'Nottingham Nightlife',
    artist: 'James Wilson',
    images: [GR1, GR2, GR3, GR4, GR5, GR6],
    description:
      'Digital artwork showcasing the vibrant nightlife of Nottingham.',
    year: 2023,
    medium: 'Digital Art',
    dimensions: '40x60 cm',
    price: 320,
  },
  {
    id: '15',
    key: '15',
    title: 'Cornish Seaside',
    artist: 'Sophie Green',
    images: [P1, P2, P3, P4],
    description:
      'A ceramic piece inspired by the tranquility of the Cornish seaside.',
    year: 2021,
    medium: 'Ceramics',
    dimensions: 'Various sizes',
    price: 210,
  },
  {
    id: '16',
    key: '16',
    title: 'Sheffield Steel',
    artist: 'Harry Davis',
    images: [S1, S2, S3, S4],
    description: "A linocut print reflecting Sheffield's industrial heritage.",
    year: 2018,
    medium: 'Linocut Print',
    dimensions: '45x35 cm',
    price: 160,
  },
  {
    id: '17',
    key: '17',
    title: 'Aberdeen Harbor',
    artist: 'Isabella Morris',
    images: [Star1, Star2, Star3, Star4],
    description: 'Textile artwork depicting the busy Aberdeen harbor.',
    year: 2022,
    medium: 'Mixed Textiles',
    dimensions: '50x50 cm',
    price: 230,
  },
  {
    id: '18',
    key: '18',
    title: "Oxford's Ancient Streets",
    artist: 'Charlotte Young',
    images: [Wave1, Wave2, Wave3, Wave4],
    description:
      'An illustration of the ancient and academic streets of Oxford.',
    year: 2023,
    medium: 'Illustration',
    dimensions: 'A3',
    price: 120,
  },
  {
    id: '19',
    key: '19',
    title: 'Norfolk Broads',
    artist: 'Jack Thompson',
    images: [B1, B2, B3, B4, B5],
    description:
      'Graphic design work inspired by the natural beauty of the Norfolk Broads.',
    year: 2017,
    medium: 'Graphic Design',
    dimensions: '60x40 cm',
    price: 195,
  },
  {
    id: '20',
    key: '20',
    title: 'Lake District Serenity',
    artist: 'Grace Williams',
    images: [GB1, GB2, GB3, GB4],
    description:
      'Fashion designs influenced by the serene landscapes of the Lake District.',
    year: 2019,
    medium: 'Sketches',
    dimensions: 'Various sizes',
    price: 85,
  },
];
export default PRODUCTS;
