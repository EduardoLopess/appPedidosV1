import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    maxHeight: 50,
    
    backgroundColor: "#F0F0F0",
    flexDirection: "column",
  },

  containerItem: {
    
    flexDirection: "row",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#b5bbb5ff",
  },

  containerName: {
    flex: 2,
    borderColor: "#b5bbb5ff",
    borderRightWidth: 1,
    justifyContent: "center",
    paddingStart: 10,
  },

  containerPrice: {
    flex: 1.5,
    justifyContent: "center",
    borderRightWidth: 1,
    paddingStart: 10,
    borderColor: "#b5bbb5ff",
  },

  containerQtd: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: "#b5bbb5ff",
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  txt: {
    fontSize: 16
  }
});
