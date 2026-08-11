import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const marqueeItems = [
    "PREMIUM RESEARCH & COSMETICS ✦",
    "FAST & GUARANTEED SHIPPING ✦",
    "HPLC 99%+ VERIFIED PURITY ✦",
    "DIRECT WHATSAPP ORDERS ✦",
    "DEDICATED SCIENTIFIC SUPPORT ✦",
  ];

  const fullItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full bg-[#F3E5CF] border-b border-[#E9DCC8] overflow-hidden py-2.5 shadow-sm">
      <div className="flex whitespace-nowrap animate-marquee">
        {fullItems.map((item, index) => (
          <span
            key={index}
            className="mx-6 text-xs uppercase tracking-[0.25em] font-medium text-[#3B302A] flex items-center gap-6"
          >
            <span className="text-[#C6A15B] font-bold">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

