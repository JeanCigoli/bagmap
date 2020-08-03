import styled from 'styled-components';
import { theme } from 'style/global';

export const BtnReturnLogin = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p, svg {
    font-weight: 500;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.smaller};
  }

  svg {
    margin-right: 5px;
  }
`;

export const ContainerStep = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .container{
    width: 100%;
    height: 100%;
  }

  .item {
    width: 100%;
    height: 50px;
    margin-top: 10px;
  }
`;

export const DivStep = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  p{
    font-weight: 500;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.smaller};
  }
`;

export const Svg = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  border: 2px solid ${theme.colors.white};
  border-radius: 50%;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xSmall};
  margin-right: 10px;
  border: 2px solid ${({ icon }) => icon ? theme.colors.green : theme.colors.white};
  background-color: ${ ({ icon }) => icon ? theme.colors.green : theme.colors.darkMain};
`;

export const Title = styled.h4`
  margin-top: 15px;
  color: ${theme.colors.black};
  letter-spacing: 0.02em;
  font-size: ${theme.fontSizes.smaller};

  svg {
    cursor: pointer;
  }
`;

export const Description = styled.p`
  margin-top: 30px !important;
  color: ${theme.colors.black};
  letter-spacing: 0.02em;
  font-size: ${theme.fontSizes.xSmall} !important;
`;

export const ContainerFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${ ({ direction }) => direction ? direction : "row"};
  align-items: center;
  justify-content: space-between;

  div + div {
    margin-left: 5px;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  label{
    width: 200px;
    height: 200px;
  }

  input {
    display: none;
  }

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
    object-fit: cover;
  }

  svg {
    font-size: ${theme.fontSizes.larger};
    color: ${theme.colors.darkGrey};
  }

`;

