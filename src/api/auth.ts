import axios from './axios';

export const getSpotifyAccessToken = async () => {
  const response = await axios.get('/access-token');
  return response.data;
}
