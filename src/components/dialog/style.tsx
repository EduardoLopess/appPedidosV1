import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    zIndex: 99999,
    
    
  },

  content: {
    width: '90%',
    height: '100%',
    backgroundColor: "#2C363F",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    
 
  },

  txt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500
  }
});
