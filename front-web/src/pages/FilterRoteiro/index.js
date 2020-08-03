import React, { useState, useEffect } from "react";
import { ButtonPrimary, ButtonSecondary } from "components/Button";
import {
  Title,
  Container,
  ContainerFlex,
  ContainerData,
  TextArea,
  ContainerRight,
  ContainerButton,
  ContainerTitle,
  DivImage,
  ImageContent,
  Portal,
  HeaderContent,
} from "./styled";
import Input from "../../components/Input";
import { Form } from "../Auth/styled";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaFile, FaCheck } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { EXTENSION_IMAGE } from "config/constants";
import { compressedFile } from "utils";
import { toast } from "react-toastify";
import { jsonRoadMapRegister } from "utils/json";
import { MdInsertPhoto } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { roadMapFormSchema } from "utils/validation";
import { DaysMask } from "utils/mask";
import { showModal } from "store/modules/modal/actions";
import { createRoadMap } from "store/modules/roadmap/action";
import ModalSelectLocation from "pages/Modals/ModalSelectLocation";
import Modal from "components/Modal";
import Lottie from "react-lottie";
import LottieConfirm from "assets/lottie/register.json";
import history from "services/history";

const RegisterRoteiro = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: LottieConfirm,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const fetching = useSelector((state) => state.roadmap.fetching);
  const roadMap = useSelector((state) => state.roadmap.roadMap);

  const { errors, register, handleSubmit } = useForm({
    validationSchema: roadMapFormSchema,
  });

  const [imageUpload, setImageUpload] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    if (fetching) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }
  }, [fetching]);

  const handleConfirm = (location) => {
    dispatch(showModal("close", 50));
    setLocation(location);
  };

  const onSubmit = async (data) => {
    if (imageUpload.length === 0) {
      toast.error("Selecione uma imagem antes de prosseguir");
    } else if (location.length === 0) {
      toast.error("Selecione um ponto de partida");
    } else {
      const dataFormat = jsonRoadMapRegister(data, user, imageUpload, location);
      dispatch(createRoadMap(dataFormat));
    }
  };

  const handleImagesChange = async (e) => {
    let file = e.target.files[0];

    if (file) {
      if (EXTENSION_IMAGE.indexOf(file.type) !== -1) {
        const image = await compressedFile(file);

        if (image) {
          let reader = new FileReader();

          reader.readAsDataURL(image);

          reader.onload = function (e) {
            setImageUpload({
              image: file,
              preview: e.target.result,
            });
          };
        } else {
          toast.error("O tamanho do arquivo não é suportado");
        }
      } else {
        toast.error("O tipo desse arquivo não é permitido");
      }
    } else {
      setImageUpload([]);
    }
  };

  return (
    <>
      <Container>
        <Title>Roteiro de Viagens</Title>
        <ContainerTitle>
          <h1>Criação do seu roteiro</h1>
          <p>
            Para melhor experiência da criação, vamos precisar de algumas
            informações sobre a sua viagem. Facilitando assim a busca de lugares
            para ser adicionados ao seu roteiro.
          </p>
        </ContainerTitle>
        <ContainerData>
          <ContainerFlex>
            <div className="container">
              <Form>
                <Input
                  ref={register}
                  type="text"
                  name="roadName"
                  id="username"
                  label="Defina o nome do roteiro"
                  maxLength={100}
                  errors={errors.roadName}
                />

                <Input
                  ref={register}
                  type="text"
                  name="days"
                  id="days"
                  label="Quantos dias ?"
                  maxLength={100}
                  errors={errors.days}
                  onChange={(event) => {
                    event.target.value = DaysMask(event);
                  }}
                />

                <TextArea>
                  <p>Deseja colocar uma descrição</p>
                  <textarea
                    ref={register}
                    name="description"
                    label="Quantos dias ?"
                    maxLength={400}
                    errors={errors.description}
                  ></textarea>
                </TextArea>
              </Form>
            </div>
          </ContainerFlex>
          <ContainerRight>
            <div className="container">
              <div className="container-button">
                <ButtonSecondary
                  text="Definir ponto de partida"
                  icon={location.length !== 0 ? <FaCheck/> : <FaMapMarkerAlt />}
                  type="button"
                  onClick={() => {
                    dispatch(showModal("open", 50));
                  }}
                />
              </div>

              <DivImage>
                <label htmlFor="file" id="thumbnail">
                  <input
                    id="file"
                    type="file"
                    accept={EXTENSION_IMAGE.join(",")}
                    onChange={handleImagesChange}
                  />
                  <FaFile />
                  <p>Selecione um banner para seu roteiro</p>
                </label>
                <ImageContent>
                  {imageUpload.preview ? (
                    <img src={imageUpload.preview} alt="Foto de banner" />
                  ) : (
                    <MdInsertPhoto />
                  )}
                </ImageContent>
              </DivImage>
            </div>
          </ContainerRight>
        </ContainerData>

        <ContainerButton>
          <div className="container-button">
            <ButtonPrimary
              text="Começar"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </ContainerButton>

        <Modal id={21}>

          <Portal>
            <Lottie options={defaultOptions} width={250} height={250} />
            <h3>Cadastro concluído com sucesso.</h3>
            <p>
              Agora você já poderá escolher os melhores lugares para adionar no seu roteiro!
            </p>

          <HeaderContent>
            <ButtonSecondary
              type="button"
              onClick={() => {
                history.push("/rotas");
              }}
              text="Deixar para depois"
            />
            <ButtonSecondary
              type="button"
              onClick={() => {
                history.push(`/rotas/register/roteiro/${roadMap?.idRoadMaps}`);
              }}
              text="Continuar"
            />
          </HeaderContent>
          </Portal>
          
        </Modal>
      </Container>
      <ModalSelectLocation handleConfirm={handleConfirm} />
    </>
  );
};

export default RegisterRoteiro;
