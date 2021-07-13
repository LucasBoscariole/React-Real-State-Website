import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Image1 from '../images/image14.jpg';
import Image2 from '../images/image9.jpg';

const Contact = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(true);
  return (
    <>
      <Background />
      <BackgroundTwo />
      <Wrapper>
        <Container>
          <FlexOne>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type='text'
                name='text'
                id='text'
                placeholder='Name'
                maxLength='15'
                className='input'
              />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                maxLength='40'
                className='input'
              />
              <input
                type='tel'
                name='tel'
                id='tel'
                placeholder='Phone'
                maxLength='40'
                className='input'
              />
              <div className='flex'>
                <label htmlFor='information'>Information</label>
                <input
                  type='checkbox'
                  name='information'
                  id='information'
                  className='check'
                />
                <label htmlFor='purchase'>Purchase</label>
                <input
                  type='checkbox'
                  name='purchase'
                  id='purchase'
                  className='check'
                />
                <label htmlFor='rental'>Rental</label>
                <input
                  type='checkbox'
                  name='rental'
                  id='rental'
                  className='check'
                />
              </div>
              <textarea
                name='message'
                id='message'
                placeholder='Message'
              ></textarea>
              <br />
              <button type='submit'>Submit</button>
            </form>
          </FlexOne>
        </Container>
      </Wrapper>
    </>
  );
};

export default Contact;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: -20%;
  width: 100%;
  height: 100vh;
  clip-path: circle(50% at 50% 15%);
  background: url(${Image1});
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  background-size: cover;
  z-index: -20;
`;

const BackgroundTwo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  height: 70vh;
  clip-path: circle(50% at 100% 100%);
  background: url(${Image2});
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  background-size: cover;
  z-index: -20;
`;

const Wrapper = styled.section`
  width: 100%;
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  height: 70vh;
  background: #fff;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.75);
  margin-left: 20%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FlexOne = styled.div`
  height: 80%;
  display: grid;
  width: 60%;
  .input,
  textarea {
    border: none;
    border-bottom: 2px solid #000;
    outline: none;
    width: 65%;
    margin: 1.1rem 0 1.1rem 1rem;
    padding: 0 0 0.5rem 1rem;
    &:active {
      border-bottom: 2px solid #cd853f;
    }
    &:focus {
      border-bottom: 2px solid #cd853f;
    }
    &::placeholder {
      color: #000;
    }
  }
  textarea {
    height: 20%;
  }
  button {
    background: #cd853f;
    border: 1px solid #cd853f;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    transition: 0.3s;
    color: #fff;
    margin-left: 1rem;
    cursor: pointer;
    &:hover {
      color: #cd853f;
      background: #fff;
      border: 1px solid #000;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 50%;
    margin-left: 1rem;
  }
  .check {
    margin: 1.1rem 1.5rem 1.1rem 0.5rem;
  }
`;
