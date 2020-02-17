import React, { useState, useEffect } from 'react';
import classes from './advancedForm.module.scss';
import FormSelect from '../FormSelect/formSelect';
import { firestore } from '../../../firebase';

const AdvancedForm = () => {
  const [beersData, setBeersData] = useState({
    beerName: [],
    beerType: [],
    beerAlcohol: []
  });
  const [beerProps, setBeerProps] = useState({
    beerName: '',
    beerType: '',
    beerIBU: '',
    beerColor: ''
  });

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  useEffect(() => {
    console.log('mounted');

    (async () => {
      const snapshot = await firestore.collection('beers').get();

      // query selector
      // firestore
      //   .collection('beers')
      //   .where('alcohol', '==', '2')
      //   .get()
      //   .then(function(querySnapshot) {
      //     querySnapshot.forEach(function(doc) {
      //       // console.log(doc.id, ' => ', doc.data());
      //     });
      //   });

      const options = {
        beerName: [],
        beerType: [],
        beerAlcohol: []
      };
      snapshot.docs.forEach(doc => {
        options.beerName.push(doc.data().name);
        options.beerType.push(doc.data().type);
        options.beerAlcohol.push(doc.data().alcohol);
      });
      const uniqueOptions = {
        beerName: options.beerName.filter(onlyUnique),
        beerType: options.beerType.filter(onlyUnique),
        beerAlcohol: options.beerAlcohol.filter(onlyUnique)
      };

      setBeersData(uniqueOptions);
    })();
  }, [setBeersData]);

  const changeHandler = event => {
    const newBeerProps = { ...beerProps };
    newBeerProps[event.target.id] = event.target.value;
    setBeerProps(newBeerProps);
  };

  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <FormSelect
        options={beersData.beerName}
        id="beerName"
        className={classes.adv_form__select}
        value={beerProps.beerName}
        onChange={changeHandler}
        placeholder={'Beer Name'}
      />
      <FormSelect
        options={beersData.beerType}
        id="beerType"
        className={classes.adv_form__select}
        value={beerProps.beerType}
        onChange={changeHandler}
        placeholder={'Type Of Beer'}
      />
      <FormSelect
        options={beersData.beerAlcohol}
        id="beerIBU"
        className={classes.adv_form__select}
        value={beerProps.beerIBU}
        onChange={changeHandler}
        placeholder={'IBU'}
      />
      {/* <FormSelect
        options={['jasne', 'ciemne', '0 procent']}
        id="beerColor"
        className={classes.adv_form__select}
        value={beerProps.beerColor}
        onChange={changeHandler}
        placeholder={'Beer Color'}
      /> */}
      <button className={classes.adv_form__button} type="submit">
        SEARCH
      </button>
    </form>
  );
};

export default AdvancedForm;
