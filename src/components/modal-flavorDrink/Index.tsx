import { Modal, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useCart } from "../../context/cart/cartContext";
import { Ionicons } from "@expo/vector-icons";

export const ModalFlavor = () => {
  const {
    flavorTemporaryData,
    isOpenModalFlavor,
    setIsOpenModalFlavor,
    addFlavorItemCart,
  } = useCart();

  if (!flavorTemporaryData) return null;

  return (
    <Modal
      visible={isOpenModalFlavor}
      animationType="slide"
      onRequestClose={() => setIsOpenModalFlavor(false)}
      transparent
    >
      <View style={[style.container, { backgroundColor: "rgba(0,0,0,0.5)" }]}>
        <View style={style.containerContent}>
          <View style={style.containerTop}>
            <Text style={style.txtTitle}>Sabor do drink?</Text>
          </View>

          <View style={style.content}>
            {flavorTemporaryData.map((item) => (
              <View key={item.id} style={style.containerItem}>
                <View style={style.containerName}>
                  <Text style={style.txtItem}>{item.name}</Text>
                </View>

                <View style={style.containerAvailable}>
                  {item.available ? (
                    <Ionicons name="checkmark" size={25} />
                  ) : (
                    <Ionicons name="close" size={25} />
                  )}
                </View>
                <View style={style.containerBtnAdd}>
                  <TouchableOpacity
                    style={[
                      style.btnAdd,
                      !item.available && { backgroundColor: "red" },
                    ]}
                    disabled={!item.available}
                    onPress={() => addFlavorItemCart(item.id)}
                  >
                    {item.available ? (
                      <Ionicons name="add-outline" size={25} />
                    ) : (
                      <Ionicons name="close" size={25} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          <View style={style.containerBtn}>
            <TouchableOpacity
              style={style.btn}
              onPress={() => setIsOpenModalFlavor(false)}
            >
              <Text style={style.txtBtn}>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
