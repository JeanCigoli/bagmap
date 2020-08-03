import styled from 'styled-components';
import { theme, device } from 'style/global';

export const ContainerLogo = styled.div`
  width: 100%;
  height: 120px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  a {
    width: 100%;
  }

  img {
    max-width: 100%;
  }

  svg{
    font-size: ${theme.fontSizes.xLarge};
    color: ${theme.colors.darkMain};
    transition: all 0.2s;
  }

  svg:hover{
    transition: all 0.2s;
    transform: scale(1.2);
  }

  @media ${device.mobileL} {
    width: 50px;
    height: 100% !important;

    img {
      max-width: 80%;
    }
  }

`;

export const ContainerNav = styled.nav`
  width: 100%;
  height: auto;
  max-height: 450px;

  hr {
    margin-top: 25px;
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  @media ${device.mobileL} {
    width: 80%;
  }
`;

export const ContainerLink = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
  }
`;

export const DivLink = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  position: relative;

  svg{
    font-size: ${ theme.fontSizes.nav};
    color: ${({ active }) => active ? theme.colors.mediumMain : theme.colors.mediumGrey};
  }

  @media ${device.mobileL} {
    margin-top: 0px;

    svg{
      font-size: ${theme.fontSizes.medium};
    }
  }
`;
