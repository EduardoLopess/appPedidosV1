import { Alert } from "react-native";
import { useOrderFlow } from "../context/orderFlow";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useControllOrder } from "../context/controllOrder";

interface PropsHoock {}

type StackParamList = {
  Produtos: undefined;
};

export const useOrder = () => {
  const { startOrder } = useControllOrder();

  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const start = (id: number) => {
    const result = startOrder(id);

    if (result) {
      navigation.navigate("Produtos");
      return;
    }
  };

  const finishOrder = () => {};

  const editOrder = () => {
    Alert.alert("PEDIDO EDITADO");
  };

  return { start, finishOrder };
};
