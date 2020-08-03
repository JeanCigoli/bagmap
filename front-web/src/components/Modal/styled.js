import styled from "styled-components";
import { device } from "../../style/global";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 10;
  height: auto;
  min-height: 100vh;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: ${props => props.top ? "flex-start" : "center"};
  background: rgba(0, 0, 0, 0.38);

  @media ${device.mobileL} {
    padding: 0;
    align-items: center;
  }
`;
