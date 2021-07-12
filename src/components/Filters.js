import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { getUniqueValues, homesDataObject } from '../data/HomesData';

const Filters = () => {
  const locality = getUniqueValues(homesDataObject, 'locality');
  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Search */}
        <Control>
          <input
            type='text'
            name='text'
            // value={text}
            placeholder='search'
            // onChange={updateFilters}
            className='search-input'
          />
        </Control>
        {/* Search */}
        {/* Locality */}
        <Control>
          <h4>Locality</h4>
          <div className='block'>
            <button>All</button>
            {locality.map((item, index) => {
              return <button key={index}>{item}</button>;
            })}
          </div>
        </Control>
        {/* Locality */}
        {/* Price */}
        <Control>
          <h4>Price</h4>
          <p>$1000</p>
          <input
            type='range'
            name='price'
            // onChange={updateFilters}
            min={5000}
            max={20000}
            // value={10000}
            className='range'
          />
        </Control>
        {/* Price */}
        {/* Rental */}
        <Control>
          <label htmlFor='rental'>Available For Rent</label>
          <input
            type='checkbox'
            name='rental'
            id='rental'
            className='range'
            // checked={shipping}
            // onChange={updateFilters}
          />
        </Control>
        {/* Rental */}
      </form>
      <Clear type='button' /*onClick={clearFilters}*/>clear filters</Clear>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.article`
  width: 100%;
`;

const Control = styled.div`
  margin-bottom: 1rem;
  display: block;
  .search-input {
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 1.5rem;
    background: #ababab;
    border-radius: 10px;
    border-color: transparent;
    letter-spacing: 1px;
    outline: none;
  }
  .search-input::placeholder {
    text-transform: capitalize;
    color: #000;
  }
  h4,
  label {
    color: #000;
    margin-bottom: 0.3rem;
    margin-left: 1rem;
    font-weight: bold;
    font-size: 1rem;
  }
  button {
    display: block;
    margin: 0.4rem 0 0.4rem 1rem;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 0.5px;
    color: #121212;
    cursor: pointer;
  }
  .range {
    margin-left: 1rem;
  }
  p {
    margin-left: 1rem;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
  }
`;

const Clear = styled.button`
  background: red;
  color: #fff;
  padding: 0.25rem 0.8rem;
  border-radius: 2px;
  border: none;
  outline: none;
  text-transform: uppercase;
  margin-left: 1rem;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    background: #fff;
    color: red;
  }
`;
