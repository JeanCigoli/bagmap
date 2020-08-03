import { StyleSheet } from 'react-native';
import cores from '../../../styles/cores';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: cores.white,
  },

  scrollView: {
    width: "100%",
    height: "100%",
  },

  containerData: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },

  containerKeyboard: {
    width: "100%",
    height: "100%",
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
    flex: 6,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 30,
  },

  containerFooter: {
    flex: 1,
    paddingRight: 15,
    alignItems: "flex-end",
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

  txtSel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 25
  },

  iconPassword: {
    position: "absolute",
    right: 35,
    top: 35
  },

  avatar: {
    margin: 25,
    overflow: "hidden",
    width: 230,
    height: 230,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
    borderColor: cores.green_darker,
    borderWidth: 2,
  },

  imageProfile: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
    resizeMode: "stretch"
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