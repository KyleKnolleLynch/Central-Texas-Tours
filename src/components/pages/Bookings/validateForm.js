export default function validate(values) {
  let errors = {};

  if (!values.firstName || values.firstName.length < 2) {
    errors.firstName = 'First name must have at least two letters';
  }

  if (!values.lastName || values.lastName.length < 2) {
    errors.lastName = 'Last name must have at least two letters';
  }

  if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Valid Email is required';
  }

  if (!values.tour || values.tour.length < 5) {
    errors.tour = 'Please enter a listed tour';
  }

  if (
    !values.date 
    // !/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(
    //   values.date
    // )
  ) {
    errors.date = 'Please enter a valid date';
  }

  return errors;
}
