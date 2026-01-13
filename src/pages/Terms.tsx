import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-cream-light py-20 px-4">
      <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gold/20">
        <Link to="/" className="inline-flex items-center gap-2 text-violet-deep hover:text-gold transition-colors mb-8 font-medium">
          <ArrowLeft className="w-5 h-5" />
          Volver al Inicio
        </Link>
        
        <h1 className="font-display text-4xl font-bold text-violet-deep mb-8 border-b-2 border-gold pb-4">Términos y Condiciones de Uso</h1>
        
        <div className="prose prose-violet max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="font-medium text-lg">Última actualización: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sitio web de Inca Echo Tours, usted acepta cumplir y estar sujeto a los siguientes 
              Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le recomendamos no utilizar 
              nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">2. Uso del Sitio Web</h2>
            <p>Usted se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Utilizar el sitio únicamente con fines lícitos y relacionados con la consulta o reserva de servicios turísticos.</li>
              <li>No realizar actividades que puedan dañar, sobrecargar o deteriorar el funcionamiento del sitio.</li>
              <li>No intentar acceder a áreas restringidas o sistemas informáticos del sitio sin autorización.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">3. Propiedad Intelectual</h2>
            <p>
              Todo el contenido presente en este sitio web, incluyendo textos, imágenes, logotipos, gráficos y diseño, 
              es propiedad exclusiva de Inca Echo Tours o de sus respectivos titulares. Está prohibida su reproducción, 
              distribución o modificación sin autorización previa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">4. Reservas y Pagos</h2>
            <p>
              La información sobre tours, itinerarios y precios es referencial y está sujeta a confirmación. 
              Las reservas se formalizan a través de nuestros canales de contacto directo (WhatsApp/Email). 
              Las condiciones específicas de pago, cancelación y reembolso se detallarán al momento de la confirmación 
              de la reserva.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">5. Limitación de Responsabilidad</h2>
            <p>
              Inca Echo Tours no se hace responsable por:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Interrupciones o errores en el funcionamiento del sitio web.</li>
              <li>Daños indirectos derivados del uso de la información contenida en el sitio.</li>
              <li>Contenidos de enlaces externos que puedan aparecer en nuestra web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">6. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. 
              El uso continuado del sitio tras la publicación de cambios constituirá su aceptación de los mismos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">7. Legislación Aplicable</h2>
            <p>
              Estos términos se rigen e interpretan de acuerdo con las leyes de la República del Perú. 
              Cualquier controversia se someterá a la jurisdicción de los tribunales competentes de la ciudad del Cusco, Perú.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">8. Contacto</h2>
            <p>
              Si tiene alguna duda sobre estos términos, puede contactarnos en:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> betitom100@gmail.com / Sabiduriadelhombreandino@gmail.com<br />
              <strong>Teléfono:</strong> +51 905 793 612
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
