import { StyleSheet } from 'react-native';
import cores from '../../../styles/cores';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: cores.white,
  },

  containerTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  txtTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
  },

  icon: {
    position: "absolute",
    left: 25
  },

  containerForm: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },

  containerCode: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 25
  },  

  textCode: {
    width: 70,
    height: "80%",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 30
  },

  txtDesc: {
    width: "90%",
    height: "auto",
    textAlign: "center",
    fontSize: 19,
    margin: 10,
    marginBottom: 35
  },  

  containerFooter: {
    flex: 1,
    paddingRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonNext: {
    width: 150,
    height: 50,
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

  modal: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    padding: 10,
    width: "90%",
    height: "70%",
    backgroundColor: cores.white,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageModal: {
    width: "80%",
    height: 280,
  },
  txtModalTitle: {
    width: "80%",
    height: "auto",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10
  },
  txtModal: {
    width: "80%",
    height: "auto",
    textAlign: "center",
    fontSize: 18,
    margin: 10,
    marginBottom: 35
  }

})