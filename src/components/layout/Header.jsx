import { Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#F9F6F0]/90 backdrop-blur-md border-b border-[#E5E0D8]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-display text-[#B59A6D]">
          <Star className="w-6 h-6 fill-current" />
          <span>SweetBeauty</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#servicios" className="hover:text-[#B59A6D] transition-colors">SERVICIOS</a>
          <a href="#informacion" className="hover:text-[#B59A6D] transition-colors">INFO</a>
          <a href="#agendar" className="text-[#B59A6D] font-semibold hover:opacity-80 transition-opacity">AGENDAR CITA</a>
        </nav>
      </div>
    </header>
  );
}