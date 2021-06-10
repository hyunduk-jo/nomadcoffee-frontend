import { gql, useMutation } from "@apollo/client";
import { useLocation } from "react-router";
import styled from "styled-components";
import { Button } from "../components/AuthFormStyle";
import EditForm from "../components/Shop/EditForm";
import ShopDetail from "../components/Shop/ShopDetail";

const Container = styled.div`
  background-color: ${props => props.theme.warmPinkColor};
  min-height: 100vh;
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
  const { state: { shop: { id, name, latitude, longitude, photos, isMyShop } } } = useLocation();
  const [deleteCoffeeShopMutation] = useMutation(DELETE_SHOP);

  const onDelete = async () => {
    const result = await deleteCoffeeShopMutation({ variables: { id } });
    console.log(result)
  }

  return (
    <Container>
      <ShopDetail name={name} latitude={latitude} longitude={longitude} photos={photos} />
      {isMyShop ? <>
        <EditForm id={id} name={name} latitude={latitude} longitude={longitude} photos={photos} />
        <DelBtn onClick={onDelete}>Delete</DelBtn>
      </> : null}
    </Container>
  )
}

export default Shop;