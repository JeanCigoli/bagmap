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

  containerImage: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },

  containerForm: {
    flex: 4,
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

})