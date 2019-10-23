/* eslint-disable prettier/prettier */
import axios from 'axios';
import { apiEndpoint, accessToken } from './constants';

axios.defaults.baseURL = apiEndpoint;

export const requestHelper = ({ method, options }) =>
  axios({
    ...options,
    method,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(accessToken)}`,
    },
  })
    .then(res => res)
    .catch(err => err.response);
