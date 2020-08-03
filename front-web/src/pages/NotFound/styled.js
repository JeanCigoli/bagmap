import styled from 'styled-components';
import { theme, device } from 'style/global';

export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const ContainerLeft = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2, p {
    text-align: center;
    color: ${theme.colors.darkGrey};
  }

  h2 {
    font-size: ${theme.fontSizes.xxLarge};
    color: ${theme.colors.darkMain};
    margin-bottom: 75px;
  }

  p {
    width: 70%;
    margin-bottom: 40px;
    font-size: ${theme.fontSizes.small};
  }

  .container-button {
    width: 60%;
    margin-bottom: 45px;
    height: 65px;
    font-size: ${theme.fontSizes.smaller};
  }

  @media ${device.mobileL} {
    height: auto;
    width: 100%;
    height: 800px;
    padding: 30px;

    h2 {
      margin-bottom: 35px;
    }

    p {
      width: 80%;
      margin-bottom: 20px;
      font-size: ${theme.fontSizes.smaller};
    }

    .container-button {
      width: 80%;
      margin-bottom: 25px;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const ContainerRigth = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media ${device.mobileL} {
    height: auto;
    width: 100%;
    height: 400px;
  }
`;
