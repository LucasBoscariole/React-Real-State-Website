import React from 'react';
import styled from 'styled-components';
import { homesDataObject } from '../data/HomesData';
const PropertiesList = () => {
  return <h1>List</h1>;
  // return <Wrapper>{homesDataObject.map((item) => {
  //  return <Container key={item.id}>
  //   <img src={item.img} alt={`House in ${item.title}`} />
  //   <FlexWrapper>
  //     <Flex>
  //      <FiPin/>
  //      <h3>{item.title}</h3>
  //     </Flex>
  //     <h3>${item.price}</h3>
  //   </FlexWrapper>
  //  </Container>
  // })}</Wrapper>;
};
export default PropertiesList;

const Wrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Container = styled.div`
  width: 240px;
  height: 300px;
  color: #cd853f;
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
`;
const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-weight: 600;
  }
`;

const Flex = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
`;
