import styled from "styled-components";
import { theme, device } from "style/global";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  overflow: auto;
  flex-direction: column;
  display: flex;
  border-radius: 5px;

  #page-home {
    width: 50%;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 50px;
  }

  #page-home h2 {
    width: 100%;
    color: ${theme.colors.darkMain};
    font-weight: bold;
    margin: 30px 0px;
    font-size: ${theme.fontSizes.xLarge};
  }

  .sub-title {
    font-size: ${theme.fontSizes.small};
    font-weight: bold;
    text-align: center;
    line-height: 1.5em;
    border-bottom: 2px solid ${theme.colors.orange};
    margin: 30px 0px;
  }

  @media ${device.tablet} {
    padding: 5px;
    height: auto;

    #page-home {
      width: 100%;
      height: auto;
      padding: 0 10px;
    }

    #page-home h2 {
      font-size: ${theme.fontSizes.larger};
      line-height: 1.3em;
    }

  }
`;

export const Places = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 350px;

  .card {
    position: relative;
    width: 250px;
    min-width: 250px;
    height: 300px;
    background-color: ${theme.colors.black};
    border-radius: 40px;
    box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
    cursor: pointer;
    overflow: hidden;
    margin-right: 50px;
    scroll-snap-align: start;

    p {
      position: absolute;
      bottom: 20px;
      flex: 1;
      align-self: flex-end;
      padding: 20px;
      font-size: ${theme.fontSizes.small};
      font-weight: bold;
      color: ${theme.colors.white};
    }

    :hover {
      box-shadow: 0.5px 0.5px 15px ${theme.colors.mediumGrey};
      transform: scale(1.002);
    }
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: inherit;
    opacity: 0.7;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .card img:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media ${device.tablet} {
    overflow: auto;
    height: 400px;
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 100%;
  min-height: 80px;
  color: ${theme.colors.darkMain};
  font-weight: bolder;
  display: flex;
  padding-left: 50px;
  align-items: center;
  font-size: ${theme.fontSizes.larger};

  @media ${device.mobileL} {
    width: 80%;
    font-size: ${theme.fontSizes.medium};
    padding-left: 10px;
  }
`;

export const ContainerFlex = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
    height: auto;
  }
`;

export const ContainerCreate = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .button {
    width: 50%;
    height: 65px;
    margin: 30px 0px;
  }

  footer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 0.8rem;
  }

  p {
    width: 100%;
    color: ${theme.colors.darkGrey};
    font-size: ${theme.fontSizes.small};
    text-align: center;
    line-height: 1.5em;
  }

  @media ${device.tablet} { 
    width: 100%;

    .button {
      width: 90%;
    }
  }
`;

export const RoadNotFound = styled.div`
  min-width: 220%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.darkGrey};
  font-size: ${theme.fontSizes.small};
  text-align: center;
  line-height: 1.5em;
`
