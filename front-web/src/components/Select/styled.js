import styled from "styled-components";
import { theme } from "../../style/global";

export const SelectField = styled.select`
  width: 100%;
  height: 40px;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid ${theme.colors.mediumGrey};
  border-radius: 4px;
  font-size: ${theme.fontSizes.xSmall};

  :disabled{
    opacity: 0.5;
  }

  :active, :hover {
    outline: none
  }

  :focus {
    border: 1px solid ${theme.colors.darkMain};
  }
`;

export const InformationError = styled.div`
  position: absolute;
  right: 15px;
  color: ${theme.colors.darkRed};
  cursor: pointer;
  background: transparent;
  width: 40px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
