import { motion } from 'framer-motion';
import { ShieldCheck, Activity, AlertCircle } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

export default function PurifierHealth() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-8">Purifier Health</h1>
        <div className="grid lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
                       <ShieldCheck size={32} />
                    </div>
                    <div>
                       <div className="text-2xl font-black text-slate-900">All Systems Normal</div>
                       <div className="text-sm font-medium text-slate-500">Last scanned: 2 minutes ago</div>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Pump Pressure', value: '3.2 bar', status: 'Stable', icon: Activity },
                      { label: 'Input TDS', value: '450 ppm', status: 'Optimal', icon: Activity },
                      { label: 'UV Lamp', value: 'Active', status: 'Healthy', icon: Activity },
                      { label: 'Battery Backup', value: '98%', status: 'Normal', icon: Activity },
                    ].map((item, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <item.icon size={18} className="text-blue-500" />
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{item.label}</span>
                         </div>
                         <div className="text-right">
                            <div className="text-sm font-black text-slate-900">{item.value}</div>
                            <div className="text-[10px] font-black text-green-500 uppercase">{item.status}</div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                 <div>
                    <AlertCircle size={40} className="text-blue-400 mb-6" />
                    <h3 className="text-2xl font-black mb-4">Preventive Maintenance</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Regular checkups can extend your purifier's life by up to 2 years.</p>
                 </div>
                 <button className="mt-8 py-5 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                   Run Advanced Diagnostic
                 </button>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
