import {StyleSheet} from 'react-native';
import cores from "../../styles/cores";


export const styles = StyleSheet.create({

    modal:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        // justifyContent: "center",
    },

    modalView: {
        width: "85%",
        height: "55%",
        marginTop: 200,
        backgroundColor: cores.white,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },

    txtModalTitle: {
        width: "75%",
        height:"12%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: "15%",
    },

    txtModalMessage: {
        width: "80%",
        height:"25%",
        textAlign: "center",
        fontSize: 15,

    },

    txtShowEmail: {
        width: "40%",
        height:"5%",
        textAlign: "center",
        fontSize: 15,

    },

    txtEmail: {
        width: "80%",
        height:"10%",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"

    },

    button: {
        width: 120,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        backgroundColor: cores.green_darker,
        borderRadius: 10,
      },
    
    txtButton: {
        fontSize: 15,
        fontWeight: "bold",
        color: cores.white,
    },
    conatinerImage: {
        position: "absolute",
        width: 140,
        height: 140,
        marginTop: 130,
        backgroundColor: cores.white,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    },

    imageModal: {
        width: 120,
        height: 120,
        resizeMode: "stretch",
        
    },

})