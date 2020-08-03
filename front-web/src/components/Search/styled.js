import styled from "styled-components";
import { theme, device } from "style/global";


export const Container = styled.div`
  width: 100%;
  min-height: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    min-height: 250px;
  }
`;

export const ContainerApart = styled.div`
  width: 100%;
  min-height: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    min-height: 250px;
  }
`;

export const SearchDiv = styled.div`
  width: ${({ apart }) => apart ? '100%' : '80%'};
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  z-index: 6;

  svg {
    font-size: ${theme.fontSizes.small};
  }

  .filter-icon {
    color: ${theme.colors.mediumMain};
    position: absolute;
    left: 25px;
    cursor: pointer;

    :hover {
      color: ${theme.colors.darkMain};
    }
  }

  .search-icon {
    position: absolute;
    right: -35px;
    cursor: pointer;
  }

  
  @media ${device.tablet} {
    font-size: ${theme.fontSizes.xSmall};

    .search-icon {
      right: -50px;
    }

    .filter-icon {
      left: 15px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  padding: 0px 80px;
  font-size: ${theme.fontSizes.medium};
  border: 1px solid ${theme.colors.lightGrey};
  box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};

  ::placeholder {
    color: ${theme.colors.mediumGrey};
  }

  @media ${device.tablet} {
    font-size: ${theme.fontSizes.small};
    padding: 0px 50px;
  }
`;

export const ContainerSearch = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 30px;
  background-color: #c9f2e3;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    height: 180px;
  }
`;

export const SearchImg = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  z-index: 1;

  .img-sup {
    margin-bottom: 100px;
  }

  img {
    height: 80%;
    bottom: 0px;
  }

  @media ${device.tablet} {
    img {
      height: 50%;
      bottom: 0px;
    }

    .img-sup {
      margin-bottom: 70px;
    }
  }
`;

export const ContainerDetails = styled.div`
  width: ${({ apart }) => apart ? '100%' : '80%'};
  height: ${({ heigth }) => heigth};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.lightGrey};
  box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
  position: absolute;
  z-index: 1;
  top: ${({ top }) => top};
  z-index: 5;
  border-radius: 20px;
  visibility: ${({visibility}) => visibility ? 'visible' : 'hidden'};
  opacity: ${({opacity}) => opacity};
  transition: all 0.5s;

  @media ${device.tablet} {
    top: 90px;
  }
`;

export const TitleDetails = styled.div`
  width: 100%;
  height: 30px;
  font-size: ${theme.fontSizes.xSmall};
  color: ${theme.colors.mediumGrey};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 25px;
  padding-left: 25px;
`;

export const SelectDetails = styled.div`
  width: 100%;
  padding: 0px 25px;
`;
