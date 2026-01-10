export interface Tour {
  id: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  duration: string;
  altitude: string;
  image: string;
  featured?: boolean;
  recommended?: boolean;
  exclusive?: boolean;
}

export const mainAttractions: Tour[] = [
  {
    id: 'cusco-city',
    nameEs: 'Ciudad del Cusco',
    nameEn: 'Cusco City',
    descriptionEs: 'Monumentos arqueológicos, templos, museos, mercados, restaurantes típicos, casonas, calles, zoológico, gastronomía, festividades y tradiciones, espectáculo música-danza, boutique, sauna, spa-cuidado corporal-salud y bienestar.',
    descriptionEn: 'Archaeological monuments, temples, museums, markets, typical restaurants, mansions, streets, zoo, gastronomy, festivities and traditions, music-dance shows, boutique, sauna, spa-body care-health and wellness.',
    duration: '1-3',
    altitude: '3300',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
    featured: true,
  },
  {
    id: 'valle-sagrado',
    nameEs: 'Valle Sagrado',
    nameEn: 'Sacred Valley',
    descriptionEs: 'Sitios arqueológicos principales, centros poblados, población, templos, mercados, centros artesanales, restaurantes típicos, gastronomía, vivencialismo comunitario, festividades y tradiciones, sauna-spa.',
    descriptionEn: 'Main archaeological sites, populated centers, population, temples, markets, craft centers, typical restaurants, gastronomy, community experiences, festivities and traditions, sauna-spa.',
    duration: '1-5',
    altitude: '2500',
    image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800',
    featured: true,
  },
  {
    id: 'machupicchu',
    nameEs: 'Machu Picchu',
    nameEn: 'Machu Picchu',
    descriptionEs: 'Monumento arqueológico, museo, baños termales, poblado, cataratas, mariposario, senderismo, observación de aves, centro artesanal, mercado, sauna-spa.',
    descriptionEn: 'Archaeological monument, museum, hot springs, town, waterfalls, butterfly house, hiking, bird watching, craft center, market, sauna-spa.',
    duration: '1-4',
    altitude: '2100',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
    featured: true,
  },
];

export const otherTours: Tour[] = [
  {
    id: 'choquequirao',
    nameEs: 'Cusco-Choquequirao',
    nameEn: 'Cusco-Choquequirao',
    descriptionEs: 'Caminata hacia la "hermana" de Machu Picchu, un sitio arqueológico impresionante.',
    descriptionEn: 'Hike to the "sister" of Machu Picchu, an impressive archaeological site.',
    duration: '4',
    altitude: '3030',
    image: 'https://images.unsplash.com/photo-1569821925610-ee2e0ecc7f85?w=800',
  },
  {
    id: '7-colores',
    nameEs: 'Montaña de 7 Colores - Nevado Ausangate',
    nameEn: 'Rainbow Mountain - Ausangate Snow Peak',
    descriptionEs: 'Impresionante montaña de colores naturales junto al majestuoso nevado Ausangate.',
    descriptionEn: 'Impressive naturally colored mountain next to the majestic Ausangate snow peak.',
    duration: '1',
    altitude: '5000',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
  },
  {
    id: 'humantay',
    nameEs: 'Laguna Humantay - Nevado Salkantay',
    nameEn: 'Humantay Lagoon - Salkantay Snow Peak',
    descriptionEs: 'Laguna turquesa al pie del nevado Salkantay, un paisaje de ensueño.',
    descriptionEn: 'Turquoise lagoon at the foot of the Salkantay snow peak, a dreamlike landscape.',
    duration: '1',
    altitude: '4200',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
  },
  {
    id: 'salkantay-trek',
    nameEs: 'Caminata Salkantay-Machu Picchu',
    nameEn: 'Salkantay Trek to Machu Picchu',
    descriptionEs: 'Trekking épico atravesando diversos ecosistemas hasta llegar a Machu Picchu.',
    descriptionEn: 'Epic trek through diverse ecosystems until reaching Machu Picchu.',
    duration: '4',
    altitude: '4600',
    image: 'https://images.unsplash.com/photo-1594735596477-0c096eca9d7c?w=800',
  },
  {
    id: 'valle-mp',
    nameEs: 'Valle Sagrado - Machu Picchu',
    nameEn: 'Sacred Valley - Machu Picchu',
    descriptionEs: 'Combinación perfecta del Valle Sagrado con la maravilla del mundo.',
    descriptionEn: 'Perfect combination of the Sacred Valley with the wonder of the world.',
    duration: '3',
    altitude: '4300',
    image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800',
  },
  {
    id: '7-lagunas',
    nameEs: '7 Lagunas - Baños Termales Pacchanta',
    nameEn: '7 Lagoons - Pacchanta Hot Springs',
    descriptionEs: 'Ruta de las 7 lagunas con baños termales junto al nevado Ausangate.',
    descriptionEn: 'Route of 7 lagoons with hot springs next to the Ausangate snow peak.',
    duration: '4',
    altitude: '4600',
    image: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=800',
  },
  {
    id: 'marcapata',
    nameEs: 'Baños Termo Medicinales de Marcapata',
    nameEn: 'Marcapata Medicinal Hot Springs',
    descriptionEs: 'Baños termales medicinales en un entorno natural excepcional.',
    descriptionEn: 'Medicinal hot springs in an exceptional natural setting.',
    duration: '4',
    altitude: '2800',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800',
    recommended: true,
    exclusive: true,
  },
  {
    id: 'pongo-mainique',
    nameEs: 'Quillabamba - Pongo de Mainique',
    nameEn: 'Quillabamba - Pongo de Mainique',
    descriptionEs: 'Aventura hacia la selva baja occidental, paisajes impresionantes.',
    descriptionEn: 'Adventure to the western lowland jungle, impressive landscapes.',
    duration: '7',
    altitude: '450-1050',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
  },
  {
    id: 'manu',
    nameEs: 'Paucartambo - Pillcopata - Manu - Tambopata',
    nameEn: 'Paucartambo - Pillcopata - Manu - Tambopata',
    descriptionEs: 'Expedición a la selva amazónica oriental, biodiversidad extrema.',
    descriptionEn: 'Expedition to the eastern Amazon jungle, extreme biodiversity.',
    duration: '7',
    altitude: '150-300',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800',
  },
  {
    id: 'puerto-maldonado',
    nameEs: 'Marcapata - Quincemil - Puerto Maldonado',
    nameEn: 'Marcapata - Quincemil - Puerto Maldonado',
    descriptionEs: 'Ruta hacia la frontera oriental con Brasil, naturaleza exuberante.',
    descriptionEn: 'Route to the eastern border with Brazil, exuberant nature.',
    duration: '7',
    altitude: '180-3100',
    image: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=800',
  },
  {
    id: 'arequipa',
    nameEs: 'Cusco - Arequipa - Puerto del Inca',
    nameEn: 'Cusco - Arequipa - Puerto del Inca',
    descriptionEs: 'Puerto marítimo prehispánico sur, historia y costa peruana.',
    descriptionEn: 'Southern pre-Hispanic maritime port, history and Peruvian coast.',
    duration: '5',
    altitude: '10-3300',
    image: 'https://images.unsplash.com/photo-1568464992589-c42fc7f55f87?w=800',
  },
  {
    id: 'titicaca',
    nameEs: 'Cusco - Puno - Lago Titicaca',
    nameEn: 'Cusco - Puno - Lake Titicaca',
    descriptionEs: 'El lago navegable más alto del mundo, cultura ancestral viva.',
    descriptionEn: 'The highest navigable lake in the world, living ancestral culture.',
    duration: '4',
    altitude: '3820',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
  },
  {
    id: 'tumbes',
    nameEs: 'Cusco - Lima - Tumbes',
    nameEn: 'Cusco - Lima - Tumbes',
    descriptionEs: 'Las mejores playas del Perú, sol, mar y gastronomía costeña.',
    descriptionEn: 'The best beaches in Peru, sun, sea and coastal gastronomy.',
    duration: '7',
    altitude: '0-3300',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
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
