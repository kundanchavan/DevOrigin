import { motion } from 'motion/react';
import { Layers, Target, Zap, Volume2, Droplets } from 'lucide-react';

export default function DetailStats() {
  const stats = [
    { icon: Layers, label: "Purification", value: "11 Stage", desc: "Molecular Grade" },
    { icon: Target, label: "RO Precision", value: "0.0001", desc: "Micron Sifting" },
    { icon: Zap, label: "Power", value: "22W", desc: "Eco Consumption" },
    { icon: Volume2, label: "Noise", value: "<45 dB", desc: "Ultra Silent" },
    { icon: Droplets, label: "Capacity", value: "7L/hr", desc: "Fast Output" }
  ];

  return (
    <section className="relative z-20 -mt-16 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_20px_50px_rgba(30,58,138,0.05)] flex flex-col items-center text-center group hover:scale-[1.02] transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <stat.icon size={18} strokeWidth={2.5} />
              </div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{stat.label}</p>
              <h4 className="text-xl font-black text-slate-900 mb-1">{stat.value}</h4>
              <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
