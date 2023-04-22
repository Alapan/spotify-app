import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { Artist } from './types';
import './styles/App.scss';
import { getSpotifyAccessToken } from './api/auth';

function App() {
  const [ artists, setArtists ] = useState([]);

  useEffect(() => {
    const fetchToken = async () => {
      return await getSpotifyAccessToken();
    };
    fetchToken().then((token) => console.log('TOKEN: ', token));
  }, []);

  return (
    <div className='container'>
      <Autocomplete
        disablePortal
        id='artist-input'
        options={artists}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Artist' />}
      />
    </div>
  );
}

export default App;
