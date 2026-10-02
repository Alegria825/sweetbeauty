import { Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function InfoSection() {
  return (
    <section id="informacion" className="py-24 bg-[#EFE9DF]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E5E0D8]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display mb-2">Información Adicional</h2>
            <p className="text-gray-500 font-light">Para garantizar el mejor resultado en tu aplicación.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-display text-[#B59A6D] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Política de Retoques
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 font-light">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#B59A6D] mt-0.5 shrink-0" /> Retoque máximo hasta los 24 días del set nuevo.</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#B59A6D] mt-0.5 shrink-0" /> Asistir con pestañas limpias de maquillaje o sebo.</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#B59A6D] mt-0.5 shrink-0" /> Requiere tener un 50-60% de las extensiones.</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#B59A6D] mt-0.5 shrink-0" /> Sin presencia de procesos infecciosos (orzuelos).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-display text-[#B59A6D] mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Antes de tu Cita
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 font-light">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#B59A6D] mt-0.5 shrink-0" /> Llega con tus pestañas limpias sin residuos de rímel y sin rizarlas.</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#B59A6D] mt-0.5 shrink-0" /> Evita la cafeína y el exceso de alcohol antes de tu cita.</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#B59A6D] mt-0.5 shrink-0" /> Hazte el tiempo, el proceso dura de 1.5 a 2 horas.</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#B59A6D] mt-0.5 shrink-0" /> Llega sin acompañantes y mantén tu celular en silencio. ¡Es tu momento de relajación!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}