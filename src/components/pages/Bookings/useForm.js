import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tour: '',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && progress) {
      setErrors(validate(values));
    }
  }, [errors, progress, validate, values]);

  const nextStep = () => {
    setErrors(validate(values));
    setProgress(true);
    Object.keys(errors).length <= 2 && setStep(step + 1);
  };

  const backStep = () => {
    setStep(step - 1);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStep(step + 1);
    if (Object.keys(errors).length === 0 && progress) {
      callback();
    }
   
    setProgress(false);
  };

  return {
    step,
    values,
    nextStep,
    backStep,
    handleChange,
    handleSubmit,
    errors
  };
};

export default useForm;
