import { useState, useEffect } from 'react';

const useForm = (callback, initialValues = {}, validate) => {
  const [values, setValues] = useState(initialValues);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    if (progress) {
      setErrors(validate(values));
      setProgress(false);
    }
  }, [errors, progress, validate, values, step]);

  const stepOne = () => {
    setProgress(true);
    Object.keys(errors).length <= 2 && setStep(step + 1);
  };

  const stepTwo = () => {
    setProgress(true);
    Object.keys(errors).length > 2 && setStep(step - 1);
    Object.keys(errors).length === 0 && setStep(step + 1);
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
    if (Object.keys(errors).length === 0) {
      callback();
    }

    setProgress(false);
  };

  return {
    step,
    values,
    stepOne,
    stepTwo,
    backStep,
    handleChange,
    handleSubmit,
    errors
  };
};

export default useForm;
