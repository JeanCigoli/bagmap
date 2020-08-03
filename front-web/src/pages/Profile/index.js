import React, { useEffect } from 'react';
import { ContainerMain, ContainerLeft, ContainerRigth, ContainerCenter, ContainerData, ContainerLogo, Img } from '../Auth/styled';
import { ContainerImage, ImageContent, DropMenu, ContainerDrop, ContainerFlex } from './styled';
import { showModal } from 'store/modules/modal/actions';
import { useDispatch, useSelector } from 'react-redux';
import backgroundLogo from 'assets/background.png';
import { AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';

const Profile = () => {

  const dispatch = useDispatch();
  const fetching = useSelector(state => state.auth.fetching);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {

    if (fetching) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }

  }, [fetching])

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

          <ContainerImage>

            <ImageContent>
              <img src={user.image} alt="Foto de perfil" />
            </ImageContent>

          </ContainerImage>


          <ContainerFlex>
            <ContainerDrop>
              <DropMenu>
                <div className="div-effect"></div>
                <p>Informações Pessoais</p>
              </DropMenu>

              <AiOutlineUser />
            </ContainerDrop>

            <ContainerDrop>
              <DropMenu>
                <div className="div-effect"></div>
                <p>Endereço</p>
              </DropMenu>

              <FiMapPin />
            </ContainerDrop>
          </ContainerFlex>


          <ContainerDrop>
            <DropMenu>
              <div className="div-effect"></div>
              <p>Configuração</p>
            </DropMenu>

            <AiOutlineSetting />
          </ContainerDrop>



        </ContainerData>

      </ContainerRigth>

    </ContainerMain>
  );
}

export default Profile;
