import React, { useEffect, useState } from "react";
import TextInput from "../../../../components/TextInput/index";
import Icon from "react-native-vector-icons/Entypo";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { styles } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import Picker from "../../../../components/Picker";
import { Modal } from 'react-native-paper';
import { useForm } from "react-hook-form";
import registerLottie from '../../../../animation/register.json';
import { fetchTypePlace } from "../../../../store/modules/register/action";
import { jsonTypePlaceFormat, jsonRegisterBranch } from "../../../../utils/jsonFormat";
import { branchFormSchema } from '../../../../utils/validation';
import LottieView  from 'lottie-react-native';
import { newBranch, clearBranch } from "../../../../store/modules/branch/action";
import { clearEstablishment } from "../../../../store/modules/establishment/action";
import { clearRegister } from "../../../../store/modules/register/action";
import ModalLoading from '../../../../components/ModalLoading';

const Social = ({ navigation, setStep, location, image }) => {
  const dispatch = useDispatch();

  const typePlace = useSelector((state) => state.register.typePlace);
  const create = useSelector(state => state.establishment.create);
  const establishment = useSelector(state => state.establishment.data);
  const branch = useSelector(state => state.branch.create);
  const fetching = useSelector(state => state.branch.fetching);

  const [modal, setModal] = useState(false);

  const { register, errors, setValue, handleSubmit, setError, clearError } = useForm({
    validationSchema: branchFormSchema
  });

  useEffect(() => {
    dispatch(fetchTypePlace());
  }, []);

  useEffect(() => {
    if (branch) {
      setModal(true);
      dispatch(clearEstablishment());
      dispatch(clearBranch());
    }
  }, [branch])

  useEffect(() => {
    register("nameBranch");
    register("phoneBranch");
    register("cnpj");
    register("typePlace");
  }, [register]);

  const backLogin = () => {
    setStep(2);
  };

  const modalAction = () => {
    setModal(!modal);
  }

  const onSubmit = (data) => {
    const jsonFormat = jsonRegisterBranch(establishment ? establishment : create.establishment, data, location, image);
    dispatch(newBranch(jsonFormat));
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

        <Text style={styles.txtTitle}>Informações da Filial</Text>
      </View>

      <View style={styles.containerForm}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.containerForm}>
            <Text style={styles.txtInfo}>
              Está acabando! Adicione agora as informações básicas da sua filial, lembre você poderá adicionar quantas quiser.
            </Text>

            <TextInput
              label="Nome"
              errors={errors.nameBranch}
              onChangeText={(text) => {
                setValue("nameBranch", text, true);
              }}
            />

            <TextInput
              label="Telefone"
              errors={errors.phoneBranch}
              render={(props) => (
                <TextInputMask
                  type={"cel-phone"}
                  {...props}
                  options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: "99 ",
                  }}
                />
              )}
              onChangeText={(text) => {
                setValue("phoneBranch", text, true);
              }}
            />

            <TextInput
              label="Cnpj"
              errors={errors.cnpj}
              render={(props) => <TextInputMask type={"cnpj"} {...props} />}
              onChangeText={(text) => setValue("cnpj", text, true)}
            />

            <Picker
              items={typePlace ? jsonTypePlaceFormat(typePlace) : []}
              errors={errors.typePlace}
              textHint="Selecione um tipo"
              onValueChange={(value) => setValue("typePlace", value, true)}
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

      <ModalLoading visible={fetching} text="Cadastrando a filial" />

      <Modal visible={modal} onDismiss={modalAction}>

        <View style={styles.modal}>
          <View style={styles.modalView}>

            <View style={styles.imageModal}>

            <LottieView  
              source={registerLottie}
              autoPlay
              loop={false}
              resizeMode="contain"
            />

            </View>

            <Text style={styles.txtModalTitle}>Cadastro concluído com sucesso! </Text>
            <Text style={styles.txtModal}>Agora você possui mais uma filial disponível em nosso sistema.</Text>

            <TouchableOpacity style={styles.buttonNext} onPress={() => {
              navigation.push("Home");
              dispatch(clearRegister());
            }}>
              <Text style={styles.txtButtonNext}>Começar</Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Social;
