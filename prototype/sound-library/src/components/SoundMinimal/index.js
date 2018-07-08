import React from 'react';

import Icon from '../Icon';
import './styles.css';


const Sound = props => (
  <div className="listSound" style={props.visible ? {} : {filter: 'grayscale(100%)'}}>
    <div className="boh" >
      <div className={`lowerSound ${props.playing ? 'playing' : ''}`} >
        <div className="controls">
          <Icon icon={props.playing ? "fa-pause" : "fa-play"} onClick={props.onPlay} />
          <Icon icon={props.inLibrary ? "fa-minus" : "fa-plus"} onClick={props.inLibrary ? props.removeFromLibrary : props.addToLibrary} />
        </div>
        <div className="duration">
          3'23"
        </div>
        <div className="similar">
          <Icon icon="fa-copyright" />
          <Icon icon="fa-info" />
          <Icon icon="fa-angle-double-right" />
        </div>
      </div>
      <div className="wave" style={{backgroundImage: `url(${props.image})`}}>
      </div>
    </div>
  </div>
);

Sound.defaultProps = {
  title: 'Test title that is very long and uselessly complicated',
};

export default Sound;
