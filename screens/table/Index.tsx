import {
  Keyboard,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import style from "./style";
import { Table } from "../../components/table/Index";
import { useState } from "react";

export const TableScreen = () => {
  const table = [
    { id: 1, tableNumber: 1, statusTable: false },
    { id: 2, tableNumber: 2, statusTable: false },
    { id: 3, tableNumber: 3, statusTable: true },
    { id: 4, tableNumber: 4, statusTable: false },
    { id: 5, tableNumber: 5, statusTable: true },
    { id: 6, tableNumber: 6, statusTable: false },
  ];

  const [tableFilter, setTableFilter] = useState(table);
  const [searchTable, setSearchTable] = useState<string>("");

  const orderTable = (status: boolean, value?: string) => {

     if (!value) {
      setTableFilter(table);
      return;
    }


    const tableFilterArray = table.filter(
      (item) => item.statusTable === status
    );
    setTableFilter(tableFilterArray);
  };

  const searchTableBtn = (value: string) => {
    if (!value) {
      setTableFilter(table);
      return;
    }

    const tableFilterArray = table.filter((item) =>
      item.tableNumber.toString().includes(value)
    );
    setTableFilter(tableFilterArray);
  };

  return (
    <View style={style.container}>
      <View style={style.containerFilter}>
        <View style={style.containerSearch}>
          <TouchableOpacity style={style.btnSearch} onPress={Keyboard.dismiss}>
            <TextInput
              placeholder="Buscar..."
              keyboardType="numeric"
              value={searchTable}
              onChangeText={(text) => {
                setSearchTable(text);
                searchTableBtn(text)
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={style.containerStatus}>
          <TouchableOpacity
            style={[style.btnStatus, { backgroundColor: "#32CD32" }]}
            onPress={() => orderTable(false)}
          >
            <Text style={style.txtBtn}>LIVRES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.btnStatus, { backgroundColor: "#E90000" }]}
            onPress={() => orderTable(true)}
          >
            <Text style={style.txtBtn}>OCUPADA</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.containerTable}>
        {tableFilter.map((item) => (
          <Table
            key={item.id}
            id={item.id}
            tableNumber={item.tableNumber}
            statusTable={item.statusTable}
          />
        ))}
      </View>
    </View>
  );
};
