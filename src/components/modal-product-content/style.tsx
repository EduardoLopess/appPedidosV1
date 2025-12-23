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
    borderColor: '#C1C2C1'
  },

  containerContent: {
    width: "100%",
    height: "80%",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
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

  containerSection: {
    width: 200,
    height: 50,
    backgroundColor: '#1067F9',
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },

  txtTitleSection: {
    fontSize: 20,
    fontWeight: 500,
    color: 'white'

  },

  //conteudo
  containerProp: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    marginTop: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#b5bbb5ff',
    

  },

  containerName: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    borderRightWidth: 1,
    paddingLeft: 5,
    borderColor: '#C1C2C1'


  },

  containerPrice: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    borderRightWidth: 1,
    paddingLeft: 5,
    borderColor: '#C1C2C1'

  },

  containerBtnAdd: {
    width: '15%',
    height: '100%',
    justifyContent: 'center'

  },

  btnAdd: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4E9726'

  },


  txtPrice: {
    fontSize: 15

  },

  txtName: {
    fontSize: 15
  },



  txtTitle: {
    color: "white",
    fontWeight: "700",
    fontSize: 25,
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
