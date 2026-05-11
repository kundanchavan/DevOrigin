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
  LayoutDashboard,
  Monitor
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: Droplet, label: 'Water Quality', path: '/dashboard/water-quality' },
  { icon: ShieldCheck, label: 'Purifier Health', path: '/dashboard/purifier-health' },
  { icon: BarChart3, label: 'Usage Analytics', path: '/dashboard/usage-analytics' },
  { icon: Wrench, label: 'Service & Support', path: '/dashboard/service-support' },
  { icon: CreditCard, label: 'AMC & Billing', path: '/dashboard/amc-billing' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
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

        <nav className="flex-grow px-4 py-6 space-y-1 overflow-y-auto custom-scrollbar-sidebar">
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
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-72 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
