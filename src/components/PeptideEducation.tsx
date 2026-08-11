import React from 'react';
import { BookOpen, Sparkles, ShieldAlert, Dna, Activity, Zap, RefreshCw } from 'lucide-react';

export const PeptideEducation: React.FC = () => {
  const researchAreas = [
    {
      title: "Cellular Signaling",
      desc: "Investigation into short amino acid chains and their receptor binding kinetics in intercellular pathways.",
      icon: Dna,
    },
    {
      title: "Metabolism & Energetics",
      desc: "Research on metabolic pathway regulation, AMPK activation, and cellular energy flux balance.",
      icon: Activity,
    },
    {
      title: "Tissue Regeneration",
      desc: "Compounds studied for their role in cellular repair models, matrix interactions, and recovery dynamics.",
      icon: RefreshCw,
    },
    {
      title: "Longevity & Biochemical Integrity",
      desc: "Scientific exploration focusing on maintaining mitochondrial function and cellular anti-aging pathways.",
      icon: Zap,
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#FBF3E4] border-t border-[#E9DCC8]">
      <div className="container mx-auto px-6">
        
        {/* Main Banner */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C6A15B]" />
              Educational Resources
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B302A] leading-tight">
              What Are Peptides?
            </h2>
            <p className="text-sm text-[#766960] font-light leading-relaxed">
              Peptides are organic compounds formed by short chains of amino acids linked by peptide bonds. 
              As fundamental building blocks of cellular biology, they participate in diverse physiological 
              mechanisms and remain at the forefront of biochemistry and regenerative research.
            </p>
            <p className="text-sm text-[#766960] font-light leading-relaxed">
              Each compound possesses unique structural properties, binding affinities, and experimental applications. 
              Our catalog provides objective, verified analytical data for each research compound.
            </p>
          </div>

          <div className="bg-[#FFF9F0] p-8 rounded-3xl border border-[#E9DCC8] space-y-6 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#3B302A]">
              Core Scientific Research Domains
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {researchAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div key={idx} className="p-4 bg-[#FBF3E4] rounded-2xl border border-[#E9DCC8]">
                    <Icon className="w-5 h-5 text-[#C6A15B] mb-2" />
                    <h4 className="font-serif text-sm font-bold text-[#3B302A]">{area.title}</h4>
                    <p className="text-xs text-[#766960] mt-1 font-light leading-relaxed">{area.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Official Compliance & Disclaimer Box */}
        <div className="bg-[#FFF9F0] p-6 sm:p-8 rounded-2xl border border-[#C6A15B]/40 flex items-start gap-4 shadow-sm">
          <div className="p-3 bg-[#F3E5CF] rounded-xl text-[#C6A15B] shrink-0 border border-[#E9DCC8]">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-base font-bold text-[#3B302A]">
              Important Compliance & Research Use Disclaimer (RUO)
            </h4>
            <p className="text-xs text-[#766960] leading-relaxed font-light">
              The compounds cataloged on this website are supplied strictly for laboratory, analytical, and scientific research 
              purposes (RUO). All information presented is strictly educational and does not constitute medical advice, 
              diagnosis, or clinical treatment recommendations. Research compounds are not intended for human or animal consumption.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

