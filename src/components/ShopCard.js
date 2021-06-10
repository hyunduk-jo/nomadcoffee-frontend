import { useHistory } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
`;

const Photo = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  background-color: black;
`;

const ShopCard = ({ shop }) => {
  const history = useHistory()

  const onClick = () => {
    history.push(`/shop/${shop.id}`, { shop })
  }
  return (
    <Container onClick={onClick}>
      <Photo src={shop.photos[0].url} alt="" />
      <h1>{shop.name}</h1>
    </Container>
  )
}

export default ShopCard;