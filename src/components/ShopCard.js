import { useHistory } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Photo = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  background-color: black;
  margin: 10px;
`;

const ShopName = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const ShopCard = ({ shop }) => {
  const history = useHistory()

  const onClick = () => {
    history.push(`/shop/${shop.id}`, { shop })
  }
  return (
    <Container onClick={onClick}>
      <Photo src={shop.photos[0].url} alt="" />
      <ShopName>{shop.name}</ShopName>
    </Container>
  )
}

export default ShopCard;