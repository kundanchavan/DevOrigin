import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ShoppingBag, Plus, Star, Check, Loader2, ArrowLeft } from 'lucide-react';
import { Product } from '@/types';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/common/ProductCard';
import { getProducts } from '@/services/sanityService';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = ['All', 'UV', 'RO', 'UV+RO', 'Copper', 'Mineral'];

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
    }
    loadData();
  }, []);

  const filteredProducts = useMemo(() => {
    return activeCategory === 'All' 
      ? products 
      : products.filter(p => (p.category || 'Other') === activeCategory);
  }, [activeCategory, products]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-5xl font-bold mb-4 tracking-tight">Product Catalog</h1>
            <p className="text-slate-500 max-w-md">Precision engineered purifiers for every environment.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === cat 
                    ? "bg-slate-900 text-white shadow-lg" 
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {isLoading ? (
            <div className="col-span-full py-24 flex flex-col items-center justify-center text-slate-400 gap-4">
              <Loader2 className="animate-spin" size={32} />
              <p className="font-bold tracking-widest uppercase text-[10px]">Syncing with Swiss Lab...</p>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
