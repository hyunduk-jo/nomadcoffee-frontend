import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const lightTheme = {
  fontColor: "black",
  bgColor: "white"
}

export const darkTheme = {
  fontColor: "white",
  bgColor: "black"
}

export const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.fontColor};
  }
`;