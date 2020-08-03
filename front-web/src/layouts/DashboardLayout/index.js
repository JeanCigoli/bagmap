import React, { memo, useState, useEffect, useCallback } from "react";
import Nav from "./Nav";
import Login from "pages/Auth";
import Profile from "pages/Profile";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { ButtonSecondary } from "components/Button";
import Loading from "components/Animation/Loading";
import Modal from "components/Modal";
import { useSelector } from "react-redux";
import firebase from "firebase";
import bagmap from "config/bagmap.json";
import {
  ContainerMain,
  ContainerNav,
  ContainerContent,
  ContentMain,
  HeaderContent,
  HeaderBtn,
  ContainerLogin,
  BtnLoginClose,
} from "./styled";

const DashboardLayout = ({ children, match }) => {
  const [containerLogin, setContainerLogin] = useState(false);
  const [appFirebase, setAppFirebase] = useState(undefined);

  useEffect(() => {
    setAppFirebase(firebase.initializeApp(bagmap));
  }, []);

  const signed = useSelector((state) => state.auth.signed);
  const user = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    setContainerLogin(!containerLogin);
  };

  return (
    <ContainerMain>
      <ContainerNav>
        <Nav match={match} />
      </ContainerNav>

      <ContainerContent>
        <HeaderContent position={"absolute"}>
          <HeaderBtn width={signed ? "60px" : "100px"}>
            {signed ? (
              <div onClick={handleLogin} className="image-profile">
                <img src={user.image} alt="Foto de perfil" />
              </div>
            ) : (
              <ButtonSecondary
                text="Entrar"
                icon={<FaMapMarkerAlt />}
                onClick={handleLogin}
              />
            )}
          </HeaderBtn>
        </HeaderContent>
        <ContentMain>{children}</ContentMain>
      </ContainerContent>

      <ContainerLogin marginLeft={containerLogin}>
        <HeaderContent position={"relative"} justifyContent={"flex-start"}>
          <HeaderBtn width="70px">
            <BtnLoginClose onClick={handleLogin}>
              <TiArrowBack />
            </BtnLoginClose>
          </HeaderBtn>
        </HeaderContent>

        {signed ? (
          <Profile />
        ) : (
          <Login appFirebase={appFirebase} containerLogin={containerLogin} />
        )}
      </ContainerLogin>

      <Modal id={1}>
        <Loading />
      </Modal>
    </ContainerMain>
  );
};

export default memo(DashboardLayout);
