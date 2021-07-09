import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const SingleHouse = () => {
  const { setNavBarPages } = useGlobalContext();
  useEffect(() => {
    setNavBarPages(true);
  }, []);
  return (
    <div>
      <h1>Single House</h1>
    </div>
  );
};

export default SingleHouse;
