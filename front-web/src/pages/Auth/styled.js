import styled from "styled-components";
import { theme, device } from "style/global";

export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ContainerLeft = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: ${theme.colors.darkMain};

  @media ${device.mobileL} {
    padding: 5px;
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const ContainerRigth = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  border-radius: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${theme.colors.white};

  @media ${device.mobileL} {
    overflow: hidden;
    width: 95%;
    height: 95%;
  }
`;

export const ContainerCenter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h3,
  p {
    width: 100%;
    text-align: center;
    color: ${theme.colors.white};
    letter-spacing: 0.02em;
  }

  h3 {
    font-weight: 400;
    font-size: ${theme.fontSizes.medium};
  }

  p {
    margin-top: 50px;
    font-weight: lighter;
    font-size: ${theme.fontSizes.smaller};
  }
`;

export const ContainerLogo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.white};
    letter-spacing: 0.02em;
  }
`;

export const ContainerData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 50px;
  padding-left: 80px;
  padding-right: 80px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: auto;

  /* width */
  ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.mediumMain};
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.darkMain};
    }

  h3,
  p {
    margin-top: 30px;
    color: ${theme.colors.black};
    letter-spacing: 0.02em;
  }

  h3 {
    font-weight: 400;
    font-size: ${theme.fontSizes.large};
  }

  p {
    font-weight: lighter;
    font-size: ${theme.fontSizes.smaller};
  }

  @media ${device.mobileL} {
    overflow: auto;
    padding: 15px;

    h3,
    p {
      margin-top: 15px;
    }

    h3 {
      font-weight: 400;
      font-size: ${theme.fontSizes.medium};
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${device.mobileL} {
    width: 100%;
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

  img {
    margin-bottom: 5px;
  }

  h3,
  p {
    margin-bottom: 25px;
  }

  img {
    width: 230px;
    height: 230px;
  }

  .img-width{
    width: 280px;
    height: 280px;
  }

  h3 {
    color: ${theme.colors.darkGrey};
    font-size: ${theme.fontSizes.medium};
    line-height: ${theme.lineHeight.large};
    letter-spacing: 0.25px;
    text-align: center;
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
