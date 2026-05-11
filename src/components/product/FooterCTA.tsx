import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-slate-100" />
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-blue-800 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(30,58,138,0.3)]"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[0%] w-96 h-96 bg-cyan-400/20 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-8">
              Experience the next level <br/>of water purity.
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-black/10 hover:bg-slate-100 transition-all flex items-center justify-center gap-3 active:scale-95">
                Buy Dew Origin Aura <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto px-10 py-6 border-2 border-white/30 text-white rounded-3xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-3 active:scale-95">
                 <MessageSquare size={18} /> Book a Free Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
