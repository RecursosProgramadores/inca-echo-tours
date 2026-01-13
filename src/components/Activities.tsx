import React from 'react';
import destinationsImg from '../assets/activity_destinations.png';
import excursionImg from '../assets/hero-machu-picchu.jpg'; // Placeholder/Reuse
import cultureImg from '../assets/history_2006.png'; // Reuse Archaeology image
import learningImg from '../assets/history_2012.png'; // Reuse Studies image
import serviceImg from '../assets/history_2018.png'; // Reuse Tourism image
import { MapPin, Mountain, Landmark, BookOpen, Star, Compass } from 'lucide-react';
import wstpIcon from '@/assets/wstp.svg';

const activitiesData = [
  {
    title: "Viajes",
    icon: <MapPin className="w-6 h-6" />,
    description: "Explora los destinos más impresionantes del Perú.",
    image: destinationsImg,
    items: [
      "Cusco: ciudad, Machupicchu, Valle Sagrado",
      "Arequipa", "Puno", "Puerto Maldonado",
      "Apurimac", "Tacna", "Ucayali",
      "Ayacucho", "Ica", "Lima", "Tumbes"
    ]
  },
  {
    title: "Excursiones",
    icon: <Mountain className="w-6 h-6" />,
    description: "Aventura y conexión con la naturaleza.",
    image: excursionImg,
    items: [
      "Caminatas: nevados, lagunas, aguas termales",
      "Ríos, lagos, bosques, playas, riveras",
      "Bicicleta, Motocicleta, Cuatrimoto",
      "Canotaje, Parapente, Cola de mono",
      "Pesca, Observación de aves y mamíferos"
    ]
  },
  {
    title: "Visitas Culturales",
    icon: <Landmark className="w-6 h-6" />,
    description: "Sumérgete en la historia y la cultura viva.",
    highlight: true, // Mark for archaeology emphasis
    image: cultureImg,
    items: [
      "Monumentos arqueológicos",
      "Museos",
      "Festivales (música y danza)",
      "Centros artesanales",
      "Casa de meditación y relajación",
      "Baños termales",
      "Mercados de abastos",
      "Ferias gastronómicas y artesanales"
    ]
  },
  {
    title: "Aprendizaje",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Conocimiento profundo de nuestra herencia.",
    image: learningImg,
    items: [
      "Cultura local y ancestral",
      "Naturaleza y aventura",
      "Gastronomía",
      "Salud y Bienestar",
      "Eventos y negocios",
      "Entretenimiento",
      "Geografía",
      "Tradiciones y costumbres"
    ]
  },
  {
    title: "Optimización del Servicio",
    icon: <Star className="w-6 h-6" />,
    description: "Calidad y confort en cada detalle.",
    image: serviceImg,
    items: [
      "Alojamiento",
      "Transporte",
      "Alimentación",
      "Guiado Profesional",
      "Ocio y animación"
    ]
  }
];

const Activities = () => {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-violet-600 font-bold tracking-wider uppercase text-sm">Nuestra Oferta</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif mt-2">Turismo en INFINITY EXPERIENCE</h2>
          <div className="w-24 h-1 bg-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Actividades principales diseñadas para brindarte una experiencia inolvidable, con un enfoque especial en la <span className="text-violet-700 font-bold">riqueza arqueológica</span> de los Andes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map((activity, index) => (
            <div 
              key={index} 
              className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 flex flex-col ${activity.highlight ? 'ring-2 ring-violet-500 transform md:-translate-y-1' : ''}`}
            >
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute bottom-3 left-3 z-20 flex items-center text-white">
                  <div className="bg-violet-600 p-1.5 rounded-lg mr-2 shadow-lg group-hover:bg-violet-500 transition-colors">
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight">{activity.title}</h3>
                    <p className="text-[10px] text-gray-200 opacity-90 line-clamp-1">{activity.description}</p>
                  </div>
                </div>
                {activity.highlight && (
                  <div className="absolute top-3 right-3 z-20 bg-yellow-500 text-yellow-950 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center shadow-lg">
                    <Compass className="w-3 h-3 mr-1" /> Especialidad
                  </div>
                )}
              </div>
              
              <div className="p-4 flex-grow">
                <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                  {activity.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm font-medium leading-snug group-hover:text-gray-900 transition-colors">
                      <span className="w-1 h-1 bg-violet-400 rounded-full mt-1 mr-1.5 flex-shrink-0"></span>
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                <a 
                  href={`https://wa.me/51905793612?text=Hola, me gustaría más información sobre las actividades de: ${activity.title}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-1.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-lg transition-colors gap-2"
                >
                  <img src={wstpIcon} alt="WhatsApp" className="w-4 h-4" />
                  Más información
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
