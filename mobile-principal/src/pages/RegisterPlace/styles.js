import {StyleSheet} from 'react-native';
import cores from '../../styles/cores';

export const styles = StyleSheet.create({
     
    container: {
        flex: 1
    },
    containerTopOne: {
        width: "100%",
        height: 120,
       justifyContent: "center",
        // backgroundColor: cores.blue,
    },

    btnMenu: {
        position: "absolute",
        width: "15%",
        height: "100%",
        marginLeft: 15,
        // marginTop: 30,
        // backgroundColor: cores.blue_darker,
        justifyContent: "center"
    },

    icon: {
        left:5
    },

    btnProfile: {
        position: "absolute",
        overflow: "hidden",
        width: 20,
        height: 65,
        marginLeft: "80%",
        marginTop: 10,
        alignItems: "center",
        // justifyContent: "center",
        borderRadius: 50,
        borderWidth: 2,
        backgroundColor: "#dbd7d7",
        borderColor: cores.green_darker,
    },

    txtViewProfile: {
        width: "20%",
        textAlign: "center",
        marginTop: 85,
        marginLeft: "77%",
        color: "#A7A3A3",
    },
    buttonCreatePlaces:{
        width: "15%",
        height: 55,
        borderRadius: 15,
        marginTop: 400,
        marginLeft: "82%",
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: cores.green_darker
    },
    containerMap: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
})