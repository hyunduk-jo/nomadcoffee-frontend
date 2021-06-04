import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { isDarkModeVar, isLoggedInVar } from "./apollo/reactiveVariables";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/'>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
