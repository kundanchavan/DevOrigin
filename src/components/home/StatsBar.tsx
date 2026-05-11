import React from 'react';
import { motion } from 'motion/react';
import { Home, MapPin, CheckCircle, Users, Headphones } from 'lucide-react';

interface StatItemProps {
  icon: any;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({
  icon: Icon,
  value,
  label,
}) => (
  <div className="flex items-center gap-3 px-4 py-2 border-r border-white/5 last:border-r-0 flex-1 min-w-[140px]">
    
    {/* Icon */}
    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 transition-all duration-300 hover:bg-blue-500 hover:text-white">
      <Icon size={16} />
    </div>

    {/* Text */}
    <div className="leading-tight">
      <div className="text-base md:text-lg font-bold text-white">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-wider text-slate-400">
        {label}
      </div>
    </div>
  </div>
);

export default function StatsBar() {
  const stats = [
    { icon: Home, value: '250,000+', label: 'Purifiers in Homes' },
    { icon: MapPin, value: '500+', label: 'Cities Covered' },
    { icon: CheckCircle, value: '100%', label: 'Genuine & Tested' },
    { icon: Users, value: '600+', label: 'Expert Technicians' },
    { icon: Headphones, value: '24/7', label: 'Priority Support' },
  ];

  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 border border-white/10 rounded-3xl shadow-2xl px-3 py-2 md:px-5 md:py-3 flex flex-wrap justify-between items-center overflow-hidden backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none" />

        {stats.map((stat, i) => (
          <StatItem
            key={i}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </motion.div>
    </div>
  );
}