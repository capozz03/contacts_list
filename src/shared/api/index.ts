import axios, { AxiosRequestConfig } from 'axios';
import { clientCookies } from '../helpers/cookies';

export function apiUrl() {
  const apiHost = 'http://localhost:3001/';
  return apiHost;
}

export const $api = axios.create({
  timeout: 10000,
  baseURL: apiUrl(),
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = clientCookies.getToken();

  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
