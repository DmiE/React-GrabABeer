import React from 'react';

import classes from './navItem.module.scss';

const NavItem = props => {
  return (
    <a href={props.link} className={classes.navigation_item}>
      {props.name}
    </a>
  );
};

export default NavItem;
