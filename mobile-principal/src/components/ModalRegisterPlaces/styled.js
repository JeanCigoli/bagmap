import {StyleSheet} from 'react-native';
import cores from "../../styles/cores";


export const styles = StyleSheet.create({

    modal:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
        // justifyContent: "center",
    },

    modalView: {
        width: "95%",
        height: "85%",
        // marginTop: 100,
        backgroundColor: cores.white,
        borderRadius: 30,
        // alignItems: "center",
    },
    containerTitle : {
        width: "100%",
        height: 65,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: cores.blue_darker,
    },
    txtModalTitle: {
        width: "100%",
        fontSize: 25,
        textAlign: "center",
        // marginLeft: 13, 
        color: "#000000",
        fontWeight: "bold",
    },
    underlineTitle: {
        width: "45%",
        height: "10%",
        marginLeft: "5%",
        borderRadius: 10,
        backgroundColor: cores.orange_darker,
    },

    containerInputs: {
        width:"100%",
        height: 215,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: cores.blue
    },

    name: {
        width: "85%",
    },

    description: {
        width: "85%",
        height: 100,
        marginTop: 25
    },

    containerImages: {
        width: "100%",
        height: 150,
        justifyContent: "center",
        // backgroundColor: cores.orange_darker
    },

    containerPickImage: {
        width: "50%",
        height: 150,
        alignItems: "flex-end",
        justifyContent: "center",
        // backgroundColor: cores.red
    },

    buttonPickImage:{
       width: "95%",
       height: 140,
    //    marginLeft: 20,
       borderRadius: 20,
       alignItems: "center",
       justifyContent: "center",
       borderColor: "#9e9e9e",
       borderStyle: "dashed",
       borderWidth: 4,
       backgroundColor: "#D4D7D6",
    },

    image: {
        position: "absolute",
        width:"50%",
        height: 150,
        marginLeft: "50%",
        justifyContent: "center",
        alignItems: "flex-end",
        overflow: "hidden",
        // backgroundColor: cores.blue
    },

    buttons: {
        // position: "absolute",
        width: "100%",
        height: 65,
        justifyContent: "center",
        // backgroundColor: cores.red
    },

    containerButtonCancel: {
        width: "50%",
        height: 40,
        alignItems: "center",
        // backgroundColor: cores.red,
    },

    buttonCancel: {
        // position: "absolute",
        width: 125,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "5%",
        backgroundColor: cores.green_darker,
        borderRadius: 10,
      },

    containerButtonAdd: {
        position: "absolute",
        width: "50%",
        height: 40,
        marginLeft: "50%",
        alignItems: "center",
        // backgroundColor: cores.blue_darker,
    },

      buttonAdd: {
        // position: "absolute",
        width: 120,
        height: 40,
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