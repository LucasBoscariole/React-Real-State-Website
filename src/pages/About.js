import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Image1 from '../images/image18.jpg';
import { Button } from '../components/Button';
import { aboutIcons } from '../data/InfoData';

const About = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(true);
  return (
    <>
      <Main>
        <Container>
          <h2>Who are we?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            iure enim ullam aliquid ex id temporibus facere sit unde maxime
            ratione veritatis suscipit eum amet sint pariatur tenetur,
            asperiores nostrum!
          </p>
        </Container>
      </Main>
      <Wrapper>
        <h2>Our History</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, debitis
          quod, sapiente odio, sed quas blanditiis at voluptatem suscipit
          dolorem animi dicta labore. Expedita molestias cumque laborum nulla ea
          laboriosam architecto excepturi eligendi. Architecto obcaecati, rerum
          quis cumque exercitationem sit at laudantium expedita? Commodi,
          molestiae hic. Corporis, nam aliquid? Expedita, natus! Necessitatibus
          saepe consectetur quisquam magnam voluptatem illum hic ratione
          dignissimos molestiae inventore cum veniam corporis facere, incidunt
          tempore at?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolorum
          voluptatibus repudiandae, esse ut deleniti facilis. Voluptatem
          voluptatum rem officiis repellendus sequi iusto fugit eligendi libero
          animi quis quasi atque, quia provident ea ad temporibus obcaecati nam
          ipsam quidem placeat, id, in nisi. Officiis architecto sit tenetur
          delectus animi qui?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          adipisci sunt animi voluptatem facilis, eum, numquam cumque error eos
          provident eveniet? Pariatur quia nihil perspiciatis ipsam laborum!
          Consequatur et quibusdam assumenda! Deleniti possimus cupiditate
          dolores odio, nesciunt, quae repudiandae nam fuga voluptate corporis
          itaque ipsam. Non excepturi voluptatibus quo assumenda!
        </p>
      </Wrapper>
      <ContainerWrapper>
        <div className='container1'>
          <h1>what does we provide?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos
            rem sed quibusdam nihil quam animi dignissimos assumenda provident
            perferendis! Similique quae officia doloribus veniam cum ad aliquam
            ex aliquid!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            odit aperiam iste velit non voluptatibus omnis tempora architecto
            laudantium est repudiandae ab dignissimos, praesentium eum cumque
            commodi, quibusdam pariatur consectetur labore eaque quo quidem hic!
            Maxime alias amet hic ratione!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            blanditiis inventore perferendis magnam sunt et repellendus
            assumenda esse laborum eum quos id porro tempora possimus minus
            exercitationem earum itaque quibusdam odit aliquid dicta suscipit.
            Beatae ut impedit quasi libero rerum vitae amet! Quia, neque unde
            dolorem necessitatibus quis corrupti tempore reprehenderit rerum
            deserunt quidem aliquid facere molestiae inventore, dolor omnis quae
            officia quaerat iste rem doloremque. Debitis sunt voluptatem enim
            perspiciatis ratione deserunt repudiandae iure, dolorem, harum, quis
            voluptas similique dolore.
          </p>
          <Button to='/contact'>Contact Us</Button>
        </div>
        <div className='container2'>
          {aboutIcons.map((item, index) => {
            return (
              <IconContainer key={index}>
                {item.icon} <h5>{item.title}</h5>
              </IconContainer>
            );
          })}
        </div>
      </ContainerWrapper>
    </>
  );
};
export default About;

const Main = styled.section`
  width: 100%;
  height: 95vh;
  background: url(${Image1});
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: multiply;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 5rem;
  h2 {
    text-transform: capitalize;
    font-size: 3rem;
    letter-spacing: 1px;
    color: #fff;
  }
  p {
    width: 30%;
    font-size: 1rem;
    color: #bababa;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    p {
      width: 100%;
    }
  }
`;

const Wrapper = styled.div`
  width: 60%;
  min-height: 50vh;
  background: #00102b;
  margin: -25vh auto 0 auto;
  border-radius: 10px;
  h2 {
    color: #fff;
    margin: 0 0 0.5rem 4rem;
    font-size: 2rem;
    padding-top: 1rem;
  }
  p {
    color: #bababa;
    padding: 0.5rem 2rem 0.5rem 2rem;
    text-align: justify;
    &:last-child {
      padding-bottom: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    h2 {
      margin-left: 2rem;
    }
    p {
      font-size: 0.8rem;
      &:nth-child(3) {
        padding-bottom: 1rem;
      }
      &:last-child {
        display: none;
      }
    }
  }
`;

const ContainerWrapper = styled.div`
  min-height: 70vh;
  width: 85%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  .container1 {
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
    width: 35%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    .container1 {
      width: 100%;
      p {
        width: 100%;
      }
    }
    .container2 {
      width: 100%;
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
