import React from 'react';
 import { styles } from "./styled";
 import { Text, Image, TouchableOpacity } from "react-native";

 const Card = ({img, text}) => {

     return(

        <TouchableOpacity style={styles.containerCard}>
            <Image source={img}/>
            <Text style={styles.txtCard}>{text}</Text>
        </TouchableOpacity>

     );
 }

 export default Card;
