import { useReactiveVar } from "@apollo/client";
import { MoonIcon, SunIcon } from '../components/Icons';
import styled from "styled-components";
import { darkMode, isDarkModeVar, lightMode } from "../apollo/reactiveVariables";

const SThemeButton = styled.div`
  border: none;
  outline: none;
  width: 50px;
  height: 25px;
  border-radius: 12.5px;
  svg {
    fill: gold;
    ${props => props.isDarkMode ? "margin-left: 6px;" : "margin-right: 5px;"}
  }
  background-color: ${props => props.isDarkMode ? "#ADF77C" : "black"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 11.5px;
  background-color: white;
  border: 1.5px solid gray;
`;

const ThemeButton = () => {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  return (
    <SThemeButton isDarkMode={isDarkMode} onClick={isDarkMode ? lightMode : darkMode}>
      {isDarkMode ? <><SunIcon size="18" /><Circle /></> : <><Circle /><MoonIcon size="18" /></>}
    </SThemeButton>
  )
}

export default ThemeButton;