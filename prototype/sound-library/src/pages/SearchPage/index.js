import React from 'react';

import List from '../../components/List';
import Sound from '../../components/Sound';
import './styles.css';


const SearchPage = () => (
  <div className="search page">
    <input className="textInput" type="text" placeholder="Search..."/>
    <List>
      <Sound sound="ajo" />
      <Sound sound="ciao" />
      <Sound sound="ahoj" />
    </List>
  </div>
);

export default SearchPage;
