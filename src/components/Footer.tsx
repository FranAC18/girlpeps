import React from 'react';
import { MessageSquare, ShieldAlert, Instagram, Mail, Globe, Lock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onOpenTrack: () => void;
  onOpenPolicy: (type: 'shipping' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrack, onOpenPolicy }) => {
  return (
    <footer className="bg-[#F3E5CF] border-t border-[#E9DCC8] py-16 text-[#3B302A]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Col 1: Brand & Logo */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src="/images/girl peps.png"
              alt={siteConfig.brandName}
              className="h-12 w-auto object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-[0.12em] text-[#3B302A] uppercase font-bold">
                Girl <span className="text-[#C6A15B]">Peps</span>
              </span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-[#766960] mt-0.5 font-medium">
                Beauty & Science
              </span>
            </span>
          </div>

          <p className="text-xs text-[#766960] leading-relaxed font-light">
            Premium luxury catalog dedicated to high-purity research compounds, peptides, and advanced scientific solutions.
          </p>

          {/* Social Network Action Buttons */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Instagram @girl_peps"
              aria-label="Instagram @girl_peps"
              className="p-2.5 bg-[#FFF9F0] border border-[#E9DCC8] rounded-full text-[#3B302A] hover:text-[#C6A15B] hover:border-[#C6A15B] transition-colors shadow-sm"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=Hello%20Girl%20Peps`}
              target="_blank"
              rel="noopener noreferrer"
              title="Contact via WhatsApp +1 (862) 233-3919"
              aria-label="WhatsApp +1 (862) 233-3919"
              className="p-2.5 bg-[#FFF9F0] border border-[#E9DCC8] rounded-full text-[#3B302A] hover:text-[#C6A15B] hover:border-[#C6A15B] transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B]">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-[#766960] font-medium">
            <li><a href="#" className="hover:text-[#3B302A] transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-[#3B302A] transition-colors">About Us</a></li>
            <li><a href="#education" className="hover:text-[#3B302A] transition-colors">Peptide Science</a></li>
            <li><a href="#products" className="hover:text-[#3B302A] transition-colors">Product Catalog</a></li>
            <li><a href="#how-to-buy" className="hover:text-[#3B302A] transition-colors">How to Buy</a></li>
            <li>
              <button onClick={onOpenTrack} className="hover:text-[#3B302A] transition-colors uppercase cursor-pointer">
                Track Order
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Legal & Support */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B]">
            Policies & Socials
          </h4>
          <ul className="space-y-2 text-xs text-[#766960] font-medium">
            <li>
              <button onClick={() => onOpenPolicy('shipping')} className="hover:text-[#3B302A] transition-colors uppercase cursor-pointer">
                Shipping Policy
              </button>
            </li>
            <li>
              <button onClick={() => onOpenPolicy('refund')} className="hover:text-[#3B302A] transition-colors uppercase cursor-pointer">
                Refund Policy
              </button>
            </li>
            <li>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#3B302A] transition-colors flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-[#C6A15B]" />
                Instagram {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${siteConfig.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#3B302A] transition-colors flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#C6A15B]" />
                WhatsApp {siteConfig.whatsappNumber}
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Legal Disclaimer */}
        <div className="space-y-3 bg-[#FFF9F0] p-5 rounded-2xl border border-[#E9DCC8] text-xs text-[#766960] shadow-sm">
          <div className="flex items-center gap-1.5 font-semibold text-[#C6A15B] text-xs uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Laboratory Legal Notice</span>
          </div>
          <p className="text-[11px] leading-relaxed font-light">
            All products cataloged are supplied strictly for <strong>Scientific Research Use Only (RUO)</strong>. Not for human consumption.
          </p>
        </div>

      </div>

      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-[#E9DCC8] text-center text-xs text-[#766960] font-light flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} Girl Peps. All rights reserved.</span>
          <button
            onClick={async () => {
              await fetch('/api/logout');
              window.location.reload();
            }}
            className="hover:text-[#3B302A] transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-medium text-[#766960]"
            title="Cerrar sesión de acceso privado"
          >
            <Lock className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Cerrar Sesión</span>
          </button>
        </div>

        {/* Mandated Attribution Link */}
        <div className="flex items-center gap-1.5 font-medium">
          <span>Developed by</span>
          <a
            href="https://www.instagram.com/kobaia.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3B302A] font-bold underline hover:text-[#C6A15B] transition-colors"
          >
            kobaia.dev
          </a>
        </div>
      </div>
    </footer>
  );
};

