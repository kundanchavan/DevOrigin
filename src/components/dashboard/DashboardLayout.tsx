import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Droplet, 
  ShieldCheck, 
  BarChart3, 
  Wrench, 
  CreditCard, 
  History, 
  Bell, 
  UserPlus, 
  Settings, 
  LayoutDashboard,
  ChevronDown,
  Monitor,
  HelpCircle,
  TrendingDown
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: Droplet, label: 'Water Quality', path: '/dashboard/water-quality' },
  { icon: ShieldCheck, label: 'Purifier Health', path: '/dashboard/purifier-health' },
  { icon: BarChart3, label: 'Usage Analytics', path: '/dashboard/usage-analytics' },
  { icon: Wrench, label: 'Service & Support', path: '/dashboard/service-support' },
  { icon: CreditCard, label: 'AMC & Billing', path: '/dashboard/amc-billing' },
  { icon: Bell, label: 'Smart Alerts', path: '#' },
  { icon: UserPlus, label: 'Family Access', path: '#' },
  { icon: Settings, label: 'Settings', path: '#' },
];

const topTabs = [
  'Dashboard', 'My Purifier', 'Service', 'Analytics', 'AMC & Billing', 'Store'
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex pt-20">
      {/* Sidebar */}
      <aside className="w-72 bg-[#050816] text-white flex flex-col fixed left-0 top-20 bottom-0 z-40">
        <div className="p-8 pb-4">
          <div className="bg-slate-900/50 rounded-2xl p-4 border border-white/5 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
               <Monitor className="text-blue-400" size={24} />
            </div>
            <div>
              <div className="text-sm font-bold">Dew Origin Aura</div>
              <div className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mb-1">Matte Black</div>
              <div className="flex items-center gap-1.5">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[10px] font-bold text-green-500">Online</span>
              </div>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-slate-500 text-center font-medium">Device ID: DOA-23A7B6</div>
        </div>

        <nav className="flex-grow px-4 py-6 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.path !== '#') navigate(item.path);
              }}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all ${
                location.pathname === item.path 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} strokeWidth={location.pathname === item.path ? 2.5 : 1.5} />
              <span className="text-sm font-bold tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-8 pt-0">
           <div className="bg-blue-600/10 rounded-2xl p-6 border border-blue-600/20 group cursor-pointer text-center">
              <TrendingDown className="text-blue-400 mb-3 mx-auto" size={24} />
              <div className="font-bold mb-1">Refer & Earn</div>
              <div className="text-[10px] text-slate-400 mb-4 leading-relaxed">Refer your friends and earn up to ₹500</div>
              <button className="w-full py-3 bg-blue-600/20 text-blue-400 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-600/30 group-hover:bg-blue-600 group-hover:text-white transition-all">
                Refer Now →
              </button>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-72 p-8 overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8">
          <nav className="flex items-center gap-8">
            {topTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-bold transition-all relative py-1 ${
                  activeTab === tab ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button className="relative w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-black rounded-full border-2 border-white flex items-center justify-center">3</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <HelpCircle size={20} />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right">
                <div className="text-sm font-bold text-slate-900 tracking-tight">Arjun Sharma</div>
                <div className="text-[10px] font-medium text-slate-500">Bengaluru, KA</div>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
