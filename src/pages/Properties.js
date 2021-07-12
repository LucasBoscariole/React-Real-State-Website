import React, { useEffect } from 'react';
import styled from 'styled-components';
import Filters from '../components/Filters';
import Sort from '../components/Sort';
import PropertiesList from '../components/PropertiesList';
import { useGlobalContext } from '../context';

const Homes = () => {
  const { width } = useGlobalContext();
  return (
    <>
      <Hero />
      <Wrapper>
        <ContainerFilters>
          <Filters />
        </ContainerFilters>
        <Container>
          <Sort />
          <PropertiesList />
        </Container>
      </Wrapper>
    </>
  );
};

export default Homes;

const Hero = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #00102b;
`;

const Wrapper = styled.section`
  min-height: 60vh;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 8vh auto 0 auto;
`;

const ContainerFilters = styled.article`
  display: block;
  width: 20%;
  min-height: 50vh;
`;

const Container = styled.article`
  display: block;
  width: 78%;
`;
