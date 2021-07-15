import React from 'react';
import styled from 'styled-components';
import { NewHouses } from '../data/InfoData';
import { Button } from './Button';
import Bounce from 'react-reveal/Bounce';

const InfoNewHouses = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Brand New Houses</h1>
        <div className='underline'></div>
      </Container>
      <ContainerHouse>
        {NewHouses.map((item, index) => {
          return (
            <Content key={index}>
              <Bounce left>
                <img src={item.img} alt='' />
              </Bounce>
              <div className='text'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Button
                  to={`/properties/:${item.id}`}
                  primary='true'
                  css={`
                    max-width: 160px;
                  `}
                >
                  Check Now
                </Button>
              </div>
            </Content>
          );
        })}
      </ContainerHouse>
    </Wrapper>
  );
};

export default InfoNewHouses;

const Wrapper = styled.section`
  min-height: 80vh;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 13vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 3vh;
  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin: auto 0 12px 0;
  }
  .underline {
    margin: 0 auto;
    width: 50%;
    height: 3px;
    border-radius: 1px;
    background: #cd853f;
    border: none;
  }
`;

const ContainerHouse = styled.div`
  width: 90%;
  min-height: 61vh;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: grid;
  text-align: center;
  img {
    height: 250px;
    width: 250px;
    object-fit: cover;
    transition: 0.3s;
    &:hover {
      transform: scale(1.005);
    }
  }
  .text {
    text-align: start;
    width: 250px;
    h2 {
      margin: 0.5rem 0;
    }
    p {
      text-align: justify;
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    img {
      height: 140px;
      width: 40%;
    }
    .text {
      width: 50%;
      h2 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.75rem;
      }
      a {
        width: 10%;
        height: 30px;
        font-size: 0.7rem;
        letter-spacing: 1px;
      }
    }
  }
`;
