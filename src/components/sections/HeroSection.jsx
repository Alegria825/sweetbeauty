import { MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFE9DF] text-[#8C7654] text-xs font-semibold tracking-wider mb-6">
            <MapPin className="w-4 h-4" /> TUXTLA GUTIÉRREZ
          </div>
          <h1 className="text-4xl md:text-6xl font-display leading-tight mb-6">
            Extensiones de Pestañas y Diseño de Cejas <br className="hidden md:block" />
            <span className="text-[#B59A6D] italic">para resaltar tu mirada</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light mb-10 max-w-lg mx-auto md:mx-0">
            Tu belleza es ÚNICA, ¡como tú! Descubre nuestros efectos personalizados y realza tu atractivo natural con expertas lashistas.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#agendar"
              className="bg-[#B59A6D] hover:bg-[#9C8255] text-white px-8 py-4 rounded-md font-medium tracking-wide flex items-center gap-2 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              Agendar mi Cita <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 rounded-md font-medium tracking-wide text-[#B59A6D] border border-[#B59A6D] hover:bg-[#B59A6D] hover:text-white transition-all w-full sm:w-auto text-center"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-[#B59A6D] rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10"></div>
          <img
            src="https://i.pinimg.com/736x/7a/e7/29/7ae7297721ed0295ab01016c6a4b6fdc.jpg"
            alt="Cliente feliz con extensiones de pestañas en SweetBeauty Tuxtla Gutiérrez"
            className="rounded-t-full rounded-b-md shadow-2xl relative z-10 object-cover w-full max-w-md mx-auto aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}