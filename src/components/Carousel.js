import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { homesDataObject } from '../data/HomesData';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselSlider = () => {
  return (
    <Wrapper>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3500}
        centerMode={true}
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        slidesToSlide={1}
        swipeable
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {homesDataObject
          .map((item) => {
            return (
              <SliderContainerContent key={item.id}>
                <Link key={item.id} to={`/properties/:${item.id}`}>
                  <img src={item.img} alt={`House in ${item.title}`} />
                  <FlexWrapper>
                    <FaMapMarkerAlt className='pin' />
                    <h3>{item.title}</h3>
                  </FlexWrapper>
                </Link>
              </SliderContainerContent>
            );
          })
          .slice(5, 12)}
      </Carousel>
    </Wrapper>
  );
};

export default CarouselSlider;

const Wrapper = styled.article`
  width: 80vw;
  margin: 1rem auto 2rem auto;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const SliderContainerContent = styled.div`
  width: 18vw;
  height: 35vh;
  background: #f2f2f2;
  text-decoration: none;
  color: #cd853f;
  box-shadow: 0px 0px 19px -8px rgba(0, 0, 0, 1);
  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
  }
  a {
    text-decoration: none;
    color: #cd853f;
  }
  @media (min-width: 464px) and (max-width: 1023px) {
    width: 25vw;
  }
  @media screen and (max-width: 463px) {
    width: 45vw;
  }
`;

const FlexWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: start;
  h3 {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 768px) {
  }
`;
