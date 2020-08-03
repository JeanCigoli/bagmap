import { StyleSheet } from 'react-native';
import cores from '../../styles/cores';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    justifyContent: "flex-start",
  },
  containerBackground: {
    width: "100%",
    height: "45%",
    position: "absolute",
    borderBottomLeftRadius: 80,
    backgroundColor: cores.green_darker
  },
  containerAvatar: {
    marginTop: 25,
    width: "90%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  txtSubCompany: {
    width: "90%", 
    color: cores.whiteTransparent,
    marginTop: 35
  },
  containerCompany: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  txtCompany: {
    width: "80%",
    color: cores.white,
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  containerData: {
    width: "90%",
    height: "100%",
    marginTop: 20,
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  containerScroll: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLottie: {
    width: "100%",
    height: 400,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitle: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  containerText: {
    width: "100%",
    height: 200,
  },
  title: {
    width: "100%",
    marginTop: 10,
    fontSize: 23,
    color: cores.white,
    textAlign: 'center',
    fontWeight: "bold",
  },
  text: {
    width: "100%",
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25,
  },
  buttonNew: {
    width: 300,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.green_darker,
    borderRadius: 10,
    marginTop: 30,
  },
  txtButtonNew: {
    fontSize: 19,
    fontWeight: "bold",
    color: cores.white,
  },

  containerNext: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20
  },

  buttonNext: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.orange_darker,
    borderRadius: 10,
  },

  txtButtonNext: {
    fontSize: 15,
    fontWeight: "bold",
    color: cores.white,
  },

  branch: {
    width: "100%",
    height: "74%",
    marginTop: 15,
  },

  scrollView: {
    width: "100%",
    height: "100%",
  },

  containerBranch: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    position: "relative",
  },

  branchData: {
    width: "47%",
    height: 320,
    borderRadius: 20,
    marginTop: 10,
    overflow: "hidden",
  },

  branchViewData: {
    width: "100%",
    height: 320,
  },

  branchImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  supBranch: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.4,
    zIndex: 1,
  },

  txtBranch: {
    position: "absolute",
    color: cores.white,
    bottom: 25,
    left: 5,
    zIndex: 2,
    fontWeight: "bold",
    fontSize: 15,
  }
}) 