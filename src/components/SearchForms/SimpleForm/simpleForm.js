import React, { useState } from 'react';
import FormInput from '../FormInput/formInput';
import classes from './simpleForm.module.scss';
import axios from 'axios';

const SimpleForm = () => {
  const [beerName, setBeerName] = useState({
    beerName: ''
  });

  const changeHandler = event => {
    const newBeerProps = { ...beerName };
    newBeerProps[event.target.id] = event.target.value;
    setBeerName(newBeerProps);
  };

  const submitHandler = event => {
    event.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', beerName)
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
        value={beerName.beerName}
        placeholder="beer name"
        onChange={changeHandler}
      />
      <button type="submit">SEARCH</button>
    </form>
  );
};

export default SimpleForm;
