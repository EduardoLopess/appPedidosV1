import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "white",
    width: 110,
    height: 150,
    elevation: 10,
    flexDirection: "column",
    position: 'relative'
  },

  containerNumber: {
    width: "100%",
    height: "25%",
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  containerImg: {
    width: "100%",
    height: "50%",
  },

  containerStatus: {
    width: "100%",
    height: "20%",
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtStatus: {
    color: 'white',
    fontWeight: 'bold'
  },

  
  txtNumber: {
    fontSize: 15,
    fontWeight: '500'
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: "contain"
  },
});
