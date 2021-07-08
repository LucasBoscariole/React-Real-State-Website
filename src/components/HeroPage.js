import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { useGlobalContext } from '../context';

const HeroPage = () => {
  const { setNavBarPages } = useGlobalContext();
  useEffect(() => {
    setNavBarPages(false);
  }, []);
  return (
    <>
      <Hero />
    </>
  );
};

export default HeroPage;
