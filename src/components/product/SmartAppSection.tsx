import { motion } from 'motion/react';
import { Apple, Play, Droplet } from 'lucide-react';

export default function SmartAppSection() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase border border-blue-600/20">
                Connected Living
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                Smart Water. <br/><span className="text-blue-600">Smarter Living.</span>
              </h2>
              <p className="text-slate-500 text-base font-medium leading-relaxed max-w-xl">
                The Dew Origin app gives you full control over your hydration. Monitor quality, track usage, and manage filter health from anywhere in the world.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.1em] flex items-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                <Apple size={20} className="fill-current" /> Download for iOS
              </button>
              <button className="px-8 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-[0.1em] flex items-center gap-3 hover:bg-slate-50 transition-all shadow-sm active:scale-95">
                <Play size={20} className="fill-blue-600 text-blue-600" /> Get it on Android
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
            
            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 5 }}
              whileInView={{ opacity: 1, y: 30, rotate: -5 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 mx-auto w-64 md:w-80 h-[500px] md:h-[650px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-800 shadow-[0_50px_100px_rgba(30,58,138,0.15)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-8 flex items-center justify-center">
                 <div className="w-16 h-4 bg-slate-800 rounded-full" />
              </div>
              <div className="w-full h-full bg-white p-6 pt-12 space-y-6">
                 <div className="space-y-1">
                   <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Water Quality</p>
                   <h4 className="text-3xl font-black text-slate-900">42 ppm</h4>
                 </div>
                 <div className="h-40 bg-blue-600/5 rounded-2xl border border-blue-600/10 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-blue-500/10 blur-2xl" />
                    <Droplet size={48} className="text-blue-600 animate-bounce" />
                 </div>
                 <div className="space-y-4">
                    <div className="h-16 bg-slate-50 rounded-2xl flex items-center justify-between px-6 border border-slate-100">
                       <span className="text-xs font-bold text-slate-500">Filter Health</span>
                       <span className="text-base font-black text-green-500">88%</span>
                    </div>
                    <div className="h-16 bg-slate-50 rounded-2xl flex items-center justify-between px-6 border border-slate-100">
                       <span className="text-xs font-bold text-slate-500">Total Filtered</span>
                       <span className="text-base font-black text-blue-600">422L</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
