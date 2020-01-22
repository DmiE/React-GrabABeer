import React from 'react';

import NavItem from './NavItem/navItem';
import classes from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <NavItem link="#Hero" name="Hero" />
      <NavItem link="#Search" name="Search" />
      <NavItem link="#Map" name="Map" />
    </nav>
  );
};

export default Navigation;
