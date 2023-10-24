import axios from 'axios';

export const apiGitHub = axios.create({
  baseURL: 'https://api.github.com/',
});

export const api = axios.create({
  baseURL: '/api/', //prod
});
