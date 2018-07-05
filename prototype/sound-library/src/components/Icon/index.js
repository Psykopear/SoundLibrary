import React from 'react';

import './styles.css';

const Icon = props => (
  <div className="icon">
    <i className={`fas ${props.icon}`} />
  </div>
);

export default Icon;
