import React, { useState, memo } from "react";
import { NavContainer } from "../styled";
import { ContainerLogo, ContainerLink, DivLink, ContainerNav } from "./styled";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaHome, FaMapSigns } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import history from "services/history";
import logoImage from "assets/logoBagMap.png";
import { useDispatch } from "react-redux";
import { logout } from "store/modules/auth/action";
import ReactTooltip from "react-tooltip";
import { theme } from "style/global";
import { useEffect } from "react";
import ValidRoute from "components/ValidRoute";

const Nav = ({ match }) => {
  const dispatch = useDispatch();

  const [navActive, setNavActive] = useState(1);

  useEffect(() => {
    if (match.path === "/") {
      setNavActive(1);
    } else if (match.path === "/rotas") {
      setNavActive(2);
    } else if (match.path === "/lugares") {
      setNavActive(3);
    } else if (match.path === "/posts") {
      setNavActive(4);
    } /*else if(match.path === "/ajuda")  {
      setNavActive(5);
    }*/
  }, []);

  const handleNav = (id, path) => {
    setNavActive(id);
    history.push(path);
  };

  const handleExit = () => {
    dispatch(logout());
  };

  return (
    <NavContainer>
      <ContainerLogo>
        <Link to="/">
          <img src={logoImage} alt="Logo BagMap" />
        </Link>
      </ContainerLogo>

      <ContainerNav>
        <ContainerLink>
          <DivLink
            active={navActive === 1 ? true : false}
            onClick={() => handleNav(1, "/")}
          >
            <a data-for="nav" data-tip="Início">
              <FaHome />
            </a>
          </DivLink>

          <ValidRoute>
            <DivLink
              active={navActive === 2 ? true : false}
              onClick={() => handleNav(2, "/rotas")}
            >
              <a data-for="nav" data-tip="Roteiros">
                <FaMapSigns />
              </a>
            </DivLink>
          </ValidRoute>

          <DivLink
            active={navActive === 3 ? true : false}
            onClick={() => handleNav(3, "/lugares")}
          >
            <a data-for="nav" data-tip="Lugares">
              <FaMapMarkedAlt />
            </a>
          </DivLink>

          <DivLink
            active={navActive === 4 ? true : false}
            onClick={() => handleNav(4, "/posts")}
          >
            <a data-for="nav" data-tip="Posts">
              <MdDashboard />
            </a>
          </DivLink>

          {/* <DivLink
            active={navActive === 5 ? true : false}
            onClick={() => handleNav(5, "/ajuda")}
          >
            <a data-for='nav' data-tip='Ajuda'><IoMdHelpCircle /></a>
          </DivLink> */}
        </ContainerLink>
      </ContainerNav>

      <ContainerLogo>
        <AiOutlineLogout onClick={handleExit} />
      </ContainerLogo>

      <ReactTooltip
        className="tooltip"
        id="nav"
        arrowColor={theme.colors.mediumMain}
        place="right"
        delayHide={1000}
        effect="solid"
        getContent={(dataTip) => `${dataTip}`}
      />
    </NavContainer>
  );
};

export default memo(Nav);
