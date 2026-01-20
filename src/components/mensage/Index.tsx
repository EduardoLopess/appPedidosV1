import { Text, Touchable, TouchableHighlight, View } from "react-native";
import { useControllOrder } from "../../context/controllOrder";
import style from "./style";

export const Mensage = () => {
  const { mensageValue, resetMensage } = useControllOrder();
  if (!mensageValue) return null;

  return (
    
    <View style={style.container}>
        <View style={style.containerMensage}>
            <Text>{mensageValue}</Text>
            <TouchableHighlight onPress={resetMensage}>FECHAR</TouchableHighlight>
        </View>
    </View>
  )
 
};
