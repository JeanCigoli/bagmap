import styled from 'styled-components';
import { theme } from 'style/global';

export const Label = styled.label`
  width: 100%;
  min-height: 20px;
  margin-bottom: 5px;
  font-size: ${theme.fontSizes.xSmall};
  color: ${theme.colors.black};
`;

export const ContainerInput = styled.div`
  width: 100%;
  position: relative;
  height: 40px;

  input {
    width: 100%;
    height: 40px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid ${theme.colors.mediumGrey};
    font-size: ${theme.fontSizes.xSmall};
    border-radius: 4px;

    :focus {
      border: 1px solid ${theme.colors.darkMain};
    }
  }
`;

export const ContainerInputError = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  flex-direction: row;

  .tooltip {
    background-color: #800505 !important;
    word-spacing: 0.1em !important;
    letter-spacing: 0.03em !important;
    width: 200px !important;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const SvgChilden = styled.div`
  position: absolute;
  right: 5px;
  color: ${theme.colors.mediumGrey};
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
