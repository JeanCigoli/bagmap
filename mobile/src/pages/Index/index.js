import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { getToken } from "../../utils";

const Index = ({ navigation }) => {

  const [isAuth, setIsAuth] = useState(null);

  useLayoutEffect(() => {
    getTokenAuth();
  }, []);

  const getTokenAuth = async () => {
    const token = await getToken();
    setIsAuth(token);
  };

  const goLogin = () => {
    isAuth ? navigation.replace("Home") : navigation.replace("Login");
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>
        <Text style={styles.txtSaudacao}>
          Bem-Vindo à Bagmap
        </Text>

        <Text style={styles.txtSlogan}>
          Adicione seu estabelecimento e deixe seu negócio mais visível
        </Text>

        <Image
          style={styles.imageBottom}
          source={require('../../../assets/imgBottomWelcome.png')} />
      </View>

      <TouchableOpacity
        onPress={goLogin}
        style={styles.button}>

        <Text style={styles.txtButton}>Vamos lá</Text>

      </TouchableOpacity>
    </View>

  )
}

export default Index;