import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const testimonials = [
  {
    name: "Peter Davidson",
    role: "Viajero",
    location: "USA",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200",
    contentEs: "Fue una experiencia increíble. La conexión con la cultura y la historia fue profunda y muy bien explicada.",
    contentEn: "It was an amazing experience. The connection with the culture and history was deep and very well explained."
  },
  {
    name: "Emily Davidson",
    role: "Aventurera",
    location: "UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    contentEs: "La organización y el profesionalismo del equipo hicieron de nuestro viaje algo inolvidable. ¡Altamente recomendado!",
    contentEn: "The organization and professionalism of the team made our trip unforgettable. Highly recommended!"
  },
  {
    name: "Luis Aragon",
    role: "Turista",
    location: "España",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    contentEs: "Descubrir Cusco de la mano de expertos arqueólogos cambió totalmente mi perspectiva. Un servicio de primera.",
    contentEn: "Discovering Cusco with expert archaeologists totally changed my perspective. Top-notch service."
  },
  {
    name: "Santiago Bendezu",
    role: "Explorador",
    location: "Chile",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    contentEs: "Desde la logística hasta el guiado, todo fue perfecto. Se nota la pasión y el conocimiento que tienen.",
    contentEn: "From logistics to guiding, everything was perfect. You can feel the passion and knowledge they have."
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
