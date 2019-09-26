import React from 'react';

const FormPersonalDetails = props => {
  const forward = e => {
    e.preventDefault();
    props.nextStep();
  };

  const { handleChange } = props;
  return (
    <form className='booking-main text-center'>
      <h1 className='text-primary my-2 '>Booking</h1>
      <h2 className='m'>Enter Your Personal Info</h2>
      <h3 className='text-left'>First Name:</h3>
      <input
        type='text'
        placeholder='Enter First Name'
        className='list-li form-text'
        onChange={handleChange('firstName')}
      />
      <h3 className='text-left'>Last Name:</h3>
      <input
        type='text'
        placeholder='Enter Last Name'
        className='list-li form-text'
        onChange={handleChange('lastName')}
      />
      <h3 className='text-left'>Email:</h3>
      <input
        type='email'
        placeholder='Enter Email'
        className='list-li form-text'
        onChange={handleChange('email')}
      />
      <button className='btn btn-primary my-1' onClick={forward}>
        Continue
      </button>
    </form>
  );
};

export default FormPersonalDetails;
