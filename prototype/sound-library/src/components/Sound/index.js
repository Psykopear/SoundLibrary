import React from 'react';

import './styles.css';


const Icon = props => (
  <div className="icon">
    <i className={`fas ${props.icon}`} />
  </div>
);


const Sound = props => (
  <div className="listSound">
    <div className="upperSound">
      <div className="title">
        { props.title }
      </div>
    </div>
    <div className="controls">
      <Icon icon="fa-play" />
      <Icon icon="fa-plus" />
    </div>
    <div className="wave">
    </div>
  </div>
);

Sound.defaultProps = {
  title: 'Test title that is very long and uselessly complicated',
};

export default Sound;
