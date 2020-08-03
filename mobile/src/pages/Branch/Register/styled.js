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
    flex: 5,
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
  
  stepContainer: {
    width: '100%',
    height: 8,
    flexDirection: "row",
    justifyContent: 'flex-start',
  },

  step: {
    width: '50%',
    height: '100%',
    backgroundColor: cores.blue_darker,
  },

  imageProfile: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  avatar: {
    margin: 20,
    overflow: "hidden",
    width: 200,
    height: 200,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
    borderColor: cores.green_darker,
    borderWidth: 2,
  },

  txtSel: {
    marginBottom: 15,
    fontWeight: "bold",
  },

  txtInfo: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: "center",
  }

})