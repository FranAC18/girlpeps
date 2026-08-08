import React from 'react';
import { ShieldCheck, FlaskConical, Truck } from 'lucide-react';

export const QualityAssurance: React.FC = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-20 border-t border-[#E9DCC8]">
      <div className="text-center mb-16 space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold">
          Calidad en la que puedes confiar
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-[#3B302A]">
          Respaldando la ciencia con compuestos<br />
          verificados y consistentes.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#FFF9F0] rounded-2xl p-8 space-y-4 border border-[#E9DCC8] hover:border-[#C6A15B] transition-all shadow-sm">
          <div className="p-3.5 bg-[#FBF3E4] rounded-xl w-fit border border-[#E9DCC8] text-[#C6A15B]">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h3 className="font-serif text-2xl text-[#3B302A] font-bold">
            Garantía de Calidad Premium
          </h3>
          <p className="text-xs text-[#766960] leading-relaxed font-light">
            Cada compuesto es supervisado bajo estrictos controles de conservación para asegurar estabilidad molecular y reproducibilidad.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FFF9F0] rounded-2xl p-8 space-y-4 border border-[#E9DCC8] hover:border-[#C6A15B] transition-all shadow-sm">
          <div className="p-3.5 bg-[#FBF3E4] rounded-xl w-fit border border-[#E9DCC8] text-[#C6A15B]">
            <FlaskConical className="h-7 w-7" />
          </div>
          <h3 className="font-serif text-2xl text-[#3B302A] font-bold">
            Estándar de Investigación
          </h3>
          <p className="text-xs text-[#766960] leading-relaxed font-light">
            Formulaciones y péptidos verificados mediante ensayos de pureza HPLC 99%+, destinados a pruebas y análisis de laboratorio.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#FFF9F0] rounded-2xl p-8 space-y-4 border border-[#E9DCC8] hover:border-[#C6A15B] transition-all shadow-sm">
          <div className="p-3.5 bg-[#FBF3E4] rounded-xl w-fit border border-[#E9DCC8] text-[#C6A15B]">
            <Truck className="h-7 w-7" />
          </div>
          <h3 className="font-serif text-2xl text-[#3B302A] font-bold">
            Despacho Directo & Confiable
          </h3>
          <p className="text-xs text-[#766960] leading-relaxed font-light">
            Desde la atención directa en WhatsApp hasta el empaque térmico final, cada detalle se maneja con cuidado y rapidez.
          </p>
        </div>
      </div>
    </section>
  );
};
