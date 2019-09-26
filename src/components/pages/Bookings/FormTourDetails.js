import React from 'react';

const FormTourDetails = props => {
  const forward = e => {
    e.preventDefault();
    props.nextStep();
  };

  const reverse = e => {
    e.preventDefault();
    props.backStep();
  };

  const { handleChange } = props;
  return (
    <form className='booking-main text-center'>
      <h1 className='text-primary my-2 '>Booking</h1>
      <h2 className='m'>Enter Tour Info</h2>
      <h3 className='text-left'>Choose Tour:</h3>
      <input
        type='text'
        placeholder='Enter Tour Title'
        className='list-li form-text'
        onChange={handleChange('tour')}
      />
      <h3 className='text-left'>Choose Date:</h3>
      <input
        type='date'
        placeholder='Enter Date'
        className='list-li form-text'
        onChange={handleChange('date')}
      />
      <h3 className='text-left text-area'>Detailed Message: </h3>
      <textarea
        type='text'
        placeholder='Enter Detailed Message'
        className='list-li form-text'
        onChange={handleChange('message')}
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

export default FormTourDetails;
