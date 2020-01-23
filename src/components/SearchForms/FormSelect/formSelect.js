import React, { useState } from 'react';

const FormSelect = props => {
  const [value, setValue] = useState('');

  return (
    <select
      className={props.className}
      value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={e => setValue(e.target.value)}
    >
      <option value="">all</option>
      {props.options.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
