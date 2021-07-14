import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Gallery = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <Fade left>
        <img src={main.img} alt='' className='main ' />
        <div className='gallery'>
          {images.map((image, index) => {
            return (
              <img
                src={image.img}
                alt=''
                key={index}
                className={`${image.img === main.img ? 'active' : null}`}
                onClick={() => setMain(images[index])}
              />
            );
          })}
        </div>
      </Fade>
    </Wrapper>
  );
};

export default Gallery;
const Wrapper = styled.div`
  .main {
    height: 400px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: 5px;
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    object-fit: cover;
    border: 2px solid #000;
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 350px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;
