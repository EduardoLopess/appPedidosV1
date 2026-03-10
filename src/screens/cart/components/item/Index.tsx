import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Item = ({ children }: Props) => {
  return (
    <View style={style.container}>
      <View style={style.containerItem}>
        <View style={style.containerName}>
          <Text style={style.txt}>Pastel Carne</Text>
        </View>
        <View style={style.containerPrice}>
          <Text style={style.txt}>R$:20,00</Text>
        </View>
        <View style={style.containerBtn}>
          <TouchableOpacity style={[style.btn, {backgroundColor: 'green'}]}>
            <Text>+</Text>
          </TouchableOpacity>
          <View style={style.qtd}>
            <Text style={style.txt}>2x</Text>
          </View>

          <TouchableOpacity style={[style.btn, {backgroundColor: 'red'}]}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.containerChildren}>{children}</View>
    </View>
  );
};
