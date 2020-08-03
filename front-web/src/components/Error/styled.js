import styled from "styled-components";
import { theme } from "style/global";

export const ErrorInfo = styled.div`
  color: ${theme.colors.white};
  padding-top: 2px;
  font-size: ${theme.fontSizes.xSmall};
`;

export const InformationError = styled.div`
  position: absolute;
  right: ${props => props.marginRight ? "30px" : "5px"};
  color: ${theme.colors.darkRed};
  cursor: pointer;
  background: transparent;
  width: 25px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;

  svg {
    font-size: 18px;
    bottom: 0px;
  }
`;

export const ContainerInputError = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
`;
