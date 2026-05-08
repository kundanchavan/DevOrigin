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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            New Launches
          </h2>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
            Explore All <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-12 snap-x no-scrollbar">
          {newLaunches.map((product, i) => (
            <div key={product.id} className="min-w-[300px] md:min-w-[350px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
