import React, { useState } from 'react';

const FormInput = props => {
  return (
    <input
      className={props.className}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default FormInput;
