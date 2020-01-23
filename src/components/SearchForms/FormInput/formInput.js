import React, { useState } from 'react';

const FormInput = props => {
  const [value, setValue] = useState('');

  return (
    <input
      className={props.className}
      type="text"
      value={value}
      placeholder={props.placeholder}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default FormInput;
