import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tours from '@/components/Tours';
import Festivals from '@/components/Festivals';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import FestivalModal from '@/components/FestivalModal';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Tours />
          <Festivals />
          <Contact />
          <Newsletter />
        </main>
        <Footer />
        <FestivalModal />
      </div>
    </LanguageProvider>
  );
};

export default Index;
