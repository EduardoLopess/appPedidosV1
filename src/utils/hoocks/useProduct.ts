import { useEffect, useState } from "react";
import { ProductData } from "../../../data/ProductDataMock";

interface Product {
  id: number,
  name: string;
  price: number;
  category: string;
  type: string;
  available: boolean;
}

type Section = {
  title: string,
  data: Product[]

}



const productData: Product[] = ProductData;

export const useProduct = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [product, setProduct] = useState<Product[]>([])
  const [typeSectionList, setTypeSectionList] = useState<Section[]>([])

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(productData.map((item) => item.category))
    );

    setCategory(uniqueCategories);
  }, []);


  const getProduct = (cat: string) => {

    const product = productData.filter(item => item.category === cat)

    const types = Array.from(
      new Set(product.map(item => item.type))
    )

    const sections = types.map(type => ({
      title: type,
      data: product.filter(item => item.type === type)
    }))

    setTypeSectionList(sections)
    setProduct(product)

  }



  return {typeSectionList, getProduct, category, product}
};
