import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import OutputItem from './OutputItem/outputItem';
import classes from './outputList.module.scss';
import usePrevious from '../../../common/usePrevious';

const OutputList = props => {
  const [items, setItems] = useState(['list is empty!!']);
  const [activeItem, setActiveItem] = useState('');

  const prevFetchedItems = usePrevious(props.fetchedBeers);
  const prevAcitveItem = usePrevious(activeItem);

  const selectItemHandler = name => {
    setActiveItem(name);
  };

  const renderItems = actItem => {
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
          isActive={actItem}
        />
      );
    });
    return items;
  };

  useEffect(() => {
    if (
      props.fetchedBeers.length !== 0 &&
      props.fetchedBeers !== prevFetchedItems
    ) {
      const items = renderItems('');
      setItems([items]);
      setActiveItem('');
    } else if (
      props.fetchedBeers === prevFetchedItems &&
      activeItem !== prevAcitveItem
    ) {
      const items = renderItems(activeItem);
      props.setActiveBeer(activeItem);
      setItems([items]);
    } else {
      setItems(['list is empty']);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.fetchedBeers, activeItem]);

  return <ul className={classes.list__container}>{items}</ul>;
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveBeer: activeBeer =>
      dispatch({ type: 'SETACTIVEBEER', activeBeer: activeBeer })
  };
};

const mapStateToProps = state => {
  return {
    fetchedBeers: state.fetchedBeers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutputList);
