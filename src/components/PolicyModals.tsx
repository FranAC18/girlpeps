import React from 'react';
import { X, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

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
          aria-label="Cerrar"
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
                <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">Documento Oficial</span>
                <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-[#3B302A]">Política de Envíos</h2>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#766960] font-light leading-relaxed">
              <p>
                En <strong>Peptaire Labs</strong>, todos los péptidos y compuestos son empacados utilizando aislamiento térmico de laboratorio para garantizar la máxima estabilidad molecular durante el traslado.
              </p>
              <h4 className="font-semibold text-[#3B302A] text-xs uppercase tracking-wider">Tiempos de Procesamiento</h4>
              <p>
                Los pedidos confirmados antes de las 2:00 PM EST se despachan el mismo día hábil. La información de seguimiento se envía inmediatamente vía WhatsApp (+1 862 233-3919).
              </p>
              <h4 className="font-semibold text-[#3B302A] text-xs uppercase tracking-wider">Envíos Nacionales e Internacionales</h4>
              <p>
                El tiempo estándar de entrega es de 2 a 4 días hábiles. Opciones de envío exprés prioritario están disponibles al coordinar por WhatsApp.
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
                <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">Documento Oficial</span>
                <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-[#3B302A]">Política de Reembolsos</h2>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#766960] font-light leading-relaxed">
              <p>
                Debido a la naturaleza regulada de los compuestos de investigación de laboratorio, no es posible reingresar productos al inventario una vez que salen de nuestras instalaciones con control de temperatura.
              </p>
              <h4 className="font-semibold text-[#3B302A] text-xs uppercase tracking-wider">Garantía por Daños en Tránsito</h4>
              <p>
                Si tu empaque llega abierto o dañado durante el transporte, reporta el incidente en las primeras 48 horas vía WhatsApp (+1 862 233-3919) adjuntando fotografías. Se emitirá un reemplazo inmediato sin costo adicional.
              </p>
              <h4 className="font-semibold text-[#3B302A] text-xs uppercase tracking-wider">Garantía de Pureza</h4>
              <p>
                Todos los productos cuentan con comprobante HPLC del 99%+ de pureza. Si un ensayo demuestra lo contrario, se otorga reembolso completo o reemplazo.
              </p>
            </div>
          </>
        )}

        <div className="pt-4 border-t border-[#E9DCC8] flex justify-between items-center text-xs">
          <span className="text-[#766960] flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
            Peptaire Labs Quality Guarantee
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#3B302A] text-[#FFF9F0] font-semibold uppercase tracking-wider rounded-full hover:bg-[#C6A15B] transition-colors"
          >
            Cerrar Documento
          </button>
        </div>

      </div>
    </div>
  );
};
