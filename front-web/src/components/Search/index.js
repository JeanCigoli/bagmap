import React, { useState, useEffect } from "react";
import search from "assets/searchback.png";
import searchBack from "assets/searchback2teste.png";
import {
  Container,
  SearchDiv,
  SearchImg,
  Input,
  ContainerSearch,
  ContainerDetails,
  ContainerApart,
  TitleDetails,
  SelectDetails,
} from "./styled";
import { FaStream } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "assets/lottie/search.json";
import Select from "components/Select";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypePlace, sendClearTypePlace } from "store/modules/home/action";

export const Search = () => {
  const dispatch = useDispatch();

  const [lottie, setLottie] = useState({ isStopped: true });
  const [typeSelect, setTypeSelect] = useState("");
  const [openModal, setOpenModal] = useState({ height: "0px", status: false });

  const type = useSelector((state) => state.home.typePlace);

  const defaultOptions = {
    autoplay: lottie.isStopped ? false : true,
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if(!type) {
      dispatch(fetchTypePlace());
    }
  }, []);

  const handleEffect = () => {
    setLottie({ isStopped: false });

    setTimeout(() => {
      setLottie({ isStopped: true });
    }, 2500);
  };

  const handleOpen = () => {
    if (openModal.status) {
      setOpenModal({ height: "0px", status: false });
    } else {
      setOpenModal({ height: "400px", status: true });
    }
  };

  return (
    <Container>
      <ContainerSearch>
        <SearchDiv>
          <FaStream className="filter-icon" onClick={handleOpen} />

          <Input
            placeholder="Aonde você quer ir?"
            type="search"
            name="search"
            id="search"
          />

          <div className="search-icon" onClick={handleEffect}>
            <Lottie
              options={defaultOptions}
              style={{ width: 170, height: 170 }}
              isStopped={lottie.isStopped}
            />
          </div>
        </SearchDiv>
      </ContainerSearch>

      <ContainerDetails
        top={"140px"}
        heigth={openModal.height}
        opacity={openModal.status ? 1 : 0}
        visibility={openModal.status}
      >
        <TitleDetails>Categorias</TitleDetails>

        <SelectDetails>
          <Select
            name="state"
            label="Selecione uma categoria para pesquisa:"
            type="text"
            data={typeSelect}
            options={type?.types || []}
            onChange={(event) => setTypeSelect(event.target.value)}
          />
        </SelectDetails>

        <TitleDetails>Visto recentemente</TitleDetails>
      </ContainerDetails>

      <SearchImg>
        <img src={search} alt="Busca de lugares" />

        <img className="img-sup" src={searchBack} alt="Busca de lugares" />
      </SearchImg>
    </Container>
  );
};

export const SearchInput = ({ submitSearch }) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [typeSelect, setTypeSelect] = useState("");
  const [lottie, setLottie] = useState({ isStopped: true });
  const [openModal, setOpenModal] = useState("0px");

  const type = useSelector((state) => state.home.typePlace);

  const defaultOptions = {
    autoplay: lottie.isStopped ? false : true,
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if(!type) {
      dispatch(fetchTypePlace());
    }
  }, []);

  const handleEffect = () => {
    setLottie({ isStopped: false });

    setTimeout(() => {
      setLottie({ isStopped: true });
    }, 2500);

    submitSearch(search ,typeSelect)
  };

  const handleOpen = () => {
    if (openModal.status) {
      setOpenModal({ height: "0px", status: false });
    } else {
      setOpenModal({ height: "400px", status: true });
    }
  };

  return (
    <ContainerApart>
      <SearchDiv apart>
        <FaStream className="filter-icon" onClick={handleOpen} />

        <Input
          placeholder="Aonde você quer ir?"
          type="search"
          name="search"
          id="search"
          onChange={event => setSearch(event.target.value)}
        />

        <div className="search-icon" onClick={handleEffect}>
          <Lottie
            options={defaultOptions}
            style={{ width: 170, height: 170 }}
            isStopped={lottie.isStopped}
          />
        </div>
      </SearchDiv>
      <ContainerDetails
        apart
        top={"40px"}
        heigth={openModal.height}
        opacity={openModal.status ? 1 : 0}
        visibility={openModal.status}
      >
        <TitleDetails>Categorias</TitleDetails>

        <SelectDetails>
          <Select
            name="state"
            label="Selecione uma categoria para pesquisa:"
            type="text"
            data={typeSelect}
            options={type?.types || []}
            onChange={(event) => setTypeSelect(event.target.value)}
          />
        </SelectDetails>

        <TitleDetails>Visto recentemente</TitleDetails>
      </ContainerDetails>
    </ContainerApart>
  );
};
