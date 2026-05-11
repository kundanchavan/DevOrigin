import { motion } from 'motion/react';
import { BadgeCheck, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

export default function MaintenancePricing() {
  const parts = [
    { name: "Sediment Filter", price: 250, desc: "Replace every 6 months" },
    { name: "Carbon Filter", price: 350, desc: "Replace every 6 months" },
    { name: "RO Membrane", price: 1200, desc: "Replace every 12-18 months" },
    { name: "Post Carbon", price: 300, desc: "Replace every 12 months" },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase mb-8 border border-blue-600/20">
                Transparent Pricing
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                Maintenance <br/><span className="text-blue-600">Simplified.</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed font-medium">
                No forced AMCs. No hidden service charges. Pay only for the genuine parts you replace with India's most transparent pricing model.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Wrench, label: "No Forced AMC Plans" },
                { icon: BadgeCheck, label: "100% Genuine Certified Parts" },
                { icon: ShieldCheck, label: "Verified Service Engineers" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600">
                    <item.icon size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {parts.map((part, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-lg font-black text-slate-900">{part.name}</h4>
                    <div className="text-2xl font-black text-blue-600">₹{part.price}</div>
                  </div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">{part.desc}</p>
                  
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest border-t border-slate-100 pt-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Genuine OEM Certified
                  </div>
                </motion.div>
              ))}
              
              <div className="sm:col-span-2 p-8 rounded-[2.5rem] bg-blue-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-600/30">
                <div>
                   <h4 className="text-xl font-black mb-1">Service Visit</h4>
                   <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Doorstep Engineer Support</p>
                </div>
                <div className="flex items-center gap-6">
                   <div className="text-4xl font-black uppercase">Free</div>
                   <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-colors flex items-center gap-2 active:scale-95">
                     Book Now <ArrowRight size={14} />
                   </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
