import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Activities from '@/components/Activities';
import Tours from '@/components/Tours';
import Staff from '@/components/Staff';
import Festivals from '@/components/Festivals';
import Contact from '@/components/Contact';

import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Activities />
          <Tours />
          <Staff />
          <Contact />
          <Testimonials />

        </main>
        <Footer />
        {/* <FestivalModal /> */}
      </div>
    </LanguageProvider>
  );
};

export default Index;
