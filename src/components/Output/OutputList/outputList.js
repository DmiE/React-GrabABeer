import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import OutputItem from './OutputItem/outputItem';
import classes from './outputList.module.scss';

const OutputList = props => {
  const [items, setItems] = useState(['list is empty!!']);
  const [activeItem, setActiveItem] = useState('blebleble');

  const selectItemHandler = name => {
    setActiveItem(name);
  }

  useEffect(() => {
    if (props.fetchedBeers.length !== 0) {
      const items = props.fetchedBeers.map(item => {
        return (
          <OutputItem
            key={item.name}
            name={item.name}
            style={item.style}
            IBU={item.IBU}
            alcohol={item.alcohol}
            brewer={item.brewer}
            selectItem={selectItemHandler}
            isActive={activeItem}
          />
        );
      });
      setItems([items]);
    } else {
      setItems(['list is empty']);
    }
  }, [props.fetchedBeers, activeItem]);

  return <ul className={classes.list__container}>{items}</ul>;
};

const mapStateToProps = state => {
  return {
    fetchedBeers: state.fetchedBeers
  };
};

export default connect(mapStateToProps)(OutputList);
