import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './common/ProductCard';

interface NewLaunchesProps {
  products: Product[];
}

export default function NewLaunches({ products }: NewLaunchesProps) {
  // Try to get specifically tagged new launches first
  let newLaunches = products.filter(p => p.isNewLaunch);
  
  // Fallback: If no products are tagged as new launch, show the first 3 products
  if (newLaunches.length === 0) {
    newLaunches = products.slice(0, 3);
  }

  if (newLaunches.length === 0) return null;

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              New Launches
            </h2>
            <p className="text-slate-500 font-medium">The latest in molecular purification technology.</p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group px-6 py-3 bg-blue-50 rounded-full">
            Explore All <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newLaunches.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
