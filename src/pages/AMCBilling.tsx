import { motion } from 'framer-motion';
import { CreditCard, Receipt, TrendingDown, ShieldCheck, Download, AlertCircle, ChevronRight, PieChart as PieIcon } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const savingsData = [
  { name: 'Dew Origin', value: 1800, color: '#3b82f6' },
  { name: 'Others', value: 4500, color: '#e2e8f0' },
];

const invoices = [
  { id: 'INV-2024-05', date: '01 May 2024', amount: '₹1,500', type: 'AMC Renewal', status: 'Paid' },
  { id: 'INV-2024-03', date: '15 Mar 2024', amount: '₹300', type: 'Extra Filter Buy', status: 'Paid' },
  { id: 'INV-2023-12', date: '10 Dec 2023', amount: '₹1,200', type: 'Service Fee', status: 'Paid' },
];

export default function AMCBilling() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter">AMC & Billing</h1>
                <p className="text-slate-500 font-medium">Manage your subscription and view cost savings.</p>
            </div>
            <div className="flex gap-4">
                 <button className="px-6 py-3 bg-white border border-slate-200 text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2">
                    <Download size={14} /> Export All
                </button>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                    Pay Current Bill
                </button>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Active AMC Plan</h3>
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100">Active</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Plan Name</div>
                            <div className="text-2xl font-black text-slate-900">Premium Pure Care</div>
                        </div>
                        <div className="flex gap-12">
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Expiry Date</div>
                                <div className="text-lg font-black text-slate-900">24 Jun 2025</div>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Price / Year</div>
                                <div className="text-lg font-black text-slate-900">₹1,800</div>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                            Change Plan Details
                        </button>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-4">Included Benefits</h4>
                        <ul className="space-y-3">
                            {[
                                '3 Free General Services',
                                'Unlimited Filter Replacements',
                                'Priority Technician Visit',
                                '24/7 Phone Support',
                                'TDS Water Report'
                            ].map((benefit, i) => (
                                <li key={i} className="flex items-center gap-3 text-xs font-medium text-slate-600">
                                    <ShieldCheck size={16} className="text-blue-500" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 blur-[80px] rounded-full" />
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-black tracking-tight">Your Savings</h3>
                        <TrendingDown size={20} className="text-green-400" />
                    </div>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8">
                        By choosing Dew Origin AMC, you have saved significantly compared to local market rates.
                    </p>
                </div>

                <div className="relative z-10 flex items-center gap-6">
                    <div className="relative h-24 w-24 shrink-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={savingsData}
                                    innerRadius={30}
                                    outerRadius={45}
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
                            <div className="text-[10px] font-black text-white">₹2.7k</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Saved</div>
                        <div className="text-2xl font-black text-green-400">₹2,700</div>
                        <div className="text-[9px] font-black uppercase text-blue-400">60% Cost Reduced</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
            <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Recent Invoices</h3>
                    <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">View All Invoices</button>
                </div>
                <div className="space-y-4">
                    {invoices.map((invoice) => (
                        <div key={invoice.id} className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all cursor-pointer group">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    <Receipt size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-slate-900">{invoice.type}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">{invoice.id} • {invoice.date}</div>
                                </div>
                             </div>
                             <div className="text-right">
                                <div className="text-sm font-black text-slate-900">{invoice.amount}</div>
                                <div className="text-[9px] font-black text-green-500 uppercase tracking-widest">{invoice.status}</div>
                             </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-8">Payment Methods</h3>
                <div className="space-y-4">
                    <div className="p-6 rounded-2xl border-2 border-blue-100 bg-blue-50/50 flex items-center justify-between relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-[40px] rounded-full" />
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-900">
                                <CreditCard size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-black text-slate-900">HDFC Bank Debit Card</div>
                                <div className="text-xs font-bold text-slate-500">•••• •••• •••• 4521</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 relative z-10">
                             <span className="text-[10px] font-black text-blue-600 uppercase">Primary</span>
                             <ChevronRight size={16} className="text-slate-300" />
                        </div>
                    </div>

                    <button className="w-full p-6 rounded-2xl border-2 border-dashed border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all flex items-center justify-center gap-3 text-slate-400 hover:text-blue-600 group">
                        <div className="w-8 h-8 rounded-lg border-2 border-dashed border-current flex items-center justify-center">
                            <AlertCircle size={16} />
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest">Add New Payment Method</span>
                    </button>
                </div>

                <div className="mt-8 p-4 bg-orange-50 rounded-2xl border border-orange-100 flex items-start gap-4">
                    <AlertCircle size={20} className="text-orange-600 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-orange-700 leading-relaxed font-medium">
                        Your auto-pay for next AMC renewal is currently <span className="font-black">OFF</span>. Enable it to avoid service interruption and get an additional 5% discount.
                    </p>
                </div>
            </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
