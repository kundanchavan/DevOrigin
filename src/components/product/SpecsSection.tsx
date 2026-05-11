import { motion } from 'motion/react';

export default function SpecsSection() {
  const specs = [
    { label: "Dimensions", value: "450 x 250 x 380 mm" },
    { label: "Weight", value: "8.2 kg" },
    { label: "Power Consumption", value: "24 Watts" },
    { label: "Storage Tank Capacity", value: "7 Liters" },
    { label: "Inlet Water Pressure", value: "0.3 - 3.0 kg/cm²" },
    { label: "Input Voltage", value: "110-240V AC" },
    { label: "Filtration Flow Rate", value: "15 LPH" },
    { label: "Purification Level", value: "Molecular Grade" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                Technical <br/><span className="text-blue-600">Precision.</span>
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Every dimension and specification is engineered for performance. From the compact footprint to the high-throughput pumping system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {specs.map((spec, i) => (
                <div key={i} className="border-b border-slate-100 pb-3">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{spec.label}</p>
                  <p className="text-base font-black text-slate-900">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="relative pt-20"
          >
            <div className="absolute top-0 right-[-10%] w-full h-full bg-blue-500/5 blur-[120px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1000" 
              alt="Dimensions" 
              className="relative z-10 w-full h-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Dimensions Overlay */}
            <div className="absolute top-[20%] left-0 w-full flex justify-between px-4 z-20 pointer-events-none">
               <div className="h-px bg-blue-500 flex-grow relative">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-600" />
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-600" />
                 <span className="absolute left-1/2 -top-6 -translate-x-1/2 text-[10px] font-black text-blue-600 uppercase tracking-widest">450mm</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
