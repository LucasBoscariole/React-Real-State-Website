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

  //Background Nav Pages
  const [navBarPages, setNavBarPages] = useState(false);
  //Background Nav Pages

  return (
    <AppContext.Provider
      value={{
        isOpen,
        toggle,
        navBarBackground,
        setNavBarPages,
        navBarPages,
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
