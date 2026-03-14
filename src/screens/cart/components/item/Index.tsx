import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";
import { ReactNode } from "react";
import { Cart } from "../../../../utils/types/ProductType";
import { useCart } from "../../../../context/cartContext";
import { formatPrice } from "../../../../utils/format/formatPrice";


type Props = {
  children?: ReactNode;
  item: Cart;
  
};

export const Item = ({ children, item }: Props) => {
  
  const {alterQtdItemCart, removeItem} = useCart()
  
  return (
    <View style={style.container}>
      <View style={style.containerItem}>
        <View style={style.containerName}>
          <Text style={style.txt}>{item.product.name}</Text>
        </View>
        <View style={style.containerPrice}>
          <Text style={style.txt}>{formatPrice(item.product.price)}</Text>
        </View>
        <View style={style.containerBtn}>
          <TouchableOpacity style={[style.btn, {backgroundColor: 'green'}]} onPress={() => alterQtdItemCart(item.nanoId)}>
            <Text>+</Text>
          </TouchableOpacity>
          <View style={style.qtd}>
            <Text style={style.txt}>{item.qtd}</Text>
          </View>

          <TouchableOpacity style={[style.btn, {backgroundColor: 'red'}]} onPress={() => removeItem(item.nanoId)}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.containerChildren}>{children}</View>
    </View>
  );
};
