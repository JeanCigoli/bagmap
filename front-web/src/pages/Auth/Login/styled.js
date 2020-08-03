import styled from "styled-components";
import { theme } from "style/global";

export const HeaderContent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "25px")};
  align-items: center;
`;

export const TextLimiter = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.darkGrey};
  font-size: ${theme.fontSizes.xSmall};
`;

export const ContainerRegister = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 35px;
  justify-content: center;
  font-weight: 600;
  align-items: center;

  p {
    width: 100%;
    margin: 0px;
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.xSmall};

    span {
      color: ${theme.colors.blue};
      cursor: pointer;
    }

    span:hover {
      text-decoration: underline;
    }
  }
`;
