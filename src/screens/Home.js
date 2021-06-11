import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import styled from 'styled-components';
import HelmetTitle from '../components/HelmetTitle';
import Pagination from '../components/Pagination';
import ShopCard from '../components/ShopCard';

const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.warmPinkColor};
`;

const ShopCardContainer = styled.div`
  display: flex;
`;

const SEE_SHOPS = gql`
  query seeCoffeeShops($page: Int!){
    seeCoffeeShops(page: $page){
      id,
      name,
      latitude,
      longitude,
      photos {
        url
      },
      totalShopNum,
      isMyShop,
      user {
        id,
        username,
        avatarUrl
      }
    }
  }
`;

const Home = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery(SEE_SHOPS, { variables: { page } });
  console.log(data)
  return (
    <>
      <HelmetTitle title="Home" />
      <Container>
        <ShopCardContainer>
          {data?.seeCoffeeShops?.map(shop => <ShopCard key={shop.id} shop={shop} />)}
        </ShopCardContainer>
        <Pagination page={page} setPage={setPage} maxPageNum={Math.ceil(data?.seeCoffeeShops[0]?.totalShopNum / 2)} />
      </Container>
    </>
  )
}

export default Home;