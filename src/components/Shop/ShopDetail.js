import styled from "styled-components";

const Container = styled.div`
  width: 400px;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  background-color: black;
`;

const AboutShop = styled.div`
  width: 400px;
  padding: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  background-color: gray;
  border-radius: 50%;
`;

const Username = styled.span`
  font-weight: 600;
  margin-left: 8px;
`;

const Info = styled.span`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ShopDetail = ({ name, latitude, longitude, photos, user }) => {
  return (
    <Container>
      <Image src={photos[0].url} alt="shop" />
      <AboutShop>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <Avatar src={user.avatarUrl} />
          <Username>{user.username}</Username>
        </div>
        <Info>shop name: {name}</Info>
        <Info>location: {latitude} {longitude}</Info>
      </AboutShop>
    </Container>
  )
}

export default ShopDetail;