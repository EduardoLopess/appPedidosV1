import { Modal, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useModal } from "../../utils/hoocks/useModal";
import { useProduct } from "../../screens/menu-product/ViewModel";

type ProductCategoryProps = {
  category: string;
};

export const ProductCategory = ({ category }: ProductCategoryProps) => {

  const { isVisible, openModal, closeModal } = useModal()
  const {getProduct, product } = useProduct()

  return (
    <TouchableOpacity style={style.container} onPress={() => {
      openModal(),
      getProduct(category)
    }}>
      <Text style={style.txt}>{category}</Text>

      <Modal
        visible={isVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        {product.map(item => (
          <Text key={item.name}>{item.name}</Text>
        ))}
        <TouchableOpacity onPress={closeModal}><Text>FECHAR</Text></TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
};
