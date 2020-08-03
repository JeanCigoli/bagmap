import { StyleSheet } from 'react-native';
import cores from '../../styles/cores';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: cores.white,
    justifyContent: "space-between",
  },
  txtSkip: {
    width: "90%",
    color: cores.grey,
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  containerSwipe: {
    width: "90%",
    height: "70%",
    backgroundColor: "red",
  },
  containerBtn: {
    width: "90%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 150,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.orange_darker,
    borderRadius: 50,
  },
  txtBtn: {
    color: cores.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  slideWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: cores.white
  },
  slide1: {
    width: "90%",
    height: "80%",
    position: "relative",
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#217867'
  },
  slide2: {
    width: "90%",
    height: "80%",
    position: "relative",
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#2EC4B6'
  },
  slide3: {
    width: "90%",
    height: "80%",
    position: "relative",
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#084438'
  },
  containerImg: {
    width: 250,
    height: 250,
    position: "absolute",
    top: -40,
    borderRadius: 30,
    backgroundColor: cores.white,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  txtSkipTitle: {
    width: "90%",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: cores.white,
  },
  txtSkipText: {
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    color: cores.green_darker,
    fontSize: 17,
    color: cores.white,
  },

}) 