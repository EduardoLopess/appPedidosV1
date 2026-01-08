import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import style from "./style";
import { Table } from "../../components/table/Index";
import { useFilter } from "./Filter";

export const TableScreen = () => {
  const { searchTable, tableOrder, tableFilter, setSearch, search } =
    useFilter();

  return (
    <View style={style.container}>
      <View style={style.containerFilter}>
        <View style={style.containerSearch}>
          <TouchableOpacity style={style.btnSearch} onPress={Keyboard.dismiss}>
            <TextInput
              keyboardType="numeric"
              placeholder="Buscar..."
              value={search}
              onChangeText={(search) => {
                searchTable(search);
                setSearch(search);
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={style.containerStatus}>
          <TouchableOpacity
            style={[style.btnStatus, { backgroundColor: "#32CD32" }]}
            onPress={() => tableOrder('LIVRE')}
          >
            <Text style={style.txtBtn}>LIVRES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.btnStatus, { backgroundColor: "#E90000" }]}
            onPress={() => tableOrder('OCUPADA')}
          >
            <Text style={style.txtBtn}>OCUPADA</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.containerTable}>
        <FlatList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "center",
          }}
          data={tableFilter}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Table
              id={item.id}
              tableNumber={item.tableNumber}
              statusTable={item.statusTable}
            />
          )}
        />
      </View>
    </View>
  );
};
