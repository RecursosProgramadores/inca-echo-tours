import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Calendar, Gift } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { getUpcomingFestival, Festival } from '@/lib/festivals';
import { Button } from '@/components/ui/button';

const monthNames = {
  es: ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  en: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

const FestivalModal = () => {
  const { language } = useLanguage();
  const [festival, setFestival] = useState<Festival | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if modal was already dismissed this session
    const dismissed = sessionStorage.getItem('festival-modal-dismissed');
    if (dismissed) return;

    // Wait a bit before showing the modal
    const timer = setTimeout(() => {
      const upcomingFestival = getUpcomingFestival();
      if (upcomingFestival) {
        setFestival(upcomingFestival);
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('festival-modal-dismissed', 'true');
  };

  if (!festival) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-violet-deep/80 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full z-50"
          >
            <div className="bg-card border-gradient-gold rounded-2xl overflow-hidden shadow-2xl h-full md:h-auto flex flex-col">
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
              <div className="p-6 flex-1 overflow-auto">
                <h3 className="font-display text-2xl font-bold text-violet-black mb-3">
                  {language === 'es' ? festival.nameEs : festival.nameEn}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-4">
                  {language === 'es' ? festival.descriptionEs : festival.descriptionEn}
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/51999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-gold text-violet-deep hover:opacity-90 font-semibold gap-2 py-6">
                      <MessageCircle className="h-5 w-5" />
                      {t('festivals.bookNow', language)}
                    </Button>
                  </a>
                  
                  <button
                    onClick={handleClose}
                    className="text-muted-foreground text-sm hover:text-violet-black transition-colors"
                  >
                    {language === 'es' ? 'Quizás más tarde' : 'Maybe later'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FestivalModal;
