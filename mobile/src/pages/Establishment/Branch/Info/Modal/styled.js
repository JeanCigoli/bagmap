import { StyleSheet } from "react-native";
import cores from "../../../../../styles/cores";

export const styles = StyleSheet.create({
  modal: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    padding: 10,
    width: "90%",
    height: "75%",
    backgroundColor: cores.white,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: '100%',
    height: '70%',
  },
  search: {
    height: 50,
    marginBottom: 20
  },
  callout: {
    width: 200,
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  type: {
    color: "#666",
    marginTop: 5,
    textAlign: "center",
  },

  containerFooter: {
    width: '100%',
    marginTop: 15,
    paddingRight: 15,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  buttonNext: {
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.green_darker,
    borderRadius: 10,
  },

  txtButtonNext: {
    fontSize: 15,
    fontWeight: "bold",
    color: cores.white,
  },
});
