import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderBottomWidth: 1,
    borderColor: "#C1C2C1",
  },

  btn: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },

  containerItem: {
    width: "100%",
    height: 40,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#C1C2C1",

    paddingStart: 10,
  },

  containerName: {
    justifyContent: "center",
    flex: 2,
    borderRightWidth: 1,
    borderColor: "#C1C2C1",
  },

  containerPrice: {
    justifyContent: "center",
    paddingStart: 10,
    flex: 1,
    borderRightWidth: 1,
    borderColor: "#C1C2C1",
  },

  containerBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnAdd: {
    backgroundColor: 'green',
    height: 30,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
