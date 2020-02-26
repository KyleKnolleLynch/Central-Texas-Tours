import React from 'react';
import PropTypes from 'prop-types';

const FormPersonalDetails = ({ stepOne, handleChange, errors }) => {
  const forward = e => {
    e.preventDefault();
    stepOne();
  };

  return (
    <form className='booking-main text-center'>
      <h1 className='text-primary my-2 '>Booking</h1>
      <h2 className='m'>Enter Your Personal Info</h2>
      <h3 className='text-left'>First Name:</h3>
      <input
        type='text'
        name='firstName'
        placeholder='Enter First Name'
        className={`list-li form-text ${errors.firstName && 'inputError'}`}
        onChange={handleChange}
      />
      {errors.firstName && (
        <p className='alert'>{errors.firstName}</p>
      )}
      <h3 className='text-left'>Last Name:</h3>
      <input
        type='text'
        name='lastName'
        placeholder='Enter Last Name'
        className={`list-li form-text ${errors.lastName && 'inputError'}`}
        onChange={handleChange}
      />
      {errors.lastName && (
        <p className='alert'>{errors.lastName}</p>
      )}
      <h3 className='text-left'>Email:</h3>
      <input
        type='email'
        name='email'
        placeholder='Enter Email'
        className={`list-li form-text ${errors.email && 'inputError'}`}
        onChange={handleChange}
      />
      {errors.email && <p className='alert'>{errors.email}</p>}
      <button className='btn btn-primary my-1' onClick={forward}>
        Continue
      </button>
    </form>
  );
};

FormPersonalDetails.propTypes = {
  stepOne: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default FormPersonalDetails;
