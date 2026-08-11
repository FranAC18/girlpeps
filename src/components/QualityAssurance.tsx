import React from 'react';
import { ShieldCheck, FlaskConical, Truck } from 'lucide-react';

export const QualityAssurance: React.FC = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-20 border-t border-[#E9DCC8]">
      <div className="text-center mb-16 space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold">
          Quality You Can Trust
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-[#3B302A]">
          Empowering science with verified,<br />
          high-consistency research compounds.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#FFF9F0] rounded-2xl p-8 space-y-4 border border-[#E9DCC8] hover:border-[#C6A15B] transition-all shadow-sm">
          <div className="p-3.5 bg-[#FBF3E4] rounded-xl w-fit border border-[#E9DCC8] text-[#C6A15B]">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h3 className="font-serif text-2xl text-[#3B302A] font-bold">
            Premium Quality Assurance
          </h3>
          <p className="text-xs text-[#766960] leading-relaxed font-light">
            Every compound is managed under strict climate control protocols to ensure maximum molecular stability and experimental reproducibility.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FFF9F0] rounded-2xl p-8 space-y-4 border border-[#E9DCC8] hover:border-[#C6A15B] transition-all shadow-sm">
          <div className="p-3.5 bg-[#FBF3E4] rounded-xl w-fit border border-[#E9DCC8] text-[#C6A15B]">
            <FlaskConical className="h-7 w-7" />
          </div>
          <h3 className="font-serif text-2xl text-[#3B302A] font-bold">
            Strict Analytical Standard
          </h3>
          <p className="text-xs text-[#766960] leading-relaxed font-light">
            Formulations and peptides independently verified via 99%+ HPLC purity assays, prepared strictly for scientific and laboratory applications.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#FFF9F0] rounded-2xl p-8 space-y-4 border border-[#E9DCC8] hover:border-[#C6A15B] transition-all shadow-sm">
          <div className="p-3.5 bg-[#FBF3E4] rounded-xl w-fit border border-[#E9DCC8] text-[#C6A15B]">
            <Truck className="h-7 w-7" />
          </div>
          <h3 className="font-serif text-2xl text-[#3B302A] font-bold">
            Fast & Discreet Dispatch
          </h3>
          <p className="text-xs text-[#766960] leading-relaxed font-light">
            From seamless WhatsApp order coordination to protective temperature-controlled packaging, every detail is handled with precision and speed.
          </p>
        </div>
      </div>
    </section>
  );
};

