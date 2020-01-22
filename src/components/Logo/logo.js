import React from "react";
import classes from "./logo.module.scss";

import logo from "../../assets/GrabABeerLogo.png";

const Logo = () => {
  return (
    <div className={classes.logo__container}>
      <img src={logo} alt="Logo" className={classes.logo} />
    </div>
  );
};

export default Logo;
