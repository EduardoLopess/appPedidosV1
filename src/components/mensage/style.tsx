import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999,
    position: "absolute",
  },

  containerMensage: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    zIndex: 99999,
  },
});
