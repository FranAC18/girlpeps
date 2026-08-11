import React, { useState, useMemo } from 'react';
import { Product, CategoryFilter } from '../types';
import { ProductCard } from './ProductCard';
import { Search, Filter, Sparkles } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetail: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onAddToCart,
  onViewDetail,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [onlyInStock, setOnlyInStock] = useState(false);

  const categories: CategoryFilter[] = ['All', 'Peptides', 'Blends', 'Research Solutions'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;

      const matchesStock = !onlyInStock || p.status === 'in_stock';

      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [products, searchTerm, selectedCategory, onlyInStock]);

  return (
    <section id="products" className="container mx-auto px-4 sm:px-6 py-20 border-t border-[#E9DCC8]">
      
      {/* Title */}
      <div className="text-center mb-12 space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#C6A15B]" />
          Our Collection
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-[#3B302A]">
          Premium Product Catalog
        </h2>
        <p className="text-sm text-[#766960] max-w-xl mx-auto font-light">
          Explore our complete selection of peptides and compounds formulated to 99%+ HPLC verified purity.
        </p>
      </div>

      {/* Controls / Filter Bar */}
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#FFF9F0] p-4 rounded-2xl border border-[#E9DCC8] shadow-sm">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#766960]" />
          <input
            type="text"
            placeholder="Search peptide (e.g. BPC 157, Retatrutide)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#FBF3E4] border border-[#E9DCC8] rounded-xl text-sm text-[#3B302A] placeholder:text-[#766960] focus:outline-none focus:border-[#C6A15B] transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all whitespace-nowrap cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#D9B6B0] text-[#3B302A] border-[#D9B6B0] shadow-sm'
                  : 'bg-[#FFF9F0] text-[#766960] hover:bg-[#F3E5CF] hover:text-[#3B302A] border-[#E9DCC8]'
              }`}
            >
              {cat === 'All' ? 'All Products' : cat}
            </button>
          ))}
        </div>

        {/* Stock Filter Toggle */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <label className="flex items-center gap-2 text-xs text-[#766960] font-medium cursor-pointer uppercase tracking-wider">
            <input
              type="checkbox"
              checked={onlyInStock}
              onChange={(e) => setOnlyInStock(e.target.checked)}
              className="rounded border-[#E9DCC8] bg-[#FBF3E4] text-[#C6A15B] focus:ring-[#C6A15B] h-4 w-4 cursor-pointer"
            />
            <span>In Stock Only</span>
          </label>
        </div>
      </div>

      {/* Product Counter */}
      <div className="mb-6 flex justify-between items-center text-xs text-[#766960] uppercase tracking-widest px-1 font-medium">
        <span>Showing {filteredProducts.length} of {products.length} products</span>
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-[#C6A15B] hover:underline cursor-pointer font-bold"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetail={onViewDetail}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#FFF9F0] rounded-2xl border border-[#E9DCC8] space-y-4">
          <Filter className="w-12 h-12 text-[#C6A15B] mx-auto" />
          <h3 className="text-xl font-serif font-bold text-[#3B302A]">No products found</h3>
          <p className="text-sm text-[#766960]">
            Try adjusting your search terms or select another category filter.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setOnlyInStock(false);
            }}
            className="px-6 py-2.5 bg-[#3B302A] text-[#FFF9F0] text-xs uppercase font-semibold tracking-wider rounded-full hover:bg-[#C6A15B] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};

