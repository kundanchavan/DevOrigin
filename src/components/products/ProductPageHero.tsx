import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Wrench,
  BadgeCheck,
  Truck,
  Activity,
  Droplet,
  Signal,
} from "lucide-react";

// Fallback high-quality image URL
const purifierHero = "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1024";

const trustBadges = [
  { icon: BadgeCheck, label: "Genuine Products" },
  { icon: Wrench, label: "Pay Only for What You Replace" },
  { icon: ShieldCheck, label: "Verified Technicians" },
  { icon: Truck, label: "Doorstep Service" },
];

export default function ProductPageHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-20">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 radial-glow opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-3 py-1 text-xs font-medium text-white">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-blue-500" />
              India's Most Transparent Water Brand
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Pure Water. <br />
              <span className="text-gradient-blue">True Transparency.</span>{" "}
              <br />
              Total Peace of Mind.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Smart RO water purifiers built for honest pricing. No forced AMC,
              no hidden charges — just clean, monitored water and service you
              can actually trust.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:translate-y-[-2px] hover:shadow-blue-500/40">
                Explore Purifiers
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-blue-500 hover:text-blue-500 backdrop-blur-sm">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-500/10 text-blue-500">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                Watch How It Works
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustBadges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex flex-col items-start gap-2"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-blue-400">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-medium leading-tight text-slate-300">
                    {b.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto h-[560px] w-full max-w-[560px]"
          >
            {/* glow backdrop */}
            <div className="absolute inset-10 rounded-[40px] bg-gradient-to-br from-blue-900 to-[#050816]" />
            <div className="absolute inset-10 rounded-[40px] bg-blue-500/20 blur-3xl" />

            {/* product */}
            <motion.img
              src={purifierHero}
              alt="Smart water purifier"
              width={1024}
              height={1024}
              className="relative z-10 mx-auto h-full w-auto object-contain drop-shadow-2xl animate-float-slow"
              referrerPolicy="no-referrer"
            />

            {/* phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute left-0 top-16 z-20 w-44 rounded-[22px] glass-dark p-3 text-white shadow-2xl animate-float"
            >
              <div className="flex items-center justify-between text-[10px] text-white/60">
                <span>Aquora App</span>
                <Signal className="h-3 w-3 text-blue-400" />
              </div>
              <div className="mt-2 rounded-xl bg-blue-500/10 p-3">
                <div className="text-[10px] uppercase tracking-wider text-blue-400">TDS Level</div>
                <div className="mt-1 font-display text-2xl font-bold text-white">42 <span className="text-xs text-white/50">ppm</span></div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
                </div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-[10px]">
                <div className="rounded-lg bg-white/5 p-2">
                  <div className="text-white/50">Filter</div>
                  <div className="font-semibold">87%</div>
                </div>
                <div className="rounded-lg bg-white/5 p-2">
                  <div className="text-white/50">Used</div>
                  <div className="font-semibold">12.4L</div>
                </div>
              </div>
            </motion.div>

            {/* glass of water */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-12 right-2 z-20 animate-float"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-2xl" />
                <div className="relative h-28 w-20 rounded-b-3xl rounded-t-lg border border-white/40 bg-gradient-to-b from-white/30 to-blue-500/30 backdrop-blur-md">
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 rounded-b-3xl bg-gradient-to-b from-blue-400/60 to-blue-600/80">
                    <Droplet className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* feature card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-0 left-0 z-20 w-64 rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                <Activity className="h-3 w-3" />
                Why Aquora
              </div>
              <div className="mt-2 text-sm font-bold text-slate-900">
                India's Most Transparent Water Purifier Brand
              </div>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-500">
                {["No Forced AMC", "No Hidden Charges", "Genuine Parts Always", "Real-time App Monitoring"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <BadgeCheck className="h-3 w-3 text-blue-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
