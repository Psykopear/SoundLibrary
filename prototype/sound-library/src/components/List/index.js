import React from 'react';
import './styles.css';


const List = props => (
  <div className="list" {...props} >
    { props.children }
  </div>
);

export default List;
