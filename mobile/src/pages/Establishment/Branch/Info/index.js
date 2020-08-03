import React, { useState, useEffect } from "react";
import Toast from 'react-native-root-toast';
import {
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconFont from "react-native-vector-icons/FontAwesome5";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styled";
import LottieView from "lottie-react-native";
import branch from "../../../../animation/establishment.json";
import ModalMaps from "./Modal";
import cores from "../../../../styles/cores";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";

const Info = ({ navigation, setStep, setLocation, location, image, setImage }) => {
  const [openMap, setOpenMap] = useState(false);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Desculpa, nós precisamos dessa permissão para continuar");
        }
      }
    })();
  }, []);

  const backLogin = () => {
    setStep(1);
  };

  const removeImage = (indice) => {
    const spliceIma = [ ...image ];
    spliceIma.splice(indice, 1);
    setImage(spliceIma);
  };

  const onSubmit = () => {

    if (!location) {
      toast('Adicione sua localização');
    } else if (image.length === 0) {
      toast('Selecione uma imagem no mínimo!')
    } else {
      setStep(3);
    }
  };

  const toast = (text) => {
    Toast.show(text, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [5, 5],
      quality: 0.5,
      base64: true,
    });

    if (!result.cancelled) {
      setImage([{
        preview: result.uri,
        base64: result.base64.replace(/(?:\r\n|\r|\n)/g, ""),
        type: result.type,
      },  ...image]);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({
        ios: "padding",
        android: null,
      })}
      style={styles.containerKeyboard}
    >
      <View style={styles.containerTitle}>
        <Icon
          style={styles.icon}
          name="chevron-left"
          size={30}
          onPress={backLogin}
          color="#000"
        />

        <Text style={styles.txtTitle}>Crie sua filial</Text>
      </View>

      <View style={styles.containerForm}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.containerForm}>
            <View style={styles.details}>
              <Text style={styles.titleDetails}>
                Suas filiais que ficaram disponíveis em nosso Mapa.
              </Text>
              <View style={styles.containerLottie}>
                <LottieView
                  source={branch}
                  autoPlay
                  loop={false}
                  resizeMode="cover"
                />
              </View>
            </View>

            <View style={styles.location}>
              <Text style={styles.titleLocation}>
                Clique ao lado para adicionar a localização da sua filial
              </Text>

              <TouchableOpacity
                style={styles.btnLocation}
                onPress={() => setOpenMap(true)}
              >
                <IconFont name={location ? "check-double" : "map-marked-alt"} size={40} color="#FFF" />
              </TouchableOpacity>
            </View>

            <View style={styles.images}>
              <TouchableOpacity style={styles.btnImage} onPress={pickImage}>
                <IconMaterial
                  name="add-a-photo"
                  size={40}
                  color={cores.green_darker}
                />
              </TouchableOpacity>

              {image.length !== 0 &&
                image.map((img, index) => (
                  <View key={Math.random()} style={styles.avatar}>
                    <IconAnt
                      style={styles.iconClose}
                      name="closecircle"
                      size={30}
                      color={cores.green_darker}
                      onPress={() => removeImage(index)}
                    />
                
                    <Image
                      source={{ uri: img.preview }}
                      style={styles.imageProfile}
                    />
                  </View>
                ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.containerFooter}>
        <TouchableOpacity style={styles.buttonNext} onPress={onSubmit}>
          <Text style={styles.txtButtonNext}>Próximo</Text>
        </TouchableOpacity>
      </View>

      <ModalMaps openMap={openMap} setLocation={setLocation} setOpenMap={setOpenMap} />
    </KeyboardAvoidingView>
  );
};

export default Info;
