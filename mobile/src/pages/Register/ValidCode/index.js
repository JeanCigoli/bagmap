import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Modal } from 'react-native-paper';
import { styles } from './styles';
import cores from '../../../styles/cores';
import Toast from 'react-native-root-toast';
import LottieView  from 'lottie-react-native';
import register from '../../../animation/register.json';
import { useSelector, useDispatch } from 'react-redux';
import ModalLoading from '../../../components/ModalLoading/index';
import { clearRegister, updateValidEmail } from '../../../store/modules/register/action';

const ValidCode = ({ navigation }) => {

  const dispatch = useDispatch();

  const create = useSelector(state => state.register.create);
  const update = useSelector(state => state.register.update);
  const fetching = useSelector(state => state.register.fetching);
  
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [modal, setModal] = useState(null);

  useEffect(() => {
    if(update?.status) {
      setModal(true);
    }
  }, [update]);

  const backLogin = () => {
    navigation.goBack();
  }

  const modalAction = () => {
    setModal(!modal);
  }

  const goValidCode = () => {
    if(number1 === '' || number2 === '' || number3 === '') {
      Toast.show("Existe campos vazio", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        animation: true,
        hideOnPress: true,
        delay: 0,
        opacity: 1,
        backgroundColor: cores.red,
      });

    } else {
      dispatch(updateValidEmail({ email: create.user.email, code: `${number1}${number2}${number3}` }));
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerTitle}>

        <Icon style={styles.icon} name="chevron-left" size={30} onPress={backLogin} color="#000" />

        <Text style={styles.txtTitle}>Validação de Código</Text>

      </View>

      <View style={styles.containerForm}>

        <Text style={styles.txtDesc}>Digite o código de três números enviado para seu e-mail, assim você estará pronto para usar nossos serviços</Text>

        <View style={styles.containerCode}>

          <TextInput
            style={styles.textCode}
            keyboardType={"number-pad"}
            onChangeText={text => setNumber1(text)}
            maxLength={1}
          />

          <TextInput
            style={styles.textCode}
            keyboardType={"number-pad"}
            onChangeText={text => setNumber2(text)}
            maxLength={1}
          />

          <TextInput
            style={styles.textCode}
            keyboardType={"number-pad"}
            onChangeText={text => setNumber3(text)}
            maxLength={1}
          />

        </View>

      </View>

      <View style={styles.containerFooter}>
        <TouchableOpacity style={styles.buttonNext} onPress={goValidCode}>
          <Text style={styles.txtButtonNext}>Concluir</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modal} onDismiss={modalAction}>

        <View style={styles.modal}>
          <View style={styles.modalView}>

            <View style={styles.imageModal}>

            <LottieView  
              source={register}
              autoPlay
              loop={false}
              resizeMode="contain"
            />

            </View>

            <Text style={styles.txtModalTitle}>Cadastro concluído com sucesso! </Text>
            <Text style={styles.txtModal}>Volte para o login e acesse a plataforma para começar a aventura.</Text>

            <TouchableOpacity style={styles.buttonNext} onPress={() => {
              navigation.navigate("Login");
              clearRegister();
            }}>
              <Text style={styles.txtButtonNext}>Começar</Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

      <ModalLoading visible={fetching} text="Validando código"/>

    </View>
  )
}

export default ValidCode; 