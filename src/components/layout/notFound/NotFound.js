import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="text-danger">Error 404</h1>
      <h1>Page Not Found!</h1>
      <p className='lead'>The page you requested does not exist.</p>
      <Link to='/'>Return to Home Page here.</Link>{' '}
      <i className='fas fa-arrow-left'></i>
    </Fragment>
  );
};

export default NotFound;
