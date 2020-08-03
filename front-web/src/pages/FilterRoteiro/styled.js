import styled from "styled-components";
import { theme, device } from "style/global";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const Title = styled.div`
  width: 100%;
  height: 50px;
  color: ${theme.colors.darkMain};
  font-weight: bold;
  display: flex;
  padding-left: 25px;
  align-items: center;
  font-size: ${theme.fontSizes.larger};

  @media ${device.mobileL} {
    width: 80%;
    font-size: ${theme.fontSizes.medium};
    padding-left: 0px;
  }
`;

export const ContainerFlex = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: auto;
  padding: 0 40px;

  .container {
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }

  .containerButton {
    width: 100%;
    height: 60px;
    margin-top: 40px;
  }

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

  @media ${device.tablet} {
    flex-direction: column;
    height: auto;

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }
  }
`;

export const ContainerData = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: column;
    height: auto;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0px 60px;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;

  .container-button {
    width: 250px;
    height: 60px;
  }

  @media ${device.tablet} {
    padding: 0px 10px;
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: ${theme.fontSizes.medium};
    margin-bottom: 25px;
    color: ${theme.colors.darkMain};
  }

  p {
    font-size: ${theme.fontSizes.smaller};
  }

  @media ${device.tablet} {
    padding: 0px 10px;
  }
`;

export const TextArea = styled.div`
  width: 100%;

  p {
    font-size: ${theme.fontSizes.xSmall};
    color: ${theme.colors.black};
    margin-top: 25px;
  }

  textarea {
    width: 100%;
    height: 180px;
    resize: none;
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.xSmall};
    border: 1px solid ${theme.colors.mediumGrey};
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    margin-top: 10px;

    :focus {
      border: 1px solid ${theme.colors.darkMain};
    }
  }
`;

export const ButtonBegin = styled.button`
  width: 100%;
  margin-bottom: 15px;
  background: ${theme.colors.mediumMain};
  color: ${theme.colors.white};
  height: 40px;
  align-items: center;
  cursor: pointer;

  p {
    font-size: ${theme.fontSizes.medium};
  }

  p:hover {
    text-decoration: none;
  }
`;

export const ContainerRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 55px;
  }

  .container-button {
    width: 100%;
    height: 60px;
    margin-top: 40px;
  }
`;

export const DivImage = styled.div`
  width: 100%;
  cursor: pointer;
  height: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  label #file {
    display: none;
  }

  label#thumbnail {
    width: 45%;
    border: 1px dashed ${theme.colors.mediumGrey};
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    justify-content: center;
    align-items: center;
  }

  label#thumbnail input {
    display: none;
  }

  label#thumbnail p {
    margin: 0 5px;
    text-align: center;
  }

  label#thumbnail svg {
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.mediumGrey}; 
    margin-bottom: 25px;
  }
`;

export const ImageContent = styled.div`
  width: 45%;
  height: 100%;
  border: 1px solid ${theme.colors.mediumGrey};
  display: flex;
  cursor: pointer;
  align-items: center;
  overflow: hidden;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    font-size: ${theme.fontSizes.larger};
    color: ${theme.colors.darkGrey};
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 15px;
  justify-content: space-around;

  div {
    width: 45%;
  }
`;

export const Portal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  width: 700px;
  max-width: 100vw;
  height: 550px;
  background: ${theme.colors.white};
  box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
  border-radius: 10px;
  padding: 20px;
  position: fixed;

  h3 {
    color: ${theme.colors.darkGrey};
    font-size: ${theme.fontSizes.medium};
    line-height: ${theme.lineHeight.large};
    letter-spacing: 0.25px;
    text-align: center;
    margin: 20px 0px;
  }

  p {
    color: ${theme.colors.darkGrey};
    font-size: ${theme.fontSizes.smaller};
    line-height: ${theme.lineHeight.small};
    text-align: center;
  }

  button {
    align-self: flex-end;
    margin-top: 15px;
  }

  @media ${device.mobileL} {
    width: 90%;
    height: 85%;
  }
`;
