import React from 'react';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { Artist } from './types';
import './styles/App.scss';

function App() {
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

const artists: Artist[] = [];

export default App;
