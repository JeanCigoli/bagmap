import styled from "styled-components";
import { theme, device } from "style/global";

export const Footer = styled.div`
width: 100%;
min-height: 300px;
background-color: ${theme.colors.black};

.row {
  width: 80%;
  height: 100%;
  background-color: ${theme.colors.black};
  display: flex;
  align-items: center;
  margin: auto;

  p {
    color: ${theme.colors.white};
    margin: 0 20px;
  }
  span {
    font-weight: bold;
    color: ${theme.colors.blue};
  }
}

.row .logo img {
  width: 90px;
  height: 100px;
  object-fit: contain;
  top: 0;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 0 30px;
  margin: 0 50px;

  h1 {
    font-size: ${theme.fontSizes.small}
  }

  h1,
  a {
    color: ${theme.colors.white};
  }
}
.description .navbar-nav li {
  list-style: none;
  margin: 10px 0;
}

.redes-sociais {
  display: flex;
  align-items: flex-end;
  width: 200px;
  height: 60px;

  svg {
    border: 2px solid ${theme.colors.mediumMain};
    border-radius: 50%;
    padding: 0 7px;
    margin: 0 10px;
  }
}
`;