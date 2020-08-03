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

  .container {
    background-color: ${theme.colors.white};
    width: 50%;
    height: 100%;
  }

  .container-card {
    width: 100%;
    height: calc(100% - 170px);
    margin: 0px;
    overflow-x: hidden;
    position: relative;

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
      background: ${theme.colors.darkMain};
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.darkMain};
    }
  }

  .timeline-area {
    width: 100%;
  }

  .info {
    display: flex;
    align-items: stretch;
    width: 100%;
    height: 180px;
    background-color: ${theme.colors.white};
    padding: 10px 0px;
    font-size: ${theme.fontSizes.xSmall};
    line-height: 1;
    position: relative;
    margin: 20px 0;
    box-sizing: border-box;
  }

  .add {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    svg {
      cursor: pointer;
      color: ${theme.colors.darkOrange};

      :hover {
        color: ${theme.colors.orange};
      }
    }
  }

  .imgPlace {
    min-width: 150px;
    max-width: 180px;
    height: 160px;
    background-color: ${theme.colors.black};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .post-info {
    width: 100%;
    height: 100%;
    padding: 5px 15px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;

    .btn-route {
      width: 100px;
      height: 50px;
    }
  }

  .post-title {
    width: 100%;
    padding-top: 5px;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black};
  }

  .post-text {
    width: 100%;
    padding-top: 5px;
    font-size: ${theme.fontSizes.xxSmall};
    font-weight: lighter;
    color: rgba(0, 0, 0, 0.7);
  }
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
  width: 100%;
  height: calc(100% - 50px);
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
    height: auto;
  }
`;

export const Map = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 10px;
  width: 50%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  margin-top: 10px;

  .map {
    background: ${theme.colors.orange};
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    overflow: hidden;
  }

  h1 {
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black};
    margin-top: 15px;
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
`;

export const PlacesAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 20%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-left: 30px;

  /* width */
  ::-webkit-scrollbar {
    height: 5px;
    cursor: pointer;
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

  .card {
    position: relative;
    height: 90%;
    min-width: 150px;
    width: 150px;
    background-color: ${theme.colors.black};
    float: left;
    border-radius: 40px;
    box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
    cursor: pointer;
    overflow: hidden;

    :hover {
      box-shadow: 0.5px 0.5px 15px ${theme.colors.mediumGrey};
    }
  }

  .card + .card {
    margin-left: 15px;
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

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const ContainerFlexInfo = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    padding: 0px 10px;
    min-width: fit-content;
    margin: 0 5px;
    height: 30px;
    background-color: ${theme.colors.blue};
    border-radius: 10px;
  }
  button strong {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xxSmall};
  }
`;

export const Search = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 20px;
`;

export const ContainerSave = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: ${theme.fontSizes.medium};
  }

  .button {
    width: 150px;
    height: 60px;
  }
`;
