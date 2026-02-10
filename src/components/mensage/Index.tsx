import { Text, TouchableOpacity, View } from "react-native";
import { useControllOrder } from "../../context/controllOrder";
import style from "./style";

export const Mensage = () => {
  const { mensageValue, resetMensage } = useControllOrder();
  if (!mensageValue) return null;

  return (
    <View style={style.overlay}>
      <View style={style.box}>
        <Text style={style.text}>{mensageValue}</Text>
        <TouchableOpacity onPress={resetMensage}>
          <Text style={style.button}>FECHAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
