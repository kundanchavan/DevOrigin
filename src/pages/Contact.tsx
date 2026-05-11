import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, MapPin, Send, Loader2, Droplets } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { cn } from '@/lib/utils';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Form */}
          <div>
            <h1 className="text-5xl font-bold mb-6">Let's Talk Science.</h1>
            <p className="text-slate-500 text-lg mb-12 max-w-md">
              Have questions about our filtration technology or need help choosing the right system? Our water experts are here.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold">Email Us</div>
                  <div className="text-slate-500">solutions@deworigin.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold">Call Support</div>
                  <div className="text-slate-500">+1 (555) 000-PURITY</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="font-bold">WhatsApp</div>
                  <a 
                    href="https://wa.me/1234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Chat with Expert 
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none" placeholder="How can we help?" />
              </div>
              <button 
                disabled={isSubmitting || submitted}
                className={cn(
                  "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                  submitted ? "bg-green-500 text-white" : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : (submitted ? 'Message Sent' : 'Send Inquiry')}
                {!isSubmitting && !submitted && <Send size={18} />}
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="relative">
            <div className="h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-100">
               {!hasValidKey ? (
                 <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-8 text-center">
                   <div className="max-w-md">
                    <MapPin className="mx-auto text-blue-500 mb-6" size={48} />
                    <h2 className="text-2xl font-bold mb-4">Google Maps API Key Required</h2>
                    <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                      To see our global headquarters on the map, please add your API Key as a secret in AI Studio.
                    </p>
                    <div className="text-left bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">1</div>
                        <p className="text-xs">Open <b>Settings</b> (⚙️ gear icon, top-right) → <b>Secrets</b></p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                        <p className="text-xs">Type <b>GOOGLE_MAPS_PLATFORM_KEY</b> as name</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">3</div>
                        <p className="text-xs">Paste your key and press Enter</p>
                      </div>
                    </div>
                   </div>
                 </div>
               ) : (
                 <APIProvider apiKey={API_KEY}>
                   <Map
                     defaultCenter={{ lat: 47.3769, lng: 8.5417 }} // Zurich
                     defaultZoom={13}
                     mapId="DEW_ORIGIN_MAP"
                     gestureHandling={'greedy'}
                     disableDefaultUI={true}
                     style={{ width: '100%', height: '100%' }}
                   >
                     <AdvancedMarker position={{ lat: 47.3769, lng: 8.5417 }}>
                        <div className="relative group">
                          <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-xl group-hover:scale-110 transition-transform">
                            <Droplets size={24} />
                          </div>
                          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg text-[10px] font-bold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            DEW ORIGIN ZURICH
                          </div>
                        </div>
                     </AdvancedMarker>
                   </Map>
                 </APIProvider>
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
