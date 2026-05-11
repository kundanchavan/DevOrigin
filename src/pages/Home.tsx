import { motion } from 'motion/react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts, getSiteData } from '@/services/sanityService';
import { Product } from '@/types';
import ProductCard from '@/components/common/ProductCard';
import NewLaunches from '@/components/NewLaunches';

import HomeHero from '@/components/home/HomeHero';
import StatsBar from '@/components/home/StatsBar';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [siteData, setSiteData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [productData, dynamicData] = await Promise.all([
          getProducts(),
          getSiteData()
        ]);
        setProducts(productData);
        setSiteData(dynamicData);
      } catch (error) {
        console.error("Error loading home data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // Sample Mock Data for Purifier Cards as requested
  const mockPurifiers: Product[] = [
    {
      id: "p1",
      name: "Dew Ultra Max",
      price: 18999,
      tagline: "Total Purification",
      description: "Advanced molecular purification for your family.",
      image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=800",
      category: "RO Purifiers",
      tag: "Best Seller",
      specs: { precision: "0.0001 Micron", stages: 9, capacity: "12L/hr", flowRate: "15 LPH" },
      features: ["Copper Infusion", "UV-C Sterilization", "App Tracking"]
    },
    {
      id: "p2",
      name: "Dew Slim Elite",
      price: 14500,
      tagline: "Compact Design",
      description: "Sleek design with powerful molecular filtration.",
      image: "https://images.unsplash.com/photo-1581093583449-80d50ad975e5?auto=format&fit=crop&q=80&w=800",
      category: "RO Purifiers",
      tag: "New Launch",
      specs: { precision: "0.001 Micron", stages: 7, capacity: "10L/hr", flowRate: "12 LPH" },
      features: ["Transparent Tank", "Wall Mount", "Zero Water Waste"]
    }
  ];

  const bestSellers = products.filter(p => p.tag === 'Best Seller').slice(0, 5);
  const displayBestSellers = bestSellers.length > 0 ? bestSellers : products.slice(0, 5);

  return (
    <div className="flex flex-col w-full">
      {/* New Hero Section */}
      <HomeHero />

      {/* Featured Products List (Best Sellers) */}
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                Best Sellers
              </h2>
              <p className="text-slate-500 font-medium tracking-tight">Our most trusted molecular purification units.</p>
            </div>
            <NavLink 
              to="/products"
              className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group px-6 py-3 bg-blue-50 rounded-full"
            >
              View Full Collection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              <div className="col-span-full py-16 flex flex-col items-center justify-center text-slate-500 gap-4">
                <Loader2 className="animate-spin" size={40} />
                <p className="font-bold tracking-widest uppercase text-xs">Fetching Molecular Data...</p>
              </div>
            ) : (
              (displayBestSellers.length > 0 ? displayBestSellers : mockPurifiers).map((product) => (
                <div key={product.id} className="h-full">
                  <ProductCard product={product} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* New Stats Bar */}
      <StatsBar />

      {/* New Launches Integration */}
      <NewLaunches products={products.length > 0 ? products : mockPurifiers} />
    </div>
  );
}
