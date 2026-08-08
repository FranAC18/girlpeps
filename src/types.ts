export type StockStatus = 'in_stock' | 'sold_out' | 'in_transit';

export interface Product {
  id: number;
  title: string;
  price: number;
  status: StockStatus;
  image: string;
  category: string;
  description: string;
  purity?: string;
  form?: string;
  researchArea?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderCustomerInfo {
  name: string;
  phone?: string;
  address: string;
  cityState: string;
  notes: string;
}

export type CategoryFilter = 'All' | 'Peptides' | 'Blends' | 'Research Solutions';
