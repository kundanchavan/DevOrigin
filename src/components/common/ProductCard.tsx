import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Plus, Check, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      className="h-full bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-square overflow-hidden bg-slate-50 p-8 flex items-center justify-center">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300">
            <ShoppingBag size={48} className="opacity-20" />
          </div>
        )}
        
        {product.tag && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest z-10">
            {product.tag}
          </div>
        )}

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button 
            onClick={handleAddToCart}
            className={cn(
              "w-12 h-12 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300",
              added ? "bg-green-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
            )}
          >
            {added ? <Check size={20} /> : <Plus size={20} />}
          </button>
        </div>
      </div>

      <div className="p-6 flex flex-col h-[calc(100%-100%)]">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3].map(s => <Star key={s} size={10} className="fill-blue-500 text-blue-500" />)}
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Molecular Grade</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
          {product.name}
        </h3>
        
        {product.tagline && (
          <p className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter mb-4 font-mono">
            {product.tagline}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Price</span>
            <span className="text-xl font-black text-slate-900">₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          
          <button 
            onClick={handleBuyNow}
            className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all group/btn"
          >
            <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
