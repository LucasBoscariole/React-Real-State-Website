import React from 'react';
import styled from 'styled-components';
// import { useGlobalContext } from '../context';
import { Button } from '../components/Button';
import { useGlobalContext } from '../context';

const Error = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(true);
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
  background: #bababa;
  h1 {
    font-size: 6rem;
    color: #000;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  p {
    font-weight: 400;
    color: #121212;
    margin-bottom: 1rem;
  }
`;
