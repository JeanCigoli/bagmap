import { StyleSheet } from 'react-native';
import cores from '../../styles/cores';

export const styles = StyleSheet.create({

  container: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    position: "relative",
    backgroundColor: cores.white,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputName: {
    width: "85%",
    height: 70,
    marginTop: 0,
    backgroundColor: cores.white
  },
  txtError: {
    fontSize: 15,
    position: "absolute",
    bottom: 0,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.04,
    marginTop: 10,
    color: "#d10f21",
  },
}) 