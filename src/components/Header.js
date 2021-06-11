import { useReactiveVar } from "@apollo/client";
import SearchInput from './SearchInput';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo/reactiveVariables";
import { CoffeeIcon } from "./Icons";
import { logUserOut } from "../apollo/reactiveVariables";

const Container = styled.div`
  background-color: ${props => props.theme.beigeColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 40px;
`;

const Logo = styled.span`
  font-size: 35px;
  font-weight: 600;
  color: ${props => props.theme.brownColor};
  svg {
    fill: ${props => props.theme.brownColor};
  }
`;

const LoginBtn = styled.button`
  font-weight: 600;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  margin-left: 10px;
  cursor: pointer;
`;

const AddShopBtn = styled(LoginBtn)`
  color: ${props => props.theme.darkCherryColor};
`;

const LogoutBtn = styled(LoginBtn)`
  color: red;
`;

const SignupBtn = styled(LoginBtn)``;

const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Container>
      <Link to='/'>
        <Logo><CoffeeIcon size="30" /> Nomad Coffee</Logo>
      </Link>
      <SearchInput />
      {
        isLoggedIn ? <div>
          <Link to='/add'>
            <AddShopBtn>Add Shop</AddShopBtn>
          </Link>
          <LogoutBtn onClick={() => logUserOut()}>Logout</LogoutBtn>
        </div> : <div>
          <Link to='/login'>
            <LoginBtn>Login</LoginBtn>
          </Link>
          <Link to='/signup'>
            <SignupBtn>Signup</SignupBtn>
          </Link>
        </div>
      }
    </Container>
  )
}

export default Header;