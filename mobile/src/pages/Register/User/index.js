import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import TextInput from '../../../components/TextInput/index';
import Icon from 'react-native-vector-icons/Entypo';
import ModalLoading from '../../../components/ModalLoading/index';
import { styles } from './styles';
import { PATTERN_EMAIL } from '../../../config/constant';
import { TextInputMask } from 'react-native-masked-text';
import { userFormSchema } from '../../../utils/validation';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { sendUser, clearRegister, verifyEmail } from '../../../store/modules/register/action';

const RegisterUser = ({ navigation }) => {

  const dispatch = useDispatch();

  const person = useSelector(state => state.register.user);
  const fetching = useSelector(state => state.register.fetching);

  const { register, errors, setValue, handleSubmit } = useForm({
    validationSchema: userFormSchema
  });

  useEffect(() => {
    register("nameUserEstablishment");
    register("email");
    register("phoneUserEstablishment");
    register("positions");
  }, [register]);

  useEffect(() => {
    if (person) {
      const keys = Object.keys(person);

      keys.forEach(key => {
        setValue(key, person[key])
      })
    }
  }, [person])

  const backLogin = () => {
    dispatch(clearRegister());
    navigation.goBack();
  }

  const getEmailValid = async e => {

    const email = e.nativeEvent.text;
    if (email) {
      if (PATTERN_EMAIL.test(email)) {
        dispatch(verifyEmail(email));
      }
    }
  }

  const onSubmit = data => {
    dispatch(sendUser(data));
    navigation.push("RegisterPerson");
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

          <Text style={styles.txtTitle}>Cadastre seus Dados</Text>

        </View>

        <View style={styles.containerImage}>
          <Image style={styles.image} source={{ uri: "https://storage.googleapis.com/bagmap-b8146.appspot.com/credentials.png" }} />
        </View>

        <View style={styles.containerForm}>

          <ScrollView style={styles.scrollView}>

            <TextInput
              label='Nome Completo'
              errors={errors.nameUserEstablishment}
              onChangeText={text => { setValue("nameUserEstablishment", text, true) }} />

            <TextInput
              label='E-mail'
              keyboardType={"email-address"}
              errors={errors.email}
              onEndEditing={getEmailValid}
              onChangeText={text => { setValue("email", text, true) }} />

            <TextInput
              label="Telefone"
              errors={errors.phoneUserEstablishment}
              render={props =>
                <TextInputMask
                  type={'cel-phone'}
                  {...props}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '99 '
                  }} />
              }
              onChangeText={text => { setValue("phoneUserEstablishment", text, true) }} />

            <TextInput
              label='Cargo'
              errors={errors.positions}
              onChangeText={text => { setValue("positions", text, true) }} />
              
          </ScrollView>
        </View>

        <View style={styles.containerFooter}>

          <TouchableOpacity style={styles.buttonNext} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.txtButtonNext}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <ModalLoading visible={fetching} text="Verificado se o e-mail já se encontra cadastrado" />

    </View>
  )
}

export default RegisterUser; 