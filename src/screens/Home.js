import { useReactiveVar } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isLoggedInVar, logUserOut } from '../apollo/reactiveVariables';
import HelmetTitle from '../components/HelmetTitle';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.warmPinkColor};
`;

const TestSpan = styled.span`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Home = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <>
      <HelmetTitle title="Home" />
      <Container>
        <TestSpan>Home Page</TestSpan>
        <TestSpan>Am I Logged In ? {isLoggedIn ? "Yes" : "No"}</TestSpan>
        {isLoggedIn ? <button onClick={logUserOut}>Logout</button> : <button><Link to='/login'>Login</Link></button>}
      </Container>
    </>
  )
}

export default Home;