import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Rentals = () => {
  const { setNavBarPages } = useGlobalContext();
  useEffect(() => {
    setNavBarPages(true);
  }, []);
  return (
    <div>
      <h1>Rentals</h1>
    </div>
  );
};

export default Rentals;
