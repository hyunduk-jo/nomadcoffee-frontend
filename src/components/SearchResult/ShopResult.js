import styled from "styled-components";
import ShopCard from "./ShopCard";

const ShopContainer = styled.div`
  display: flex;
`;

const ShopResult = ({ result }) => {
  return (
    <>
      {result[0] ? <h1>Shop</h1> : null}
      <ShopContainer>
        {result.map(shop => <ShopCard key={shop.id} shop={shop} />)}
      </ShopContainer>
    </>
  )
}

export default ShopResult;