export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  type: string;
  available: boolean;
  addons?: {
    flavorIds?: number[];
    additionsIds?: number[];
  };
}

export interface Table {
  id: number;
  tableNumber: number;
  statusTable: boolean;
}

export interface Flavor {
  id: number;
  name: string;
  available: boolean;
}

export interface Aditional {
  id: number;
  name: string;
  price: number;
  available: boolean;
  qtd: number
}

export interface Cart {
  nanoId: string;
  product: Product;
  qtd: number;
  adc?: Aditional[];
  flavor?: Flavor;
}



