import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Homes = () => {
  const { setNavBarPages } = useGlobalContext();
  useEffect(() => {
    setNavBarPages(true);
  }, []);
  return (
    <div>
      <h1>Homes</h1>
    </div>
  );
};

export default Homes;
