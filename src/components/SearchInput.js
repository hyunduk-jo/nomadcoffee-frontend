import { gql, useLazyQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import { MagnifierIcon } from "./Icons";

const SSearchInput = styled.input`
  outline: none;
  border: none;
  height: 32px;
  width: 250px;
  border-radius: 30px;
  padding-left: 18px;
`;

const Magnifier = styled.button`
  position: relative;
  top: 5px;
  right: 35px;
  outline: none;
  border: none;
  background-color: transparent;
  svg {
    fill: ${props => props.theme.brownColor};;
  }
  cursor: pointer;
`;

const SEARCH = gql`
  query search($term: String!){
    searchCoffeeShop(term: $term){
      id,
      name,
      photos{
        url
      }
      latitude,
      longitude,
      isMyShop,
      user {
        id
        username
        avatarUrl
      }
    },
    searchUsers(term: $term){
      id
      username
      avatarUrl
    }
  }
`;

const SearchInput = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const onCompleted = () => {
    history.push(`/search`, { data });
  }

  const [searchQuery, { data }] = useLazyQuery(SEARCH, { onCompleted });

  const onValid = (data) => {
    searchQuery({ variables: { term: data.term } })
  }

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <SSearchInput type="text" placeholder="Search..." {...register("term")} />
      <Magnifier>
        <MagnifierIcon size="20" />
      </Magnifier>
    </form>
  )
}

export default SearchInput;