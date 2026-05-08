import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingCart, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 px-6 min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-slate-200 mb-8 border border-slate-100">
          <ShoppingCart size={48} />
        </div>
        <h1 className="text-4xl font-bold mb-4">Your Source is Empty.</h1>
        <p className="text-slate-500 mb-8 text-center max-w-xs">
          Start your journey towards molecular purity by choosing a system.
        </p>
        <NavLink 
          to="/products"
          className="px-8 py-4 bg-primary-blue text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10"
        >
          Explore Ecosystem
        </NavLink>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Order Summary</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white p-6 rounded-3xl border border-slate-100 flex gap-6 items-center flex-wrap sm:flex-nowrap"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100 border border-slate-50">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <ShoppingCart size={24} />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      <span>{item.category}</span>
                      <span>Item ID: {item.id}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <div className="text-blue-600 font-display font-medium text-lg">${item.price}</div>
                  </div>

                  <div className="flex items-center gap-4 bg-slate-50 p-1 rounded-2xl border border-slate-100">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-colors text-slate-400 hover:text-slate-900"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-colors text-slate-400 hover:text-slate-900"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                  >
                    <Trash2 size={24} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Checkout Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 sticky top-32">
              <h2 className="text-2xl font-bold mb-8">Checkout</h2>
              
              <div className="space-y-4 mb-8 pb-8 border-b border-slate-100">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-medium">${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Swiss Shipping</span>
                  <span className="text-slate-900 font-medium text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Taxes (Estimated)</span>
                  <span className="text-slate-900 font-medium">${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold">Total</span>
                <span className="text-3xl font-display font-bold text-blue-600">
                  ${(cartTotal * 1.08).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              <button className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-95 mb-4 group px-4 text-center">
                Process Transaction <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 justify-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">
                <ShieldCheck size={14} className="text-green-500" /> Secure Encryption Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
