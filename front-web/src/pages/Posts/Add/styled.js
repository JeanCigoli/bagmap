import styled from "styled-components";
import { theme, device } from "style/global";

export const Portal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  justify-content: flex-start;
  width: 700px;
  max-width: 100vw;
  height: 550px;
  background: ${theme.colors.white};
  box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
  border-radius: 10px;
  padding: 20px;
  position: fixed;

  @media ${device.mobileL} {
    width: 90%;
    height: 85%;
  }
`;

export const HeaderPortal = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    margin-left: 10px;
    color: ${theme.colors.mediumMain};
  }

  .button {
    width: 320px;
    height: 80%;

    div + div {
      margin-left: 10px;
    }
  }

  svg {
    font-size: ${theme.fontSizes.nav};
  }

  .icon {
    color: ${theme.colors.mediumMain};
  }
`;

export const BodyPortal = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 250px;
  height: 100%;

  @media ${device.mobileL} {
    width: 190px;
    height: 200px;
  }
`;

export const DivImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const TitleImage = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${theme.colors.mediumMain};
  font-weight: bold;

  label {
    cursor: pointer;
  }

  .button {
    width: 50px;
    height: 50px;
    margin: 0px 15px;
    position: relative;
    z-index: -1;
  }

  input[type="file"] {
    display: none;
  }
`;

export const SlideImage = styled.div`
  width: 100%;
  max-width: 370px;
  height: calc(100% - 70px);
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  /* width */
  ::-webkit-scrollbar {
    height: 5px;
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

export const Card = styled.div`
  min-width: 150px;
  width: 200px;
  height: 90%;
  background-color: red;
  border-radius: 20px;
  overflow: hidden;
  margin-left: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;