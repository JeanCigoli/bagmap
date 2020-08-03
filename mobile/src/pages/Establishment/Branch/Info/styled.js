import { StyleSheet } from "react-native";
import cores from "../../../../styles/cores";

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
    left: 25,
  },

  containerImage: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
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

  containerLottie: {
    width: '100%',
    height: '80%',
  },

  details: {
    width: '90%',
    height: 200,
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: "center",
  },

  titleDetails: {
    width: '80%',
    fontSize: 18,
    textAlign: 'center',
  },

  location: {
    width: '90%',
    height: 150,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: cores.green_darker,
    marginTop: 20,
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },

  titleLocation: {
    width: '70%',
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.white,
    textAlign: 'left',
    lineHeight: 25
  },
  btnLocation: {
    width: '25%',
    height: '70%',
    backgroundColor: cores.orange_darker,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: "center",
  },

  images: {
    width: '90%',
    height: 150,
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "center",
    marginTop: 20,
  },

  btnImage: {
    width: 120,
    height: '80%',
    borderColor: cores.green_darker,
    borderWidth: 3,
    borderStyle: 'dashed',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: "center",
  },

  avatar: {
    width: 120,
    height: 125,
    borderRadius: 30,
    borderColor: cores.green_darker,
    borderWidth: 2,
    marginLeft: 10,
    position: "relative",
  },

  imageProfile: {
    width: "100%",
    height: "100%",
    borderRadius: 27,
    resizeMode: "cover",
  },

  iconClose: {
    position: "absolute",
    zIndex: 1,
    right: -12,
    top: -15
  }
});

