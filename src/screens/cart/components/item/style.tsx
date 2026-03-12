import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 10,
  },

  containerItem: {
    backgroundColor: '#F0F0F0',
    flexDirection: "row",
    width: "100%",
    minHeight: 60,
    borderTopWidth: 1,
    borderColor: '#C1C2C1',
    borderBottomWidth: 1
  },

  txt: {
    fontSize: 15,
  },

  containerName: {
    flex: 1,
    justifyContent: "center",
    borderRightWidth: 1,
    paddingStart: 10,
    borderColor: '#C1C2C1'
  },

  containerPrice: {
    flex: 0.5,
    justifyContent: "center",
    borderColor: '#C1C2C1',
   
    alignItems: "center",
  },

  containerBtn: {
    flex: 1,
    flexDirection: "row",
    
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  qtd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  

  containerChildren: {},
});
