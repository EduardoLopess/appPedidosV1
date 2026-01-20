import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useOrder } from "../../hooks/useOrder";

export const CartScreen = () => {

    const {finishOrder, cancelOrder} = useOrder()
  return (
    <>
      <TouchableOpacity onPress={cancelOrder}>
        <Text>FECHAR</Text>
      </TouchableOpacity>
    </>
  );
};
