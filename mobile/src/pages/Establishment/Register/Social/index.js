import React, { useEffect, useState } from "react";
import TextInput from "../../../../components/TextInput/index";
import Icon from "react-native-vector-icons/Entypo";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { styles } from "../styled";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { jsonRegisterEstablishment } from "../../../../utils/jsonFormat";
import { getUserAutenticate } from "../../../../utils";
import { establishmentFormSchema } from "../../../../utils/validation";
import { newEstablishment } from '../../../../store/modules/establishment/action';

const Social = ({ navigation, setStep }) => {
  const dispatch = useDispatch();

  const create = useSelector(state => state.establishment.create);
  const fetching = useSelector(state => state.establishment.fetching);

  const [user, setUser] = useState(null);

  const { register, errors, setValue, handleSubmit } = useForm({
    validationSchema: establishmentFormSchema
  });

  useEffect(() => {
    getUser();  
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

  useEffect(() => {
    if (create) {
      const keys = Object.keys(create.establishment);

      keys.forEach(key => {
        setValue(key, create.establishment[key])
      })
    }

    if (create?.status) {
      setStep(2);
    }
  }, [create])

  useEffect(() => {
    register("nameEstablishment");
    register("instagram");
    register("facebook");
  }, [register]);

  const getUser = async () => {
    const userGet = await getUserAutenticate();
    setUser(JSON.parse(userGet));
  };

  const backLogin = () => {
    navigation.goBack();
  };

  const onSubmit = (data) => {
    const jsonFormat = jsonRegisterEstablishment(user, data);
    dispatch(newEstablishment(jsonFormat));
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

        <Text style={styles.txtTitle}>Cadastre seu negócio</Text>
      </View>

      <View style={styles.containerForm}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.containerForm}>
            <Text style={styles.txtInfo}>
              Nesta tela você irá cadastrar as informações básicas do seu negócio
            </Text>

            <TextInput
              label="Nome"
              errors={errors.nameEstablishment}
              onChangeText={(text) => {
                setValue("nameEstablishment", text, true);
              }}
            />

            <TextInput
              label="Instagram"
              errors={errors.instagram}
              onChangeText={(text) => {
                setValue("instagram", text, true);
              }}
            />

            <TextInput
              label="Facebook"
              errors={errors.facebook}
              onChangeText={(text) => {
                setValue("facebook", text, true);
              }}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.containerFooter}>
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.txtButtonNext}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Social;
