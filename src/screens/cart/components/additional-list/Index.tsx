import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useState } from "react";
import { useCart } from "../../../../context/cartContext";

type Props = {
  itemId: number;
};

export const AdditionalList = () => {
  const [isVisible, setIsVisble] = useState<boolean>(true);
  const { adcTemporaryData } = useCart();

  if (!adcTemporaryData || adcTemporaryData.length === 0) return null;

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.btn}
        onPress={() => setIsVisble(!isVisible)}
      >
        <Text>+ Adicionais</Text>
      </TouchableOpacity>

      {isVisible &&
        adcTemporaryData.map((item) => (
          <View key={item.id} style={style.containerItem}>
            <View style={style.containerName}>
              <Text>+ {item.name}</Text>
            </View>
            <View style={style.containerPrice}>
              <Text>R$: {item.price}</Text>
            </View>
            <View style={style.containerBtn}>
              <TouchableOpacity style={style.btnAdd}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </View>
  );
};
