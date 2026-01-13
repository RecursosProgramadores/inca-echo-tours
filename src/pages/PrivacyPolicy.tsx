import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-cream-light py-20 px-4">
      <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gold/20">
        <Link to="/" className="inline-flex items-center gap-2 text-violet-deep hover:text-gold transition-colors mb-8 font-medium">
          <ArrowLeft className="w-5 h-5" />
          Volver al Inicio
        </Link>
        
        <h1 className="font-display text-4xl font-bold text-violet-deep mb-8 border-b-2 border-gold pb-4">Política de Privacidad</h1>
        
        <div className="prose prose-violet max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="font-medium text-lg">Última actualización: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">1. Identidad del Responsable</h2>
            <p>
              Inca Echo Tours (en adelante, "nosotros" o "el Sitio") es el responsable del tratamiento de los datos personales 
              recabados a través de este sitio web. Nos comprometemos a proteger su privacidad y cumplir con la legislación 
              vigente en materia de protección de datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">2. Información que Recopilamos</h2>
            <p>Podemos recopilar y procesar los siguientes tipos de información:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Datos de Identificación:</strong> Nombre completo, número de teléfono (WhatsApp), correo electrónico.</li>
              <li><strong>Datos de Navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas y tiempo de navegación (a través de cookies).</li>
              <li><strong>Datos de Reserva:</strong> Información proporcionada voluntariamente al contactarnos para consultas o reservas de tours.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">3. Finalidad del Tratamiento</h2>
            <p>Utilizamos su información para los siguientes fines:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Gestionar y responder a sus consultas y solicitudes de reserva.</li>
              <li>Proveer los servicios turísticos contratados.</li>
              <li>Mejorar la experiencia de usuario en nuestro sitio web.</li>
              <li>Cumplir con obligaciones legales y regulatorias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">4. Cookies y Tecnologías Similares</h2>
            <p>
              Este sitio puede utilizar cookies propias y de terceros para analizar el tráfico y mejorar la funcionalidad. 
              Usted puede configurar su navegador para rechazar todas o algunas cookies, aunque esto podría afectar la 
              funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">5. Compartición de Datos</h2>
            <p>
              No vendemos ni alquilamos sus datos personales a terceros. Solo compartiremos su información con:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Proveedores de servicios necesarios para la ejecución del tour (transporte, alojamiento, guías).</li>
              <li>Autoridades competentes cuando sea requerido por ley.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">6. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas razonables para proteger su información personal 
              contra acceso no autorizado, pérdida o alteración. Sin embargo, ninguna transmisión por internet es 100% segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">7. Sus Derechos</h2>
            <p>
              Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos. 
              Para ejercer estos derechos, puede contactarnos a través de nuestros canales oficiales:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> betitom100@gmail.com / Sabiduriadelhombreandino@gmail.com<br />
              <strong>Teléfono:</strong> +51 905 793 612
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-violet-deep mt-8 mb-4">8. Cambios en la Política</h2>
            <p>
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. 
              Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
