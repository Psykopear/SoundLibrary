import React from 'react';

import './styles.css';


const SidebarButton = props => (
  <div onClick={() => props.onClick(props.page)} className={`sidebarButton ${props.active ? 'active' : ''}`}>
    <i className={`fas ${props.icon}`}  />
  </div>
);

export default SidebarButton;
