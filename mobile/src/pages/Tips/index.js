import React from 'react';
import { styles } from './styled';
import { View, Text, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import cores from '../../styles/cores';
import { FIRST_ACCESS } from '../../config/constant';

const Tips = ({ navigation }) => {

  const goHome = async () => {
    await AsyncStorage.setItem(FIRST_ACCESS, JSON.stringify({valid: true}));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <Text style={styles.txtSkip} onPress={goHome}>
        Pular
      </Text>

      <View style={styles.containerSwipe}>
        <Swiper style={styles.wrapper}
          loop={false}
          activeDotColor={cores.green_darker}>

          <View style={styles.slideWrapper}>

            <View style={styles.slide1}>
              <View style={styles.containerImg}>

                <Image style={styles.img} source={require('../../../assets/tips2.png')} />

              </View>

              <Text style={styles.txtSkipTitle}>Criação do seu negócio</Text>

              <Text style={styles.txtSkipText}>
                Aqui você cria o seu estabelecimento principal, colocando só as informações básicas, ele servirá como base para cadastro futuros.
              </Text>

            </View>
          </View>

          <View style={styles.slideWrapper}>

            <View style={styles.slide2}>
              <View style={styles.containerImg}>
                <Image style={styles.img} source={require('../../../assets/rotas.png')} />
              </View>

              <Text style={styles.txtSkipTitle}>Cadastro das filiais</Text>

              <Text style={styles.txtSkipText}>
                Assim você pode criar quantas filiais você possuir, e elas que apareceram no mapa, podendo editar nome, logo e entre outras informações.
              </Text>

            </View>
          </View>

          <View style={styles.slideWrapper}>

            <View style={styles.slide3}>
              <View style={styles.containerImg}>

                <Image style={styles.img} source={require('../../../assets/home.png')} />

              </View>

              <Text style={styles.txtSkipTitle}>E agora?</Text>

              <Text style={styles.txtSkipText}>
                Pronto está finalizado, agora você poderá acompanhar todas as suas filiais de um só lugar e visualizar as informações sobre elas e suas avaliações.
              </Text>


            </View>
          </View>
        </Swiper>

      </View>

      <View style={styles.containerBtn}>

        <TouchableOpacity
          style={styles.btn}>

          <Text style={styles.txtBtn} onPress={goHome}>
            Vamos lá!
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

export default Tips;