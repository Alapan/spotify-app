import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Track } from './types';
import { Avatar, ListItemAvatar, ListItemText, Typography } from '@mui/material';

interface TrackListProps {
  tracks: Track[];
}

export const TrackList: React.FC<TrackListProps> = ({
  tracks
}) => {
  return (
    <List sx={{ width: '100%', maxWidth: 1000, backgroundColor: 'background.paper'}}>
      {tracks.map((track, i) => (
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={track.name} src={track.album.images[0].url} />
          </ListItemAvatar>
          <ListItemText
            primary={track.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  {track.artists[0].name}
                </Typography>
                {` - ${track.album.release_date}`}
              </React.Fragment>
            }
          >
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}
