import { View, Text } from "react-native";
import style from "./style";
import { useControllOrder } from "../../context/controllOrder";

export const TableIdentificationDialog = () => {
  const { isTableDialogVisibily, orderTableNumber } = useControllOrder();
  if (!isTableDialogVisibily || orderTableNumber === undefined) return null
  
    return (
      <View style={style.container}>
        <View style={style.content}>
          <Text style={style.txt}>PEDIDO INICIADO MESA {orderTableNumber}</Text>
        </View>
      </View>
    );
  
};
