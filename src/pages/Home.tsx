import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Droplets, Star, ShoppingBag, Layers, Cpu, Waves, Settings2, Play, Eye, Loader2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts, getSiteData } from '@/services/sanityService';
import { Product } from '@/types';
import { GlowCard } from '@/components/ui/spotlight-card';
import ProductCard from '@/components/common/ProductCard';
import NewLaunches from '@/components/NewLaunches';
import ShaderShowcase from '@/components/ui/hero';

import { CinematicHero } from '@/components/ui/cinematic-landing-hero';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [siteData, setSiteData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [productData, dynamicData] = await Promise.all([
          getProducts(),
          getSiteData()
        ]);
        setProducts(productData);
        setSiteData(dynamicData);
      } catch (error) {
        console.error("Error loading home data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const defaultMediaGallery = [
    {
      title: 'Advanced Filter Core',
      category: 'Filtration',
      image: 'https://images.unsplash.com/photo-1585832770484-4ad8447ca12b?auto=format&fit=crop&q=80&w=800',
      isVideo: true,
      desc: '9-layer nano-carbon mesh and graphene stabilization in action.'
    },
    {
      title: 'UV-C Plasma unit',
      category: 'Sterilization',
      image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=800',
      isVideo: false,
      desc: 'Cold-plasma UV unit rendering bacteria inert at 254nm wavelength.'
    },
    {
      title: 'Copper Alloy Candle',
      category: 'Vitality',
      image: 'https://images.unsplash.com/photo-1444676632488-26a136c45b9b?auto=format&fit=crop&q=80&w=800',
      isVideo: false,
      desc: 'Antioxidant infusion process through high-purity copper ceramic.'
    },
    {
      title: 'High-Pressure Logic',
      category: 'Pipes & Flow',
      image: 'https://images.unsplash.com/photo-1581093583449-80d50ad975e5?auto=format&fit=crop&q=80&w=800',
      isVideo: true,
      desc: 'Precision hydraulic routing system for zero-leak performance.'
    },
    {
      title: 'Design Shell v4',
      category: 'External Body',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      isVideo: false,
      desc: 'Anodized aluminum and reinforced glass exterior finishes.'
    }
  ];

  const mediaGallery = siteData?.gallery || defaultMediaGallery;
  const features = siteData?.features || [
    { 
      icon: ShieldCheck, 
      title: '9-Stage Purity', 
      desc: 'From sediment pre-filters to biological UV treatment, nothing escapes our system.' 
    },
    { 
      icon: Zap, 
      title: 'Instant Mineralization', 
      desc: 'Automatically re-adds essential minerals like calcium and magnesium back into your flow.' 
    },
    { 
      icon: CheckCircle2, 
      title: 'Intelligent Monitoring', 
      desc: 'Real-time TDS measurement and filter life tracking synced directly to your phone.' 
    }
  ];

  const heroContent = (siteData?.settings && siteData.settings.hero) ? siteData.settings.hero : {
    title: "Engineered for Vitality",
    subtitle: "Our patented technology doesn't just clean water; it restores its natural molecular structure."
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Shader Showcase */}
      <ShaderShowcase className="min-h-screen" />

      {/* Featured Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{heroContent.title}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{heroContent.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature: any, i: number) => {
              const Icon = feature.icon || ShieldCheck;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    {typeof Icon === 'function' ? <Icon size={28} /> : <ShieldCheck size={28} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products List */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Best Sellers</h2>
              <p className="text-slate-400 text-sm max-w-md">Our most trusted molecular purification units.</p>
            </div>
            <NavLink 
              to="/products"
              className="text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all group"
            >
              View Full Collection <ArrowRight size={20} />
            </NavLink>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {isLoading ? (
              <div className="col-span-full py-16 flex flex-col items-center justify-center text-slate-500 gap-4">
                <Loader2 className="animate-spin" size={40} />
                <p className="font-bold tracking-widest uppercase text-xs">Fetching Molecular Data...</p>
              </div>
            ) : (
              products.slice(0, 5).map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  variant="dark" 
                  compact={true} 
                />
              ))
            )}
          </div>
        </div>
      </section>


      {/* New Launches Integration */}
      <NewLaunches products={products} />

      {/* Technical Anatomy Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              {/* Technical Blueprint Layout */}
              <div className="relative z-10 aspect-square bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200 flex items-center justify-center p-12">
                <motion.div 
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  className="relative w-full h-full"
                >
                  {/* Central Body Mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-80 bg-white shadow-2xl rounded-3xl border border-slate-100 flex flex-col p-4">
                      <div className="h-2 w-full bg-blue-100 rounded-full mb-4" />
                      <div className="flex-grow flex flex-col gap-4">
                        <div className="h-12 w-full bg-slate-50 rounded-xl animate-pulse" />
                        <div className="h-12 w-full bg-blue-50 rounded-xl" />
                        <div className="h-12 w-full bg-slate-50 rounded-xl animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Components Floating Around */}
                  {[
                    { id: 'c1', name: 'Filter Candle', icon: Layers, top: '10%', left: '10%' },
                    { id: 'c2', name: 'UV Light Unit', icon: Zap, top: '10%', right: '10%' },
                    { id: 'c3', name: 'Copper Infuser', icon: Cpu, bottom: '20%', left: '0%' },
                    { id: 'c4', name: 'High-Pressure Pipes', icon: Waves, bottom: '10%', right: '5%' },
                    { id: 'c5', name: 'Alkaline Filter', icon: Droplets, top: '50%', left: '-15%' },
                    { id: 'c6', name: 'Design Body', icon: Settings2, bottom: '40%', right: '-10%' },
                  ].map((comp, i) => (
                    <motion.div
                      key={comp.id}
                      initial={{ opacity: 0, scale: 0.5, x: 20 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.1, zIndex: 50 }}
                      style={{ top: comp.top, left: comp.left, right: comp.right, bottom: comp.bottom }}
                      className="absolute p-4 bg-white shadow-xl rounded-2xl border border-slate-100 flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center shrink-0 group-hover:bg-slate-900 transition-colors">
                        <comp.icon size={18} />
                      </div>
                      <span className="text-xs font-bold whitespace-nowrap">{comp.name}</span>
                    </motion.div>
                  ))}

                  {/* Connection Lines (Simulated) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeDasharray="4" />
                    <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeDasharray="4" />
                    <line x1="10%" y1="80%" x2="50%" y2="50%" stroke="currentColor" strokeDasharray="4" />
                    <line x1="90%" y1="90%" x2="50%" y2="50%" stroke="currentColor" strokeDasharray="4" />
                  </svg>
                </motion.div>
              </div>

              {/* Glowing Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/5 blur-[120px] rounded-full -z-10" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                Internal Architecture
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Crafting the <span className="text-blue-600">Invisible</span> Standard.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Multi-Cylinder Filtering</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Our proprietary filter candles use compressed nano-carbon and graphene layers to trap 99.9% of micro-plastics.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Cold-UV Sterilization</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Mercury-free LED UV-C light instantly neutralizes bacteria at the molecular level just milliseconds before dispensing.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Droplets size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Copper Ceramic Re-infusion</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Water flows through active copper candles to naturally balance pH and introduce immunity-boosting antioxidants.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-slate-100 flex items-center gap-6">
                 <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:shadow-xl transition-all">
                   Full Technical Specs
                 </button>
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="avatar" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                      +800
                    </div>
                 </div>
                 <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Technician Approved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Innovation */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative bg-slate-950 mt-[-1px]"
      >
        <CinematicHero 
          brandName="Aura"
          tagline1="Pure flow,"
          tagline2="total vitality."
          cardHeading="Next-gen molecular routing."
          cardDescription={<>Our patented <span className="text-white font-semibold">Aura Core</span> technology provides 9-stage filtration with real-time TDS monitoring and antioxidant re-infusion for the purest water on the planet.</>}
          metricValue={99.9}
          metricLabel="Purity %"
          ctaHeading="Experience the future of water."
          ctaDescription="Join over 50,000 households that trust Aura to deliver molecularly perfect water every single day."
        />
      </motion.section>
    </div>
  );
}
