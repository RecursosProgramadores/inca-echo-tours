export type Language = 'es' | 'en';

export const translations = {
  nav: {
    home: { es: 'Inicio', en: 'Home' },
    about: { es: 'Nosotros', en: 'About Us' },
    tours: { es: 'Tours y Servicios', en: 'Tours & Services' },
    festivals: { es: 'Festividades', en: 'Festivals' },
    contact: { es: 'Contacto', en: 'Contact' },
  },
  hero: {
    title: { 
      es: 'Descubre el Cusco Infinito', 
      en: 'Discover Infinite Cusco' 
    },
    subtitle: { 
      es: 'con Infinity Experience Tours', 
      en: 'with Infinity Experience Tours' 
    },
    description: {
      es: '13 años de experiencia arqueológica transformados en tours únicos que revelan los secretos de la cultura Inka',
      en: '13 years of archaeological experience transformed into unique tours revealing the secrets of Inka culture'
    },
    cta: { es: 'Reserva Ahora', en: 'Book Now' },
    exploreTours: { es: 'Explorar Tours', en: 'Explore Tours' },
  },
  about: {
    title: { es: 'Nuestra Historia', en: 'Our Story' },
    subtitle: { es: 'De la Arqueología al Turismo de Excelencia', en: 'From Archaeology to Excellence in Tourism' },
    experience: { es: 'Años de Experiencia', en: 'Years of Experience' },
    destinations: { es: 'Destinos', en: 'Destinations' },
    satisfaction: { es: 'Satisfacción', en: 'Satisfaction' },
  },
  tours: {
    title: { es: 'Nuestros Tours', en: 'Our Tours' },
    subtitle: { es: 'Experiencias Únicas en el Corazón del Imperio Inka', en: 'Unique Experiences in the Heart of the Inka Empire' },
    duration: { es: 'Duración', en: 'Duration' },
    altitude: { es: 'Altitud', en: 'Altitude' },
    includes: { es: 'Incluye', en: 'Includes' },
    days: { es: 'días', en: 'days' },
    viewDetails: { es: 'Ver Detalles', en: 'View Details' },
    qualityLevels: { es: 'Niveles de Calidad', en: 'Quality Levels' },
    premium: { es: 'Premium', en: 'Premium' },
    standard: { es: 'Estándar', en: 'Standard' },
    budget: { es: 'Económico', en: 'Budget' },
  },
  festivals: {
    title: { es: 'Calendario de Festividades', en: 'Festivals Calendar' },
    subtitle: { es: 'Cusco celebra todo el año', en: 'Cusco celebrates all year' },
    discount: { es: '¡10% de descuento!', en: '10% discount!' },
    bookNow: { es: 'Reservar Ahora', en: 'Book Now' },
  },
  contact: {
    title: { es: 'Contáctanos', en: 'Contact Us' },
    subtitle: { es: 'Estamos aquí para crear tu experiencia perfecta', en: 'We are here to create your perfect experience' },
    name: { es: 'Nombre', en: 'Name' },
    email: { es: 'Correo Electrónico', en: 'Email' },
    message: { es: 'Mensaje', en: 'Message' },
    send: { es: 'Enviar Mensaje', en: 'Send Message' },
    whatsapp: { es: 'Chatea por WhatsApp', en: 'Chat on WhatsApp' },
  },
  newsletter: {
    title: { es: 'Suscríbete para descuentos exclusivos', en: 'Subscribe for exclusive discounts' },
    placeholder: { es: 'Tu correo electrónico', en: 'Your email address' },
    button: { es: 'Suscribirse', en: 'Subscribe' },
  },
  footer: {
    rights: { es: 'Todos los derechos reservados', en: 'All rights reserved' },
    accredited: { es: 'Acreditado por Gencetur', en: 'Accredited by Gencetur' },
  },
};

export const t = (key: string, lang: Language): string => {
  const keys = key.split('.');
  let value: any = translations;
  for (const k of keys) {
    value = value?.[k];
  }
  return value?.[lang] || key;
};
