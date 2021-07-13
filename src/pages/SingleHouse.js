import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { useParams, Link } from 'react-router-dom';
import { homesDataObject, formatPrice } from '../data/HomesData';

const SingleHouse = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(true);
  let { id } = useParams();
  id = id.slice(1, id.length);
  return (
    <Wrapper>
      {homesDataObject.map((item) => {
        if (item.id == id) {
          return (
            <>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>Price: {formatPrice(item.price)}</p>
              {item.rental ? (
                <p>Price: {formatPrice(item.rentalPrice)}</p>
              ) : null}
            </>
          );
        }
      })}
    </Wrapper>
  );
};

export default SingleHouse;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
