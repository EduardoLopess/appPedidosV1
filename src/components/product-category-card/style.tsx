import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 350,
    height: 80,
    backgroundColor: "#3C4B64",
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    borderRadius: 15
   
  },

  txt: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 3,
    
  },


  containerModal: {
    flex: 1,
    flexDirection: 'column'
  }
});
