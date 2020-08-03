import React, { useEffect } from 'react';
import { getTokenUrl } from 'utils/index';
import { Portal } from './styled';
import { HeaderContent } from '../Auth/Login/styled';
import { ButtonSecondary } from 'components/Button';
import { showModal } from 'store/modules/modal/actions';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'components/Modal';
import { updateValidEmail } from 'store/modules/register/action';
import mailSuccess from 'assets/mailSuccess.png';
import mailFailure from 'assets/mailFailure.png';
import history from 'services/history';

const Validated = props => {

  const dispatch = useDispatch();

  const status = useSelector(state => state.register.fetching);

  const validatedToken = () => {
    const token = { token: getTokenUrl(props.history.location) };

    dispatch(updateValidEmail(token));
  }

  const closeModal = (id) => {
    dispatch(showModal("close", id));
    history.push("/");
  }

  useEffect(() => {
    validatedToken();
  }, [])

  useEffect(() => {

    if (status) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }

  }, [status])

  return (
    <>

      <Modal id={10}>

        <Portal>

          <img src={mailSuccess} alt="E-mail com sucesso"/>

          <h3>Seu e-mail foi validado com sucesso!</h3>
          <p>
            Muito obrigado por utilizar a plataforma BagMap, agora você poderá desfrutar de todos os nossos recursos disponível.
          </p>

          <HeaderContent>
            <ButtonSecondary
              type="button"
              onClick={() => closeModal(10)}
              text="Concluído" />
          </HeaderContent>

        </Portal>

      </Modal>

      <Modal id={11}>

        <Portal>

          <img src={mailFailure} alt="E-mail com sucesso"/>

          <h3>Ops! ocorreu um erro ao validar o seu e-mail</h3>
          <p>
            Desculpe mas aconteceu um problema ao validar seu e-mail, tente novamente mais tarde eu <span>clique aqui</span> para rebecer outro link.
          </p>

          <HeaderContent>
            <ButtonSecondary
              type="button"
              onClick={() => closeModal(11)}
              text="Concluído" />
          </HeaderContent>

        </Portal>

      </Modal>

    </>
  );
}

export default Validated;
