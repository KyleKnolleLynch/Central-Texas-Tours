import React from 'react';

const Confirm = props => {
  return (
    <div>
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
      <h1>{props.email}</h1>
      <h1>{props.tour}</h1>
      <h1>{props.date}</h1>
    </div>
  );
};

export default Confirm;
