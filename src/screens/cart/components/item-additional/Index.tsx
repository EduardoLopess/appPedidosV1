import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { Aditional } from "../../../../utils/types/ProductType";
import { formatPrice } from "../../../../utils/format/formatPrice";

type Props = {
  item: Aditional[];
};

export const AdditionalItem = ({ item }: Props) => {
  return (
    <>
      {item.map((item) => (
        <View style={style.container} key={item.id}>
          <View style={style.containerName}>
            <Text>{item.name}</Text>
          </View>

          <View style={style.containerPrice}>
            <Text>{formatPrice(item.price)}</Text>
          </View>

          <View style={style.containerQtd}>
            <Text>{item.qtd}</Text>

          </View>

          <View style={style.containerBtn}>
            <TouchableOpacity style={style.btn}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};
