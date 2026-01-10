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

const Contact = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: language === 'es' ? '¡Mensaje enviado!' : 'Message sent!',
      description: language === 'es' 
        ? 'Nos pondremos en contacto contigo pronto.'
        : 'We will contact you soon.',
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      titleEs: 'WhatsApp',
      titleEn: 'WhatsApp',
      value: '+51 999 999 999',
      href: 'https://wa.me/51999999999',
    },
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
    <section id="contact" className="py-20 md:py-32 bg-violet-deep" ref={ref}>
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
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold gap-3 py-6"
              >
                <MessageCircle className="h-6 w-6" />
                {t('contact.whatsapp', language)}
              </Button>
            </a>

            {/* Logistics Info */}
            <div className="mt-8 p-6 bg-violet-black/50 border border-gold/30 rounded-xl">
              <h4 className="font-display text-lg font-semibold text-gold mb-4">
                {language === 'es' ? 'Servicios Incluidos' : 'Included Services'}
              </h4>
              <ul className="space-y-2 text-cream/80 text-sm">
                <li>• {language === 'es' ? 'Casa de cambios de divisa' : 'Currency exchange'}</li>
                <li>• {language === 'es' ? 'Descuentos en tiendas de souvenirs' : 'Souvenir shop discounts'}</li>
                <li>• {language === 'es' ? 'Alojamiento acorde al gusto' : 'Accommodation to your taste'}</li>
                <li>• {language === 'es' ? 'Transporte 100% garantizado' : '100% guaranteed transport'}</li>
                <li>• {language === 'es' ? 'Guiado profesional' : 'Professional guide'}</li>
              </ul>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
