import React from 'react';
import { styles } from "./styled";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {TextInput} from 'react-native-paper';
import cores from  '../../styles/cores';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modal } from "react-native-paper";
 
const ModalRegisterPlaces = ({visible,titulo, name, description, action, nameBack}) => {

    const goBack = () => {
        action.navigate(nameBack)
    }

    return(

       <Modal visible={visible} style={styles.modal}>
           
           <View style={styles.modal}>

               <View style={styles.modalView}>

                    <View style={styles.containerTitle}>
                        <Text style={styles.txtModalTitle}> {titulo} </Text>
                        <View style={styles.underlineTitle}/>
                    </View>
                    <View style={styles.containerInputs}>
                        <TextInput
                            mode={"flat"}
                            label={name}
                            keyboardType={"default"}
                            // underlineColor={cores.green_darker}
                            theme={{
                            colors: {
                                primary: cores.green_darker,
                            }
                            }}
                            style={styles.name} />
                        <TextInput
                            mode={"flat"}
                            label={description}
                            keyboardType={"default"}
                            // underlineColor={cores.green_darker}
                            theme={{
                            colors: {
                                primary: cores.green_darker,
                            }
                            }}
                            style={styles.description} />
               </View>
               <View style={styles.containerImages}>
                    <TouchableOpacity style={styles.containerPickImage}>
                        <View style={styles.buttonPickImage}>
                            <Icon name="camera" size={55} color="#f2f0f0"/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.image}>
                        <Image source={require("../../../assets/imgModalRegisterPlace.png")}/>
                    </View>
               </View>
               <View style={styles.buttons}>
                    <View style={styles.containerButtonCancel}>
                        <TouchableOpacity  style={styles.buttonCancel} onPress={goBack}>
                            <Text style={styles.txtButton}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerButtonAdd}>
                        <TouchableOpacity  style={styles.buttonAdd}>
                            <Text style={styles.txtButton}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
               </View>
               </View>
           </View>

       </Modal>
    );
}

export default ModalRegisterPlaces;
