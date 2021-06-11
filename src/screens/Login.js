import { gql, useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { logUserIn } from '../apollo/reactiveVariables';
import { Button, Form, FormError, Input } from '../components/AuthFormStyle';
import HelmetTitle from '../components/HelmetTitle';
import { CoffeeIcon } from '../components/Icons';

const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.warmPinkColor};
`;

const LoginContainer = styled.div`
  max-width: 960px;
  max-height: 700px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 10px 0px;
`;

const Logo = styled.span`
  color: ${props => props.theme.cherryColor};
  font-size: 3.5rem;
  font-weight: 600;
  svg {
    fill: ${props => props.theme.cherryColor};
  }
  margin-bottom: 70px;
`;

const LoginTitle = styled.span`
  margin: 10px 0px;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: ${props => props.theme.cherryColor};
`;

const ToSignup = styled.span`
  margin-top: 10px;
  font-size: 1rem;
  a {
    font-weight: 600;
    color: ${props => props.theme.cherryColor};
  }
`;

const LOGIN = gql`
  mutation login($username: String!, $password: String!){
    login(username: $username, password: $password){
      ok
      error
      token
    }
  }
`;

const Login = () => {
  const location = useLocation();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      username: location.state?.username || null
    }
  });

  const [loginMutation] = useMutation(LOGIN);

  const onValid = async (data) => {
    const { data: { login: { ok, error, token } } } = await loginMutation({ variables: { ...data } })
    if (ok) {
      logUserIn(token);
    }
    if (error) {
      if (error === "User not found.") {
        setError("username", {
          message: error
        })
      } else if (error === "Wrong password.") {
        setError("password", {
          message: error
        })
      }
    }
  }

  useEffect(() => {
    if (location.state?.message) {
      alert(location?.state?.message)
    }
  }, [location?.state?.message])

  return (
    <>
      <HelmetTitle title="Login" />
      <Container>
        <LoginContainer>
          <Logo><CoffeeIcon size="54" /> Nomad Coffee</Logo>
          <Form onSubmit={handleSubmit(onValid)}>
            <LoginTitle>Login</LoginTitle>
            <Input {...register("username", {
              required: true
            })}
              placeholder="Username"
            />
            <FormError>{errors?.username?.message}</FormError>
            <Input {...register("password", {
              required: true
            })}
              placeholder="Password"
              type="password"
            />
            <FormError>{errors?.password?.message}</FormError>
            <Button>Login</Button>
          </Form>
          <ToSignup>You don't have account? <Link to='/signup'>Sign Up</Link></ToSignup>
        </LoginContainer>
      </Container>
    </>
  )
}

export default Login;