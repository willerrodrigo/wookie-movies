import Config from 'react-native-config';

import axios from 'axios';

export const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Authorization: Config.API_AUTHORIZATION
  }
});
