import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ModalLoading from "../../../components/ModalLoading/index";
import { styles } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import BranchInfo from "../../Establishment/Branch/Info";
import BranchRegisterContainer from '../../Establishment/Branch/Register';
import { clearEstablishment } from "../../../store/modules/establishment/action";
import { clearAddress } from "../../../store/modules/address/action";
import { clearBranch } from "../../../store/modules/branch/action";

const BranchRegister = ({ navigation }) => {

  const dispatch = useDispatch();

  const fetching = useSelector((state) => state.establishment.fetching);

  const [image, setImage] = useState([]);
  const [location, setLocation] = useState(null);

  const [step, setStep] = useState(2);

  useEffect(() => {
    return () => {
      dispatch(clearEstablishment());
      dispatch(clearAddress());
      dispatch(clearBranch());
    }
  }, [])

  useEffect(() => {
    if(step === 1) {
      navigation.push("Home");
    }
  }, [step])

  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>

        {step === 2 && (
          <>
            <View style={styles.step}></View>
          </>
        )}

        {step === 3 && (
          <>
            <View style={styles.step}></View>
            <View style={styles.step}></View>
          </>
        )}
      </View>

      {step === 2 && <BranchInfo 
      setStep={setStep} 
      image={image} 
      setImage={setImage}
      location={location}
      setLocation={setLocation}
      navigation={navigation} />}

      {step === 3 && <BranchRegisterContainer setStep={setStep} image={image} location={location} navigation={navigation} />}


      <ModalLoading
        visible={fetching}
        text="Analisando dados"
      />
    </View>
  );
};

export default BranchRegister;
