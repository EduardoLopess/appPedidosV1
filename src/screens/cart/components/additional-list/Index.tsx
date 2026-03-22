import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useState } from "react";
import { useCart } from "../../../../context/cart/cartContext";
import { formatPrice } from "../../../../utils/format/formatPrice";
import { Aditional } from "../../../../utils/types/ProductType";

type Props = {
  adcTemporaryData: Aditional[],
  itemId: string
};

export const AdditionalList = ({adcTemporaryData, itemId}: Props) => {
  const [isVisible, setIsVisble] = useState<boolean>(false);
  const {addAdditionsItemCart} = useCart()
 
  
  //if (!adcTemporaryData || adcTemporaryData.length === 0) return null;

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.btn}
        onPress={() => setIsVisble(!isVisible)}
      >
        <Text>+ Adicionais</Text>
      </TouchableOpacity>

   
     {isVisible &&
        adcTemporaryData!.map((item) => (
          <View key={item.id} style={style.containerItem}>
            <View style={style.containerName}>
              <Text>+ {item.name}</Text>
            </View>
            <View style={style.containerPrice}>
              <Text>{formatPrice(item.price)}</Text>
            </View>
            <View style={style.containerBtn}>
              <TouchableOpacity style={style.btnAdd} onPress={() => addAdditionsItemCart(item.id, itemId)}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
     
     
     
   
    </View>
  );
};
