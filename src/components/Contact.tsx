import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import wstpIcon from '@/assets/wstp.svg';

const WstpIcon = ({ className }: { className?: string }) => (
  <img src={wstpIcon} alt="WhatsApp" className={className} />
);

const Contact = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const whatsappMessage = `Hola, mi nombre es ${name}. Email: ${email}. Mensaje: ${message}`;
    const whatsappUrl = `https://wa.me/51905793612?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
    
    toast({
      title: language === 'es' ? '¡Redirigiendo a WhatsApp!' : 'Redirecting to WhatsApp!',
      description: language === 'es' 
        ? 'Continúa tu conversación en WhatsApp.'
        : 'Continue your conversation on WhatsApp.',
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [

    {
      icon: Mail,
      titleEs: 'Correo Electrónico',
      titleEn: 'Email',
      value: 'info@infinityexperience.pe',
      href: 'mailto:info@infinityexperience.pe',
    },
    {
      icon: Phone,
      titleEs: 'Teléfono',
      titleEn: 'Phone',
      value: '+51 84 123 456',
      href: 'tel:+5184123456',
    },
    {
      icon: MapPin,
      titleEs: 'Ubicación',
      titleEn: 'Location',
      value: 'Cusco, Perú',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-violet-deep" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            {t('contact.title', language)}
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle', language)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-violet-black/50 border border-gold/30 rounded-xl hover:bg-violet-black/70 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-violet-deep" />
                  </div>
                  <div>
                    <div className="text-cream/60 text-sm">
                      {language === 'es' ? info.titleEs : info.titleEn}
                    </div>
                    <div className="text-cream font-medium group-hover:text-gold transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/51905793612?text=${language === 'es' ? 'Hola, quiero contactar con Infinity Experience Tours' : 'Hello, I want to contact Infinity Experience Tours'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold gap-3 py-6"
              >
                <img src={wstpIcon} alt="WhatsApp" className="h-6 w-6" />
                {t('contact.whatsapp', language)}
              </Button>
            </a>

            {/* Google Map */}
            <div className="mt-8 rounded-xl overflow-hidden border border-gold/30 shadow-lg h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6207.251478144672!2d-71.9785356!3d-13.516086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5d82659d81b%3A0x280d5658e0a14981!2sCusco!5e0!3m2!1sen!2spe!4v1650000000000!5m2!1sen!2spe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Cusco"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>


          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border-gradient-gold rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-violet-black mb-2">
                    {t('contact.name', language)}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-cream-light border-border focus:border-gold focus:ring-gold"
                    placeholder={language === 'es' ? 'Tu nombre completo' : 'Your full name'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-violet-black mb-2">
                    {t('contact.email', language)}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-cream-light border-border focus:border-gold focus:ring-gold"
                    placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-violet-black mb-2">
                    {t('contact.message', language)}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-cream-light border-border focus:border-gold focus:ring-gold resize-none"
                    placeholder={language === 'es' ? '¿En qué podemos ayudarte?' : 'How can we help you?'}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold text-violet-deep hover:opacity-90 font-semibold gap-2 py-6"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting 
                    ? (language === 'es' ? 'Enviando...' : 'Sending...')
                    : t('contact.send', language)}
                </Button>
              </div>
            </form>

            {/* Logistics Info (Moved to Right Column) */}
            <div className="mt-6 p-5 bg-violet-black/50 border border-gold/30 rounded-xl">
              <h4 className="font-display text-base font-semibold text-gold mb-3">
                {language === 'es' ? 'Servicios Incluidos' : 'Included Services'}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-cream/80 text-xs">
                <li>• {language === 'es' ? 'Cambio de divisa' : 'Currency exchange'}</li>
                <li>• {language === 'es' ? 'Descuentos souvenirs' : 'Souvenir discounts'}</li>
                <li>• {language === 'es' ? 'Alojamiento a gusto' : 'Custom accommodation'}</li>
                <li>• {language === 'es' ? 'Transporte garantizado' : 'Guaranteed transport'}</li>
                <li>• {language === 'es' ? 'Guiado profesional' : 'Professional guide'}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
