import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: gray;
`;

const Username = styled.span`
  font-weight: 600;
`;

const UserCard = ({ username, avatarUrl }) => {
  return (
    <Container>
      <Avatar src={avatarUrl} />
      <Username>{username}</Username>
    </Container>
  )
}

export default UserCard;