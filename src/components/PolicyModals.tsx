import React from 'react';
import { X, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PolicyModalProps {
  type: 'shipping' | 'refund' | null;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B302A]/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FFF9F0] rounded-3xl border border-[#E9DCC8] p-6 sm:p-8 shadow-2xl text-[#3B302A] max-h-[85vh] overflow-y-auto space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#766960] hover:text-[#3B302A] rounded-full hover:bg-[#F3E5CF] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'shipping' ? (
          <>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#F3E5CF] rounded-xl border border-[#E9DCC8] text-[#C6A15B]">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">Official Policy</span>
                <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-[#3B302A]">Shipping & Delivery Policy</h2>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#766960] font-light leading-relaxed">
              <p>
                At <strong>{siteConfig.brandName}</strong>, all peptides and research compounds are prepared using protective, laboratory-grade insulation to ensure maximum molecular stability during transport.
              </p>
              <h4 className="font-semibold text-[#3B302A] text-xs uppercase tracking-wider">Processing & Handling Times</h4>
              <p>
                Orders verified before 2:00 PM EST are dispatched the same business day. Tracking reference numbers are sent immediately via WhatsApp ({siteConfig.whatsappNumber}).
              </p>
              <h4 className="font-semibold text-[#3B302A] text-xs uppercase tracking-wider">Domestic & International Carrier Transit</h4>
              <p>
                Standard carrier delivery time is 2 to 4 business days. Priority express shipping options are available upon direct request during WhatsApp order confirmation.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#F3E5CF] rounded-xl border border-[#E9DCC8] text-[#C6A15B]">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">Official Policy</span>
                <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-[#3B302A]">Refund & Replacement Policy</h2>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#766960] font-light leading-relaxed">
              <p>
                Due to the stringent regulatory nature of laboratory research compounds, products cannot be returned to inventory once they leave our climate-controlled fulfillment facilities.
              </p>
              <h4 className="font-semibold text-[#3B302A] text-xs uppercase tracking-wider">Transit Damage Guarantee</h4>
              <p>
                If your package arrives compromised or damaged in transit, please notify our team within 48 hours via WhatsApp ({siteConfig.whatsappNumber}) with accompanying photos. An immediate replacement will be issued at zero additional cost.
              </p>
              <h4 className="font-semibold text-[#3B302A] text-xs uppercase tracking-wider">Analytical Purity Guarantee</h4>
              <p>
                All research compounds are backed by 99%+ HPLC purity verification. If an independent analytical assay demonstrates non-conformity, a full refund or immediate replacement is provided.
              </p>
            </div>
          </>
        )}

        <div className="pt-4 border-t border-[#E9DCC8] flex justify-between items-center text-xs">
          <span className="text-[#766960] flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
            {siteConfig.brandName} Quality Assurance
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#3B302A] text-[#FFF9F0] font-semibold uppercase tracking-wider rounded-full hover:bg-[#C6A15B] transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};

