import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Droplets, Calendar } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

export default function UsageAnalytics() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-8">Usage Analytics</h1>
        <div className="grid lg:grid-cols-4 gap-8">
           <div className="lg:col-span-1 space-y-8">
              {[
                { label: 'Weekly Consumption', value: '294 L', icon: Droplets, trend: '+4%' },
                { label: 'Monthly Saving', value: '₹1,200', icon: TrendingUp, trend: '+12%' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <stat.icon size={24} />
                   </div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                   <div className="text-3xl font-black text-slate-900 mb-2">{stat.value}</div>
                   <div className="text-[10px] font-black text-green-500 uppercase tracking-widest">{stat.trend} vs last period</div>
                </div>
              ))}
           </div>
           
           <div className="lg:col-span-3">
              <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm h-full flex flex-col">
                 <div className="flex items-center justify-between mb-12">
                    <h3 className="text-xl font-black text-slate-900">Consumption Trends</h3>
                    <div className="flex gap-2">
                       {['Day', 'Week', 'Month', 'Year'].map((tab) => (
                         <button key={tab} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'Week' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-50 text-slate-400 hover:text-slate-900'}`}>
                           {tab}
                         </button>
                       ))}
                    </div>
                 </div>
                 <div className="flex-grow flex items-center justify-center text-slate-300 font-bold border-2 border-dashed border-slate-100 rounded-[2rem]">
                    Chart Placeholder
                 </div>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
