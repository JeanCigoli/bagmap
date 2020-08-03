import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './styles';
import InputText from '../../components/TextInput/index';
import { useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Entypo';
import ModalLoading from '../../components/ModalLoading/index';
import { loginFormSchema } from '../../utils/validation';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate, logout } from '../../store/modules/auth/action';

const Login = ({ navigation }) => {

  const dispatch = useDispatch();

  const fetching = useSelector(state => state.auth.fetching);

  const { register, errors, setValue, handleSubmit } = useForm({
    validationSchema: loginFormSchema,
  });

  const [passwordSecury, setPasswordSecury] = useState(true);

  const onSubmit = data => {
    dispatch(authenticate(data));
  }

  const setPassword = () => {
    setPasswordSecury(!passwordSecury);
  }

  useEffect(() => {
    register("username");
    register("password");
  }, [register]);

  const goRegister = () => {
    navigation.navigate("RegisterUser");
  }

  return (

    <View style={styles.containerTop}>

      <KeyboardAvoidingView
        behavior={Platform.select({
          ios: 'padding',
          android: null,
        })}
        style={styles.containerKeyboard}
      >

        <View style={styles.containerTitle}>
          <Text style={styles.txtAcess}>
            {`Acesse o\n Bagmap`}
          </Text>

          <Image
            style={styles.imageLogin}
            source={require("../../../assets/imgLogin.png")} />
        </View>

        <ScrollView style={styles.container}>

          <View style={styles.containerTop}>

            <InputText
              errors={errors.username}
              keyboardType={"email-address"}
              onChangeText={text => { setValue("username", text, true) }}
              label='Email ou Usuário' />

            <InputText
              secureTextEntry={passwordSecury}
              errors={errors.password}
              icon={<Icon style={styles.icon} name={passwordSecury ? "eye-with-line" : "eye"} size={25} onPress={setPassword} color="#CCC" />}
              onChangeText={text => { setValue("password", text, true) }}
              label='Senha' />

            <TouchableOpacity
              style={styles.buttonSignIn}
              onPress={handleSubmit(onSubmit)} >

              <Text style={styles.txtButtonSignIn}> Entrar </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSignUp}
              onPress={goRegister}>

              <Text style={styles.txtButtonSignUp}> Cadastre-se </Text>

            </TouchableOpacity>

            <Text style={styles.txtRememberPassword} onPress={() => {
              dispatch(logout())
            }}> Esqueceu sua senha? clique aqui</Text>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>

      <ModalLoading visible={fetching} text="Buscando dados" />

    </View>
  );
};



export default Login;