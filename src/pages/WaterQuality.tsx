import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  FileText, 
  CheckCircle2,
  TrendingDown,
  Info,
  Globe,
  Zap,
  Clock,
  Heart,
} from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

export default function WaterQuality() {
  const [pincode, setPincode] = useState('560034');
  const [source, setSource] = useState('Borewell Water');
  const [tds, setTds] = useState(620);

  const waterStats = [
    { label: 'Water Tests Done', value: '2,50,000+', icon: Droplets, color: 'text-blue-400' },
    { label: 'Cities Covered', value: '500+', icon: Globe, color: 'text-emerald-400' },
    { label: 'Data Privacy', value: '100%', icon: ShieldCheck, color: 'text-indigo-400' },
    { label: 'User Rating', value: '4.9/5', icon: Zap, color: 'text-orange-400' },
  ];

  const summaryData = [
    { label: 'Hardness', value: '320 ppm', status: 'Moderate', color: 'text-orange-500' },
    { label: 'Alkalinity', value: '210 ppm', status: 'Good', color: 'text-green-500' },
    { label: 'Chlorides', value: '110 ppm', status: 'Good', color: 'text-green-500' },
    { label: 'pH Level', value: '7.2', status: 'Good', color: 'text-green-500' },
    { label: 'Nitrates', value: '8 ppm', status: 'Good', color: 'text-green-500' },
  ];

  return (
    <DashboardLayout>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-6 border border-blue-500/10">
                Water Quality Checker
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                Know Your Water. <br/>
                <span className="text-blue-600">Choose What's Best.</span>
              </h1>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg mb-12">
                Check your water quality and get a personalised purifier recommendation in less than 60 seconds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: '100% Free', sub: 'No Sign Up', icon: ShieldCheck },
                  { label: 'AI-Powered', sub: 'Accurate Results', icon: Zap },
                  { label: 'Personalised', sub: 'Recommendations', icon: Heart },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                     <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <item.icon size={20} />
                     </div>
                     <div>
                        <div className="text-xs font-black text-slate-900">{item.label}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.sub}</div>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               {/* Water Splash Background */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full" />
               
               <div className="relative z-10 bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-blue-900/5 border border-slate-100">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600">
                      <Droplets size={16} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900">Start Your Water Check</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Enter Your Pincode</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-base font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                        <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Select Your Water Source</label>
                      <div className="flex gap-2">
                         <button 
                           onClick={() => setSource('Borewell Water')}
                           className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${source === 'Borewell Water' ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20' : 'bg-slate-50 text-slate-400 border-slate-100'}`}
                         >
                           Borewell Water
                         </button>
                         <button 
                           onClick={() => setSource('Municipal Water')}
                           className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${source === 'Municipal Water' ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20' : 'bg-slate-50 text-slate-400 border-slate-100'}`}
                         >
                           Municipal Water
                         </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <div className="flex justify-between mb-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        Enter TDS Level (ppm) <Info size={12} />
                      </label>
                    </div>
                    <div className="flex items-center bg-slate-50 border border-slate-100 rounded-2xl p-2">
                       <button onClick={() => setTds(prev => Math.max(0, prev - 10))} className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
                         －
                       </button>
                       <input 
                         type="number" 
                         value={tds}
                         onChange={(e) => setTds(parseInt(e.target.value) || 0)}
                         className="flex-grow bg-transparent text-center text-2xl font-black text-slate-900 focus:outline-none"
                       />
                       <button onClick={() => setTds(prev => prev + 10)} className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
                         ＋
                       </button>
                    </div>
                  </div>

                  <button className="w-full py-6 bg-blue-600 text-white rounded-[2rem] text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-95">
                    Check My Water Quality <ArrowRight size={18} />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="text-sm font-black tracking-tight leading-tight">Every drop is different. <br/><span className="text-slate-400">Every home is unique.</span></div>
            </div>
            {waterStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${stat.color}`}>
                  <stat.icon size={20} />
                </div>
                <div>
                  <div className="text-xl font-black">{stat.value}</div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Water Quality Report */}
          <div className="lg:col-span-1 bg-white rounded-[2.50rem] border border-slate-100 p-10 shadow-sm">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-black text-slate-900 tracking-tight">Your Water Quality Report</h3>
               <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-[9px] font-black tracking-widest uppercase border border-green-100">
                  Good to Moderate
               </div>
            </div>

            <div className="flex gap-4 mb-10 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Pincode: {pincode}</span>
              <span>•</span>
              <span>Source: {source}</span>
              <span>•</span>
              <span className="text-blue-600 font-black">TDS Level: {tds} ppm</span>
            </div>

            <div className="relative flex justify-center mb-10">
               {/* Simplified Speedometer */}
               <div className="relative w-48 h-24 overflow-hidden">
                  <div className="absolute inset-0 border-[16px] border-slate-100 rounded-t-full" />
                  <div 
                    className="absolute inset-0 border-[16px] border-blue-600 rounded-t-full transition-all duration-1000"
                    style={{ clipPath: `inset(0 ${100 - (tds/1000)*50}% 0 0)` }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                     <div className="text-3xl font-black text-slate-900">{tds}</div>
                     <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ppm</div>
                  </div>
               </div>
               <div className="absolute -bottom-6 w-full flex justify-between px-4 text-[8px] font-black text-slate-300 uppercase">
                  <span>0</span>
                  <span>2000+</span>
               </div>
            </div>

            <div className="space-y-4">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Water Quality Summary</div>
              {summaryData.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    <span className="text-xs font-bold text-slate-600">{item.label}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="text-xs font-black text-slate-900">{item.value}</span>
                    <span className={`text-[9px] font-black uppercase tracking-widest ${item.color}`}>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <Clock size={12} /> Last Updated: Today, 10:30 AM
            </div>
          </div>

          {/* Recommended Purifier */}
          <div className="lg:col-span-1 bg-white rounded-[2.50rem] border border-slate-100 p-10 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4">
                <div className="bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-2xl uppercase tracking-widest shadow-xl">Recommended For You</div>
             </div>
             
             <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Dew Origin Aura</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">11 Stage Purification | 10L / hr</p>
             </div>

             <div className="relative mb-8 h-64 flex justify-center">
                <div className="absolute inset-4 bg-blue-500/5 blur-[60px] rounded-full group-hover:bg-blue-500/10 transition-all" />
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                  alt="Recommended Purifier"
                  className="relative z-10 h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-all duration-500"
                />
             </div>

             <div className="space-y-4 mb-8">
                {[
                  'Ideal for TDS up to 2500 ppm',
                  'Removes 1000+ contaminants',
                  'Retains essential minerals',
                  'Smart App Monitoring',
                  'Low Maintenance Cost'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-blue-600" />
                    <span className="text-[11px] font-bold text-slate-600">{text}</span>
                  </div>
                ))}
             </div>

             <div className="flex items-center justify-between border-t border-slate-50 pt-8">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pricing</div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">₹19,999</div>
                </div>
                <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-blue-700 transition-all active:scale-95">
                  View Details
                </button>
             </div>
          </div>

          {/* Maintenance Prediction */}
          <div className="lg:col-span-1 bg-white rounded-[2.50rem] border border-slate-100 p-10 shadow-sm flex flex-col">
             <div className="mb-10">
                <h3 className="text-lg font-black text-slate-900 tracking-tight mb-1">Yearly Maintenance Prediction</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Based on your water quality</p>
             </div>

             <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100/50">
                   <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Filter Replacements</div>
                   <div className="text-2xl font-black text-slate-900">1.3</div>
                   <div className="text-[10px] text-slate-500 font-bold uppercase">per year (avg.)</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                   <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Estimated Annual Cost</div>
                   <div className="text-2xl font-black text-slate-900">₹1,800</div>
                   <div className="text-[10px] text-blue-600 font-black uppercase">with Dew Origin</div>
                </div>
             </div>

             <div className="flex-grow">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Filter Replacement Forecast</div>
                <div className="relative pt-8 pb-12">
                   <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 rounded-full -translate-y-1/2" />
                   <div className="absolute top-1/2 left-0 w-[60%] h-1 bg-blue-600 rounded-full -translate-y-1/2" />
                   
                   {[0, 3, 6, 9, 12].map((month) => (
                     <div key={month} className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${(month/12)*100}%` }}>
                        <div className={`w-3 h-3 rounded-full ${month <= 6 ? 'bg-blue-600' : 'bg-slate-200'} border-4 border-white shadow-sm`} />
                        <span className="absolute top-6 text-[9px] font-bold text-slate-400">{month}M</span>
                     </div>
                   ))}
                </div>
                
                <div className="space-y-3">
                   <div className="flex items-center justify-between text-[10px] font-bold">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <span className="text-slate-600">Sediment Filter</span>
                      </div>
                      <span className="text-slate-400 uppercase">6 Months</span>
                   </div>
                   <div className="flex items-center justify-between text-[10px] font-bold">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-slate-600">Carbon Filter</span>
                      </div>
                      <span className="text-slate-400 uppercase">12 Months</span>
                   </div>
                </div>
             </div>

             <div className="mt-10 p-6 rounded-3xl bg-green-50 border border-green-100 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-black text-green-600 uppercase tracking-widest">You Save with Dew Origin</div>
                  <div className="text-lg font-black text-green-600">₹2,700 / year</div>
                </div>
                <TrendingDown className="text-green-600" />
             </div>
          </div>
        </div>
      </section>

      {/* Consult & Capture */}
      <section className="mb-12">
        <div className="grid lg:grid-cols-2 gap-12">
           <div className="bg-white rounded-[2.5rem] border border-slate-100 p-12 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-4">Not Sure About Your Water?</h3>
                <p className="text-slate-500 font-medium mb-10 max-w-md">Let our experts help you. Get free consultation and home water testing.</p>
                
                <div className="space-y-6 mb-12">
                  {[
                    { label: 'Free tele-consultation', icon: PhoneCall },
                    { label: 'Detailed water analysis report', icon: FileText },
                    { label: 'Personalised product guidance', icon: Activity },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <item.icon size={20} />
                      </div>
                      <span className="text-sm font-bold text-slate-900">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-5 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3">
                Talk to an Expert →
              </button>
           </div>

           <div className="bg-blue-600 rounded-[2.5rem] p-12 text-white relative overflow-hidden flex flex-col">
              <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-white/10 blur-[100px] rounded-full" />
              
              <div className="relative z-10 mb-10">
                <h3 className="text-3xl font-black tracking-tighter mb-4">Get Your Personal Recommendation Report</h3>
                <p className="text-blue-100 text-sm font-medium">Enter your details and we'll send the complete report on WhatsApp / Email.</p>
              </div>

              <div className="relative z-10 space-y-4 mb-10">
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-100 mb-2 block">Your Name</label>
                    <input type="text" placeholder="Enter your name" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
                 </div>
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-100 mb-2 block">WhatsApp Number</label>
                    <input type="text" placeholder="Enter 10 digit number" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
                 </div>
              </div>

              <button className="relative z-10 w-full py-5 bg-white text-blue-600 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                 <Zap size={18} /> Send My Report →
              </button>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-[9px] font-bold text-blue-100 uppercase tracking-widest opacity-60">
                 <ShieldCheck size={12} /> We respect your privacy. Your data is 100% secure.
              </div>
           </div>
        </div>
      </section>

      {/* Trust Footer Bar */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { label: 'Accurate & Reliable', sub: 'Tested by certified labs', icon: ShieldCheck },
              { label: '100% Transparent', sub: 'No hidden assumptions', icon: Activity },
              { label: 'AI-Powered Insights', sub: 'Advanced water analysis', icon: Activity },
              { label: 'Better Water, Better Life', sub: 'For you and your family', icon: Heart },
              { label: 'Still have questions?', sub: 'Talk to our water experts', icon: PhoneCall, isAction: true },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <item.icon size={20} />
                </div>
                <div>
                   <div className="text-sm font-black tracking-tight">{item.label}</div>
                   <div className="text-[10px] font-medium text-slate-500">{item.sub}</div>
                </div>
                {item.isAction && (
                   <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors self-start">Chat Now</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
