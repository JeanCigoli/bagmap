import React, { useState, useEffect } from "react";
import Modal from "components/Modal";
import {
  Portal,
  HeaderPortal,
  BodyPortal,
  ContainerImage,
  Image,
  DivImage,
  TitleImage,
  SlideImage,
  Card
} from "./styled";
import { MdPhotoCamera, MdClose, MdAddAPhoto, MdCheck } from "react-icons/md";
import { showModal } from "store/modules/modal/actions";
import { useDispatch, useSelector } from "react-redux";
import Input from "components/Input";
import selfie from "assets/selfie.png";
import { ButtonSecondary, ButtonPrimary } from "components/Button";
import { EXTENSION_IMAGE } from "config/constants";
import { toast } from "react-toastify";
import { compressedFile, readFileAsync } from "utils";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useForm } from 'react-hook-form';
import { postsFormSchema } from 'utils/validation';
import { jsonPostsRegister } from "utils/json";
import { insertPost } from "store/modules/posts/action";

const Add = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const [imageUpload, setImageUpload] = useState([]);
  const [progress, setProgress] = useState(false);

  const { handleSubmit, register, errors } = useForm({
    validationSchema: postsFormSchema
  });

  const closeModal = () => {
    dispatch(showModal("close", 25));
  };

  const onSubmit = data => {
    if(imageUpload.length === 0) {
      toast.error('Selecione uma imagem para postar');
    } else {
      const jsonFormat = jsonPostsRegister(data, user, imageUpload);
      dispatch(insertPost(jsonFormat));
    }
  }

  const handleImagesChange = async (e) => {

    setProgress(true);

    let files = e.target.files;

    const arrayComplete = [];

    const mapFiles = Array.from(files).map(async (file) => {

      if (file) {
        if (EXTENSION_IMAGE.indexOf(file.type) !== -1) {
          const image = await compressedFile(file);

          if (image) {
            const preview = await readFileAsync(image);
           
            arrayComplete.push({
              image: file,
              preview,
            });
          } else {
            toast.error("O tamanho do arquivo não é suportado");
          }
        } else {
          toast.error("O tipo desse arquivo não é permitido");
        }
      }
    });
    await Promise.all(mapFiles);

    setProgress(false);
    setImageUpload(arrayComplete);
  };

  return (
    <Modal id={25}>
      <Portal>
        <HeaderPortal>
          <div>
            <MdPhotoCamera className="icon" />
            <h3>Nova Publicação</h3>
          </div>

          <div className="button">
            <ButtonPrimary
              type="button"
              icon={<MdClose />}
              onClick={closeModal}
              text="Cancelar"/>

            <ButtonPrimary 
              type="button"
              icon={<MdCheck />}
              onClick={handleSubmit(onSubmit)}
              text="Postar"/>
          </div>
          
        </HeaderPortal>

        <BodyPortal>
          <Input
            id="description"
            type={"text"}
            name="description"
            label="Adicione uma descrição"
            ref={register}
            errors={errors.description}
          />

          <Input
            id="location"
            type={"text"}
            name="location"
            label="Aonde é ?"
            placeholder="Exemplo: Centro de São Paulo"
            ref={register}
            errors={errors.location}
            maxLength={200}
          />

          <ContainerImage>
            <Image src={selfie} alt="selfie" />

            <DivImage>
              <TitleImage>
                Adicione aqui as fotos!
                <label htmlFor="file">
                  <div className="button">
                    <ButtonSecondary type="submit" icon={<MdAddAPhoto />} />

                    <input
                      id="file"
                      type="file"
                      multiple
                      accept={EXTENSION_IMAGE.join(",")}
                      onChange={handleImagesChange}
                    />
                  </div>
                </label>

                {
                  progress && <CircularProgress color="inherit"/>
                } 
              </TitleImage>

              <SlideImage>

                {
                  imageUpload.length !== 0 && imageUpload.map(image => (
                    <Card key={image.image.size}>
                      <img src={image.preview} alt={image.image.name}/>
                    </Card>
                  ))
                }

              </SlideImage>

            </DivImage>
          </ContainerImage>
        </BodyPortal>
      </Portal>
    </Modal>
  );
};

export default Add;
