import React, { useState, useCallback, useMemo } from 'react';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { SpotifyArtist } from './types';
import './styles/App.scss';
import { getArtists } from './api/server';
import { debounce } from './utils';

function App() {
  const [ artists, setArtists ] = useState<string[]>([]);

  const updateArtists = useMemo(() => debounce(async (inputs) => {
    const artists = await getArtists(inputs[0]);
    const artistNames: string[] = artists.map((artist: SpotifyArtist) => artist.name)
    setArtists(artistNames);
  }, 1000), []);

  const onInputChange = useCallback((e: any) => {
    updateArtists(e.target.value);
  }, [updateArtists]);

  return (
    <div className='container'>
      <Autocomplete
        disablePortal
        id='artist-input'
        options={artists}
        sx={{ width: 300 }}
        onInputChange={onInputChange}
        renderInput={(params) => <TextField {...params} label='Artist' />}
      />
    </div>
  );
}

export default App;
