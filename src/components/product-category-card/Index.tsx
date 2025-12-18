import { Modal, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useModal } from "../../utils/hoocks/useModal";
import { useProduct } from "../../utils/hoocks/useProduct";
import { ModalProductsContent } from "../modal-product-content/Index";


type ProductCategoryProps = {
  category: string;
};

export const ProductCategory = ({ category }: ProductCategoryProps) => {
  const {getProduct, product } = useProduct()

  return (
    <TouchableOpacity style={style.container} onPress={() => {
      getProduct(category)
    }}>
      <ModalProductsContent
        product={product}
      />
    </TouchableOpacity>
  );
};
