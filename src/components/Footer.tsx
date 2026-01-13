import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { Link } from 'react-router-dom';
import logoInfinity from '@/assets/logoinfinity.jpg';
import flyLogo from '@/assets/logo.svg';
import libroReclamacionesImg from '@/assets/libroreclamaciones.jpeg';

const Footer = () => {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { labelEs: 'Inicio', labelEn: 'Home', href: '#home' },
    { labelEs: 'Nosotros', labelEn: 'About Us', href: '#about' },
    { labelEs: 'Tours', labelEn: 'Tours', href: '#tours' },
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
    <footer className="relative bg-violet-deep border-t border-gold/20 overflow-hidden">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
            src="https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80" 
            alt="Footer Background" 
            className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-violet-deep via-violet-deep/95 to-violet-deep/90 z-0" />

      <div className="container relative z-10 mx-auto px-4 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoInfinity} alt="Infinity Experience Tours" className="h-16 w-auto rounded-lg" />
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

            {/* Libro de Reclamaciones */}
            <div className="mt-6">
              <a
                href="https://forms.gle/YaXB1nhvNkimJGUT7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-48 hover:opacity-90 transition-opacity"
              >
                <img 
                  src={libroReclamacionesImg} 
                  alt="Libro de Reclamaciones" 
                  className="w-full h-auto rounded-lg border border-white/10" 
                />
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
                <a href="https://wa.me/51905793612" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                    +51 905 793 612
                </a>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <div className="flex flex-col">
                    <a href="mailto:betitom100@gmail.com" className="hover:text-gold transition-colors">betitom100@gmail.com</a>
                    <a href="mailto:Sabiduriadelhombreandino@gmail.com" className="hover:text-gold transition-colors">Sabiduriadelhombreandino@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/20 flex flex-col items-center gap-6">
          
          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left text-sm text-cream/60">
            <p>
              © {currentYear} Infinity Experience Tours. {t('footer.rights', language)}.
            </p>
            <span className="hidden md:inline px-2 text-gold/50">|</span>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <Link to="/privacy" className="hover:text-gold transition-colors">
                  {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
                </Link>
                <span className="text-gold/50">|</span>
                <Link to="/terms" className="hover:text-gold transition-colors">
                  {language === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions'}
                </Link>
            </div>
          </div>

          {/* Developer Credit */}
          <a 
            href="https://wa.me/51949992147?text=Hola%20Fly%2C%20vengo%20de%20INFINITY%20EXPERIENCE%20TOURS%20%2C%20estoy%20interesado%20en%20crear%20mi%20p%C3%A1gina%20web%20profesional" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="text-xs text-cream/50 uppercase tracking-widest group-hover:text-gold transition-colors">
                Desarrollado por
            </span>
            <img src={flyLogo} alt="Fly" className="h-6 w-auto brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
