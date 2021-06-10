import styled from "styled-components";

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
`;

const ShopDetail = ({ name, latitude, longitude, photos }) => {
  return (
    <div>
      <Image src={photos[0].url} alt="shop" />
    </div>
  )
}

export default ShopDetail;