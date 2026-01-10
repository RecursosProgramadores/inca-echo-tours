import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import logo from '@/assets/infinity-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.tours', href: '#tours' },
    { key: 'nav.festivals', href: '#festivals' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-violet-deep/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <img src={logo} alt="Infinity Experience" className="h-10 md:h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="text-gradient-gold font-display text-lg md:text-xl font-bold tracking-wide">
                INFINITY
              </span>
              <span className="block text-cream text-xs tracking-[0.2em] -mt-1">
                EXPERIENCE TOURS
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-cream hover:text-gold transition-colors text-sm font-medium tracking-wide"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {t(item.key, language)}
              </motion.a>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-cream hover:text-gold hover:bg-transparent gap-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </Button>

            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button className="bg-gradient-gold text-violet-deep hover:opacity-90 font-semibold text-sm px-6">
                {t('hero.cta', language)}
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-cream p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-violet-deep border-t border-gold/20"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-cream hover:text-gold transition-colors py-2 text-lg font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {t(item.key, language)}
                </a>
              ))}
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <Button className="w-full bg-gradient-gold text-violet-deep hover:opacity-90 font-semibold">
                  {t('hero.cta', language)}
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
