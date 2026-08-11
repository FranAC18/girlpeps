import React, { useState, useEffect } from 'react';
import { products } from './data/products';
import { Product, CartItem } from './types';
import { siteConfig, CouponConfig } from './config/siteConfig';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QualityAssurance } from './components/QualityAssurance';
import { HowToBuy } from './components/HowToBuy';
import { PeptideEducation } from './components/PeptideEducation';
import { TrustSection } from './components/TrustSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { AgeGateModal } from './components/AgeGateModal';
import { TrackOrderModal } from './components/TrackOrderModal';
import { PolicyModals } from './components/PolicyModals';
import { Footer } from './components/Footer';
import { CheckCircle2, Tag } from 'lucide-react';

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const [isTrackOpen, setIsTrackOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'shipping' | 'refund' | null>(null);

  // Coupon state
  const [appliedCoupon, setAppliedCoupon] = useState<CouponConfig | null>(null);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // URL Query Coupon Auto-Detection (Section 17 of CONTEXT_SPEC.md)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const couponParam = params.get('coupon');

    if (couponParam) {
      const cleanCode = couponParam.trim().toUpperCase();
      if (siteConfig.coupons[cleanCode]) {
        const coupon = siteConfig.coupons[cleanCode];
        setAppliedCoupon(coupon);
        showToast(`🎟️ Coupon ${coupon.code} from ${coupon.sellerName} activated! (-$${coupon.discountUSD} USD)`);
      }
    }
  }, []);

  const getCartItemKey = (p: Product) => {
    return p.selectedVariant ? `${p.id}-${p.selectedVariant.id}` : `${p.id}`;
  };

  const handleAddToCart = (productToAdd: Product) => {
    if (productToAdd.status !== 'in_stock') return;

    const itemKeyToAdd = getCartItemKey(productToAdd);

    setCartItems((prev) => {
      const existing = prev.find((item) => getCartItemKey(item.product) === itemKeyToAdd);
      if (existing) {
        return prev.map((item) =>
          getCartItemKey(item.product) === itemKeyToAdd
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product: productToAdd, quantity: 1 }];
    });

    const displayTitle = productToAdd.selectedVariant
      ? `${productToAdd.title} (${productToAdd.selectedVariant.name})`
      : productToAdd.title;

    showToast(`Added ${displayTitle} to cart!`);
  };

  const handleUpdateQuantity = (targetKey: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (getCartItemKey(item.product) === targetKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (targetKey: string) => {
    setCartItems((prev) => prev.filter((item) => getCartItemKey(item.product) !== targetKey));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF3E4] text-[#3B302A] selection:bg-[#D9B6B0]/40">
      {/* Top Announcement Marquee */}
      <MarqueeBanner />

      {/* Header */}
      <Header
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTrack={() => setIsTrackOpen(true)}
        onOpenPolicy={(type) => setPolicyType(type)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <QualityAssurance />
        <HowToBuy />
        <PeptideEducation />
        <ProductCatalog
          products={products}
          onAddToCart={handleAddToCart}
          onViewDetail={(product) => setSelectedDetailProduct(product)}
        />
        <TrustSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenTrack={() => setIsTrackOpen(true)}
        onOpenPolicy={(type) => setPolicyType(type)}
      />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={(c) => {
          setAppliedCoupon(c);
          showToast(`🎟️ Coupon ${c.code} applied (-$${c.discountUSD} USD)`);
        }}
        onRemoveCoupon={() => {
          setAppliedCoupon(null);
          showToast(`Coupon removed`);
        }}
      />

      <ProductDetailModal
        product={selectedDetailProduct}
        onClose={() => setSelectedDetailProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <AgeGateModal />

      <TrackOrderModal
        isOpen={isTrackOpen}
        onClose={() => setIsTrackOpen(false)}
      />

      <PolicyModals
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#FFF9F0] border border-[#C6A15B]/40 rounded-full shadow-xl text-[#3B302A] text-xs font-semibold animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
