import { motion } from 'motion/react';
import { CheckCircle2, Wrench, Truck, ArrowRight, TrendingDown } from 'lucide-react';

const items = [
  { 
    t: "Sediment Filter", 
    p: "₹250", 
    l: "Average Life: 6 Months",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1585837554808-a1503bc98762?auto=format&fit=crop&q=80&w=200"
  },
  { 
    t: "Carbon Filter", 
    p: "₹350", 
    l: "Average Life: 6 Months",
    color: "bg-teal-500",
    image: "https://images.unsplash.com/photo-1532634896-26909d0d4b89?auto=format&fit=crop&q=80&w=200"
  },
  { 
    t: "RO Membrane", 
    p: "₹1,200", 
    l: "Average Life: 24 Months",
    color: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=200"
  },
  { 
    t: "Service Visit", 
    p: "FREE", 
    l: "As and When Needed",
    color: "bg-rose-500",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200"
  },
];

export default function MaintenancePricing() {
  return (
    <section className="bg-white py-24 relative overflow-hidden border-y border-slate-100">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-[320px_1fr]">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase border border-blue-600/20">
                Cost Advantage
              </div>
              
              <div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 tracking-tighter">
                  Honest Pricing.<br />
                  <span className="text-blue-600">Always Transparent.</span>
                </h2>
                <p className="mt-6 text-slate-500 font-medium leading-relaxed">
                  Pay only for what you replace. No hidden charges. No surprises. We've eliminated the "service industry tax" on your health.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  { icon: CheckCircle2, text: "100% Genuine Parts", color: "text-green-500" },
                  { icon: Wrench, text: "Certified Technicians", color: "text-blue-500" },
                  { icon: Truck, text: "Doorstep Service", color: "text-indigo-500" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <div className={item.color}>
                      <item.icon size={18} />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Pricing Grid & Savings */}
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((i, idx) => (
                <motion.div 
                  key={i.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative rounded-3xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-100 overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{i.t}</div>
                    <div className="text-2xl font-black text-blue-600 mb-1">{i.p}</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-6">{i.l}</div>
                    
                    {/* 3D Filter Image Placeholder */}
                    <div className="mt-4 relative h-32 w-full rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10" />
                      <img 
                        src={i.image} 
                        alt={i.t} 
                        className="w-full h-full object-cover filter brightness-110 contrast-110 drop-shadow-lg"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute inset-0 ${i.color} opacity-10 mix-blend-overlay`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Annual Savings Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row items-center justify-between rounded-3xl border border-blue-100 bg-blue-50/50 px-8 py-5 text-sm relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
              <span className="font-bold text-slate-700">Estimated Annual Maintenance Cost</span>
              <div className="flex items-center gap-4 my-2 md:my-0">
                <span className="text-2xl font-black text-slate-900 tracking-tight">₹1,800 <span className="text-xs text-slate-400">/ per year</span></span>
              </div>
              <span className="flex items-center gap-2 font-black text-blue-600 uppercase tracking-widest text-[10px] bg-white px-4 py-2 rounded-full shadow-sm">
                <TrendingDown size={14} /> You Save up to 60% with Dew
              </span>
            </motion.div>

            {/* Comparison Section (Card style) */}
            <div className="grid md:grid-cols-2 gap-6 items-stretch pt-4">
              <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full" />
                
                <div className="relative z-10">
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6">Compare & Save</div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2 text-[9px] font-black uppercase tracking-widest text-slate-500">
                        <span>Other Brands</span>
                        <span className="text-slate-400">₹4,500+</span>
                      </div>
                      <div className="h-2 flex-1 rounded-full bg-slate-800 p-[1px]">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full rounded-full bg-slate-700" 
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2 text-[9px] font-black uppercase tracking-widest text-blue-400">
                        <span>Dew Origin</span>
                        <span className="text-white">₹1,800</span>
                      </div>
                      <div className="h-2 flex-1 rounded-full bg-slate-800 p-[1px]">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "40%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-8 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                    <TrendingDown size={12} className="text-green-500" />
                    Save up to 60% every year
                  </p>
                </div>
              </div>

              {/* Service Call-to-Action Card */}
              <div className="rounded-3xl bg-blue-600 p-6 text-white flex flex-col justify-between shadow-2xl shadow-blue-600/20 group">
                <div>
                   <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Wrench size={20} />
                   </div>
                   <h3 className="text-2xl font-black tracking-tight leading-tight mb-2">
                     Experience the <br/>Dew Standard.
                   </h3>
                   <p className="text-blue-100 text-xs font-medium">Book a molecular checkup or filter replacement in seconds.</p>
                </div>
                
                <button className="mt-6 px-8 py-4 bg-white text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 active:scale-95">
                  Book Service Now <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
