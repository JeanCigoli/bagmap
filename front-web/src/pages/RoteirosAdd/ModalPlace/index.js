import React, { useEffect, useState } from "react";
import {
  Portal,
  HeaderPortal,
  BodyPortal,
  DivPortal,
  ImgPortal,
  DetailsPortal,
} from "./styled";
import Modal from "components/Modal";
import { showModal } from "store/modules/modal/actions";
import { useDispatch, useSelector } from "react-redux";
import { ButtonPrimary } from "components/Button";
import { MdClose, MdCheck } from "react-icons/md";
import Select from "components/Select";
import TextArea from "components/TextArea";

const ModalPlace = ({ placesSelected, setPlacesSelected, placeMain, setPlaceMain }) => {
  const dispatch = useDispatch();

  const roadMap = useSelector((state) => state.roadmap.roadMap);

  const [days, setDays] = useState(null);
  const [daysSelect, setDaysSelect] = useState("");
  const [description, setDescription] = useState("");

  const closeModal = () => {
    dispatch(showModal("close", 26));
  };

  useEffect(() => {
    if (roadMap) {
      const daysArray = [];

      for (let i = 1; i <= roadMap.days; i++) {
        daysArray.push({
          id: i,
          name: i,
        });
      }

      setDays(daysArray);
    }
  }, []);

  const onSubmit = () => {
    setPlacesSelected([
      ...placesSelected,
      {
        day: parseInt(daysSelect),
        idPlace: placeMain.place_id,
        image: placeMain.photos
          ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placeMain.photos[0].photo_reference}&key=${process.env.REACT_APP_API_MAP}`
          : "",
        name: placeMain.name,
        typeIdPlace: 'google',
        description: description
      },
    ]);
    dispatch(showModal("close", 26));
    setPlaceMain(null);
  };

  return (
    <Modal id={26}>
      <Portal>
        <HeaderPortal>
          <div>
            <h3>Adicionar novo lugar</h3>
          </div>

          <div className="button">
            <ButtonPrimary
              type="button"
              icon={<MdClose />}
              onClick={closeModal}
              text="Cancelar"
            />

            <ButtonPrimary
              type="button"
              icon={<MdCheck />}
              onClick={onSubmit}
              text="Adicionar"
            />
          </div>
        </HeaderPortal>

        {placeMain && (
          <BodyPortal>
            <DivPortal>
              {placeMain.photos && (
                <ImgPortal
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placeMain.photos[0].photo_reference}&key=${process.env.REACT_APP_API_MAP}`}
                  alt={placeMain.name}
                />
              )}
              <DetailsPortal>
                <h2>{placeMain.name}</h2>

                <Select
                  name="state"
                  label="Em qual dia?"
                  type="text"
                  data={daysSelect}
                  options={days || []}
                  onChange={(event) => setDaysSelect(event.target.value)}
                />
              </DetailsPortal>
            </DivPortal>

            <DivPortal>

                <TextArea 
                  name="description"
                  label="Deseja adicionar algum detalhe?"
                  onChange={event => setDescription(event.target.value)}/>

            </DivPortal>
          </BodyPortal>
        )}
      </Portal>
    </Modal>
  );
};

export default ModalPlace;
