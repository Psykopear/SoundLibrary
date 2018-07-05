import React from 'react';

import List from '../../components/List';
import Sound from '../../components/Sound';
import './styles.css';


const SearchPage = props => (
  <div className={`search page ${props.active ? 'active' : ''}`} onClick={props.onClick}>
    <div className={`searchHeader ${props.active ? 'active' : ''}`}>
      <input className={`textInput ${props.active ? 'active' : ''}`} type="text" placeholder="Search..."/>
    </div>
    <div className="results">
      <Sound sound="ajo" />
      <Sound sound="ciao" />
      <Sound sound="ahoj" />
      <Sound sound="ajo" />
      <Sound sound="ajo" />
      <Sound sound="ajo" />
      <Sound sound="ciao" />
      <Sound sound="ciao" />
      <Sound sound="ciao" />
      <Sound sound="ahoj" />
      <Sound sound="ciao" />
      <Sound sound="ciao" />
      <Sound sound="ciao" />
      <Sound sound="ahoj" />
      <Sound sound="ciao" />
      <Sound sound="ciao" />
      <Sound sound="ciao" />
      <Sound sound="ahoj" />
      <Sound sound="ahoj" />

    </div>
  </div>
);

export default SearchPage;
