import { Alert } from "react-native";
import { useOrderFlow } from "../context/orderFlow";

interface PropsHoock {}

export const useOrder = () => {
  const { closeTableDialog, tableAvailable, resetOrder } = useOrderFlow();

  const startOrder = (id: number) => {
    const result = tableAvailable(id);

    if (!result.ok) {
      switch (result.error) {
        case "OCCUPIED":
          Alert.alert("MESA OCUPADA");
          break;

        case "LOCKED":
          Alert.alert("PEDIDO EM ANDAMENTO");
          break;

        case "NOT_FOUND":
          Alert.alert("MESA NÃO EXISTE");
          break;

        case "INVALID_ID":
          Alert.alert("ID INVÁLIDO");
          break;
      }

      return; // 🔴 SEMPRE retorna em erro
    }
  };

  const finishOrder = () => {
    resetOrder();
    closeTableDialog();
  };

  const editOrder = () => {
    Alert.alert("PEDIDO EDITADO");
  };

  return { startOrder, finishOrder };
};
