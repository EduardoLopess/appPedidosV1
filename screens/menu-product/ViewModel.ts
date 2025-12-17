import { useEffect, useState } from "react";
import { ProductData } from "../../data/ProductDataMock";

interface Product {
  name: string;
  price: number;
  category: string;
  type: string;
  available: boolean;
}

const productData: Product[] = ProductData;

export const useProduct = () => {
  const [category, setCategory] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(productData.map((item) => item.category))
    );

    setCategory(uniqueCategories);
  }, []);

  return category;
};
