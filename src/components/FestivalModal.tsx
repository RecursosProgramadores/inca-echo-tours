import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Gift } from 'lucide-react';
import wstpIcon from '@/assets/wstp.svg';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { festivals, Festival } from '@/lib/festivals';
import { Button } from '@/components/ui/button';

const monthNames = {
  es: ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  en: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

const FestivalModal = () => {
  const { language } = useLanguage();
  const [festival, setFestival] = useState<Festival | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // TEST MODE: 15s rotation
    const showFestival = () => {
      const currentFestival = festivals[currentIndex];
      setFestival(currentFestival);
      setIsOpen(true);

      // Prepare next index
      setCurrentIndex((prev) => (prev + 1) % festivals.length);
    };

    // Initial show after 3s
    const initialTimer = setTimeout(() => {
        showFestival();
    }, 3000);

    // Rotate every 15s
    const interval = setInterval(() => {
        setIsOpen(false); // Close current
        setTimeout(() => {
            showFestival(); // Show next after brief close
        }, 500); // Wait for exit animation
    }, 15000);

    return () => {
        clearTimeout(initialTimer);
        clearInterval(interval);
    };
  }, [currentIndex]);

  /* 
  // PRODUCTION LOGIC (Commented out as requested for testing)
  useEffect(() => {
    const today = new Date();
    // Logic to find if today is within 7 days of a festival can be added here
    // For now, we are sticking to the requested 15s rotation.
  }, []);
  */

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!festival) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Back layer) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-violet-deep/80 backdrop-blur-sm z-[60]"
            onClick={handleClose}
          />

          {/* Modal Container (Front layer for centering) */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-lg pointer-events-auto"
            >
              <div className="bg-card border-gradient-gold rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-violet-deep/80 text-cream hover:bg-violet-deep flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={festival.image}
                    alt={language === 'es' ? festival.nameEs : festival.nameEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-deep/90 via-transparent to-transparent" />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-vermilion text-cream px-4 py-2 rounded-full flex items-center gap-2 shimmer">
                    <Gift className="h-5 w-5" />
                    <span className="font-bold">{t('festivals.discount', language)}</span>
                  </div>

                  {/* Month Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-cream">
                    <Calendar className="h-5 w-5 text-gold" />
                    <span className="font-display text-xl font-bold">
                      {monthNames[language][festival.month]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                <h3 className="font-display text-2xl font-bold text-violet-black mb-3">
                  {language === 'es' ? festival.nameEs : festival.nameEn}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-6 md:line-clamp-none">
                  {language === 'es' ? festival.descriptionEs : festival.descriptionEn}
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/51999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-gold text-violet-deep hover:opacity-90 font-semibold gap-2 py-6">
                      <img src={wstpIcon} alt="WhatsApp" className="h-5 w-5" />
                      {language === 'es' ? 'Reservar Ahora' : 'Book Now'}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FestivalModal;
