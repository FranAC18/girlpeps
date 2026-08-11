import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36 bg-[#FBF3E4]">
      
      {/* Soft Background Accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#F3E5CF] blur-[90px] rounded-full pointer-events-none opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-[350px] h-[200px] bg-[#D9B6B0]/20 blur-[80px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Subtle Feminine Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E9DCC8] bg-[#FFF9F0] text-[#C6A15B] text-xs uppercase tracking-[0.25em] font-medium mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>Research Peptides & Compound Catalog</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#3B302A] max-w-5xl leading-tight tracking-wide font-bold">
          Girl <span className="italic font-normal text-[#C6A15B]">Peps</span>
        </h1>

        {/* Tagline */}
        <div className="mt-6 flex items-center gap-3 sm:gap-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-[#766960] font-medium flex-wrap justify-center">
          <span>Elegance</span>
          <span className="h-px w-5 bg-[#C6A15B]/50"></span>
          <span>Verified Purity</span>
          <span className="h-px w-5 bg-[#C6A15B]/50"></span>
          <span>Direct Service</span>
        </div>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-[#766960] text-base sm:text-lg leading-relaxed font-light">
          Premium research compounds curated for scientists and researchers seeking transparent analytical data, 
          verified purity, and a seamless direct order experience via WhatsApp.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-3 bg-[#3B302A] text-[#FFF9F0] font-medium px-9 py-4 uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:bg-[#C6A15B] hover:shadow-lg rounded-full cursor-pointer shadow-sm"
          >
            Explore Catalog
            <ArrowRight className="h-4 w-4 text-[#FFF9F0]" />
          </a>

          <a
            href="#education"
            className="inline-flex items-center justify-center gap-2 border border-[#E9DCC8] bg-[#FFF9F0] text-[#3B302A] font-medium px-8 py-4 uppercase tracking-[0.2em] text-xs transition-all hover:bg-[#F3E5CF] hover:border-[#C6A15B] rounded-full cursor-pointer"
          >
            <Heart className="w-4 h-4 text-[#D9B6B0]" />
            Peptide Science Guide
          </a>
        </div>

        {/* RUO Disclaimer Badge */}
        <div className="mt-12 text-[11px] uppercase tracking-widest text-[#766960] bg-[#FFF9F0] px-5 py-2.5 rounded-full border border-[#E9DCC8] shadow-sm">
          ✨ Informational Catalog & Direct Orders via WhatsApp ({siteConfig.whatsappNumber})
        </div>

      </div>
    </section>
  );
};

