import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerContent: {
    width: "85%",
    borderRadius: 20,
    backgroundColor: "#fff",
    height: "50%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  containerTop: {
    width: "100%",
    height: "20%",
    borderBottomWidth: 1,
    borderColor: "#b5bbb5ff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#356ac7ff",
  },

  txtTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },

  content: {
    flex: 1,

    justifyContent: "center",
  },

  containerItem: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    height: 45,
    borderColor: "#b5bbb5ff",
    alignItems: "center",
    paddingStart: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F0F0F0",
  },

  containerName: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    borderRightWidth: 1,
  },

  containerAvailable: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    borderRightWidth: 1,
    alignItems: 'center'
    
  },

  containerBtnAdd: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  txtItem: {
    fontSize: 18
  },

  btnAdd: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4E9726",
  },

  containerBtn: {
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    width: "100%",
    height: "20%",
    borderColor: "#b5bbb5ff",
  },

  btn: {
    width: "40%",
    height: "60%",
    backgroundColor: "red",
    borderRadius: 20,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  txtBtn: {
    color: "white",
    fontWeight: "700",
  },
});
