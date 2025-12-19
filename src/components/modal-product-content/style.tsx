import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },

  containerTitle: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    backgroundColor: "#1067F9",
  },

  containerContent: {
    width: "100%",
    height: "80%",
    flexDirection: "column",
  },

  containerBtn: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: '#C1C2C1'
  },

  //conteudo
  containerProp: {
    width: '100%',
    height: 40,
    flexDirection: 'row'

  },



  txtTitle: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 3,
  },

  txtBtn: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 3,
  },

  btn: {
    width: "60%",
    height: "70%",
    backgroundColor: "red",
    borderRadius: 20,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
