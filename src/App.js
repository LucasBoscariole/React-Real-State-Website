import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyle from './globalstyle';
import Dropdown from './components/Dropdown';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Properties from './pages/Properties';
import Footer from './pages/Footer';
import SingleHouse from './pages/SingleHouse';
import ScrollToTop from './components/scrollToTop';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Dropdown />
      <ScrollToTop>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/properties'>
            <Properties />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/properties/:id' children={<SingleHouse />} />
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
