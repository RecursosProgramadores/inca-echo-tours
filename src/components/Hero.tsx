import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-machu-picchu.jpg';
import wstpIcon from '@/assets/wstp.svg';

const Hero = () => {
  const { language } = useLanguage();

  const scrollToTours = () => {
    document.querySelector('#tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = `https://wa.me/51905793612?text=${language === 'es' 
    ? 'Hola, quiero comenzar mi aventura en Cusco con Infinity Experience Tours' 
    : 'Hello, I want to start my adventure in Cusco with Infinity Experience Tours'}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Machu Picchu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-deep/80 via-violet-deep/50 to-violet-deep/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 inca-pattern opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 mb-8"
          >
            <MapPin className="h-4 w-4 text-gold" />
            <span className="text-cream text-sm font-medium">Cusco, Perú</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gradient-gold">{t('hero.title', language)}</span>
          </motion.h1>

          <motion.p
            className="text-cream text-xl md:text-2xl font-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t('hero.subtitle', language)}
          </motion.p>

          <motion.p
            className="text-cream/80 text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {t('hero.description', language)}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-gold text-violet-deep hover:opacity-90 font-semibold text-lg px-8 py-6 gap-2 w-full sm:w-auto flex items-center"
              >
                <img src={wstpIcon} alt="WhatsApp" className="h-6 w-6" />
                {t('hero.cta', language)}
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToTours}
              className="border-gold/50 text-gold hover:bg-gold/10 font-semibold text-lg px-8 py-6 w-full sm:w-auto"
            >
              {t('hero.exploreTours', language)}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-gradient-gold text-3xl md:text-4xl font-display font-bold">13+</div>
              <div className="text-cream/70 text-sm mt-1">{t('about.experience', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-gradient-gold text-3xl md:text-4xl font-display font-bold">20+</div>
              <div className="text-cream/70 text-sm mt-1">{t('about.destinations', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-gradient-gold text-3xl md:text-4xl font-display font-bold">100%</div>
              <div className="text-cream/70 text-sm mt-1">{t('about.satisfaction', language)}</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToTours}
          >
            <ChevronDown className="h-8 w-8 text-gold/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
