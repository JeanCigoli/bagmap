import React, { useState, useEffect } from 'react';
import Input from 'components/Input';
import { useForm } from "react-hook-form";
import { ButtonSecondary } from 'components/Button';
import { HeaderContent } from '../../Login/styled';
import { Form } from '../../styled';
import { userFormSchema as validationSchema } from 'utils/validation';
import { TiArrowBack } from 'react-icons/ti';
import { Title, Description, ContainerImage, ImageContent } from '../styled';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { compressedFile } from 'utils/index';
import { EXTENSION_IMAGE } from 'config/constants';
import { MdVisibilityOff, MdVisibility, MdAddAPhoto } from 'react-icons/md';
import { jsonRegister } from 'utils/json';
import { newPerson } from 'store/modules/register/action';
import { filterTextNumber } from 'utils/mask';

const FormUser = ({ handleContainer, idBefore, handleStep, setModal, firebaseAuth }) => {

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(true);
  const [imageUpload, setImageUpload] = useState({});

  const address = useSelector(state => state.register.address);
  const person = useSelector(state => state.register.person);
  const fetching = useSelector(state => state.register.fetching);

  const handleShowPassword = () => {
    document.getElementById("password").focus();
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (fetching) {
      setModal(true);
    } else {
      setModal(false);
    }
  }, [fetching]);

  const onSubmit = values => {

    if (firebaseAuth.email) {
      values.image = firebaseAuth.picture;
    }

    const data = jsonRegister(person, address, values, imageUpload);
    dispatch(newPerson(data, handleContainer));
  };

  const { handleSubmit, register, errors, setValue } = useForm({
    validationSchema
  });

  useEffect(() => {
    if (firebaseAuth.email) {

      setValue("username", `${firebaseAuth.given_name}${firebaseAuth.family_name}`);

    }
  }, [firebaseAuth])

  const handleImagesChange = async e => {

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
          }

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
      <Title><TiArrowBack onClick={() => handleStep(idBefore - 2)} />Seu usuário</Title>

      <Description>E por ultimo suas informações para login no site</Description>

      <Form onSubmit={handleSubmit(onSubmit)}>

        <ContainerImage>
          <input
            id="file"
            type="file"
            accept={EXTENSION_IMAGE.join(',')}
            onChange={handleImagesChange} />

          <label htmlFor="file">
            <ImageContent>
              {imageUpload.preview ?
                <img src={imageUpload.preview} alt="Foto de perfil" />
                :
                (
                  firebaseAuth.picture ?
                    <img src={firebaseAuth.picture} alt="Foto de perfil" /> : <MdAddAPhoto />
                )}
            </ImageContent>
          </label>
          <Description>Selecione uma foto de perfil</Description>


        </ContainerImage>

        <Input
          type="text"
          name="username"
          id="username"
          label="Usuário"
          errors={errors.username}
          ref={register}
          maxLength={100}
          onChange={event => {
            event.target.value = filterTextNumber(event);
          }} />

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
            text="Cadastrar" />
        </HeaderContent>

      </Form>
    </>
  );
}

export default FormUser;
