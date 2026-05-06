export interface Product {
  id: string;
  name: string;
  category: 'Countertop' | 'Under-sink' | 'Industrial' | 'Accessories';
  price: number;
  description: string;
  features: string[];
  image: string;
  tag?: string;
  specs: {
    stages: number;
    precision: string;
    flowRate: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}
