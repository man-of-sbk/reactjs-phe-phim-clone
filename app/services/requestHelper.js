/* eslint-disable prettier/prettier */
import axios from 'axios';
import { apiEndpoint } from './constants';

axios.defaults.baseURL = apiEndpoint;

export const requestHelper = ({ method, options }) => axios({
  ...options,
  method,
  // headers: {
  //   // Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
  // },
}).then(res => res).catch(err => err.response);