import { useLocation } from "react-router";
import styled from "styled-components";
import ShopResult from "../components/SearchResult/ShopResult";
import UserResult from "../components/SearchResult/UserResult";

const Container = styled.div`
  background-color: ${props => props.theme.warmPinkColor};
  min-height: calc(100vh - 60px);
  padding: 15px;
`;

const SearchResult = () => {
  const location = useLocation();
  return (
    <Container>
      <UserResult result={location.state.data.searchUsers} />
      <ShopResult result={location.state.data.searchCoffeeShop} />
    </Container>
  )
}

export default SearchResult;