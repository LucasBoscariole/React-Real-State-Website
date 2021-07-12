import React from 'react';
import styled from 'styled-components';
import { homesDataObject } from '../data/HomesData';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useFilterContext } from '../filtercontext';

const PropertiesList = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <Wrapper>
      {products.map((item) => {
        return (
          <Container key={item.id}>
            <img src={item.img} alt={`House in ${item.title}`} />
            <FlexWrapper>
              <Flex>
                <FaMapMarkerAlt className='pin' />
                <h3>{item.title}</h3>
              </Flex>
              <h3>${item.price}</h3>
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
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const Container = styled.div`
  width: 320px;
  height: 280px;
  color: #cd853f;
  background: #bababa;
  margin-bottom: 3rem;
  border-radius: 0 15px 0 15px;
  img {
    border-radius: 0 15px 0 0;
    width: 100%;
    height: 75%;
    object-fit: cover;
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
