import React from 'react';
import { NavLink } from 'react-router-dom';

const Success = ({ values: { firstName, lastName, tour, date } }) => {
  const fixedDate = new Date(date + 'CST').toLocaleDateString();
  return (
    <div className='booking-main  text-center'>
      <h1 className='text-success my-2'>Success!</h1>
      <h2 className='text-primary'>
        {firstName} {lastName}
      </h2>
      <h3>
        <span className='text-primary'>{tour}</span> has been confirmed for{' '}
        <span className='text-primary'>{fixedDate}</span>
      </h3>
      <h3>See you then!</h3>
      <hr className='my-2' />
      <h4 className='my-2'>For any changes please call 555-555-5555.</h4>
      <p>
        Back to{' '}
        <NavLink exact to='/'>
          Home
        </NavLink>
      </p>
      <p>
        Go to{' '}
        <NavLink exact to='/tourList'>
          Tours
        </NavLink>
      </p>
    </div>
  );
};

export default Success;
