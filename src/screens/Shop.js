import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { useLocation } from "react-router";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo/reactiveVariables";
import { Button } from "../components/AuthFormStyle";
import EditForm from "../components/Shop/EditForm";
import ShopDetail from "../components/Shop/ShopDetail";

const Container = styled.div`
  background-color: ${props => props.theme.warmPinkColor};
  min-height: calc(100vh - 120px);
  padding: 30px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const DelBtn = styled(Button)`
  margin-top: 20px;
`;

const DELETE_SHOP = gql`
  mutation deleteCoffeeShop($id: Int!){
    deleteCoffeeShop(id: $id){
      ok,
      error
    }
  }
`;

const Shop = () => {
  const { state: { shop: { id, name, latitude, longitude, photos, isMyShop, user } } } = useLocation();
  const [deleteCoffeeShopMutation] = useMutation(DELETE_SHOP);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const onDelete = async () => {
    const result = await deleteCoffeeShopMutation({ variables: { id } });
    console.log(result)
  }

  return (
    <Container>
      <ShopDetail name={name} latitude={latitude} longitude={longitude} photos={photos} user={user} />
      {isLoggedIn && isMyShop ? <>
        <EditForm id={id} name={name} latitude={latitude} longitude={longitude} photos={photos} />
        <DelBtn onClick={onDelete}>Delete</DelBtn>
      </> : null}
    </Container>
  )
}

export default Shop;