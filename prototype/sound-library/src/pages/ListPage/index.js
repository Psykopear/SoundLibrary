import React from 'react';

import List from '../../components/List';
import SoundMinimal from '../../components/SoundMinimal';
import { normalizedData as sounds } from '../../data';
import './styles.css';


const ListPage = props => (
  <List>
    { props.library.map(id => {
      const s = sounds.get(id);
      console.log(props.library, id, sounds)
      return (
        <SoundMinimal
          key={s.name}
          playing={props.playing === s.name}
          inLibrary={props.library.includes(s.name)}
          // visible={!props.library.includes(s.name)}
          visible
          removeFromLibrary={() => props.removeFromLibrary(s.name)}
          onPlay={() => props.onPlay(s.name)}
          title={s.name}
          image={s.images.waveform_m}
        />
      );
    })}
  </List>
);

export default ListPage;
