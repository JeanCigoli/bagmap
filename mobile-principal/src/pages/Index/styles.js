import { StyleSheet } from 'react-native';
import cores from '../../styles/cores';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: cores.blue_darker,
    position: "relative",
    zIndex: -1,
  },
  containerBack: {
    width: "100%",
    position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    zIndex: 1,
  },
  imageBottom: {
    width: '100%',
    resizeMode: 'contain',
    bottom: 200,
  },
  imageTop: {
    width: '100%',
    resizeMode: 'contain',
    top: -50,
  },
  containerTop: {
    width: "100%",
    position: "absolute",
    zIndex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  txtSaudacao: {
    marginTop: 125,
    width: 250,
    height: 80,
    fontSize: 38,
    color: cores.white,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 40,
  },
  txtSlogan: {
    marginTop: 40,
    width: 280,
    height: 65,
    fontSize: 22,
    lineHeight: 32,
    letterSpacing: 0.04,
    textAlign: "center",
    color: cores.white,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
  button: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    backgroundColor: cores.orange_darker,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  txtButton: {
    fontSize: 24,
    letterSpacing: 0.04,
    color: cores.white,
    fontWeight: "bold"
  },

})
