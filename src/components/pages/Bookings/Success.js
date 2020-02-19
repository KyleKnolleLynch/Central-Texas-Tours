import React from 'react';
import PropTypes from 'prop-types';
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
          <strong className='text-primary' style={{fontSize: '1.4rem'}}>Home</strong>
        </NavLink>
      </p>
      <p>
        Go to{' '}
        <NavLink exact to='/tourList'>
         <strong className='text-primary' style={{fontSize: '1.4rem'}}>Tours</strong>
        </NavLink>
      </p>
    </div>
  );
};

Success.propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    tour: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
}

export default Success;
