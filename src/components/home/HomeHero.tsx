import { motion } from 'motion/react';
import { ChevronRight, Play, ShieldCheck, CreditCard, UserCheck, Truck, Smartphone, Droplets, Zap, CheckCircle2 } from 'lucide-react';

const TrustBadge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
    <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
      <Icon size={14} />
    </div>
    <span className="text-[10px] sm:text-xs font-medium text-slate-300 whitespace-nowrap">{text}</span>
  </div>
);

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
      <CheckCircle2 size={12} />
    </div>
    <span className="text-sm text-slate-300 font-medium">{text}</span>
  </div>
);

export default function HomeHero() {
  return (
    <section className="relative min-h-[40vh] flex flex-col justify-center bg-slate-950 overflow-hidden pt-20 pb-10">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left Side: Content */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Pure Water. <br />
              <span className="text-blue-500">True Transparency.</span> <br />
              Total Peace of Mind.
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-xl font-medium leading-relaxed">
              Experience the next generation of smart RO water purifiers. Honest pricing, real-time tracking, and a commitment to your health—with absolutely no hidden charges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-base hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25 flex items-center gap-2 group">
              Explore Purifiers
              <ChevronRight size={18} />
            </button>
            <button className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-base hover:bg-white/10 transition-all flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Play size={14} className="fill-white" />
              </div>
              Watch How It Works
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
          >
            <TrustBadge icon={ShieldCheck} text="Genuine Products" />
            <TrustBadge icon={CreditCard} text="Pay Only for Parts" />
            <TrustBadge icon={UserCheck} text="Verified Techs" />
            <TrustBadge icon={Truck} text="Doorstep Service" />
          </motion.div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative">
          <motion.div
            animate={{ scale: 1, rotateX: 0 }}
            className="relative z-20 flex justify-center"
          >
            {/* Main Product Image (Purifier) */}
            <div className="relative group">
              <div className="absolute -inset-20 bg-blue-600/20 blur-[100px] rounded-full opacity-50 pointer-events-none" />
              <motion.img 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=800"
                alt="Premium Smart Purifier"
                className="w-full max-w-[450px] h-auto object-contain relative z-10 filter drop-shadow(0 20px 30px rgba(0,0,0,0.5))"
                referrerPolicy="no-referrer"
              />
              {/* Product Reflection */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-blue-600/10 blur-3xl rounded-full opacity-50" />
            </div>

            {/* Smartphone UI Mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-[20%] w-32 md:w-40 z-30"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-[1.5rem] p-2 shadow-2xl overflow-hidden aspect-[9/19]">
                <div className="w-full h-full bg-blue-950 rounded-[1rem] p-3 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[8px] text-blue-400 font-bold uppercase">
                    <span>Live TDS</span>
                    <Zap size={8} />
                  </div>
                  <div className="text-xl font-black text-white">12</div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-green-400" />
                  </div>
                  <div className="mt-auto space-y-2">
                    <div className="w-full h-4 bg-white/5 rounded-md" />
                    <div className="w-2/3 h-4 bg-blue-600 rounded-md" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Glowing Glass Effect */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-[10%] z-30"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/40 blur-2xl rounded-full animate-pulse" />
                <div className="w-24 h-32 md:w-32 md:h-44 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl relative overflow-hidden flex flex-col items-center justify-end p-4">
                  <Droplets size={40} className="text-blue-400 mb-4 animate-bounce" />
                  <div className="w-full h-1/2 bg-blue-500/30 rounded-t-lg backdrop-blur-sm" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Transparency Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-10 right-0 lg:-right-10 z-40 w-full max-w-[320px]"
          >
            <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl shadow-black/50 space-y-5">
              <div className="space-y-1">
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">Excellence</span>
                <h3 className="text-white font-bold text-lg leading-tight">
                  India’s Most Transparent Water Purifier Brand
                </h3>
              </div>
              <div className="space-y-3 pb-2">
                <FeatureItem text="No Forced AMC Plans" />
                <FeatureItem text="Zero Hidden Charges" />
                <FeatureItem text="100% Genuine Spare Parts" />
                <FeatureItem text="Live App Monitoring" />
              </div>
              <div className="pt-2 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-6 h-6 rounded-full border border-slate-900" alt="user" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">Trusted by 2.5L+ Households</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
