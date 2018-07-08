import React from 'react';

import Icon from '../../components/Icon';
import SoundMinimal from '../../components/SoundMinimal';
import sounds from '../../data';
import './styles.css';


const SearchPage = props => (
  <div className={`search page ${props.active ? 'active' : ''}`} >
    <div className={`searchHeader ${props.active ? 'active' : ''}`}>
      <input className={`textInput ${props.active ? 'active' : ''}`} onClick={props.onClick} type="text" placeholder="Search..."/>
      <Icon icon="fa-times" onClick={props.onDelete} />
    </div>
    <div className="results">
      { sounds.map(s => (
        <SoundMinimal
          key={s.name}
          playing={props.playing === s.name}
          inLibrary={props.library.includes(s.name)}
          visible={!props.library.includes(s.name)}
          // visible
          addToLibrary={() => props.addToLibrary(s.name)}
          removeFromLibrary={() => props.removeFromLibrary(s.name)}
          onPlay={() => props.onPlay(s.name)}
          title={s.name}
          image={s.images.waveform_m}
        />
      ))}
    </div>
  </div>
);

export default SearchPage;
