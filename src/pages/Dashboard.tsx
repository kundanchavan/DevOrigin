import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplet, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2,
  Clock,
  Smartphone,
  HelpCircle,
  Plus,
  TrendingDown,
  Wrench,
  AlertCircle,
  Settings
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import DashboardLayout from '../components/dashboard/DashboardLayout';

// Mock Data
const tdsData = [
  { time: '12 AM', value: 8 },
  { time: '3 AM', value: 12 },
  { time: '6 AM', value: 10 },
  { time: '9 AM', value: 9 },
  { time: '12 PM', value: 11 },
  { time: '3 PM', value: 7 },
  { time: '6 PM', value: 13 },
  { time: '9 PM', value: 10 },
];

const usageData = [
  { day: '1 May', liters: 40 },
  { day: '8 May', liters: 30 },
  { day: '15 May', liters: 55 },
  { day: '22 May', liters: 45 },
  { day: '29 May', liters: 65 },
];

const savingsData = [
  { name: 'Dew Origin', value: 1800, color: '#3b82f6' },
  { name: 'Others', value: 4500, color: '#e2e8f0' },
];

const filters = [
  { name: 'Sediment Filter', life: 85, status: 'Good', color: '#10b981' },
  { name: 'Carbon Filter', life: 65, status: 'Good', color: '#10b981' },
  { name: 'RO Membrane', life: 93, status: 'Excellent', color: '#10b981' },
  { name: 'Post Carbon Filter', life: 80, status: 'Good', color: '#10b981' },
  { name: 'UV e-Boiling', life: 92, status: 'Excellent', color: '#10b981' },
];

const alerts = [
  { title: 'Service Reminder', desc: 'Your next service is due in 45 days', date: '24 Jun 2024', icon: Clock, color: 'bg-blue-50 text-blue-600' },
  { title: 'Carbon Filter Life', desc: 'Carbon Filter will require replacement in ~60 days', date: '1 Aug 2024', icon: Droplet, color: 'bg-orange-50 text-orange-600' },
  { title: 'AMC Renewal', desc: 'Your AMC is due for renewal in 30 days', date: '9 Jun 2024', icon: Clock, color: 'bg-blue-50 text-blue-600' },
];

const serviceHistory = [
  { type: 'RO Membrane Replacement', tech: 'Rahul Kumar', date: '24 May 2024', status: 'Completed' },
  { type: 'General Service', tech: 'Ajith Kumar', date: '24 Apr 2024', status: 'Completed' },
  { type: 'Installation', tech: 'Rahul Kumar', date: '24 Mar 2024', status: 'Completed' },
];

const familyMembers = [
  { name: 'Arjun Sharma', role: 'You', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
  { name: 'Neha Sharma', role: 'Wife', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
  { name: 'Aarav Sharma', role: 'Son', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100' },
  { name: 'Dadi', role: 'Mother', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100' },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
        {/* Charts & Status Grid */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-6 mb-8">
          {/* Live Water Quality */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">Live Water Quality</h3>
                <HelpCircle size={14} className="text-slate-300" />
              </div>
              <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 border border-green-100">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Excellent
              </div>
            </div>

            <div className="flex items-end gap-3 mb-8">
               <div className="text-6xl font-black text-slate-900 tracking-tighter">006</div>
               <div className="mb-3">
                 <div className="text-xs font-black text-blue-600">TDS</div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ppm</div>
               </div>
               <div className="ml-auto text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                 Real-time TDS from your purifier
               </div>
            </div>

            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tdsData}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '10px', fontWeight: 'bold' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3b82f6" 
                    strokeWidth={4} 
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4, stroke: '#fff' }}
                    activeDot={{ r: 6, fill: '#3b82f6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Filter Life Status */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col">
            <div className="mb-8">
              <h3 className="text-lg font-black text-slate-900 tracking-tight mb-1">Filter Life Status</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Know life of each filter in real time</p>
            </div>

            <div className="flex-grow space-y-6">
              {filters.map((filter) => (
                <div key={filter.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold text-slate-600">{filter.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-slate-900">{filter.life}%</span>
                      <span className="text-[9px] font-black text-green-500 uppercase">{filter.status}</span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${filter.life}%` }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: filter.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 w-full py-3.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2">
              🛒 Buy Genuine Filters →
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Upcoming Alerts */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-black text-slate-900 tracking-tight">Upcoming Alerts</h3>
              <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest">View All</button>
            </div>
            <div className="space-y-4">
              {alerts.map((alert, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-50 shadow-sm flex gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${alert.color}`}>
                    <alert.icon size={20} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-black text-slate-900 truncate">{alert.title}</h4>
                      <span className="text-[9px] font-bold text-slate-400 shrink-0">{alert.date}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">{alert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Overview */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="mb-8">
              <h3 className="text-lg font-black text-slate-900 tracking-tight">Usage Overview</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">This Month</p>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Droplet size={24} />
              </div>
              <div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Water Purified</div>
                 <div className="flex items-baseline gap-2">
                   <span className="text-3xl font-black text-slate-900 tracking-tight">1,260</span>
                   <span className="text-lg font-black text-slate-900">L</span>
                   <span className="text-[10px] font-black text-green-500">↓ 8% <span className="text-slate-400 uppercase">vs last month</span></span>
                 </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-8 px-2">
               <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Daily Average</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-black text-slate-900">42</span>
                    <span className="text-xs font-black text-slate-900">L</span>
                  </div>
               </div>
               <div className="h-12 w-full max-w-[200px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={usageData}>
                       <Bar dataKey="liters" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                    </BarChart>
                 </ResponsiveContainer>
               </div>
            </div>
          </div>

          {/* AMC & Cost Savings */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
             <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">AMC & Cost Savings</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">All your spending in one place</p>
                </div>
                <div className="relative">
                  <button className="text-[10px] font-black text-slate-500 flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    This Year <TrendingDown size={10} />
                  </button>
                </div>
             </div>

             <div className="flex items-center gap-8 mb-8">
                <div className="relative h-32 w-32 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={savingsData}
                        innerRadius={45}
                        outerRadius={60}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {savingsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-[9px] font-black text-slate-400 uppercase">You Saved</div>
                    <div className="text-sm font-black text-slate-900 tracking-tighter">₹2,700 <br/><span className="text-[8px] text-blue-500 uppercase">with Dew Origin</span></div>
                  </div>
                </div>

                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-blue-500" />
                     <div>
                       <div className="text-[9px] font-bold text-slate-500 uppercase">Total Spent (This Year)</div>
                       <div className="font-black text-slate-900">₹1,800</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-slate-200" />
                     <div>
                       <div className="text-[9px] font-bold text-slate-500 uppercase">Avg. Spent with Others</div>
                       <div className="font-black text-slate-400">₹4,500</div>
                     </div>
                   </div>
                   <div className="px-4 py-2 rounded-xl bg-green-50 border border-green-100">
                      <div className="text-[9px] font-black text-green-600 uppercase tracking-widest">You Save</div>
                      <div className="text-sm font-black text-green-600 tracking-tight">₹2,700 (60%)</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Info Rows */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-6">
           <div className="space-y-6">
             {/* Smart Tip */}
             <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full" />
                <div className="relative z-10 flex items-center justify-between">
                   <div className="flex items-start gap-6 max-w-xl">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                         <AlertCircle size={24} />
                      </div>
                      <div>
                         <h4 className="text-lg font-black tracking-tight mb-2">Smart Tip for You</h4>
                         <p className="text-slate-400 text-sm leading-relaxed mb-6">Your water quality is excellent! Continue regular filter changes to keep your family safe and healthy.</p>
                         <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                               <Clock size={16} className="text-blue-400" /> Book Service <span className="text-slate-500 ml-1">Schedule a visit</span>
                            </button>
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                               <BarChart3 size={16} className="text-blue-400" /> Track Technician <span className="text-slate-500 ml-1">Live tracking</span>
                            </button>
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                               <Smartphone size={16} className="text-blue-400" /> Buy Filters <span className="text-slate-500 ml-1">Genuine filters</span>
                            </button>
                         </div>
                      </div>
                   </div>
                   <button className="px-6 py-3 border border-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors shrink-0">
                      View Tips →
                   </button>
                </div>
             </div>

             {/* Service History */}
             <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-lg font-black text-slate-900 tracking-tight">Service History</h3>
                   <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest">View All</button>
                </div>
                <div className="space-y-4">
                   {serviceHistory.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                               <Wrench size={18} />
                            </div>
                            <div>
                               <div className="text-sm font-black text-slate-900">{item.type}</div>
                               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Technician: {item.tech}</div>
                            </div>
                         </div>
                         <div className="text-right">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.date}</div>
                            <div className="text-[9px] font-black text-green-600 uppercase tracking-widest">{item.status}</div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
           </div>

           {/* Family Access */}
           <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-black text-slate-900 tracking-tight">Family Access</h3>
               <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest">View All</button>
             </div>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Manage who can access your purifier</p>
             
             <div className="flex flex-wrap gap-6 justify-center flex-grow items-center">
                {familyMembers.map((member) => (
                  <div key={member.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-xl saturate-50 group-hover:saturate-100 transition-all">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="text-center">
                       <div className="text-xs font-black text-slate-900">{member.name}</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase">{member.role === 'You' ? <span className="text-blue-600">You</span> : member.role}</div>
                    </div>
                  </div>
                ))}
                <button className="group flex flex-col items-center gap-2 cursor-pointer">
                   <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300 group-hover:border-blue-400 group-hover:text-blue-400 transition-all shadow-sm bg-white">
                      <Plus size={24} />
                   </div>
                   <div className="text-center">
                       <div className="text-xs font-black text-slate-900">Add Member</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase">Admin Only</div>
                   </div>
                </button>
             </div>

             <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                   <ShieldCheck className="text-blue-500" size={20} />
                   <h4 className="text-xs font-black text-slate-900 tracking-tight">Access Control</h4>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed">Only authorized family members can monitor water quality and manage service requests.</p>
             </div>
           </div>
        </div>
    </DashboardLayout>
  );
}
