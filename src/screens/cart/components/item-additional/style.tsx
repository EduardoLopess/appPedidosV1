import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#C1C2C1",
  },

  containerName: {
    flex: 1.5,
    
    justifyContent: "center",
    alignItems: 'center',
    paddingStart: 10,
    borderColor: "#C1C2C1",
  },

  containerPrice: {
    flex: 1,
    borderRightWidth: 1,
    justifyContent: "center",
    paddingStart: 10,
    borderColor: "#C1C2C1",
  },

  containerQtd: {
    flex: 0.5,
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C1C2C1",
  },

  containerBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C1C2C1",
  },

  btn: {
    width: 50,
    height: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
