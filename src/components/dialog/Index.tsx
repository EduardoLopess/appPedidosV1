import { View, Text } from "react-native";
import style from "./style";
import { useOrderFlow } from "../../context/orderFlow";
import { useControllOrder } from "../../context/controllOrder";

export const TableIdentificationDialog = () => {
  const { isTableDialogVisibily, orderTableNumber } = useControllOrder();
  if (!isTableDialogVisibily) return null;
  
 



  if (isTableDialogVisibily) {
    return (
      <View style={style.container}>
        <View style={style.content}>
          <Text style={style.txt}>PEDIDO INICIADO MESA {orderTableNumber}</Text>
        </View>
      </View>
    );
  }
};
