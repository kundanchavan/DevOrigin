import { motion } from 'motion/react';
import { BadgeCheck, Play, ArrowRight, Signal, Droplet, Activity } from 'lucide-react';
import { Product } from '@/types';

interface ProductHeroProps {
  product?: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
  // Mock Aura data if not provided
  const aura = product || {
    name: "Aura",
    tagline: "Premium Purity. Intelligent Inside.",
    price: 24999,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
    description: "Experience the next level of molecular water purification with Aura. Featuring our patented graphene sieve and real-time TDS monitoring for the ultimate peace of mind.",
    features: ["11 Stage Purification", "Real-time TDS Monitoring", "Smart App Connectivity", "Patent Pending Technology"]
  };

  return (
    <section className="relative min-h-[80vh] bg-slate-50 pt-24 pb-16 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            <div>
              <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Dew Origin</p>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
                {aura.name}
              </h1>
              <p className="text-lg font-bold text-slate-600 tracking-tight mb-8">
                {aura.tagline}
              </p>
              <p className="text-slate-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                {aura.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-95">
                Buy Now <ArrowRight size={16} />
              </button>
              <button className="w-full sm:w-auto px-8 py-5 border border-slate-200 bg-white text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95">
                 <Play size={14} className="fill-blue-600 text-blue-600" /> Free Demo
              </button>
            </div>

            <div className="pt-8 space-y-4">
              {aura.features?.map((feature, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="w-5 h-5 rounded-md bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600">
                    <BadgeCheck size={12} strokeWidth={3} />
                  </div>
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center: Main 3D Render */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[500px]" style={{ perspective: '1000px' }}>
              {/* Glow Backdrop */}
              <div className="absolute inset-10 bg-blue-400/20 blur-[100px] rounded-full animate-pulse" />
              
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 10, 0],
                    rotateX: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    rotateY: 25,
                    rotateX: -15,
                    scale: 1.08,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 cursor-pointer preserve-3d"
                >
                  <img 
                    src={aura.image} 
                    alt="Purifier Aura 3D View" 
                    className="w-full h-auto drop-shadow-[0_40px_80px_rgba(30,58,138,0.3)] filter brightness-105"
                    referrerPolicy="no-referrer"
                    onLoad={() => console.log('Hero image loaded')}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000';
                    }}
                  />
                  
                  {/* 3D Reflection Highlight Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 pointer-events-none rounded-3xl mix-blend-overlay" />
                </motion.div>

              {/* Floating UI: TDS */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute left-[-20px] top-[20%] z-20 w-44 p-4 rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100 shadow-xl animate-float"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Live Preview</span>
                  <Signal size={12} className="text-blue-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Inlet TDS</p>
                  <p className="text-2xl font-black text-slate-900">422 <span className="text-[10px] text-slate-400 font-bold">ppm</span></p>
                </div>
                <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
                   <div className="w-1/2 h-full bg-blue-500" />
                </div>
              </motion.div>

              {/* Floating UI: Purified */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute right-[0px] bottom-[10%] z-20 w-40 p-1 rounded-3xl bg-blue-600 shadow-2xl animate-float-slow"
              >
                <div className="bg-white rounded-[calc(1.5rem-2px)] p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplet size={12} className="text-blue-400" />
                    <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Quality</span>
                  </div>
                  <p className="text-2xl font-black text-blue-600">42 <span className="text-[10px] text-slate-400 font-bold">PPM</span></p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Exploded Filter View */}
          <div className="lg:col-span-3 space-y-6 order-3 relative lg:pl-8">
            <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent hidden lg:block" />
            
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-8 lg:mb-4 flex items-center gap-2">
              <Activity size={14} /> Molecular Stages
            </p>
            
            <div className="space-y-4">
              {[
                { id: '01', name: "Sediment Shield", desc: "Large particle interception" },
                { id: '02', name: "Active Carbon", desc: "Chemical removal" },
                { id: '03', name: "Nano Sieve", desc: "Micro-plastic block" },
                { id: '04', name: "RO Membrane", desc: "Heavy metal rejection" },
                { id: '05', name: "UV-C Boost", desc: "Pathogen neutralization" },
                { id: '06', name: "Mineral Pulse", desc: "Electrolyte re-infusion" },
                { id: '07', name: "Silver Shield", desc: "Post-bio protection" }
              ].map((stage, i) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-black text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    {stage.id}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider">{stage.name}</span>
                    <span className="text-[9px] text-slate-400 font-bold">{stage.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-pulse" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Optimal</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
