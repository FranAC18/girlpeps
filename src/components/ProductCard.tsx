import React from 'react';
import { Product } from '../types';
import { ShoppingBag, MessageSquare, Info, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetail: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetail,
}) => {
  const isAvailable = product.status === 'in_stock';
  const isInTransit = product.status === 'in_transit';

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
    `Hello ${siteConfig.brandName}, I would like to inquire about availability and restocking date for: ${product.title} ($${product.price.toFixed(2)} USD)`
  )}`;

  return (
    <article className="group flex flex-col rounded-2xl bg-[#FFF9F0] border border-[#E9DCC8] overflow-hidden transition-all duration-300 hover:border-[#C6A15B] hover:shadow-lg hover:shadow-[#C6A15B]/10">
      
      {/* Product Image Container */}
      <div 
        className="relative block aspect-[4/5] overflow-hidden bg-[#FBF3E4] cursor-pointer"
        onClick={() => onViewDetail(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {!isAvailable && !isInTransit && (
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#D9B6B0] text-[#3B302A] rounded-full shadow-sm">
              Out of Stock
            </span>
          )}
          {isInTransit && (
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#C6A15B] text-white rounded-full shadow-sm flex items-center gap-1">
              <Clock className="w-3 h-3" />
              In Transit
            </span>
          )}
          {isAvailable && (
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#F3E5CF] text-[#3B302A] border border-[#C6A15B]/40 rounded-full shadow-sm">
              Available
            </span>
          )}
        </div>

        {/* Quick Info Hover Overlay Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetail(product);
          }}
          className="absolute bottom-3 right-3 p-2.5 bg-[#FFF9F0]/90 hover:bg-[#C6A15B] hover:text-white rounded-full border border-[#E9DCC8] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm text-[#3B302A] cursor-pointer shadow-md"
          title="Quick View"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-5 gap-3">
        <div className="cursor-pointer" onClick={() => onViewDetail(product)}>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A15B] font-semibold block mb-1">
            {product.category}
          </span>
          <h3 className="font-serif text-lg font-bold leading-tight text-[#3B302A] group-hover:text-[#C6A15B] transition-colors">
            {product.title}
          </h3>
          <p className="text-xs text-[#766960] line-clamp-2 mt-1.5 font-light leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E9DCC8]/60 mt-auto">
          <span className="font-serif text-xl font-bold text-[#3B302A]">
            ${product.price.toFixed(2)} <span className="text-xs text-[#766960] font-normal font-sans">USD</span>
          </span>

          {isAvailable ? (
            <button
              onClick={() => onAddToCart(product)}
              className="inline-flex items-center justify-center gap-2 bg-[#3B302A] text-[#FFF9F0] font-semibold px-4 py-2.5 text-xs uppercase tracking-wider hover:bg-[#C6A15B] transition-all cursor-pointer shadow-sm rounded-full"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>
          ) : (
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wider transition-all rounded-full border ${
                isInTransit
                  ? 'border-[#C6A15B] text-[#3B302A] bg-[#F3E5CF] hover:bg-[#C6A15B] hover:text-white'
                  : 'border-[#E9DCC8] text-[#766960] bg-[#FFF9F0] hover:border-[#3B302A] hover:text-[#3B302A]'
              }`}
            >
              <MessageSquare className="w-3 h-3 text-[#C6A15B]" />
              <span>{isInTransit ? 'Inquire / Reserve' : 'Inquire via WhatsApp'}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

