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
import { CinematicFooter } from './components/ui/motion-footer.tsx';
import { CartProvider } from './context/CartContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import ScrollToTop from './components/common/ScrollToTop.tsx';
import { cn } from './lib/utils.ts';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Header />
      <main className={cn(
        "relative flex-grow shadow-2xl transition-colors duration-500",
        isHomePage ? "bg-slate-950 rounded-none mb-0 z-0" : "bg-white rounded-b-[2.5rem] mb-[-1px] overflow-hidden z-10"
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


