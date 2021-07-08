import React, { useEffect } from 'react';
import HeroPage from '../components/HeroPage';
import InteriorDesign from '../components/InteriorDesign';
import NewHouses from '../components/NewHouses';

const Home = () => {
  return (
    <>
      <HeroPage />
      <NewHouses />
      <InteriorDesign />
    </>
  );
};

export default Home;
