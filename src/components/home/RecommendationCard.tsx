import { motion } from 'motion/react';
import { Search, ChevronRight, Sparkles } from 'lucide-react';

export default function RecommendationCard() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-950 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-[60%] h-full bg-blue-600/20 blur-[100px] rounded-full" />
          </div>

          <div className="relative z-10 space-y-6 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest">
              <Sparkles size={14} />
              Personalized Help
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Not Sure Which One <br />
              You Need?
            </h2>
            <p className="text-slate-400 text-lg">
              Take our 30-second quiz to find the perfect purifier for your water source and family size.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto">
            <button className="w-full md:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/40 flex items-center justify-center gap-3 group">
              <Search size={24} />
              Find My Purifier
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
