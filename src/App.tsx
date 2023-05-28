import React, { useState, useCallback, useMemo, SyntheticEvent } from 'react';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { SpotifyArtist } from './types';
import './styles/App.scss';
import { getArtists, getTracks } from './api/server';
import { debounce } from './utils';
import { TrackList } from './TrackList';

function App() {
  const [ artists, setArtists ] = useState<SpotifyArtist[]>([]);
  const [ artistNames, setArtistNames ] = useState<string[]>([]);
  const [ tracks, setTracks ] = useState([]);

  const updateArtists = useMemo(() => debounce(async (inputs) => {
    const artists = await getArtists(inputs);
    setArtistNames(artists.map((artist: SpotifyArtist) => artist.name));
    setArtists(artists);
  }, 1000), []);

  const onInputChange = useCallback((e: any, value: string) => {
    if (e.target.value) {
      updateArtists(e.target.value);
    }
  }, [updateArtists]);

  const onChange = async (_event: SyntheticEvent<Element, Event>, value: string | null) => {
    value = value ?? '';
    if (!value) return;
    const selectedArtist = artists.find((artist) => artist.name === value);
    const tracks = await getTracks(selectedArtist?.id || '');
    setTracks(tracks);
  }

  return (
    <div className='container'>
      <Autocomplete
        renderOption={(props, option) => {
          return (
            <li {...props} key={`${option}_${Math.random()}`}>
              {option}
            </li>
          );
        }}
        disablePortal
        id='artist-input'
        options={artistNames}
        sx={{ width: 300 }}
        onInputChange={onInputChange}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} label='Artist' />}
      />
      <TrackList tracks={tracks}/>
    </div>
  );
}

export default App;
