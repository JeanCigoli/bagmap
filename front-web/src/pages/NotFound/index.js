import React from 'react';
import { ContainerMain, ContainerLeft, ContainerRigth, Img } from './styled';
import imgNotFound from 'assets/notfound.png';
import { ButtonRoute } from 'components/Button';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <ContainerMain>
      <ContainerLeft>

        <h2>Ooopss!</h2>

        <p>
          Essa página não foi encontrada, para retornar a página inicial de nosso site só clicar no botão a baixo.
        </p>

        <div className="container-button">
          <Link to="/">
            <ButtonRoute
              icon={<FaHome />}
              text="Voltar para o início" />
          </Link>
        </div>

      </ContainerLeft>
      <ContainerRigth>
        <Img src={imgNotFound} alt="Foto de página não encontrada" />
      </ContainerRigth>
    </ContainerMain>
  );
}

export default NotFound;
