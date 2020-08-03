import styled from "styled-components";
import { theme } from "style/global";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const BtnPrimary = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${({ background }) =>
    background ? background : theme.colors.mediumMain};
  display: flex;
  outline: none;
  align-items: center;
  border: 1px solid ${theme.colors.mediumMain};
  justify-content: space-evenly;
  color: ${({ color }) => (color ? color : theme.colors.white)};
  border-radius: 10px;
  cursor: pointer;
  font-weight: bolder;
  transition: all 0.2s;
  font-size: ${theme.fontSizes.xSmall};

  :hover {
    transition: all 0.2s;
    background-color: ${theme.colors.white};
    color: ${theme.colors.mediumMain};
  }
`;

export const BtnSecondary = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${({ background }) =>
    background ? background : theme.colors.white};
  border: 1px solid ${theme.colors.mediumMain};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  outline: none;
  font-weight: bolder;
  cursor: pointer;
  color: ${({ color }) => (color ? color : theme.colors.mediumMain)};
  border-radius: 10px;
  font-size: ${theme.fontSizes.xSmall};
  transition: all 0.2s;


  :hover {
    transition: all 0.2s;
    background-color: ${theme.colors.mediumMain};
    color: ${theme.colors.white};
  }
`;

export const ButtonRoute = styled.button`
  width: 100%;
  overflow: hidden;
  height: 100%;
  background-color: ${({ background }) =>
    background ? background : theme.colors.white};
  border: 1px solid ${theme.colors.mediumMain};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  outline: none;
  position: relative;
  padding-left: 25%;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s;

  h3,
  svg {
    color: ${({ color }) => (color ? color : theme.colors.mediumMain)};
  }

  h3 {
    width: 100%;
    font-weight: bolder;
    text-align: center;
    font-size: ${theme.fontSizes.small};
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 22%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;

    svg {
      font-size: ${theme.fontSizes.nav};
    }
  }

  :hover {
    transition: all 0.2s;
    background-color: ${theme.colors.mediumMain};

    h3,
    svg {
      color: ${theme.colors.white};
    }
  }
`;

export const ButtomPoint = styled.button`
  width: 100%;
  overflow: hidden;
  height: 60px;
  background-color: ${({ background }) =>
    background ? background : theme.colors.white};
  border: 1px solid ${theme.colors.mediumMain};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  outline: none;
  position: relative;
  padding-left: 25%;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s;
  margin-top: 120px;
  /* span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 22%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;

    svg {
      font-size: ${theme.fontSizes.nav};
    }
  }

  span,
  svg {
    color: ${({ color }) => (color ? color : theme.colors.mediumMain)};
  }

  h3 {
    width: 100%;
    font-weight: bolder;
    text-align: center;
    font-size: ${theme.fontSizes.small};
  }

  :hover {
    transition: all 0.2s;
    background-color: ${theme.colors.mediumMain};

    h3,
    svg {
      color: ${theme.colors.white};
    }
  } */
`;
