export interface Tour {
  id: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  duration: string;
  altitude: string;
  image: string;
  gallery?: string[];
  featured?: boolean;
  recommended?: boolean;
  exclusive?: boolean;
  objectives?: string[];
  characteristics?: string[];
  logistics?: string[];
}

// Common data for detailed modals
const commonObjectives = [
  'Diseño de itinerario personalizado',
  'Promociones por onomásticos y ocasiones especiales',
  'Moda y diseño de outfit prehispánico',
  'Alimentación saludable y balanceada',
  'Cuidado corporal y facial',
  'Reflexión y trascendencia mental y espiritual',
  'Degustación de platos y bebidas típicos de la región Cusco',
  'Sesión de fotografía profesional',
  'Disfrute y goce al 100%',
  'Ofertas y regalos al reservar',
  'Bonos y membresía al afiliarse',
  'Sorpresas y premios (artículos para el hogar)',
  'Explicación y paradas en los sitios arqueológicos'
];

const commonCharacteristics = [
  'Confort del visitante',
  'Calidez familiar',
  'Alimentación orgánica',
  'Sostenibilidad en la Moda y diseño del outfit',
  'Pernoctes gratificantes',
  'Excelente toma de decisiones',
  'Eficiencia en el desempeño laboral',
  'Profesionalismo y calidad en el servicio a todo nivel y ámbito',
  'Búsqueda de aprehensión de nuevos conocimientos y experiencias',
  'Inteligencia emocional',
  'Inspiración personal y grupal'
];

const commonLogistics = [
  'Perfil de los profesionales (staff)',
  'Casa de cambios de divisa',
  'Descuentos en Tiendas de souvenirs, artesanía y manualidades',
  'Alojamiento acorde al gusto dl visitante',
  'Transporte 100% garantizado',
  'Guiado profesional',
  'Talleres teóricos y prácticos',
  'Participación y conexión con la comunidad',
  'Practicas y rituales tradicionales y ancestrales'
];

// Cusco Images
import cuscoPlaza from '../assets/cuzco/plaza.jpg';
import cuscoArqueologia from '../assets/cuzco/arqueologia.jpg';
import cuscoFestividad from '../assets/cuzco/festividad.jpg';
import cuscoGastronomia from '../assets/cuzco/gastronomia.jpg';
import cuscoCalle from '../assets/cuzco/calle2.jpg';
import cuscoSauna from '../assets/cuzco/sauana.jpg';

// Valle Sagrado Images
import valleMain from '../assets/ValleSagrado/valle.jpg';
import vallePisac from '../assets/ValleSagrado/pisac.jpg';
import valleMercado from '../assets/ValleSagrado/mercado.jpg';
import valleTradicion from '../assets/ValleSagrado/tradicion.jpg';
import valleTejedores from '../assets/ValleSagrado/tejedores.png';
import valleGastronomia from '../assets/ValleSagrado/gastronomia.jpg';

// Machu Picchu Images
import mpMain from '../assets/machupichu/machupichu.jpg';
import mpSenderismo from '../assets/machupichu/senderismo.jpg';
import mpCatarata from '../assets/machupichu/catarata.jpg';
import mpTermales from '../assets/machupichu/termales.jpg';
import mpMariposario from '../assets/machupichu/mariposario.jpg';
import mpArqueologico from '../assets/machupichu/arqueologico.jpg';

// Choquequirao Images
import choque1 from '../assets/Cusco-Choquequiraw/1tours.jpg';
import choque2 from '../assets/Cusco-Choquequiraw/2tours.jpg';
import choque3 from '../assets/Cusco-Choquequiraw/3tours.jpg';
import choque4 from '../assets/Cusco-Choquequiraw/4tours.jpg';

// Rainbow Mountain Images
import mountain1 from '../assets/Cusco-Montaña/1tours.jpg';
import mountain2 from '../assets/Cusco-Montaña/2tours.jpg';
import mountain3 from '../assets/Cusco-Montaña/3tours.jpg';

// Humantay Lagoon Images
import laguna1 from '../assets/Cusco-Laguna/1tours.jpg';
import laguna2 from '../assets/Cusco-Laguna/2tours.jpg';
import laguna3 from '../assets/Cusco-Laguna/3tours.jpg';

// Salkantay Trek Images
import camina1 from '../assets/Cusco-Caminata/1tours.jpg';
import camina2 from '../assets/Cusco-Caminata/2tours.jpg';
import camina3 from '../assets/Cusco-Caminata/3tours.jpg';

// Valle Sagrado - MP Images
import valleMp1 from '../assets/Cusco-Valle/1tours.jpg';
import valleMp2 from '../assets/Cusco-Valle/2tours.jpg';

// 7 Lagunas Images
import sevenLag1 from '../assets/Cusco-7lagunas/1tours.jpg';
import sevenLag2 from '../assets/Cusco-7lagunas/2tours.jpg';
import sevenLag3 from '../assets/Cusco-7lagunas/3tours.jpg';

// Marcapata Baths Images
import banos1 from '../assets/Cusco-Baños/1tours.jpeg';
import banos2 from '../assets/Cusco-Baños/2tours.jpg';
import banos3 from '../assets/Cusco-Baños/3tours.jpg';

export const mainAttractions: Tour[] = [
  {
    id: 'cusco-city',
    nameEs: 'Ciudad del Cusco',
    nameEn: 'Cusco City',
    descriptionEs: 'Monumentos arqueológicos, templos, museos, mercados, restaurantes típicos, casonas, calles, zoológico, gastronomía, festividades y tradiciones, espectáculo música-danza, boutique, sauna, spa-cuidado corporal-salud y bienestar.',
    descriptionEn: 'Archaeological monuments, temples, museums, markets, typical restaurants, mansions, streets, zoo, gastronomy, festivities and traditions, music-dance shows, boutique, sauna, spa-body care-health and wellness.',
    duration: '1-3',
    altitude: '3300',
    image: cuscoPlaza,
    gallery: [
      cuscoPlaza,
      cuscoArqueologia,
      cuscoFestividad,
      cuscoGastronomia,
      cuscoCalle,
      cuscoSauna
    ],
    featured: true,
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'valle-sagrado',
    nameEs: 'Valle Sagrado',
    nameEn: 'Sacred Valley',
    descriptionEs: 'Sitios arqueológicos principales, centros poblados, población, templos, mercados, centros artesanales, restaurantes típicos, gastronomía, vivencialismo comunitario, festividades y tradiciones, sauna-spa.',
    descriptionEn: 'Main archaeological sites, populated centers, population, temples, markets, craft centers, typical restaurants, gastronomy, community experiences, festivities and traditions, sauna-spa.',
    duration: '1-5',
    altitude: '2500',
    image: valleMain,
    gallery: [
      valleMain,
      vallePisac,
      valleMercado,
      valleTradicion,
      valleTejedores,
      valleGastronomia
    ],
    featured: true,
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'machupicchu',
    nameEs: 'Machu Picchu',
    nameEn: 'Machu Picchu',
    descriptionEs: 'Monumento arqueológico, museo, baños termales, poblado, cataratas, mariposario, senderismo, observación de aves, centro artesanal, mercado, sauna-spa.',
    descriptionEn: 'Archaeological monument, museum, hot springs, town, waterfalls, butterfly house, hiking, bird watching, craft center, market, sauna-spa.',
    duration: '1-4',
    altitude: '2100',
    image: mpMain,
    gallery: [
      mpMain,
      mpSenderismo,
      mpCatarata,
      mpTermales,
      mpMariposario,
      mpArqueologico
    ],
    featured: true,
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
];

export const otherTours: Tour[] = [
  {
    id: 'choquequirao',
    nameEs: 'Cusco-Choquequirao',
    nameEn: 'Cusco-Choquequirao',
    descriptionEs: 'Caminata hacia la "hermana" de Machu Picchu, un sitio arqueológico impresionante. Una aventura desafiante y gratificante.',
    descriptionEn: 'Hike to the "sister" of Machu Picchu, an impressive archaeological site. A challenging and rewarding adventure.',
    duration: '4',
    altitude: '3030',
    image: choque1,
    gallery: [choque1, choque2, choque3, choque4],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: '7-colores',
    nameEs: 'Montaña de 7 Colores - Nevado Ausangate',
    nameEn: 'Rainbow Mountain - Ausangate Snow Peak',
    descriptionEs: 'Impresionante montaña de colores naturales junto al majestuoso nevado Ausangate. Un paisaje surrealista.',
    descriptionEn: 'Impressive naturally colored mountain next to the majestic Ausangate snow peak. A surreal landscape.',
    duration: '1',
    altitude: '5000',
    image: mountain1,
    gallery: [mountain1, mountain2, mountain3],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'humantay',
    nameEs: 'Laguna Humantay - Nevado Salkantay',
    nameEn: 'Humantay Lagoon - Salkantay Snow Peak',
    descriptionEs: 'Laguna turquesa al pie del nevado Salkantay, un paisaje de ensueño ideal para la fotografía y la conexión natural.',
    descriptionEn: 'Turquoise lagoon at the foot of the Salkantay snow peak, a dreamlike landscape ideal for photography and natural connection.',
    duration: '1',
    altitude: '4200',
    image: laguna1,
    gallery: [laguna1, laguna2, laguna3],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'salkantay-trek',
    nameEs: 'Caminata Salkantay-Machu Picchu',
    nameEn: 'Salkantay Trek to Machu Picchu',
    descriptionEs: 'Trekking épico atravesando diversos ecosistemas hasta llegar a Machu Picchu. Una alternativa espectacular al Camino Inca.',
    descriptionEn: 'Epic trek through diverse ecosystems until reaching Machu Picchu. A spectacular alternative to the Inca Trail.',
    duration: '4',
    altitude: '4600',
    image: camina1,
    gallery: [camina1, camina2, camina3],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'valle-mp',
    nameEs: 'Valle Sagrado - Machu Picchu',
    nameEn: 'Sacred Valley - Machu Picchu',
    descriptionEs: 'Combinación perfecta del Valle Sagrado con la maravilla del mundo. Historia, cultura y paisajes en un solo viaje.',
    descriptionEn: 'Perfect combination of the Sacred Valley with the wonder of the world. History, culture, and landscapes in a single trip.',
    duration: '3',
    altitude: '4300',
    image: valleMp1,
    gallery: [valleMp1, valleMp2],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: '7-lagunas',
    nameEs: '7 Lagunas - Baños Termales Pacchanta',
    nameEn: '7 Lagoons - Pacchanta Hot Springs',
    descriptionEs: 'Ruta de las 7 lagunas con baños termales junto al nevado Ausangate. Relajación y belleza escénica.',
    descriptionEn: 'Route of 7 lagoons with hot springs next to the Ausangate snow peak. Relaxation and scenic beauty.',
    duration: '4',
    altitude: '4600',
    image: sevenLag1,
    gallery: [sevenLag1, sevenLag2, sevenLag3],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'marcapata',
    nameEs: 'Baños Termo Medicinales de Marcapata',
    nameEn: 'Marcapata Medicinal Hot Springs',
    descriptionEs: 'Baños termales medicinales en un entorno natural excepcional. Salud y bienestar en los Andes.',
    descriptionEn: 'Medicinal hot springs in an exceptional natural setting. Health and wellness in the Andes.',
    duration: '4',
    altitude: '2800',
    image: banos1,
    gallery: [banos1, banos2, banos3],
    recommended: true,
    exclusive: true,
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'pongo-mainique',
    nameEs: 'Quillabamba - Pongo de Mainique',
    nameEn: 'Quillabamba - Pongo de Mainique',
    descriptionEs: 'Aventura hacia la selva baja occidental, paisajes impresionantes y biodiversidad única.',
    descriptionEn: 'Adventure to the western lowland jungle, impressive landscapes and unique biodiversity.',
    duration: '7',
    altitude: '450-1050',
    image: valleMp1,
    gallery: [valleMp1, valleMp2, camina1],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'manu',
    nameEs: 'Paucartambo - Pillcopata - Manu - Tambopata',
    nameEn: 'Paucartambo - Pillcopata - Manu - Tambopata',
    descriptionEs: 'Expedición a la selva amazónica oriental, biodiversidad extrema. Para los amantes de la naturaleza salvaje.',
    descriptionEn: 'Expedition to the eastern Amazon jungle, extreme biodiversity. For wild nature lovers.',
    duration: '7',
    altitude: '150-300',
    image: valleMp2,
    gallery: [valleMp2, camina2, camina3],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'puerto-maldonado',
    nameEs: 'Marcapata - Quincemil - Puerto Maldonado',
    nameEn: 'Marcapata - Quincemil - Puerto Maldonado',
    descriptionEs: 'Ruta hacia la frontera oriental con Brasil, naturaleza exuberante y aventura en la selva.',
    descriptionEn: 'Route to the eastern border with Brazil, exuberant nature and adventure in the jungle.',
    duration: '7',
    altitude: '180-3100',
    image: camina3,
    gallery: [camina3, camina1, valleMp1],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'arequipa',
    nameEs: 'Cusco - Arequipa - Puerto del Inca',
    nameEn: 'Cusco - Arequipa - Puerto del Inca',
    descriptionEs: 'Puerto marítimo prehispánico sur, historia y costa peruana. Un viaje a través del tiempo y la geografía.',
    descriptionEn: 'Southern pre-Hispanic maritime port, history and Peruvian coast. A journey through time and geography.',
    duration: '5',
    altitude: '10-3300',
    image: cuscoPlaza,
    gallery: [cuscoPlaza, cuscoArqueologia, cuscoCalle],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'titicaca',
    nameEs: 'Cusco - Puno - Lago Titicaca',
    nameEn: 'Cusco - Puno - Lake Titicaca',
    descriptionEs: 'El lago navegable más alto del mundo, cultura ancestral viva. Islas flotantes y tradiciones únicas.',
    descriptionEn: 'The highest navigable lake in the world, living ancestral culture. Floating islands and unique traditions.',
    duration: '4',
    altitude: '3820',
    image: laguna1,
    gallery: [laguna1, laguna2, laguna3],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
  {
    id: 'tumbes',
    nameEs: 'Cusco - Lima - Tumbes',
    nameEn: 'Cusco - Lima - Tumbes',
    descriptionEs: 'Las mejores playas del Perú, sol, mar y gastronomía costeña. Relax total en el norte.',
    descriptionEn: 'The best beaches in Peru, sun, sea and coastal gastronomy. Total relaxation in the north.',
    duration: '7',
    altitude: '0-3300',
    image: laguna2,
    gallery: [laguna2, laguna3, sevenLag1],
    objectives: commonObjectives,
    characteristics: commonCharacteristics,
    logistics: commonLogistics
  },
];

export const tourTypes = [
  { id: 'cultural', nameEs: 'Turismo Cultural', nameEn: 'Cultural Tourism' },
  { id: 'natural', nameEs: 'Turismo Natural', nameEn: 'Natural Tourism' },
  { id: 'comunitario', nameEs: 'Turismo Comunitario-Vivencial', nameEn: 'Community-Experiential Tourism' },
  { id: 'aventura', nameEs: 'Turismo de Aventura', nameEn: 'Adventure Tourism' },
  { id: 'virtual', nameEs: 'Turismo 3D-Virtual', nameEn: '3D-Virtual Tourism' },
  { id: 'extremo', nameEs: 'Turismo Extremo', nameEn: 'Extreme Tourism' },
];
