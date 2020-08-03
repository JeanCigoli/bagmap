import {StyleSheet} from 'react-native'
import  cores from '../../styles/cores';


export const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: cores.white,
    },
    containerScroll:{
        flex:1
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

    containerTopTwo: {
        width: "100%",
        height: 50,
        // marginBottom: "7%",
        // backgroundColor: cores.red,
    },

    txtHelloPerson: {
        width: "100%",
        fontSize: 32,
        marginLeft: 5,
        fontWeight: "bold",
    },

    underlineTxtHello: {
        width: "22%",
        height: "13%",
        marginLeft: "5%",
        // marginBottom: "1%",
        borderRadius: 10,
        backgroundColor: cores.orange_darker,
    },

    containerAlertFindPlaces: {
        width: "100%",
        height: 230,
        // justifyContent: 'center',
        // backgroundColor: cores.orange
    },
    
    containerInformationFindPlaces: {
        width: "95%",
        height: "78%",
        alignSelf: "center",
        marginTop: "7%",
        borderRadius: 30,
        backgroundColor: cores.blue,
    },

    txtFindLostPlaces:{
        width: "75%",
        height: "55%",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: "6%",
        marginLeft: "5%",
        // backgroundColor: cores.blue
    },

    containerImage: {
        position: "absolute",
        overflow: "hidden",
        alignItems: "center",
        // justifyContent: "center",
        // marginTop: 10,
        marginLeft: "55%",
        width: 152,
        height: "100%",
        // backgroundColor: cores.blue

    },

    imageLogo: {
        width: "5%",
        height: "12.5%",
        resizeMode: "cover",
        // overflow: "hidden",
        marginLeft: "10%",
        marginTop: "3%",
        // backgroundColor: cores.blue_darker
    },

    txtBranch: {
        position: "absolute",
        marginTop: "40%",
        marginLeft: "15.5%",
        color: "rgba(0, 0, 0, 0.6)",
        // backgroundColor: cores.blue_darker
    },
    containerPlacesByUsers: {
        width: "100%",
        height: 240,
        justifyContent: "center",
        // backgroundColor: cores.red
    },
    containerTitleCategory : {
        width: "100%",
        height: "15%",
        // backgroundColor: cores.blue,
    },
    txtCategory: {
        width: "100%",
        fontSize: 21,
        marginLeft: 10, 
        color: "#084438",
        fontWeight: "bold",
    },

    underlineTxtCategory: {
        width: "20%",
        height: "16%",
        marginLeft: "5%",
        borderRadius: 10,
        backgroundColor: cores.orange_darker,
    },
    containerCards: {
        height: 180,
        marginTop: 15,
        // backgroundColor: cores.orange
    },
    card: {
        width: 180,
        height: 180,
        marginLeft: 30,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
        borderRadius: 20,
        backgroundColor: "#c2c2c2",
        // backgroundColor: "#dbd7d7",
    },

    cardBall: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "#dbd7d7"
    
    },
    containerAddPlaces: {
        width: "100%",
        height: 155,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: cores.red
    },
    containerInformationAddPlaces: {
        width: "95%",
        height: "80%",
        justifyContent: "center",
        // alignItems: "center",
        borderRadius: 30,
        backgroundColor: cores.blue,
    },
    txtInformationAddPlaces: {
        width: "75%",
        height: "45%",
        fontWeight: "bold",
        fontSize: 20,
        // marginTop: "6%",
        marginLeft: "5%",
        // backgroundColor: cores.orange
    },
    txtShareWithFriends: {
        // position: "absolute",
        // marginTop: "40%",
        marginLeft: "5%",
    },
    btnAddPlace: {
        position: "absolute",
        width: 30,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "70%",
        // marginTop:
        borderRadius: 25,
        backgroundColor: cores.orange_darker,

    },
    containerPosts: {
        width: "100%",
        height: 430,
        // marginBottom: 50,
        // backgroundColor: cores.red
    },
    containerTitlePosts: {
        width: "100%",
        height: "8%",
        // backgroundColor: cores.green,
    },
    txtPosts: {
        width: "100%",
        fontSize: 21,
        textAlign: "center",
        color: "#084438",
        // backgroundColor: cores.blue,
        fontWeight: "bold",
    },

    underlineTxtPosts: {
        width: "16.5%",
        height: "15%",
        alignSelf: "center",
        marginLeft: "3%",
        borderRadius: 10,
        backgroundColor: cores.orange_darker,
    },
    containerPost: {
        width: "100%",
        height: "92%",
        // backgroundColor: cores.orange
    },
    containerPostOne: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: cores.blue
    },
    containerPostTwo: {
        position:"absolute",
        width: "50%",
        height: "100%",
        justifyContent: "center",
        // alignItems: "center",
        alignSelf: "flex-end",
        // backgroundColor: cores.red
    },

    
    containerCardPost:{
        width: 170,
        height: 170,
        marginLeft: 5,
        marginTop: 15,
        overflow: "hidden",
        resizeMode: "cover",
        borderRadius: 20,
        backgroundColor: "#dbd7d7",
    },
    txtUser: {
        position: "absolute",
        width: "90%",
        height: "10%",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 140,
        marginLeft: 10,
        color: cores.white,
        // backgroundColor: cores.red
    },
    containerMaps: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },

    containerContentMaps: {
        width: "95%",
        height: "80%",
        justifyContent: "center",
        // alignItems: "center",
        borderRadius: 30,
        backgroundColor: cores.blue,
    },

    containerEstablishment: {
        width: "100%",
        height: 240,
        // backgroundColor: cores.red,
        justifyContent: "center",
    },
  




 


})