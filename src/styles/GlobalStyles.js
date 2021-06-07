import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const lightTheme = {
  fontColor: "black",
  bgColor: "white",
  dustPinkColor: "#dbb0a0",
  warmPinkColor: "#e0c2c0",
  lightBrownColor: "#eab586",
  brownColor: "#b2481b",
  darkPurpleColor: "#57394a",
  darkCherryColor: "#3b0002",
  cherryColor: "#920003",
  beigeColor: "#c8b8ac",
}

export const darkTheme = {
  fontColor: "black",
  bgColor: "black"
}

export const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.fontColor};
  }
  input {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;