import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Elite X Carbon',
    category: 'RO',
    price: 18499,
    description: 'The pinnacle of Reverse Osmosis filtration with advanced UV sterilization.',
    features: ['4 L tank', '5-stage filtration', 'Touch dispense', 'UV filters', 'Solid pipe'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600',
    tag: 'Best Seller',
    label: 'WATER PURIFIERS',
    tagline: 'Instant hot water on demand',
    isNewLaunch: true,
    bgColor: 'bg-[#eef5ff]',
    specs: { stages: 9, precision: '0.0001µ', flowRate: '2.5L/min' }
  },
  {
    id: 'p2',
    name: 'UV Master Pro',
    category: 'UV',
    price: 14999,
    description: 'Pure UV-C sterilization for biological contaminants.',
    features: ['5-stage filtration', 'UV filters', 'Solid pipe', 'Space saving', 'High flow'],
    image: 'https://images.unsplash.com/photo-1504148455328-497c5efae156?auto=format&fit=crop&q=80&w=600',
    label: 'WATER PURIFIERS',
    tagline: 'Deep sterilization for your home',
    isNewLaunch: true,
    bgColor: 'bg-[#fff1ed]',
    specs: { stages: 7, precision: '0.01µ', flowRate: '5.0L/min' }
  },
  {
    id: 'p3',
    name: 'Hybrid XR-9',
    category: 'UV+RO',
    price: 24500,
    description: 'Dual-action purification combining RO precision with UV strength.',
    features: ['8 L tank', '9-stage filtration', 'Solid pipe', 'Dual UV', 'Smart Alerts'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600',
    tag: 'Premium',
    label: 'WATER PURIFIERS',
    tagline: "Total protection for your family",
    isNewLaunch: true,
    bgColor: 'bg-[#eef5ff]',
    specs: { stages: 12, precision: '0.0001µ', flowRate: '3.5L/min' }
  },
  {
    id: 'p4',
    name: 'Copper Infusion Pure',
    category: 'Copper',
    price: 12999,
    description: 'Enrich your water with immunity-boosting copper molecules.',
    features: ['4 L tank', 'Active Copper', 'Touch dispense', 'Compact Size', 'Elegant Finish'],
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=600',
    specs: { stages: 6, precision: '0.1µ', flowRate: '1.8L/min' }
  },
  {
    id: 'p5',
    name: 'Mineral Balance V4',
    category: 'Mineral',
    price: 15499,
    description: 'Restores essential minerals like Calcium and Magnesium for better health.',
    features: ['Mineralizer', 'Anti-Bacteria', 'pH Balancing'],
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=600',
    specs: { stages: 7, precision: '0.05µ', flowRate: '2.0L/min' }
  }
];
