import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import mesaImg from "../../../assets/mesaCard.png";
import { useOrder } from "../../hooks/useOrder";

type TableProps = {
  id: number;
  tableNumber: number;
  statusTable: boolean;
};

export const Table = ({ id, tableNumber, statusTable }: TableProps) => {


  const {startOrder} = useOrder()


  return (
    <TouchableOpacity style={style.container} onPress={() => startOrder(id)}>
      <View style={style.containerNumber}>
        <Text style={style.txtNumber}>MESA {tableNumber}</Text>
      </View>

      <View style={style.containerImg}>
        <Image source={mesaImg} style={style.img} />
      </View>

      <View
        style={[
          style.containerStatus,
          { backgroundColor: statusTable ? "#E90000" : "#32CD32" },
        ]}
      >
        <Text style={style.txtStatus}>{statusTable ? "OCUPADA" : "LIVRE"}</Text>
      </View>
    </TouchableOpacity>
  );
};
