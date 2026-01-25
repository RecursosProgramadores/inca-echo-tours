import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, Mountain, Star, Check, Eye } from 'lucide-react';
import wstpIcon from '@/assets/wstp.svg';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { mainAttractions, otherTours, tourTypes, Tour } from '@/lib/tours';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import TourModal from '@/components/TourModal';

// Moved TourCard distinct logic here if needed, but since it relies on props, it's fine.
// Actually, I should remove it from inside Tours and paste it outside.
// BUT I need to pass 'language' and 'onOpenModal'.
// The previous file view shows it uses 't' from translations.
// So I will just delete it from INSIDE and ensuring it is defined OUTSIDE.

const TourCard = ({ tour, language, onOpenModal }: { tour: Tour; language: 'es' | 'en'; onOpenModal: (tour: Tour) => void }) => {
  return (
    <motion.div
      className="group bg-card border-gradient-gold rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={tour.image}
          alt={language === 'es' ? tour.nameEs : tour.nameEn}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-violet-deep/80 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex gap-2">
          {tour.featured && (
            <Badge className="bg-gold text-violet-deep font-semibold">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
          {tour.recommended && (
            <Badge className="bg-vermilion text-cream font-semibold">
              {language === 'es' ? 'Recomendado' : 'Recommended'}
            </Badge>
          )}
          {tour.exclusive && (
            <Badge className="bg-violet-black text-gold font-semibold">
              {language === 'es' ? 'Exclusivo' : 'Exclusive'}
            </Badge>
          )}
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-xl font-bold text-cream leading-tight">
            {language === 'es' ? tour.nameEs : tour.nameEn}
          </h3>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
          {language === 'es' ? tour.descriptionEs : tour.descriptionEn}
        </p>

        <div className="flex items-center gap-4 mb-4 mt-auto border-t border-gold/10 pt-4">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-gold" />
            <span>{tour.duration} {t('tours.days', language)}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Mountain className="h-3.5 w-3.5 text-gold" />
            <span>{tour.altitude} m.s.n.m.</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
           <Button 
             variant="outline" 
             className="w-full border-gold/50 text-violet-deep hover:bg-gold/10 hover:text-violet-deep font-semibold text-xs gap-1.5"
             onClick={() => onOpenModal(tour)}
           >
             <Eye className="h-3.5 w-3.5" />
             {language === 'es' ? 'Ver Detalles' : 'View Details'}
           </Button>

            <a
              href={`https://wa.me/51905793612?text=Hola, estoy interesado en el tour: ${language === 'es' ? tour.nameEs : tour.nameEn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold gap-1.5 text-xs">
                <img src={wstpIcon} alt="WhatsApp" className="h-3.5 w-3.5" />
                WhatsApp
              </Button>
            </a>
        </div>
      </div>
    </motion.div>
  );
};

const Tours = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('main');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const qualityLevels = [
    {
      level: 'C',
      nameEs: 'Clásico',
      nameEn: 'Classic',
      includesEs: ['Transporte', 'Alimentación', 'Entradas', 'Guía'],
      includesEn: ['Transport', 'Meals', 'Tickets', 'Guide'],
      color: 'bg-cream',
    },
    {
      level: 'P',
      nameEs: 'Premium',
      nameEn: 'Premium',
      includesEs: ['Transporte', 'Alojamiento', 'Alimentación', 'Entradas', 'Guía', 'Sesión de fotos'],
      includesEn: ['Transport', 'Accommodation', 'Meals', 'Tickets', 'Guide', 'Photo session'],
      color: 'bg-silver',
    },
    {
      level: 'V',
      nameEs: 'VIP',
      nameEn: 'VIP',
      includesEs: ['Transporte', 'Alojamiento', 'Alimentación', 'Entradas', 'Guía', 'Sesión de fotos', 'Spa y relajación', 'Outfit estilo prehispánico', 'Souvenirs'],
      includesEn: ['Transport', 'Accommodation', 'Meals', 'Tickets', 'Guide', 'Photo session', 'Spa & relaxation', 'Prehispanic style outfit', 'Souvenirs'],
      color: 'bg-gold',
    },
  ];


  return (
    <section id="tours" className="py-20 md:py-32 bg-violet-deep" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            {t('tours.title', language)}
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            {t('tours.subtitle', language)}
          </p>
        </motion.div>

        {/* Quality Levels */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {qualityLevels.map((level) => (
            <div
              key={level.level}
              className="bg-violet-black/50 border border-gold/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${level.color} flex-shrink-0`}>
                  <span className="font-display font-bold text-lg text-violet-deep">{level.level}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-gold">
                  {language === 'es' ? level.nameEs : level.nameEn}
                </h3>
              </div>
              <p className="text-cream/60 text-xs mb-3">{language === 'es' ? 'Incluye:' : 'Includes:'}</p>
              <ul className="space-y-2">
                {(language === 'es' ? level.includesEs : level.includesEn).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-cream/80 text-sm">
                    <Check className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Tour Types */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {tourTypes.map((type) => (
            <Badge
              key={type.id}
              variant="outline"
              className="border-gold/50 text-gold px-4 py-2 hover:bg-gold/10 transition-colors"
            >
              {language === 'es' ? type.nameEs : type.nameEn}
            </Badge>
          ))}
        </motion.div>


        {/* Tours Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8 bg-violet-black/50 border border-gold/30">
            <TabsTrigger
              value="main"
              className="flex-1 data-[state=active]:bg-gold data-[state=active]:text-violet-deep"
            >
              {language === 'es' ? 'Principales' : 'Main'}
            </TabsTrigger>
            <TabsTrigger
              value="other"
              className="flex-1 data-[state=active]:bg-gold data-[state=active]:text-violet-deep"
            >
              {language === 'es' ? 'Otros Destinos' : 'Other Destinations'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {mainAttractions.map((tour) => (
                <TourCard 
                    key={tour.id} 
                    tour={tour} 
                    language={language} 
                    onOpenModal={handleOpenModal}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="other">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {otherTours.map((tour) => (
                <TourCard 
                    key={tour.id} 
                    tour={tour} 
                    language={language} 
                    onOpenModal={handleOpenModal}
                />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Tour Modal */}
      <TourModal 
        tour={selectedTour} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Tours;
