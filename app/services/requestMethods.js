/* eslint-disable prettier/prettier */
import { requests } from './requests';

export const requestFetchHotMovies = () =>
  requests.get({
    url: '/movies/?sort=1&order=2&page=1',
  });

export const requestFetchLatestMovies = () =>
  requests.get({
    url: '/movies?sort=3&order=2&page=1',
  });

export const requestLogIn = data =>
  requests.post({
    url: '/login',
    data,
  });

export const requestRegister = data =>
  requests.post({
    url: '/register',
    data,
  });

export const requestAuthorizeUser = () =>
  requests.get({
    url: '/user',
  });
