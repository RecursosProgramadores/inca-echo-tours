import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const testimonials = [
  {
    name: "Raúl Loayza Rojas",
    role: "Arqueólogo & Guía Oficial de Turismo",
    location: "Cusco, Perú",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
    contentEs: "Profesional destacado en arqueología, especialista en gestión del patrimonio cultural, análisis de materiales arqueológicos, investigación y conservación del patrimonio, y Guía oficial de turismo muy apasionado, combina la historia y la dinámica del servicio turístico brindando calidad y búsqueda de nuevas experiencias a personas y grupos.\n\nRealizó trabajos de investigación arqueológica y turismo en Machupicchu por 12 años realizando numerosos estudios y publicaciones.\n\nGestor cultural, promueve eventos académicos, charlas, exposiciones temporales, talleres didácticos y pedagógicos, difunde la identidad y preservación de la cultura andina.",
    contentEn: "Distinguished archaeology professional, specialist in cultural heritage management, archaeological materials analysis, research, and heritage conservation. As a highly passionate official tour guide, he combines history and tourism dynamics, providing quality and a search for new experiences for individuals and groups.\n\nHe has carried out archaeological research and tourism work in Machupicchu for 12 years, producing numerous studies and publications.\n\nCultural manager, promotes academic events, talks, temporary exhibitions, educational and pedagogical workshops, and disseminates the identity and preservation of Andean culture."
  },
  {
    name: "Raysa Kristel Guillen Zuñiga",
    role: "Profesional en Salud & Ejecutiva en Ventas",
    location: "Cusco, Perú",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    contentEs: "Profesional renombrada en salud, aporta desde la especialidad de la salud oral el cuidado de adultos jóvenes y niños, nutrición orgánica y bienestar del cuerpo y la mente con la búsqueda del contacto con la naturaleza y nuevos ecosistemas.\n\nEjecutiva en ventas de larga trayectoria, utilizando nuevas estrategias de compartir e informar a los visitantes del mundo y el manejo de situaciones e ideales, lista a solucionar toda ocurrencia en el campo turístico.\n\nDiseñadora de modas, participando en eventos locales y nacionales con destacadas marcas de ropa, colaboradora y creadora de diseños de ropa a partir del estilo prehispánico. Amante de la naturaleza y petlover, la fascinación por descubrir espacios naturales de la región le llevó a descubrir lugares únicos para rejuvenecer el espíritu y la energía vital del cuerpo.",
    contentEn: "Renowned health professional, contributes from the specialty of oral health to the care of young adults and children, organic nutrition, and well-being of body and mind through contact with nature and new ecosystems.\n\nSales executive with a long career, using new strategies to share and inform visitors from around the world and managing situations and ideals, ready to solve any occurrence in the tourism field.\n\nFashion designer, participating in local and national events with prominent clothing brands, collaborator and creator of clothing designs based on the pre-Hispanic style. Nature lover and pet lover, her fascination with discovering natural spaces in the region led her to discover unique places to rejuvenate the spirit and vital energy of the body."
  }
];

const Testimonials = () => {
  const { language } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-violet-deep relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-violet-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            {language === 'es' ? 'Lo que dicen nuestros viajeros' : 'What our travelers say'}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            {language === 'es'
              ? 'Historias reales de personas que vivieron la experiencia Infinity.'
              : 'Real stories from people who lived the Infinity experience.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-violet-black/40 border border-gold/20 p-6 rounded-2xl md:p-8 hover:bg-violet-black/60 transition-colors group"
            >
              <div className="flex justify-center mb-6 relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/50 p-1 group-hover:border-gold transition-colors">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="absolute -bottom-2 bg-gold text-violet-deep p-1.5 rounded-full shadow-lg">
                  <Quote className="w-4 h-4 fill-current" />
                </div>
              </div>

              <div className="flex justify-center gap-0.5 mb-4 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-cream/90 text-center mb-6 italic text-sm leading-relaxed">
                "{language === 'es' ? item.contentEs : item.contentEn}"
              </p>

              <div className="text-center border-t border-white/10 pt-4">
                <h4 className="font-display font-bold text-gold text-lg">{item.name}</h4>
                <div className="text-xs text-cream/60 font-medium uppercase tracking-wider mt-1">{item.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
