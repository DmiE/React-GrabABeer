import React from 'react';
import classes from './outputItem.module.scss';

const OutputItem = props => {
  return (
    <li className={classes.output__item}>
      <div className={classes.item__logo_container}>
        <p>{props.brewer}</p>
      </div>
      <div className={classes.item__content_container}>
        <div className={classes.item__name_container}>
          <p className={classes.item__name}>{props.name}</p>
        </div>
        <div className={classes.item__info_container}>
          <p className={classes.item__info}>
            <span className={classes.item__info_label}>STYLE: </span>
            {props.style}
          </p>
          <p className={classes.item__info}>
            <span className={classes.item__info_label}>IBU: </span>
            {props.IBU}
          </p>
          <p className={classes.item__info}>
            <span className={classes.item__info_label}>%: </span>
            {props.alcohol}
          </p>
        </div>
      </div>
    </li>
  );
};

export default OutputItem;
