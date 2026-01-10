export interface Festival {
  id: string;
  month: number;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  image: string;
}

export const festivals: Festival[] = [
  {
    id: 'febrero',
    month: 2,
    nameEs: 'Día de San Valentín',
    nameEn: 'Valentine\'s Day',
    descriptionEs: 'Celebrar el amor y la amistad. El color rojo prevalece en las prendas, se dan obsequios y detalles entre amigos y enamorados. Ideal para parejas que se quieren comprometer o casarse.',
    descriptionEn: 'Celebrate love and friendship. Red prevails in clothing, gifts and details are given between friends and lovers. Ideal for couples who want to get engaged or married.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800',
  },
  {
    id: 'marzo',
    month: 3,
    nameEs: 'Carnavales',
    nameEn: 'Carnival',
    descriptionEs: 'Festividad en la parte andina donde agradecen y se regocijan con la naturaleza por la producción antes de la cosecha. Los primeros frutos de los principales alimentos ya se encuentran listos para ser recogidos, bailan y cantan alrededor de árboles llenos de regalos y sorpresas.',
    descriptionEn: 'Andean festival where they thank and rejoice with nature for production before the harvest. The first fruits of the main foods are ready to be harvested, they dance and sing around trees full of gifts and surprises.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
  },
  {
    id: 'abril',
    month: 4,
    nameEs: 'Semana Santa',
    nameEn: 'Holy Week',
    descriptionEs: 'Celebración donde se recuerda la muerte y pasión de Cristo. El Cusco tiene su forma particular de celebrar, donde se comen los 12 platos en conmemoración a la última cena. Las familias cusqueñas preparan sus comidas y postres, arman sus cruces con ramas de palmo, romero y otras plantas. Procesión del Señor de los Temblores.',
    descriptionEn: 'Celebration commemorating the death and passion of Christ. Cusco has its particular way of celebrating, where 12 dishes are eaten in commemoration of the last supper. Cusco families prepare their meals and desserts, decorate crosses with palm branches, rosemary and other plants. Procession of the Lord of Earthquakes.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
  },
  {
    id: 'mayo',
    month: 5,
    nameEs: 'Corpus Christi',
    nameEn: 'Corpus Christi',
    descriptionEs: 'Tradición de la época colonial en la cual salen en procesión más de 12 santos y vírgenes de los distintos distritos del Cusco rumbo hacia la plaza de armas. El plato principal es el Chiriuchu: huevera de pescado, alga de mar, torreja de zapallo, maíz tostado, carne deshidratada, carne de gallina, embutido, carne de cordero, carne de cuy, rocoto, queso.',
    descriptionEn: 'Colonial tradition where more than 12 saints and virgins from different districts of Cusco go in procession to the main square. The main dish is Chiriuchu: fish roe, seaweed, pumpkin fritter, toasted corn, dried meat, chicken, sausage, lamb, guinea pig, rocoto pepper, cheese.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
  },
  {
    id: 'junio',
    month: 6,
    nameEs: 'Inti Raymi - Fiesta del Sol',
    nameEn: 'Inti Raymi - Festival of the Sun',
    descriptionEs: 'Celebración que rememora una de las fiestas principales de la cultura Inka, con una escenificación espectacular donde los principales protagonistas son el Inka y la Qoya, jefes de los 4 suyos, sacerdotes, vírgenes del sol, militares y guerreros. Qoricancha, la plaza de armas y Sacsayhuaman son los lugares donde se desarrolla esta escenificación.',
    descriptionEn: 'Celebration commemorating one of the main festivals of Inka culture, with a spectacular staging where the main protagonists are the Inka and Qoya, chiefs of the 4 suyos, priests, virgins of the sun, soldiers and warriors. Qoricancha, the main square and Sacsayhuaman are the places where this staging takes place.',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
  },
  {
    id: 'julio',
    month: 7,
    nameEs: 'Fiestas Patrias',
    nameEn: 'Independence Day',
    descriptionEs: 'El júbilo por la independencia del Perú viste de colores rojo y blanco a todos los ciudadanos del país, realizando una serie de actividades cívicas y tradicionales en las diferentes provincias y distritos de la región del Cusco.',
    descriptionEn: 'The joy for Peru\'s independence dresses all citizens in red and white, carrying out a series of civic and traditional activities in the different provinces and districts of the Cusco region.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800',
  },
  {
    id: 'agosto',
    month: 8,
    nameEs: 'Mes de la Pachamama',
    nameEn: 'Pachamama Month',
    descriptionEs: 'Costumbre ancestral donde se reverencia a la madre naturaleza. Todos los cusqueños realizan diferentes ofrendas y mantienen viva la tradición de ofrecer diferentes productos a partir del primer día de agosto en agradecimiento al inicio de la actividad agrícola.',
    descriptionEn: 'Ancestral custom where Mother Nature is revered. All Cusco inhabitants make different offerings and keep alive the tradition of offering various products from the first day of August in gratitude for the beginning of agricultural activity.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
  },
  {
    id: 'septiembre',
    month: 9,
    nameEs: 'Día de la Primavera',
    nameEn: 'Spring Day',
    descriptionEs: 'Fecha principal del cambio de estación. La primavera donde todos los campos de cultivo ya se encuentran llenos de productos alimenticios en pleno crecimiento. La presencia de lluvias confiere un aspecto mágico y lleno de vida a toda la región. También se celebra a todos los estudiantes.',
    descriptionEn: 'Main date of the season change. Spring where all crop fields are full of food products in full growth. The presence of rains gives a magical and lively appearance to the entire region. It also celebrates all students.',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e3571f4f3a?w=800',
  },
  {
    id: 'octubre',
    month: 10,
    nameEs: 'Señor de los Milagros y Halloween',
    nameEn: 'Lord of Miracles and Halloween',
    descriptionEs: 'La fe religiosa llena de color morado las calles de la ciudad del Cusco por la procesión del Señor de los Temblores. La festividad de Halloween también forma parte de la celebración, donde la plaza de armas se abarrota con niños y personas disfrazadas compartiendo dulces y caramelos.',
    descriptionEn: 'Religious faith fills the streets of Cusco with purple during the procession of the Lord of Earthquakes. Halloween is also part of the celebration, where the main square is crowded with children and people in costumes sharing sweets and candies.',
    image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=800',
  },
  {
    id: 'noviembre',
    month: 11,
    nameEs: 'Todos los Santos',
    nameEn: 'All Saints Day',
    descriptionEs: 'Celebración en conmemoración a las personas y difuntos. Se llevan a cabo diferentes ceremonias en conmemoración a diferentes personalidades y ancestros. Fiesta que combina la tradición antigua con visitas a los cementerios y degustación de platos típicos como el lechón al horno con tamales de maíz.',
    descriptionEn: 'Celebration in commemoration of people and the deceased. Different ceremonies are held in commemoration of different personalities and ancestors. A festival that combines ancient tradition with visits to cemeteries and tasting typical dishes like roasted pork with corn tamales.',
    image: 'https://images.unsplash.com/photo-1604094290929-e5c94c8e2b7b?w=800',
  },
  {
    id: 'diciembre',
    month: 12,
    nameEs: 'Navidad y Año Nuevo',
    nameEn: 'Christmas and New Year',
    descriptionEs: 'Festividad que celebra el nacimiento de Jesús, con la tradicional venta artística "Santuranticuy" exhibiendo nacimientos y trajes bíblicos. El último día del año se celebra en la plaza principal vistiendo colores cabalísticos para recibir el año nuevo.',
    descriptionEn: 'Festival celebrating the birth of Jesus, with the traditional artistic sale "Santuranticuy" displaying nativity scenes and biblical costumes. The last day of the year is celebrated in the main square wearing symbolic colors to welcome the new year.',
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800',
  },
];

export const getUpcomingFestival = (): Festival | null => {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();
  
  // Check if we're within a week before any festival
  // Simplified: Show festival modal during the first 3 weeks of the month
  if (currentDay <= 21) {
    return festivals.find(f => f.month === currentMonth) || null;
  }
  
  // Show next month's festival in the last week
  const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
  return festivals.find(f => f.month === nextMonth) || null;
};
