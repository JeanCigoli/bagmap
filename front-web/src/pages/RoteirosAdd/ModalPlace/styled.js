import styled from "styled-components";
import { theme, device } from "style/global";

export const Portal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  justify-content: flex-start;
  width: 700px;
  max-width: 100vw;
  height: 550px;
  background: ${theme.colors.white};
  box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
  border-radius: 10px;
  padding: 20px;
  position: fixed;

  @media ${device.mobileL} {
    width: 90%;
    height: 85%;
  }
`;

export const HeaderPortal = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    margin-left: 10px;
    color: ${theme.colors.mediumMain};
  }

  .button {
    width: 320px;
    height: 80%;

    div + div {
      margin-left: 10px;
    }
  }

  svg {
    font-size: ${theme.fontSizes.nav};
  }

  .icon {
    color: ${theme.colors.mediumMain};
  }
`;

export const BodyPortal = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const DivPortal = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

export const ImgPortal = styled.img`
  min-width: 200px;
  max-width: 200px;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

export const DetailsPortal = styled.div`
  width: calc(100% - 220px);
  height: 100%;
  padding: 20px;
`;