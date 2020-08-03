import styled from "styled-components";
import { theme } from "style/global";

export const ContainerImage = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 35px;
`;

export const ImageContent = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.mediumGrey};
  display: flex;
  cursor: pointer;
  align-items: center;
  overflow: hidden;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerFlex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;

  div + div {
    margin-left: 10px;
  }
`;

export const ContainerDrop = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  background-color: ${theme.colors.darkMain};
  margin-bottom: 25px;
  position: relative;

  svg {
    position: absolute;
    color: rgba(255, 255, 255, 0.3);
    right: 0px;
    top: 0px;
    height: 80%;
    font-size: 100px;
  }
`;

export const DropMenu = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${theme.colors.mediumGrey};
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  cursor: pointer;

  .div-effect {
    width: 30px;
    height: 5px;
    background-color: ${theme.colors.orange};
    border-radius: 5px;
  }

  p {
    margin-top: 4px;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xSmall};
    font-weight: 600;
  }
`;

export const Items = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;
