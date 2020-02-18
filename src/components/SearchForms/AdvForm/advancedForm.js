import React, { useState, useEffect } from 'react';
import classes from './advancedForm.module.scss';
import FormSelect from '../FormSelect/formSelect';
import { firestore } from '../../../firebase';
import { connect } from 'react-redux';
import { apiCall } from '../../../common/utilities';

const AdvancedForm = props => {
  const [beersData, setBeersData] = useState({
    beerStyle: [],
    beerBrewerName: [],
    beerIBU: [],
    beerAlcohol: []
  });
  const [beerProps, setBeerProps] = useState({
    beerStyle: '',
    beerBrewerName: '',
    beerIBU: '',
    beerAlcohol: ''
  });

  useEffect(() => {
    (async () => {
      const snapshot = await firestore.collection('beers').get();
      const options = {
        beerStyle: [],
        beerBrewerName: [],
        beerIBU: [],
        beerAlcohol: []
      };
      snapshot.docs.forEach(doc => {
        options.beerStyle.push(doc.data().style);
        options.beerBrewerName.push(doc.data().brewer);
        options.beerIBU.push(doc.data().IBU);
        options.beerAlcohol.push(doc.data().alcohol);
      });
      const uniqueOptions = {
        beerStyle: options.beerStyle.filter(onlyUnique),
        beerBrewerName: options.beerBrewerName.filter(onlyUnique),
        beerIBU: options.beerIBU.filter(onlyUnique),
        beerAlcohol: options.beerAlcohol.filter(onlyUnique)
      };

      setBeersData(uniqueOptions);
    })();
  }, [setBeersData]);

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const fetchBeersData = async () => {
    let query = firestore.collection('beers');
    if (beerProps.beerStyle) {
      query = query.where('style', '==', beerProps.beerStyle);
    }
    if (beerProps.beerBrewerName) {
      query = query.where('brewer', '==', beerProps.beerBrewerName);
    }
    if (beerProps.beerIBU) {
      query = query.where('IBU', '==', parseFloat(beerProps.beerIBU));
    }
    if (beerProps.beerAlcohol) {
      query = query.where('alcohol', '==', parseFloat(beerProps.beerAlcohol));
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
    const res = await fetchBeersData();
    props.setFetchedBeers(res);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormSelect
        options={beersData.beerStyle}
        id="beerStyle"
        className={classes.adv_form__select}
        value={beerProps.beerStyle}
        onChange={changeHandler}
        placeholder={'Beer Style'}
      />
      <FormSelect
        options={beersData.beerBrewerName}
        id="beerBrewerName"
        className={classes.adv_form__select}
        value={beerProps.beerBrewerName}
        onChange={changeHandler}
        placeholder={'Brewer Name'}
      />
      <FormSelect
        options={beersData.beerAlcohol}
        id="beerAlcohol"
        className={classes.adv_form__select}
        value={beerProps.beerAlcohol}
        onChange={changeHandler}
        placeholder={'Alcohol'}
      />
      <FormSelect
        options={beersData.beerIBU}
        id="beerIBU"
        className={classes.adv_form__select}
        value={beerProps.beerIBU}
        onChange={changeHandler}
        placeholder={'Beer IBU'}
      />
      <button className={classes.adv_form__button} type="submit">
        SEARCH
      </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedForm);
