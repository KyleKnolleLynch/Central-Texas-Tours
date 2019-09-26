import React, { Component } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormTourDetails from './FormTourDetails';
import Confirm from './Confirm';
import Success from './Success';

import './Bookings.scss';

class Bookings extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    tour: '',
    date: '',
    message: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  backStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, tour, date, message } = this.state;
    const values = { firstName, lastName, email, tour, date, message };

    switch (step) {
      case 1:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormTourDetails
            nextStep={this.nextStep}
            backStep={this.backStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            backStep={this.backStep}
            values={values}
          />
        );
      case 4:
        return <Success values={values} />;
      default:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default Bookings;
