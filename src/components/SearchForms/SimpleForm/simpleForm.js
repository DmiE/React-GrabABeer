import React from 'react';
import FormInput from '../FormInput/formInput';
import classes from './simpleForm.module.scss';

const SimpleForm = () => {
  return (
    <form action="">
      <FormInput
        className={classes.simple_form__input}
        placeholder="type beer search for"
      />
      <button></button>
    </form>
  );
};

export default SimpleForm;
