import React from 'react';
import styled from 'styled-components';
import InfoHeroIcons from './InfoHeroIcons';
import InfoNewHouses from './InfoNewHouses';

const InfoHero = () => {
  return (
    <Wrapper>
      <InfoHeroIcons />
      <InfoNewHouses />
    </Wrapper>
  );
};

export default InfoHero;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
`;
