import { motion } from 'motion/react';
import { Apple, Play, Smartphone } from 'lucide-react';

export default function SpecsSection() {
  const specs = [
    ["Purification Capacity", "7 Litres / Hour"],
    ["Storage Capacity", "7 Litres"],
    ["Power Consumption", "22 Watts"],
    ["Input Water Pressure", "0.3 - 3.0 kg/cm²"],
    ["Input Water Temperature", "5°C - 45°C"],
    ["Product Dimensions", "(W) 29cm x (D) 24cm x (H) 49cm"],
  ];

  return (
    <section className="bg-white pb-16 pt-8">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        {/* Specifications Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-10 relative overflow-hidden group hover:bg-white transition-colors duration-500 hover:shadow-2xl hover:shadow-blue-900/5"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
          <h3 className="mb-8 text-xl font-black text-slate-900 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600">
              <Smartphone size={16} />
            </div>
            Technical Specifications
          </h3>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {specs.map(([k, v]) => (
              <div key={k} className="space-y-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{k}</div>
                <div className="text-sm font-black text-slate-800">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Smart App Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-10 text-white shadow-2xl flex flex-col justify-between"
        >
          <div className="absolute right-[-10%] top-[-10%] h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-black tracking-widest uppercase mb-6 border border-blue-500/20">
              Connected Ecosystem
            </div>
            <h3 className="text-4xl font-black leading-tight tracking-tighter mb-4">
              Smart Water.<br />
              <span className="text-blue-400">Smarter Living.</span>
            </h3>
            <p className="max-w-md text-sm text-slate-400 font-medium leading-relaxed">
              Connect your purifier to the Dew Origin app. Monitor real-time quality, track consumption, and manage health effortlessly.
            </p>
          </div>

          <div className="relative mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-3 rounded-2xl bg-white text-slate-900 px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 shadow-xl">
              <Apple size={18} className="fill-current" /> App Store
            </button>
            <button className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 backdrop-blur-md">
              <Play size={18} className="fill-blue-400 text-blue-400" /> Google Play
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
