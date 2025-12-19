import { Modal, View, Text } from "react-native";
import style from "./style";

import { useModal } from "../../utils/hoocks/useModal";
import { TouchableOpacity } from "react-native";

interface Product {
  id: number,
  name: string;
  price: number;
  category: string;
  type: string;
  available: boolean;
}

interface ModalProps {
  product: Product[];
  isVisible: boolean;
  closeModal: () => void;
  category: string;
}

export const ModalProductsContent = ({  product,  isVisible, closeModal, category}: ModalProps) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={closeModal}
      style={style.container}
    >
      <View style={style.containerTitle}>
        <Text style={style.txtTitle}>{category}</Text>
      </View>

      <View style={style.containerContent}>
        {product.map((item) => (

          <View key={item.id} style={style.containerProp}>
            <View>
              <Text>{item.name}</Text>
            </View>
            <View>
              <Text>{item.price}</Text>
            </View>
            <View>
              
            </View>
          </View>


     
      
      ))}
      </View>
      <View style={style.containerBtn}>
        <TouchableOpacity style={style.btn} onPress={closeModal}>
          <Text style={style.txtBtn}>FECHAR</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
