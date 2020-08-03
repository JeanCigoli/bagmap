import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    font-family: 'Roboto', Arial, Helvetica, sans-serif !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  a {
    width: inherit;
    text-align: center;
    text-decoration: none;
    color: inherit;
  }
`;

export default Global;

export const theme = {
  colors: {
    darkGrey: "#424242",
    mediumGrey: "#bdbdbd",
    lightGrey: "#eeeeee ",
    white: "#ffffff",
    beige: "#f5f5f5",
    blue: "#2EC4B6",
    black: "rgb(13, 13, 13)",
    darkMain: "#1e5c5b",
    mediumMain: "#2d857d",
    orange: "#FF9F1C",
    darkOrange: "#C37305",
    lightBlue: "rgba(164, 191, 212, 0.28)",
    red: "#F44336",
    darkRed: "#C62828",
    green: "#42A839",
    darkGreen: "#2E7D32",
    charcoalGray: "rgb(54, 69, 79)",
    darkCharcoalGray: "rgb(44,56,64)",
    yellow: "#FFC107",
  },
  fontSizes: {
    xxSmall: "0.9em",
    xSmall: "1em",
    smaller: "1.1em",
    small: "1.3em",
    medium: "1.5em",
    large: "1.7em",
    larger: "2em",
    xLarge: "2.5em",
    xxLarge: "3em",
    nav: "1.8em",
  },
  lineHeight: {
    small: "23px",
    medium: "28px",
    large: "33px",
  },
};

// Medidas responsivas
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
