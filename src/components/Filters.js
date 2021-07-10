import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Filters = () => {
  const { width } = useGlobalContext();
  return (
    <Wrapper>
      <h1>Search</h1>
      <h1>Locality</h1>
      <h1>Price</h1>
      <h1>Rental</h1>
      <h1>Clear Filter</h1>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.article`
  width: 90%;
`;
