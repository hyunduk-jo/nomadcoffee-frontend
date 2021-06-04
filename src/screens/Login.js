import { useReactiveVar } from '@apollo/client';
import styled from 'styled-components';
import { isDarkModeVar } from '../apollo/reactiveVariables';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  return (
    <Container>
      <span>Login Page</span>
      <button onClick={() => isDarkModeVar(!isDarkMode)}>{isDarkMode ? "light" : "dark"}</button>
    </Container>
  )
}

export default Login;