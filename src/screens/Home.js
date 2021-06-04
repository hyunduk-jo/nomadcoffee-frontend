import styled from 'styled-components';
import { isLoggedInVar } from '../apollo/reactiveVariables';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <span>Home Page</span>
      <button onClick={() => isLoggedInVar(false)}>Logout</button>
    </Container>
  )
}

export default Home;