import { motion } from 'framer-motion';
import { Microscope, Globe, Award, Leaf, Search, Droplet } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Globe, title: 'Global Impact', desc: 'Reducing plastic waste by 40M tons through domestic high-efficiency filtration.' },
    { icon: Microscope, title: 'Swiss Precision', desc: 'Engineered in Zurich with the highest standards of physical and chemical security.' },
    { icon: Leaf, title: 'Eco-System', desc: 'Zero-waste membrane technology that uses 80% less water than traditional RO.' }
  ];

  const steps = [
    { title: 'Mechanical Capture', desc: '5-micron sediment removal for visible purity.' },
    { title: 'Molecular Shift', desc: 'Active carbon bonding to remove chlorine and organic toxins.' },
    { title: 'Reverse Osmosis', desc: 'The 0.0001µ barrier for bacteria, viruses, and heavy metals.' },
    { title: 'Bio-Vitality', desc: 'Infusing essential minerals and correcting pH balance.' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Narrative Hero */}
      <section className="py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 flex items-center gap-2">
              <Award size={14} /> Established 2012
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Redefining the <span className="text-blue-600 italic">Essence</span> of Life.
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              AQUAPURE began with a simple observation: tap water is a chemical soup. Our founders, former biotech engineers, spent 4 years developing the "Matrix" membrane—a filtration system that replicates the natural purification cycles of the Swiss Alps.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">14</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400">Patents</div>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="text-center">
                <div className="text-3xl font-bold">28</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400">Countries</div>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="text-center">
                <div className="text-3xl font-bold">5M+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400">Pure Liters</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1548919973-5cdf5916ad52?auto=format&fit=crop&q=80&w=800" 
                alt="Water science" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white scale-110 shadow-xl">
              <Droplet size={40} className="mb-2" />
              <div className="text-xs font-bold uppercase tracking-widest text-center px-4">9-Stage Certification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white rounded-3xl shadow-md flex items-center justify-center text-blue-600 mx-auto mb-8">
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4 text-center">The Modular Process</h2>
            <p className="text-slate-500 text-center max-w-xl mx-auto">Science-driven filtration that evolves with your water quality.</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group hover:border-blue-200 hover:shadow-xl transition-all"
                >
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 absolute -top-5 left-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    0{i+1}
                  </div>
                  <h4 className="text-xl font-bold mb-4 mt-2">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Marquee */}
      <section className="py-12 bg-white flex flex-col items-center">
         <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-300 mb-8">Verified By Global Standards</div>
         <div className="flex gap-16 grayscale opacity-30 items-center justify-center flex-wrap">
            <div className="flex items-center gap-2 text-2xl font-black italic">NSF/ANSI</div>
            <div className="flex items-center gap-2 text-2xl font-black italic">WQA GOLD</div>
            <div className="flex items-center gap-2 text-2xl font-black italic">FDA REG.</div>
            <div className="flex items-center gap-2 text-2xl font-black italic">ISO 14001</div>
            <div className="flex items-center gap-2 text-2xl font-black italic">CE COMP.</div>
         </div>
      </section>
    </div>
  );
}
