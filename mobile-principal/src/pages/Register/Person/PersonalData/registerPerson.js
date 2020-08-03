import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import TextInput from '../../../../components/TextInput/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { TextInputMask } from 'react-native-masked-text';
import { personFormSchema } from '../../../../utils/validation';
import Picker from '../../../../components/Picker/index';
import { GENDERS } from '../../../../config/constant';
import { sendPersonForm } from '../../../../store/modules/register/action';

const RegisterPerson = ({ navigation }) => {

  const dispatch = useDispatch();

  const { register, errors, setValue, handleSubmit } = useForm({
    validationSchema: personFormSchema,
  });

  const person = useSelector(state => state.register.person)

  const backRegisterAddress = () => {
    navigation.goBack();
  }

  const goRegisterUser = data => {
    dispatch(sendPersonForm(data));
    // alert(JSON.stringify(data));
    navigation.push("RegisterUser");
  }

  useEffect(() => {
    if(person) {
      const keys = Object.keys(person);

      keys.forEach(key => {
        setValue(key, person[key])
      })
    }
  }, [person]);


  useEffect(() => {
    register("email");
    register("namePerson");
    register("phonePerson");
    register("gender");
    register("dateBirth");
  }, [register]);

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

          <Text style={styles.txtTitle}>Crie seu perfil</Text>

          <TextInput
            label='Nome Completo'
            keyboardType={"default"}
            errors={errors.namePerson}
            onChangeText={text => { setValue("namePerson", text, true) }} />

          <TextInput
            label='E-mail'
            keyboardType={"email-address"}
            errors={errors.email}
            // onEndEditing={getEmailValid}
            onChangeText={text => { setValue("email", text, true) }} />

          <TextInput
            label="Telefone"
            errors={errors.phonePerson}
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
            onChangeText={text => { setValue("phonePerson", text, true) }} />


          <TextInput
            label='Data de nascimento'
            errors={errors.dateBirth}
            render={props =>
              <TextInputMask
                type={'datetime'}
                {...props}
                options={{
                  format: 'DD/MM/YYYY'
                }} />
            }
            onChangeText={text => { setValue("dateBirth", text, true) }} />

          <Picker
            items={GENDERS}
            errors={errors.gender}
            textHint="Selecione uma opção"
            onValueChange={value => setValue('gender', value, true)}
          />

          <View style={styles.containerButtons}>

            <TouchableOpacity style={styles.button} onPress={backRegisterAddress}>
              <Text style={styles.txtButton}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleSubmit(goRegisterUser)}>
              <Text style={styles.txtButton}>Próximo</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>

    </KeyboardAwareScrollView >


  )

}

export default RegisterPerson;