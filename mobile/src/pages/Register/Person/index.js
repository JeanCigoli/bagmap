import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import TextInput from '../../../components/TextInput/index';
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from './styles';
import ModalLoading from '../../../components/ModalLoading/index';
import { useForm } from 'react-hook-form';
import { personFormSchema } from '../../../utils/validation';
import * as ImagePicker from 'expo-image-picker';
import { Modal } from 'react-native-paper';
import { jsonRegister } from '../../../utils/jsonFormat';
import { useSelector, useDispatch } from 'react-redux';
import { newPerson } from '../../../store/modules/register/action';
import Constants from 'expo-constants';

const RegisterPerson = ({ navigation }) => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.register.user);
  const fetching = useSelector(state => state.register.fetching);
  const create = useSelector(state => state.register.create);

  const { register, errors, setValue, handleSubmit } = useForm({
    validationSchema: personFormSchema
  });

  const [passwordSecury, setPasswordSecury] = useState(true);
  const [image, setImage] = useState({
    preview: "",
    type: ""
  });
  const [modal, setModal] = useState(null);

  const setPassword = () => {
    setPasswordSecury(!passwordSecury);
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

  useEffect(() => {
    register("username");
    register("password");
  }, [register]);

  useEffect(() => {
    if (create?.status) {
      modalAction();
    }
  }, [create]);

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

  const modalAction = () => {
    setModal(!modal);
  }

  const backLogin = () => {
    navigation.navigate("RegisterUser");
  }

  const goRegisterPerson = data => {
    const userFormat = jsonRegister(user, data, image)
    dispatch(newPerson(userFormat));
  }

  const goValidCode = () => {
    modalAction();
    navigation.push("ValidCode");
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.select({
          ios: 'padding',
          android: null,
        })}
        style={styles.containerKeyboard}
      >

        <View style={styles.containerTitle}>

          <Icon style={styles.icon} name="chevron-left" size={30} onPress={backLogin} color="#000" />
          <Text style={styles.txtTitle}>Cadastre seu usuário</Text>

        </View>

        <View style={styles.containerForm}>

          <ScrollView style={styles.scrollView}>
            <View style={styles.containerData}>

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
                secureTextEntry={passwordSecury}
                errors={errors.password}
                icon={<Icon style={styles.iconPassword} name={passwordSecury ? "eye-with-line" : "eye"} size={25} onPress={setPassword} color="#CCC" />}
                onChangeText={text => { setValue("password", text, true) }}
                label='Senha' />
            </View>
          </ScrollView>

        </View>

        <View style={styles.containerFooter}>
          <TouchableOpacity style={styles.buttonNext} onPress={handleSubmit(goRegisterPerson)}>
            <Text style={styles.txtButtonNext}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <Modal visible={modal} onDismiss={modalAction}>

        <View style={styles.modal}>
          <View style={styles.modalView}>

            <Image style={styles.imageModal} source={{ uri: 'https://storage.googleapis.com/bagmap-b8146.appspot.com/mail.png' }} />

            <Text style={styles.txtModalTitle}>Validação de cadastro! </Text>
            <Text style={styles.txtModal}>Para continuar precisamos que insira o código que enviamos para o seu e-mail.</Text>

            <TouchableOpacity style={styles.buttonNext} onPress={goValidCode}>
              <Text style={styles.txtButtonNext}>Validar Código</Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

      <ModalLoading visible={fetching} text="Cadastrando novo usuário" />
    </View>
  )
}

export default RegisterPerson; 