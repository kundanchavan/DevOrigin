import { motion } from 'motion/react';
import { Layers, Droplets, Zap, ShieldCheck } from 'lucide-react';

export default function HorizontalTech() {
  const filters = [
    { 
      title: "Sediment Filter", 
      icon: Layers, 
      desc: "Removes coarse impurities and dust",
      image: "https://images.unsplash.com/photo-1585837554808-a1503bc98762?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Pre-Carbon", 
      icon: Zap, 
      desc: "Nix chlorine and organic chemicals",
      image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=400"
    },
    { 
      id: 'ro', 
      title: "RO Membrane", 
      icon: Droplets, 
      desc: "0.0001 micron precision filtration", 
      highlight: true,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "Post Carbon", 
      icon: ShieldCheck, 
      desc: "Silver-infused polish for taste",
      image: "https://images.unsplash.com/photo-1532634896-26909d0d4b89?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "Mineralizer", 
      icon: Zap, 
      desc: "Balances pH and essential ions",
      image: "https://images.unsplash.com/photo-1518152002772-997c94ef380b?auto=format&fit=crop&q=80&w=400"
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter mb-8">
            Inside Every Drop <br/><span className="text-blue-600">of Purity.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Our multi-stage filtration process isn't just about cleaning water—it's about re-engineering it at a molecular level for perfect hydration.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {filters.map((filter, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 w-full flex flex-col items-center group"
            >
              <div className="flex items-center w-full mb-8">
                <div className="h-px bg-slate-100 flex-grow hidden lg:block" />
                <div className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-400 font-black text-xs shrink-0 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
                  0{i + 1}
                </div>
                <div className="h-px bg-slate-100 flex-grow hidden lg:block" />
              </div>

              <div className="relative w-full aspect-[4/5] bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-end group hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center w-full px-4">
                   {filter.image ? (
                     <div className="relative w-32 h-48 group-hover:scale-110 transition-transform duration-700 [perspective:1000px]">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img 
                          src={filter.image} 
                          alt={filter.title} 
                          className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/10 blur-xl rounded-full" />
                     </div>
                   ) : (
                     <div className="w-20 h-44 bg-slate-200 rounded-xl relative overflow-hidden shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-transparent" />
                        <div className="absolute bottom-4 left-0 right-0 h-1/2 bg-blue-500/10 blur-xl rounded-full" />
                     </div>
                   )}
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-lg font-black text-slate-900 mb-2">{filter.title}</h4>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">{filter.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
    </section>
  );
}
