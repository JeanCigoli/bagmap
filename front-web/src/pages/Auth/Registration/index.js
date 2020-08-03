import React, { useState, useEffect } from 'react';
import { ContainerMain, ContainerLeft, ContainerRigth, ContainerData } from '../styled';
import { TiArrowBack } from 'react-icons/ti';
import { BtnReturnLogin } from './styled';
import FormUser from './FormUser';
import FormAddress from './FormAddress';
import FormPerson from './FormPerson';
import StepBar from './Step';
import { useDispatch } from 'react-redux';
import { clearAddress } from 'store/modules/address/action';
import { clearRegister } from 'store/modules/register/action';
import { showModal } from 'store/modules/modal/actions';

const Registration = ({ handleContainer, firebaseAuth }) => {

  const dispatch = useDispatch();

  const [stepSelect, setStepSelect] = useState(1);
  const [modal, setModal] = useState(false);

  const handleStep = id => {
    setStepSelect(id);
  }

  useEffect(() => {
    return () => {
      dispatch(clearAddress());
      dispatch(clearRegister());
    }
  }, [])

  useEffect(() => {

    if (modal) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }

  }, [modal]);

  return (
    <ContainerMain>

      <ContainerLeft>

        <StepBar
          stepSelect={stepSelect} />

        <BtnReturnLogin onClick={handleContainer}>
          <TiArrowBack /><p>Voltar para o login</p>
        </BtnReturnLogin>

      </ContainerLeft>

      <ContainerRigth>

        <ContainerData>

          {stepSelect === 1 && <FormPerson idBefore={2} firebaseAuth={firebaseAuth} handleStep={handleStep} setModal={setModal} />}
          {stepSelect === 2 && <FormAddress idBefore={3} handleStep={handleStep} setModal={setModal} />}
          {stepSelect === 3 && <FormUser
            idBefore={4}
            firebaseAuth={firebaseAuth}
            handleStep={handleStep}
            setModal={setModal}
            handleContainer={handleContainer} />}

        </ContainerData>

      </ContainerRigth>

    </ContainerMain>
  );
}

export default Registration;
