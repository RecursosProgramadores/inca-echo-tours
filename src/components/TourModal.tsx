import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Mountain, Check, Star } from 'lucide-react';
import wstpIcon from '@/assets/wstp.svg';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { Tour } from '@/lib/tours';
import { Button } from '@/components/ui/button';

interface TourModalProps {
  tour: Tour | null;
  isOpen: boolean;
  onClose: () => void;
}

const TourModal = ({ tour, isOpen, onClose }: TourModalProps) => {
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play carousel logic
  useEffect(() => {
    if (!isOpen || !tour?.gallery || tour.gallery.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % (tour.gallery?.length || 1));
    }, 3500); // Slightly slower for better viewing

    return () => clearInterval(interval);
  }, [isOpen, tour]);

  if (!tour || !isOpen) return null;

  const features = [
    { title: 'Objetivos del Tour', items: tour.objectives, icon: <Check className="w-5 h-5 text-gold" /> },
    { title: 'Características', items: tour.characteristics, icon: <Star className="w-5 h-5 text-gold" /> },
    { title: 'Logística', items: tour.logistics, icon: <Mountain className="w-5 h-5 text-gold" /> },
  ];

  // Ensure we are rendering in a portal to avoid z-index/overflow issues
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-violet-deep/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-cream-light w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col relative border border-gold/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-30 w-12 h-12 rounded-full bg-black/20 text-white hover:bg-black/40 hover:scale-105 active:scale-95 flex items-center justify-center transition-all backdrop-blur-md border border-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Hero Carousel Section */}
          <div className="relative h-72 md:h-96 bg-violet-deep flex-shrink-0 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={tour.gallery?.[currentImageIndex] || tour.image}
                alt={language === 'es' ? tour.nameEs : tour.nameEn}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-deep via-transparent to-black/30 opacity-80" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex flex-wrap gap-3 mb-3">
                        {tour.featured && (
                            <span className="bg-gold text-violet-deep text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Featured</span>
                        )}
                        <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {tour.duration} {t('tours.days', language)}
                        </span>
                        <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Mountain className="w-3 h-3" /> {tour.altitude} m.s.n.m.
                        </span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-2 text-shadow-lg leading-tight">
                        {language === 'es' ? tour.nameEs : tour.nameEn}
                    </h2>
                </motion.div>
                
                {/* Progress Indicators */}
                <div className="flex gap-2 mt-4 max-w-xs">
                    {tour.gallery?.map((_, idx) => (
                        <div key={idx} className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden">
                            {idx === currentImageIndex && (
                                <motion.div 
                                    className="h-full bg-gold" 
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 3.5, ease: "linear" }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 overflow-y-auto custom-scrollbar bg-gradient-to-b from-cream-light to-cream-beige">
            <div className="p-8 md:p-10">
                
                {/* Impactful Description Box */}
                <div className="mb-10 relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-gold rounded-full"></div>
                    <p className="text-violet-black text-lg md:text-xl leading-relaxed font-serif italic pl-6">
                        "{language === 'es' ? tour.descriptionEs : tour.descriptionEn}"
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {features.map((section, idx) => (
                     section.items && (
                        <div key={idx} className="space-y-6 bg-white/50 p-6 rounded-2xl border border-white/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center gap-3 border-b-2 border-gold/20 pb-4">
                                <div className="p-2 bg-violet-deep/5 rounded-lg">
                                    {section.icon}
                                </div>
                                <h3 className="font-display text-lg font-bold text-violet-deep">
                                    {section.title}
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed group/item">
                                        <span className="w-1.5 h-1.5 bg-vermilion rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                                        <span className="group-hover/item:text-violet-deep transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                     )
                  ))}
                </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 md:px-10 md:py-6 border-t border-gold/20 bg-white/80 backdrop-blur-md flex flex-col md:flex-row gap-6 items-center justify-between z-20">
             <div className="text-xs text-gray-500 font-medium hidden md:block max-w-md">
                * {language === 'es' 
                    ? 'Los precios y disponibilidad están sujetos a confirmación. Contáctanos para personalizar tu experiencia.' 
                    : 'Prices and availability are subject to confirmation. Contact us to customize your experience.'}
             </div>
             
             <a
                href={`https://wa.me/51905793612?text=Hola, estoy interesado en reservar el tour: ${language === 'es' ? tour.nameEs : tour.nameEn}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
             >
                <Button className="w-full md:w-auto bg-violet-deep text-white hover:bg-violet-black font-bold px-8 py-7 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3 border border-gold/30">
                   <img src={wstpIcon} alt="WhatsApp" className="w-6 h-6" />
                   <span>{language === 'es' ? 'Reservar Ahora' : 'Book Now'}</span>
                   <div className="w-px h-6 bg-white/20 mx-1"></div>
                   <span className="text-gold font-display">WhatsApp</span>
                </Button>
             </a>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default TourModal;
