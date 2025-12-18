import { useEffect, useState } from "react";
import { ProductData } from "../../../data/ProductDataMock";

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
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(productData.map((item) => item.category))
    );

    setCategory(uniqueCategories);
  }, []);


  const getProduct = (cat: string) => {
    const product = productData.filter(item => item.category === cat)
    setProduct(product)

  }


  return {getProduct, category, product}
};
