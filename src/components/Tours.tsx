import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, Mountain, Star, Check, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { mainAttractions, otherTours, tourTypes, Tour } from '@/lib/tours';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const TourCard = ({ tour, language }: { tour: Tour; language: 'es' | 'en' }) => {
  return (
    <motion.div
      className="group bg-card border-gradient-gold rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
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
          <h3 className="font-display text-xl font-bold text-cream">
            {language === 'es' ? tour.nameEs : tour.nameEn}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {language === 'es' ? tour.descriptionEs : tour.descriptionEn}
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-gold" />
            <span>{tour.duration} {t('tours.days', language)}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Mountain className="h-4 w-4 text-gold" />
            <span>{tour.altitude} m.s.n.m.</span>
          </div>
        </div>

        <a
          href="https://wa.me/51999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full bg-gradient-gold text-violet-deep hover:opacity-90 font-semibold gap-2">
            <MessageCircle className="h-4 w-4" />
            {t('contact.whatsapp', language)}
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

const Tours = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('main');

  const qualityLevels = [
    {
      level: 'A',
      nameEs: 'Premium',
      nameEn: 'Premium',
      descEs: 'Máximo confort, alojamiento de lujo, transporte privado, guía exclusivo, todas las comidas gourmet incluidas.',
      descEn: 'Maximum comfort, luxury accommodation, private transport, exclusive guide, all gourmet meals included.',
      color: 'bg-gold',
    },
    {
      level: 'B',
      nameEs: 'Estándar',
      nameEn: 'Standard',
      descEs: 'Excelente relación calidad-precio, alojamiento confortable, transporte compartido, guía profesional.',
      descEn: 'Excellent value for money, comfortable accommodation, shared transport, professional guide.',
      color: 'bg-silver',
    },
    {
      level: 'C',
      nameEs: 'Económico',
      nameEn: 'Budget',
      descEs: 'Opción accesible sin sacrificar calidad, alojamiento básico, transporte público, guía grupal.',
      descEn: 'Affordable option without sacrificing quality, basic accommodation, public transport, group guide.',
      color: 'bg-cream',
    },
  ];

  const includes = language === 'es'
    ? ['Transporte', 'Alimentación', 'Alojamiento', 'Boletos', 'Guiado']
    : ['Transport', 'Meals', 'Accommodation', 'Tickets', 'Guide'];

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
          {qualityLevels.map((level, index) => (
            <div
              key={level.level}
              className="bg-violet-black/50 border border-gold/30 rounded-xl p-6 text-center"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${level.color} mb-4`}>
                <span className="font-display font-bold text-xl text-violet-deep">{level.level}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-gold mb-2">
                {language === 'es' ? level.nameEs : level.nameEn}
              </h3>
              <p className="text-cream/70 text-sm">
                {language === 'es' ? level.descEs : level.descEn}
              </p>
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
              className="border-gold/50 text-gold px-4 py-2"
            >
              {language === 'es' ? type.nameEs : type.nameEn}
            </Badge>
          ))}
        </motion.div>

        {/* Includes */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12 text-cream/80"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {includes.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-gold" />
              <span className="text-sm">{item}</span>
            </div>
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
                <TourCard key={tour.id} tour={tour} language={language} />
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
                <TourCard key={tour.id} tour={tour} language={language} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Tours;
