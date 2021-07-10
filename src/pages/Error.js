import React, { useEffect } from 'react';
import styled from 'styled-components';
// import { useGlobalContext } from '../context';
import { Button } from '../components/Button';

const Error = () => {
  return (
    <Wrapperr>
      <h1>404</h1>
      <p>Sorry, page not found!</p>
      <Button to='/'>Back Home</Button>
    </Wrapperr>
  );
};

export default Error;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  margin-top: 23vh;
  background: #00102b;
  h1 {
    font-size: 4rem;
    color: #fff;
    margin-bottom: 1rem;
  }
  p {
    font-weight: 400;
    color: #fff;
    margin-bottom: 1rem;
  }
`;
