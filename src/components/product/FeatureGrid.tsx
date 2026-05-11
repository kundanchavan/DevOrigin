import { motion } from 'motion/react';
import { Gauge, Smartphone, AlertTriangle, Lock } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    { 
      icon: Gauge, 
      title: "Real-time TDS Monitoring", 
      desc: "Live molecular feedback via the onboard display and mobile app. Never guess your water quality again.",
      color: "bg-blue-500"
    },
    { 
      icon: Smartphone, 
      title: "Smart App Connectivity", 
      desc: "Remote monitoring, usage statistics, and filter life updates. Your purifier is now part of your smart home ecosystem.",
      color: "bg-cyan-500"
    },
    { 
      icon: AlertTriangle, 
      title: "Auto Filter Life Alerts", 
      desc: "Predictive maintenance algorithms alert you before performance drops, ensuring consistent purity.",
      color: "bg-blue-600"
    },
    { 
      icon: Lock, 
      title: "Child Lock Protection", 
      desc: "Safety first design prevents accidental dispensing, making it the perfect choice for families with young children.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 overflow-hidden transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 hover:border-blue-100"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 ${feature.color}/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl ${feature.color}/10 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight max-w-xs">{feature.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
                
                <div className="mt-12 flex items-center gap-4">
                  <div className={`h-1 flex-grow rounded-full bg-slate-200`}>
                     <div className={`h-full w-0 group-hover:w-full transition-all duration-1000 rounded-full ${feature.color}`} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Activated</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
