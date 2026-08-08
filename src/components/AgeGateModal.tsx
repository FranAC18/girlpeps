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
    alert('Acceso restringido. Debes ser mayor de 21 años y aceptar los términos de uso exclusivo para investigación (RUO).');
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
            Verificación de Edad & Conformidad
          </span>
          <h2 className="font-serif text-3xl font-bold mt-2 uppercase tracking-wide text-[#3B302A]">
            Bienvenida a {siteConfig.brandName}
          </h2>
        </div>

        <p className="text-sm text-[#766960] leading-relaxed font-light">
          Por favor confirma que tienes al menos <strong>21 años de edad</strong> y reconoces que todos los productos ofertados en esta plataforma están destinados exclusivamente a <strong>Investigación de Laboratorio y Uso Científico (RUO)</strong>. Not for human consumption.
        </p>

        <div className="p-3.5 bg-[#FBF3E4] border border-[#E9DCC8] rounded-xl text-xs text-[#766960] flex items-center gap-2 text-left">
          <AlertCircle className="w-4 h-4 text-[#C6A15B] shrink-0" />
          <span>Al ingresar, confirmas tu acuerdo con las pautas de investigación y políticas del sitio.</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleConfirm}
            className="flex-1 py-3.5 bg-[#3B302A] text-[#FFF9F0] font-bold uppercase tracking-[0.15em] text-xs hover:bg-[#C6A15B] transition-all shadow-md rounded-full cursor-pointer"
          >
            Tengo +21 Años y Acepto
          </button>
          <button
            onClick={handleDecline}
            className="py-3.5 px-6 border border-[#E9DCC8] text-[#766960] font-semibold uppercase tracking-wider text-xs hover:bg-[#F3E5CF] transition-colors rounded-full cursor-pointer"
          >
            Salir
          </button>
        </div>

      </div>
    </div>
  );
};
