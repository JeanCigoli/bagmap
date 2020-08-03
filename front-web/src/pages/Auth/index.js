import React, { useState, useEffect } from 'react';
import Login from './Login';
import mail from 'assets/mail.png';
import teste from 'assets/teste.png'
import { AnimatePresence } from 'framer-motion';
import Register from './Registration';
import { OnCreate } from 'components/Animation/TransitionContainer';
import Modal from 'components/Modal';
import { Portal } from './styled';
import { HeaderContent } from './Login/styled';
import { showModal } from 'store/modules/modal/actions';
import { useDispatch } from 'react-redux';
import { ButtonSecondary } from 'components/Button';

const Auth = ({ containerLogin, appFirebase }) => {

  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const [person, setPerson] = useState('');
  const [firebaseAuth, setFirebaseAuth] = useState({});

  const handleClick = (id) => {
    dispatch(showModal("close", id));
  };

  useEffect(() => {
    if(firebaseAuth.email) {
      setIsLogin(false);
    };
  }, [firebaseAuth]);

  useEffect(() => {
    if (!containerLogin) {
      setIsLogin(true);
    }
  }, [containerLogin]);

  const handleContainer = ({ name }) => {

    if (name) {
      setPerson(name);
      dispatch(showModal("open", 2));
    }

    setIsLogin(!isLogin);
  }

  return (
    <>
      {isLogin ? (
        <AnimatePresence>
          <OnCreate>
            <Login
              appFirebase={appFirebase}
              handleContainer={handleContainer}
              setFirebaseAuth={setFirebaseAuth}/>
          </OnCreate>
        </AnimatePresence>
      ) : (
          <OnCreate>
            <Register
              firebaseAuth={firebaseAuth}
              handleContainer={handleContainer} />
          </OnCreate>
        )};

      <Modal id={2}>
        <Portal>
          <img src={mail} alt="mensagem" />
          <h3>Cadastro realizado com sucesso!</h3>
          <p>
            Para concluir o seu cadastro e começar a utilizar a nossa plataforma precisamos que confirme o seu e-mail pelo link enviado!
          </p>
          <p>
            Foi enviado para <b>{person}</b>.
          </p>

          <HeaderContent>
            <ButtonSecondary
              type="button"
              onClick={() => handleClick(2)}
              text="Concluído" />
          </HeaderContent>

        </Portal>
      </Modal>

      <Modal id={12}>
        <Portal>
          <img src={mail} alt="mensagem" />
          <h3>Cadastro realizado com sucesso!</h3>
          <p>
            Olá, muito obrigado por se cadastradar na nossa plaforma, agora você poderá desfrutar de todas as nossas funcionalidades!
          </p>

          <HeaderContent>
            <ButtonSecondary
              type="button"
              onClick={() => handleClick(12)}
              text="Concluído" />
          </HeaderContent>

        </Portal>
      </Modal>

      <Modal id={3}>
        <Portal>
          <img src={mail} alt="mensagem" />
          <h3>Ops! é preciso que confirme seu e-mail</h3>
          <p>
            Para concluir o seu cadastro e começar a utilizar a nossa plataforma precisamos que confirme o seu e-mail pelo link enviado!
          </p>

          <HeaderContent>
            <ButtonSecondary
              type="button"
              onClick={() => handleClick(3)}
              text="Concluído" />
          </HeaderContent>

        </Portal>
      </Modal>

      <Modal id={5}>
        <Portal>
          <img className="img-width" src={teste} alt="Primeiro acesso imagem" />
          <h3>Olá! identificamos que é seu primeiro acesso</h3>
          <p>
            Para concluir seu cadastro será preciso preencher outras informações que servirá para melhor navegação no site.
          </p>

          <HeaderContent>
            <ButtonSecondary
              type="button"
              onClick={() => handleClick(5)}
              text="Vamos lá!" />
          </HeaderContent>

        </Portal>
      </Modal>
    </>
  )
}

export default Auth;
