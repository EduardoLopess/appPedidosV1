import { Alert } from "react-native";
import { useOrderFlow } from "../context/orderFlow";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useControllOrder } from "../context/controllOrder";

interface PropsHoock {}

type StackParamList = {
  Cardapio: undefined;
};

export const useOrder = () => {
  const { startOrder, resetOrderState } = useControllOrder();

  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const start = (id: number) => {
    const result = startOrder(id);

    if (result) {
      navigation.navigate("Cardapio");
      return;
    }
  };

  const finishOrder = () => {};

  const editOrder = () => {
    Alert.alert("PEDIDO EDITADO");
  };

  const cancelOrder = () => resetOrderState()

  return { start, finishOrder , cancelOrder};
};
