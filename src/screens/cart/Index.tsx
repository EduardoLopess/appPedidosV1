import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useOrder } from "../../hooks/useOrder";

export const CartScreen = () => {

    const {finishOrder} = useOrder()
  return (
    <>
      <TouchableOpacity onPress={finishOrder}>
        <Text>FECHAR</Text>
      </TouchableOpacity>
    </>
  );
};
