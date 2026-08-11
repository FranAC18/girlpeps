import React, { useState, useEffect } from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AgeGateModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('girlpeps_age_verified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('girlpeps_age_verified', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    alert('Restricted access. You must be 21+ and accept Research Use Only (RUO) terms.');
    window.location.href = 'https://google.com';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B302A]/50 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-[#FFF9F0] rounded-3xl border border-[#E9DCC8] p-8 shadow-2xl text-[#3B302A] text-center space-y-6">
        
        <div className="mx-auto flex items-center justify-center">
          <img
            src="/images/girl peps.png"
            alt={siteConfig.brandName}
            className="h-16 w-auto object-contain"
          />
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold">
            Age Verification & Professional Compliance
          </span>
          <h2 className="font-serif text-3xl font-bold mt-2 uppercase tracking-wide text-[#3B302A]">
            Welcome to {siteConfig.brandName}
          </h2>
        </div>

        <p className="text-sm text-[#766960] leading-relaxed font-light">
          Please confirm that you are at least <strong>21 years of age</strong> and acknowledge that all products cataloged on this platform are intended strictly for <strong>Laboratory Research & Scientific Use Only (RUO)</strong>. Not for human consumption.
        </p>

        <div className="p-3.5 bg-[#FBF3E4] border border-[#E9DCC8] rounded-xl text-xs text-[#766960] flex items-center gap-2 text-left">
          <AlertCircle className="w-4 h-4 text-[#C6A15B] shrink-0" />
          <span>By entering, you confirm agreement with site policies and research compliance terms.</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleConfirm}
            className="flex-1 py-3.5 bg-[#3B302A] text-[#FFF9F0] font-bold uppercase tracking-[0.15em] text-xs hover:bg-[#C6A15B] transition-all shadow-md rounded-full cursor-pointer"
          >
            I am 21+ & Accept Terms
          </button>
          <button
            onClick={handleDecline}
            className="py-3.5 px-6 border border-[#E9DCC8] text-[#766960] font-semibold uppercase tracking-wider text-xs hover:bg-[#F3E5CF] transition-colors rounded-full cursor-pointer"
          >
            Exit Site
          </button>
        </div>

      </div>
    </div>
  );
};

