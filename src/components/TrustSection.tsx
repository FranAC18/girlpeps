import React from 'react';
import { ShieldCheck, MessageCircle, FileText, Lock } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      title: "Atención personalizada",
      desc: "Asesoría directa y confidencial por WhatsApp durante todo tu proceso.",
      icon: ShieldCheck,
    },
    {
      title: "Pedido fácil por WhatsApp",
      desc: "Generación automática de tu comanda sin registros complejos.",
      icon: MessageCircle,
    },
    {
      title: "Información clara",
      desc: "Descripciones completas y certificados de pureza 99%+ comprobados.",
      icon: FileText,
    },
    {
      title: "Pago coordinado directamente",
      desc: "Múltiples opciones de pago directo de forma segura y transparente.",
      icon: Lock,
    },
  ];

  return (
    <section className="py-16 bg-[#FBF3E4] border-t border-[#E9DCC8]">
      <div className="container mx-auto px-6">
        <div className="bg-[#FFF9F0] rounded-3xl p-8 sm:p-12 border border-[#E9DCC8] shadow-sm">
          
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              Garantía & Compromiso
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#3B302A]">
              Tu experiencia de compra asegurada
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-[#FBF3E4]/60 border border-[#E9DCC8]/60">
                  <div className="p-2.5 bg-[#FFF9F0] rounded-lg text-[#C6A15B] border border-[#E9DCC8] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#3B302A] leading-tight">
                      ✓ {point.title}
                    </h4>
                    <p className="text-xs text-[#766960] mt-1 font-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
