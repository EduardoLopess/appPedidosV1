import { Modal, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useState } from "react";

type ProductCategoryProps = {
  id?: number;
  category: string;
};


export const ProductCategory = ({ category }: ProductCategoryProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false)

  return (
    <TouchableOpacity style={style.container} onPress={openModal}>
      <Text style={style.txt}>{category}</Text>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <TouchableOpacity onPress={closeModal}><Text>FECHAR</Text></TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
};
