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

export const requestFetchSortedMoviesList = data =>
  requests.get({
    url: `/movies/?sort=${data.sort}&page=${data.page}`,
  });

export const requestMovieViaId = id =>
  requests.get({
    url: `/movies/${id}`,
  });

export const requestSearchMovieByName = name =>
  requests.get({
    url: `/search?search=${name}`,
  });

export const requestUpdateUser = data =>
  requests.post({
    url: `/user/update`,
    data,
  });

export const requestUpdateUserAvatar = data =>
  requests.post({
    url: `/user/update`,
    data,
  });

export const requestFetchMovieSeats = movieId =>
  requests.get({
    url: `/bookable_seat/${movieId}`,
  });

export const requestSubmitSeats = ({ movieId, seat }) =>
  requests.post({
    url: `/bookable_seat/${movieId}`,
    data: { seat },
  });
