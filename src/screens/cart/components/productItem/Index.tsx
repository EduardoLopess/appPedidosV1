import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";

type Props = {
  children?: React.ReactNode;
};

export const ProductItem = ({ children }: Props) => {
  return (
    <View style={style.container}>
      <View style={style.containerItem}>
        <View style={style.containerName}>
          <Text style={style.txt}>Paster carne</Text>
        </View>
        <View style={style.containerPrice}>
            <Text style={style.txt}>R$: 99,99</Text>
        </View>
        <View style={style.containerQtd}>
            <Text style={style.txt}>10x</Text>
        </View>
        <View style={style.containerBtn}>
          <TouchableOpacity style={style.btn}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>{children}</View>
    </View>
  );
};
