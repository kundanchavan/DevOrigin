/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Cart from './pages/Cart.tsx';
import Admin from './pages/Admin.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import Dashboard from './pages/Dashboard.tsx';
import WaterQuality from './pages/WaterQuality.tsx';
import PurifierHealth from './pages/PurifierHealth.tsx';
import UsageAnalytics from './pages/UsageAnalytics.tsx';
import ServiceSupport from './pages/ServiceSupport.tsx';
import AMCBilling from './pages/AMCBilling.tsx';
import { CinematicFooter } from './components/ui/motion-footer.tsx';
import { CartProvider } from './context/CartContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import ScrollToTop from './components/common/ScrollToTop.tsx';
import { cn } from './lib/utils.ts';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Refresh ScrollTrigger when path changes
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Header />
      <main className={cn(
        "relative flex-grow shadow-2xl transition-colors duration-500 z-10 rounded-b-[2.5rem] mb-[-2px] overflow-hidden bg-white",
        isHomePage && "bg-[#050816]"
      )}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/water-quality" element={<WaterQuality />} />
          <Route path="/dashboard/purifier-health" element={<PurifierHealth />} />
          <Route path="/dashboard/usage-analytics" element={<UsageAnalytics />} />
          <Route path="/dashboard/service-support" element={<ServiceSupport />} />
          <Route path="/dashboard/amc-billing" element={<AMCBilling />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <CinematicFooter />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}


