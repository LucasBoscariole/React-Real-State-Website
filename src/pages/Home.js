import React, { useEffect } from 'react';
import HeroPage from '../components/HeroPage';
import InteriorDesign from '../components/InteriorDesign';
import NewHouses from '../components/NewHouses';
import Leisure from '../components/Leisure';

const Home = () => {
  return (
    <>
      <HeroPage />
      <NewHouses />
      <InteriorDesign />
      <Leisure />
    </>
  );
};

export default Home;
