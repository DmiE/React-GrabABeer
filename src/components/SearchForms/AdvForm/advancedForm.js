import React, { useState } from 'react';
import FormInput from '../FormInput/formInput';
import classes from './advancedForm.module.scss';
import FormSelect from '../FormSelect/formSelect';
import axios from 'axios';

const AdvancedForm = () => {
  const [beerProps, setBeerProps] = useState({
    beerName: '',
    beerType: '',
    beerIBU: ''
  });

  const changeHandler = event => {
    const newBeerProps = { ...beerProps };
    newBeerProps[event.target.id] = event.target.value;
    setBeerProps(newBeerProps);
  };

  const submitHandler = event => {
    event.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', beerProps)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  };

  return (
    <form onSubmit={submitHandler}>
      <FormInput
        className={classes.adv_form__input}
        id="beerName"
        value={beerProps.beerName}
        placeholder="beer name"
        onChange={changeHandler}
      />
      <FormInput
        className={classes.adv_form__input}
        id="beerType"
        value={beerProps.beerType}
        placeholder="beer type"
        onChange={changeHandler}
      />
      <FormInput
        className={classes.adv_form__input}
        id="beerIBU"
        value={beerProps.beerIBU}
        placeholder="IBU"
        onChange={changeHandler}
      />
      <FormSelect options={['jasne', 'ciemne', '0 procent']} />
      <button className={classes.adv_form__button} type="submit">
        SEARCH
      </button>
    </form>
  );
};

export default AdvancedForm;
