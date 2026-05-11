import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function ShaderShowcase({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={cn("relative w-full h-full overflow-hidden bg-slate-950", className)}>
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>

      {isVisible && (
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#020617", "#1e40af", "#3b82f6", "#1e3a8a", "#0ea5e9"]}
          speed={0.2}
        />
      )}

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="text-blue-400 text-sm font-medium tracking-wide">
              ✨ Next-Gen Water Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tighter"
          >
            Purity Without <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-600 animate-gradient-x"> Compromise</span>
          </motion.h1>

          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.7 }}
             transition={{ duration: 1, delay: 0.6 }}
             className="text-lg md:text-xl text-white font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Advanced molecular filtration technology meeting Swiss precision. 
            Experience water in its most vital form.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 pointer-events-auto"
          >
            <button className="px-8 py-4 rounded-full bg-white text-blue-900 font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/20">
              Explore Products
            </button>
            <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all">
              Our Technology
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-30">
        <div className="relative w-24 h-24 flex items-center justify-center">
          {isVisible && (
            <PulsingBorder
              colors={["#3b82f6", "#2563eb", "#60a5fa", "#ffffff", "#1e40af"]}
              colorBack="#00000000"
              speed={1.5}
              roundness={1}
              thickness={0.08}
              softness={0.2}
              intensity={3}
              spots={3}
              spotSize={0.1}
              pulse={0.1}
              smoke={0.3}
              smokeSize={3}
              scale={0.7}
              rotation={0}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
            />
          )}

          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transform: "scale(1.8)" }}
          >
            <defs>
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            <text className="text-[10px] fill-white/40 font-bold uppercase tracking-widest">
              <textPath href="#circlePath" startOffset="0%">
                Dew Origin • Swiss Purity • Radical Design • Dew Origin • Swiss Purity • Radical Design •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
