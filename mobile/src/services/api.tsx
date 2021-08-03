import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.36/parlador-ideal/server/public/api',
});

export default api;
