import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import style from "./style";
import { Table } from "../../components/table/Index";

export const TableScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.containerFilter}>
        <View style={style.containerSearch}>
          <TouchableOpacity style={style.btnSearch}>
            <Text>Buscar...</Text>
          </TouchableOpacity>
        </View>

        <View style={style.containerStatus}>
          <TouchableOpacity
            style={[style.btnStatus, { backgroundColor: "#32CD32" }]}
          >
            <Text style={style.txtBtn}>LIVRES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.btnStatus, { backgroundColor: "#E90000" }]}
          >
            <Text style={style.txtBtn}>OCUPADA</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.containerTable}>
        <Table id={1} tableNumber={1} statusTable={false} />
        <Table id={1} tableNumber={1} statusTable={false} />
        <Table id={1} tableNumber={1} statusTable={true} />
        <Table id={1} tableNumber={1} statusTable={false} />
        <Table id={1} tableNumber={1} statusTable={true} />
        <Table id={1} tableNumber={1} statusTable={false} />
        <Table id={1} tableNumber={1} statusTable={true} />
        <Table id={1} tableNumber={1} statusTable={true} />
        <Table id={1} tableNumber={1} statusTable={true} />
       
        
      </View>
    </View>
  );
};
