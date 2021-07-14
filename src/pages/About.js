import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Image1 from '../images/image18.jpg';
import { Button } from '../components/Button';
import { aboutIcons } from '../data/InfoData';
import Flash from 'react-reveal/Flash';

const About = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(true);
  return (
    <>
      <Image />
      <Wrapper>
        <ContainerWrapper>
          <Flash>
            <div className='container1'>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                quos rem sed quibusdam nihil quam animi dignissimos assumenda
                provident perferendis! Similique quae officia doloribus veniam
                cum ad aliquam ex aliquid!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, blanditiis inventore perferendis magnam sunt et
                repellendus assumenda esse laborum eum quos id porro tempora
                possimus minus exercitationem earum itaque quibusdam odit
                aliquid dicta suscipit. Beatae ut impedit quasi libero rerum
                vitae amet! Quia, neque unde dolorem necessitatibus quis
                corrupti tempore reprehenderit rerum deserunt quidem aliquid
                facere molestiae inventore, dolor omnis quae officia quaerat
                iste rem doloremque. Debitis sunt voluptatem enim perspiciatis
                ratione deserunt repudiandae iure, dolorem, harum, quis voluptas
                similique dolore.
              </p>
              <Button to='/contact'>Contact Us</Button>
            </div>
          </Flash>
          <div className='container2'>
            {aboutIcons.map((item, index) => {
              return (
                <Flash>
                  <IconContainer key={index}>
                    {item.icon} <h5>{item.title}</h5>
                  </IconContainer>
                </Flash>
              );
            })}
          </div>
        </ContainerWrapper>
      </Wrapper>
    </>
  );
};
export default About;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${Image1});
  clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: multiply;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerWrapper = styled.div`
  min-height: 70vh;
  width: 80%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  z-index: 4;
  .container1 {
    margin-top: 0.5rem;
    margin-left: 1rem;
    width: 65%;
    h1 {
      font-size: 2rem;
      margin: 1rem 0 1rem 1rem;
      text-transform: capitalize;
    }
    p {
      width: 70%;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
    }
    a {
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
  .container2 {
    width: 30%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 3rem;
    .container1 {
      width: 100%;
      p {
        width: 100%;
      }
    }
    .container2 {
      width: 95%;
      margin-left: 5%;
    }
  }
`;

const IconContainer = styled.div`
  margin: 2rem 0.5rem;
  display: flex;
  align-items: center;
  svg {
    color: #cd853f;
    font-size: 2.8rem;
    margin-right: 1rem;
  }
  h5 {
    text-transform: capitalize;
    letter-spacing: 1px;
    font-weight: 400;
  }
`;
