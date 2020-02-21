import React from 'react';
import useForm from './useForm';
import validate from './validateForm';
import FormPersonalDetails from './FormPersonalDetails';
import FormTourDetails from './FormTourDetails';
import Confirm from './Confirm';
import Success from './Success';

import './Bookings.scss';

const Bookings = () => {
  const {
    step,
    values,
    nextStep,
    backStep,
    handleChange,
    handleSubmit,
    errors
  } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log('form submitted!');
  }

  switch (step) {
    case 1:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          handleChange={handleChange}
          errors={errors}
        />
      );
    case 2:
      return (
        <FormTourDetails
          nextStep={nextStep}
          backStep={backStep}
          handleChange={handleChange}
          errors={errors}

        />
      );
    case 3:
      return (
        <Confirm
          backStep={backStep}
          values={values}
          handleSubmit={handleSubmit}
        />
      );
    case 4:
      return <Success values={values} />;
    default:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          handleChange={handleChange}
          errors={errors}
        />
      );
  }
};

export default Bookings;
