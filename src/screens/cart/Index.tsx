import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useOrder } from "../../hooks/useOrder";
import style from "./style";
import { useControllOrder } from "../../context/controllOrder";
import { useCart } from "../../context/cartContext";
import { ProductItem } from "./components/productItem/Index";
import { FlavorItem } from "./components/flavorItem/Index";

export const CartScreen = () => {
  const { finishOrder, cancelOrder } = useOrder();
  const { cartItem } = useCart();
  const {orderTableNumber} = useControllOrder();

  console.log(JSON.stringify(cartItem, null, 2));
  console.log(cartItem)

  return (
    <View style={style.container}>
      <View style={style.containerContent}>

        <ProductItem>
          <FlavorItem/>
        </ProductItem>


      </View>

      <View style={style.containerTotal}>
        <Text style={style.TxtTotal}>TOTAL: R$: 999,99</Text>
      </View>

      <View style={style.containerBtnActions}>
        <TouchableOpacity disabled={!orderTableNumber} onPress={cancelOrder} style={style.btnCancel}>
          <Text style={style.txtCancel}>CANCELAR PEDIDO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnFinish}>
          <Text style={style.txtFinish}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
