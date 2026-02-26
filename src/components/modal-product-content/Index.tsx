import { Modal, View, Text, SectionList } from "react-native";
import style from "./style";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useOrderFlow } from "../../context/orderFlow";
import { useControllOrder } from "../../context/controllOrder";
import { Product } from "../../utils/types/ProductType";
import { useCart } from "../../context/cartContext";
import { ModalFlavor } from "../modal-flavorDrink/Index";
import { useEffect } from "react";
import { useModal } from "../../utils/hoocks/useModal";

interface ModalProps {
  product: Product[];
  isVisible: boolean;
  closeModal: () => void;
  category: string;
  sections: Section[];
}

interface Section {
  title: string;
  data: Product[];
}

export const ModalProductsContent = ({
  isVisible,
  closeModal,
  category,
  sections,
}: ModalProps) => {
  const {
    isVisible: isVisibleFlave,
    closeModal: closeModalFlave,
    openModal: openModalFlave,
  } = useModal();

  const { orderStarted } = useControllOrder();
  const { addItemCart, isOpenModalFlavor, clearFlavorTemporaryData } = useCart();

  useEffect(() => {
    if (isOpenModalFlavor) {
      openModalFlave();
    }
  }, [isOpenModalFlavor]);

  const actions = () => {
    closeModal(),
    clearFlavorTemporaryData()
  }

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
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={style.containerProp}>
              <View style={style.containerName}>
                <Text style={style.txtName}>{item.name}</Text>
              </View>
              <View style={style.containerPrice}>
                <Text style={style.txtPrice}>R$: {item.price},00</Text>
              </View>
              <View style={style.containerBtnAdd}>
                {orderStarted && (
                  <TouchableOpacity
                    style={style.btnAdd}
                    onPress={() => addItemCart(item.id)}
                  >
                    <Ionicons name="add-outline" size={25} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={{ width: "100%", alignItems: "center" }}>
              <View style={style.containerSection}>
                <Text style={style.txtTitleSection}>{section.title}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={style.containerBtn}>
        <TouchableOpacity style={style.btn} onPress={actions}>
      
 
          <Text style={style.txtBtn}>FECHAR</Text>
        </TouchableOpacity>
      </View>

      <ModalFlavor  />
    </Modal>
  );
};
