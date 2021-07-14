import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../data/HomesData';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useFilterContext } from '../filtercontext';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const PropertiesList = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <Wrapper>
      {products.length < 1 ? <h2>Sorry, no results!</h2> : null}
      {products.map((item) => {
        return (
          <Container key={item.id} to={`/properties/:${item.id}`}>
            <Fade left>
              <img src={item.img} alt={`House in ${item.title}`} />
            </Fade>
            <FlexWrapper>
              <Flex>
                <FaMapMarkerAlt className='pin' />
                <h3>{item.title}</h3>
              </Flex>
              <h3>{formatPrice(item.price)}</h3>
            </FlexWrapper>
          </Container>
        );
      })}
    </Wrapper>
  );
};
export default PropertiesList;

const Wrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  margin: 2rem 0;
  @media screen and (max-width: 769px) {
    justify-content: center;
  }
`;

const Container = styled(Link)`
  width: 300px;
  height: 280px;
  color: #cd853f;
  background: #f2f2f2;
  margin: 0 0.8rem 2.5rem 0.8rem;
  border-radius: 0 15px 0 15px;
  text-decoration: none;
  box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 1);

  img {
    border-radius: 0 15px 0 0;
    width: 100%;
    height: 75%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    width: 260px;
    height: 240px;
  }
`;
const FlexWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const Flex = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  .pin {
    font-size: 1.3rem;
    margin-right: 0.4rem;
  }
  h3 {
    font-size: 1.05rem;
    font-weight: 600;
  }
`;
