import styled from "styled-components";
import React from 'react';
import { theme, device } from "style/global";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  .container {
    background-color: ${theme.colors.white};
    width: 50%;
    height: 100%;
    overflow: auto;
    padding: 50px;

    /* width */
    ::-webkit-scrollbar {
      width: 0px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.darkMain};
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.darkMain};
    }
  }

  .search {
    width: 100%;
    background: ${theme.colors.white};
    padding: 0;
  }

  .container-card {
    width: 100%;
    min-height: 300px;
    overflow: hidden;
  }

  .info {
    display: flex;
    align-items: stretch;
    width: 100%;
    height: 250px;
    background-color: ${theme.colors.white};
    padding: 5px 0px;
    font-size: ${theme.fontSizes.small};
    line-height: 1;
    /* position: relative; */
    margin: 10px 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  .info a {
    width: 220px;
  }

  .info h2 {
    margin: 0;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
  }

  .info h3, h4 {
    margin: 0;
    font-family: sans-serif;
  }

  .post-info {
    width: 100%;
  }


  .post-title {
    font-size: ${theme.fontSizes.xSmall};
    margin: 20px 18px;
    color: ${theme.colors.black};
  }

  .post-text {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    margin: 15px 10px;
  }

  .post-text svg {
    margin: 0 10px;
  }
`;

export const Img = styled.div`
  min-width: 200px;
  width: 220px;
  height: 220px;
  background-color: ${theme.colors.black};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;

  img {
    resize: cover;
    width: inherit;
    height: inherit;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 50px;
  color: ${theme.colors.darkMain};
  font-weight: bold;
  display: flex;
  padding-left: 25px;
  align-items: center;
  font-size: ${theme.fontSizes.larger};

  svg {
    font-size: ${theme.fontSizes.small};
    margin-right: 5px;
    position: relative;
    z-index: 999;
    cursor: pointer;
  }

  @media ${device.mobileL} {
    width: 80%;
    font-size: ${theme.fontSizes.medium};
    padding-left: 0px;
  }
`;

export const ContainerFlex = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
    height: auto;
  }
`;

export const TitleCenter = styled.p`
  font-size: ${theme.fontSizes.medium};
  width: 100%;
  text-align: center;
`;

export const Map = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 10px;
  width: 50%;
  height: calc(100% - 30px);
  max-height: 100%;
  margin-top: 30px;

  .map {
    background: ${theme.colors.orange};
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    overflow: hidden;
  }
`;

export const Form = styled.form`
  margin-top: 3px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${theme.colors.mediumGrey};
    padding: 10px 50px;
    border-radius: 4px 0 0 4px;
    font-size: ${theme.fontSizes.xSmall};
  }

  .icone {
    position: relative;
    transform: rotate(90deg);
    left: 20px;
  }
`;

export const ContainerInfo = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ContainerFlexInfo = styled.div`
  max-width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  button {
    width: auto;
    padding: 0px 10px;
    height: 30px;
    background-color: ${theme.colors.blue};
    margin: 0 20px;
    border-radius: 15px;
    outline: 0;
    border: 0;
  }
  button strong {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xxSmall};
  }
`;

export const Days = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonDays = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  background-color: ${theme.colors.blue};
  margin-top: 10px;
  border-radius: 10px;
  margin: 10px;

  p {
    padding: 5px;
    color: ${theme.colors.white};
  }
`;

export const ContainerPhotos = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    font-size: ${theme.fontSizes.medium};
    height: 50px;
  }
`;

export const PlacesAdd = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 20px;
  width: 100%;
  height: 300px;
  max-height: 100%;
  overflow: auto;

  .card {
    position: relative;
    width: 200px;
    height: 250px;
    /* margin: 0 20px; */
    margin-bottom: 20px;
    background-color: ${theme.colors.black};
    float: left;
    border-radius:20px;
    box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
    cursor: pointer;
    overflow: hidden;

    :hover {
      box-shadow: 0.5px 0.5px 15px ${theme.colors.mediumGrey};
      transform: scale(1.002);
    }
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: inherit;
    opacity: 0.7;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .card img:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.darkMain};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.darkMain};
  }

  /* @media ${device.tablet} {
    overflow: auto;
    height: 400px;
    width: 100%;
  } */
`;

export const Details = styled.div`
  width: 100%;
  min-height: 250px;
  height: auto;
  background-color: ${theme.colors.white};
  margin: 20px 10px;
  overflow: auto;

  h1 {
    font-size: ${theme.fontSizes.medium};
    margin-bottom: 10px;
  }

  .avaliation {
    width: 100%;
    min-height: 250px;
    max-height: 400px;
    overflow: auto;

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.mediumGrey};
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.darkMain};
    }
  }
`;

export const MapView = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: ${theme.fontSizes.small};
  }

  .button {
    width: 150px;
    height: 80%;
  }
`;

export const AntTabs = withStyles({
  root: {
    borderBottom: `1px solid ${theme.colors.mediumGrey}`,
  },
  indicator: {
    backgroundColor: theme.colors.orange,
  },
})(Tabs);

export const AntTab = withStyles((them) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontSize: theme.fontSizes.smaller,
    fontWeight: them.typography.fontWeightRegular,
    marginRight: them.spacing(4),
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    '&:hover': {
      color: theme.colors.orange,
      opacity: 1,
    },
    '&$selected': {
      color: theme.colors.orange,
      fontWeight: them.typography.fontWeightMedium,
    },
    '&:focus': {
      color: theme.colors.orange,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: 15,
  },
}));
