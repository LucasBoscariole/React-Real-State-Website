import React from 'react';
import HeroPage from '../components/HeroPage';
import InteriorDesign from '../components/InteriorDesign';
import NewHouses from '../components/NewHouses';
import Leisure from '../components/Leisure';
import { useGlobalContext } from '../context';
const Home = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(false);
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
