import styled from "styled-components";
import { theme, device } from "style/global";

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;
  perspective: 500px;
  background-color: ${theme.colors.white};
`;

export const ContainerNav = styled.div`
  width: 6%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 500px;
  position: absolute;
  z-index: 10;
  left: 0px;

  @media ${device.mobileL} {
    width: 100%;
    height: 50px;
    bottom: 0px;
    flex-direction: row;
    padding: 0px;
  }
`;

export const ContainerContent = styled.div`
  width: 94%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  perspective: 500px;

  @media ${device.mobileL} {
    padding-bottom: 50px;
    width: 100%;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  min-height: 40px;
  height: 60px;
  overflow: hidden;
  display: flex;
  margin: 25px 0px;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-end"};
  align-items: center;
  position: ${({ position }) => (position ? position : "relative")};
  z-index: 5;
  padding: 0px 80px;
  perspective: 500px;

  @media ${device.mobileL} {
    padding: 0px 20px;
    min-height: 40px;
    margin: 15px 0px;
  }
`;

export const ContentMain = styled.main`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.darkMain};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.darkMain};
  }
`;

export const HeaderBtn = styled.div`
  width: ${({ width }) => (width ? width : "100px")};
  height: 100%;

  .image-profile {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${theme.colors.darkMain};
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
  background-color: ${theme.colors.white};

  @media ${device.mobileL} {
    flex-direction: row;
    padding: 0px 10px;
  }

  .tooltip {
    font-size: ${theme.fontSizes.xSmall} !important;
    pointer-events: auto !important;
    background-color: ${theme.colors.mediumMain} !important;

    &:hover {
      visibility: visible !important;
      opacity: 1 !important;
    }
  }
`;

export const ContainerLogin = styled.div`
  width: 900px;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 30px;
  position: absolute;
  margin-right: ${({ marginLeft }) => (marginLeft ? "0px" : "-2100px")};
  z-index: 11;
  border-radius: 40px 0px 0px 40px;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${theme.colors.darkMain};
  transition: margin 0.4s;

  @media ${device.mobileL} {
    width: 90vw;
    padding: 5px;
    overflow: hidden;
  }
`;

export const BtnLoginClose = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  color: ${theme.colors.white};
  border-radius: 15px;
  font-size: ${theme.fontSizes.medium};

  :hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
