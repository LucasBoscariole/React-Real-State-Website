import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
const Sort = () => {
  const { width } = useGlobalContext();
  return (
    <Wrapper>
      <div className='line'></div>
      <h1>Short By</h1>
      <h1>Short By</h1>
    </Wrapper>
  );
};

export default Sort;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .line {
    width: 80%;
    height: 3px;
    background: red;
  }
`;
