import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Plus, Check, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
          "flex flex-col h-full !p-0 overflow-hidden group rounded-2xl transition-all duration-500 cursor-pointer",
          isDark ? "bg-slate-900/50 border-white/5" : "bg-white border-slate-100 hover:shadow-xl hover:shadow-blue-900/5"
        )}
        onClick={() => navigate(`/product/${product.id}`)}
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

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
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

        <div className={cn("p-4 flex flex-col flex-grow relative z-10", compact ? "p-2.5" : "p-4")}>
          <div className="flex items-center gap-1 mb-1">
            <Star size={8} className="fill-blue-500 text-blue-500" />
            <span className={cn("text-[8px]", isDark ? "text-slate-500" : "text-slate-400")}>4.9</span>
          </div>
          
          <div className="flex flex-col mb-3">
            <h3 className={cn(
              "font-bold leading-tight transition-colors mb-0.5",
              compact ? "text-xs" : "text-sm",
              isDark ? "text-white" : "text-slate-900 group-hover:text-blue-600"
            )}>
              {product.name}
            </h3>
            {product.tagline && (
              <p className="text-[9px] md:text-[10px] font-bold text-blue-400 uppercase tracking-tight mb-1.5 font-mono">
                {product.tagline}
              </p>
            )}
            <div className={cn(
              "font-black tracking-tight",
              compact ? "text-xs" : "text-base",
              isDark ? "text-blue-400" : "text-slate-900"
            )}>
              ₹{product.price.toLocaleString('en-IN')}
            </div>
          </div>
          
          {!compact && product.features && product.features.length > 0 && (
            <div className="space-y-1 mb-4 mt-1">
              {product.features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="mt-0.5 shrink-0">
                    <Check size={12} className="text-green-500 font-bold" />
                  </div>
                  <span className={cn("text-[10px] font-medium leading-tight", isDark ? "text-slate-400" : "text-slate-600")}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}

          {!compact && (!product.features || product.features.length === 0) && (
            <p className={cn(
              "text-[10px] mb-4 line-clamp-2 leading-relaxed",
              isDark ? "text-slate-400" : "text-slate-500"
            )}>
              {product.description}
            </p>
          )}

          <div className="mt-auto space-y-2">
            <div className={cn(
              "flex items-center justify-between pt-2 border-t",
              isDark ? "border-white/5" : "border-slate-50"
            )}>
              <div className="flex flex-col">
                <span className={cn("text-[6px] font-bold uppercase tracking-widest", isDark ? "text-slate-500" : "text-slate-300")}>
                  Precision
                </span>
                <span className={cn("font-bold text-[9px]", isDark ? "text-white" : "text-slate-700")}>
                  {product.specs.precision}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className={cn("text-[6px] font-bold uppercase tracking-widest", isDark ? "text-slate-500" : "text-slate-300")}>
                  Stages
                </span>
                <span className={cn("font-bold text-[9px]", isDark ? "text-white" : "text-slate-700")}>
                  {product.specs.stages} Stage
                </span>
              </div>
            </div>
            
            {!compact && (
              <button 
                onClick={handleBuyNow}
                className="w-full py-2 bg-slate-900 text-white rounded-lg text-[10px] font-bold flex items-center justify-center gap-1.5 hover:bg-blue-600 transition-all group/btn"
              >
                Buy Now
                <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};

export default ProductCard;
