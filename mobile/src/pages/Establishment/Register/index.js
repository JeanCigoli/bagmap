import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ModalLoading from "../../../components/ModalLoading/index";
import { styles } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import Social from "./Social";
import BranchInfo from "../Branch/Info";
import BranchRegister from '../Branch/Register';
import { clearEstablishment } from "../../../store/modules/establishment/action";
import { clearAddress } from "../../../store/modules/address/action";
import { clearBranch } from "../../../store/modules/branch/action";

const EstablishmentRegister = ({ navigation }) => {

  const dispatch = useDispatch();

  const fetching = useSelector((state) => state.establishment.fetching);

  const [image, setImage] = useState([]);
  const [location, setLocation] = useState(null);

  const [step, setStep] = useState(1);

  useEffect(() => {
    return () => {
      dispatch(clearEstablishment());
      dispatch(clearAddress());
      dispatch(clearBranch());
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        {step === 1 && <View style={styles.step}></View>}

        {step === 2 && (
          <>
            <View style={styles.step}></View>
            <View style={styles.step}></View>
          </>
        )}

        {step === 3 && (
          <>
            <View style={styles.step}></View>
            <View style={styles.step}></View>
            <View style={styles.step}></View>
          </>
        )}
      </View>

      {step === 1 && <Social setStep={setStep} navigation={navigation} />}

      {step === 2 && <BranchInfo 
      setStep={setStep} 
      image={image} 
      setImage={setImage}
      location={location}
      setLocation={setLocation}
      navigation={navigation} />}

      {step === 3 && <BranchRegister setStep={setStep} image={image} location={location} navigation={navigation} />}


      <ModalLoading
        visible={fetching}
        text="Analisando dados"
      />
    </View>
  );
};

export default EstablishmentRegister;
