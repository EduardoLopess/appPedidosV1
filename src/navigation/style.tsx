import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },

  containerBtn: {
    flex: 1,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  btn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    color: 'white'
  },

  active: {
    backgroundColor: '#316FD8',
     width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  txtAtive: {
    color: '#D1D1D1'
  },

  

  line: {
    width: 1,
    backgroundColor: '#C1C2C1',
    height: '100%'
  },



  txt: {
    fontSize: 14,
    color: '#656665'
  }


});
