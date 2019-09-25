import React, { useState } from 'react';

const FormUserDetails = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

const advance = e => {
  e.preventDefault();
  props.nextStep();
}
  
const formDetails = {
  'First Name': firstName,
  'Last Name': lastName,
  Email: email
};

  return (
    <div className='booking-main text-center'>
      <h1 className='my-2'>
        <span className='text-primary'>Tour</span> Bookings
      </h1>
      <form>
        <input
          className='form-text'
          type='text'
          placeholder='First Name'
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          className='form-text'
          type='text'
          placeholder='Last Name'
          onChange={e => setLastName(e.target.value)}
        />
        <input
          className='form-text'
          type='email'
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
        />
        {/* <input
          className='form-text'
          type='text'
          placeholder='Tour'
          onChange={e => setTour(e.target.value)}
        />
        <input
          className='form-text'
          type='date'
          placeholder='Date'
          onChange={e => setDate(e.target.value)}
        /> */}
        <button className='btn btn-primary' type='submit' onClick={advance}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default FormUserDetails;
