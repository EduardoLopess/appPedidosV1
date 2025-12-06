import { Text, TouchableOpacity, View } from "react-native";
import { IconCart, IconMenu, IconTable } from "../components/icons/Icons";
import style from "./style";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

type NavigationProps = BottomTabNavigationProp<RootTabParamList>

export const BottonNavigation = () => {

    const navigation = useNavigation<NavigationProps>()

    const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <View style={style.container}>
      <View style={style.containerBtn}>
        <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Cardapio')}>
          <IconMenu />
          <Text style={style.txt}>CARDÁPIO</Text>
        </TouchableOpacity>
      </View>

      <View style={style.line} />

      <View style={style.containerBtn}>
        <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Mesas')}>
          <IconTable />
          <Text style={style.txt}>MESAS</Text>
        </TouchableOpacity>
      </View>

      <View style={style.line} />

      <View style={style.containerBtn}>
        <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Carrinho')}>
          <IconCart />
          <Text style={style.txt}>CARRINHO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
