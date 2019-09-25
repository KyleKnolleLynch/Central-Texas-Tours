import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FormUserDetails from './FormUserDetails';
import FormTourDetails from './FormTourDetails';
import Confirm from './Confirm';

import './Bookings.scss';

const Bookings = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tour, setTour] = useState('');
  const [date, setDate] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const backStep = () => {
    setStep(step - 1);
  };

  const submitValue = () => {
    const formDetails = {
      'First Name': firstName,
      'Last Name': lastName,
      Email: email,
      Tour: tour,
      Date: date
    };
    console.log(formDetails);
  };

  switch (step) {
    case 1:
      return <FormUserDetails nextStep={nextStep} submitValue={submitValue} />;
    case 2:
      return (
        <FormTourDetails
          nextStep={nextStep}
          backStep={backStep}
          submitValue={submitValue}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          backStep={backStep}
          submitValue={submitValue}
        />
      );
    case 4:
      return <h1>Success</h1>;
    default:
      return (
        <h1>
          Return to Bookings{' '}
          <NavLink exact to='/'>
            Here
          </NavLink>
        </h1>
      );
  }
};

export default Bookings;
