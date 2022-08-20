import axios from 'axios';

export function apiUrl() {
  const apiHost = 'http://localhost:3001/';
  return apiHost;
}

export const $api = axios.create({
  timeout: 10000,
  baseURL: apiUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});
