import React from 'react';
import { ShoppingBag, MessageSquare, CreditCard, Sparkles } from 'lucide-react';

export const HowToBuy: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Elige tus productos",
      desc: "Explora el catálogo y selecciona los compuestos o kits requeridos.",
      icon: Sparkles,
    },
    {
      number: "02",
      title: "Agrega al carrito",
      desc: "Revisa las cantidades e ingresa tu cupón de descuento si lo tienes.",
      icon: ShoppingBag,
    },
    {
      number: "03",
      title: "Envía tu pedido por WhatsApp",
      desc: "Presiona el botón de compra para generar tu comanda formal al +1 (862) 233-3919.",
      icon: MessageSquare,
    },
    {
      number: "04",
      title: "Coordina el pago",
      desc: "Confirma los datos de entrega y realiza el pago directamente con nuestro asesor.",
      icon: CreditCard,
    },
  ];

  return (
    <section id="how-to-buy" className="bg-[#FFF9F0] py-20 border-t border-[#E9DCC8]">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold">
            Proceso Simple & Seguro
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B302A] font-bold">
            ¿Cómo realizar tu pedido?
          </h2>
          <p className="text-sm text-[#766960] max-w-lg mx-auto font-light">
            Realizar tu compra en Peptaire Labs es rápido, discreto y personalizado.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FBF3E4] p-8 rounded-2xl border border-[#E9DCC8] relative space-y-4 hover:border-[#C6A15B] transition-all group"
              >
                <span className="font-serif text-4xl font-bold text-[#D9B6B0] group-hover:text-[#C6A15B] transition-colors block">
                  {step.number}
                </span>

                <div className="p-3 bg-[#FFF9F0] rounded-xl w-fit border border-[#E9DCC8] text-[#C6A15B]">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#3B302A]">
                  {step.title}
                </h3>

                <p className="text-xs text-[#766960] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
