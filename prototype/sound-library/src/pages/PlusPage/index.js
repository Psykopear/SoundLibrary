import React from 'react';

import Icon from '../../components/Icon';
import './styles.css';


const PlusPage = props => (
  <div className={`list page ${props.active ? 'active' : ''}`} onClick={props.onClick}>
    <Icon icon="fa-plus" />
  </div>
);

export default PlusPage;
