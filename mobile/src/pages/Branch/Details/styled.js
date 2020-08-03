import { StyleSheet } from "react-native";
import cores from "../../../styles/cores";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.white,
    position: "relative",
  },

  map: {
    width: "100%",
    height: 350,
    position: "absolute",
    zIndex: -1,
  },

  icon: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 5,
  },

  details: {
    flex: 1,
    backgroundColor: cores.white,
    marginTop: 300,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  scrollView: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  data: {
    width: "100%",
    height: "100%",
    backgroundColor: cores.red,
  },

  containerimage: {
    width: "100%",
    height: 300,
    paddingLeft: 15,
    paddingRight: 15,
  },

  containerData: {
    width: "100%",
    height: 230,
    padding: 15,
    alignItems: "flex-start",
  },

  typePlace: {
    padding: 5,
    marginLeft: 10,
    backgroundColor: cores.orange_darker,
    color: cores.white,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 16
  },

  name: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 15,
    marginBottom: 15,
  },

  normal: {
    marginLeft: 1,
    fontSize: 18,
    marginTop: 10,
  },

  iconNormal: {
    width: 100 
  },

  imagesDiv: {
    width: "100%",
    height: 270,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  imagesData: {
    width: 180,
    height: 220,
    borderRadius: 20,
    marginLeft: 10,
    overflow: "hidden",
  },

  images: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});
