import styled from "styled-components";
import { theme, device } from "style/global";

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
  overflow-x: auto;
  overflow-y: hidden;

  .header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${theme.colors.mediumMain};
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: ${theme.fontSizes.medium};
      color: ${theme.colors.mediumMain}
    }

    svg {
      font-size: ${theme.fontSizes.nav};
      cursor: pointer;
      color: ${theme.colors.mediumMain};

      :hover {
        color: ${theme.colors.darkMain};
      }
    }
  }

  @media ${device.mobileL} {
    width: 90%;
    height: 85%;
  }
`;

export const DivMaps = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
`;

export const DivContainerMap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  .container-details {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    flex-direction: column;
    display: flex;
    align-items: center;
  }
`;

export const DivDetails = styled.div`
  width: 100%;
  padding: 10px;

  h2 {
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black};
    margin-top: 10px;
  }
`;

export const ContainerData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  .title {
    font-size: ${theme.fontSizes.xxSmall};
    font-weight: bolder;

    svg {
      color: ${theme.colors.darkMain};
      margin-right: 5px;
    }
  }

  p {
    font-size: ${theme.fontSizes.xxSmall};
    margin-left: 10px;
  }
`;
