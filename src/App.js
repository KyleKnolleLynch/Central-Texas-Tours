import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import TourList from './components/pages/TourList';
import NotFound from './components/layout/NotFound/NotFound';

import './sass/main.scss';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/tourList' component={TourList} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
