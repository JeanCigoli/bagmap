import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import TextInput from '../../../components/TextInput/index';
import Picker from '../../../../src/components/Picker/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { TextInputMask } from 'react-native-masked-text';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { addressFormSchema } from '../../../utils/validation';
import { sendAddressForm, clearRegister } from '../../../store/modules/register/action';
import { fetchAddressViaCep, fetchStates, fetchCities, clearAddress } from '../../../store/modules/address/action';
import ModalLoading from '../../../components/ModalLoading/index';
import ModalSuccess from "../../../components/ModalSuccess"

 
const RegisterAddress = ({ navigation }) => {

  const dispatch = useDispatch();

  const { register, errors, setValue, handleSubmit } = useForm({
    validationSchema: addressFormSchema,
  });

  const [stateId, setStateId] = useState("0");
  const [addressComplete, setAddressComplete] = useState({
    neighborhood: '',
    street:'',
    // state: '',
    // city: '',
  })
  

  const fetching = useSelector(state => state.address.fetching);
  const viacep = useSelector(state => state.address.viacep);
  const states = useSelector(state => state.address.states);
  const cities = useSelector(state => state.address.cities);
  const address = useSelector(state => state.register.address);

  useEffect(() => {
    dispatch(fetchStates());

    return () => {
      dispatch(clearAddress());
    }
  }, []);

  useEffect(() => {
    if (viacep) {
      // const state = states.find(({uf}) => viacep.uf === uf);
      // alert(state);
      // if(state) {
        // handleState(state.id);
      // }
    
      // alert(JSON.stringify(viacep.uf));
      setValue("neighborhood", viacep.bairro); 
      setValue("street", viacep.logradouro);
      setAddressComplete({
        neighborhood: viacep.bairro,
        street: viacep.logradouro,
        // state: viacep.uf,
        // city: viacep.localidade,
      });
   
    }
  }, [viacep]);

  useEffect(() => {
    if (address) {
      const keys = Object.keys(address);

      keys.forEach(key => {
        setValue(key, address[key])
      })
    }
  }, [address]);

  useEffect(() => {
    register("zipcode");
    register("number");
    register("street");
    register("neighborhood");
    register("state");
    register("city");
    register("complement");
  }, [register]);

  const handleAddress = async e => {
    const zipCode = e.nativeEvent.text;

    if (!zipCode.includes("_") && zipCode.length === 9) {
      dispatch(fetchAddressViaCep(zipCode));
    }
  };

  const handleState = id => {
    setValue('state', id, true);
    

    if(id !== "0") {
      setStateId(id);
      dispatch(fetchCities(id));
    }
  }

  const backLogin = () => {
    dispatch(clearAddress());
    dispatch(clearRegister());
    navigation.push("Login");
  }

  const goRegisterPerson = data => {
    dispatch(sendAddressForm(data));
    // alert(JSON.stringify(data));
    navigation.push("RegisterPerson");
  }

  return (

    <KeyboardAwareScrollView 
        style={styles.containerKeyboard} 
        resetScrollToCoords={{x:0, y:0}} 
        contentContainerStyle={styles.container} 
        scrollEnabled={false}>

      <View style={styles.containerImage}>
        <Image
          style={styles.imgMap}
          source={require("../../../../assets/imgRegister.png")} />
      </View>

      <View style={styles.containerForm}>
      
        <ScrollView>
          <Text style={styles.txtTitle}>Registre seu endereço</Text>

          <Text style={styles.txtNotice}>
            {`A partir do seu cadastro de endereço poderemos intipr \n experiências mais perto de você.`}
          </Text>
          
         
          <TextInput
            label="Cep"
            errors={errors.zipcode}
            render={props =>
              <TextInputMask
                type={'zip-code'}
                {...props}
              />
            }
            onEndEditing={handleAddress}
            onChangeText={text => { setValue("zipcode", text, true) }} />

          <TextInput
            label='Número'
            keyboardType={"number-pad"}
            errors={errors.number}
            onChangeText={text => { setValue("number", text, true) }} />


          <TextInput
            label='Rua'
            keyboardType={"default"}
            errors={errors.street}
            value= {addressComplete.street}
            onChangeText={text => { setValue("street", text, true) }} />

          
          <Picker 
            items={states || []}
            errors={errors.states}
            textHint={"Selecione seu estado"}
            onValueChange={value => handleState(value)}/>
    

          <Picker
            items={cities || []}
            disabled={stateId === '0' ? true : false}
            errors={errors.cities}
            textHint={"Selecione sua cidade"}
            // value={addressComplete.city}
            onValueChange={value => setValue('city', value, true)}/>


          <TextInput
            label='Bairro'
            keyboardType={"default"}
            errors={errors.neighborhood}
            value={addressComplete.neighborhood}
            onChangeText={text => { setValue("neighborhood", text, true) }} />

          <TextInput
            label='Complemento'
            keyboardType={"default"}
            errors={errors.complement}
            onChangeText={text => { setValue("complement", text, true) }} />
           
 
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.button} onPress={backLogin}>
              <Text style={styles.txtButton}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleSubmit(goRegisterPerson)} >
              <Text style={styles.txtButton}>Próximo</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
       
      </View>

      <ModalLoading visible={fetching} text="Carregando informações" />
     
    </KeyboardAwareScrollView>
  )
}

export default RegisterAddress; 