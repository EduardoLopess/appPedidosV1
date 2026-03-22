import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { Aditional } from "../../../../utils/types/ProductType";
import { formatPrice } from "../../../../utils/format/formatPrice";
import { useCart } from "../../../../context/cart/cartContext";

type Props = {
  nanoIdProduct: string,
  item: Aditional[];
};

export const AdditionalItem = ({ item, nanoIdProduct }: Props) => {

  const {removeAdc} = useCart()

  return (
    <>
      {item.map((item) => (
        console.log('ADC NANO ID => ', item.nanoId),
        <View style={style.container} key={item.nanoId}>
          <View style={style.containerName}>
            <Text>+ {item.name}</Text>
          </View>

          <View style={style.containerPrice}>
            <Text>{formatPrice(item.price)}</Text>
          </View>

         

          <View style={style.containerBtn}>
            <TouchableOpacity style={style.btn} onPress={() => removeAdc(item.nanoId, nanoIdProduct)}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};
