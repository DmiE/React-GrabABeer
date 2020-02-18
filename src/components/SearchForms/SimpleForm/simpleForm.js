import React, { useState } from 'react';
import FormInput from '../FormInput/formInput';
import classes from './simpleForm.module.scss';
import { firestore } from '../../../firebase';
import { connect } from 'react-redux';
import { apiCall } from '../../../common/utilities';

const SimpleForm = props => {
  const [beerProps, setBeerProps] = useState({
    beerName: ''
  });

  const fetchBeerData = async () => {
    let query = firestore.collection('beers');

    if (beerProps.beerName) {
      query = query.where('name', '==', beerProps.beerName);
    }

    return await apiCall(query);
  };

  const changeHandler = event => {
    const newBeerProps = { ...beerProps };
    newBeerProps[event.target.id] = event.target.value;
    setBeerProps(newBeerProps);
  };

  const submitHandler = async event => {
    event.preventDefault();
    const res = await fetchBeerData();
    props.setFetchedBeers(res);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormInput
        className={classes.simple_form__input}
        id="beerName"
        value={beerProps.beerName}
        placeholder="beer name"
        onChange={changeHandler}
      />
      <button type="submit">SEARCH</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setFetchedBeers: fetchedBeers =>
      dispatch({ type: 'SETFETCHEDBEERS', fetchedBeers: fetchedBeers })
  };
};

const mapStateToProps = state => {
  return {
    fetchedBeers: state.fetchedBeers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleForm);
