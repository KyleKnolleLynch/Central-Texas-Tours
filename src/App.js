import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Tours from './components/pages/tours/Tours';
import NotFound from './components/layout/notFound/NotFound';

import './main.scss';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/tours' component={Tours} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
