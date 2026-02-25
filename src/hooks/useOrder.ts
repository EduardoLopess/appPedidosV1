import { Alert } from "react-native";
import { useOrderFlow } from "../context/orderFlow";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useControllOrder } from "../context/controllOrder";
import { Toast } from "toastify-react-native";

interface PropsHoock {}

type StackParamList = {
  Cardapio: undefined;
};

export const useOrder = () => {
  const { startOrder, resetOrderState } = useControllOrder();

  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const start = (id: number) => {
    const result = startOrder(id);

    if(result.status === 'already_exists') {
      navigation.navigate("Cardapio");
      return
    }

    if (result.status === 'created') {
      navigation.navigate("Cardapio");

      Toast.show({
        type: "success",
        text1: "PEDIDO INICIADO",
        autoHide: true,
        visibilityTime: 1500,
      });

      return;
    }
  };

  const finishOrder = () => {};

  const editOrder = () => {
    Alert.alert("PEDIDO EDITADO");
  };

  const cancelOrder = () => {
    Alert.alert (
      'Cancelar!',
      'Deseja cancelar o pedido?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () =>  resetOrderState()}
      ]
    )
  };

  return { start, finishOrder, cancelOrder };
};
