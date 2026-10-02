import { ArrowRight, Star } from 'lucide-react';
import { useBookingForm } from '../../hooks/useBookingForm';

export default function BookingForm({ preselectedService = '' }) {
  const { formData, handleInputChange, handleSubmit } = useBookingForm(preselectedService);

  return (
    <section id="agendar" className="py-24 bg-[#F9F6F0]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-[#2C2A29] text-white rounded-2xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
          <Star className="absolute -top-10 -right-10 w-48 h-48 text-white/5" />
          <Star className="absolute -bottom-10 -left-10 w-48 h-48 text-white/5" />

          <h2 className="text-3xl md:text-5xl font-serif mb-4 relative z-10">Reserva tu momento</h2>
          <p className="text-gray-300 font-light mb-10 relative z-10">
            Déjanos tus datos y te atenderemos personalmente por WhatsApp para confirmar tu fecha y hora ideal.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md mx-auto relative z-10">
            <div className="text-left">
              <label className="block text-sm text-gray-300 mb-2 font-light">¿Cuál es tu nombre?</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ej. María Pérez"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#B59A6D] transition-colors"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-sm text-gray-300 mb-2 font-light">¿Qué servicio te interesa?</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#B59A6D] appearance-none [&>option]:text-black transition-colors"
                required
              >
                <option value="" disabled>Selecciona una opción...</option>
                <optgroup label="Pestañas">
                  <option value="Efecto Rímel">Efecto Rímel</option>
                  <option value="Efecto Mojado">Efecto Mojado</option>
                  <option value="Efecto Híbrido">Efecto Híbrido</option>
                  <option value="Efecto Griego">Efecto Griego</option>
                  <option value="Efecto Egipcio">Efecto Egipcio</option>
                  <option value="Efecto Wispy">Efecto Wispy</option>
                  <option value="Efecto Kim K">Efecto Kim K</option>
                  <option value="Efecto BOO">Efecto BOO</option>
                  <option value="Lash Lifting">Lash Lifting</option>
                </optgroup>
                <optgroup label="Cejas">
                  <option value="Diseño de Cejas">Diseño de Cejas</option>
                  <option value="Henna Brows">Henna Brows</option>
                  <option value="Brow Lamination">Brow Lamination</option>
                  <option value="Brow Harmony">Brow Harmony</option>
                </optgroup>
                <optgroup label="Otros">
                  <option value="Retiro de pestañas">Retiro de Pestañas</option>
                  <option value="Aún no lo sé, necesito asesoría">Aún no lo sé, necesito asesoría</option>
                </optgroup>
              </select>
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#B59A6D] hover:bg-[#9C8255] text-white px-6 py-4 rounded-md font-medium tracking-wide flex items-center justify-center gap-2 transition-all w-full"
            >
              Continuar en WhatsApp <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-gray-400 mt-2 font-light">
              Al hacer clic, se abrirá un chat directo con nuestro estudio en Tuxtla Gutiérrez.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}