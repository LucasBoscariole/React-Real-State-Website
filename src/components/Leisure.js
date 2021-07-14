import React from 'react';
import styled from 'styled-components';
import { leisureData } from '../data/InfoData';
import { Button } from './Button';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';

const Leisure = () => {
  const { title, description, img1, img2, path } = leisureData;
  return (
    <Wrapper>
      <Container>
        <ImgContainer>
          <Zoom left>
            <img src={img1} alt='pool' className='imageOne' />
          </Zoom>
          <Zoom right>
            <img src={img2} alt='garden' className='imageTwo' />
          </Zoom>
        </ImgContainer>
        <TextContainer>
          <RubberBand>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button to={path} primary='true'>
              See Now
            </Button>
          </RubberBand>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

export default Leisure;

const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.article`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`;

const ImgContainer = styled.article`
  display: block;
  position: relative;
  width: 40%;
  .imageOne {
    width: 100%;
    height: 70vh;
    position: relative;
    display: block;
    object-fit: cover;
    border-radius: 5px;
  }
  .imageTwo {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 250px;
    transform: translateX(60%);
    border-radius: 5px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 15%;
    height: 70%;
    background: #121212;
    bottom: 1%;
    right: -8%;
    border-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .imageOne {
      width: 70%;
      height: 50vh;
    }
    .imageTwo {
      transform: translateX(0%);
      width: 175px;
    }
    &::before {
      height: 80%;
      right: 18%;
    }
  }
`;
const TextContainer = styled.article`
  width: 30%;
  h1 {
    font-size: 1.6rem;
    margin: 1rem 0;
  }
  p {
    font-weight: 400;
    margin-bottom: 1rem;
  }
  margin-bottom: 10vh;
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    width: 100%;
    h1 {
      font-size: 1.2rem;
    }
  }
`;
