import React, { useState, useEffect } from 'react';
import Input from 'components/Input';
import { ButtonSecondary, ButtonPrimary } from 'components/Button';
import backgroundLogo from 'assets/background.png';
import { useForm } from "react-hook-form";
import { loginFormSchema as validationSchema } from 'utils/validation';
import { ContainerMain, ContainerLeft, ContainerRigth, ContainerLogo, ContainerCenter, ContainerData, Form, Img } from '../styled';
import { HeaderContent, TextLimiter, ContainerRegister } from './styled';
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate, authenticateGoogle, clearAuthGoogle } from 'store/modules/auth/action';
import { showModal } from 'store/modules/modal/actions';
import firebase from 'firebase';

const Login = ({ handleContainer, setFirebaseAuth, appFirebase }) => {

  const dispatch = useDispatch();

  const fetching = useSelector(state => state.auth.fetching);
  const errorGoogle = useSelector(state => state.auth.errorGoogle);

  const [showPassword, setShowPassword] = useState(true);
  const [firebaseUser, setFirebaseUser] = useState({});

  useEffect(() => {
    if(fetching) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }
  }, [fetching]);

  useEffect(() => {
    if(errorGoogle) {
      setFirebaseAuth(firebaseUser);
      dispatch(clearAuthGoogle());
    }
  }, [errorGoogle])

  const configAuth = () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    appFirebase.auth().languageCode = 'pt';

    appFirebase.auth().signInWithPopup(provider).then(function(result) {

      setFirebaseUser({
        ...result.additionalUserInfo.profile,
        uid: result.user.uid
      });

      if(result.additionalUserInfo.isNewUser) {
        dispatch(showModal("open", 5));
        setFirebaseAuth({
          ...result.additionalUserInfo.profile,
          uid: result.user.uid
        });
      } else {
        dispatch(authenticateGoogle({ uid: result.user.uid, email: result.user.email }))
      }
    }).catch(function(error) {
      console.log(error);
    });
  }

  const handleShowPassword = () => {
    document.getElementById("password").focus();
    setShowPassword(!showPassword);
  };

  const onSubmit = values => {
    dispatch(authenticate(values));
  };

  const { handleSubmit, register, errors } = useForm({
    validationSchema
  });

  return (
    <ContainerMain>

      <ContainerLeft>

        <ContainerLogo>
          <p><strong>Bag</strong>Map</p>
        </ContainerLogo>

        <ContainerCenter>
          <h3>Vamos começar uma nova história juntos!</h3>
        </ContainerCenter>

        <Img src={backgroundLogo} alt="Mapa em png" />

      </ContainerLeft>

      <ContainerRigth>

        <ContainerData>
          <h3>Faça login e se aventure</h3>
          <p>Aqui você encontra os melhores lugares para sua viagem.</p>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="username"
              id="username"
              label="E-mail ou usuário"
              errors={errors.username}
              ref={register}
              maxLength={100} />

            <Input
              id="password"
              type={showPassword ? "password" : "text"}
              name="password"
              label="Senha"
              ref={register}
              errors={errors.password}
              maxLength={50}>

              {showPassword ? (
                <MdVisibilityOff onClick={handleShowPassword} />
              ) : (
                  <MdVisibility onClick={handleShowPassword} />
                )}

            </Input>

            <HeaderContent marginTop="50px">
              <ButtonSecondary
                type="submit"
                text="Entrar" />
            </HeaderContent>

            <TextLimiter >
              ou
            </TextLimiter>

            <HeaderContent marginTop="25px">
              <ButtonPrimary
                id="signGoogle"
                onClick={configAuth}
                type="button"
                text=""
                icon={<AiOutlineGoogle />} />
            </HeaderContent>

          </Form>

          <ContainerRegister>
            <p>Não possui cadastro? <span onClick={handleContainer}>Clique Aqui</span></p>
          </ContainerRegister>
        </ContainerData>

      </ContainerRigth>
    </ContainerMain>
  );
}

export default Login;
