import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { festivals } from '@/lib/festivals';
import { Button } from '@/components/ui/button';

const monthNames = {
  es: ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  en: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

const Festivals = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="festivals" className="py-20 md:py-32 bg-cream-light inca-pattern" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-violet-black mb-4">
            {t('festivals.title', language)}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('festivals.subtitle', language)}
          </p>
        </motion.div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((festival, index) => (
            <motion.div
              key={festival.id}
              className="group bg-card border-gradient-gold rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={festival.image}
                  alt={language === 'es' ? festival.nameEs : festival.nameEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-deep/90 via-violet-deep/40 to-transparent" />
                
                {/* Month Badge */}
                <div className="absolute top-3 left-3 bg-vermilion text-cream px-3 py-1 rounded-full flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-semibold">
                    {monthNames[language][festival.month]}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-display text-lg font-bold text-cream line-clamp-1">
                    {language === 'es' ? festival.nameEs : festival.nameEn}
                  </h3>
                </div>
              </div>

              <div className="p-4">
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {language === 'es' ? festival.descriptionEs : festival.descriptionEn}
                </p>

                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="w-full bg-gradient-gold text-violet-deep hover:opacity-90 font-semibold gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t('festivals.bookNow', language)}
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          className="mt-16 bg-violet-deep rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-cream text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {language === 'es'
              ? 'Cusco de día y de noche tiene todas las diferentes muestras de su cultura, siendo la gastronomía uno de los pilares del turismo. No dude en visitar la ciudad del Cusco en cualquier mes del año, que siempre tendrá alguna festividad que se esté llevando a cabo.'
              : 'Cusco day and night has all the different samples of its culture, with gastronomy being one of the pillars of tourism. Don\'t hesitate to visit the city of Cusco in any month of the year, there will always be some festival taking place.'}
          </p>
          <div className="mt-6">
            <span className="text-gold font-display text-lg font-semibold">
              {language === 'es' 
                ? '¡Descuentos especiales disponibles todo el año!'
                : 'Special discounts available all year round!'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Festivals;
