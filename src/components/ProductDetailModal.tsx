import React from 'react';
import { Product } from '../types';
import { X, ShoppingBag, MessageSquare, ShieldCheck, Clock, FlaskConical } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const isAvailable = product.status === 'in_stock';
  const isInTransit = product.status === 'in_transit';

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
    `Hola ${siteConfig.brandName}, deseo consultar disponibilidad sobre: ${product.title} ($${product.price.toFixed(2)})`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B302A]/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFF9F0] rounded-3xl border border-[#E9DCC8] p-6 sm:p-8 shadow-2xl text-[#3B302A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#766960] hover:text-[#3B302A] rounded-full hover:bg-[#F3E5CF] transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FBF3E4] border border-[#E9DCC8]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              {isAvailable && (
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#F3E5CF] text-[#3B302A] border border-[#C6A15B]/40 rounded-full shadow-sm">
                  Disponible
                </span>
              )}
              {isInTransit && (
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#C6A15B] text-white rounded-full shadow-sm flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Viene en camino
                </span>
              )}
              {!isAvailable && !isInTransit && (
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#D9B6B0] text-[#3B302A] rounded-full shadow-sm">
                  Agotado
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
                {product.category}
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#3B302A] mt-1">
                {product.title}
              </h2>
              <div className="mt-3 font-serif text-3xl font-bold text-[#3B302A]">
                ${product.price.toFixed(2)} USD
              </div>
            </div>

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-[#FBF3E4] p-4 rounded-xl border border-[#E9DCC8]">
              <div>
                <span className="text-[#766960] block uppercase text-[10px]">Pureza Estándar</span>
                <span className="font-semibold text-[#3B302A] flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                  {product.purity || '99%+ HPLC'}
                </span>
              </div>
              <div>
                <span className="text-[#766960] block uppercase text-[10px]">Presentación</span>
                <span className="font-semibold text-[#3B302A] flex items-center gap-1 mt-0.5">
                  <FlaskConical className="w-3.5 h-3.5 text-[#C6A15B]" />
                  {product.form || 'Polvo Liofilizado'}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#766960] font-semibold mb-2">
                Especificación del Compuesto
              </h4>
              <p className="text-sm text-[#3B302A]/90 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Disclaimer */}
            <div className="p-3.5 bg-[#F3E5CF]/60 border border-[#E9DCC8] rounded-xl text-[11px] text-[#766960] leading-normal font-light">
              🔬 <strong>Uso Exclusivo en Investigación (RUO):</strong> Suministrado estrictamente para ensayos de laboratorio e investigación científica. Not for human consumption.
            </div>

            {/* CTA */}
            <div>
              {isAvailable ? (
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="w-full py-4 bg-[#3B302A] text-[#FFF9F0] font-semibold uppercase tracking-[0.2em] text-xs hover:bg-[#C6A15B] transition-all flex items-center justify-center gap-2 shadow-md rounded-full cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Agregar al Carrito (${product.price.toFixed(2)})
                </button>
              ) : (
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#C6A15B] text-white font-semibold uppercase tracking-[0.2em] text-xs hover:bg-[#D9BE82] transition-all flex items-center justify-center gap-2 shadow-md rounded-full"
                >
                  <MessageSquare className="w-4 h-4" />
                  Consultar Disponibilidad en WhatsApp ({siteConfig.whatsappNumber})
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
