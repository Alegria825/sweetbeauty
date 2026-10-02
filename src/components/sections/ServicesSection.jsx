import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4">Nuestros Servicios Destacados</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Explora nuestros efectos más solicitados. Trabajamos con fibras de alta calidad, cuidando siempre la salud de tus pestañas naturales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} onSelect={onSelectService} />
          ))}
        </div>
      </div>
    </section>
  );
}