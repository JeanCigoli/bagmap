import { StyleSheet } from 'react-native';
import cores from '../../styles/cores';

export const styles = StyleSheet.create({
  modal: {
    width: "100%",
    height: "100%", 
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    padding: 10,
    width: "80%",
    height: "50%",
    backgroundColor: cores.white,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageModal: {
    width: 150,
    height: 150,
    resizeMode: "stretch"
  },
  txtModalTitle: {
    width: "80%",
    height: "auto",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
 
})