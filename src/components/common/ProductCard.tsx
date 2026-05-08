import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Plus, Check } from 'lucide-react';
import { Product } from '@/types';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { GlowCard } from '../ui/spotlight-card';

interface ProductCardProps {
  product: Product;
  variant?: 'light' | 'dark';
  compact?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'light', compact = false }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isDark = variant === 'dark';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full"
    >
      <GlowCard 
        customSize 
        glowColor="blue"
        className={cn(
          "flex flex-col h-full !p-0 overflow-hidden group rounded-2xl transition-all duration-500",
          isDark ? "bg-slate-900/50 border-white/5" : "bg-white border-slate-100 hover:shadow-xl hover:shadow-blue-900/5"
        )}
      >
        <div className={cn(
          "relative aspect-square overflow-hidden",
          isDark ? "bg-slate-800" : "bg-slate-50"
        )}>
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <ShoppingBag size={compact ? 24 : 32} className="opacity-20" />
            </div>
          )}
          
          {product.tag && (
            <div className={cn(
              "absolute top-3 left-3 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest z-10",
              isDark ? "bg-blue-600 text-white" : "bg-slate-900 text-white"
            )}>
              {product.tag}
            </div>
          )}

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={handleAddToCart}
              className={cn(
                "p-2 rounded-xl shadow-lg transition-all duration-300",
                added ? "bg-green-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
              )}
            >
              {added ? <Check size={16} /> : <Plus size={16} />}
            </button>
          </div>
        </div>

        <div className={cn("p-4 flex flex-col flex-grow relative z-10", compact ? "px-3 py-3" : "p-5")}>
          <div className="flex items-center gap-1 mb-1">
            <Star size={8} className="fill-blue-500 text-blue-500" />
            <span className={cn("text-[8px]", isDark ? "text-slate-500" : "text-slate-400")}>4.9</span>
          </div>
          
          <div className="flex flex-col mb-2">
            <h3 className={cn(
              "font-bold leading-tight truncate transition-colors",
              compact ? "text-sm" : "text-base",
              isDark ? "text-white" : "text-slate-900 group-hover:text-blue-600"
            )}>
              {product.name}
            </h3>
            <div className={cn(
              "font-bold",
              compact ? "text-xs" : "text-sm",
              isDark ? "text-blue-400" : "text-slate-900"
            )}>
              ₹{product.price.toLocaleString('en-IN')}
            </div>
          </div>
          
          {!compact && (
            <p className={cn(
              "text-[10px] mb-4 line-clamp-2 leading-relaxed",
              isDark ? "text-slate-400" : "text-slate-500"
            )}>
              {product.description}
            </p>
          )}

          <div className={cn(
            "flex items-center justify-between pt-3 border-t mt-auto",
            isDark ? "border-white/5" : "border-slate-50"
          )}>
            <div className="flex flex-col">
              <span className={cn("text-[7px] font-bold uppercase tracking-widest", isDark ? "text-slate-500" : "text-slate-300")}>
                Precision
              </span>
              <span className={cn("font-bold text-[10px]", isDark ? "text-white" : "text-slate-700")}>
                {product.specs.precision}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className={cn("text-[7px] font-bold uppercase tracking-widest", isDark ? "text-slate-500" : "text-slate-300")}>
                Stages
              </span>
              <span className={cn("font-bold text-[10px]", isDark ? "text-white" : "text-slate-700")}>
                {product.specs.stages} Stage
              </span>
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};

export default ProductCard;
