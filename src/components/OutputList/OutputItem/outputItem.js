import React from 'react';
import classes from './outputItem.module.scss';

const OutputItem = props => {
  return (
    <li className={classes.output__item}>
      <p>{props.name}</p>
      <p>{props.style}</p>
      <p>{props.IBU}</p>
      <p>{props.alcohol}</p>
      <p>{props.brewer}</p>
    </li>
  );
};

export default OutputItem;
