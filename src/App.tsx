import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { AccessTokenState, Artist } from './types';
import './styles/App.scss';
import { getSpotifyAccessToken } from './api/auth'

function App() {
  const [ artists, setArtists ] = useState([]);
  const [ accessTokenState, setAccessTokenState] = useState<AccessTokenState>({
    access_token: ''
  });

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getSpotifyAccessToken();
      setAccessTokenState(token);
    }
    fetchToken();
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
