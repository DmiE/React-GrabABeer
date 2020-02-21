import React from 'react';
import classes from './section.module.scss';

const Section = props => {
  let styles = {};
  // let styles = props.heroSection === true ? { height: '100vh' } : {};
  console.log('hero section');

  if (props.backgroundImage) {
    styles.backgroundImage = 'url(' + props.backgroundImage + ')';
  }
  if (props.heroSection) {
    styles.height = '100vh';
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
