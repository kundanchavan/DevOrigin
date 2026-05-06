/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Cart from './pages/Cart.tsx';
import Admin from './pages/Admin.tsx';
import { CartProvider } from './context/CartContext.tsx';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <footer className="bg-slate-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full" />
                <span className="text-xl font-bold tracking-tighter transition-colors">AQUAPURE</span>
              </div>
              <div className="flex gap-8 text-sm opacity-60">
                <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Certifications</a>
              </div>
              <p className="text-xs opacity-40">© 2024 AQUAPURE Swiss Technology. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}


