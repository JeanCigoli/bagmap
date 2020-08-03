import { StyleSheet } from 'react-native';
import cores from '../../styles/cores';

export const styles = StyleSheet.create({

  containerTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.white,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  containerKeyboard: {
    width: "100%",
    height: "100%",
  },
  containerTitle: {
    width: '100%',
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  txtAcess: {
    width: "40%",
    textAlign: "center",
    fontSize: 34,
    lineHeight: 36,
    letterSpacing: 0.04,
    color: cores.green_darker,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: {
      width: 2,
      height: 2
    }
  },
  imageLogin: {
    width: "60%",
    height: "80%",
    resizeMode: 'contain',
  },
  inputName: {
    width: "85%",
    height: 70,
    marginTop: 25,
    backgroundColor: cores.white
  },
  inputPassword: {
    width: "85%",
    height: 70,
    marginTop: 50,
    backgroundColor: cores.white
  },
  buttonSignIn: {
    width: "80%",
    height: 60,
    backgroundColor: cores.green_darker,
    borderRadius: 25,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  txtButtonSignIn: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.04,
    color: cores.white,
  },
  txtError: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.04,
    marginTop: 10,
    color: "#d10f21",
  },
  buttonSignUp: {
    width: "80%",
    height: 60,
    backgroundColor: cores.white,
    borderWidth: 2,
    borderColor: cores.green_darker,
    borderRadius: 25,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  txtButtonSignUp: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.04,
    color: cores.green_darker,
  },
  txtRememberPassword: {
    fontSize: 16,
    marginTop: 35,
    fontWeight: "100",
    lineHeight: 21,
    letterSpacing: 0.04,
    color: "black",
  },
  icon: {
    position: "absolute",
    right: 35,
    top: 35
  },
  txtRemember: {
    color: cores.orange,
  }

}) 