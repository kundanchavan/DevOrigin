import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Image as ImageIcon,
  Type,
  Plus,
  Trash2,
  Edit2,
  ExternalLink,
  Droplets
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Total Revenue', value: '$124,500', icon: CreditCard, trend: '+12.5%' },
    { label: 'Active Orders', value: '42', icon: ShoppingBag, trend: '+3' },
    { label: 'Customers', value: '1,840', icon: Users, trend: '+240' },
    { label: 'Purification Rate', value: '98.2%', icon: BarChart3, trend: '+0.4%' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-6 pb-24">
        <div className="flex gap-12">
          {/* Sidebar Nav */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="bg-white rounded-[2rem] border border-slate-100 p-6 sticky top-32">
              <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Droplets size={20} />
                </div>
                <span className="font-bold tracking-tighter">AQUAPURE CRM</span>
              </div>

              <nav className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                  { id: 'products', label: 'Products', icon: ShoppingBag },
                  { id: 'content', label: 'Content Editor', icon: Type },
                  { id: 'media', label: 'Media Library', icon: ImageIcon },
                  { id: 'settings', label: 'Settings', icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      activeTab === item.id 
                        ? "bg-slate-900 text-white shadow-lg" 
                        : "text-slate-500 hover:bg-slate-100"
                    )}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-grow">
            <header className="flex justify-between items-end mb-12">
              <div>
                <h1 className="text-4xl font-bold capitalize">{activeTab}</h1>
                <p className="text-slate-500">Welcome back, Administrator.</p>
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all">
                <Plus size={20} /> Create New
              </button>
            </header>

            {activeTab === 'dashboard' && (
              <div className="space-y-12">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-slate-50 rounded-2xl text-slate-400">
                          <stat.icon size={24} />
                        </div>
                        <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                          {stat.trend}
                        </span>
                      </div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Table Mockup */}
                <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
                  <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Recent Orders</h2>
                    <button className="text-blue-600 text-sm font-bold flex items-center gap-1">
                      View all <ExternalLink size={14} />
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-slate-50/50">
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Customer</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Product</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Date</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {[
                          { name: 'Marcus Aurelius', item: 'Elite X Carbon', date: '2 min ago', status: 'Processing' },
                          { name: 'Sena Richards', item: 'UnderFlow Pro', date: '15 min ago', status: 'Shipped' },
                          { name: 'Victor Krum', item: 'Replacement Core', date: '1 hour ago', status: 'Delivered' },
                          { name: 'Diana Prince', item: 'Elite X Carbon', date: '3 hours ago', status: 'Processing' },
                        ].map((order, i) => (
                          <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                            <td className="px-8 py-5 font-bold text-sm">{order.name}</td>
                            <td className="px-8 py-5 text-sm text-slate-500">{order.item}</td>
                            <td className="px-8 py-5 text-xs text-slate-400">{order.date}</td>
                            <td className="px-8 py-5">
                              <span className={cn(
                                "text-[10px] font-black uppercase px-2 py-1 rounded-md",
                                order.status === 'Processing' ? "bg-amber-100 text-amber-600" :
                                order.status === 'Shipped' ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                              )}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-8 py-5">
                              <div className="flex gap-2">
                                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                  <Edit2 size={16} />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div className="bg-white rounded-[2rem] border border-slate-100 p-12 shadow-sm max-w-2xl">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Type size={20} className="text-blue-600" /> Site Branding
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Primary Heading</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 text-sm outline-none focus:ring-1 focus:ring-blue-500" defaultValue="Purity in Every Drop" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Primary Color</label>
                        <div className="flex gap-2 items-center">
                          <input className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 text-sm outline-none" defaultValue="#2563eb" />
                          <div className="w-10 h-10 rounded-xl bg-blue-600 border border-slate-200 shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-8 border-t border-slate-50">
                    <h2 className="text-xl font-bold">Typography</h2>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 text-sm outline-none appearance-none">
                      <option>Space Grotesk (Default)</option>
                      <option>Inter</option>
                      <option>Montserrat</option>
                    </select>
                  </div>

                  <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                    Publish Changes
                  </button>
                </div>
              </div>
            )}
            
            {activeTab !== 'dashboard' && activeTab !== 'content' && (
              <div className="bg-white rounded-[2rem] border border-slate-100 p-24 text-center shadow-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-6">
                   <BarChart3 size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-2">Module Loading</h2>
                <p className="text-slate-400">This management module is currently being optimized.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
