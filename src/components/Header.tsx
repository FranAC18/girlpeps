import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MessageSquare, Instagram } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeaderProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenTrack: () => void;
  onOpenPolicy: (type: 'shipping' | 'refund') => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenTrack,
  onOpenPolicy,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFF9F0]/95 backdrop-blur-md border-b border-[#E9DCC8] shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        
        {/* Logo with girl peps.png */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/girl peps.png"
            alt={siteConfig.brandName}
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-[0.12em] text-[#3B302A] uppercase font-bold">
              Girl <span className="text-[#C6A15B]">Peps</span>
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-[#766960] mt-1 font-medium">
              Beauty & Science
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium text-[#3B302A]">
          <a href="#" className="hover:text-[#C6A15B] transition-colors border-b-2 border-transparent hover:border-[#C6A15B] py-1">
            Inicio
          </a>
          <a href="#about" className="hover:text-[#C6A15B] transition-colors border-b-2 border-transparent hover:border-[#C6A15B] py-1">
            Nosotros
          </a>
          <a href="#education" className="hover:text-[#C6A15B] transition-colors border-b-2 border-transparent hover:border-[#C6A15B] py-1">
            Aprende
          </a>
          <a href="#products" className="hover:text-[#C6A15B] transition-colors border-b-2 border-transparent hover:border-[#C6A15B] py-1">
            Catálogo
          </a>
          <a href="#how-to-buy" className="hover:text-[#C6A15B] transition-colors border-b-2 border-transparent hover:border-[#C6A15B] py-1">
            Cómo Comprar
          </a>
          <button
            onClick={() => onOpenPolicy('shipping')}
            className="hover:text-[#C6A15B] transition-colors uppercase cursor-pointer py-1"
          >
            Envíos
          </button>
          <button
            onClick={onOpenTrack}
            className="hover:text-[#C6A15B] transition-colors uppercase cursor-pointer text-[#C6A15B] font-semibold py-1"
          >
            Rastreo
          </button>
        </nav>

        {/* Action Buttons & Real Social Icons */}
        <div className="flex items-center gap-3">
          {/* Instagram Icon */}
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Síguenos en Instagram @girl_peps"
            aria-label="Instagram @girl_peps"
            className="p-2.5 text-[#3B302A] hover:text-[#C6A15B] hover:bg-[#F3E5CF] rounded-full transition-all border border-[#E9DCC8]"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* WhatsApp Direct Button */}
          <a
            href={`https://wa.me/${siteConfig.whatsappRaw}?text=Hola%20Girl%20Peps%2C%20deseo%20hacer%20una%20consulta.`}
            target="_blank"
            rel="noopener noreferrer"
            title="Escribir por WhatsApp"
            aria-label="WhatsApp +1 (862) 233-3919"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#3B302A] bg-[#F3E5CF] border border-[#E9DCC8] rounded-full hover:bg-[#C6A15B] hover:text-white transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#C6A15B] group-hover:text-white" />
            <span className="hidden lg:inline">{siteConfig.whatsappNumber}</span>
          </a>

          {/* Shopping Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Carrito de compras"
            className="relative p-2.5 rounded-full border border-[#E9DCC8] bg-[#FFF9F0] hover:bg-[#F3E5CF] hover:border-[#C6A15B] transition-all text-[#3B302A] cursor-pointer shadow-sm"
          >
            <ShoppingBag className="h-5 w-5 text-[#3B302A]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-[#D9B6B0] text-[#3B302A] text-xs font-bold flex items-center justify-center border border-white shadow-md">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#3B302A] hover:text-[#C6A15B] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9F0] border-b border-[#E9DCC8] px-6 py-6 space-y-4 text-sm uppercase tracking-widest animate-fadeIn text-[#3B302A]">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#C6A15B] py-2"
          >
            Inicio
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#C6A15B] py-2"
          >
            Nosotros
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#C6A15B] py-2"
          >
            ¿Qué son los Péptidos?
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#C6A15B] py-2"
          >
            Catálogo
          </a>
          <a
            href="#how-to-buy"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#C6A15B] py-2"
          >
            Cómo Comprar
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPolicy('shipping');
            }}
            className="block w-full text-left hover:text-[#C6A15B] py-2 uppercase"
          >
            Envíos
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTrack();
            }}
            className="block w-full text-left text-[#C6A15B] py-2 uppercase font-semibold"
          >
            Rastreo de Pedido
          </button>

          {/* Social Links Mobile */}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#F3E5CF] text-[#3B302A] rounded-full font-semibold text-xs tracking-wider uppercase border border-[#E9DCC8]"
            >
              <Instagram className="w-4 h-4 text-[#C6A15B]" />
              Instagram {siteConfig.instagramHandle}
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=Hola%20Girl%20Peps`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#3B302A] text-white rounded-full font-semibold text-xs tracking-wider uppercase"
            >
              <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
              WhatsApp ({siteConfig.whatsappNumber})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
