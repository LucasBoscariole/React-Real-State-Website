import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { useParams } from 'react-router-dom';
import { homesDataObject, formatPrice } from '../data/HomesData';
import Gallery from '../components/Gallery';
import { IoBed } from 'react-icons/io5';
import { FaBath } from 'react-icons/fa';
import { CgArrowsShrinkH } from 'react-icons/cg';
import { Button } from '../components/Button';
import Carousel from '../components/Carousel';

const SingleHouse = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(true);
  let { id } = useParams();
  id = id.slice(1, id.length);
  return (
    <>
      <BackgroundImage />
      <BackgroundImageTwo />
      <WrapperContainer>
        <Container>
          {/*eslint-disable-next-line */}
          {homesDataObject.map((item) => {
            if (item.id === id) {
              return (
                <div key={item.id}>
                  <ImageContainer>
                    <Gallery images={item.images} />
                  </ImageContainer>
                  <InformationContainer>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Price: {formatPrice(item.price)}</p>
                    {item.rental ? (
                      <p>Rental: {formatPrice(item.rentalPrice)}</p>
                    ) : null}
                    <div className='flex'>
                      <p>
                        <IoBed /> <span> 4</span> Bedrooms
                      </p>
                      <p>
                        <FaBath /> <span>5</span> Bathrooms
                      </p>
                      <p>
                        <CgArrowsShrinkH /> <span>600</span> Feets
                      </p>
                    </div>
                    <Button to='/contact'>Know More</Button>
                  </InformationContainer>
                </div>
              );
            }
          })}
        </Container>
      </WrapperContainer>
      <CarouselContainer>
        <h2>Similar Products</h2>
        <div className='underline'></div>
        <Carousel />
      </CarouselContainer>
    </>
  );
};

export default SingleHouse;

const BackgroundImage = styled.div`
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  width: 60%;
  height: 60vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #00102b;
  z-index: -11;
`;

const BackgroundImageTwo = styled.div`
  clip-path: circle(40.7% at 100% 50%);
  width: 60%;
  height: 100vh;
  position: absolute;
  top: 30vh;
  right: 0;
  background: rgba(3, 66, 255, 0.5);
  z-index: -11;
`;
const WrapperContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.article`
  width: 80vw;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin: 65px 0 0 0;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InformationContainer = styled.div`
  width: 45%;
  p {
    width: 80%;
  }
  .flex {
    display: block;
    p {
      span {
        margin: 0 0.5rem 0 1rem;
      }
    }
  }
  svg {
    color: #cd853f;
    font-size: 1.8rem;
    margin-right: 1rem;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  p,
  .flex {
    margin: 1rem 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
    h1 {
      font-size: 1.4rem;
      padding: 0.8rem 0 0 0;
    }
    p {
      margin: 0.5rem 0;
      padding: 0.3rem 0;
      width: 100%;
      font-size: 0.85rem;
    }
    .flex {
      margin: 0.3rem 0;
      svg {
        font-size: 2rem;
        margin-right: 0.5rem;
      }
      p {
        width: 30%;
        span {
          margin: 0 0.2rem 0.3rem 0.2rem;
        }
      }
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const CarouselContainer = styled.section`
  width: 100%;
  min-height: 40vh;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 1.2rem;
  }
  .underline {
    width: 50%;
    height: 3px;
    background: #cd853f;
    margin: 0.7rem 0;
  }
  @media screen and (max-width: 769px) {
    .underline {
      width: 80%;
    }
  }
`;
