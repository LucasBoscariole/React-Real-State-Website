import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import {
  getUniqueValues,
  homesDataObject,
  formatPrice,
} from '../data/HomesData';
import { useFilterContext } from '../filtercontext';
import { BsFilterLeft } from 'react-icons/bs';

const Filters = () => {
  const localityData = getUniqueValues(homesDataObject, 'locality');
  const {
    filters: { text, min_price, price, max_price, rental },
    updateFilters,
    clearFilters,
  } = useFilterContext();
  const { width } = useGlobalContext();

  const [filtersOpen, setFiltersOpen] = useState(false);

  const isFilterOpen = () => {
    setFiltersOpen(!filtersOpen);
  };

  if (width <= 768) {
    return (
      <>
        <Title onClick={isFilterOpen}>
          <h2>Filters</h2> <BsFilterLeft />
        </Title>
        {filtersOpen ? (
          <>
            <MobileWrapper>
              <MobileContainer>
                <form onSubmit={(e) => e.preventDefault()}>
                  {/* Search */}
                  <ControlMobile>
                    <input
                      type='text'
                      name='text'
                      value={text}
                      placeholder='search'
                      onChange={updateFilters}
                      className='search-input'
                    />
                  </ControlMobile>
                  {/* Search */}
                  {/* Locality */}
                  <ControlMobile>
                    <h4>Locality</h4>
                    <div className='block'>
                      <button>All</button>
                      {localityData.map((item, index) => {
                        return (
                          <button
                            key={index}
                            onClick={updateFilters}
                            type='button'
                            name='locality'
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </ControlMobile>
                  {/* Locality */}
                  {/* Price */}
                  <ControlMobile>
                    <h4>Price</h4>
                    <p>{formatPrice(price)}</p>
                    <input
                      type='range'
                      name='price'
                      onChange={updateFilters}
                      min={min_price}
                      max={max_price}
                      value={price}
                      className='range'
                    />
                  </ControlMobile>
                  {/* Price */}
                  {/* Rental */}
                  <ControlMobile>
                    <label htmlFor='rental'>Available For Rent</label>
                    <input
                      type='checkbox'
                      name='rental'
                      id='rental'
                      className='range'
                      checked={rental}
                      onChange={updateFilters}
                    />
                  </ControlMobile>
                  {/* Rental */}
                </form>
                <Clear type='button' onClick={clearFilters}>
                  clear filters
                </Clear>
                <ReadyButton>
                  <button type='button' onClick={isFilterOpen}>
                    Okay
                  </button>
                </ReadyButton>
              </MobileContainer>
            </MobileWrapper>
          </>
        ) : null}
      </>
    );
  } else {
    return (
      <Wrapper>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search */}
          <Control>
            <input
              type='text'
              name='text'
              value={text}
              placeholder='search'
              onChange={updateFilters}
              className='search-input'
            />
          </Control>
          {/* Search */}
          {/* Locality */}
          <Control>
            <h4>Locality</h4>
            <div className='block'>
              <button>All</button>
              {localityData.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='locality'
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </Control>
          {/* Locality */}
          {/* Price */}
          <Control>
            <h4>Price</h4>
            <p>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
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
              checked={rental}
              onChange={updateFilters}
            />
          </Control>
          {/* Rental */}
        </form>
        <Clear type='button' onClick={clearFilters}>
          clear filters
        </Clear>
      </Wrapper>
    );
  }
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
    background: #f2f2f2;
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
  border: 1px solid transparent;
  outline: none;
  text-transform: uppercase;
  margin-left: 1rem;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    background: #fff;
    color: red;
    border: 1px solid red;
  }
`;

const MobileWrapper = styled.article`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`;

const MobileContainer = styled.div`
  width: 80%;
  min-height: 80vh;
  background: #00102b;
  border-radius: 10px;
  form {
    margin-top: 15%;
    margin-bottom: 1rem;
  }
`;

const ControlMobile = styled.div`
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
    color: #fff;
  }
  h4,
  label {
    color: #fff;
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
    color: #fff;
    cursor: pointer;
  }
  .range {
    margin-left: 1rem;
  }
  p {
    color: #fff;
    margin-left: 1rem;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
  }
`;

const ReadyButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10%;
  button {
    margin-right: 1rem;
    background: #000;
    color: #fff;
    border: 1px solid #cd853f;
    border-radius: 5px;
    padding: 0.5rem 2rem;
  }
`;

const Title = styled.div`
  h2 {
    font-size: 1.05rem;
  }
  svg {
    font-size: 1.2rem;
    margin-left: 0.3rem;
  }
  margin: auto 1rem auto 0;
  display: flex;
  align-items: center;
`;
