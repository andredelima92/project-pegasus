import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.54/parlador-ideal/server/public/api',
});

export default api;
