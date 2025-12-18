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
import { useFilter } from "./Filter";

export const TableScreen = () => {

  const {searchTable, tableOrder, tableFilter, setSearch, search} = useFilter()
 
  return (
    <View style={style.container}>
      <View style={style.containerFilter}>
        <View style={style.containerSearch}>
          <TouchableOpacity style={style.btnSearch} onPress={Keyboard.dismiss}>
            <TextInput
              keyboardType="numeric"
              placeholder='Buscar...'
              value={search}
              onChangeText={(search) => {
                searchTable(search)
                setSearch(search)
              }}
            />
           
          </TouchableOpacity>
        </View>

        <View style={style.containerStatus}>
          <TouchableOpacity
            style={[style.btnStatus, { backgroundColor: "#32CD32" }]}
            onPress={() => tableOrder(false)}
          >
            <Text style={style.txtBtn}>LIVRES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.btnStatus, { backgroundColor: "#E90000" }]}
            onPress={() => tableOrder(true)}
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
