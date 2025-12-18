import { Modal, View, Text } from "react-native";
import style from "./style";

import { useModal } from "../../utils/hoocks/useModal";


interface Product {
    name: string;
    price: number;
    category: string;
    type: string;
    available: boolean; 
}

interface ProductProps {
  product: Product[]
}



export const ModalProductsContent = ({product}: ProductProps ) => {

  const { isVisible, openModal, closeModal } = useModal()

  return (
    <Modal
        visible={isVisible}
        animationType="slide"
        onRequestClose={closeModal}
      
      >

        {product.map(item => (
          <Text key={item.name}>{item.name}</Text>
        ))}
      
    </Modal>
   
  );
};
