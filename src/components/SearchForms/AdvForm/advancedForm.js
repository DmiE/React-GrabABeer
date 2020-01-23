import React from 'react';
import FormInput from '../FormInput/formInput';
import classes from './advancedForm.module.scss';
import FormSelect from '../FormSelect/formSelect';

const AdvancedForm = () => {
  return (
    <form action="">
      <FormInput className={classes.adv_form__input} placeholder="beer name" />
      <FormInput className={classes.adv_form__input} placeholder="IBU" />
      <FormInput className={classes.adv_form__input} placeholder="beer type" />
      <FormSelect options={['jasne', 'ciemne', '0 procent']} />
      <button className={classes.adv_form__button}>SEARCH</button>
    </form>
  );
};

export default AdvancedForm;
