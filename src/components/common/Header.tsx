import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Droplets, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const isDarkPage = isHomePage;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-[#050816]/80 backdrop-blur-md shadow-sm border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Droplets size={24} />
          </div>
          <span className={cn(
            'text-2xl font-bold tracking-tighter transition-colors',
            isScrolled ? 'text-white' : (isDarkPage ? 'text-white' : 'text-slate-900')
          )}>
            Dew Origin
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => cn(
                'text-sm font-medium tracking-widest uppercase transition-colors',
                isActive 
                  ? 'text-blue-500' 
                  : (isScrolled ? 'text-white/60 hover:text-white' : (isDarkPage ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-blue-600'))
              )}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <NavLink
            to="/cart"
            className={cn(
              "p-2 rounded-full transition-colors relative",
              isScrolled ? "hover:bg-white/10" : (isDarkPage ? "hover:bg-white/10" : "hover:bg-slate-100")
            )}
          >
            <ShoppingCart size={22} className={cn(isScrolled ? "text-white" : (isDarkPage ? "text-white" : "text-slate-700"))} />
            {itemCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
              >
                {itemCount}
              </motion.span>
            )}
          </NavLink>

          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <div className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-full border transition-all",
                isScrolled 
                  ? "bg-white/5 border-white/10" 
                  : (isDarkPage ? "bg-white/10 border-white/20 backdrop-blur-md" : "bg-slate-100 border-slate-200")
              )}>
                <User size={16} className="text-blue-400" />
                <span className={cn(
                  "text-xs font-bold truncate max-w-[100px]",
                  isScrolled ? "text-white" : (isDarkPage ? "text-white" : "text-slate-700")
                )}>
                  {user?.name || user?.email}
                </span>
                <button onClick={logout} className="text-slate-500 hover:text-red-400 transition-colors">
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <NavLink 
                  to="/login" 
                  className={cn(
                    "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors",
                    isScrolled ? "text-white/60 hover:text-white" : (isDarkPage ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-blue-600")
                  )}
                >
                  Login
                </NavLink>
                <NavLink to="/signup" className="px-5 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-blue-500 transition-all shadow-lg active:scale-95">
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2",
              isScrolled ? "text-white" : (isDarkPage ? "text-white" : "text-slate-700")
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-900"
                >
                  {link.name}
                </NavLink>
              ))}
              <hr className="border-slate-100" />
              {isAuthenticated ? (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <User size={20} className="text-blue-600" />
                    <span className="font-bold">{user?.name || user?.email}</span>
                  </div>
                  <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="text-left text-red-500 font-bold flex items-center gap-2">
                    <LogOut size={20} /> Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-900">Login</NavLink>
                  <NavLink to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="bg-slate-900 text-white py-4 rounded-2xl text-center font-bold">Sign Up</NavLink>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
