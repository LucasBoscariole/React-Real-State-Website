import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Error = () => {
  const { setNavBarPages } = useGlobalContext();
  useEffect(() => {
    setNavBarPages(true);
  }, []);
  return (
    <div>
      <h1>Error</h1>
    </div>
  );
};

export default Error;
