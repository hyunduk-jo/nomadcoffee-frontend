import { makeVar } from "@apollo/client";

const DARKMODE = "isDarkMode"
export const isDarkModeVar = makeVar(localStorage.getItem(DARKMODE));
export const darkMode = () => {
  localStorage.setItem(DARKMODE, true);
  isDarkModeVar(true);
}
export const lightMode = () => {
  localStorage.removeItem(DARKMODE);
  isDarkModeVar(false);
}

const TOKEN = "token"
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
}

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
}