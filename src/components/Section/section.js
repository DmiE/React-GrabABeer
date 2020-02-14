import React from 'react';
import classes from './section.module.scss';

const Section = props => {
  let styles = {};

  if (props.backgroundImage) {
    styles = { backgroundImage: 'url(' + props.backgroundImage + ')' };
  }

  return (
    <section className={classes.section} style={styles}>
      {/* <a id={props.sectionId} href="" className={classes.section__anchor}>
        anchor
      </a> */}
      {props.children}
    </section>
  );
};

export default Section;
