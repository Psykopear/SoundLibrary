import React from 'react';

import List from '../../components/List';
import Sound from '../../components/Sound';
import './styles.css';


const SearchPage = () => (
  <div className="search page">
    <div className="searchHeader">
      <input className="textInput" type="text" placeholder="Search..."/>
    </div>
    <div className="results">
      <List>
        <Sound sound="ajo" />
        <Sound sound="ciao" />
        <Sound sound="ahoj" />
      </List>

      <List>
        <Sound sound="ajo" />
        <Sound sound="ciao" />
        <Sound sound="ciao" />
        <Sound sound="ciao" />
        <Sound sound="ahoj" />
      </List>

      <List>
        <Sound sound="ahoj" />
      </List>

    </div>
  </div>
);

export default SearchPage;
