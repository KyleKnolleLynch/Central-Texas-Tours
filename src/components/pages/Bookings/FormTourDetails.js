import React from 'react';
import PropTypes from 'prop-types';


const FormTourDetails = ({ nextStep, backStep, handleChange }) => {
  const forward = e => {
    e.preventDefault();
    nextStep();
  };

  const reverse = e => {
    e.preventDefault();
    backStep();
  };

  return (
    <form className='booking-main text-center'>
      <h1 className='text-primary my-2 '>Booking</h1>
      <h2 className='m'>Enter Tour Info</h2>
      <h3 className='text-left'>Choose Tour:</h3>
      <input
        type='text'
        name='tour'
        placeholder='Enter Tour Title'
        className='list-li form-text'
        onChange={handleChange}
      />
      <h3 className='text-left'>Choose Date:</h3>
      <input
        type='date'
        name='date'
        placeholder='Enter Date'
        className='list-li form-text'
        onChange={handleChange}
      />
      <h3 className='text-left text-area'>Detailed Message: </h3>
      <textarea
        type='text'
        name='message'
        placeholder='Enter Detailed Message'
        className='list-li form-text'
        onChange={handleChange}
      />
      <button className='btn btn-danger my-1' onClick={reverse}>
        Go Back
      </button>
      <button className='btn btn-primary my-1' onClick={forward}>
        Continue
      </button>
    </form>
  );
};

FormTourDetails.propTypes = {
  nextStep: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default FormTourDetails;
