import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
const About = () => {
  const { setNavBarPages } = useGlobalContext();
  useEffect(() => {
    setNavBarPages(true);
  }, []);
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
