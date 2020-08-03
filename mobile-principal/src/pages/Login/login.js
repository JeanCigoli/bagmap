import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import InputText from '../../components/TextInput/index';
import { useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Entypo';
import { loginFormSchema } from '../../utils/validation';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate, logout} from '../../store/modules/auth/action';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ModalLoading from '../../components/ModalLoading';

const Login = ({ navigation }) => {

  const dispatch = useDispatch();

  const fetching = useSelector(state => state.auth.fetching);

  const { register, errors, setValue, handleSubmit } = useForm({
    validationSchema: loginFormSchema,
  });

  const [passwordSecury, setPasswordSecury] = useState(true);

  const onSubmit = (data) => {
    // Alert.alert(data, JSON.stringify(data));
    dispatch(authenticate(data));
    // navigation.push("FirstTip");
    // navigation.push("TabNavigation");
   
  }

  const setPassword = () => {
    setPasswordSecury(!passwordSecury);
  }

  useEffect(() => {
    register({ name: "username" });
    register({ name: "password" });
  }, [register]);

  const goRegister = () => {
    navigation.navigate("RegisterAddress");
  }

  return (

    <View style={styles.containerTop}>
        <View style={styles.containerTitle}>
          <Text style={styles.txtAcess}>
            {`Acesse o\n Bagmap`}
          </Text>

          <Image
            style={styles.imageLogin}
            source={require("../../../assets/imgLogin.png")} />
        </View>


        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

          <KeyboardAwareScrollView 
            // style={styles.containerTop}
            resetScrollToCoords={{x:0, y:0}}
            contentContainerStyle={styles.containerTop}
            scrollEnabled={false}>

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

            <Text 
              style={styles.txtRememberPassword} 
              onPress={() => { dispatch(logout())}}> Esqueceu sua senha? </Text>

          </KeyboardAwareScrollView>

        </ScrollView>
      <ModalLoading visible={fetching} text="Buscando dados" />

    </View>

  );
};


export default Login;