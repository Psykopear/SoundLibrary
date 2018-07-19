import React from 'react';

import List from '../../components/List';
import SoundMinimal from '../../components/SoundMinimal';
import { normalizedData as sounds } from '../../data';
import './styles.css';


const ListPage = props => (
  <div className="listPageContainer">
    <List>
      <div className="listTitle">Kicks</div>
      { props.library.map(id => {
        const s = sounds.get(id);
        console.log(props.library, id, sounds)
        return (
          <SoundMinimal
            key={s.name}
            playing={props.playing === s.name}
            inLibrary={props.library.includes(s.name)}
            visible
            removeFromLibrary={() => props.removeFromLibrary(s.name)}
            onPlay={() => props.onPlay(s.name)}
            title={s.name}
            image={s.images.waveform_m}
            />
        );
      })}

      <div className="listTitle">Explosions</div>
      { props.library.map(id => {
        const s = sounds.get(id);
        console.log(props.library, id, sounds)
        return (
          <SoundMinimal
            key={s.name}
            playing={props.playing === s.name}
            inLibrary={props.library.includes(s.name)}
            visible
            removeFromLibrary={() => props.removeFromLibrary(s.name)}
            onPlay={() => props.onPlay(s.name)}
            title={s.name}
            image={s.images.waveform_m}
            />
        );
      })}

      <div className="listTitle">Hats</div>
      { props.library.map(id => {
        const s = sounds.get(id);
        console.log(props.library, id, sounds)
        return (
          <SoundMinimal
            key={s.name}
            playing={props.playing === s.name}
            inLibrary={props.library.includes(s.name)}
            visible
            removeFromLibrary={() => props.removeFromLibrary(s.name)}
            onPlay={() => props.onPlay(s.name)}
            title={s.name}
            image={s.images.waveform_m}
            />
        );
      })}
    </List>
    <div className="pages">
      <div className="page">
        <div className="listTitle">Kit live drums</div>
      </div>
      <div className="page">
        <div className="listTitle">808</div>
      </div>
      <div className="page">
        <div className="listTitle">Water effects</div>
      </div>
      <div className="page">
        <div className="listTitle">FoxDot defaults</div>
      </div>
    </div>
  </div>
);

export default ListPage;
