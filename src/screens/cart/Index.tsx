import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useOrder } from "../../hooks/useOrder";
import style from "./style";
import { useControllOrder } from "../../context/controllOrder";
import { useCart } from "../../context/cartContext";
import { Item } from "./components/item/Index";
import { ItemFlavor } from "./components/item-flavor/Index";
import { AdditionalList } from "./components/additional-list/Index";
import { AdditionalItem } from "./components/item-additional/Index";

export const CartScreen = () => {
  const { finishOrder, cancelOrder } = useOrder();
  const { cartItem, alterQtdItemCart } = useCart();
  const { orderTableNumber } = useControllOrder();
  //if (!cartItem || cartItem.length === 0) return null;

  return (
    <View style={style.container}>
      <View style={style.containerContent}>
        <ScrollView>
          <Item>
            <AdditionalList />
          </Item>

          <Item>
            <AdditionalItem />
            <AdditionalItem />
            <AdditionalItem />
            <AdditionalItem />
          </Item>

          <Item>
            <ItemFlavor />
          </Item>

          <Item />
        </ScrollView>
      </View>

      <View style={style.containerTotal}>
        <Text style={style.TxtTotal}>TOTAL: R$: 999,99</Text>
        <Text>20x itens</Text>
      </View>

      <View style={style.containerBtnActions}>
        <TouchableOpacity
          disabled={!orderTableNumber}
          onPress={cancelOrder}
          style={style.btnCancel}
        >
          <Text style={style.txtCancel}>CANCELAR PEDIDO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnFinish}>
          <Text style={style.txtFinish}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
