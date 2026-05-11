import { motion } from 'framer-motion';
import { Wrench, Phone, MessageSquare, Hammer, Calendar, Clock, MapPin, User } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const supportActions = [
  { icon: Wrench, title: 'Book a Service', desc: 'Schedule a routine maintenance or filter change', color: 'bg-blue-50 text-blue-600' },
  { icon: Phone, title: 'Call Support', desc: 'Talk to our water experts directly', color: 'bg-green-50 text-green-600' },
  { icon: MessageSquare, title: 'Live Chat', desc: 'Get instant answers for your queries', color: 'bg-purple-50 text-purple-600' },
  { icon: Hammer, title: 'Troubleshoot', desc: 'Solve common issues with our smart guide', color: 'bg-orange-50 text-orange-600' },
];

const activeTickets = [
  { id: 'TKT-8902', type: 'General Service', status: 'Technician Assigned', date: 'Expected: 12 May', tech: 'Vikram Singh' },
  { id: 'TKT-8845', type: 'Installation Request', status: 'Completed', date: '10 May 2024', tech: 'Rahul Kumar' },
];

export default function ServiceSupport() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Service & Support</h1>
                <p className="text-slate-500 font-medium">We are here to ensure your water is always pure.</p>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                Raise New Ticket
            </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supportActions.map((action, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                    <div className={`w-12 h-12 rounded-2xl ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <action.icon size={24} />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">{action.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{action.desc}</p>
                </motion.div>
            ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-black text-slate-900 tracking-tight mb-6">Active & Recent Tickets</h2>
                    <div className="space-y-4">
                        {activeTickets.map((ticket) => (
                            <div key={ticket.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                                        <Hammer size={24} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-xs font-black text-slate-900">{ticket.type}</span>
                                            <span className="text-[10px] font-bold py-1 px-2 bg-blue-50 text-blue-600 rounded-lg">{ticket.id}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            <span className="flex items-center gap-1"><Clock size={12} /> {ticket.date}</span>
                                            <span className="flex items-center gap-1"><User size={12} /> {ticket.tech}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${ticket.status === 'Completed' ? 'text-green-500' : 'text-blue-500'}`}>
                                        {ticket.status}
                                    </span>
                                    <button className="block mt-2 text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase">Track →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
                    <div className="relative z-10 flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-black tracking-tighter mb-2">Need immediate assistance?</h3>
                            <p className="text-slate-400 text-sm font-medium mb-6">Our 24/7 emergency response team is just a tap away.</p>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-white text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
                                    Call Hotline
                                </button>
                                <button className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                                    Watch Tutorials
                                </button>
                            </div>
                        </div>
                        <div className="w-32 h-32 bg-blue-600/30 rounded-full flex items-center justify-center shrink-0 [filter:drop-shadow(0_0_30px_rgba(59,130,246,0.5))]">
                             <Phone size={48} className="text-blue-400 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            <aside className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-black text-slate-900 mb-6">Scheduled Maintenance</h3>
                    <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                        <div className="relative">
                            <div className="absolute -left-10 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-sm z-10" />
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Coming Up</div>
                            <div className="text-sm font-black text-slate-900 mb-1">Yearly RO Service</div>
                            <div className="text-[10px] text-slate-500 font-medium">12 August 2024 • 10:00 AM</div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-10 top-0 w-6 h-6 bg-slate-200 rounded-full border-4 border-white shadow-sm z-10" />
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">October 2024</div>
                            <div className="text-sm font-black text-slate-900 mb-1">Post Carbon Replacement</div>
                            <div className="text-[10px] text-slate-500 font-medium">Expected Cycle</div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <MapPin size={32} />
                    </div>
                    <h3 className="text-lg font-black mb-2">Service Center</h3>
                    <p className="text-blue-100 text-xs mb-6 font-medium">HSR Layout, Bengaluru<br/>Open: 9 AM - 6 PM</p>
                    <button className="w-full py-3 bg-white text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all">
                        Get Directions
                    </button>
                </div>
            </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}
