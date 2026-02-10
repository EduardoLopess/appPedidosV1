import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  containerContent: {
    flex: 1,
  },

  containerTotal: {
    height: 100,
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#C1C2C1",
    justifyContent: "center",
    alignItems: "center",
  },

  TxtTotal: {
    fontSize: 30

  },

  containerBtnActions: {
    flexDirection: "row",
    height: 100,
    borderTopWidth: 2,
    borderColor: "#C1C2C1",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  btnCancel: {
    width: "40%",
    backgroundColor: "red",
    height: "50%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  txtCancel: {
    color: "white",
    fontWeight: "bold",
  },

  btnFinish: {
    width: "40%",
    backgroundColor: "green",
    height: "50%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  txtFinish: {
    color: "white",
    fontWeight: "bold",
  },
});
