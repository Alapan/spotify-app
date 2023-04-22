import axios from 'axios';
import qs from 'query-string';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID || '';
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET || '';

export const getSpotifyAccessToken = async () => {
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: clientId,
      password: clientSecret,
    }
  };

  const payload = {
    grant_type: 'client_credentials',
  };
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token',
      qs.stringify(payload),
      headers
    );
    return response.data.access_token;
  } catch (e) {
    console.error('Error getting credentials', e);
  }
}
