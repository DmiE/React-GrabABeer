import React, { useState, useEffect } from 'react';
import classes from './advancedForm.module.scss';
import FormSelect from '../FormSelect/formSelect';
import { firestore } from '../../../firebase';

const AdvancedForm = () => {
  const [beersData, setBeersData] = useState({});
  const [beerProps, setBeerProps] = useState({
    beerName: '',
    beerType: '',
    beerIBU: '',
    beerColor: ''
  });

  useEffect(() => {
    console.log('mounted');
    // const posts = firestore
    //   .collection('posts')
    //   .get()
    //   .then(snapshot => {
    //     console.log({ snapshot });
    //   });

    (async () => {
      const snapshot = await firestore.collection('beers').get();

      const posts = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });

      setBeersData(posts);
    })();
  }, [setBeersData]);

  const changeHandler = event => {
    const newBeerProps = { ...beerProps };
    newBeerProps[event.target.id] = event.target.value;
    setBeerProps(newBeerProps);
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log(beersData);
  };

  console.log(beersData);

  return (
    <form onSubmit={submitHandler}>
      <FormSelect
        options={['zywiec', 'tyskie', 'mocny full']}
        id="beerName"
        className={classes.adv_form__select}
        value={beerProps.beerName}
        onChange={changeHandler}
        placeholder={'Beer Name'}
      />
      <FormSelect
        options={['lager', 'porter', 'pszeniczne']}
        id="beerType"
        className={classes.adv_form__select}
        value={beerProps.beerType}
        onChange={changeHandler}
        placeholder={'Type Of Beer'}
      />
      <FormSelect
        options={['1-20', '21-40', '41-60', '61-80', '81-100']}
        id="beerIBU"
        className={classes.adv_form__select}
        value={beerProps.beerIBU}
        onChange={changeHandler}
        placeholder={'IBU'}
      />
      <FormSelect
        options={['jasne', 'ciemne', '0 procent']}
        id="beerColor"
        className={classes.adv_form__select}
        value={beerProps.beerColor}
        onChange={changeHandler}
        placeholder={'Beer Color'}
      />
      <button className={classes.adv_form__button} type="submit">
        SEARCH
      </button>
    </form>
  );
};

export default AdvancedForm;
