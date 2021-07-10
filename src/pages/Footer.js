import React from 'react';
import styled from 'styled-components';
import { FooterIcons, FooterDataIcons } from '../data/FooterData';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <h1>We’re the key to your new home.</h1>
          <ContainerIcons>
            {FooterDataIcons.map((item, index) => {
              return <FooterIcons key={index}>{item.icon}</FooterIcons>;
            })}
          </ContainerIcons>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  min-height: 60vh;
  background: #00102b;
  display: flex;
  align-items: center;
  border-top: 1px solid #cd853f;
`;

const Container = styled.section`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TextContainer = styled.article`
  display: block;
  width: 45%;
  h1 {
    font-size: 4rem;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  margin: 1.4rem auto 0 auto;
`;
