export interface Product {
  id: string;
  name: string;
  category: 'UV' | 'RO' | 'UV+RO' | 'Copper' | 'Mineral';
  price: number;
  description: string;
  features: string[];
  image: string;
  tag?: string;
  label?: string; // e.g., "WATER PURIFIERS"
  tagline?: string; // e.g., "Instant hot water on demand"
  isNewLaunch?: boolean;
  bgColor?: string; // e.g., "bg-[#eef5ff]" or "bg-[#fff1ed]"
  imageAssetId?: string;
  specs: {
    stages: number;
    precision: string;
    flowRate: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}
