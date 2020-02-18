import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const OutputList = props => {
  const [items, setItems] = useState(['list is empty!!']);

  useEffect(() => {
    if (props.fetchedBeers.length !== 0) {
      const items = props.fetchedBeers.map(item => {
        return <div key={item.name}>{item.name}</div>;
      });
      setItems([items]);
    } else {
      setItems(['list is empty']);
    }
  }, [props.fetchedBeers]);

  return <div>{items}</div>;
};

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    fetchedBeers: state.fetchedBeers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutputList);
