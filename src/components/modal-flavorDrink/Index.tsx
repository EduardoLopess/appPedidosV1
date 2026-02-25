import { Modal, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { Flavor } from "../../utils/types/ProductType";
import { useEffect } from "react";
import { useCart } from "../../context/cartContext";
import { useModal } from "../../utils/hoocks/useModal";


export const ModalFlavor = () => {
  const {isVisible, closeModal, openModal} = useModal()

  const {flavorTemporaryData} = useCart()

  if(flavorTemporaryData) {
    openModal()
  }

  return ( 
    <Modal 
      visible={isVisible}
      animationType="slide"
      onRequestClose={closeModal}
      style={style.container}>

      <View>

        <TouchableOpacity onPress={closeModal}>
          <Text>FECHAR</Text>
        </TouchableOpacity>

      </View>
        
    </Modal>
  )
};
