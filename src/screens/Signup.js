import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, Form, FormError, Input } from '../components/AuthFormStyle';
import { CoffeeIcon } from '../components/Icons';
import { gql, useMutation } from '@apollo/client';
import HelmetTitle from '../components/HelmetTitle';

const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.warmPinkColor};
`;

const SignupContainer = styled.div`
  max-width: 960px;
  min-height: 700px;
  width: 100%;
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
  margin: 50px 0px;
`;

const SignupTitle = styled.span`
  margin: 10px 0px;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: ${props => props.theme.cherryColor};
`;

const ToLogin = styled.span`
  margin-top: 10px;
  font-size: 1rem;
  a {
    font-weight: 600;
    color: ${props => props.theme.cherryColor};
  }
  margin-bottom: 70px;
`;

const SIGNUP = gql`
  mutation createAccount($username: String!, $email: String!, $name: String!, $location: String!, $password: String!) {
    createAccount(username: $username, email: $email, name: $name, location: $location, password: $password) {
      ok
      error
    }
  }
`;

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const [signupMutation] = useMutation(SIGNUP);

  const history = useHistory();

  const onValid = async (data) => {
    const { data: { createAccount: { ok, error } } } = await signupMutation({ variables: { ...data } });
    if (ok) {
      history.push('/login', { username: data.username, message: "Successfully signed up. Login please~" })
    }
    if (error) {
      if (error === "Username already taken.") {
        setError("username", {
          message: error
        })
      } else if (error === "Email already taken.") {
        setError("email", {
          message: error
        })
      }
    }
  }

  return (
    <>
      <HelmetTitle title="Signup" />
      <Container>
        <SignupContainer>
          <Logo><CoffeeIcon size="54" /> Nomad Coffee</Logo>
          <Form onSubmit={handleSubmit(onValid)}>
            <SignupTitle>Signup</SignupTitle>
            <Input {...register("username", {
              required: true
            })}
              placeholder="Username"
            />
            <FormError>{errors?.username?.message}</FormError>
            <Input {...register("email", {
              required: true
            })}
              placeholder="Email"
            />
            <FormError>{errors?.email?.message}</FormError>
            <Input {...register("name", {
              required: true
            })}
              placeholder="Name"
            />
            <Input {...register("location", {
              required: true
            })}
              placeholder="Location"
            />
            <Input {...register("password", {
              required: true
            })}
              placeholder="Password" type="password"
            />
            <Button>Signup</Button>
          </Form>
          <ToLogin>You already have account? <Link to='/login'>Log In</Link></ToLogin>
        </SignupContainer>
      </Container>
    </>
  )
}

export default Signup;