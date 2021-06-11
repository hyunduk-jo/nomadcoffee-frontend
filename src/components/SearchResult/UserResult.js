import styled from "styled-components";
import UserCard from "./UserCard";

const UserContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.cherryColor};
`;

const UserResult = ({ result }) => {
  //console.log(result)
  return (
    <>
      {result[0] ? <h1>User</h1> : null}
      <UserContainer>
        {result.map(user => <UserCard key={user.id} username={user.username} avatarUrl={user.avatarUrl} />)}
      </UserContainer>
    </>
  )
}

export default UserResult;