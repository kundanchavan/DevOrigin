import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Droplets, Star, ShoppingBag, Layers, Cpu, Waves, Settings2, Play, Eye } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { PRODUCTS } from '@/constants';
import { cn } from '@/lib/utils';
import { GlowCard } from '@/components/ui/spotlight-card';

export default function Home() {
  const mediaGallery = [
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

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6">
              <Zap size={14} /> New Generation IV
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-6">
              Purity in <span className="text-blue-600">Every</span> Drop.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
              Advanced 9-stage molecular filtration meets elegant Swiss design. Transform your tap water into a source of vitality.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink 
                to="/products"
                className="px-8 py-4 bg-primary-blue text-white rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all hover:scale-105"
              >
                Explore Range <ArrowRight size={20} />
              </NavLink>
              <NavLink 
                to="/about"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-semibold hover:bg-slate-50 transition-all"
              >
                Our Science
              </NavLink>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
              <div>
                <div className="text-2xl font-bold text-slate-900">99.9%</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Impurity Removal</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">0.001µ</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Filtration Precision</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">10Y</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Warranty Period</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 aspect-[4/5] md:aspect-square flex items-center justify-center">
               {/* Placeholder for the 3D Spline model or high-end image */}
               <img 
                src="https://images.unsplash.com/photo-1594398333201-9a997ba7493a?auto=format&fit=crop&q=80&w=800" 
                alt="Aquapure Elite X" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-70">Model 2024</div>
                    <div className="text-xl font-bold">Elite X Carbon</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold uppercase tracking-widest opacity-70">Price</div>
                    <div className="text-xl font-bold">$1,299</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements to simulate depth */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center z-20 border border-slate-50"
            >
              <Droplets className="text-blue-500 mb-2" size={32} />
              <div className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Pure Flow</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale contrast-125">
            <span className="text-xl font-black italic tracking-tighter">HYDRO-LABS</span>
            <span className="text-xl font-black italic tracking-tighter">PURE-TECH</span>
            <span className="text-xl font-black italic tracking-tighter">ECO-VITAL</span>
            <span className="text-xl font-black italic tracking-tighter">AQUA-GEN</span>
            <span className="text-xl font-black italic tracking-tighter">VITALITY.CO</span>
          </div>
        </div>
      </section>

      {/* Featured Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Engineered for Vitality</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our patented technology doesn't just clean water; it restores its natural molecular structure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
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
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products List */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Top Selling Systems</h2>
              <p className="text-slate-400 max-w-md">The most trusted molecular purification units by homes and labs worldwide.</p>
            </div>
            <NavLink 
              to="/products"
              className="text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all group"
            >
              View Full Collection <ArrowRight size={20} />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <GlowCard 
                  customSize 
                  glowColor="blue"
                  className="bg-slate-900/50 border-white/5 flex flex-col h-full !p-0 overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    {product.tag && (
                      <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm z-10">
                        {product.tag}
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} size={12} className="fill-blue-500 text-blue-500" />)}
                      <span className="text-xs text-slate-500 ml-2">(4.9/5)</span>
                    </div>
                    
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <div className="text-xl font-display font-medium text-blue-400">${product.price}</div>
                    </div>
                    
                    <p className="text-sm text-slate-400 mb-8 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Precision</span>
                        <span className="font-bold text-sm text-white">{product.specs.precision}</span>
                      </div>
                      <NavLink
                        to="/products"
                        className="p-3 bg-white/5 text-white rounded-2xl hover:bg-primary-blue transition-colors border border-white/5"
                      >
                        <ShoppingBag size={20} />
                      </NavLink>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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

      {/* Component Media Gallery */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <div className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Visual Documentation</div>
             <h2 className="text-4xl md:text-5xl font-bold mb-4">Component Innovation</h2>
             <p className="text-slate-500 max-w-xl mx-auto">Witness the precision of our Swiss-engineered purification hardware through high-definition visual cycles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto md:h-[800px]">
             {/* Large Feature Item */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-[3rem] bg-white border border-slate-100 shadow-sm"
             >
                <img src={mediaGallery[0].image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="gallery" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                   <div className="flex items-center gap-2 mb-2 text-blue-400 text-xs font-bold uppercase tracking-widest">
                      {mediaGallery[0].isVideo ? <Play fill="currentColor" size={14} /> : <Eye size={14} />} 
                      {mediaGallery[0].category}
                   </div>
                   <h3 className="text-3xl font-bold mb-2">{mediaGallery[0].title}</h3>
                   <p className="text-sm opacity-0 group-hover:opacity-70 transition-opacity max-w-sm">{mediaGallery[0].desc}</p>
                </div>
             </motion.div>

             {/* Secondary Items */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="md:col-span-3 md:row-span-1 group relative overflow-hidden rounded-[3rem] bg-white border border-slate-100 shadow-sm"
             >
               <img src={mediaGallery[1].image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="gallery" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
               <div className="absolute top-8 left-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 text-white">
                     <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
                        <Play fill="white" size={12} className="ml-0.5" />
                     </div>
                     <div className="text-xs font-bold uppercase tracking-widest">{mediaGallery[1].title}</div>
                  </div>
               </div>
             </motion.div>

             {/* Grid Bottom Items */}
             <div className="md:col-span-3 md:row-span-1 grid grid-cols-2 gap-6">
                {mediaGallery.slice(2, 4).map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 0.98 }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-white aspect-square border border-slate-100 group"
                  >
                    <img src={item.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="gallery" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                       <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                       <span className="text-[10px] text-blue-400 font-bold uppercase tracking-tighter">{item.category}</span>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
          
          <div className="mt-16 bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
             <div className="relative z-10 max-w-md">
                <h3 className="text-3xl font-bold mb-4">Download Technical Documentation</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">Access detailed whitepapers on our proprietary molecular mesh, 3D body construction, and chemical re-infusion logic.</p>
                <div className="flex gap-4">
                   <button className="px-6 py-3 bg-blue-600 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">Download v4.0</button>
                   <button className="px-6 py-3 border border-white/10 rounded-xl font-bold text-sm hover:bg-white/5 transition-all">Request Sample</button>
                </div>
             </div>
             <div className="relative z-10 md:w-1/2 flex items-center justify-center">
                <div className="relative w-full aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center group overflow-hidden">
                   <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Play size={24} fill="currentColor" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-[0.3em]">Watch Assembly Film</div>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-40" />
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
