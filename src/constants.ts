import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Elite X Carbon',
    category: 'Countertop',
    price: 1299,
    description: 'The pinnacle of countertop filtration. 9-stage molecular treatment with integrated mineral balance.',
    features: ['UV Sterilization', 'Mineral Re-infusion', 'TDS Smart Monitor'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600',
    tag: 'Best Seller',
    specs: { stages: 9, precision: '0.0001µ', flowRate: '2.5L/min' }
  },
  {
    id: 'p2',
    name: 'UnderFlow Pro',
    category: 'Under-sink',
    price: 899,
    description: 'Invisible power. Slides under your sink and delivers endless pure water through a dedicated titanium tap.',
    features: ['High-Flow Membrane', 'Zero Waste Tech', 'Magnetic Filtering'],
    image: 'https://images.unsplash.com/photo-1504148455328-497c5efae156?auto=format&fit=crop&q=80&w=600',
    specs: { stages: 7, precision: '0.01µ', flowRate: '5.0L/min' }
  },
  {
    id: 'p3',
    name: 'Industrial Matrix 500',
    category: 'Industrial',
    price: 4500,
    description: 'Built for enterprise. Continuous flow high-pressure system for offices, labs, and restaurants.',
    features: ['Steel Housing', 'Fail-Safe Safety', 'Smart API Integration'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600',
    tag: 'Enterprise',
    specs: { stages: 12, precision: '0.0001µ', flowRate: '15L/min' }
  },
  {
    id: 'p4',
    name: 'Vitality Slim',
    category: 'Countertop',
    price: 499,
    description: 'Minimalist design for modern kitchens. Rapid filtration with sleek touch controls.',
    features: ['Instant Hot/Cold', 'Active Carbon', 'Compact Size'],
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=600',
    specs: { stages: 5, precision: '0.1µ', flowRate: '1.2L/min' }
  },
  {
    id: 'p5',
    name: 'Replacement Core V4',
    category: 'Accessories',
    price: 89,
    description: 'Original replacement filter core for Elite X and Vitality series. Lasts for 2,500 liters.',
    features: ['Graphene Layer', 'Anti-Bacteria', 'Easy Twist-off'],
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=600',
    specs: { stages: 4, precision: '0.5µ', flowRate: 'N/A' }
  }
];
