import React from 'react';

const OutputList = props => {
  const items = props.items
    ? props.items.map(item => <div key={item}>{item}</div>)
    : 'list is empty!';

  return <div>{items}</div>;
};

export default OutputList;
