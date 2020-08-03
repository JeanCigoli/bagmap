import styled from 'styled-components';
import { theme, device } from 'style/global';

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

  img {
    margin-bottom: 20px;
  }

  h3,
  p {
    margin-bottom: 25px;
  }

  img {
    width: 400px;
    height: 250px;
  }

  h3 {
    color: ${theme.colors.darkGrey};
    font-size: ${theme.fontSizes.medium};
    line-height: ${theme.lineHeight.large};
    letter-spacing: 0.25px;
    text-align: center;
  }

  p {
    color: ${theme.colors.darkGrey};
    font-size: ${theme.fontSizes.smaller};
    line-height: ${theme.lineHeight.small};
    text-align: center;

    span {
      color: ${theme.colors.blue};
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }
  }

  button {
    align-self: flex-end;
    margin-top: 15px;
  }

  @media ${device.mobileL} {
    width: 90%;
    height: 85%;

    img {
      width: 100%;
      height: 200px;
    }
  }
`;
