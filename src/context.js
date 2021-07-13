import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // Toggle Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // Toggle Menu

  //NavBar Background
  const [navBarBackground, setNavBarBackground] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavBarBackground(true);
    } else {
      setNavBarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);
  //NavBar Background

  // Screen Width to set the style in properties
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      let widthDimension = window.innerWidth;
      setWidth(widthDimension);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Screen Width to set the style in properties

  //NavBar Background on Some Pages
  const [backgroundPages, setBackgroundPages] = useState(false);
  //NavBar Background on Some Pages
  return (
    <AppContext.Provider
      value={{
        isOpen,
        toggle,
        navBarBackground,
        width,
        backgroundPages,
        setBackgroundPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
