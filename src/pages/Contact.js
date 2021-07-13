import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Contact = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(true);
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
