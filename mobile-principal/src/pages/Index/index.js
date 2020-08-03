import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Index = ({ navigation }) => {

  const goLogin = () => {
    navigation.replace("Login");
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerBack}>

        <Image
          style={styles.imageTop}
          source={require('../../../assets/imgTopWelcome.png')} />

        <Image
          style={styles.imageBottom}
          source={require('../../../assets/imgBottomWelcome.png')} />

      </View>

      <View style={styles.containerTop}>
        <Text style={styles.txtSaudacao}>
          Bem-Vindo à Bagmap
        </Text>

        <Text style={styles.txtSlogan}>
          Vamos começar uma nova história juntos
        </Text>
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