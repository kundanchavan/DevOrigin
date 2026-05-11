import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { Product } from '@/types';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/common/ProductCard';
import { getProducts } from '@/services/sanityService';

// High-end Showcase Sections
import ProductHero from '@/components/product/ProductHero';
import DetailStats from '@/components/product/DetailStats';
import HorizontalTech from '@/components/product/HorizontalTech';
import FeatureGrid from '@/components/product/FeatureGrid';
import SpecsSection from '@/components/product/SpecsSection';
import MaintenancePricing from '@/components/product/MaintenancePricing';
import FooterCTA from '@/components/product/FooterCTA';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = ['All', 'RO Purifiers', 'UV Purifiers', 'Alkaline', 'Commercial'];

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
    }
    loadData();
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory, products]);

  const auraProduct = products.find(p => p.id === 'aura' || p.name === 'Aura');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 1. Main Hero (Aura Focus) */}
      <ProductHero product={auraProduct} />

      {/* 2. Hero Bottom Stats Bar */}
      <DetailStats />

      {/* 3. Catalog Section (Product List) */}
      <section id="catalog" className="relative z-10 py-20 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase">
                Product Catalog
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
                Select Your <br/><span className="text-blue-600/40">Standard.</span>
              </h2>
              <p className="text-slate-500 font-medium max-w-lg leading-relaxed">
                Precision engineered purification systems for every home and commercial environment.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-4 scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap",
                    activeCategory === cat 
                      ? "bg-blue-600 text-white shadow-2xl shadow-blue-600/30" 
                      : "bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600/30"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading ? (
              <div className="col-span-full py-20 flex flex-col items-center justify-center text-slate-400 gap-6">
                <Loader2 className="animate-spin text-blue-500" size={48} />
                <p className="font-black tracking-[0.4em] uppercase text-xs">Syncing Molecular Repository...</p>
              </div>
            ) : (
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>

      {/* 4. Technology Section (White Background) */}
      <HorizontalTech />

      {/* 5. Feature Grid Section (Dark Cards) */}
      <FeatureGrid />

      {/* 6. Pricing Section (Maintenance) */}
      <MaintenancePricing />

      {/* 7. Specifications & Smart App Section */}
      <SpecsSection />

      {/* 8. Footer CTA */}
      <FooterCTA />
    </div>
  );
}
