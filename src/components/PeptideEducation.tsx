import React from 'react';
import { BookOpen, Sparkles, ShieldAlert, Dna, Activity, Zap, RefreshCw } from 'lucide-react';

export const PeptideEducation: React.FC = () => {
  const researchAreas = [
    {
      title: "Señalización Celular",
      desc: "Estudio de cadenas cortas de aminoácidos y su interacción en vías de comunicación intercelular.",
      icon: Dna,
    },
    {
      title: "Metabolismo & Energía",
      desc: "Investigación sobre la regulación de vías metabólicas y balance energético celular.",
      icon: Activity,
    },
    {
      title: "Reparación & Regeneración",
      desc: "Compuestos examinados por su papel en modelos de recuperación y remodelación tisular.",
      icon: RefreshCw,
    },
    {
      title: "Longevidad & Bienestar",
      desc: "Áreas de exploración científica enfocadas en mantener la integridad celular y antienvejecimiento.",
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
              Sección Educativa
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B302A] leading-tight">
              ¿Qué son los péptidos?
            </h2>
            <p className="text-sm text-[#766960] font-light leading-relaxed">
              Los péptidos son moléculas formadas por cadenas cortas de aminoácidos unidos mediante enlaces peptídicos. 
              Como componentes fundamentales de las proteínas, participan en diversos procesos biológicos y son objeto 
              de intensa investigación en bioquímica y medicina regenerativa.
            </p>
            <p className="text-sm text-[#766960] font-light leading-relaxed">
              Cada compuesto posee propiedades, mecanismos de acción y áreas de investigación únicas, por lo que 
              nuestro catálogo presenta fichas informativas objetivas para cada uno.
            </p>
          </div>

          <div className="bg-[#FFF9F0] p-8 rounded-3xl border border-[#E9DCC8] space-y-6 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#3B302A]">
              Áreas Principales de Investigación Científica
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

        {/* Official Compliance & Disclaimer Box (Sección 5) */}
        <div className="bg-[#FFF9F0] p-6 sm:p-8 rounded-2xl border border-[#C6A15B]/40 flex items-start gap-4 shadow-sm">
          <div className="p-3 bg-[#F3E5CF] rounded-xl text-[#C6A15B] shrink-0 border border-[#E9DCC8]">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-base font-bold text-[#3B302A]">
              Aviso Importante sobre Investigación (RUO)
            </h4>
            <p className="text-xs text-[#766960] leading-relaxed font-light">
              Los productos presentados en este catálogo están destinados a fines de investigación y/o según las condiciones 
              aplicables a cada compuesto. La información publicada tiene carácter exclusivamente educativo e informativo y no 
              constituye consejo médico, diagnóstico ni tratamiento. Los productos de investigación no deben ser utilizados 
              en seres humanos fuera de los marcos y autorizaciones correspondientes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
