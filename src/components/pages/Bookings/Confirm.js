import React from 'react';
import PropTypes from 'prop-types';

const Confirm = ({
  values: { firstName, lastName, email, tour, date, message },
  nextStep,
  backStep
}) => {
  const forward = e => {
    e.preventDefault();
    nextStep();
  };

  const reverse = e => {
    e.preventDefault();
    backStep();
  };

  const fixedDate = new Date(date + 'CST').toLocaleDateString();

  return (
    <div className='booking-main text-center'>
      <h1 className='my-2'>Please Confirm Info is Correct</h1>
      <h2 className='list-li'>
        First Name: <span className='text-primary'>{firstName}</span>
      </h2>
      <h2 className='list-li'>
        Last Name: <span className='text-primary'>{lastName}</span>
      </h2>
      <h2 className='list-li'>
        Email: <span className='text-primary'>{email}</span>
      </h2>
      <h2 className='list-li'>
        Tour: <span className='text-primary'>{tour}</span>
      </h2>
      <h2 className='list-li'>
        Date: <span className='text-primary'>{fixedDate}</span>
      </h2>
      <h3 className='list-li'>
        Message: <span className='text-primary'>{message}</span>
      </h3>

      <button className='btn btn-danger my-1' onClick={reverse}>
        Go Back
      </button>
      <button className='btn btn-primary my-1' onClick={forward}>
        Confirm
      </button>
    </div>
  );
};

Confirm.propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tour: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string
  }),
  nextStep: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired
};

export default Confirm;
