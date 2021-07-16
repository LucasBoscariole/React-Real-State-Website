import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { FooterDataIcons } from '../data/FooterData';
import Image1 from '../images/image14.jpg';
import Image2 from '../images/image9.jpg';

const Contact = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [information, setInformation] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [rental, setRental] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
    setInformation(false);
    setPurchase(false);
    setRental(false);
    setMessage('');
  };

  return (
    <>
      <Background />
      <BackgroundTwo />
      <Wrapper>
        <Container>
          <FlexOne>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='text'
                id='text'
                placeholder='Name'
                maxLength='15'
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                maxLength='40'
                className='input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='tel'
                name='tel'
                id='tel'
                placeholder='Phone'
                maxLength='40'
                className='input'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className='flex'>
                <div className='label'>
                  <label htmlFor='information'>Information</label>
                  <input
                    type='checkbox'
                    name='information'
                    id='information'
                    className='check'
                    checked={information}
                    onChange={(e) => setInformation(e.target.checked)}
                  />
                </div>
                <div className='label'>
                  <label htmlFor='purchase'>Purchase</label>
                  <input
                    type='checkbox'
                    name='purchase'
                    id='purchase'
                    className='check'
                    checked={purchase}
                    onChange={(e) => setPurchase(e.target.checked)}
                  />
                </div>
                <div className='label'>
                  <label htmlFor='rental'>Rental</label>
                  <input
                    type='checkbox'
                    name='rental'
                    id='rental'
                    className='check'
                    checked={rental}
                    onChange={(e) => setRental(e.target.checked)}
                  />
                </div>
              </div>
              <textarea
                name='message'
                id='message'
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <br />
              <button type='submit'>Submit</button>
            </form>
          </FlexOne>
          <FlexTwo>
            <ContainerTwo>
              <h2>Contact</h2>
              <p>realestate@california.com</p>
              <p>realestate@france.com</p>
            </ContainerTwo>
            <ContainerTwo>
              <h2>Phone</h2>
              <p>123-456-7890</p>
              <p>098-765-4321</p>
            </ContainerTwo>
            <ContainerTwo>
              <h2>Location</h2>
              <p>829, One Way Stree - California.</p>
              <p>219, Second Way Stree - Miami.</p>
            </ContainerTwo>
            <ContainerThree>
              {FooterDataIcons.map((item, index) => item.icon)}
            </ContainerThree>
          </FlexTwo>
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
  min-height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  min-height: 65vh;
  background: #fff;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.75);
  margin-left: 20%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 769px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`;

const FlexOne = styled.div`
  height: 80%;
  display: grid;
  width: 55%;
  margin-top: -5rem;
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
    flex-wrap: wrap;
    width: 50%;
    margin-left: 1rem;
  }
  .check {
    margin: 1.1rem 1.5rem 1.1rem 0.5rem;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    min-height: 50vh;
    margin-top: 0rem;
    margin-bottom: 5vh;
    .input {
      &:first-child {
        padding-top: 1rem;
      }
    }
    .flex {
      width: 50%;
      display: block;
    }
  }
`;

const FlexTwo = styled.div`
  width: 45%;
  height: 80%;
  display: block;
  margin-top: -2rem;
  @media screen and (max-width: 769px) {
    width: 100%;
    margin-top: 2rem;
    margin-left: 1rem;
  }
`;

const ContainerTwo = styled.div`
  display: block;
  h2 {
    letter-spacing: 1px;
  }
  p {
    font-weight: 400;
    padding: 0.5rem 0;
    &:last-child {
      padding-bottom: 1.7rem;
    }
  }
`;

const ContainerThree = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  color: #000;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  @media screen and (max-width: 769px) {
    padding-bottom: 1.5rem;
  }
`;
