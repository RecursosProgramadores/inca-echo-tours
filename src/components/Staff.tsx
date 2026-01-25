import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Award, Heart, Briefcase, Palette, Leaf } from 'lucide-react';
import raysaImg from '@/assets/staff/raysa.png';
import raulImg from '@/assets/staff/raul.jpeg';

const Staff = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const teamMembers = [
    {
      id: 'raysa',
      name: 'Raysa Kristel Guillen Zuñiga',
      image: raysaImg,
      roleEs: 'Especialista en Salud, Turismo y Diseño',
      roleEn: 'Health, Tourism & Design Specialist',
      origin: 'Cusco, Perú',
      sections: [
        {
          titleEs: 'Salud y Bienestar Integral',
          titleEn: 'Health & Wellness',
          icon: Heart,
          itemsEs: [
            'Profesional renombrada en salud oral',
            'Cuidado especializado para adultos y niños',
            'Promotora de nutrición orgánica y bienestar integral',
            'Conexión con la naturaleza y exploración de ecosistemas'
          ],
          itemsEn: [
            'Renowned oral health professional',
            'Specialized care for adults and children',
            'Promoter of organic nutrition and holistic wellness',
            'Connection with nature and ecosystem exploration'
          ]
        },
        {
          titleEs: 'Trayectoria Comercial y Turística',
          titleEn: 'Commercial & Tourism Experience',
          icon: Briefcase,
          itemsEs: [
            'Ejecutiva de ventas con amplia trayectoria',
            'Estrategias innovadoras de comunicación con visitantes',
            'Experta en resolución de situaciones en el campo turístico'
          ],
          itemsEn: [
            'Sales executive with extensive experience',
            'Innovative communication strategies with visitors',
            'Expert in problem-solving in the tourism field'
          ]
        },
        {
          titleEs: 'Diseño y Pasiones',
          titleEn: 'Design & Passions',
          icon: Palette,
          itemsEs: [
            'Diseñadora de modas en eventos locales y nacionales',
            'Creadora de diseños estilo prehispánico',
            'Amante de la naturaleza y los animales'
          ],
          itemsEn: [
            'Fashion designer at local and national events',
            'Creator of prehispanic style designs',
            'Nature and animal lover'
          ]
        }
      ]
    },
    {
      id: 'raul',
      name: 'Raúl Loayza Rojas',
      image: raulImg,
      roleEs: 'Arqueólogo y Guía Oficial de Turismo',
      roleEn: 'Archaeologist & Official Tourism Guide',
      origin: 'Cusco, Perú',
      sections: [
        {
          titleEs: 'Especialidades',
          titleEn: 'Specialties',
          icon: Award,
          itemsEs: [
            'Gestión del patrimonio cultural',
            'Análisis de materiales arqueológicos',
            'Investigación y conservación del patrimonio',
            'Guía oficial de turismo apasionado'
          ],
          itemsEn: [
            'Cultural heritage management',
            'Archaeological materials analysis',
            'Heritage research and conservation',
            'Passionate official tourism guide'
          ]
        },
        {
          titleEs: 'Experiencia en Machupicchu',
          titleEn: 'Machu Picchu Experience',
          icon: MapPin,
          itemsEs: [
            '12 años de investigación arqueológica y turismo',
            'Numerosos estudios y publicaciones',
            'Combina historia y dinámica del servicio turístico',
            'Búsqueda constante de nuevas experiencias'
          ],
          itemsEn: [
            '12 years of archaeological research and tourism',
            'Numerous studies and publications',
            'Combines history with tourism service dynamics',
            'Constant search for new experiences'
          ]
        },
        {
          titleEs: 'Gestión Cultural',
          titleEn: 'Cultural Management',
          icon: Leaf,
          itemsEs: [
            'Promotor de eventos académicos y charlas',
            'Organizador de exposiciones temporales',
            'Talleres didácticos y pedagógicos',
            'Difusor de la identidad y cultura andina'
          ],
          itemsEn: [
            'Promoter of academic events and talks',
            'Organizer of temporary exhibitions',
            'Educational and pedagogical workshops',
            'Promoter of Andean identity and culture'
          ]
        }
      ]
    }
  ];

  return (
    <section id="staff" className="py-20 md:py-32 bg-cream inca-pattern" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-violet-deep mb-4">
            {language === 'es' ? 'Staff de Profesionales' : 'Professional Staff'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Conoce al equipo que hará de tu experiencia algo inolvidable'
              : 'Meet the team that will make your experience unforgettable'
            }
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              className="w-full bg-card border-gradient-gold rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Image section - left side */}
              <div className="relative w-full md:w-80 lg:w-96 flex-shrink-0 h-96 md:h-auto md:min-h-[400px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-violet-deep via-violet-deep/50 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 md:bottom-6">
                  <h3 className="font-display text-2xl font-bold text-cream mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium">
                    {language === 'es' ? member.roleEs : member.roleEn}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-cream/80 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{member.origin}</span>
                  </div>
                </div>
              </div>

              {/* Content sections - right side */}
              <div className="flex-1 p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {member.sections.map((section, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                          <section.icon className="h-5 w-5 text-gold" />
                        </div>
                        <h4 className="font-display font-semibold text-violet-deep text-base lg:text-lg">
                          {language === 'es' ? section.titleEs : section.titleEn}
                        </h4>
                      </div>
                      <ul className="space-y-3 pl-10 lg:pl-0">
                        {(language === 'es' ? section.itemsEs : section.itemsEn).map((item, iIdx) => (
                          <li key={iIdx} className="text-muted-foreground text-base flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
