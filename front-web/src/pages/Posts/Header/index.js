import React from "react";
import wave from "assets/wave.png";
import posts from "assets/posts.png";
import { MdAdd } from "react-icons/md";
import {
  TitlePost,
  ContainerCurve,
  CotainerHeader,
  ContainerDataHeader,
  TextHeader,
} from "../styled";
import { ButtonSecondary } from "components/Button";
import { useDispatch } from "react-redux";
import { showModal } from "store/modules/modal/actions";
import ValidRoute from "components/ValidRoute";

const Header = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal("open", 25));
  };

  return (
    <>
      <CotainerHeader>
        <ContainerDataHeader>
          <img src={posts} alt="Banner da página de posts" />
        </ContainerDataHeader>
        <ContainerDataHeader>
          <TextHeader>
            <h1>
              Cada viagem é uma história, compartilhe e veja as melhores
              aventuras!
            </h1>

            <p>Crie uma publicação de sua viagem aqui.</p>

            <ValidRoute>
              <TitlePost>
                <div className="button">
                  <ButtonSecondary
                    type="button"
                    text="Nova publicação"
                    icon={<MdAdd />}
                    onClick={openModal}
                  />
                </div>
              </TitlePost>
            </ValidRoute>
          </TextHeader>
        </ContainerDataHeader>
      </CotainerHeader>
      <ContainerCurve>
        <img className="img-rotate" src={wave} alt="Imagem de curva" />

        <img src={wave} alt="Imagem de curva" />
      </ContainerCurve>
    </>
  );
};

export default Header;
