import styled from "styled-components";
import { theme, device } from "style/global";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.mobileL} {
    padding: 0px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 80px;
  color: ${theme.colors.darkMain};
  font-weight: bolder;
  display: flex;
  padding-left: 50px;
  margin-top: 25px;
  align-items: center;
  font-size: ${theme.fontSizes.larger};

  @media ${device.mobileL} {
    width: 90%;
    font-size: ${theme.fontSizes.xLarge};
    padding-left: 10px;
    height: 100px;
  }
`;

export const ContainerAll = styled.section`
  width: 100%;
  min-height: calc(100% - 80px);
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;


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

export const CotainerHeader = styled.div`
  width: 100%;
  min-height: 450px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 40px;

  @media ${device.tablet} {
    flex-direction: column;
    min-height: fit-content;
  }
`;

export const ContainerDataHeader = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 90%;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const TextHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 30px;
  justify-content: space-evenly;
  flex-direction: column;

  h1 {
    width: 100%;
    color: ${theme.colors.darkMain};
    font-weight: bolder;
    margin: 30px 0px;
    font-size: ${theme.fontSizes.xLarge};
  }

  p {
    width: 100%;
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.small};
    line-height: 1.5em;
  }

  @media ${device.tablet} {
    h1 {
      font-size: ${theme.fontSizes.larger};
    }
  }
`;

export const ContainerCurve = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: ${theme.colors.darkMain};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  top: 420px;

  img {
    width: 100%;
  }

  .img-rotate {
    margin-top: -1px;
    transform: rotate(180deg);
  }

  @media ${device.tablet} {
    top: 660px;
  }
`;

export const ContainerPost = styled.div`
  width: 1000px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 40px auto;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 100%;
    flex-direction: column;
    height: auto;
    align-items: center;
    margin: 20px auto;
  }
`;

export const TitlePost = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .button {
    width: 300px;
    height: 100%;

    svg {
      font-size: ${theme.fontSizes.medium}
    }
  }
`;

export const DivPost = styled.div`
  width: 48%;
  min-height: 300px;
  border-radius: 30px;
  box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  @media ${device.tablet} {
    width: 90%;
  }
`;

export const HeaderPost = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 30px;
  align-items: center;
  justify-content: flex-start;
  height: 80px;

  .data {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 15px;

    p {
      margin-top: 5px;
      font-size: ${theme.fontSizes.xxSmall};
      color: ${theme.colors.mediumGrey};
    }
  }
`;

export const ImgPost = styled.div`
  width: 90%;
  margin: 8px auto;
  border-radius: 30px;
  height: 250px;
  background-color: ${theme.colors.green};
  overflow: hidden;
`;

export const DescriptionPost = styled.div`
  width: 100%;
  padding: 0px 20px;
  height: auto;
  margin: 8px auto;

  p {
    font-size: ${theme.fontSizes.xSmall};
    color: ${theme.colors.charcoalGray};
    line-height: 1.5em;
    font-family: Roboto;
  }
`;

export const FooterPost = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 25px;

  p {
    font-size: ${theme.fontSizes.xxSmall};
    color: ${theme.colors.mediumGrey};
    font-family: Roboto;
  }
`;

export const ViewPlus = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: ${theme.fontSizes.nav};
  }

  .button {
    width: 200px;
    height: 70px;
  }
`;
