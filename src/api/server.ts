import axios from './axios';

export const getSpotifyAccessToken = async () => {
  const response = await axios.get('/access-token');
  return response.data;
}

export const getArtists = async (searchTerm: string) => {
  const response = await axios.get(`/artists/${searchTerm}`);
  return response.data.items;
}
