import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyle from './globalstyle';
import Dropdown from './components/Dropdown';
import Home from './pages/Home';
import About from './pages/About';
import Homes from './pages/Homes';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Dropdown />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/homes'>
          <Homes />
        </Route>
        <Route exact path='/rentals'>
          <Rentals />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
