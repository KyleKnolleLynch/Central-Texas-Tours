import React, { useState } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormTourDetails from './FormTourDetails';
import Confirm from './Confirm';
import Success from './Success';

import './Bookings.scss';

const Bookings = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tour: '',
    date: '',
    message: ''
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const backStep = () => {
    setStep(step - 1);
  };

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({ ...values, [name]: value });
  };
  // const handleChange = input => e => {
  //   setValues({ ...values, [input]: e.target.value });
  // };

  switch (step) {
    case 1:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormTourDetails
          nextStep={nextStep}
          backStep={backStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} backStep={backStep} values={values} />
      );
    case 4:
      return <Success values={values} />;
    default:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
  }
};

export default Bookings;
