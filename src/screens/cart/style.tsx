import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
    flexDirection: 'column',
    height: 100,
    borderTopWidth: 2,
    borderColor: "#C1C2C1",
    justifyContent: "center",
    alignItems: "center",
   
  },

  btnCancel: {
    width: "40%",
    backgroundColor: "transparent",
    height: "50%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    
   
  },

  txtCancel: {
    color: "red",
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },

  btnFinish: {
    width: "40%",
    backgroundColor: "green",
    height: "40%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginBottom: 15
  },

  txtFinish: {
    color: "white",
    fontWeight: "bold",
  },
});
