import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ShoppingBag, Plus, Star, Check } from 'lucide-react';
import { Product } from '@/types';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/constants';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addToCart } = useCart();
  const categories = ['All', 'Countertop', 'Under-sink', 'Industrial', 'Accessories'];

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  const filteredProducts = useMemo(() => {
    return activeCategory === 'All' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                      {product.tag}
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className={cn(
                        "p-3 rounded-2xl shadow-xl transition-all duration-300",
                        addedId === product.id ? "bg-green-500 text-white" : "bg-primary-blue text-white hover:bg-blue-700"
                      )}
                    >
                      {addedId === product.id ? <Check size={24} /> : <Plus size={24} />}
                    </button>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-blue-500 text-blue-500" />)}
                    <span className="text-xs text-slate-400 ml-2">(4.9/5)</span>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <div className="text-xl font-display font-medium text-blue-600">${product.price}</div>
                  </div>
                  
                  <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-50">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Stages</div>
                      <div className="text-sm font-bold">{product.specs.stages}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Precision</div>
                      <div className="text-sm font-bold">{product.specs.precision}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Category</div>
                      <div className="text-sm font-bold truncate">{product.category}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
