import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Photo = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

const Shopname = styled.span`
  font-weight: 600;
`;

const ShopCard = ({ shop }) => {
  const history = useHistory();
  console.log(shop)
  return (
    <Container onClick={() => history.push(`/shop/${shop.id}`, { shop })}>
      <Photo src={shop?.photos[0]?.url} />
      <Shopname>{shop.name}</Shopname>
    </Container>
  )
}

export default ShopCard;