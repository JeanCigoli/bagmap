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

export const DivContainerMap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  .container-button {
    width: 200px;
    height: 45px;
    margin-top: 10px;
  }
`;

export const DivMaps = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  position: relative;
`;

export const DivFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;

  .div-flex {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    overflow-y: hidden;

    img {
      width: 100%;
    }
  }

  @media ${device.mobileL} {
    flex-direction: column;

    .div-flex {
      width: 100%;
    }
  }
`;

export const ContainerSearch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: hidden;

  h2 {
    margin: 20px 0px;
    font-size: ${theme.fontSizes.medium}
  }

  .container-button {
    width: 100%;
    height: 45px;
    margin: 20px 0px;
  }
`;
