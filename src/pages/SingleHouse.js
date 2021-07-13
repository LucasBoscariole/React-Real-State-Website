import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { useParams, Link } from 'react-router-dom';
import { homesDataObject, formatPrice } from '../data/HomesData';
import Gallery from '../components/Gallery';
import { IoBed } from 'react-icons/io5';
import { FaBath } from 'react-icons/fa';
import { CgArrowsShrinkH } from 'react-icons/cg';
import { Button } from '../components/Button';

const SingleHouse = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(true);
  let { id } = useParams();
  id = id.slice(1, id.length);
  return (
    <WrapperContainer>
      <Container>
        {homesDataObject.map((item) => {
          if (item.id == id) {
            return (
              <>
                <ImageContainer>
                  <Gallery images={item.images} />
                </ImageContainer>
                <InformationContainer>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <p>Price: {formatPrice(item.price)}</p>
                  {item.rental ? (
                    <p>Price: {formatPrice(item.rentalPrice)}</p>
                  ) : null}
                  <div className='flex'>
                    <p>
                      <IoBed /> <span> 4</span> Bedrooms
                    </p>
                    <p>
                      <FaBath /> <span>5</span> Bathrooms
                    </p>
                    <p>
                      <CgArrowsShrinkH /> <span>600</span> Square Feet
                    </p>
                  </div>
                  <Button to='/contact'>Know More</Button>
                </InformationContainer>
              </>
            );
          }
        })}
      </Container>
    </WrapperContainer>
  );
};

export default SingleHouse;

const WrapperContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.article`
  width: 90%;
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
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InformationContainer = styled.div`
  width: 60%;
  .flex {
    display: block;
  }
  svg {
    color: #cd853f;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
    h1 {
      font-size: 1.4rem;
      padding: 0.8rem 0;
    }
    p {
      padding: 0.5rem 0;
    }
    .flex {
      margin: 0.5rem 0;
      span {
        margin: 0 0.5rem 0.3rem 0.5rem;
      }
      svg {
        font-size: 1.3rem;
      }
      p {
        width: 30%;
      }
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
