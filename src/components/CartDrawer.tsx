import React, { useState, useEffect } from 'react';
import { CartItem, OrderCustomerInfo } from '../types';
import { X, Trash2, Plus, Minus, MessageSquare, ShieldCheck, ShoppingBag, Tag, Check } from 'lucide-react';
import { siteConfig, CouponConfig } from '../config/siteConfig';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
  appliedCoupon: CouponConfig | null;
  onApplyCoupon: (coupon: CouponConfig) => void;
  onRemoveCoupon: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon,
}) => {
  const [customerInfo, setCustomerInfo] = useState<OrderCustomerInfo>({
    name: '',
    phone: '',
    address: '',
    cityState: '',
    notes: '',
  });

  // Local Coupon input state
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotalUSD = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = appliedCoupon ? Math.min(appliedCoupon.discountUSD, subtotalUSD) : 0;
  const totalUSD = Math.max(0, subtotalUSD - discountAmount);

  const handleApplyCouponForm = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError(null);

    const cleanCode = couponInput.trim().toUpperCase();
    if (!cleanCode) return;

    if (siteConfig.coupons[cleanCode]) {
      onApplyCoupon(siteConfig.coupons[cleanCode]);
      setCouponInput('');
    } else {
      setCouponError('El cupón ingresado no es válido.');
    }
  };

  const handleCheckoutWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    // Exact Structured WhatsApp Order Message as defined in Section 18 of CONTEXT_SPEC.md
    const productLines = cartItems
      .map(
        (item) =>
          `• ${item.product.title} × ${item.quantity} — $${(
            item.product.price * item.quantity
          ).toFixed(2)}`
      )
      .join('\n');

    const couponBlock = appliedCoupon
      ? `🎟️ *Cupón:*\n${appliedCoupon.code}\n\n👤 *Referido por:*\n${appliedCoupon.sellerName}\n\n💵 *Descuento:*\n-$${discountAmount.toFixed(2)}\n\n`
      : '';

    const messageText = `🛍️ *NUEVO PEDIDO — GIRL PEPS*

👤 *Cliente:*
${customerInfo.name.trim() || 'No especificado'}

📱 *Teléfono:*
${customerInfo.phone?.trim() || 'No especificado'}

📦 *PRODUCTOS*

${productLines}

💰 *Subtotal:*
$${subtotalUSD.toFixed(2)}

${couponBlock}💳 *TOTAL:*
$${totalUSD.toFixed(2)}

📍 *Ciudad / Dirección:*
${customerInfo.cityState.trim() || customerInfo.address.trim() || 'No especificada'}

📝 *Observaciones:*
${customerInfo.notes.trim() || 'Ninguna'}

_El cliente coordinará los detalles del pedido y método de pago con la administradora._`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#3B302A]/40 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF9F0] border-l border-[#E9DCC8] p-6 flex flex-col justify-between shadow-2xl text-[#3B302A]">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E9DCC8]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C6A15B]" />
              <h2 className="font-serif text-xl font-bold uppercase tracking-wider">
                Tu Carrito ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#766960] hover:text-[#3B302A] rounded-full hover:bg-[#F3E5CF] transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-[#D9B6B0] mx-auto" />
                <p className="text-[#766960] text-sm font-light">
                  Tu carrito está actualmente vacío.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#3B302A] text-[#FFF9F0] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#C6A15B] transition-all"
                >
                  Ver Catálogo
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 p-3.5 bg-[#FBF3E4] rounded-2xl border border-[#E9DCC8]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-16 h-16 object-cover rounded-xl bg-[#FFF9F0] border border-[#E9DCC8]"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold truncate text-[#3B302A] font-serif">
                      {item.product.title}
                    </h4>
                    <p className="text-xs text-[#C6A15B] font-bold mt-0.5">
                      ${item.product.price.toFixed(2)} USD
                    </p>
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 rounded bg-[#FFF9F0] hover:bg-[#E9DCC8] text-[#3B302A] transition-colors border border-[#E9DCC8]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1 rounded bg-[#FFF9F0] hover:bg-[#E9DCC8] text-[#3B302A] transition-colors border border-[#E9DCC8]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-[#3B302A]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1.5 text-[#766960] hover:text-red-600 mt-2 transition-colors"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Form, Coupon & Checkout Section */}
          {cartItems.length > 0 && (
            <div className="pt-4 border-t border-[#E9DCC8] space-y-4">
              
              {/* Coupon Section */}
              <div className="bg-[#FBF3E4] p-3.5 rounded-xl border border-[#E9DCC8] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#3B302A] flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#C6A15B]" />
                    ¿Tienes un cupón de descuento?
                  </span>
                  {appliedCoupon && (
                    <button
                      onClick={onRemoveCoupon}
                      className="text-[10px] text-red-600 hover:underline font-medium"
                    >
                      Quitar
                    </button>
                  )}
                </div>

                {!appliedCoupon ? (
                  <form onSubmit={handleApplyCouponForm} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ej. NOMBREPEPS"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-[#FFF9F0] border border-[#E9DCC8] rounded-lg text-xs text-[#3B302A] uppercase placeholder:normal-case placeholder:text-[#766960] focus:outline-none focus:border-[#C6A15B]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-[#C6A15B] text-white font-semibold text-xs rounded-lg hover:bg-[#D9BE82] transition-colors"
                    >
                      Aplicar
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col gap-1 text-xs bg-[#FFF9F0] p-3 rounded-lg border border-[#C6A15B]/40 text-[#3B302A]">
                    <div className="flex items-center justify-between font-semibold text-[#C6A15B]">
                      <span className="flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        Cupón {appliedCoupon.code} aplicado
                      </span>
                      <span>-${discountAmount.toFixed(2)} USD</span>
                    </div>
                    <span className="text-[11px] text-[#766960] font-light">
                      Referido por: <strong>{appliedCoupon.sellerName}</strong>
                    </span>
                  </div>
                )}

                {couponError && (
                  <p className="text-[11px] text-red-600 font-medium">{couponError}</p>
                )}
              </div>

              {/* Delivery Details Form */}
              <div className="space-y-2 text-xs">
                <span className="text-[#766960] font-semibold uppercase tracking-wider block">
                  Información de Pedido (Opcional)
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#FBF3E4] border border-[#E9DCC8] rounded-lg text-[#3B302A] placeholder:text-[#766960] text-xs focus:outline-none focus:border-[#C6A15B]"
                  />
                  <input
                    type="text"
                    placeholder="Teléfono"
                    value={customerInfo.phone || ''}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#FBF3E4] border border-[#E9DCC8] rounded-lg text-[#3B302A] placeholder:text-[#766960] text-xs focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Ciudad / Estado"
                    value={customerInfo.cityState}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, cityState: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#FBF3E4] border border-[#E9DCC8] rounded-lg text-[#3B302A] placeholder:text-[#766960] text-xs focus:outline-none focus:border-[#C6A15B]"
                  />
                  <input
                    type="text"
                    placeholder="Observaciones"
                    value={customerInfo.notes}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, notes: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#FBF3E4] border border-[#E9DCC8] rounded-lg text-[#3B302A] placeholder:text-[#766960] text-xs focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>
              </div>

              {/* Totals Summary */}
              <div className="space-y-1 pt-2 text-xs border-t border-[#E9DCC8]">
                <div className="flex justify-between text-[#766960]">
                  <span>Subtotal:</span>
                  <span>${subtotalUSD.toFixed(2)} USD</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-[#C6A15B] font-semibold">
                    <span>Descuento ({appliedCoupon.code}):</span>
                    <span>-${discountAmount.toFixed(2)} USD</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-sm font-bold text-[#3B302A] pt-1">
                  <span>TOTAL A PAGAR:</span>
                  <span className="font-serif text-2xl text-[#3B302A]">
                    ${totalUSD.toFixed(2)} USD
                  </span>
                </div>
              </div>

              {/* Main WhatsApp Button */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 bg-[#3B302A] hover:bg-[#C6A15B] text-white font-bold text-xs uppercase tracking-[0.15em] rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
                💬 Pedir por WhatsApp ({siteConfig.whatsappNumber})
              </button>

              <p className="text-[10px] text-center text-[#766960] flex items-center justify-center gap-1 font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                Envío de comanda directa a WhatsApp ({siteConfig.whatsappNumber})
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
