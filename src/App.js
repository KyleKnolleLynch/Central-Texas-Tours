import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Bookings from './components/pages/Bookings/Bookings';
import TourList from './components/pages/TourList';
import NotFound from './components/layout/NotFound/NotFound';

import './sass/main.scss';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/bookings' component={Bookings} />
        <Route exact path='/tourList' component={TourList} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
