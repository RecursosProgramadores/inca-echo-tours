import { useRef } from 'react';
import aboutImg from '../assets/hero-machu-picchu.jpg';
import img2006 from '../assets/history_2006.png';
import img2012 from '../assets/history_2012.png';
import img2013 from '../assets/history_2013.png';
import img2018 from '../assets/history_2018.png';
import img2025 from '../assets/history_2025.png';

const timelineData = [
  {
    year: '2006',
    title: 'Nuestros Inicios',
    text: 'La arqueología fue el pilar de esta empresa, llevándonos a descubrir muchos y apasionantes sitios arqueológicos de la cultura Inka. Cusco fue la sede principal escogida por sus recursos y clima. Empezamos a recorrer y detallar sitios arqueológicos, describiendo características arquitectónicas y evidencias materiales.',
    image: img2006,
  },
  {
    year: '2012',
    title: 'Gestión Turística',
    text: 'El manejo y la gestión de los recursos turísticos tomó más precisión. Realizamos estudios arqueológicos sobre construcciones Inka en toda la región, ubicando vestigios como adoratorios, caminos y fuentes, proyectando su conservación y difusión para el deleite de todos.',
    image: img2012,
  },
  {
    year: '2013',
    title: 'Hazaña en Machupicchu',
    text: 'Nos concentramos más de 10 años en Machupicchu, dando realce a este monumento con investigaciones, excavaciones y talleres. El estudio de la cerámica y otros materiales nos proporcionó información vital sobre el desarrollo y expansión de la cultura Inka.',
    image: img2013,
  },
  {
    year: '2018',
    title: 'Servicios de Calidad',
    text: 'Inicio de servicios y operaciones turísticas desde Machupicchu para el mundo. Realizamos diagnósticos y estudios de mercado para brindar la mejor experiencia, integrando diversos actores turísticos y asegurando medidas de control de calidad.',
    image: img2018,
  },
  {
    year: '2025',
    title: 'Infinity Experience Tours',
    text: 'Inicio de operaciones de Infinity Experience Tours, acreditados y con todos los permisos de ley. Nos comprometemos a brindar calidad, seguridad y confort, consolidándonos como la mejor empresa cusqueña para disfrutar a profundidad la arqueología de los Inkas.',
    image: img2025,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-900 font-serif">Nuestra Historia</h2>
          <div className="w-24 h-1 bg-violet-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Un viaje a través del tiempo, desde la investigación arqueológica hasta la excelencia en el servicio turístico.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Central Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-violet-200"></div>

          {timelineData.map((item, index) => (
            <div key={item.year} className={`flex flex-col md:flex-row items-center justify-between mb-24 relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              
              {/* Timeline Dot (Center) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-violet-600 rounded-full border-4 border-white shadow-xl items-center justify-center z-10">
                 <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-5/12 mb-8 md:mb-0">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center`}>
                  <span className="text-6xl font-bold text-violet-100 absolute -z-10 select-none transform translate-y-[-2rem] opacity-50">{item.year}</span>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-violet-500 relative bg-opacity-90 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
                     <h3 className="text-2xl font-bold text-violet-800 mb-2">{item.year}</h3>
                     <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
                     <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                       {item.text}
                     </p>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-5/12 px-4 md:px-0">
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={item.image} 
                    alt={`Historia ${item.year}`} 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
        


        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto mb-20 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-violet-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-violet-100 h-full flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-400 to-violet-600"></div>
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 5 8.268 7.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-bold text-violet-900 mb-4">Nuestra Visión</h3>
                <p className="text-gray-600 leading-relaxed text-lg italic">
                  "Mejorar la relación entre las personas y la cultura de una manera más didáctica y profesional, sembrando en cada uno de ellos la semilla de la identidad y el respeto por la cultura y el patrimonio."
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-violet-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-violet-100 h-full flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold to-yellow-500"></div>
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-bold text-violet-900 mb-4">Nuestra Misión</h3>
                <p className="text-gray-600 leading-relaxed text-lg italic">
                  "Cumplir con calidad y excelencia nuestros servicios dirigidos a todos los interesados en la cultura inka."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-12 bg-violet-900 text-white p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <h3 className="text-2xl font-bold mb-4 relative z-10">Comprometidos con la Excelencia</h3>
           <p className="text-lg relative z-10 opacity-90">
             Desde la región del Cusco, trabajamos cada día para consolidarnos como la mejor empresa en el sur del Perú, brindando calidad, seguridad y confort en cada experiencia.
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;
