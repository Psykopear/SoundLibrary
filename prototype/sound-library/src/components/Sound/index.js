import React from 'react';

import Icon from '../Icon';
import './styles.css';


const Sound = props => (
  <div className="listSound">
    <div className="upperSound">
      <div className="title">
        { props.title }
      </div>
      <div className="info">
        <Icon icon="fa-copyright" />
      </div>
    </div>
    <div className="lowerSound">
      <div className="controls">
        <Icon icon="fa-play" />
        <Icon icon="fa-plus" />
      </div>
      <div className="duration">
        3'23"
      </div>
      <div className="similar">
        <Icon icon="fa-info" />
        <Icon icon="fa-angle-double-right" />
      </div>
    </div>
    <div className="wave">
    </div>
  </div>
);

Sound.defaultProps = {
  title: 'Test title that is very long and uselessly complicated',
};

export default Sound;
