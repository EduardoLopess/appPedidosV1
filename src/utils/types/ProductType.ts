export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  type: string;
  available: boolean;
}

export interface Table {
  id: number;
  tableNumber: number;
  statusTable: boolean;
}



export interface Cart {
  product: Product[],
  qtd: number
}
