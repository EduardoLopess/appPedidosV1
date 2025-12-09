import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  containerTable: {
    paddingTop: 10,
    width: '100%',
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center'
  },

  //CONTAINER PAI
  containerFilter: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "white",
  },

  containerSearch: {
    width: "25%",
  },

  containerStatus: {
    flex: 1,
    flexDirection: "row",
    width: "70%",
    marginLeft: 2,
  },

  btnSearch: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
    elevation: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#C1C2C1",
  },

  btnStatus: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },

  ///TEXTS

  txtBtn: {
    color: "white",
    fontWeight: "bold",
  },

});
