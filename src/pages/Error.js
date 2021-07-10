import React, { useEffect } from 'react';
import styled from 'styled-components';
// import { useGlobalContext } from '../context';
import { Button } from '../components/Button';

const Error = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <p>Sorry, page not found!</p>
      <Button to='/'>Back Home</Button>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  background: #00102b;
  h1 {
    font-size: 6rem;
    color: #fff;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  p {
    font-weight: 400;
    color: #fff;
    margin-bottom: 1rem;
  }
`;
