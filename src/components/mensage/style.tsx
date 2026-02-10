import { StyleSheet } from "react-native";

export default StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)", // fundo escuro transparente
    zIndex: 999,
    elevation: 999, // Android
  },
  box: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    marginBottom: 15,
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    fontWeight: "bold",
    color: "red",
  },
});
