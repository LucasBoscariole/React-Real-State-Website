import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { useFilterContext } from '../filtercontext';
import Flip from 'react-reveal/Flip';

const Sort = () => {
  const { width } = useGlobalContext();
  const { updateSort } = useFilterContext();
  return (
    <Wrapper>
      <Flip left>
        <div className='line'></div>
        <form onSubmit={(e) => e.preventDefault()}>
          {width <= 768 ? null : <label htmlFor='sort'>sort by</label>}
          <select
            name='sort'
            id='sort'
            // value={sort}
            onChange={updateSort}
            className='sort-input'
          >
            <option value='price-lowest'>price (lowest)</option>
            <option value='price-highest'>price (highest)</option>
            <option value='name-a'>name (a - z)</option>
            <option value='name-z'>name (z - a)</option>
          </select>
        </form>
      </Flip>
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
    width: 55%;
    height: 3px;
    background: #000;
  }
  .sort-input {
    border: 1px solid #bababa;
    outline: none;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
    margin-right: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    .line {
      width: 40%;
    }
    .sort-input {
      font-size: 0.8rem;
    }
    label {
      font-size: 0.8rem;
    }
  }
`;
