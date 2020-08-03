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

  .search {
    width: 100%;
    background: ${theme.colors.white};
    padding: 0;
  }

  .container-card {
    width: 100%;
    height: calc(100% - 100px);
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
    margin: 30px;
    width: 100%;
    border-left: 2px solid ${theme.colors.mediumGrey};
    padding: 0 20px 0 30px;
  }

  .info {
    display: flex;
    align-items: stretch;
    width: 100%;
    height: 180px;
    background-color: ${theme.colors.white};
    padding: 10px 25px;
    font-size: ${theme.fontSizes.xSmall};
    line-height: 1;
    position: relative;
    margin: 20px 0;
    box-sizing: border-box;
  }

  .info a {
    width: 150px;
  }

  .info::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.colors.blue};
    border: 3px solid ${theme.colors.mediumGrey};
    position: absolute;
    top: 80px;
    left: -40px;
  }

  .info::after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent ${theme.colors.mediumGrey} transparent transparent;
    border-width: 8px;
    position: absolute;
    left: -17px;
    top: 80px;
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
  height: 70px;
  color: ${theme.colors.darkMain};
  font-weight: bolder;
  display: flex;
  padding-left: 30px;
  align-items: center;
  font-size: ${theme.fontSizes.larger};

  @media ${device.mobileL} {
    width: 90%;
    font-size: ${theme.fontSizes.xLarge};
    padding-left: 10px;
    height: 100px;
  }
`;

export const ContainerFlex = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
    height: auto;
  }
`;

export const Map = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 50%;
  max-height: 100%;
  border-radius: 30px;
  overflow: hidden;
  margin: 15px;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ContainerFlexInfo = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .button {
    width: 80px;
    height: 30px;
    background-color: ${theme.colors.blue};
    margin: 0 20px;
    border-radius: 15px;
    outline: 0;
    border: 0;
  }
  .button strong {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xxSmall};
  }
`;

export const Search = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Days = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  overflow: auto;
  margin-left: 10px;
  padding-bottom: 5px;
  scroll-snap-type: x mandatory;

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

export const ButtonDays = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  height: 30px;
  background-color: ${({ selected }) => selected ? theme.colors.darkOrange : theme.colors.orange};
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;

  p {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xxSmall}
  }

  :hover {
    background-color: ${theme.colors.darkOrange};
  }
`;

export const Edition = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 25px;

  p {
    color: ${theme.colors.black};
    font-weight: bold;
    font-size: ${theme.fontSizes.small}
  }

  .button-edit {
    width: 50px;
    height: 60%;
    margin-left: 20px;
  }
`;