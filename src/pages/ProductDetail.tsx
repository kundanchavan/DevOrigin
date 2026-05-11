import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Droplets,
  Plus,
  Minus,
  Check,
  Award,
  Clock,
  Shield
} from 'lucide-react';
import { getProducts } from '@/services/sanityService';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'reviews'>('details');

  useEffect(() => {
    async function loadProduct() {
      try {
        const products = await getProducts();
        const found = products.find(p => p.id === id);
        if (found) {
          setProduct(found);
        }
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
       addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Droplets className="text-blue-600" size={40} />
        </motion.div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/products')}
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-bold text-sm"
          >
            <ArrowLeft size={18} /> Back
          </button>
          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-slate-900 transition-colors" onClick={() => navigate('/cart')}>
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={cn(
                "aspect-square rounded-[3rem] overflow-hidden sticky top-28",
                product.bgColor || "bg-slate-50"
              )}
            >
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center opacity-10">
                  <ShoppingBag size={120} />
                </div>
              )}
              
              {product.tag && (
                <div className="absolute top-8 left-8 px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {product.tag}
                </div>
              )}
            </motion.div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400">512 Reviews</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
                  {product.name}
                </h1>
                {product.tagline && (
                  <p className="text-lg font-medium text-blue-500 mb-6 font-mono">
                    {product.tagline}
                  </p>
                )}
                
                <div className="text-3xl font-black text-slate-900 mb-6">
                  ₹{product.price.toLocaleString('en-IN')}
                  <span className="text-base font-medium text-slate-400 ml-3 line-through opacity-50">
                    ₹{(product.price * 1.25).toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-slate-500 leading-relaxed text-lg mb-8 max-w-xl">
                  {product.description}
                </p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-4 py-8 border-y border-slate-100">
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Precision</p>
                  <p className="text-sm font-black text-slate-900">{product.specs.precision}</p>
                </div>
                <div className="text-center border-x border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Stages</p>
                  <p className="text-sm font-black text-slate-900">{product.specs.stages} Stage</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Flow Rate</p>
                  <p className="text-sm font-black text-slate-900">{product.specs.flowRate || 'N/A'}</p>
                </div>
              </div>

              {/* Features List */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-green-500 group-hover:scale-110 transition-transform">
                          <Check size={16} />
                        </div>
                        <span className="text-xs font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-100">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-white hover:text-slate-900 transition-all"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-12 text-center font-black text-slate-900">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-white hover:text-slate-900 transition-all"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleAddToCart}
                    className={cn(
                      "flex-grow h-14 rounded-full font-bold flex items-center justify-center gap-3 transition-all",
                      added ? "bg-green-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-500/20"
                    )}
                  >
                    {added ? <Check size={20} /> : <ShoppingBag size={20} />}
                    {added ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
                
                <button className="w-full h-14 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all">
                  Express Checkout
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {[
                  { icon: Shield, label: '5-Year Warranty' },
                  { icon: Award, label: 'ISO Certified' },
                  { icon: Clock, label: '24/7 Support' },
                  { icon: Droplets, label: 'Eco Friendly' }
                ].map((badge, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <badge.icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Detailed Tabs/Content Section */}
        <div className="mt-32">
          <div className="flex border-b border-slate-100 mb-12">
            {(['details', 'specs', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-4 text-sm font-bold uppercase tracking-widest relative transition-colors",
                  activeTab === tab ? "text-slate-900" : "text-slate-400"
                )}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-[300px]"
          >
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                  <h3 className="text-3xl font-bold tracking-tight">The ultimate molecular experience</h3>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    Our {product.name} system represents the pinnacle of home water purification.
                    By utilizing advanced graphene mesh and UV-C sterilization, we ensure that every drop
                    is not just filtered, but structurally optimized for maximum cellular absorption.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <ShieldCheck className="text-blue-500 mb-4" size={32} />
                      <h4 className="font-bold mb-2">Molecular Integrity</h4>
                      <p className="text-sm text-slate-500">Maintains the natural structure of water molecules for better hydration.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <Zap className="text-blue-500 mb-4" size={32} />
                      <h4 className="font-bold mb-2">Speed Filtration</h4>
                      <p className="text-sm text-slate-500">Process up to 2 liters per minute with zero waste technology.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
                  <h4 className="text-2xl font-bold mb-4">Dew Assurance™</h4>
                  <p className="text-slate-400 text-sm mb-6">Every unit comes with our 30-day "Perfect Purity" guarantee and free installation.</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-400" size={18} />
                      <span className="text-xs font-bold">Free Expert Installation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-400" size={18} />
                      <span className="text-xs font-bold">Maintenance Reminders</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {[
                  { label: 'Technology', value: product.category },
                  { label: 'Purification Stages', value: `${product.specs.stages} Level` },
                  { label: 'Filter Cartridge Life', value: '12 Months' },
                  { label: 'Inlet Water Pressure', value: '0.3 - 3.0 kg/cm²' },
                  { label: 'Power Consumption', value: '45 Watts' },
                  { label: 'Storage Tank Capacity', value: '7.5 Liters' },
                  { label: 'Dimensions', value: '450 x 250 x 380 mm' },
                  { label: 'Weight', value: '8.2 kg' }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-slate-50">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{spec.label}</span>
                    <span className="text-sm font-black text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="text-center py-12">
                <Star className="text-slate-100 mx-auto mb-4" size={64} fill="currentColor" />
                <h4 className="text-xl font-bold mb-2">Community Rating: 4.9/5</h4>
                <p className="text-slate-400 mb-8">All reviews are verified for authenticity.</p>
                <div className="max-w-xl mx-auto space-y-6">
                  {[
                    { name: 'Arun K.', rating: 5, comment: 'Best water purifier I have ever used. The taste is noticeably different.' },
                    { name: 'Sarah M.', rating: 5, comment: 'Sleek design and works perfectly. The installation was very smooth.' }
                  ].map((review, i) => (
                    <div key={i} className="text-left p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">{review.name}</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} className="fill-blue-500 text-blue-500" />)}
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 italic">"{review.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
