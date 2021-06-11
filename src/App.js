import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/GlobalStyles";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { isDarkModeVar, isLoggedInVar } from "./apollo/reactiveVariables";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { HelmetProvider } from "react-helmet-async";
import AddShop from "./screens/AddShop";
import Shop from "./screens/Shop";
import Header from "./components/Header";
import SearchResult from "./screens/SearchResult";

const App = () => {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <HelmetProvider>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login'>
              {isLoggedIn ? <Redirect to='/' /> : <Login />}
            </Route>
            <Route path='/signup'>
              {isLoggedIn ? <Redirect to='/' /> : <Signup />}
            </Route>
            <Route path='/add'>
              {isLoggedIn ? <AddShop /> : <Login />}
            </Route>
            <Route path='/shop/:id'>
              <Shop />
            </Route>
            <Route path='/search'>
              <SearchResult />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
