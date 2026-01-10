import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import logo from '@/assets/infinity-logo.png';

const Footer = () => {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { labelEs: 'Inicio', labelEn: 'Home', href: '#home' },
    { labelEs: 'Nosotros', labelEn: 'About Us', href: '#about' },
    { labelEs: 'Tours', labelEn: 'Tours', href: '#tours' },
    { labelEs: 'Festividades', labelEn: 'Festivals', href: '#festivals' },
    { labelEs: 'Contacto', labelEn: 'Contact', href: '#contact' },
  ];

  const tourTypes = [
    { labelEs: 'Turismo Cultural', labelEn: 'Cultural Tourism' },
    { labelEs: 'Turismo Natural', labelEn: 'Natural Tourism' },
    { labelEs: 'Turismo de Aventura', labelEn: 'Adventure Tourism' },
    { labelEs: 'Turismo Comunitario', labelEn: 'Community Tourism' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-violet-deep border-t border-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Infinity Experience" className="h-12 w-auto" />
              <div>
                <span className="text-gradient-gold font-display text-xl font-bold tracking-wide block">
                  INFINITY
                </span>
                <span className="text-cream text-xs tracking-[0.2em] -mt-1 block">
                  EXPERIENCE TOURS
                </span>
              </div>
            </div>
            <p className="text-cream/70 text-sm mb-6">
              {language === 'es'
                ? 'Descubre la magia del Cusco y la cultura Inka con expertos arqueólogos. 13+ años de experiencia.'
                : 'Discover the magic of Cusco and Inka culture with expert archaeologists. 13+ years of experience.'}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gold" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/30 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-6">
              {language === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {language === 'es' ? link.labelEs : link.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Types */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-6">
              {language === 'es' ? 'Tipos de Turismo' : 'Tourism Types'}
            </h4>
            <ul className="space-y-3">
              {tourTypes.map((type, index) => (
                <li key={index}>
                  <span className="text-cream/70 text-sm">
                    {language === 'es' ? type.labelEs : type.labelEn}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-6">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Cusco, Perú</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span>+51 999 999 999</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span>info@infinityexperience.pe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm text-center md:text-left">
              © {currentYear} Infinity Experience Tours. {t('footer.rights', language)}.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-cream/60 text-sm">{t('footer.accredited', language)}</span>
              <span className="text-gold font-semibold text-sm">GENCETUR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
