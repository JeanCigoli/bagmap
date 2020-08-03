import styled from "styled-components";
import { theme, device } from "style/global";

export const ContainerSlider = styled.div`
  width: 100%;
  min-height: 360px;
  padding: 0px 40px;
  margin-top: ${({marginTop}) => marginTop};
  overflow: hidden;

  .card-container {
    width: 100%;
    height: 300px;
  }

  @media ${device.mobileL} {
    padding: 5px;
  }

  @media ${device.tablet} {
    .card-container {
      margin-top: 20px;
    }
  }
`;

export const TitleItem = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .title-slider {
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.darkMain};
  }

  .border {
    width: 80px;
    height: 8px;
    background-color: ${theme.colors.orange};
    border-radius: 5px;
    position: absolute;
    bottom: 7px;
    left: 0;
  }

  @media ${device.tablet} {
    .title-slider {
      font-size: ${theme.fontSizes.medium};
    }

    .border {
      width: 70px;
      height: 6px;
      bottom: 0;
    }
  }
`;

export const Button = styled.button`
width: 50px;
height: 50px;
background-color: ${theme.colors.mediumMain};
border: 0px;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0.5px 0.5px 15px ${theme.colors.mediumGrey};
cursor: pointer;

:hover {
  transform: scale(1.05);
}

svg {
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.nav};
}
`;
