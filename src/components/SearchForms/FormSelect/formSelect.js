import React, { useState } from 'react';

const FormSelect = props => {
  return (
    <select
      className={props.className}
      value={props.value}
      id={props.id}
      onChange={props.onChange}
      onBlur={props.onChange}
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
