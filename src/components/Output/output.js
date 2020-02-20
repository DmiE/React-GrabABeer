import React from 'react';
import OutputList from './OutputList/outputList';
import OutputMap from './OutputMap/outputMap';
import classes from './output.module.scss';

const Output = () => {
  return (
    <div className={classes.output__container}>
      <OutputList />
      <OutputMap />
    </div>
  );
};

export default Output;
