import styled from "styled-components";
import { theme } from "../../style/global";

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 8px;
  font-size: ${theme.fontSizes.xSmall};
  box-sizing: border-box;
  border: 1px solid ${theme.colors.mediumGrey};
  border-radius: 4px;
  resize: none;
`;