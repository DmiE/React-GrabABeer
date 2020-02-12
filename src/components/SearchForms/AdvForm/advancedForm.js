import React, { useState } from 'react';
import FormInput from '../FormInput/formInput';
import classes from './advancedForm.module.scss';
import FormSelect from '../FormSelect/formSelect';
import axios from 'axios';

const AdvancedForm = () => {
  const [beerProps, setBeerProps] = useState({
    beerName: '',
    beerType: '',
    beerIBU: '',
    beerColor: ''
  });

  const changeHandler = event => {
    const newBeerProps = { ...beerProps };
    newBeerProps[event.target.id] = event.target.value;
    setBeerProps(newBeerProps);
  };

  const submitHandler = event => {
    event.preventDefault();
    axios
      // .post('https://jsonplaceholder.typicode.com/posts', beerProps)
      .post(process.env.REACT_APP_DATABASE_URL + '.json', beerProps)
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
      <FormSelect
        options={['zywiec', 'tyskie', 'mocny full']}
        id="beerName"
        value={beerProps.beerName}
        onChange={changeHandler}
      />
      <FormSelect
        options={['lager', 'porter', 'pszeniczne']}
        id="beerType"
        value={beerProps.beerType}
        onChange={changeHandler}
      />
      <FormSelect
        options={['1-20', '21-40', '41-60', '61-80', '81-100']}
        id="beerIBU"
        value={beerProps.beerIBU}
        onChange={changeHandler}
      />
      <FormSelect
        options={['jasne', 'ciemne', '0 procent']}
        id="beerColor"
        value={beerProps.beerColor}
        onChange={changeHandler}
      />
      <button className={classes.adv_form__button} type="submit">
        SEARCH
      </button>
    </form>
  );
};

export default AdvancedForm;
