import React, { useState } from 'react';
import { X, Search, PackageCheck, Truck, CheckCircle2, MessageSquare } from 'lucide-react';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackOrderModal: React.FC<TrackOrderModalProps> = ({ isOpen, onClose }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setSearched(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B302A]/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FFF9F0] rounded-3xl border border-[#E9DCC8] p-6 sm:p-8 shadow-2xl text-[#3B302A]">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#766960] hover:text-[#3B302A] rounded-full hover:bg-[#F3E5CF] transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-6">
          <Truck className="w-10 h-10 text-[#C6A15B] mx-auto" />
          <h2 className="font-serif text-2xl font-bold uppercase tracking-wider text-[#3B302A]">
            Rastrear Pedido
          </h2>
          <p className="text-xs text-[#766960] font-light">
            Ingresa tu código de pedido o número de guía a continuación.
          </p>
        </div>

        <form onSubmit={handleTrack} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#766960]" />
            <input
              type="text"
              placeholder="Ej. PEP-884920 o número de guía"
              value={trackingNumber}
              onChange={(e) => {
                setTrackingNumber(e.target.value);
                setSearched(false);
              }}
              className="w-full pl-10 pr-4 py-3 bg-[#FBF3E4] border border-[#E9DCC8] rounded-xl text-sm text-[#3B302A] placeholder:text-[#766960] focus:outline-none focus:border-[#C6A15B]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#3B302A] text-[#FFF9F0] font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#C6A15B] transition-all shadow-md cursor-pointer"
          >
            Consultar Estado
          </button>
        </form>

        {searched && (
          <div className="mt-6 pt-6 border-t border-[#E9DCC8] space-y-4 animate-fadeIn">
            <div className="bg-[#FBF3E4] p-4 rounded-2xl border border-[#E9DCC8] space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#C6A15B]">ID Pedido: {trackingNumber.toUpperCase()}</span>
                <span className="px-2.5 py-0.5 bg-[#F3E5CF] text-[#3B302A] border border-[#C6A15B]/40 rounded-full text-[10px] uppercase font-bold">
                  En Camino
                </span>
              </div>

              {/* Progress Steps */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 text-xs text-[#3B302A]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pedido recibido y confirmado</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#3B302A]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Inspección de calidad HPLC & empaque térmico</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#C6A15B] font-semibold">
                  <Truck className="w-4 h-4 text-[#C6A15B] shrink-0 animate-pulse" />
                  <span>Despachado con paquetería exprés</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#766960]">
                  <PackageCheck className="w-4 h-4 text-[#766960] shrink-0" />
                  <span>Entrega estimada: 2-4 días hábiles</span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/18622333919?text=${encodeURIComponent(
                `Hola Peptaire Labs, deseo consultar el estado de mi pedido ID: ${trackingNumber}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#F3E5CF] border border-[#C6A15B]/40 text-[#3B302A] font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#C6A15B] hover:text-white transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
              Consultar por WhatsApp (+1 862 233-3919)
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
