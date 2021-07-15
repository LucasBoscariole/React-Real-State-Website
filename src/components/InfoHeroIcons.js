import React from 'react';
import styled from 'styled-components';
import { infoIconsData } from '../data/InfoData';
import Fade from 'react-reveal/Fade';

const InfoHeroIcons = () => {
  return (
    <Wrapper>
      <Container>
        {infoIconsData.map((item, index) => {
          return (
            <ContainerIcon key={index}>
              <Fade top>{item.icon}</Fade>
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
  background: #00102b;
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
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5vh 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 3rem;
    }
    p {
      margin-top: 0.3rem;
      font-size: 0.8rem;
    }
  }
`;
