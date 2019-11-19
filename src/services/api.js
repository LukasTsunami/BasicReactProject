import axios from 'axios';

const prod = 'URL_DE_PRODUCAO';

const url = process.env.NODE_ENV === 'development' ? 'localhost:3000' : prod;

const api = axios.create({
  baseURL: url,
});

export default api;
