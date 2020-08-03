import { StyleSheet } from 'react-native';
import cores from '../../../../styles/cores';

export const styles = StyleSheet.create({

  scrollView: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  containerKeyboard: {
    backgroundColor: cores.white
   },

  containerImage: {
    position: "absolute",
    width: "100%",
  },

  imgMap: {
    width: "100%",
    resizeMode: "cover",
  },

  containerForm: {
    width: "100%",
    height: "100%",
    marginTop: "60%",
    overflow: "hidden",
    backgroundColor: cores.white,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  txtTitle: {
    width: "100%",
    height: 50,
    marginTop: "5%",
    textAlign: "center",
    color: cores.green_darker,
    fontSize: 28,
    letterSpacing: 0.04,
    fontWeight: "bold",
  },

  containerButtons: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 40
  },
  
  button: {
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.green_darker,
    borderRadius: 10,
  },

  txtButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: cores.white,
  },


})