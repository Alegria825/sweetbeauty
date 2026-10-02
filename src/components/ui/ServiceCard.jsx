export default function ServiceCard({ service, onSelect }) {
  return (
    <div className="group border border-[#EFE9DF] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-[#F9F6F0]">
      <div className="h-64 overflow-hidden">
        <img
          src={service.image}
          alt={`Servicio de ${service.title} en SweetBeauty Tuxtla Gutiérrez`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-display mb-4">{service.title}</h3>
        <p className="text-gray-600 text-sm font-light mb-6 min-h-[40px]">
          {service.description}
        </p>
        <div className="flex items-center justify-between border-t border-[#EFE9DF] pt-4">
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wider block">Valor</span>
            <span className="text-xl font-medium text-[#B59A6D]">{service.price}</span>
          </div>
          <button
            onClick={() => onSelect(service.title)}
            className="text-sm font-medium border border-[#B59A6D] text-[#B59A6D] px-4 py-2 rounded hover:bg-[#B59A6D] hover:text-white transition-colors"
          >
            Elegir
          </button>
        </div>
      </div>
    </div>
  );
}