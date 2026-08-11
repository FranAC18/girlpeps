import React from 'react';
import { ShoppingBag, MessageSquare, CreditCard, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const HowToBuy: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Select Your Products",
      desc: "Explore our research catalog and select your required compounds.",
      icon: Sparkles,
    },
    {
      number: "02",
      title: "Review Cart & Coupon",
      desc: "Verify quantities and apply your discount coupon code if available.",
      icon: ShoppingBag,
    },
    {
      number: "03",
      title: "Send WhatsApp Order",
      desc: `Click checkout to generate your structured order summary to ${siteConfig.whatsappNumber}.`,
      icon: MessageSquare,
    },
    {
      number: "04",
      title: "Coordinate Payment & Shipping",
      desc: "Confirm delivery details and payment preferences directly with our team.",
      icon: CreditCard,
    },
  ];

  return (
    <section id="how-to-buy" className="bg-[#FFF9F0] py-20 border-t border-[#E9DCC8]">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold">
            Simple & Secure Process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B302A] font-bold">
            How to Place Your Order
          </h2>
          <p className="text-sm text-[#766960] max-w-lg mx-auto font-light">
            Ordering at Girl Peps is fast, discreet, and personalized via direct communication.
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

