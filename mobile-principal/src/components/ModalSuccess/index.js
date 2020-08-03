 import React from 'react';
 import { styles } from "./styled";
 import { View, Text, Image, TouchableOpacity } from "react-native";
 import { Modal } from "react-native-paper";

 const ModalSuccess = ({visible,titulo, text, ShowEmail, email, action}) => {
     return(

        <Modal visible={visible} style={styles.modal}>
            
            <View style={styles.modal}>

                <View style={styles.modalView}>

                    <Text style={styles.txtModalTitle}>
                        {titulo}
                    </Text>

                    <Text style={styles.txtModalMessage}>
                        {text}
                    </Text>

                    <Text style={styles.txtShowEmail}>
                        {ShowEmail}
                    </Text>

                    <Text style={styles.txtEmail}>
                        {email}
                    </Text>
                
                    <TouchableOpacity onPress={action} style={styles.button}>
                        <Text style={styles.txtButton}>Ok</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.conatinerImage}>
                
                    <Image 
                        source={require("../../../assets/imgRegistrationOk.png")} 
                        style={styles.imageModal}/>
                
                </View>
            

            </View>

        </Modal>
     );
 }

 export default ModalSuccess;
