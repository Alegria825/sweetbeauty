import { Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#EFE9DF] py-10 text-center">
      <div className="flex justify-center items-center gap-2 text-2xl font-display text-[#B59A6D] mb-4">
        <Star className="w-5 h-5 fill-current" />
        <span>SweetBeauty</span>
      </div>
      <p className="text-gray-500 text-sm font-light mb-2">Tu belleza es ÚNICA, ¡como tú!</p>
      <p className="text-gray-400 text-xs tracking-wider">
        TUXTLA GUTIÉRREZ, CHIAPAS · © {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS.
      </p>
    </footer>
  );
}