import { Text, TouchableOpacity, View } from "react-native";
import { IconCart, IconMenu, IconTable } from "../components/icons/Icons";
import style from "./style";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

type NavigationProps = BottomTabNavigationProp<RootTabParamList>;

export const BottonNavigation = () => {
  const navigation = useNavigation<NavigationProps>();

  const [active, setActive] = useState<"Cardapio" | "Mesas" | "Carrinho">(
    "Mesas"
  );

  return (
    <View style={style.container}>
      <View style={style.containerBtn}>
        <TouchableOpacity
          style={
            active === "Cardapio" ? style.active : style.btn  
          }
          onPress={() => {
            navigation.navigate("Cardapio");
            setActive('Cardapio')
          }}
        >
          <IconMenu color={active === 'Cardapio' ? '#D1D1D1' : '#656665'}/>
          <Text style={ active === 'Cardapio' ? style.txtAtive : style.txt}>CARDÁPIO</Text>
        </TouchableOpacity>
      </View>

      <View style={style.line} />

      <View style={style.containerBtn}>
        <TouchableOpacity
          style={
            active === "Mesas" ? style.active : style.btn  
          }
          onPress={() => {
            navigation.navigate("Mesas");
            setActive('Mesas')
          }}
        >
          <IconTable color={active === 'Mesas' ? '#D1D1D1' : '#656665'}/>
          <Text style={ active === 'Mesas' ? style.txtAtive : style.txt}>MESAS</Text>
        </TouchableOpacity>
      </View>

      <View style={style.line} />

      <View style={style.containerBtn}>
        <TouchableOpacity
           style={
            active === "Carrinho" ? style.active : style.btn  
          }
          onPress={() => {
            navigation.navigate("Carrinho");
            setActive('Carrinho')
          }}
        >
          <IconCart color={active === 'Carrinho' ? '#D1D1D1' : '#656665'}/>
          <Text style={
            active === 'Carrinho' ? style.txtAtive : style.txt
          }>CARRINHO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
