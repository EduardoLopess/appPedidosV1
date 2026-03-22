import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useOrder } from "../../hooks/useOrder";
import style from "./style";
import { useControllOrder } from "../../context/controllOrder";
import { useCart } from "../../context/cart/cartContext";
import { Item } from "./components/item/Index";
import { ItemFlavor } from "./components/item-flavor/Index";
import { AdditionalList } from "./components/additional-list/Index";
import { AdditionalItem } from "./components/item-additional/Index";

export const CartScreen = () => {
  const { finishOrder, cancelOrder } = useOrder();
  const { cartItem, adcTemporaryData } = useCart();
  const { orderTableNumber } = useControllOrder();
  //if (!cartItem || cartItem.length === 0) return null;
  console.log(cartItem)
  console.log('adc data temp => ', adcTemporaryData)

  return (
    <View style={style.container}>
      <View style={style.containerContent}>
        <ScrollView>
          {cartItem && cartItem.length > 0 ?(
            console.log(JSON.stringify(cartItem, null, 2)),
            cartItem.map((item) => (
              console.log('ITEM => ', item),
              <Item key={item.nanoId} item={item}>
                {item.adc && <AdditionalItem item={item.adc} nanoIdProduct={item.nanoId} />}

                {item.flavor && <ItemFlavor item={item.flavor} />}
               

                {adcTemporaryData && item.product.addons?.additionsIds?.length && 
                  <AdditionalList adcTemporaryData={adcTemporaryData} itemId={item.nanoId} />
                }
              </Item>
            ))
          ) : (
            <Text>Carrinho vazio</Text>
          )}
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
