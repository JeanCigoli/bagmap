import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useForm } from 'react-hook-form';
import TextInput from '../../../../components/TextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { userFormSchema } from '../../../../utils/validation';
import Icon from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import ModalSuccess from "../../../../components/ModalSuccess";
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';
import { jsonRegister } from '../../../../utils/json';
import { sendAllForms } from '../../../../store/modules/register/action';


const RegisterUser = ({ navigation }) => {

  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [email, setEmail] = useState("");

  const person = useSelector(state => state.register.person);
  const address = useSelector(state => state.register.address);
  const success = useSelector(state => state.register.success);
  // const email = useSelector(state =>state.register.

  const { register, errors, setValue, handleSubmit } = useForm({
    validationSchema: userFormSchema,
  });

  const [passwordSecury1, setPasswordSecury1] = useState(true);
  const [passwordSecury2, setPasswordSecury2] = useState(true);
  const [clickSubmit, setClickSubmit] = useState(false);
  const [image, setImage] = useState({
    preview: "",
    type: ""
  });

  const setPassword = () => {
    setPasswordSecury1(!passwordSecury1);
  }

  const setPasswordConfirm = () => {
    setPasswordSecury2(!passwordSecury2);
  }


  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpa, nós precisamos dessa permissão para continuar');
        }
      }
    })();
  }, []);

  const backRegisterPerson = () => {
    navigation.goBack();
  }

  const goLogin = () => {
    navigation.push("Login");
  }

  useEffect(() => {
    if(success) {
      setVisibility(true);
    }
  }, [success])

  const goSendRegistration = data => {
    if(!clickSubmit){
      setClickSubmit(true);
      const dataFormat = jsonRegister(person, address, data, image);
      setEmail(dataFormat.person.email); 
      dispatch(sendAllForms(dataFormat));
      //  alert(JSON.stringify(dataFormat))
    }
  }

  useEffect(() => {
    register({ name: "username" });
    register({ name: "password" });
    register({ name: "confirmPassword" });
  }, [register]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [5, 5],
      quality: 0.75,
      base64: true,
    });

    if (!result.cancelled) {
      setImage({
        preview: result.uri,
        base64: result.base64.replace(/(?:\r\n|\r|\n)/g, ''),
        type: result.type
      });
    }
  };

  return (

    <KeyboardAwareScrollView 
        style={styles.containerKeyboard} 
        resetScrollToCoords={{x:0, y:0}} 
        contentContainerStyle={styles.container} 
        scrollEnabled={false}>

      <View style={styles.containerImage}>
        <Image
          style={styles.imgMap}
          source={require("../../../../../assets/imgRegister.png")} />
      </View>


      <View style={styles.containerForm}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.containerData}>

            <Text style={styles.txtTitle}>Crie seu usuário</Text>
            <TouchableOpacity onPress={pickImage}>
              <View style={styles.avatar}>
                {image.preview === "" ? <Icon name={"camera"} size={65} color="#217867" /> :
                  <Image source={{ uri: image.preview }} style={styles.imageProfile} />
                }
              </View>
            </TouchableOpacity>


            <Text style={styles.txtSel}>Selecione uma foto de perfil</Text>

            <TextInput
              label='Usuário'
              keyboardType={"email-address"}
              errors={errors.email}
              onChangeText={text => { setValue("username", text, true) }} />

            <TextInput
              secureTextEntry={passwordSecury1}
              errors={errors.password}
              icon={<Icon style={styles.iconPassword} name={passwordSecury1 ? "eye-with-line" : "eye"} size={25} onPress={setPassword} color="#CCC" />}
              onChangeText={text => { setValue("password", text, true) }}
              label='Senha' />

            <TextInput
              secureTextEntry={passwordSecury2}
              errors={errors.confirmPassword}
              icon={<Icon style={styles.iconPassword} name={passwordSecury2 ? "eye-with-line" : "eye"} size={25} onPress={setPasswordConfirm} color="#CCC" />}
              onChangeText={text => { setValue("confirmPassword", text, true) }}
              label='Confirme a Senha' />

            <View style={styles.containerButtons}>

              <TouchableOpacity style={styles.button} onPress={backRegisterPerson}>
                <Text style={styles.txtButton}>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleSubmit(goSendRegistration)}>
                <Text style={styles.txtButton}>Próximo</Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      </View>

      <ModalSuccess 
            visible={visibility} 
            titulo={"Cadastro realizado com sucesso!"} 
            text={"Para concluir seu cadastro e começar a utilizar nossa plataforma precisamos que confirme seu email pelo link enviado!"}
            ShowEmail={"Foi enviado para:"}
            email={email}
            // img={"../../../assets/imgRegistrationOk.png"} 
            action={goLogin}/> 

    </KeyboardAwareScrollView >
  )
}

export default RegisterUser;