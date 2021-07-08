import React from 'react';
import styled from 'styled-components';
import { infoIconsData } from '../data/InfoData';

const InfoHeroIcons = () => {
  return (
    <Wrapper>
      <Container>
        {infoIconsData.map((item, index) => {
          return (
            <ContainerIcon key={index}>
              {item.icon}
              <p>{item.title}</p>
            </ContainerIcon>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default InfoHeroIcons;

const Wrapper = styled.section`
  min-height: 20vh;
  width: 100%;
  background: #f2f2f2;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: space-around;
  }
`;
const ContainerIcon = styled.div`
  text-align: center;
  svg {
    font-size: 4.2rem;
    color: #cd853f;
  }
  p {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    color: #121212;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5vh 0;
    svg {
      font-size: 3rem;
    }
    p {
      margin-top: 0.3rem;
      font-size: 0.8rem;
    }
  }
`;