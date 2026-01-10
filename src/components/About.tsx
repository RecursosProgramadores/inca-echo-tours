import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Shield, Compass } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const About = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const historyEs = `DESDE EL 2006 la arqueología fue el pilar de esta empresa, llevándonos a descubrir muchos y apasionantes sitios arqueológicos pertenecientes a la cultura Inka. El CUSCO sin duda fue el mejor lugar escogido por ellos, por los recursos que posee, entre el clima y la fertilidad de la tierra. Aquí establecieron la sede principal, y fuimos conociendo muchas poblaciones alrededor que empezamos a recorrer y detallar los sitios arqueológicos y describir las características arquitectónicas y las evidencias materiales como cerámica, metales, líticos y otros.

El 2012 el manejo y la gestión de los recursos turísticos fue tomando más precisión, al realizar estudios arqueológicos sobre construcciones arquitectónicas Inka, en toda la región, ubicando y detallando cada uno de los vestigios presentes como adoratorios, caminos, fuentes, y proyectando su conservación, difusión y deleite de la población, visitantes locales, nacionales y extranjeros.

El 2013 la hazaña se trasladó a Machupicchu, denominada maravilla del mundo en el cual nos concentramos más de 10 años dando realce a este monumento emblemático a partir de sus evidencias. Produjimos investigaciones arqueológicas, excavaciones, talleres didácticos, exposiciones temporales y conferencias sobre el material encontrado en Machupicchu.

El 2025 se da inicio a las operaciones turísticas de Infinity Experience Tours, acreditados y contando con todos los permisos establecidos por la ley.`;

  const historyEn = `Since 2006, archaeology has been the pillar of this company, leading us to discover many exciting archaeological sites belonging to the Inka culture. CUSCO was undoubtedly the best place chosen by them, for its resources, including the climate and fertility of the land. Here they established the headquarters, and we got to know many surrounding populations that we began to visit and detail the archaeological sites and describe the architectural characteristics and material evidence such as ceramics, metals, lithics and others.

In 2012, the management of tourist resources became more precise, carrying out archaeological studies on Inka architectural constructions throughout the region, locating and detailing each of the vestiges present such as shrines, roads, fountains, and projecting their conservation and enjoyment by the population, local, national and foreign visitors.

In 2013, the feat moved to Machupicchu, called a wonder of the world, where we focused for more than 10 years, highlighting this emblematic monument from its evidence. We produced archaeological research, excavations, educational workshops, temporary exhibitions and conferences on the material found in Machupicchu.

In 2025, Infinity Experience Tours begins tourist operations, accredited and with all the permits established by law.`;

  const features = [
    {
      icon: Award,
      titleEs: 'Acreditados por Gencetur',
      titleEn: 'Gencetur Accredited',
      descEs: 'Agencia digital con todos los permisos legales desde 2025',
      descEn: 'Digital agency with all legal permits since 2025',
    },
    {
      icon: Users,
      titleEs: 'Equipo Profesional',
      titleEn: 'Professional Team',
      descEs: 'Arqueólogos y guías expertos con años de experiencia',
      descEn: 'Archaeologists and expert guides with years of experience',
    },
    {
      icon: Shield,
      titleEs: 'Calidad Garantizada',
      titleEn: 'Quality Guaranteed',
      descEs: 'Servicios A, B y C adaptados a cada presupuesto',
      descEn: 'A, B and C services adapted to every budget',
    },
    {
      icon: Compass,
      titleEs: 'Enfoque Arqueológico',
      titleEn: 'Archaeological Focus',
      descEs: 'Transmitimos la cosmovisión andina en cada tour',
      descEn: 'We transmit the Andean worldview in every tour',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-cream-light inca-pattern" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-violet-black mb-4">
            {t('about.title', language)}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('about.subtitle', language)}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card border-gradient-gold rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold mb-4">
                <feature.icon className="h-7 w-7 text-violet-deep" />
              </div>
              <h3 className="font-display text-lg font-semibold text-violet-black mb-2">
                {language === 'es' ? feature.titleEs : feature.titleEn}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'es' ? feature.descEs : feature.descEn}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* History */}
        <motion.div
          className="bg-card border-gradient-gold rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display text-2xl font-bold text-violet-black mb-6 text-center">
            {language === 'es' ? 'Historia' : 'History'}
          </h3>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            {(language === 'es' ? historyEs : historyEn).split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>

          {/* Vision */}
          <div className="mt-10 pt-8 border-t border-border">
            <h4 className="font-display text-xl font-semibold text-vermilion mb-4">
              {language === 'es' ? 'Visión' : 'Vision'}
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                {language === 'es' 
                  ? 'Mejorar a diario la calidad y experiencias de cada visitante programando un itinerario especial y particular de acuerdo al gusto y preferencia del turista.'
                  : 'Daily improve the quality and experiences of each visitor by programming a special itinerary according to the tourist\'s taste and preference.'}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                {language === 'es'
                  ? 'Conferir la potestad al visitante de practicar y rememorar la cultura ancestral de los Inkas, aprendiendo y practicando la cosmovisión andina.'
                  : 'Give visitors the power to practice and remember the ancestral culture of the Inkas, learning and practicing the Andean worldview.'}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                {language === 'es'
                  ? 'Construir una nueva forma de incentivos a la cultura local que mantiene viva las tradiciones milenarias.'
                  : 'Build a new form of incentives to local culture that keeps ancient traditions alive.'}
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
