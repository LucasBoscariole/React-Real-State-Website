import React from 'react';
import styled from 'styled-components';
import { interiorDesign } from '../data/InfoData';
import { Button } from './Button';
import Shake from 'react-reveal/Shake';
import Fade from 'react-reveal/Fade';

const InteriorDesign = () => {
  const { title, img, description, path } = interiorDesign;
  return (
    <Wrapper>
      <Container>
        <ContentContainer>
          <TextContent>
            <Shake>
              <h1>{title}</h1>
              <p>{description}</p>
              <Button to={path}>Sew now</Button>
            </Shake>
          </TextContent>
          <ImgContainer>
            <Fade top>
              <img src={img} alt='interior design' />
            </Fade>
          </ImgContainer>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

export default InteriorDesign;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #00102b;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-bottom: 6vh;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 35vh;
  background: #fff;
`;

const ContentContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: block;
    height: 80vh;
  }
`;

const TextContent = styled.div`
  width: 50%;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-left: 20%;
  }
  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    width: 70%;
    margin-left: auto;
    margin-right: 10%;
  }
  a {
    margin-left: 20%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    h1 {
      margin: 0.8rem 0;
      margin-left: 10%;
    }
    p {
      width: 80%;
      margin: 0 auto 0.8rem auto;
    }
    a {
      margin-left: 10%;
    }
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  text-align: center;
  z-index: 1;
  img {
    height: 80vh;
    width: 90%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 55vh;
    }
  }
`;
