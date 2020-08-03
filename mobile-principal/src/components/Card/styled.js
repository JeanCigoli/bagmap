import {StyleSheet} from 'react-native';
import cores from '../../styles/cores';

export const styles = StyleSheet.create({

    containerCard:{
        width: 180,
        height: 180,
        marginLeft: 30,
        overflow: "hidden",
        resizeMode: "cover",
        borderRadius: 20,
        backgroundColor: "#dbd7d7",
    },
    txtCard: {
        position: "absolute",
        width: "90%",
        height: "10%",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 155,
        marginLeft: 10,
        color: cores.white,
        // backgroundColor: cores.red
    }
 
});